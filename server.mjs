import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.png': 'image/png' };
const port = Number(process.env.PORT || 5173);
const server = http.createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const relative = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
    const assetPath = path.resolve(root, relative);
    const extension = path.extname(assetPath);
    const allowed = ['index.html', 'styles.css', 'script.js'].includes(relative) || (relative.startsWith('imagens/') && extension === '.png');
    if (!assetPath.startsWith(root + path.sep) || !allowed || !(await stat(assetPath)).isFile()) {
      response.writeHead(404); response.end('Não encontrado'); return;
    }
    response.writeHead(200, { 'Content-Type': mime[extension] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
    response.end(await readFile(assetPath));
  } catch {
    response.writeHead(404); response.end('Não encontrado');
  }
});
server.listen(port, '127.0.0.1', () => console.log(`Portfólio: http://localhost:${port}`));
