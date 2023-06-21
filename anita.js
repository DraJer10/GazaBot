
//BASE CREADA POR JULS MODDERS

//SUSCRIBETE AL CANAL : https://youtube.com/channel/UCWYstC82m3ugcrSJk5Kzh0A

const { 
default: WAConnection,
MessageType,
Presence,
GroupSettingChange,
WA_MESSAGE_STUB_TYPES,
Mimetype,
relayWAMessage,
makeInMemoryStore,
useSingleFileAuthState,proto,
BufferJSON, 
prepareWAMessageMedia,
DisconnectReason,generateWAMessageFromContent, 
fetchLatestBaileysVersion,
downloadContentFromMessage,
delay
} = require("@whiskeysockets/baileys")
const fs = require("fs")
const chalk = require("chalk")
const path = require("path")
const Crypto = require("crypto")
const P = require("pino") 
const request = require('request');
const ff = require('fluent-ffmpeg')
const webp = require("node-webpmux")
const crypto = require('crypto')
const clui = require("clui")
const util = require("util")
const cheerio = require('cheerio')
const thiccysapi = require('textmaker-thiccy');
const { exec, spawn, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const fetch = require("node-fetch")
const yts = require("yt-search")
const BodyForm = require("form-data")
const speed = require("performance-now")
const { color } = require("./archivos/color")
const { fromBuffer } = require("file-type")
const os = require('os')
const { TelegraPh } = require("./archivos/telegraPh.js")
 const {
 tmpdir
} = require("os")

const creador = "STEVE CHAVES"

// DATA E HORA //
const moment = require("moment-timezone")
const hora = moment.tz("America/Costa_Rica").format("HH:mm:ss")
const datai = moment.tz("America/Costa_Rica").format("DD/MM/YY")
/// ARQUIVOS JSON ////
const axios = require('axios')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./archivos/myfunc')
const { banner, getExtension, upload } = require("./archivos/funções")

const {videoToWebp,imageToWebp,writeExifImg,writeExifVid} = require('./archivos/stickersss.js')

async function startanita () {
const store = makeInMemoryStore({ logger: P().child({ level: "silent", stream: "store" }) })
// 𝚀𝚁𝙲𝙾𝙳𝙴
const { state, saveState } = useSingleFileAuthState("./cache/anita.json")
console.log(banner.string)
console.log('✔️....✔️ CARGANDO ✔️....️✔️')
const anita = WAConnection({
logger: P({ level: "silent" }),
printQRInTerminal: true,
auth: state
})

anita.ev.on ("creds.update", saveState)

store.bind(anita.ev)
anita.ev.on("chats.set", () => {
console.log("Tem conversas", store.chats.all())
})

anita.ev.on("contacts.set", () => {
console.log("Tem contatos", Object.values(store.contacts))
})

anita.ev.on("connection.update", (update) => {
const { connection, lastDisconnect } = update
if(connection === "close") {
const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut
console.log("OCURRIO UN ERROR!!", lastDisconnect.error, "ESTOY INTENTANDO CONECTARME...", shouldReconnect)

if(shouldReconnect) {
startanita()
}

} else if(connection === "open") {
console.log(`\nConectado Exitosamente\n---------\n\nDia: ${datai}\n\nHora: ${hora}\n---------\nCreado Por Steve Chaves\n\n`)
}

})

    
anita.ev.on("messages.upsert", async m => {
try {
const info = m.messages[0]
if (!info.message) return 
if (info.key && info.key.remoteJid == "status@broadcast") return
const altpdf = Object.keys(info.message)
const type = altpdf[0] == "senderKeyDistributionMessage" ? altpdf[1] == "messageContextInfo" ? altpdf[2] : altpdf[1] : altpdf[0]
const content = JSON.stringify(info.message)
const from = info.key.remoteJid

//==============(BODY)================\\
  var body = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? info.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (info.message.buttonsResponseMessage?.selectedButtonId || info.message.listResponseMessage?.singleSelectReply.selectedRowId || info.text) : ''
var budy = (typeof info.text == 'string' ? info.text : '')
var prefix = '?'
var NombreBot = '𝕲𝖆𝖟𝖆 𝕭𝖔𝖙' // nombre del bot 

// BANNER //
const welkom = JSON.parse(fs.readFileSync('./archivos/welkom.json'))

//CREACION DE DATOS//

anita.ev.on("group-participants.update", async (anu) => {
if(!welkom.includes(anu.id)) return
try{


const datosgp = await anita.groupMetadata(anu.id)

if(anu.action == 'add') {

const numerodep = anu.participants[0]

const fotex = fs.readFileSync('./archivos/bienvenida.jpg')

const drajersito = `

BIENVENIDO AL GRUPO

${numerodep}

RESPETAR LAS REGLAS

😈😤

`
anita.sendMessage(anu.id,{image : fotex, caption : drajersito})

}

if(anu.action == 'remove') {

const numerodep2 = anu.participants[0]

const fotex2 = fs.readFileSync('./archivos/bienvenida.jpg')

const drajersito2 = `

HASTA PRONTO

${numerodep2}

DIOS TE BENDIGA

😈😤

`
anita.sendMessage(anu.id,{image : fotex2, caption : drajersito2})

}

} catch(e) {
console.log('Error: % s', color(e, "red"))
}
})


//================(BADY)================\\

bady = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (info.message.listResponseMessage && info.message.listResponseMessage.singleSelectReply.selectedRowId) ? info.message.listResponseMessage.singleSelectReply.selectedRowId: ''

//=======================================\\

// Budy
budy = (type === "conversation") ? info.message.conversation : (type === "extendedTextMessage") ? info.message.extendedTextMessage.text : ""

//===

button = (type == "buttonsResponseMessage") ? info.message.buttonsResponseMessage.selectedDisplayText : ""
button = (type == "buttonsResponseMessage") ? info.message.buttonsResponseMessage.selectedButtonId : ""
listMessage = (type == "listResponseMessage") ? info.message.listResponseMessage.title : ""

var pes = (type === "conversation" && info.message.conversation) ? info.message.conversation : (type == "imageMessage") && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == "videoMessage") && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == "extendedTextMessage") && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ""

bidy =  budy.toLowerCase()

 anita.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await anita.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

    anita.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await anita.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }
    anita.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    anita.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 


  anita.sendTextWithMentions = async (jid, text, quoted, options = {}) => anita.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? anita.sendMessage(from, {text: teks.trim(), mentions: memberr}) : anita.sendMessage(from, {text: teks.trim(), mentions: memberr})
}

const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const arg = body.substring(body.indexOf(" ") + 1)
const numeroBot = anita.user.id.split(":")[0]+"@s.whatsapp.net"
const argss = body.trim().split(/ +/).slice(1)
const testat = body
const ants = body
const isGroup = info.key.remoteJid.endsWith("@g.us")
const tescuk = ["0@s.whatsapp.net"]
const q = args.join(" ")
const enviar = (texto) => {
anita.sendMessage(from,{ text : texto })
}
const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}			
const sender = isGroup ? info.key.participant : info.key.remoteJid

