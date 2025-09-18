import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "123456", // Coloca tu contraseña de MySQL
  database: "crud_api",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default connection;
