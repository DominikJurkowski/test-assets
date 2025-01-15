// /app/api/download/[locale]/route.js
import fs from 'fs';
import path from 'path';

export async function GET() {

  const filePath = path.join(process.cwd(), 'src', 'locales', 'en', 'license.pass');

  if (!fs.existsSync(filePath)) {
    return new Response(JSON.stringify({ error: 'File not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const fileContents = fs.readFileSync(filePath);

  // Serve the file as a download
  return new Response(fileContents, {
    headers: {
      'Content-Type': 'application/octet-stream', // Content type for binary files
      'Content-Disposition': `attachment; filename=license.pass`, // Set the file as downloadable
    },
  });
}
