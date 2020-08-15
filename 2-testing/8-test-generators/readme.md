
### How to use this

1. Firstly, make sure the existing test in this folder runs successfully. Run this command in your terminal:

```sh
npm run howl # checks that qawolf is working
npm start # runs a sample wikipedia test
```

2. First, run this command to CREATE your test:

```sh
../../node_modules/qawolf/build/index.js create https://www.wikipedia.org/ yourTestNameHere
```

3. Then, run this command to RUN your test:

```sh
../../node_modules/qawolf/build/index.js test yourTestNameHere
```

4. Create new tests on websites other than Wikipedia