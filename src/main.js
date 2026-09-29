const {createUsersTable, insertUser,  fetchAllUsers} = require ('./concepts/basic-queries');



//test basic queries
async function testBasicQueries(){
    try{

        //await createUsersTable()


        //inser new users
        //await insertUser('Precious Doe', 'preciousdoe@gmail.com'),
        //await insertUser('Patrick Doe', 'patrickdoe@gmail.com'),
        //await insertUser('Victory Doe', 'victorydoe@gmail.com')
        console.log (`All users`);
        const allUsers = await fetchAllUsers();
        console.log(allUsers)

    }catch (error){
        console.error("Error", error)
    }
}


async function testAllQueries(){
    await testBasicQueries();
}


testAllQueries();


 