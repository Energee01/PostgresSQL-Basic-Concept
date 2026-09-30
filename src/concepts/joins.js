const db = require('../db/db');


// join returns only the rows where there's a match in both tables 

async function getUsersWithPosts(){
    const getUsersWithPostsQuery = `
    SELECT users.id, users.username, posts.title
    FROM users 
    JOIN posts ON users.id = posts.user_id
    `
    try{
        const res = await db.query(getUsersWithPostsQuery);
        return res.rows;
    }catch(e){
        console.error(e)
    }
}


async function getAllUsersAndTheirPosts(){
    const getAllUsersAndTheirPostsQuery = `
    SELECT users.id, users.username, posts.title
    FROM users
    LEFT JOIN posts ON users.id = posts.user_id`
    try{
        const res = await db.query(getAllUsersAndTheirPostsQuery);
        return res.rows;
    }catch(e){
        console.error(e)
    }
}



module.exports = {getUsersWithPosts , getAllUsersAndTheirPosts }


