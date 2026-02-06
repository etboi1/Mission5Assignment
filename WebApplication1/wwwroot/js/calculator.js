// jQuery which
//      a) waits until the page is loaded
//      b) waits until the calc-btn is clicked
//      c) verifies that the hours were a positive number and stops the calculation if it's not
//      d) Outputs the calculated value
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