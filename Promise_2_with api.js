const axios  = require("axios"); //18.3K (gzipped: 6.8K)


const data = axios.get("https://cat-fact.herokuapp.com/facts");
data.then((res)=>{
   console.log(res.data);
}).catch((err)=>{
   console.log(err);
}).finally(()=>{
    console.log("Promised resolved");
});




