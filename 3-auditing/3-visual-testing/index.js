import {
	closeBrowser,
	navigateToPaymentPage,
	openModernDevTools,
	fillAndSubmitPaymentForm
} from './actions.js';

import percy from '@percy/puppeteer';

const {percySnapshot} = percy;

const {page, browser} = await openModernDevTools();
await percySnapshot(page, 'Home Page');
await navigateToPaymentPage(page);
await percySnapshot(page, 'Payment Page');
await fillAndSubmitPaymentForm(page);
await percySnapshot(page, 'Payment Success Page');

await closeBrowser(browser);