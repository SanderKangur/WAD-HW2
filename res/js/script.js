$(function () {
    var user = new User(
        "Martin",
        "Vahe",
        "11.11.2001",
        "IT",
        "2.2"
    );
    var courses = [
       new Course("Business Analysis", 1, 70),
       new Course("Computer Graphics", 1, 84),
       new Course("Artificial Intelligence", 2, 56),
       new Course("Neural Networks", 2, 71)
    ];
    init();

    function calculateGPA() {
        sum = 0
        for (let i = 0; i < courses.length; i++) {
            sum += getGradePoints(courses[i].grade);
        }
        let num = sum/courses.length;
        return Math.round(num * 100) / 100;
    };

    function init() {

        $("#profile-container #name").text(user.firstname + " " + user.lastname);
        $("#profile-container #birthdate").text(user.birthdate);
        $("#profile-container #faculty").text(user.faculty);
        $("#profile-container #gpa").text(calculateGPA()).wrapInner("<strong />");
        $("#courses").empty();
        
        for (let i = 0; i < courses.length; i++) {
            let tr = $("<tr></tr>");
            let nr = $('<td></td>').text(i+1);
            let title = $('<td></td>').text(courses[i].title);
            let semester = $('<td></td>').text(courses[i].semester);
            let grade = $('<td></td>').text(courses[i].grade);

            tr.append(nr);
            tr.append(title);
            tr.append(semester);
            tr.append(grade);

            $("#courses").append(tr)
        }
        
    
    }

    $('#courses-button').click(function () {
        $("#profile-container").removeClass("active")
        $("#profile-button").removeClass("active")
        $("#courses-container").addClass("active")
        $(this).addClass("active")
        
            

    });

    $('#profile-button').click(function () {
        $("#courses-container").removeClass("active")
        $("#courses-button").removeClass("active")
        $("#profile-container").addClass("active")
        $(this).addClass("active")
    });

    $("#add-course-button").click(function () {
        $("#add-course").toggleClass("hidden")
    });

    $("#save-course").click(function () {
        courses.push(new Course($("#title").val(),$("#semester").val(),$("#grade").val()));
        $("#title").val("");
        $("#semester").val("");
        $("#grade").val("");
        init();
        alert("Added succesfully!");
        $("#add-course").toggleClass("hidden")
    });
    
});
function getGradePoints(grade) {
    if (grade >= 90) {
        return 4;
    } else if (grade >= 80) {
        return 3;
    } else if (grade >= 70) {
        return 2;
    } else if (grade >= 60) {
        return 1;
    } else if (grade >= 50) {
        return 0.5;
    } else {
        return 0;
    };



};

