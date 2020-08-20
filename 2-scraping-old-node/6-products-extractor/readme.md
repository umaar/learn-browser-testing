
## To run

```sh
npm start

# or

yarn start
```

## Your challenge

Your challenge is to enhance this project.

Currently, scraping walmart is a bit slow. Puppeteer needs to:

- To block the requests of CSS & JS resources (and png/jpg?)

Also, the search results page doesn't link back to the Walmart product, so this code needs:

- A hyperlink to the Walmart product on the search results page

---

## Guidance (partial solution)

```js
await page.setRequestInterception(true)

page.on('request', async request => {
	const pathname = URL.parse(request.url()).pathname || '';
	
	if (pathname.endsWith('.css') || pathname.endsWith('.js')) {
		await request.abort();
	} else {
		await request.continue();
	}
});
```

## Credits

Express boilerplate [from here](https://github.com/iamstuartwilson/express-nunjucks-boilerplate).
