let handler = async (m, { conn, command, text, usedPrefix, participants }) => {
    if (!text) throw "menciona a alguien para ver su personalidad"
    const mentionedUser = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
 const userChar = [
      "Smegma",
      "Generosa",
      "Grumpy",
      "leal",
      "Obediente",
      "Buena",
      "que nombre de puto w",
      "Simp",
      "Pendejo",
      "Paciente",
      "Pervertido",
      "Chido",
      "Mañoso",
      "Brillante",
      "Sexy",
      "Caliente",
      "Gorgeous (mi ingles no llega tan lejos)",
      "Lindo",
    ]
    const userCharacterSeletion =
      userChar[Math.floor(Math.random() * userChar.length)]

    let message = `esta persona es @${mentionedUser.split("@")[0]}  muy *${userCharacterSeletion}* 🔥⚡`
    
    conn.sendMessage(m.chat, { text: message, mentions: [mentionedUser] }, { quoted: m })
    
}
handler.help = ["character @tag"]
handler.tags = ['fun']
handler.command = /^(character)/i

export default handler 