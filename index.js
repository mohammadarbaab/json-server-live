const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');  // db.json ka path yeh hai
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

server.use(middlewares);

// CORS ko enable karna agar aapka frontend alag port pe chal raha ho
server.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Mock data routing ko use karna
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});
