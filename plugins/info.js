let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick

Rec: AhmadGans
Script: @Nurotomo
Github: 
Rahasia tod

*Sosmed :*
Kritik kami di sosmed ataupun YouTube.
Instagram: @_ahhmad_.f

*Thanks To :*
Nurotomo
MfarelS
ST4RZ
Dan kawan yang lain :)

╠═〘 DONASI 〙 ═
╠➥ Saweria: https://saweria.co/AmdBot
╠➥ Tsel: 62899-5820-020
╠➥ Trakteer: https://trakteer.id/amdbot
║>Request? Wa.me/628995820020
╠═〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

