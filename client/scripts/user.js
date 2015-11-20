/**
 * Created by Thomas on 11/19/15.
 */
$(document).ready(function(){
    console.log("Hey it loads!");

    $.ajax({
        type: "GET",
        url: "/user",
        success: function (data) {
            $("#welcome").text("Welcome," + data.username + data.firstname + data.lastname + data.email);
        }
    });
});