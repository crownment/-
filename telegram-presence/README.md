# Telegram presence backend

This folder contains a small Node.js API for the Telegram profile card. It is separate from the GitHub Pages frontend because the frontend must never contain Telegram account credentials.

## Important status limitation

Telegram profile-photo retrieval can be refreshed by an authenticated client. The status of the *same account used by this backend* is not a dependable indicator of whether you are actively using Telegram on your phone: keeping this client connected can itself affect how Telegram presents your account's presence. Treat the status field as best-effort, not a perfect real-time mirror.

## Deploy

1. Deploy this folder as a Node.js web service on a host that supports private environment variables. Use `npm install` and `npm start`.
2. Set these environment variables privately on the host:
   - `TELEGRAM_API_ID`
   - `TELEGRAM_API_HASH`
   - `TELEGRAM_SESSION`
   - `ALLOWED_ORIGIN=https://v.pntr.dev`
3. Obtain your API ID and API hash through Telegram's official developer tools. Do not put them in frontend JavaScript.
4. Create the session locally on your own computer using the steps below. Never send the session string to anyone or commit it to GitHub.
5. Once deployed, the API endpoints are `/api/telegram` and `/api/telegram/photo`.

## Create the session locally

Use Node.js 20 or newer in this folder:

1. Run `npm install`.
2. Set `TELEGRAM_API_ID` and `TELEGRAM_API_HASH` as local environment variables in your terminal.
3. Run `node login.mjs` and complete Telegram's login prompts on your own computer.
4. Copy the resulting session string directly into the host's private `TELEGRAM_SESSION` setting. Do not send it in a message, add it to a file in this repository, or take a screenshot showing it.
5. After configuring the host, remove the session string from your terminal scrollback if practical. If you think it was exposed, terminate that session from Telegram's Devices settings.

The backend exposes only the profile-card data and photo endpoints. It does not provide message-reading or message-sending routes.
