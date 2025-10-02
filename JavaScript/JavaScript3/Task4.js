let names = [];
let grades = [];
let addStudent = (name, grade) => {
    names.push(name);
grades.push(grade);
   
}

addStudent("Gabriel", 79);
addStudent("Peter", 80);
addStudent("Deji", 88);

console.log(names, grades)

 let average = (grades) => {
    let total = 0;
    for (let grade of grades){
        total += grade;
    }
    averageGrade = total / grades.length;
    return averageGrade;
 }

 console.log(`Average grade is ${average(grades)}`)
 

 let highestScore = (grades) =>{
     let hScore = Math.max(...grades);
     let hscoreIndex = grades.indexOf(hScore);
     let swhs = names[hscoreIndex];
     return swhs;
    }
    let studentWithHighestScore = highestScore(grades);
console.log(studentWithHighestScore);


 let lowestScore = (grades) =>{
    let lScore = Math.min(...grades);
    let lScoreIndex = grades.indexOf(lScore);
    let swls = names[lScoreIndex];
    return swls;
 }

let studentWithLowestScore = lowestScore(grades);
console.log(studentWithLowestScore);