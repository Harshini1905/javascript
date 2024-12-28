function attendance(){
    return new Promise((resolve,reject) =>{
    setTimeout(()=>{
        let attendanceAP=true;
        if(attendanceAP)
            resolve("Attendance present")
        else
            reject("Attendance absent");
    },1000);
})
}

function lunch(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            let lun=false;
            if(lun)
                resolve("lunch and snacks finished")
            else
                reject("Didn't eat");
    },1000);
    })
}

 function goingtohome(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            let going=false;
            if(going)
                resolve("Went home")
            else
                reject("Missed the bus");
        
    },1000);
        })
    }

/*
    attendance().then((value) => {console.log(value); return lunch(); })
                .then((value) => {console.log(value); return goingtohome();})
                .then((value) => {console.log(value); })
                .catch((error) => {console.error(error); });
*/

               // let a="harshi"
               // console.log(`my name is ${a}`)


            async function final(){
                try{
                    let att=await attendance();
                    console.log(att);
                    const lun=await lunch();
                    console.log(lun);
                    const home=await goingtohome();
                    console.log(home);
                }
                catch(error)
                {
                    console.error(error);
                }
            }
            final();