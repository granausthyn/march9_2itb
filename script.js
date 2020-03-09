var promise = new Promise(function(resolve, reject){
    const name1= "peter";
    const name1= "peter";
    if(name1 == name2){
        resolve();
    }else{
        reject();
    }
});

promise
.then(function(){
    console.log("Successfulli Resolved...")
})
.catch(function(){
    console.log("Failed to resolve...")

})