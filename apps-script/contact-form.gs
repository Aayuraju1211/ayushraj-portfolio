/**
 * Portfolio contact form handler (Google Apps Script).
 * Saves each message to a "Messages" tab in your Google Sheet and emails you a copy.
 *
 * Setup:
 *  1. Create a Google Sheet, e.g. "Portfolio Messages".
 *  2. In the Sheet: Extensions > Apps Script. Delete the sample code, paste this whole file, save.
 *  3. Deploy > New deployment > gear icon > Web app.
 *       Execute as: Me    Who has access: Anyone
 *  4. Click Deploy and authorize. On "Google hasn't verified this app": Advanced > Go to project (unsafe).
 *     This is expected, it's your own script.
 *  5. Copy the Web app URL (ends in /exec) into CONTACT_ENDPOINT in src/components/Connect.tsx.
 *
 * After editing this script later: Deploy > Manage deployments > pencil > Version: New version > Deploy.
 * Otherwise the URL keeps serving the old code.
 */

const SHEET_NAME = "Messages";
const HEADERS = ["Received", "Name, email or phone", "Message"];

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // Honeypot: real visitors never see or fill this field.
    if (data.website) return json({ ok: true });

    // "contact" is whatever the visitor chose to share: a name, email, or phone number.
    const contact = String(data.contact || "").trim().slice(0, 200);
    const message = String(data.message || "").trim().slice(0, 5000);
    if (!contact || !message) return json({ ok: false, error: "missing_fields" });

    getSheet().appendRow([new Date(), safeCell(contact), safeCell(message)]);

    const mail = {
      to: Session.getEffectiveUser().getEmail(),
      subject: "New portfolio message from " + contact,
      body: "From: " + contact + "\n\n" + message + "\n\nAll messages: " + SpreadsheetApp.getActiveSpreadsheet().getUrl(),
    };
    // Lets you hit Reply directly when the visitor left an email address.
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)) mail.replyTo = contact;
    MailApp.sendEmail(mail);

    return json({ ok: true });
  } catch (err) {
    console.error(err);
    return json({ ok: false, error: "server_error" });
  }
}

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  // Keeps the header row in sync if columns change (e.g. the Name column added later).
  const header = sheet.getRange(1, 1, 1, HEADERS.length);
  if (header.getValues()[0].join() !== HEADERS.join()) {
    header.setValues([HEADERS]);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

// Stops text like "=IMPORTXML(...)" from running as a formula in your sheet.
function safeCell(value) {
  return /^[=+\-@]/.test(value) ? "'" + value : value;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
