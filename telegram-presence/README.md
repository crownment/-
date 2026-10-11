# Telegram presence backend

This folder contains a Node.js API scaffold for the Telegram profile card. It is separate from the GitHub Pages frontend so account credentials never belong in public site code.

## Status limitation

Telegram profile-photo retrieval can be refreshed by an authenticated client. The status of the same account used by this backend is not a dependable indicator of whether you are actively using Telegram on your phone: keeping this client connected can itself affect how Telegram presents your account's presence. Treat the status field as best-effort, not a perfect real-time mirror.

## Deployment requirements

Deploy this folder as a Node.js web service on a host with private environment variables. Use `npm install` and `npm start`. Configure these values privately on the host:

- TELEGRAM_API_ID
- TELEGRAM_API_HASH
- TELEGRAM_SESSION
- ALLOWED_ORIGIN=https://v.pntr.dev

Obtain API credentials from Telegram's official developer tools. Never place API credentials or a session string in frontend JavaScript, a public repository, or chat. Do not share your Telegram password or login code with anyone. This repository intentionally does not include an interactive login utility; the account authorization step must be handled locally and securely before the backend can run.

Once deployed, the API endpoints are `/api/telegram` and `/api/telegram/photo`. The backend exposes only profile-card data and the profile photo; it has no message-reading or message-sending routes.

The frontend still needs the deployed backend URL configured before live data can appear on the site.