const nome = info.pushName ? info.pushName : ""

const groupMetadata = isGroup ? await anita.groupMetadata(from) : ""

const groupName = isGroup ? groupMetadata.subject : ""

const groupDesc = isGroup ? groupMetadata.desc : ""

const groupMembers = isGroup ? groupMetadata.participants : ""

const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ""

const pushname = info.pushName ? info.pushName : ""
	const groupId = isGroup ? groupMetadata.id : ''
	//figu sticker
const enviarfiguimg = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path: /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64'): /^https?:\/\//.test(path) ? await (await getBuffer(path)): fs.existsSync(path) ? fs.readFileSync(path): Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
 buffer = await writeExifImg(buff, options)
} else {
 buffer = await imageToWebp(buff)
}

await anita.sendMessage(jid, {
 sticker: {
url: buffer
 }, ...options
}, {
 quoted
})
return buffer
 }
 
 const enviarfiguvid = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path: /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64'): /^https?:\/\//.test(path) ? await (await getBuffer(path)): fs.existsSync(path) ? fs.readFileSync(path): Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
 buffer = await writeExifVid(buff, options)
} else {
 buffer = await videoToWebp(buff)
}

await anita.sendMessage(jid, {
 sticker: {
url: buffer
 }, ...options
}, {
 quoted
})
return buffer
 }
 
 const getFileBuffer = async (mediakey, MediaType) => { 
const stream = await downloadContentFromMessage(mediakey, MediaType)

let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}
	
