npx vercel build; if ($?) { npx @cloudflare/next-on-pages --skip-build; if ($?) { npx wrangler pages deploy .vercel/output/static --project-name seklik-ai-pages --branch main } }
