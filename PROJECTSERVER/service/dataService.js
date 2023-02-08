// import db.js

const db = require('./db')

// import jwt token

 const jwt = require('jsonwebtoken')



  userDetails={
    amal:{username:"amal",password:1000,email:"amal@apv.com"},
    anu:{username:"anu",password:1001,email:"anu@apv.com"},
    arun:{username:"arun",password:1002,email:"arun@apv.com"},
    sarah:{username:"sarah",password:1003,email:"sarah@apv.com"}
  }

// booking

book =(name,email,phone,date,time,nop)=>{
    return db.Booker.findOne({email})
    .then(booker=>{
        if(booker){
            return {
                statusCode:401,
                status:false,
                message:"This user already Booked"
            }
        }
        else{
              const newBooker = new db.Booker({
                name,
                email,
                phone,
                date,
                time,
                nop
              })  

              newBooker.save()

              return {
                status:true,
                statusCode:200,
                message:"Booking successful"
              }
        }
    })
}




//  register

register=(email,uname,pswd)=>{
    return db.Customer.findOne({uname})
    .then(customer=>{
        if(customer){
            return {
                statusCode:401,
                status:false,
                message:"user already exists"
            }
        }
        else{
            const newCustomer =new db.Customer({
                uname,
                pswd,
                email
            })

            newCustomer.save()

            return  {
                status:true,
                statusCode:200,
                message:"registration successful"
            }
            
        }
    })


//     if(uname in userDetails){
//         return {
//             status:false,
//             statusCode:401,
//             message:"user already exists"
//         }
//     }
//     else{
//         userDetails[uname]={uname,email:email,password:pswd}
//         console.log(userDetails);
//         return  {
//             status:true,
//             statusCode:200,
//             message:"registration successful"
//         }
//     }
}
login=(uname,pswd)=>{
  
   
   
    return db.Customer.findOne({uname,password:pswd}).then(customer=>{
        if(customer){
            const token = jwt.sign({currentuname:uname},'secretkey123')
            return {
                statusCode:200,
                status:true,
                message:"login success",
                token
             }
              
            
            }else
            {
              return {
                statusCode:400,
                status:false,
                message:"incorrect password"
              }
            }
          
           
        }
    
    )
}
//     })
//         const token = jwt.sign({currentuname:uname},'secretkey123')
//       return {
//          statusCode:200,
//          status:true,
//          message:"login success",
//          token
//       }
       
     
//      }else
//      {
//        return {
//          statusCode:400,
//          status:false,
//          message:"incorrect password"
//        }
//      }
   
//     }else{
//      return {
//          statusCode:400,
//          status:false,
//          message:"incorrect username"
//        }
//    }
//  }


module.exports={
    register,
    login
}