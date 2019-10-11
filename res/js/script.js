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

    function init() {

        $("#profile-container #name").text(user.firstname + " " + user.lastname);
        $("#profile-container #birthdate").text(user.birthdate);
        $("#profile-container #faculty").text(user.faculty);
        $("#profile-container #gpa").text(user.gpa).wrapInner("<strong />");
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

    $('.controls #courses-button').click(function () {
        $("#profile-container").removeClass("active")
        $("#courses-container").toggleClass("active")
            

    });

    $('.controls #profile-button').click(function () {
        $("#courses-container").removeClass("active")
        $("#profile-container").toggleClass("active")
    });
});