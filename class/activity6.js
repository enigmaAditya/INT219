// Design a student management system where you use a namespace import toaccess functionslike getStudentName(), getStudentmarks(), andcalculateResult(),and implement a dynamic import(import()) with async/await and error handlingthrough a loadStudentModule() function ytoload the moduleonlywhenstudent detailsarerequested.

export function getStudentName(student) {
    return student.name;
}
export function getStudentMarks(student) {
    return student.marks;
}
export function calculateResult(student) {
    const marks = getStudentMarks(student);
    if (marks >= 90) {
        return "A";
    }
    else if (marks >= 80) {
        return "B";
    }
    else if (marks >= 70) {
        return "C";
    }
    else if (marks >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}


