const express = require('express');
const app = express();
const port = 3000;
const mongoose = require("mongoose")
require("dotenv").config();
const URL = process.env.mongoUrl

const transcModel = require("./models/transction")

const testDetails = require("./controller/test");
const { eventNames } = require('./models/transction');
const axios = require("axios").default


mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('database connected')
}).catch(err => {
  console.log('database not connected', err)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
// const transactions = [
//   {
//     "Date": "12-01-2022",
//     "From": 1001,
//     "To": 1003,
//     "Amount": 15000
//   },
//   {
//     "Date": "12-01-2022",
//     "From": 1003,
//     "To": 1002,
//     "Amount": 12000
//   },
//   {
//     "Date": "12-01-2022",
//     "From": 1002,
//     "To": 1005,
//     "Amount": 2000
//   },
//   {
//     "Date": "13-01-2022",
//     "From": 1003,
//     "To": 1001,
//     "Amount": 1000
//   },
//   {
//     "Date": "13-01-2022",
//     "From": 1002,
//     "To": 1001,
//     "Amount": 1200
//   },
//   {
//     "Date": "14-01-2022",
//     "From": 1001,
//     "To": 1002,
//     "Amount": 3000
//   },
//   {
//     "Date": "14-01-2022",
//     "From": 1005,
//     "To": 1003,
//     "Amount": 1500
//   },
//   {
//     "Date": "15-01-2022",
//     "From": 1005,
//     "To": 1003,
//     "Amount": 4000
//   }
// ]

// app.get('/as', async (req, res) => {
//   try {
//     const response = await axios.get('https://randomuser.me/api?results=1');
//     console.log(response.data.results[0]);
//     // return res.send(
//     //   {
//     //     error: false,
//     //     type: "success",
//     //     message: 'created successfully',
//     //     result: response.data.results[0]
//     //   }
//     // )
// let sortarray=[]
// let date =[]
//       for (let i = 0; i < response.data.results.length; i++) {
//     sortarray.push(response.data.results[0].name.last)
//   }

//     res.status(200).json({
//       error: false,
//       message: "Created Successfully",
//       result: response.data.results[0].name.last,
//       date:new Date(response.data.results[0].dob.date).getFullYear()
//   })
//   } catch (error) {
//     console.log(error)
//   }

// });

// app.get('/transactions', async (req, res) => {
//   try {
//     let findQuery = req.query
//     if (!req.query) {
//       findQuery = {}
//     }
//     console.log("DDDDDDDDDD", req.query)
//     let find = await transcModel.find({ findQuery }).sort({ findQuery: 1 })

//     return res.send(
//       {
//         error: false,
//         type: "success",
//         message: 'listed successfully',
//         result: find
//       }
//     )
//   } catch (error) {
//     console.log(error)
//   }

// });



// console.log(5===5)
// console.log(5==="5")
// console.log("5"==="5")
// console.log(1===true)
// console.log(0==true)
// console.log(1==true)

// const a 
// console.log(a)
//  a =5
// console.log(a)

// const a ={b:5}
// console.log(a)

//  a =6
// console.log(global.a)

// function sum(a, b) {

//   return a + b;

// }



//Function expression

// const sumEx = function (a, b) {
//   return a + b;

// };
// // Arrow function
// const sumAr1 = (a, b) => {
//   return a + b;
// };
// // Arrow function

// const sumAr2 = (a, b) => a + b;

// console.log(sum(1, 2));

// console.log(sumEx(1, 2));

// console.log(sumAr1(1, 2));

// console.log(sumAr2(1, 2));

// async function name(){
//   const sum = async(a,b) =>a+b;
//  sum(5,1).then(a => console.log(a))
//   console.log("DOne")
// }
// // name()
// async function name(){
//   const response = await axios.get('https://randomuser.me/api?results=5');
// console.log(response.data.results[0]);

//   for(let i=0;i<response.data.results.length;i++){
//     console.log(response.data.results[i].name.first); 
//   }



// new thing

// async function name() {
//   const response = await axios.get('https://randomuser.me/api?results=5');
//   const json = response.data
//   let arrayNew = []
//   let sortarray = []
//   for (let i = 0; i < response.data.results.length; i++) {
//     arrayNew.push(response.data.results[i].name.first)
//   }

//   for (let i = 0; i < response.data.results.length; i++) {
//     sortarray.push(response.data.results[i].name.last)
//   }
//   let result1 = []
//   for (let i = 0; i < arrayNew.length; i++) {
//     result1.push(arrayNew[i] + " " + sortarray[i])
//   }

//   console.log(result1)

//   let lastName = sortarray.sort()
//   let result = []
//   for (let i = 0; i < arrayNew.length; i++) {
//     result.push(arrayNew[i] + " " + lastName[i])
//   }

//   console.log(result)


// } name()

                                  // By using MAp
                                  
// let json=[]
// async function name() {
//   const response = await axios.get('https://randomuser.me/api?results=5');
//    json = response.data.result

//    const filterUser = response.data.results.filter(
//      (user) => user.gender =="male"
//    )
//   //  console.log(filterUser)
//    filterUser.sort((first, next) =>
//     first.name.last.localeCompare(next.name.last)
//   );
//   const users = filterUser.map(
//     (user) => `${user.name.first} ${user.name.last} ${user.gender}`
//   );
//   console.log(users.join(", "));

// } name()


// app.get('/', async (req, res) => {
//   try {
//     const response = await axios.get('https://randomuser.me/api?results=6');
   
// // let sortarray=[]
// // let date =[]
// //       for (let i = 0; i < response.data.results.length; i++) {
// //     sortarray.push(response.data.results[i].name.last)
// //     date.push(new Date(response.data.results[i].dob.date).getFullYear())
// //   }

//     res.status(200).json({
//       error: false,
//       message: "Created Successfully",
//       result: response.data.results[0].name.last,
//       date:new Date(response.data.results[0].dob.date).getFullYear()
//   })

// //   res.status(200).json({
// //     error: false,
// //     message: "Created Successfully",
// //     result: sortarray,
// //     date:new Date(response.data.results[0].dob.date).getFullYear()
// // })
//   } catch (error) {
//     console.log(error)
//   }

// });

// app.get('/', async (req, res) => {
//   try {
//     let today = new Date().toUTCString();
//     let todaq1 = new Date(new Date().getTime()+(24 * 60 * 60 * 1000)).toUTCString() 
//     res.status(200).json({
//       error: false,
//       message: "Created Successfully",
//       result: today,
//       date:todaq1
//   })

//   } catch (error) {
//     console.log(error)
//   }

// });

// print minute left
// app.get('/', async (req, res) => {
//   try {
//     let today = new Date().getTime()
//     let time = new Date("2022-11-30T16:00:00.000+05:30").getTime()
//     let final =(time-today) /1000/60

//     // let minutes = new Date(final).getMinutes();
    
//     res.status(200).json({
//       error: false,
//       message: "Created Successfully",
//       result: final ,
//       // date:final
//   })

//   } catch (error) {
//     console.log(error)
//   }

// });

// app.get('/', async (req, res) => {
//   try {
//     let today = "2022-11-30T16:00:00.000+05:30"
//     let finalYear = today.split("-")[0]
//     let finalYear1 = today.substring(0,4)
//     let finalYear2 = new Date(today).getFullYear()
//     let finalYear3 = today.slice(0,4)

//     let final ={
//       finalYear,
//       finalYear1,
//       finalYear2,
//       finalYear3
//     }

//     res.status(200).json({
//       error: false,
//       message: "Created Successfully",
//       result: final ,
//       // date:final
//   })

//   } catch (error) {
//     console.log(error)
//   }

// });

// app.set("view engine", "ejs")

// app.get('/', async (req, res) => {
//   try {
//     let today = "2022-11-30T16:00:00.000+05:30"
//     let test = today.split("T")[1].split(":")
//     const time = test[0]+ ":" + test[1]
//     let finalYear =time
//     let finalYear1 = today.substring(11,17)
//     let finaYear2 = new Date(today)
//     let finalYear2 = finaYear2.getUTCHours() + ":" + finaYear2.getUTCMinutes()

//     let finalYear3 = today.slice(11,17)

//     let final ={
//       finalYear,
//       finalYear1,
//       finalYear2,
//       finalYear3
//     }

//     res.status(200).json({
//       error: false,
//       message: "Created Successfully",
//       result: final ,
//       // date:final
//   })

//   } catch (error) {
//     console.log(error)
//   }

// });

// app.set("view engine", "ejs")

// app.get('/', async (req, res) => {
//   try {
//      const response = await axios.get('https://randomuser.me/api?results=1');
   
//    let  user = response.data.results[0]

//   //  console.log(user)
//     res.render("user.ejs",{user})

//   } catch (error) {
//     console.log(error)
//   }

// });


// app.get('/', async (req, res) => {
//   try {
//      const response = await axios.get('https://randomuser.me/api?results=5');
   
//    let  userList = response.data.results

//    console.log(userList)
//     res.render("user.ejs",{userList})

//   } catch (error) {
//     console.log(error)
//   }

// });


// picture.thumbnail


// find duplicate account number

// const customers = [
//   {
//   "AccountNo": 1001,
//   "Name": "John",
//   "City": "Bangalore"
//   },
//   {
//   "AccountNo": 1002,
//   "Name": "Tom",
//   "City": "Mysore"
//   },
//   {
//   "AccountNo": 1003,
//   "Name": "Kate",
//   "City": "Pune"
//   },
//   {
//   "AccountNo": 1004,
//   "Name": "Tom",
//   "City": "Delhi"
//   },
//   {
//   "AccountNo": 1005,
//   "Name": "Kate",
//   "City": "Mumbai"
//   },
//   {
//     "AccountNo": 1006,
//     "Name": "Kate",
//     "City": "Mysore"
//     },

//   ]

  // app.get('/', async (req, res) => {
  //   try {
  //     const foundDuplicateName = customers.find((nnn, index) =>{
  //       return customers.find((x, ind)=> x.Name === nnn.Name && index !== ind )
  //        })
  
  //   res.status(200).json({
  //     error: false,
  //     message: "Created Successfully",
  //     // result: duplicate?.AccountNo || "No data found" ,
  //     date:foundDuplicateName
  // })
  
  //   } catch (error) {
  //     console.log(error)
  //   }
  
  // });


  // 4th Assesment 

  // const customers = [
  //   {
  //   "AccountNo": 1001,
  //   "Name": "John",
  //   "City": "Bangalore",
  //   "blsAmount":0
  //   },
  //   {
  //   "AccountNo": 1002,
  //   "Name": "Tom",
  //   "City": "Mysore",
  //   "blsAmount":0
  //   },
  //   {
  //   "AccountNo": 1003,
  //   "Name": "Kate",
  //   "City": "Pune",
  //   "blsAmount":0
  //   },
  //   {
  //   "AccountNo": 1004,
  //   "Name": "Paul",
  //   "City": "Delhi",
  //   "blsAmount":0
  //   },
  //   {
  //   "AccountNo": 1005,
  //   "Name": "Riya",
  //   "City": "Mumbai",
  //   "blsAmount":0
  //   }
  //   ]

  //   const transactions = [
  //     {
  //     "Date": "12-01-2022",
  //     "From": 1001,
  //     "To": 1003,
  //     "Amount": 15000
  //     },
  //     {
  //     "Date": "12-01-2022",
  //     "From": 1003,
  //     "To": 1002,
  //     "Amount": 12000
  //     },
  //     {
  //     "Date": "12-01-2022",
  //     "From": 1002,
  //     "To": 1005,
  //     "Amount": 2000
  //     },
  //     {
  //     "Date": "13-01-2022",
  //     "From": 1003,
  //     "To": 1001,
  //     "Amount": 1000
  //     },
  //     {
  //     "Date": "13-01-2022",
  //     "From": 1002,
  //     "To": 1001,
  //     "Amount": 1200
  //     },
  //     {
  //     "Date": "14-01-2022",
  //     "From": 1001,
  //     "To": 1002,
  //     "Amount": 3000
  //     },
  //     {
  //     "Date": "14-01-2022",
  //     "From": 1005,
  //     "To": 1003,
  //     "Amount": 1500
  //     },
  //     {
  //     "Date": "15-01-2022",
  //     "From": 1005,
  //     "To": 1003,
  //     "Amount": 4000
  //     }
  //     ]
      

  //  app.get('/', async (req, res) => {
  //   try {
  //     // for (let i=0;i<transactions.length;i++){

  //     //   for (let k=0;k<customers.length;k++){
  //     //   if(transactions[i].From == customers[k].AccountNo ){
  //     //   customers[k].blsAmount =customers[k].blsAmount - transactions[i].Amount 
  //     //   }else if(transactions[i].To == customers[k].AccountNo){
  //     //   customers[k].blsAmount = customers[k].blsAmount +transactions[i].Amount 
  //     //   }
  //     //   }
        
  //     //   }
        
  //     //   console.log(customers)

  //     let customerBalance=[]

  //     for (const customer of customers){
  //      let balance =0 
  //      for (const transction of transactions) {
  //        if(transction.From === customer.AccountNo){
  //          balance -= transction.Amount
  //        }else if(transction.To === customer.AccountNo){
  //         balance += transction.Amount
  //        }
  //      }
  //      customerBalance.push({account:customer.AccountNo,name:customer.Name,balance})
  //     }
  
  //   res.status(200).json({
  //     error: false,
  //     message: "Created Successfully",
  //     // result: duplicate?.AccountNo || "No data found" ,
  //     date:customerBalance
  // })
  
  //   } catch (error) {
  //     console.log(error)
  //   }
  
  // });


  
  app.use(express.json())
  app.use("/newApp", require("./views/src/index"));