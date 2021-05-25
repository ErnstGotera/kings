## Getting started

### 1. Download project and install dependencies

Clone this repository:

```
git clone https://github.com/ErnstGotera/kings.git
```

Install npm dependencies in both server and client:

```
cd kings
npm install
cd client
npm install
```

### 2. Create and seed the database

Run the following command to create the mysql database.

```
npx prisma migrate dev --name init
```

Now, seed the database with the sample data in [`prisma/seed.js`](./prisma/seed.js) by running the following command:

```
npm run seed
```

### 3. Start the REST API server and the client

```
npm run dev
```

The server is now running on `http://localhost:4000`. You can send the API requests implemented in `index.js`, e.g. [`http://localhost:4000/products`](http://localhost:4000/products).
