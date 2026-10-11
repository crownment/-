import input from "input";
import { TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions/index.js";

const apiId = Number(process.env.TELEGRAM_API_ID || 0);
const apiHash = process.env.TELEGRAM_API_HASH || "";

if (!apiId || !apiHash) {
  console.error("Set TELEGRAM_API_ID and TELEGRAM_API_HASH as local environment variables first.");
  process.exit(1);
}

const client = new TelegramClient(new StringSession(""), apiId, apiHash, {
  connectionRetries: 5
});

await client.start({
  phoneNumber: async () => input.text("Your Telegram phone number: "),
  password: async () => input.text("Your Telegram 2-step verification password (if enabled): "),
  phoneCode: async () => input.text("Telegram login code: "),
  onError: error => console.error(error.message)
});

console.log("\nAuthorization complete. Copy the session string below directly into your hosting provider's private TELEGRAM_SESSION environment variable.");
console.log("Never paste this string into chat, GitHub, a website file, or a screenshot.\n");
console.log(client.session.save());
await client.disconnect();
