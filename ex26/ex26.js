
function userInfo(){
    alert("fetching data")
    return{name:"ali",id:2 ,age:30}
}
console.log("before");
const info = userInfo()
console.log(info);
console.log("blocked data");



function getUser(callback){
setTimeout(()=>{
const user = {name:"ali", age:20}
callback(user)
},2000)
}
getUser((user)=>{
    console.log(user);
})