const URL = require('URL');
const express = require('express');
const nunjucks = require('nunjucks');
const puppeteer = require('puppeteer');

async function getProducts(query) {
    const browser = await puppeteer.launch({
        headless: false
    });
    
    const page = await browser.newPage();
    
    await page.goto(`https://www.walmart.com/search/?query=${query}`);
    
    const products = await page.$$eval('.search-result-gridview-item', els => {
        return els.slice(0, 4).map(el => {
            return {
                title: el.querySelector('.product-title-link').textContent,
                price:  el.querySelector('.price-main .visuallyhidden').textContent,
            }
        })
    });

    await browser.close();
    console.log(products);
    
    return products;
}

var app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.set('port', 3000);

// Home page
app.get('/', (req, res) => {
    res.render('index.html', {
        page: 'home',
        port: app.get('port')
    });
});

app.get('/search/:query', async (req, res) => {
    const {query} = req.params;
    
    if (!query) {
        return res.status(404).send('No products found');
    }

    const products = await getProducts(query);

    res.render('search.html', {
        page: 'search',
        port: app.get('port'),
        products
    });
});

// Kick start our server
app.listen(app.get('port'), () => {
    console.log('Server started on port', app.get('port'));
});