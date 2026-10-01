import * as XLSX from "xlsx";

import { newsletterSupabase } from "../app/lib/supabase/newsletter";

const SOURCE = "previous-interstice-mailing-2026";
const LOCALE = "en";

type ExcelRow = Record<string, unknown>;

function normalizeRow(row: ExcelRow) {
  const normalized: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(row)) {
    normalized[key.trim().toLowerCase()] = value;
  }

  const emailValue =
    normalized.email ?? normalized["e-mail"] ?? normalized.mail;

  const nameValue =
    normalized.name ?? normalized.naam ?? normalized["full name"];

  const email =
    typeof emailValue === "string" ? emailValue.trim().toLowerCase() : "";

  const name = typeof nameValue === "string" ? nameValue.trim() : null;

  return {
    email,
    name: name || null,
  };
}

function validEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function main() {
  const filePath = process.argv[2];

  if (!filePath) {
    throw new Error("Usage: import-outreach-contacts.ts path/to/contacts.xlsx");
  }

  const workbook = XLSX.readFile(filePath);

  const firstSheetName = workbook.SheetNames[0];

  if (!firstSheetName) {
    throw new Error("Excel workbook contains no sheets");
  }

  const sheet = workbook.Sheets[firstSheetName];

  const rows = XLSX.utils.sheet_to_json<ExcelRow>(sheet, {
    defval: "",
  });

  console.log(`Rows in Excel: ${rows.length}`);

  /*
   * Normalize and validate.
   */
  const contacts = rows.map(normalizeRow).filter((contact) => {
    if (!contact.email) {
      return false;
    }

    if (!validEmail(contact.email)) {
      console.warn(`INVALID EMAIL — skipped: ${contact.email}`);

      return false;
    }

    return true;
  });

  /*
   * Deduplicate within the Excel file.
   */
  const uniqueContacts = [
    ...new Map(contacts.map((contact) => [contact.email, contact])).values(),
  ];

  console.log(`Valid unique contacts: ${uniqueContacts.length}`);

  if (!uniqueContacts.length) {
    console.log("Nothing to import.");
    return;
  }

  /*
   * Find addresses already in the outreach table.
   */
  const emails = uniqueContacts.map((contact) => contact.email);

  const { data: existing, error: existingError } = await newsletterSupabase
    .from("newsletter_outreach_contacts")
    .select("email")
    .in("email", emails);

  if (existingError) {
    throw existingError;
  }

  const existingEmails = new Set(
    (existing ?? []).map((row) => row.email.toLowerCase()),
  );

  const newContacts = uniqueContacts.filter(
    (contact) => !existingEmails.has(contact.email),
  );

  console.log(
    `Already in Supabase: ${uniqueContacts.length - newContacts.length}`,
  );

  console.log(`New contacts to insert: ${newContacts.length}`);

  if (!newContacts.length) {
    console.log("Nothing new to import.");
    return;
  }

  /*
   * Insert in modest batches.
   */
  const BATCH_SIZE = 100;

  let inserted = 0;

  for (let index = 0; index < newContacts.length; index += BATCH_SIZE) {
    const batch = newContacts
      .slice(index, index + BATCH_SIZE)
      .map((contact) => ({
        email: contact.email,
        name: contact.name,
        locale: LOCALE,
        source: SOURCE,
        notes: null,

        /*
         * We deliberately leave these to their
         * database defaults / NULL values:
         *
         * contacted_at
         * subscribed_at
         * do_not_contact
         */
      }));

    const { error } = await newsletterSupabase
      .from("newsletter_outreach_contacts")
      .insert(batch);

    if (error) {
      throw error;
    }

    inserted += batch.length;

    console.log(`Inserted ${inserted}/${newContacts.length}`);
  }

  console.log("");
  console.log("Import complete.");
  console.log(`Inserted: ${inserted}`);
  console.log(`Source: ${SOURCE}`);
  console.log(`Locale: ${LOCALE}`);
}

main().catch((error) => {
  console.error("Import failed:", error);
  process.exitCode = 1;
});
