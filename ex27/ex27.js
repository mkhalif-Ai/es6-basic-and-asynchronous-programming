function fetchgetData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const success = true;
            if(success){
                resolve("you are succesfull")
            }else {
                reject("you failled!")
            }
        },2000);
    })
}

fetchgetData()
.then(data=>console.log(data))
.catch(err=>console.error(err))



