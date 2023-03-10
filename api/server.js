import mariadb from 'mariadb';

const pool = mariadb.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    database: "pmp",
    password: "",
});

const conn = await pool.getConnection();

const result = await conn.query("select * from mahasiswa");
console.log(result);