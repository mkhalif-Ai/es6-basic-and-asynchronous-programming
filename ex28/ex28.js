
function fetchgetData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const success = true;
            if(success){
                resolve("you are good to go")
            } else{
                reject("failed to fetch user data")
            }
        },2000)
    })
}
async function getData() {
    try{
        const user = await fetchgetData()
        console.log(user);
    }catch(error){
        console.log("errror");
    }
}

getData()

















