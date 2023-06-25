let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/Tengo Miedo.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, { audio: { url: vn }, seconds: '1934.4', ptt: true, mimetype: 'audio/mpeg', fileName: `Tengo Miedo.mp3` }, { quoted: m })}
handler.customPrefix = /tengo miedo|TENGO MIEDO|Tengo miedo/
handler.command = /^(tengo miedo|TENGO MIEDO|Tengo miedo?$)/
export default handler

/*
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/Tengo Miedo.mp3'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `👑 𝐓𝐡𝐞 𝐌𝐲𝐬𝐭𝐢𝐜 - 𝐁𝐨𝐭 👑`, "body": `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://github.com/BrunoSobrino/TheMystic-Bot-MD`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /tengo miedo|TENGO MIEDO|Tengo miedo/
handler.command = /^(tengo miedo|TENGO MIEDO|Tengo miedo?$)/
export default handler
*/
