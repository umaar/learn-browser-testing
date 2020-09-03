
## About

There's nothing to `npm start` here, this is just a demonstration of a serverless function executing a puppeteer script

## Demo

This serverless function returns a screenshot of the webpage.

- https://serverless.automatebrowsers.com/.netlify/functions/screenshot?url=https://example.com

## Deploy

Deploying can be done at the root of this repo:

```
netlify deploy
```

## Example function

```js
exports.handler = async () => {
	return {
		statusCode: 200,
		body: 'Hey hey'
	}
}
```

## Example netlify.toml

```toml
[build]
  command = "#"
  publish = "page"
  functions = "functions"
```