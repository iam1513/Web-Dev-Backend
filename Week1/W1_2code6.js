// OBJECTS

// const user1 = {
//     firstName : "Om",
//     gender : "Male"
// }

const allUsers = [{
    firstName : "Om",
    gender : "Male"
},
{
    firstName : "Ashish",
    gender : "Male"
},
{
    firstName : "Swati",
    gender : "Female"
}
]

for( let i = 0; i < allUsers.length;i++){
    if(allUsers[i]["gender"] == "Male"){
        console.log(allUsers[i]["firstName"]);
    }
}