//*******************************************//


const enviartexto = (texto) => {
anita.sendMessage(from,{ text : texto }, {quoted : doc})
} 

const enviarimagen = (imagen) => {
anita.sendMessage(from,{ image : imagen }, {quoted : doc})
} 

const enviarimagencap = (imagen,caption) => {
anita.sendMessage(from,{ image : imagen , caption : caption}, {quoted : doc})
} 

const enviarvideos = (videos) => {
anita.sendMessage(from,{ video : videos }, {quoted : doc})
} 

const enviarvideoscap = (videos,caption) => {
anita.sendMessage(from,{ video : videos , caption : caption }, {quoted : doc})
} 

const enviarmusica = (audios) => {
anita.sendMessage(from,{ audio : audios }, {quoted : doc})
} 

const enviarstickers = (sticker) => {
anita.sendMessage(from,{ sticker : sticker }, {quoted : doc})
} 
	
const iswelkom = isGroup ? welkom.includes(from) :false	
const quoted = info.quoted ? info.quoted : info
const mime = (quoted.info || quoted).mimetype || ""
const isBot = info.key.fromMe ? true : false 
const isBotGroupAdmins = groupAdmins.includes(numeroBot) || false
const isGroupAdmins = groupAdmins.includes(sender) || false || info.key.fromMe
banChats = false
 const isCreator = [numeroBot,sender].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(sender)
const argis = bidy.trim().split(/ +/)
const isOwner = sender.includes(creador)
const typep = (args[0] || '').toLowerCase()
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')

const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')

const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')

if(isGroup && isCmd) {
}
const c = args.join(' ')
const text = args.join(" ")
if (isGroup && isGroup) console.log(`${color('┏━━━━━━━━━┅┅┄┄⟞⟦ ⟝┄┄┉┉━━━━━━━━━┓', 'green')}\n${color('┃', 'green')} ${color('Número:', 'green')} ${color(sender.split('@')[0], 'white')}\n${color('┃', 'green')} ${color('Nombre:', 'green')} ${color(pushname, 'white')}\n${color('┃', 'green')} ${color('Horário:', 'green')} ${color(hora, 'white')}\n${color('┃', 'green')} ${color('command:', 'green')} ${color(command)}\n${color('┃', 'white')} ${color('Palabras:', 'green')} ${color(budy.length, 'green')}\n${color('┃', 'green')} ${color('Grupo:', 'green')} ${color(groupName, 'white')}\n${color('┗━━━━━━━━┅┅┄┄⟞⟦⟧⟝┄┄┉┉━━━━━━━━┛', 'green')}`)
 if (!isGroup && isGroup) console.log(`${color('┏━━━━━━━━━┅┅┄┄⟞⟦ ⟝┄┄┉┉━━━━━━━━━┓', 'green')}\n${color('┃', 'green')} ${color('Número:', 'green')} ${color(sender.split('@')[0], 'white')}\n${color('┃', 'green')} ${color('Nombre:', 'green')} ${color(pushname, 'white')}\n${color('┃', 'green')} ${color('Horário:', 'green')} ${color(time, 'white')}\n${color('┃', 'green')} ${color('command:', 'green')} ${color('No', 'white')}\n${color('┃', 'green')} ${color('Palabras:', 'green')} ${color(budy.length, 'white')}\n${color('┃', 'green')} ${color('Grupo:', 'green')} ${color(groupName, 'white')}\n${color('┗━━━━━━━━┅┅┄┄⟞⟦⟧⟝┄┄┉┉━━━━━━━━┛', 'green')}`)

// VERIFICACIONES 

const live = {key : {participant : '0@s.whatsapp.net'},message: {liveLocationMessage: {}}} 
const imgm = {key : {participant : '0@s.whatsapp.net'},message: {imageMessage: {}}}
const vid = {key : {participant : '0@s.whatsapp.net'},message: {videoMessage: {}}}
const contato = {key : {participant : '0@s.whatsapp.net'},message: {contactMessage:{displayName: `${pushname}`}}}
const doc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage:{}}}

