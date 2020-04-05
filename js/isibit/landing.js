var  mn = $(".navbar.navbar-default");
var  mns = "navbar-fixed-top";
var  hdr = $('#header').height();

var form;

new WOW().init();


$(window).scroll(function() {
    if( $(this).scrollTop() > (hdr+80) ) {
        mn.addClass(mns);
    } else {
        mn.removeClass(mns);
    }
});


$('#submitmodal').on('shown.bs.modal', function () {
    $('#firstname').trigger('focus')
});

const brw = browser();
const brw_os = detect_os();
const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
//const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

$(document).ready(function() {
    form = $("#joinbeta");

    hide_needs_tabs();
    $("#txt_managers").show();

    form.validate({
        rules: {
            firstname : {
                required: true,
                minlength: 3
            },
            lastname : {
                required: true,
                minlength: 3
            },
            company : {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            }
        },
        messages : {
            firstname: {
                minlength: "Name should be at least 3 characters"
            },
            lastname: {
                minlength: "Name should be at least 3 characters"
            },
            company: {
                minlength: "Name should be at least 3 characters"
            },
            email: {
                email: "The email should be in the format: abc@domain.tld"
            },
        }
    });


    $("#btn_managers, #btn_teams, #btn_travelers").click(function(){
        hide_needs_tabs();
        name = $(this).attr('id');
        name = name.replace('btn','txt');
        $("#"+name).show(0);
    });

    $( ".btn_beta, .btn_beta_white").click(function() {
        //cleanForm();
    });

    $( "#btn_submit").click(function() {
        var complete = form.valid();
        console.log(complete);
        if (complete == false)
            return;

        let f_firstname = $('#firstname').val();
        let f_lastname = $('#lastname').val();
        let f_email = $('#email').val();
        let f_company = $('#company').val();
        let f_country = $('#country').val();

        let data = {
            first_names : f_firstname,
            last_names: f_lastname,
            company_email: f_email,
            company: f_company,
            country: f_country,
            mobileorweb: brw+"w"+vw,
            os: brw_os
        };

        //console.log (jsonData);
        sendData(JSON.stringify(data));
    });
});

function cleanForm(){
    $('#firstname').val('');
    $('#lastname').val('');
    $('#email').val('');
    $('#company').val('');
}


function sendData(jsonData){
    let googleUrl= "https://script.google.com/macros/s/AKfycbz5oaeGtQF_KIFNHs2CcqxUTUQ8EYEbzE13_NgK-hk52N0DrSF5/exec";
    console.log(jsonData);
    $("#btn_submit").attr('disabled', true);


    var request = $.ajax({
        url: googleUrl,
        type:"POST",
        dataType: 'json',
        data: jsonData
    });

    request.done(function (response, textStatus, jqXHR){
        console.log("Finish Onboarding Process");
        form.html(" ");
        $('#f_complete').removeClass("d-none");
        $('#f_complete').show();
    });

    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.log(
            "Error: "+
            textStatus, errorThrown
        );
    });
    request.always(function () {
    });
    event.preventDefault();

}

function hide_needs_tabs(){
    $("#txt_managers").hide();
    $("#txt_teams").hide();
    $("#txt_travelers").hide();
}


