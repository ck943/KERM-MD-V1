/*
_  ______   _____ _____ _____ _   _
| |/ / ___| |_   _| ____/___ | | | |
| ' / |  _    | | |  _|| |   | |_| |
| . \ |_| |   | | | |__| |___|  _  |
|_|\_\____|   |_| |_____\____|_| |_|

ANYWAY, YOU MUST GIVE CREDIT TO MY CODE WHEN COPY IT
CONTACT ME HERE +263717115530
YT: KermHackTools
Github: Kgtech-cmr
*/


const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PUT YOUR SESSION ID HERE",eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0hKWVdUWkVKU2lyU0tmWlpVSldGWEhkNWVNU2w4dms0WUt1azN1ZGZFTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOUdvc3NBUFBPUHlnWlllczd1aUhCUkgxTSsxSC9MNkNuL1RNUWhFMUpnMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIySzBKOGpDNFgyODhwOVYwcjFqYUx6WFh3SHNvZTlYc2szaGxHMVd5V1ZJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6K0V2bCtxeGpyWWRLazZvaW5GZW9od0l2VDU4M0J1K2JUZTZwODBmOEFBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVHS2U4eGE0aGZLYTZGWFBjKzQvdkdJNmFJUHRGK0NUZmMvMEhVdGpJMVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkswOG1JZy85S2tieS83ZGZ5V1N1VTI3c2FlTWJFWnQ0allyK2EzZGIreHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUdxR1FPWkw4bDVFWTNZRVZxZHFwVjl4bG5FK1pWbE9sU3RGQnd5NnZGRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWk00K1cxUGJqWHJQQUdjTmFENXlUN1dERE41a0IzVzViQWVGUEFNRGsyYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkppbktzbjlRS043dEZzdC9Zc3ZmNUUvWGd4b3RvWktHTWdxM2F0OWJ1aGdUZjI4UlY3cGM5WnQ5bUEwK0cwRWIrSVZEUFIvc0twNStkbUVPTmNPWUFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE1LCJhZHZTZWNyZXRLZXkiOiJWZm5pc0s1a3ZHQXVNSzZ5SkFNRVVSYnF6VFB2NzJ0QStMcXZFVGhzd3hjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJacjg1Vk1BWFIzdXN0MEVqcFcyblh3IiwicGhvbmVJZCI6Ijc2NThlOTA2LWM0ZWMtNDUzYi1hNGM2LTEzYWRjYjI1NWRlNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGV3VLNmQyQk0yM3hONExPenUwd2NzTzZESGs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRkxKMC9pOXc0WFk1VXNJaklLaHdsOXRHVjdFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlhGN0pWQUo5IiwibWUiOnsiaWQiOiIyNjM3MTcxMTU1MzA6N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJVTktOT1dOIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLbXYyczBIRU5pcHNiNEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJGcHplOW85cWFjazkzalM0Q0E5dk5hd21Ua2t2MG82cmFVS2xrZ0V6bVFrPSIsImFjY291bnRTaWduYXR1cmUiOiJNc3puYXBtKzFVT05uVVFZRm83bFBZTmwraUkrWHJxMUI1NmhFMndBdzYxelg4MVhRZ3FIbnlKVU9Jb1RCa2hBL2NkdWZDcW9UM0xxL3NnWkdoT3lCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSGQ5THhmUVZGTnNZVkRZRTJiV2tabG9iNndoY2xPOE12ckcyUEJBVm5tTU00alBLdUtnTzEvcDFjUi9SR2pFZlAvUlNodzJsZ0FqbWF3N01HaTlVQkE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3MTcxMTU1MzA6N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSYWMzdmFQYW1uSlBkNDB1QWdQYnpXc0prNUpMOUtPcTJsQ3BaSUJNNWtKIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQxNDQ0MzI3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUkwSiJ9
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "private",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/yw2ty2.jpeg",
ALIVE_MSG: process.env.ALIVE_MSG || "_Hi 💁🏽 How Can I Assist You. Am alive Now._",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
FAKE_TYPING: process.env.FAKE_TYPING || "false",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
AUTO_REACT: process.env.AUTO_REACT || "false",
HEART_REACT: process.env.HEART_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "『𝗞𝗘𝗥𝗠 𝗠𝗗 𝗩1』",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
