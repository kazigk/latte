require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const volleyball = require('volleyball')
const Telegraf = require('telegraf')
const handler = require('./handler')

const app = express()
app.use(bodyParser.json())
app.use(volleyball)

const bot = new Telegraf(process.env.TELEGRAM_ACCESS_TOKEN)

app.post(process.env.API_PATH || '/', handler(bot))

app.listen(
  process.env.API_LISTEN_PORT || 3000,
  process.env.API_LISTEN_ADDRESS || '127.0.0.1'
)
