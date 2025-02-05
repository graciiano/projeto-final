// "use client";

// import { locales, localeNames, type Locale } from "@/i18n";
// import { usePathname, useRouter } from "@/i18n/routing";

// export function LanguageSwitcher() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const currentLocale = pathname.split("/")[1] as Locale;

//   const handleChangeLanguage = (newLocale: Locale) => {
//     router.replace(pathname, { locale: newLocale });
//   };

//   return (
//     <div className="flex gap-2">
//       {locales.map((locale) => (
//         <button
//           key={locale}
//           onClick={() => handleChangeLanguage(locale)}
//           disabled={locale === currentLocale}
//           className={`px-4 py-2 rounded text-sm ${
//             locale === currentLocale
//               ? "bg-blue-600 text-white cursor-default"
//               : "bg-gray-200 hover:bg-gray-300"
//           }`}
//         >
//           {localeNames[locale]}
//         </button>
//       ))}
//     </div>
//   );
// }
