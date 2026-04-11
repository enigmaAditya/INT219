// In a ride booking application (like cab services) demonstrate asynchronous execution using setTimeout(), promises, and aync/await to simulate driver search, ride confirmation, and trip completion.
function searchDriver(location){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Searching for drivers near "+location);
            resolve(location);
        }, 2000)
    })
}
function confirmRide(location){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(location==="Delhi"){
                reject("no driver found")
            }
            else{
                console.log("Confirming ride for "+location);
                resolve(location);
            }
        },2000)
    })
}
function completeTrip(location){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Completing trip for "+location);
            resolve(location);
        }, 2000)
    })
}

async function bookRide(location){
    try{
        const drivesearch = await searchDriver(location);
        const rideconfirmation = await confirmRide(drivesearch);
        const tripcompletion = await completeTrip(rideconfirmation);
        return tripcompletion;
    }
    catch(error){
        console.log("Trip planning failed");
    }
}
bookRide("Delhi")