# Welcome to [Slidev](https://github.com/slidevjs/slidev)!

## Cloudflare Pages

Cloudflare DashboardからGit連携する場合は、次の値を設定します。

- Build command: `pnpm build:cloudflare`
- Build output directory: `dist`
- Node.js version: `24.21.0`（`.node-version`で指定済み）

Wranglerから直接デプロイする場合は、最初にCloudflareへログインしてからデプロイします。

```bash
pnpm exec wrangler login
pnpm deploy
```

ローカルでCloudflare Pages相当の配信を確認する場合:

```bash
pnpm preview:cloudflare
```

To start the slide show:

- `npm install`
- `npm run dev`
- visit <http://localhost:3030>

Edit the [slides.md](./slides.md) to see the changes.

Learn more about Slidev at the [documentation](https://sli.dev/).
