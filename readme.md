
## Learn Browser Testing

End to end testing and browser automation.

### Quick start

Please use Node v14.4.0 or above.

```sh
npm install
```

Then, `cd` into any directory and run:

```sh
npm start
```

### Older Node.js

If using an older Node.js, please refer to the `1-testing-old-node` folder instead. I've manually gone through and converted ES Imports into `requires()` and avoided any top-level await.

### Windows users

If `npm start` works for you (try one of the cypress, or just examples), then continue with that - you don't need to change anything. Otherwise, run this to fix the error:

```sh
npm install -g yarn
```

Now, instead of running npm start, run:

```sh
yarn start
```

### Node modules

The dependencies (`node_modules`) for this project can come to many hundreds of megabytes. Rather than you having to run `npm install` each time you `cd` into a new folder (and download gigabytes of `node_modules` scattered across the various folders in this repo), you just need to do it once at the root level.