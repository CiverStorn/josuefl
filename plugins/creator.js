let handler = function (m) {
  this.sendContact(m.chat, '584123257015' , 'josue',m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
