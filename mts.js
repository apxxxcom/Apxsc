const { modul } = require('./module');
const { axios, baileys, chalk, cheerio, child_process, crypto, fs, ffmpeg, jsobfus, moment, ms, speed, util } = modul;
const { exec, spawn, execSync } = child_process
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, reSize, generateProfilePicture } = require('./lib/myfunc')
const hariRaya = new Date('February 26, 2023 00:00:00')
const sekarang = new Date().getTime()
const Selisih = hariRaya - sekarang
let timestamp = speed()
const kecepatan = speed() - timestamp
//━━━━━━━━━MTS BOTZ━━━━━━━━━━
global.wak = JSON.parse(fs.readFileSync('./edit_info_di_sini.json'))
if (global.wak) global.wak = {
namaowner: {},
noowner: {},
packname: {},
author: {},
...(global.wak || {})
}

const { edit_payment,QRgopay,NOgopay,QRdana,NOdana,QRovo,NOovo,QRshopee,NOshopee,QRallpay } = require('./edit_produk/edit_payment')

global.owner = [`${wak.noowner}`,`6285641598235`]
const kata_suruh = (`${wak.namaowner}`)
const { judul1,produk1 } = require('./edit_produk/judul1')
const { judul2,produk2 } = require('./edit_produk/judul2')
const { judul3,produk3 } = require('./edit_produk/judul3')
const { judul4,produk4 } = require('./edit_produk/judul4')
const { judul5,produk5 } = require('./edit_produk/judul5')
const { judul6,produk6 } = require('./edit_produk/judul6')
const { judul7,produk7 } = require('./edit_produk/judul7')
//━━━━━━━━━━━[KALIMAT]━━━━━━━━━━━━━━━
global.mess = {
wait: '𝗣𝗿𝗼𝘀𝗲𝘀♻️',
loding: '𝗟𝗼𝗮𝗱𝗶𝗻𝗴.....',
succes: '𝗦𝘂𝗸𝘀𝗲𝘀✅',
aksesmts: '𝗦𝗲𝗽𝗲𝗿𝘁𝗶𝗻𝘆𝗮 𝗔𝗻𝗱𝗮 𝗕𝗲𝗹𝘂𝗺 𝗧𝗲𝗿𝗔𝗸𝘀𝗲𝘀🤔',
premiummts: '𝗦𝗲𝗽𝗲𝗿𝘁𝗶𝗻𝘆𝗮 𝗔𝗻𝗱𝗮 𝗕𝘂𝗸𝗮𝗻 𝗨𝘀𝗲𝗿 𝗣𝗿𝗲𝗺𝗶𝘂𝗺🤔',
vvipmts: '𝗦𝗲𝗽𝗲𝗿𝘁𝗶𝗻𝘆𝗮 𝗔𝗻𝗱𝗮 𝗕𝘂𝗸𝗮𝗻 𝗨𝘀𝗲𝗿 𝗩𝗶𝗽🤔',
daftarusermts: '𝗦𝗲𝗽𝗲𝗿𝘁𝗶𝗻𝘆𝗮 𝗔𝗻𝗱𝗮 𝗕𝗲𝗹𝘂𝗺 𝗕𝗲𝗿𝗹𝗮𝗻𝗴𝗴𝗮𝗻𝗮𝗻🤔',
pemilikbot: '𝗦𝗲𝗽𝗲𝗿𝘁𝗶𝗻𝘆𝗮 𝗔𝗻𝗱𝗮 𝗕𝘂𝗸𝗮𝗻 𝗣𝗲𝗺𝗶𝗹𝗶𝗸 𝗕𝗼𝘁 𝗜𝗻𝗶🤔',
dalamgroup: '𝗙𝗶𝘁𝘂𝗿 𝗜𝗻𝗶 𝗞𝗵𝘂𝘀𝘂𝘀 𝗗𝗮𝗹𝗮𝗺 𝗚𝗿𝗼𝘂𝗽😐',
botadmin: '𝗕𝗼𝘁 𝗛𝗮𝗿𝘂𝘀 𝗠𝗲𝗻𝗷𝗮𝗱𝗶 𝗔𝗱𝗺𝗶𝗻😅',
adminonly: '𝗔𝗻𝗱𝗮 𝗕𝘂𝗸𝗮𝗻 𝗔𝗱𝗺𝗶𝗻 𝗗𝗶 𝗚𝗿𝗼𝘂𝗽 𝗜𝗻𝗶😑',
}
/**━━━━━━━━━━━━━━━━━━━━━━━━━━
Untuk Memunculkan Teks Di Atas
Ketik : ${contoh}
━━━━━━━━━━━━━━━━━━━━━━━━━━
TOLONG JANGAN DI GANTI NAMA MTS DI ATAS
KARNA YANG MEMBUAT PINTASAN ALL DI ATAS
ADALAH MTS STORE WA : 089667826759
━━━━━━━━━━━━━━━━━━━━━━━━━━**/
const { buttonvirus } = require('./scrape/buttonvirus')
const os = require('os')
const { color, bgcolor } = require('./lib/color')
const { uptotelegra } = require('./scrape/upload')
const tiktok = require('./scrape/tiktok')
//━━━━━━━━━━━━━━━━━━━━━━━━━━
global.prefa = ['','.']

