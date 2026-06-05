const server = require("./src/server");
const { conn } = require("./src/db.js");

const PORT = process.env.PORT || 3001;

// El servidor inicia aunque PostgreSQL esté temporalmente caído.
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on port ${PORT}`);
});

// Intentamos sincronizar la base sin bloquear el funcionamiento general.
conn
  .sync({ force: false })
  .then(() => {
    console.log("PostgreSQL connected successfully");
  })
  .catch((error) => {
    console.error("PostgreSQL is unavailable:", error.message);
  });