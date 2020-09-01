
## To run

```sh
npm start

# or

yarn start
```

## VPS instructions

```sh
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs && node -v

git init --bare learn-browser-testing.git
```

```sh
git remote add vps root@IP_ADDRESS:/root/learn-browser-testing.git
```

```sh
git clone learn-browser-testing.git
```

```sh
cd learn-browser-testing
npm install --no-package-lock puppeteer
```

```sh
#!/bin/sh
echo 'Post receive starting'
unset GIT_DIR
cd /root/learn-browser-testing
git fetch origin master
git reset --hard origin/master
cd 4-deploying/2-vps/
npm start
echo 'Post Receive Complete!'
```

```sh
apt-get instsall -y ca-certificates fonts-liberation libappindicator3-1 libasound2 libatk-bridge2.0-0 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgbm1 libgcc1 libglib2.0-0 libgtk-3-0 libnspr4 libnss3 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 lsb-release wget xdg-utils
   26  apt-get install -y ca-certificates fonts-liberation libappindicator3-1 libasound2 libatk-bridge2.0-0 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgbm1 libgcc1 libglib2.0-0 libgtk-3-0 libnspr4 libnss3 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 lsb-release wget xdg-utils
```