if(budy == `${prefix}`) {
enviar('🤔👍')}

//=====\\

// RESPUESTAS POR COMANDOS \\
respuesta = {
espere: " ..enviando.. ",
aguarde: "..Espere Porfavor.. ",
dono: ".. Este comando es Privado.. ",
grupos: ".. Este comando es para grupos.. ",
privado: ".. Este comando es para chats.. ",
admin: " ... Este comando es solo para admins..",
botadmin: " .. Este comando funciona si y solo si, el bot es admin ",
error: ".. Error, intente nuevamente.."
}


switch (command) {
//CREA COMANDOS AQUI

case 'agregar' :
case 'add' :
if(args.length<0 ) return enviar('Escribe el número de la persona que deseas agregar\nJunto con su codigo de pais')
if(!isGroupAdmins) return enviar ('Lo siento mi compa, pero no eres administrador')
if(!isBotGroupAdmins) return enviar(respuesta.botadmin)
let drajers = info.quoted ? info.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await anita.groupParticipantsUpdate(from, [drajers] , 'add')
break

case 'ban' :
case 'kick' :
case 'eliminar' :
if(args.length<0 ) return enviar('Escribe el número de la persona que deseas agregar\nJunto con su codigo de pais')
if(!isGroupAdmins) return enviar ('Lo siento mi compa, pero no eres administrador')
if(!isBotGroupAdmins) return enviar(respuesta.botadmin)
let drajers2 = info.quoted ? info.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await anita.groupParticipantsUpdate(from, [drajers2] , 'remove')
break

case 'welcome' :
case 'bienvenida':
if(args.length<1 ) return enviar('Escriba 1 para activar y 0 para desactivar')
if(!isGroupAdmins) return enviar ('Lo siento mi compa, pero no eres administrador')
if(!isBotGroupAdmins) return enviar(respuesta.botadmin)
if(Number(args[0])===1) {
if(iswelkom) return enviar('Ya se encuentra activo')
welkom.push(from)
fs.writeFileSync('./archivos/welkom.json',JSON.stringify(welkom))
enviar('Activado Exitosamente')
} else if (Number(args[0])===0) {
if(!iswelkom) return enviar('No esta activado')
const pesquisar = from
 processo = welkom.indexOf(pesquisar)
while(processo>=0) {
welkome.splice(processo, 1)
 processo = welkom.indexOf(pesquisar)
}
fs.writeFileSync('./archivos/welkom.json',JSON.stringify(welkom))
enviar('Desactivado Exitosamente')
} else {
enviar(' 1 para activar y 0 para desactivar')
}
break

case 'hola' : 
enviartexto('Que tal, en que andas mi compa?🦁') 
break

case 'foto' :
const gotu = fs.readFileSync('./archivos/fotos/lucifer.jpg')
enviarimagen(gotu) 
break

//case 'fotoleg' :
const gotu2 = fs.readFileSync('./archivos/fotos/lucifer.jpg') 
const dws = 'Suscribete a Steve'
enviarimagencap(gotu2,dws) 
break 

//case 'video' :
const gotu4 = fs.readFileSync('./archivos/fotos/leetmego.mp4') 
const dws2 = 'Suscribete a Steve'
enviarvideoscap(gotu4,dws2) 
break 

//case 'djfearlesswartime' :
const gotu8 = fs.readFileSync('./archivos/fotos/wartime.mp3')
anita.sendMessage(from,{audio: fs.readFileSync('./archivos/fotos/wartime.mp3'),mimetype: 'audio/mpeg'},{quoted : doc})
break


//case 'audio' :
const gotu6 = fs.readFileSync('./archivos/fotos/supadups.mp3')
anita.sendMessage(from,{audio : gotu6,mimetype: 'audio/mp4', ptt: true},{quoted : doc})
break

//case 'audio2' :
anita.sendMessage(from,{audio: fs.readFileSync('./archivos/fotos/supadups.mp3'),mimetype: 'audio/mpeg'},{quoted : doc})
break

//case 'stickerofc' :
const gotu7 = fs.readFileSync('./archivos/fotos/colochos.webp')
enviarstickers(gotu7) 
break 

//case 'video2' :
const gotu5 = fs.readFileSync('./archivos/fotos/leetmego.mp4') 
enviarvideos(gotu5) 
break 

case 'menu' :
case 'MENU':
case 'Menu':
case 'HELP':
case 'help':
case 'Help':
case 'comandos':
case 'COMANDOS':
case 'Comandos':
case 'Bot':
case 'BOT':
case 'bot':
 
//(!isGroup) return enviartexto('Este comando es sólo para grupos')
 
//(!groupAdmins) return enviartexto(respuesta.admin)

const gotu3 = fs.readFileSync('./archivos/fotos/lucifer.jpg')

const stev = `

𝖀𝖘𝖚𝖆𝖗𝖎𝖔 : ${pushname} 

༒☬𝕭𝖎𝖊𝖓𝖛𝖊𝖓𝖎𝖉𝖔☬༒
        𝕸𝖊𝖓𝖚 🦁✨
✩•̩̩͙*˚⁺‧͙⁺˚*•̩̩ •̩̩͙*˚⁺‧͙⁺˚*•̩̩͙✩•̩̩͙

${prefix} menu
${prefix} hola
${prefix} foto
${prefix} figu/sticker

✩•̩̩͙*˚⁺‧͙⁺˚*•̩̩ •̩̩͙*˚⁺‧͙⁺˚*•̩̩͙✩•̩̩͙

𝕭𝖔𝖙: ${NombreBot} 

✩•̩̩͙*˚⁺‧͙⁺˚*•̩̩ •̩̩͙*˚⁺‧͙⁺˚*•̩̩͙✩•̩̩͙
`
enviarimagencap(gotu3,stev) 
break

case 'figu': case "figu2" : case "stickergif":  case "stickergif2":
 if ((isMedia && !info.message.videoMessage || isQuotedImage)) {      
var stream = await downloadContentFromMessage(info.message.imageMessage || info.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
    var buffer = Buffer.from([])
    for await(const chunk of stream) {
     buffer = Buffer.concat([buffer, chunk])
    }
    let ran = 'stickers.webp'
    fs.writeFileSync(`./${ran}`, buffer)
     ffmpeg(`./${ran}`)
     .on("error", console.error)
     .on("end", () => {
      exec(`webpmux -set exif ./dados/${ran} -o ./${ran}`, async (error) => {
      
       await enviarfiguimg(from, fs.readFileSync(`./${ran}`), info, {
 packname: '𝕾𝖙𝖎𝖈𝖐𝖊𝖗❜𝖘', author: '𝕯𝖊𝕾𝖙𝖊𝖛𝖊'
})
				
        fs.unlinkSync(`./${ran}`)
			       
       })
      })
	 .addOutputOptions([
       "-vcodec", 
 	   "libwebp", 
 	   "-vf", 
	"scale=320:320:force_original_aspect_ratio=decrease,fps=15, pad=320:320:(ow-iw)/2:(oh-ih)/2:color=green@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"
	  ])
	 .toFormat('webp')
	 .save(`${ran}`)	 
    } else if ((isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11)) {
const encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage: info.message.videoMessage
rane = getRandom('.'+ await getExtension(encmedia.mimetype))
imgbuff = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, imgbuff)
const media = rane
ran = getRandom('.'+media.split('.')[1])
const upload = await TelegraPh(media)
await enviarfiguvid(from, util.format(upload), info, {
 packname: '𝕾𝖙𝖎𝖈𝖐𝖊𝖗❜𝖘', author: '𝕯𝖊𝕾𝖙𝖊𝖛𝖊'
}) 
}
          break 



default:
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("Could not find MIME for Buffer <null>") && !e.includes("Cannot read property 'conversation' of null") && !e.includes("Cannot read property 'contextInfo' of undefined") && !e.includes("Cannot set property 'mtype' of undefined") && !e.includes("jid is not defined")) {
console.log('Error : %s', color(e, 'green'))
}
}

})

}
startanita()
