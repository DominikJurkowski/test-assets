import fs from 'fs';
import path from 'path';

async function getTranslations(locale: string) {
 const filePath = path.join(process.cwd(), 'src', 'locales', locale, 'common.json');
//  const filePath = path.join('public/locales/en/common.json'); // also working locally and prod

 try {
   const fileContent = await fs.promises.readFile(filePath, 'utf-8');
   return JSON.parse(fileContent);
 } catch (error) {
   console.error(`Error loading translations for locale "${locale}":`, error);
   return { greetings: 'Error' }; // Fallback value
 }
}

export default async function Test() {
  const locale = 'en';
  const transaltions = await getTranslations(locale); // works locally and prod

  console.log(process.env.NEXT_PUBLIC_APP_URL);

  // const downloadUrl = path.join('src', 'locales', locale, 'license.pass'); // not working
  const downloadUrl = path.join(process.cwd(), 'src', 'locales', locale, 'license.pass'); // not working

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       <h1>{transaltions.greetings}</h1>

       <a href={downloadUrl} download>Download License</a>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
};
