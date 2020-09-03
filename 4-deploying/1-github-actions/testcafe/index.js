fixture`Testcafe demo`.page`https://example.com`;

test('Testcafe example test 1', async t => {
	const title = await t.eval(() => document.title);
	await t.expect(title).eql('Example Domain', 'Has the correct title');
});

test('Testcafe example test 2', async t => {
	const title = await t.eval(() => document.title);
	await t.expect(title).eql('Example Domain', 'Has the correct title');
});

test('Testcafe example test 3', async t => {
	const title = await t.eval(() => document.title);
	await t.expect(title).eql('Example.com', 'Has the correct title');
});