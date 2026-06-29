# Gatopedia: Trivial Felino

Juego web estatico en castellano sobre gatos: adopcion, razas, cuidados, veterinario, alimentacion, convivencia y voluntariado.

## Jugar en local

Abre `index.html` directamente en el navegador o levanta un servidor local:

```bash
python3 -m http.server 4173
```

Despues visita:

```text
http://127.0.0.1:4173
```

Tambien puedes abrir directamente la partida con:

```text
http://127.0.0.1:4173/#jugar
```

## Publicar en Vercel

No hace falta Supabase para esta version porque no hay usuarios, rankings globales ni base de datos.

Opcion rapida:

```bash
npx vercel deploy --prod
```

Opcion con GitHub:

1. Crea un repositorio en GitHub.
2. Sube estos archivos.
3. En Vercel, importa el repositorio.
4. Framework: `Other`.
5. Build command: dejar vacio.
6. Output directory: dejar vacio.

Vercel publicara `index.html` como web estatica.
