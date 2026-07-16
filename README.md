# UNO MÁS — empleado digital

Landing comercial de [unomas.digital](https://unomas.digital), construida con Next.js y publicada como web estática en GitHub Pages.

## Desarrollo

```bash
npm ci
npm run dev
```

## Comprobación de producción

```bash
npm run build
```

El resultado estático se genera en `out/`.

## Publicación

Cada cambio enviado a la rama `main` ejecuta `.github/workflows/deploy-pages.yml` y publica automáticamente la nueva versión en GitHub Pages.

En **Settings → Pages**, la fuente de publicación debe estar configurada como **GitHub Actions** y el dominio personalizado como `unomas.digital`.
