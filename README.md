# Sample React + Web5 App

This repository is intended to test building production web apps in react with Web5. 

There is currently a bug when accessing a production build over a network.

To reproduce:

## Step 1: install deps

`npm install`

## Step 2: create production build

`npm run build`

## Step 3: serve on a static server

Serve the build folder on a static server.
(You may need to run `npm i serve`)

`serve -s build`

## Step 4: did will not load over network

Accessing using `http://localhost:3000` will work as expected.

Accessing using `http://10.0.0.7:3000` will result in the following error when trying to connect to Web5 using `Web5.connect()`:

```
Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'digest')
    at dR.encode (sha2-browser.js:12:52)
    at Vi.<anonymous> (Multihash.ts:34:29)
    at Generator.next (<anonymous>)
    at sha2-browser.js:24:2
    at new Promise (<anonymous>)
    at dv (sha2-browser.js:24:2)
    at Vi.hashAsNonMultihashBytes (Multihash.ts:30:105)
    at Vi.<anonymous> (Multihash.ts:65:51)
    at Generator.next (<anonymous>)
    at sha2-browser.js:24:2
```

Please reach out to collaborate on resolving this! Thanks a ton.