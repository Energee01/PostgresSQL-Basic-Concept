const {createUsersTable, insertUser,  fetchAllUsers, updateUserInfo, deleteInfo} = require ('./concepts/basic-queries');
const {getUsersWhere, getSortedUsers, getPaginatedUsers} = require('./concepts/filter-sorting')
const {createPostsTable, insertNewPost} = require('./concepts/relationships')


//test basic queries
async function testBasicQueries(){
    try{

        await createUsersTable()


        // insert new users
        await insertUser('Precious Doe', 'preciousdoe@gmail.com'),
        await insertUser('Patrick Doe', 'patrickdoe@gmail.com'),
        await insertUser('Victory Doe', 'victorydoe@gmail.com')
        console.log (`All users`);
       const allUsers = await fetchAllUsers();
       console.log(allUsers);


       const updatedUser = await updateUserInfo(
        'John Doe',
        'johnnyDoe@gmail.com'
       );
       console.log(updatedUser);
    const deletedUser = await deleteInfo('John Doe');

    console.log(deletedUser);

    }catch (error){
        console.error("Error", error)
    }
}

async function testFilterAndSortQueries(){
    try{
        //get users with a username starting with v

        // const vFilteredUsers = await getUsersWhere("username LIKE 'V%'");
        // console.log(vFilteredUsers);


        // const sortedUsers = await getSortedUsers('created_at', "ASC")
        //console.log(sortedUsers)

        const paginatedUsers = await getPaginatedUsers(2,1)
        //(2,0) basically stating that give me 2 data with an offset of 0
        console.log('paginatedUsers', paginatedUsers);
    } catch (e) {
        console.error('Error', e);
    }

}

async function testRelationshipQueries(){
    try{
       // await createPostsTable()
       await insertNewPost('First post', 'Hello ', 5)

    }catch(e){
        console.error('Error', e)
    }
}

async function testAllQueries(){
    // await testBasicQueries();
    // await testFilterAndSortQueries();
     await testRelationshipQueries()
}



testAllQueries();


 