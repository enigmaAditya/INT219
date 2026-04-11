// import('./studentModule.js').then((studentModule) => {
//     const student = { name: "John Doe", marks: 85 };
//     console.log("Student Name:", studentModule.getStudentName(student));
//     console.log("Student Marks:", studentModule.getStudentMarks(student));
//     console.log("Student Result:", studentModule.calculateResult(student));
// }).catch((error) => {
//     console.error("Error loading student module:", error);
// });
async function loadStudentModule() {
    try {
        const studentModule = await import('./activity6.js');
        const student = { name: "Aditya", marks: 85 };
        console.log("Student Name:", studentModule.getStudentName(student));
        console.log("Student Marks:", studentModule.getStudentMarks(student));
        console.log("Student Result:", studentModule.calculateResult(student));
    } catch (error) {
        console.error("Error loading student module:", error);
    }
}
loadStudentModule();