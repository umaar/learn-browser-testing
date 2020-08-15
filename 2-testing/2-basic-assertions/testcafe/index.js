fixture `Getting Started`.page `https://duckduckgo.com`;

test('My first test', async t => {
    await t.typeText('#search_form_input_homepage', 'Umar Hansa');
	await t.click('input[type="submit"]');
	await t.click(`a[href='https://umaar.com/']`);
	const title = await t.eval(() => document.title);
	await t.expect(title).eql('Umar Hansa', 'Landed on the correct page');
});