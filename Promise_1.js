// console.log("Hey :)");
// var name = "Sarad";
// console.log(name);
// name="Ram";
// console.log(name);


// var listOfMovies = fetch ("url.com/movies") //will takes some time to be fetched
// console.log(listOfMovies) 


const event = new Promise((resolve, reject)=>{
    var name = "Ram";
    if (name == "Sarad"){
        resolve(name);
    }else{
        reject("Name is not Sarad, name is : " + name);
    }
});
event
 .then((name)=>{
    console.log(name);
})
 .catch((err)=>{
    console.log(err);
})     
.finally(()=>{
    console.log("Promise Finished");
});
