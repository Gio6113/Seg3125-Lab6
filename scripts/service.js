// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// https://flaviocopes.com/javascript-regular-expressions/
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^\(\d{3}\)\s{1}\d{3}-\d{4}$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateCVV(cvv) {
    var a = document.getElementById(cvv).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /\d{3}$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateCard(cardnumber) {
    var a = document.getElementById(cardnumber).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
        var a = document.getElementById(cardnumber).value;
        // This filter asks for something like (12345), so parentheses with any number (at least 1)
        // of digits
        var filter = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
        if (filter.test(a)) {
            return true;
        }
        else {
            return false;
        }

}




// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"];
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() === 0)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) === -1 ]
}


// HERE, JQuery "LISTENING" starts
$(document).ready(function(){


    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#debit").on("change", function(){
        if (!validateCard("debit")){
            $("#debit").addClass("debit");
            alert("Wrong format for debit card. Please include spaces between the 4 digits");
            return false;
        }
        else {
            $("#debit").removeClass("debit");
            return true;
        }
    });

    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery
    // You can try different themes (the names are under the calendars) / This is Excite Bike
    // To use a different theme you must include its css in your HTML file.
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/
  


    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put
    $("#debit").on("mouseenter", function(){
        $("#debit").addClass("showInput");
    });

    $("#debit").on("mouseleave", function(){
        $("#debit").removeClass("showInput");
    });

    // https://jqueryui.com/tooltip/
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#debit").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });

    $("#phone").on("change", function(){
        if (!validatePhone("phone")){
            alert("Wrong format for phone. Make sure to include paranthesis for area code and a space after it");
            $("#phone").addClass("error");
            return false;
        }
        else {
            $("#phone").removeClass("error");
            return true;
        }
        
    });

    $("#cvv").on("change", function(){
        if (!validateCVV("cvv")){
            alert("Wrong format for CVV. Only include 3 digits");
            $("#cvv").addClass("error");
            return false;
        }
        else {
            $("#cvv").removeClass("error");
            return true;
        }
        
    });

    $("#cvv").on("mouseenter", function(){
        $("#cvv").addClass("showInput");
    });

    $("#cvv").on("mouseleave", function(){
        $("#cvv").removeClass("showInput");
    });

    $("#cvv").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });

    $("#mysqldate").on("mouseenter", function(){
        $("#mysqldate").addClass("showInput");
    });

    $("#mysqldate").on("mouseleave", function(){
        $("#mysqldate").removeClass("showInput");
    });

    $("#mysqldate").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });


    // DATE AND TIME PICKER FROM https://www.jqueryscript.net/demo/Slick-Datetime-Picker-Plugin-with-jQuery-jQuery-UI-slickDTP/
    var slickDTP = new SlickDTP();
    	
    $( "#mysqldate" ).click(function() {
    	slickDTP.pickDate('#mysqldate','#prettydate');
        var y = document.getElementsByClassName("ui-dialog ui-corner-all ui-widget ui-widget-content ui-front ui-draggable ui-resizable");
        var x = document.getElementsByClassName("ui-dialog-titlebar-close");

        x[0].title = "";
        x[0].innerHTML = "X";
        y[0].classList.add("q");
        console.log(y);
    
     
    });

});