const arrOfObj = [
  {
    id: 1,
    age: 23,
    name: "Shivam",
    email: "shivam@gmail.com",
    phone: "9876543210",
  },
  {
    id: 2,
    age: 21,
    name: "Hirav",
    email: "hirav@gmail.com",
    phone: "9876543211",
  },
  {
    id: 3,
    age: 24,
    name: "Rahul",
    email: "rahul@gmail.com",
    phone: "9876543212",
  },
];
const sortByAge = "asc";
const soertUserByName = arrOfObj.sort((a, b) => {
  if (sortByAge == "asc") return a.name.localeCompare(b.name);
  if (sortByAge == "desc") return b.name.localeCompare(a.name);
});
const soertUserByAge = arrOfObj.sort((a, b) => {
  if (sortByAge == "asc") return a.age - b.age;
  if (sortByAge == "desc") return b.age - a.age;
});
console.log(soertUser);
// const searchUser = "ul"

// // for(let i=0; i<arrOfObj.length; i++){
// //     if(arrOfObj[i].email.toLowerCase().includes(searchUser.toLowerCase())){
// //         console.log(arrOfObj[i])
// //     }
// // }

// const filterUser = arrOfObj.filter((ele)=>{
//     if(ele.name.toLowerCase().includes(searchUser.toLowerCase()) || ele.email.toLowerCase().includes(searchUser.toLowerCase())){
//         return ele
//     }
// })

// console.log(filterUser)
