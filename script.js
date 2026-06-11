function calculateGrade(){

    alert("🎓 Welcome to Professional Grade Calculator");

    let studentName = prompt("Enter Student Name");

    let mark1 = Number(prompt("Enter English Marks"));
    let mark2 = Number(prompt("Enter Maths Marks"));
    let mark3 = Number(prompt("Enter Science Marks"));
    let mark4 = Number(prompt("Enter Social Marks"));
    let mark5 = Number(prompt("Enter Computer Marks"));

    if(
        mark1<0 || mark1>100 ||
        mark2<0 || mark2>100 ||
        mark3<0 || mark3>100 ||
        mark4<0 || mark4>100 ||
        mark5<0 || mark5>100
    ){
        alert("Please enter marks between 0 and 100");
        return;
    }

    let total = mark1 + mark2 + mark3 + mark4 + mark5;

    let average = total / 5;

    let grade;
    let message;

    if(average >= 90){
        grade = "A+";
        message = "🌟 Outstanding Performance!";
    }
    else if(average >= 80){
        grade = "A";
        message = "🎉 Excellent Work!";
    }
    else if(average >= 70){
        grade = "B";
        message = "👍 Very Good!";
    }
    else if(average >= 60){
        grade = "C";
        message = "😊 Good Job!";
    }
    else if(average >= 50){
        grade = "D";
        message = "⚡ Need More Practice!";
    }
    else{
        grade = "F";
        message = "📖 Work Hard!";
    }

    let today = new Date();

    alert(
        "🎓 STUDENT REPORT CARD\n\n" +
        "Name : " + studentName +
        "\nTotal Marks : " + total +
        "\nAverage : " + average.toFixed(2) +
        "\nGrade : " + grade +
        "\nRemark : " + message
    );

    document.getElementById("result").innerHTML =

    "<h2>🎓 Student Report Card</h2>" +

    "<br><b>Name :</b> " + studentName +

    "<br><b>Date :</b> " + today.toLocaleDateString() +

    "<br><b>Total Marks :</b> " + total +

    "<br><b>Average :</b> " + average.toFixed(2) +

    "<br><b>Grade :</b> " + grade +

    "<br><b>Remark :</b> " + message;
}