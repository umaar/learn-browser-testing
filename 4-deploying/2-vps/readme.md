
## To run

```sh
npm start

# or

yarn start
```

## VPS instructions

```sh
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
node -v

git init --bare learn-browser-testing.git
```

```sh
git remote add vps root@167.71.132.117:/root/learn-browser-testing.git
```

```sh
git clone learn-browser-testing.git
```

```sh
#!/bin/sh
echo 'Post receive starting'
unset GIT_DIR
cd /root/learn-browser-testing
git fetch origin master
git reset --hard origin/master
echo 'Post Receive Complete!'
```