//adding eventlisteners to the button(submit)
document.getElementById('submit').addEventListener('click', function(){
    //getting the value of studentMark from the input
    const studentMark = document.getElementById('studentMark').value;
    //calling the gradinf for student mark while storing as grade
    const grade = grading(studentMark);
    //dispalying grade
    document.getElementById('grade').textContent = grade;
})
//beginning of the function with control flow if.....else if....
    function grading(studentMark){
    if (studentMark >=0 && studentMark <40){
        return "E";
    } else if (studentMark >=40 && studentMark <49){
        return "D";
    } else if (studentMark >=49 && studentMark <59){
        return "C";
    } else if (studentMark >=59 && studentMark <79){
        return "B";
    } else if (studentMark >=79 && studentMark <=100){
        return "A";
        //end of the control flow (use of else ) incase any other value is entered which does not range from 0 to 100
    } else{
        return "Invalid Score";
    }
}
//calling the grading function with the value so as to output the results
console.log (grading(59));