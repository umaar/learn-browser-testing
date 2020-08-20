const assert = require('assert').strict
const { Given, When, Then } = require('cucumber');

Given('a variable set to {int}', number => {
	this.setTo(number);
});

When('I increment the variable by {int}', number => {
	this.incrementBy(number);
});

Then('the variable should contain {int}', number => {
	assert.equal(this.variable, number);
});