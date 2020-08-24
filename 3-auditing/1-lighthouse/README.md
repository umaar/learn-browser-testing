
# Lighthouse CI 

🔥️ This uses completely free services.

The definitive guide to automated performance testing using Lighthouse, GitHub Actions and Heroku.

__The end goal__: At the end of this, you'll be able to run standard Lighthouse audits, but also __custom audits created by you__.

You can run performance checks, accessibility checks, security checks, on each pull request to your GitHub repo.

## 1. Upload lighthouse results

Run lighthouse and upload results to their public server.

While the Lighthouse CI tool does support extra config, let's just run this as one command:

```sh
# from 3-auditing/1-lighthouse
npm run lighthouse # or yarn lighthouse
```

## 2. Upload lighthouse results locally

Upload results to your local lighthouse server.

### 2.1. Start lighthouse CI

Start the lighthouse CI server on your local machine.

```sh
# from 3-auditing/1-lighthouse
npm run lighthouse-local-server
```

Now: check the app is running @ http://localhost:9001

Note, this uses SQLite, however others databases are supported also.

### 2.2. Configure lighthouse CI

Configure the lighthouse CI server. The lighthouse wizard tool can configure your lighthouse CI instance, both locally and remotely.

```sh
# from 3-auditing/1-lighthouse
npm run lighthouse-wizard
```

I used the following answers:

```
? Which wizard do you want to run? new-project
? What is the URL of your LHCI server? http://localhost:9001
? What would you like to name the project? learn-browser-testing
? Where is the project's code hosted? https://github.com/umaar/learn-browser-testing
? What branch is considered the repo's trunk or main branch? master
```

After executing that, take note of the `build token`.

### 2.3. Upload lighthouse results locally

Run lighthouse and upload the results to your local lighthouse CI server:

Run the following command, and be sure to substitute `[YOUR_TOKEN]` for your actual `build token`.

```sh
# from 3-auditing/1-lighthouse
../../node_modules/.bin/lhci autorun --collect.numberOfRuns=1 --collect.startServerCommand='npm start' --collect.url='http://localhost:3000' --upload.target=lhci --upload.serverBaseUrl='http://127.0.0.1:9001' --upload.token='[YOUR_TOKEN]'
```

And verify the results on your local lighthouse CI server, e.g. at http://localhost:9001

## 3. Deploy a lighthouse CI server to the cloud

On this occasion, we'll use heroku since it has a free tier

### 3.1. Setup heroku

- If you don't already have an account on [heroku.com](heroku.com), make one.
- Then install their [CLI tool](https://devcenter.heroku.com/articles/heroku-cli)

### 3.2. Deploy the lighthouse CI tool to heroku (free)

Clone this starter kit outside of this current project

```sh
# For example, in ~/code or wherever your code projects live
git clone https://github.com/umaar/lhci-heroku.git
cd lhci-heroku
# Create a new project on heroku
heroku create
# Add a free database to your project
heroku addons:create heroku-postgresql:hobby-dev
# Deploy your code to heroku
git push heroku master
# Ensure heroku is running your app and open the URL
heroku ps:scale web=1
heroku open
```

### 3.3. Run lighthouse wizard


```sh
# While in the `lhci-heroku` folder, run:
npx lhci wizard
```

I gave these answers:

```
? Which wizard do you want to run? new-project
? What is the URL of your LHCI server? https://salty-headland-92476.herokuapp.com/
? What would you like to name the project? lhci-heroku
? Where is the project's code hosted? https://github.com/umaar/lhci-heroku
? What branch is considered the repo's trunk or main branch? master
```

### 3.4. Run lighthouse and upload the results to your heroku lighthouse CI server:

- Substitute `[YOUR_TOKEN]` for your actual `build token`.
- Substitute `[YOUR BASE URL]` for your heroku URL.

```sh
# Back in 3-auditing/1-lighthouse
../../node_modules/.bin/lhci autorun --collect.numberOfRuns=1 --collect.startServerCommand='npm start' --collect.url='http://localhost:3000' --upload.target=lhci --upload.serverBaseUrl='[YOUR BASE URL]' --upload.token='[YOUR_TOKEN]'
```

### 3.5. Verify results on your heroku lighthouse CI server

Access the base URL you've been using so far.


## 4. Configure lighthouse ci with github ci

### 4.1. Add an action file

Use https://github.com/umaar/learn-browser-testing/blob/master/.github/workflows/lighthouse-ci.yaml


### 4.2. Enable the status check

1. Open https://github.com/apps/lighthouse-ci
2. Click `configure`
3. Enable for the repo you are interested in
4. Click authorise

Observe the message like:

```
Authorized
Save the token below in a safe place. This is the only time it will be visible to you! Store the token as LHCI_GITHUB_APP_TOKEN in your build environment.

abc:123
```

5. Add the token as a GitHub secret, e.g. https://github.com/umaar/learn-browser-testing/settings/secrets/new
	+ Token name = `LHCI_GITHUB_APP_TOKEN`
	+ Value = `[value from the message you saw earlier]`


### 4.3. Make the status check mandatory for merging a PR

1. https://github.com/umaar/learn-browser-testing/settings/branch_protection_rules/new
2. Enter the following:
	+ Branch name pattern = *
	+ Require status checks to pass before merging = enabled
	+ Require branches to be up to date before merging = enabled
	+ Enable the status checks = Lighthouse CI and lhci/url/


## 5. Finishing up

That was quite a few steps, but it should all be working now.

Test this by making a PR to your repo, do you see the Lighthouse status checks? You can use their assertions feature (e.g. fail when this performance metric is too low) to block pull requests from merging.

### commands

```sh
node_modules/.bin/lhci --config=./3-auditing/1-lighthouse/lighthouserc.json autorun
```

https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1598183475406-64517.report.html

https://salty-headland-92476.herokuapp.com/app/projects/lhci-heroku/dashboard