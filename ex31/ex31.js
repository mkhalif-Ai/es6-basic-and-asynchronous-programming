async function haveUsers() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if(!response.ok){
            throw new error(`HTTP faild: ${response.status}`)
        }
        const data = await response.json()
        console.log(data);
    }catch(error)   {
         console.log("error");
    }
}
haveUsers()