# Crypto Portfolio

Toy project

## Getting Started

### Download source

Open a terminal and run the following commands:

```bash
$ git clone https://github.com/jscriptcoder/crypto-portfolio.git
$ cd crypto-portfolio
```

### Installing and running development env

Install all the dependencies:

```bash
$ npm install
```

Next you're gonna open a second terminal to run the express server that interfaces with Defillama API (under the hood it's just importing a JSON file with the data)

Run the following command:

```bash
$ npm run server
```

Now run the development environment in the first terminal:

```bash
$ npm run dev
```

Have fun 😊

### Important note:

I'm simulating delay on each HTTP requests to make more obvious loading states.
