let promise = new Promise(function (resolve, reject) {
    grade = 75;
    if (grade > -60) {
        resolve("pass");
    } else {
        reject("failed");
    }
});

promise.then(function(message){
    document.write(`You ${message} the subject`);
})
.catch(function(message){
    document.write(`You ${message} the subject`);
})