$(document).ready(function () {
    $("#calc-btn").on("click", function () {
        if (parseInt($("#hour-input").val()) < 0) {
            alert("Number of tutoring hours must be positive.");
        } else {
            let hours = parseInt($("#hour-input").val());
            let hourlyRate = parseInt($("#hourly-rate").val());

            $("#output-box").val(`$${hours * hourlyRate}`);
        }
    });
});