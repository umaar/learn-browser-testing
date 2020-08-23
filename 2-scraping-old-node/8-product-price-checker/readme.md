
## Amazon Price Checker

### Goals

We want to build a price checker for an Amazon product. The Amazon product is hosted on this standalone page, which is suitable for frequent scraping: [Amazon: Cat mug](https://automatebrowsers.com/amazon/cat-mug/).

1. Write a node.js script which automates a browser to scrape the Amazon price of the cat mug
2. The script should not close, instead, it can check for price changes at a specified interval (the price changes on page reload for testing purposes)
3. The script could optionally use something like `node-notifier` to notify the user of changes to the price
4. The script could optionally save prices to the cloud, using a service like [Airtable](https://airtable.com) - they have a generous free plan

### Instructions

```sh
npm start # or yarn start
```

### Want to save results to the cloud?

[Airtable Table Example](https://airtable.com/shrHejfReBwZPavxA)

1. Make a free account at airtable.com
2. Copy `.env.sample` to `.env`
3. Fill it with values from: https://airtable.com/api (you'll need your 'base' and api key)

