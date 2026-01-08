const { google } = require('googleapis');

async function test() {
  const auth = new google.auth.GoogleAuth({
    keyFile: "./config/service-account-key.json", // correct filename
    scopes: [
      "https://www.googleapis.com/auth/drive",
      "https://www.googleapis.com/auth/spreadsheets",
    ],
  });

  const authClient = await auth.getClient();

  // PROOF of identity
  const drive = google.drive({ version: "v3", auth: authClient });
  const about = await drive.about.get({ fields: "user" });
  console.log("Authenticated as:", about.data.user.emailAddress);

  // 🔥 CREATE SHEET VIA DRIVE API
  const file = await drive.files.create({
    requestBody: {
      name: "FINAL PERMISSION TEST",
      mimeType: "application/vnd.google-apps.spreadsheet",
    },
  });

  console.log("✅ Sheet created:", file.data.id);
}

test().catch(err => {
  console.error("❌ ERROR:", err.response?.data || err);
});