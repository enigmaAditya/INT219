function fetchWeatherData(location){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Fetching weather data for "+location);
            resolve(location);
        }, 2000)
    })
}
function processWeatherData(location){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Processing weather data for "+location);
            resolve(location);
        },2000)
    })
}
function displayWeatherData(location){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Displayed weather data for "+location);
            resolve(location);
        },2000)
    })
}
async function getWeatherData(location){
    try{
        const fetchdata=await fetchWeatherData(location);
        const processdata = await processWeatherData(fetchdata);
        const displaydata = await displayWeatherData(processdata);
        return displaydata;
    }
    catch(error){
        console.log("Error fetching weather data: ", error);
    }
}