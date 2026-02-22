# OpsPilot — demo scaffold

This scaffold was created to match the project-specs: React + TypeScript frontend using Redux and SCSS, plus a minimal Express AI endpoint stub.

Quick start:

1. Install dependencies

```bash
cd OpsPilot
npm install
```

2. Run dev frontend

```bash
npm run dev
```

3. Start the server (AI stub)

```bash
npm run start:server
```

Notes:
- Auth is a demo in-memory token via Redux (see `src/store/authSlice.ts`).
- SCSS is set up; edit `src/styles/main.scss`.
- Mock data is in `data/` and consumed by `src/services/api.ts`.
- Replace `server/index.js` with a proper AI integration (OpenAI) when ready.
- Replace `server/index.js` with a proper AI integration (OpenAI) when ready. If you set `OPENAI_API_KEY` in your environment, the server will attempt to use OpenAI; otherwise it returns a simulated response (no credentials included).
