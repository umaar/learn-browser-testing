import {Selector} from 'testcafe';

fixture`Getting Started`.page`https://example.com`;

test('My first test', async t => {
	const h1 = await Selector('h1');
	const headerText = await h1.textContent;
	t.expect(headerText).eql('example.com');
});
