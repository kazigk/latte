# Latte ☕

Simple Slack-like incoming webhook for Telegram

## Configuration

Configuration is done via environment variables, dotenv is supported.

| Variable              | Description                                       |
| --------------------- | ------------------------------------------------- |
| TELEGRAM_ACCESS_TOKEN | Your bot token from BotFather                     |
| TELEGRAM_CHAT_ID      | ID of chat to which messages will be send         |
| API_PATH              | Set to something not obvious, must start with '/' |
| API_LISTEN_ADDRESS    | Address on which Latte will listen on             |
| API_LISTEN_PORT       | Port on which Latte will listen on                |

## Demo

### Slack (native)

![](img/demo_slack.png)

### Telegram

![](img/demo_telegram.png)

### JSON used

```json
{
	"text": "Danny Torrence left a 1 star review for your property.",
	"blocks": [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "Danny Torrence left the following review for your property:"
			}
		},
		{
			"type": "section",
			"block_id": "section567",
			"text": {
				"type": "mrkdwn",
				"text": "<https://example.com|Overlook Hotel> \n :star: \n Doors had too many axe holes, guest in room 237 was far too rowdy, whole place felt stuck in the 1920s."
			},
			"accessory": {
				"type": "image",
				"image_url": "https://is5-ssl.mzstatic.com/image/thumb/Purple3/v4/d3/72/5c/d3725c8f-c642-5d69-1904-aa36e4297885/source/256x256bb.jpg",
				"alt_text": "Haunted hotel image"
			}
		},
		{
			"type": "section",
			"block_id": "section789",
			"fields": [
				{
					"type": "mrkdwn",
					"text": "*Average Rating*\n1.0"
				}
			]
		}
	]
}
```