module.exports = diablo = async (mts, mts4you, chatUpdate, store) => {
try {
const body = (mts4you.mtype === 'conversation') ? mts4you.message.conversation : (mts4you.mtype == 'imageMessage') ? mts4you.message.imageMessage.caption : (mts4you.mtype == 'videoMessage') ? mts4you.message.videoMessage.caption : (mts4you.mtype == 'extendedTextMessage') ? mts4you.message.extendedTextMessage.text : (mts4you.mtype == 'buttonsResponseMessage') ? mts4you.message.buttonsResponseMessage.selectedButtonId : (mts4you.mtype == 'listResponseMessage') ? mts4you.message.listResponseMessage.singleSelectReply.selectedRowId : (mts4you.mtype == 'templateButtonReplyMessage') ? mts4you.message.templateButtonReplyMessage.selectedId : (mts4you.mtype === 'messageContextInfo') ? (mts4you.message.buttonsResponseMessage?.selectedButtonId || mts4you.message.listResponseMessage?.singleSelectReply.selectedRowId || mts4you.text) : ''
const budy = (typeof mts4you.text == 'string' ? mts4you.text : '')
const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®=????+✓_=|~!?@#%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®=????+✓_=|~!?@#%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const content = JSON.stringify(mts4you.message)
const { type, quotedMsg, mentioned, now, fromMe } = mts4you
const isCmd = body.startsWith(prefix)
const from = mts4you.key.remoteJid
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = mts4you.pushName || "No Name"
const botNumber = await mts.decodeJid(mts.user.id)
const itsNe = mts4you.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = mts4you.quoted ? mts4you.quoted : mts4you
const mime = (quoted.msg || quoted).mimetype || ''
const jam = moment.tz('asia/jakarta').format('HH:mm')
const dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
const waktumts = dt.charAt(0).toUpperCase() + dt.slice(1)
const wib = moment.tz('Asia/Jakarta').format('HH:mm')
const wita = moment.tz('Asia/Makassar').format('HH:mm')
const wit = moment.tz('Asia/Jayapura').format('HH:mm')   
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')  
const isMedia = /image|video|sticker|audio/.test(mime)
const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedMsg = (type == 'extendedTextMessage')
		const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
		const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
		const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
		const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
		const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false
const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
const jmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))
const jdetik = Math.floor( Selisih % (1000 * 60) / 1000)
const sender = mts4you.isGroup ? (mts4you.key.participant ? mts4you.key.participant : mts4you.participant) : mts4you.key.remoteJid
 const isGroup = mts4you.chat.endsWith('@g.us')
const groupMetadata = mts4you.isGroup ? await mts.groupMetadata(mts4you.chat).catch(e => {}) : ''
const groupName = mts4you.isGroup ? groupMetadata.subject : ''
const participants = mts4you.isGroup ? await groupMetadata.participants : ''
const groupAdmins = mts4you.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = mts4you.isGroup ? groupMetadata.owner : ''
const groupMembers = mts4you.isGroup ? groupMetadata.participants : ''
	const isBotAdmins = mts4you.isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = mts4you.isGroup ? groupAdmins.includes(mts4you.sender) : false
	const isAdmins = mts4you.isGroup ? groupAdmins.includes(mts4you.sender) : false	
//━━━━━━━━━━━━━━━━━━━━━━━━━━
const targetnya = (`𝗡𝗼𝗺𝗼𝗿 𝗧𝗮𝗿𝗴𝗲𝘁 𝗡𝘆𝗮 𝗠𝗮𝗻𝗮?\nContoh : ${command} 628xxx`)
	
