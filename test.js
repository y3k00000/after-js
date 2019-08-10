const after = require("./index");
(async ()=>{
    console.log("start");
    for(let i=0;i<10;i++){
        await after.period(1000);
        console.log(i);
    }
    console.log("end");
})();