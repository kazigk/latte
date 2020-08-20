const ajv = require('ajv')()
const emojis = require('emojis')

const validate = ajv.compile(require('./schema.json'))

let bot

function parseText (text) {
  text = text.replace(
    /<((http|https):\/\/.*?)\|(.*?)>/gm,
    (match, url, proto, title) => `[${title}](${url})`
  )

  text = emojis.unicode(text)

  return text
}

function handle (req, res) {
  const valid = validate(req.body)
  if (!valid) return res.status(400).send()

  let msg = parseText(req.body.text) + '\n\n'

  if (req.body.blocks != null) {
    for (let block of req.body.blocks) {
      if (block.text != null) {
        msg += parseText(block.text.text) + '\n\n'
      }

      if (block.fields != null) {
        for (let field of block.fields) {
          msg += parseText(field.text) + '\n\n'
        }
      }
    }
  }

  bot.telegram.sendMessage(process.env.TELEGRAM_CHAT_ID, msg, {'parse_mode': 'Markdown'})
  res.send('ok')
}

module.exports = (botInstance) => {
  bot = botInstance
  return handle
}