if (!mts.public) {
if (!mts4you.key.fromMe) return
}

if (!mts4you.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(mts4you.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix + command} [${args.length}]`), 'from', color(pushname))
}
if (mts4you.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(mts4you.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix + command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
}

if (mts4you.sender.startsWith('212')) return mts.updateBlockStatus(mts4you.sender, 'block')

ppuser = 'https://raw.githubusercontent.com/JasRunJ/filenya/master/a4cab58929e036c18d659875d422244d.jpg'
ppnyauser = await reSize(ppuser, 200, 200)

const lep = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `${wak.namaowner}
${wak.noowner}`, 
"jpegThumbnail": ppnyauser
}
}
}

if (command) {
mts.sendPresenceUpdate('composing', from)
mts.readMessages([mts4you.key])
}

async function replyNya(teks) {
   const buttonsDefault = [{ quickReplyButton: { displayText : `${buttonvirus}`, id : `.menu` } }] 
   const buttonMessage = { 
text: teks, 
footer: "", 
templateButtons: buttonsDefault, 
image: {url: ppnyauser}   
   }
   return mts.sendMessage(from, buttonMessage)
}

async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true,
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `mts`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}

async function styletext(teks) {
return new Promise((resolve, reject) => {
axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
.then(({ data }) => {

let $ = cheerio.load(data)
let hasil = []
$('table > tbody > tr').each(function (a, b) {
hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
})
resolve(hasil)
})
})
}

async function sendBugcrash(jid, title, description, footer, thumbnail, ownerBusines, produk, productIdImg) {
let prod = {
listMessage: {
title: title,
description: description,
listType: 2,
productListInfo: {
productSections: [{
title: title,
products: produk
}],
headerImage: {
productId: productIdImg,
jpegThumbnail: thumbnail
},
businessOwnerJid: ownerBusines
},
footerText: footer,
}
}
let progene = await generateWAMessageFromContent(jid, prod)
return mts.relayMessage(progene.key.remoteJid, progene.message, {
messageId: ""
})
}
switch (command) {
case '.menu':
case '#meu':
case 'menu': {
mts4you.reply(mess.loding)
let maiiyek = `🛍️️𝗕𝗢𝗧 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗦𝗧𝗢𝗥𝗘🛍️
Hallo Kak👋 ${mts4you.pushName}

╭───═[ 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 ]═─────⋆
│╭───────────────···
││➺ 𝙽𝙰𝙼𝙰 : ${wak.namaowner}
││➺ 𝙽𝙾𝙼𝙾𝚁 : ${wak.noowner}
││➺ 𝙱𝙾𝚃 : 𝚂𝚃𝙾𝚁𝙴
│╰───────────────···
│
├──═[ 𝗦𝗧𝗢𝗥𝗘 𝗠𝗘𝗡𝗨 ]═───⋆
│╭───────────────···
││➣ store
││➣ payment
││➣ done (Status Trx Done)
││➣ proses (Status Trx Proses)
││➣ batal (Status Trx Batal)
││➣ tunda (Status Trx Tunda)
│╰───────────────···
├──═[ 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨 ]═───⋆
│╭───────────────···
││➣ culik 628xxx
││➣ kick @
││➣ hidetag (balas text)
││➣ tagall (balas text)
││➣ setppgc (balas foto)
││➣ setsubject (balas text)
││➣ setdesc (balas text)
││➣ linkgc
││➣ resetlinkgc
│╰───────────────···
├──═[ 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗠𝗔𝗞𝗘𝗥 ]═───⋆
│╭───────────────···
││➣ sticker (balas foto)
││➣ sgif (balas video)
││➣ smeme (balas foto+text1|text2)
││➣ emojimix (emoji1+emoji2)
│╰───────────────···
├──═[ 𝗖𝗢𝗡𝗖𝗘𝗥𝗧 𝗠𝗘𝗡𝗨 ]═───⋆
│╭───────────────···
││➣ tourl (balas foto/video)
││➣ ytplay (balas link yt)
││➣ y2mate (balas link yt)
││➣ snaptik (balas link tt)
│╰───────────────···
╰───────────────────⋆`
mts.sendMessage(mts4you.chat, { image: { url: 'https://b.top4top.io/p_2683roc9o5.jpg' }, caption: maiiyek })
}
break

case 'd':
case 'done':
text_done = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗕𝗘𝗥𝗛𝗔𝗦𝗜𝗟 」

📆 𝗧𝗮𝗻𝗴𝗴𝗮𝗹: ${tanggal}
🕰️ 𝗪𝗮𝗸𝘁𝘂: ${jam}
✨ 𝗦𝘁𝗮𝘁𝘂𝘀: Berhasil

𝗧𝗲𝗿𝗶𝗺𝗮𝗸𝗮𝘀𝗶𝗵 𝗧𝗲𝗹𝗮𝗵 𝗢𝗿𝗱𝗲𝗿 𝗗𝗶 ${wak.namaowner}
𝗗𝗶 𝗧𝘂𝗻𝗴𝗴𝘂 𝗢𝗿𝗱𝗲𝗿𝗮𝗻 𝗦𝗲𝗹𝗮𝗻𝗷𝘂𝘁𝗻𝘆𝗮☺️`
mts4you.reply(text_done)
break

case 'proses':
text_proses = `「 𝗦𝗘𝗗𝗔𝗡𝗚 𝗗𝗜 𝗣𝗥𝗢𝗦𝗘𝗦 」

𝗛𝗮𝗿𝗮𝗽 𝗧𝘂𝗻𝗴𝗴𝘂 𝗦𝗲𝗯𝗲𝗻𝘁𝗮𝗿
𝗣𝗿𝗼𝗱𝘂𝗸 𝗦𝗲𝗱𝗮𝗻𝗴 𝗗𝗶 𝗣𝗿𝗼𝘀𝗲𝘀️`
mts4you.reply(text_proses)
break

case 'batal':
text_trxbatal = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗕𝗔𝗧𝗔𝗟 」

📆 𝗧𝗮𝗻𝗴𝗴𝗮𝗹: ${tanggal}
🕰️ 𝗪𝗮𝗸𝘁𝘂: ${jam}
✨ 𝗦𝘁𝗮𝘁𝘂𝘀: Batal

𝗦𝗲𝗹𝘂𝗿𝘂𝗵 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗕𝗮𝘁𝗮𝗹`
mts4you.reply(text_trxbatal)
break

case 'tunda':
text_trxpending = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚 」

𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚
𝗛𝗔𝗥𝗔𝗣 𝗕𝗘𝗥𝗦𝗔𝗕𝗔𝗥`
mts4you.reply(text_trxpending)
break

case 'emojimix': {
let [emoji1, emoji2] = text.split`+`
if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
mts4you.reply(mess.wait)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await mts.sendImageAsSticker(mts4you.chat, res.url, mts4you, { packname: wak.packname, author: wak.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break

case 'sticker':
case 's':
case 'stickergif':
case 'sgif': {
if (!quoted) throw `*Balas Video/Image Dengan Caption* ${prefix + command}`
mts4you.reply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await mts.sendImageAsSticker(mts4you.chat, media, mts4you, { packname: wak.packname, author: wak.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return mts4you.reply('*Maksimal 10 detik!*')
let media = await quoted.download()
let encmedia = await mts.sendVideoAsSticker(mts4you.chat, media, mts4you, { packname: wak.packname, author: wak.author })
await fs.unlinkSync(encmedia)
} else {
throw `*Kirim Gambar/Video Dengan Caption* ${prefix + command}\nDurasi *Video 1-9 Detik*`
}
}
break

case 'smeme': 
case 'stickmeme': 
case 'stikmeme': 
case 'stickermeme': 
case 'stikermeme': {
let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
if (!/image/.test(mime)) throw respond
if (!text) throw respond
mts4you.reply(mess.wait)
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let { TelegraPh } = require('./lib/uploader')
let mee = await mts.downloadAndSaveMediaMessage(quoted)
let mem = await TelegraPh(mee)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
let awikwok = await mts.sendImageAsSticker(mts4you.chat, smeme, mts4you, { packname: wak.packname, author: wak.author })
await fs.unlinkSync(awikwok)
}
break

case 'tourl': {
mts4you.reply(mess.wait)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await mts.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
mts4you.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
mts4you.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break

case 'snaptik':{ 
if (!text) return mts4you.reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return mts4you.reply(`Link Invalid!!`)
mts4you.reply(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
mts.sendMessage(mts4you.chat, { caption: 'BERIKUT VIDEO NYA', video: { url: data.watermark }, mentions: [sender] })
})
}
break

case 'owner': 
case 'creator': {
mts.sendContact(mts4you.chat, global.owner, mts4you)
}
break

case 'ytplay': {
if (!text) throw `Example : ${prefix + command} story wa anime`
mts4you.reply(mess.wait)
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let buttonMessage = {
image: { url: anu.thumbnail },
caption: `あ Title : ${anu.title}
あ Ext : Search
あ Id : ${anu.videoId}
🪀 Duration : ${anu.timestamp}
あ Viewers : ${anu.views}
あ Upload At : ${anu.ago}
あ Author : ${anu.author.name}
あ Channel : ${anu.author.url}
あ Description : ${anu.description}
あ Url : ${anu.url}`,
}
mts.sendMessage(mts4you.chat, buttonMessage)
}
break

case 'y2mate': 
case 'ytmp4': 
case 'ytvideo': {
let { ytv } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
mts4you.reply(mess.wait)
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return mts4you.reply('File Melebihi Batas '+util.format(media))
mts.sendMessage(mts4you.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `あ Title : ${media.title}\nあ File Size : ${media.filesizeF}\nあ Url : ${isUrl(text)}\nあ Ext : MP3\nあ Resolusi : ${args[1] || '360p'}` })
}
break

case 'store':
peotkop = `
╭─═[🛍️𝗣𝗥𝗢𝗗𝗨𝗞 𝗦𝗧𝗢𝗥𝗘🛍️]═──⋆
│╭───────────────···
││「️🛍️」${judul1}
││➣ prodaktop1
││
││「️🛍️」${judul2}
││➣ prodaktop2
││
││「️🛍️」${judul3}
││➣ prodaktop3
││
││「️🛍️」${judul4}
││➣ prodaktop4
││
││「️🛍️」${judul5}
││➣ prodaktop5
││
││「️🛍️」${judul6}
││➣ prodaktop6
││
││「️🛍️」${judul7}
││➣ prodaktop7
│╰───────────────···
╰───────────────────⋆`
mts4you.reply(peotkop)
break

case 'prodaktop1':
bekajs = `${judul1}
━━━━━━━━━━━━━

${produk1}`
mts4you.reply(bekajs)
break

case 'prodaktop2':
bekaffa = `${judul2}
━━━━━━━━━━━━━

${produk2}`
mts4you.reply(bekaffa)
break

case 'prodaktop3':
bjaggs = `${judul3}
━━━━━━━━━━━━━

${produk3}`
mts4you.reply(bjaggs)
break

case 'prodaktop4':
hgfas = `${judul4}
━━━━━━━━━━━━━

${produk4}`
mts4you.reply(hgfas)
break

case 'prodaktop5':
bvvas = `${judul5}
━━━━━━━━━━━━━

${produk5}`
mts4you.reply(bvvas)
break

case 'prodaktop6':
hgfas = `${judul6}
━━━━━━━━━━━━━

${produk6}`
mts4you.reply(hgfas)
break

case 'prodaktop7':
bvvas = `${judul7}
━━━━━━━━━━━━━

${produk7}`
mts4you.reply(bvvas)
break

case 'payment':
gajdev = `
╭───═[💸𝗣𝗔𝗬𝗠𝗘𝗡𝗧💸]═───⋆
│╭───────────────···
││「💰️」𝗔𝗹𝗹𝗣𝗮𝘆
││➣ allpaylet
││➺ [Bayar Tanpa Premium]
││
││「️💰」𝗚𝗼𝗽𝗮𝘆
││➣ gopaylet
││➺ [Bayar Menggunakan Gopay]
││
││「💰」𝗗𝗮𝗻𝗮
││➣ danalet
││➺ [Bayar Menggunakan Dana]
│╰───────────────···
╰───────────────────⋆`
mts4you.reply(gajdev)
break

case 'gopaylet':{
mts.sendMessage(mts4you.chat, { image: { url: `${QRgopay}` }, caption: `⬆️SCAN QR DI ATAS⬆️\nNOPE : ${NOgopay}\n\n𝙺𝙸𝚁𝙸𝙼 𝙱𝚄𝙺𝚃𝙸 𝚃𝚁𝙰𝙽𝚂𝙵𝙴𝚁\n𝙺𝙴☞ wa.me/${wak.noowner}\n════》『𝐆𝐎𝐏𝐀𝐘』` }, { quoted: mts4you })
}
break

case 'danalet':{
mts.sendMessage(mts4you.chat, { image: { url: `${QRdana}` }, caption: `⬆️SCAN QR DI ATAS⬆️\nNOPE : ${NOdana}\n\n𝙺𝙸𝚁𝙸𝙼 𝙱𝚄𝙺𝚃𝙸 𝚃𝚁𝙰𝙽𝚂𝙵𝙴𝚁\n𝙺𝙴☞ wa.me/${wak.noowner}\n════》『𝐃𝐀𝐍𝐀』` }, { quoted: mts4you })
}
break

case 'shopeelet':{
mts.sendMessage(mts4you.chat, { image: { url: `${QRshopee}` }, caption: `⬆️SCAN QR DI ATAS⬆️\nNOPE : ${NOshopee}\n\n𝙺𝙸𝚁𝙸𝙼 𝙱𝚄𝙺𝚃𝙸 𝚃𝚁𝙰𝙽𝚂𝙵𝙴𝚁\n𝙺𝙴☞ wa.me/${wak.noowner}\n════》『𝐒𝐇𝐎𝐏𝐄𝐄』` }, { quoted: mts4you })
}
break

case 'ovolet':{
mts.sendMessage(mts4you.chat, { image: { url: `${QRovo}` }, caption: `⬆️SCAN QR DI ATAS⬆️\nNOPE : ${NOovo}\n\n𝙺𝙸𝚁𝙸𝙼 𝙱𝚄𝙺𝚃𝙸 𝚃𝚁𝙰𝙽𝚂𝙵𝙴𝚁\n𝙺𝙴☞ wa.me/${wak.noowner}\n════》『𝐎𝐕𝐎』` }, { quoted: mts4you })
}
break

case 'allpaylet':{
mts.sendMessage(mts4you.chat, { image: { url: `${QRallpay}` }, caption: `⬆️SCAN QR DI ATAS⬆️\n\n𝙺𝙸𝚁𝙸𝙼 𝙱𝚄𝙺𝚃𝙸 𝚃𝚁𝙰𝙽𝚂𝙵𝙴𝚁\n𝙺𝙴☞ wa.me/${wak.noowner}\n════》『𝐀𝐋𝐋 𝐏𝐀𝐘𝐌𝐄𝐍𝐓』` }, { quoted: mts4you })
}
break

case 'linkgc':
if (!isGroup) return mts4you.reply(`${mess.dalamgroup}`)
if (!isBotAdmins) return mts4you.reply(`${mess.botadmin}`)
if (!isAdmins) return mts4you.reply(`${mess.adminonly}`)
var url = await mts.groupRevokeInvite(mts4you.chat).catch(() => reply(mess.error.api))
if (!q) return 
num = `${sender}`
jumlah = '1'
waktu = `1s`
for (let i = 0; i < jumlah; i++) {
mts.sendMessage(num, {
text: `『${groupName}』\n⬇️𝙇𝙄𝙉𝙆 𝙂𝙍𝙊𝙐𝙋⬇️️\nhttps://chat.whatsapp.com/`+url,
})}
ling_txt = `SUKSES✅\nLINK GROUP SUDAH TERKIRIM\nKE ${mts4you.pushName}\nID : ${sender.split("@")[0]}`
let buttoahgdbaote = [
{buttonId: `resetlinkgc`, buttonText: {displayText: '🔗𝙍𝙀𝙎𝙀𝙏 𝙇𝙄𝙉𝙆🔗'}, type: 1}, 
]
let buttoggaddbaote = {
text: ling_txt,
footer: `sᴇᴛɪᴀᴘ ᴍᴇᴍᴜɴᴄᴜʟᴋᴀɴ ʟɪɴᴋ ɢʀᴏᴜᴘ, ᴊɪᴋᴀ ʙᴜʏᴇʀ sᴜᴅᴀʜ ᴍᴀsᴜᴋ ʜᴀʀᴀᴘ ᴄʟɪᴄᴋ ᴛᴏᴍʙᴏʟ ᴅɪ ʙᴀᴡᴀʜ`,
buttons: buttoahgdbaote,
headerType: 1
}
mts.sendMessage(mts4you.chat, buttoggaddbaote)
await sleep(ms(waktu))
break

case 'resetlinkgc': {
if (!isGroup) return mts4you.reply(`${mess.dalamgroup}`)
if (!isBotAdmins) return mts4you.reply(`${mess.botadmin}`)
if (!isAdmins) return mts4you.reply(`${mess.adminonly}`)
mts.groupRevokeInvite(mts4you.chat)
}
txts = `SUKSES✅\nMERESET LINK GROUP`
mts4you.reply(txts)
break

case 'tagall': {
if (!isGroup) return mts4you.reply(`${mess.dalamgroup}`)
let tagall = `══✪〘 *👥 Tag All* 〙✪══
*Pesan : ${q ? q : 'Pesan Kosong'}*\n\n`
for (let mem of participants) {
tagall += `• @${mem.id.split('@')[0]}\n`
}
mts4you.reply(tagall)
}
break

case 'tag':
case 'hidetag': {
if (!isGroup) return mts4you.reply(`${mess.dalamgroup}`)
mts.sendMessage(mts4you.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: mts4you })
}
break

case 'kick': {
if (!isGroup) return mts4you.reply(`${mess.dalamgroup}`)
if (!isBotAdmins) return mts4you.reply(`${mess.botadmin}`)
if (!isAdmins) return mts4you.reply(`${mess.adminonly}`)
let users = mts4you.mentionedJid[0] ? mts4you.mentionedJid[0] : mts4you.quoted ? mts4you.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
kick_txt = `
SUKSES✅
MENGELUARKAN
ID : ${q}
`
await mts.groupParticipantsUpdate(mts4you.chat, [users], 'remove').then((res) => mts4you.reply(kick_txt))
}
break

case 'culik': {
if (!isGroup) return mts4you.reply(`${mess.dalamgroup}`)
if (!isBotAdmins) return mts4you.reply(`${mess.botadmin}`)
if (!isAdmins) return mts4you.reply(`${mess.adminonly}`)
let users = mts4you.quoted ? mts4you.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
add_txt = `
▰▱▰【𝐖𝐄𝐋𝐂𝐎𝐌𝐄】▰▱▰
SELAMAT DATANG👋 ${q.split("@")[0]}

${q.split("@")[0]} TELAH DI TAMBAHKAN
OLEH ${sender.split("@")[0]} [${mts4you.pushName}]
`
await mts.groupParticipantsUpdate(mts4you.chat, [users], 'add').then((res) => mts4you.reply(add_txt))
}
break

case 'setdesc':{
if (!isGroup) return mts4you.reply(`${mess.dalamgroup}`)
if (!isBotAdmins) return mts4you.reply(`${mess.botadmin}`)
if (!isAdmins) return mts4you.reply(`${mess.adminonly}`)
await mts.groupUpdateDescription(mts4you.chat, text).then((res) => mts4you.reply(mess.succes))
}
break

case 'setnama':
case 'setsubject': {
if (!isGroup) return mts4you.reply(`${mess.dalamgroup}`)
if (!isBotAdmins) return mts4you.reply(`${mess.botadmin}`)
if (!isAdmins) return mts4you.reply(`${mess.adminonly}`)
if (!text) throw 'Text ?'
await mts.groupUpdateSubject(mts4you.chat, text).then((res) => mts4you.reply(mess.succes))
}
break

case 'setppgc': {
if (!isGroup) return mts4you.reply(`${mess.dalamgroup}`)
if (!isBotAdmins) return mts4you.reply(`${mess.botadmin}`)
if (!isAdmins) return mts4you.reply(`${mess.adminonly}`)
if (!quoted) throw `Kirim Foto Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim Foto Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim Foto Dengan Caption ${prefix + command}`
let media = await mts.downloadAndSaveMediaMessage(quoted)
await mts.updateProfilePicture(mts4you.chat, { url: media }).catch((err) => fs.unlinkSync(media))
mts4you.reply(mess.succes)
}
break


default:
}
if (budy.startsWith('=>')) {
if (!itsMemts) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return mts4you.reply(bang)
}
try {
mts4you.reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
mts4you.reply(String(e))
}
}
if (budy.startsWith('>')) {
if (!itsMemts) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await mts4you.reply(evaled)
} catch (err) {
mts4you.reply(String(err))
}
}
if (budy.startsWith('<')) {
if (!itsMemts) return
try {
return mts4you.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}
if (budy.startsWith('$')){
if (!itsMemts) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return mts4you.reply(`${err}`)
if (stdout) {
mts4you.reply(stdout)
}
})
}
} catch (err) {
mts4you.reply(util.format(err))
}
} 