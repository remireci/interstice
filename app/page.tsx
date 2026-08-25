// app/page.tsx
// import Link from "next/link";

// export default function HomePage() {
//   return (
//     <div className="px-6 py-16 max-w-3xl">
//       <h1 className="text-5xl mb-6">INTERSTICE</h1>

//       <p className="mb-16 text-lg">immanente kritiek / systeemkritiek</p>

//       <section className="mb-16">
//         <h2 className="text-sm uppercase mb-2">Interventie</h2>
//         <Link href="/interventies/christophe-van-gerrewey-de-witte-raaf-lezersreactie">
//           <h3 className="text-2xl mb-2">
//             Lezersreactie op Christophe Van Gerrewey
//           </h3>
//           <p className="text-gray-600">
//             Niet opgenomen reactie op een editoriaal in De Witte Raaf.
//           </p>
//         </Link>
//       </section>

//       <section>
//         <h2 className="text-sm uppercase mb-2">Notitie</h2>
//         <Link href="/notities/tegen-de-ideologie-van-verbinding">
//           <h3 className="text-2xl mb-2">Tegen de ideologie van verbinding</h3>
//         </Link>
//       </section>
//     </div>
//   );
// }

import { redirect } from "next/navigation";

export default function RootPage() {
  redirect("/en");
}
