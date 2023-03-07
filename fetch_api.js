//promises

//3 states:pending,fulfilled,rejected

// const myPromise=new Promise((resolve,reject)=>{
//      const error=false;//resolved
//     //const error=true;

//     if(!error){
//         resolve("Yes! resolved the promise!")
//     }else{
//         reject("No! rejected the promise.")
//     }
// });

// console.log(myPromise);

// myPromise.then(value=>{
//     return value+1;
// })
// .then(newValue=>{
//     console.log(newValue);
// })
// .catch(err=>{
//     console.log(err);
// })

// const myNextPromise=new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         resolve('myNextPromise resolved!')
//     },3000);
// });

// myNextPromise.then(value=>{
//     console.log(value);
// });

// myPromise.then(value=>{
//     console.log(value);
// })
const myUsers={
    userList:[]
};


const myFunc=async ()=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonUserData=await response.json();
    return jsonUserData;
}

const nextFunc=async ()=>{
    const data=await myFunc();
    myUsers.userList=data;
    console.log(myUsers.userList)
}


nextFunc();

console.log(myUsers.userList);


const getAllUserEmails=async()=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/users");
    const jasonUserData=await response.json();

    const userEmailArray=jasonUserData.map(user=>{
        return user.email;
    });

    console.log(userEmailArray);//array will display
    return userEmailArray;

}


console.log(getAllUserEmails());//[]