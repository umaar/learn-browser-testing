
## To run

1. Start the express server/playwright:

```sh
npm start

# or

yarn start
```

2. Make a change to the file, or files, in the `public` folder.
	+ For example increase the font-size in the file `public/styles.css`

## Alternative

As an alternative approach to live reloading, what about injecting the live-reload script via playwright's `addInitScript()` method?