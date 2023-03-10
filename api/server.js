import pkg from 'pg';

const { Client } = pkg;

export const client = new Client({
    user: "postgres",
    database: "integer",
    host: "localhost",
    password: "171002",
    port: "5432",
})

await client.connect();
console.log("Connection")