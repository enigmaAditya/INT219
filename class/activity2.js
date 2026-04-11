// In a weather forcasting  application, demonstrate asynchronous execution using setTimeout(), Promises, async/await to simulate fetching weather data, processing weather data, and displaying the weather report
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
            console.log("Displaying weather data for "+location);
            resolve(location);
        },2000)
    })
}
// Using async/await to handle asynchronous code in a cleaner way
async function getWeatherReport(location){
    try{
        const fetchedData = await fetchWeatherData(location);
        const processedData = await processWeatherData(fetchedData);
        const displayedData = await displayWeatherData(processedData);
        return displayedData;
    } catch (error) {
        console.error("Error occurred while fetching weather report:", error);
    }
}
getWeatherReport("Punjab");

// without async/await, we would have to use .then() and .catch() to handle the promises, which can lead to callback hell and make the code harder to read and maintain.
function getWeatherReport(location){
    fetchWeatherData(location)
    .then(fetchedData => {
        return processWeatherData(fetchedData);
    })
    .then(processedData => {
        return displayWeatherData(processedData);
    })
    .then(displayedData => {
        console.log("Final weather report for " + location + ":", displayedData);
    })
    .catch(error => {
        console.error("Error occurred while fetching weather report:", error);
    });
}
getWeatherReport("Punjab");

// 


// Simulating fetching weather data using nested callbacks (callback hell)
// function fetchWeatherData(location, callback){
//     setTimeout(()=>{
//         console.log("Fetching weather data for "+location);
//         callback(location);
//     }, 2000)
// }
// function processWeatherData(location, callback){
//     setTimeout(()=>{
//         console.log("Processing weather data for "+location);
//         callback(location);
//     },2000)
// }

// function displayWeatherData(location){
//     setTimeout(()=>{
//         console.log("Displaying weather data for "+location);
//     },2000)
// }

// fetchWeatherData("Punjab", (location)=>{
//     processWeatherData(location, (location)=>{
//         displayWeatherData(location)
//     })
// })

// Simulating fetching weather data using promises, this is a better way to handle asynchronous code as it allows us to write cleaner and more readable code, it also helps to avoid callback hell, it also allows us to handle errors in a better way, it also allows us to chain multiple asynchronous operations together, ensuring that they are executed in a sequential order.
// function fetchWeatherData(location){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Fetching weather data for "+location);
//             resolve(location);
//         }, 2000)
//     })
// }
// function processWeatherData(location){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Processing weather data for "+location);
//             resolve(location);
//         },2000)
//     })
// }
// function displayWeatherData(location){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Displaying weather data for "+location);
//             resolve(location);
//         },2000)
//     })
// }