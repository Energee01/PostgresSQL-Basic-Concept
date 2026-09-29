const db = require('../db/db');

async function createUsersTable(){
    //before you create any table always create an SQL query
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP)`;


        try{
            await db.query(createTableQuery)
            console.log('Users table created successfully')

        } catch(error){
            console.error('Error while creating', error)
        }
            
}

async function insertUser(username, email){
    const insertUserQuery = `
    INSERT INTO users (username, email)
    VALUES ($1, $2)
    ON CONFLICT (username) DO NOTHING
    RETURNING *`
    //the $1 and $2 are just parameter queries to prevent SQL injection attacks
    
    const result = await db.query(insertUserQuery, [username, email])
    if (result.rowCount === 0) {
        console.log(`User ${username} already exists; skipped`)
        return
    }
    console.log('User inserted successfully', result.rows[0]);
}


async function fetchAllUsers(){
    const getAllUsers = `SELECT * FROM users`

    try{

        const res = await db.query(getAllUsers)
        console.log('Fetched all users');

        return res.rows

    }catch (error){
        console.error(`Error`, error);
    }
}

module.exports = { createUsersTable, insertUser, fetchAllUsers}