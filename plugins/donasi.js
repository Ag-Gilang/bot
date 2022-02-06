let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • 3 Three   [089678391870]
│ • Telkomsel [081290014897]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
