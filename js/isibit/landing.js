var  mn = $(".navbar.navbar-default");
var  mns = "navbar-fixed-top";
var  hdr = $('#header').height();

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
    hide_needs_tabs();
    $("#txt_managers").show();

    $("#joinbeta").validate();


    $("#btn_managers, #btn_teams, #btn_travelers").click(function(){
        hide_needs_tabs();
        name = $(this).attr('id');
        name = name.replace('btn','txt');
        $("#"+name).show(0);
    });

    $( ".btn_beta, .btn_beta_white").click(function() {
        cleanForm();
    });

    $( "#btn_submit").click(function() {
        let form_name = $('#name').val();
        let formlast_name = $('#last_name').val();
        let form_email = $('#email').val();
        let form_company = $('#company').val();
        let form_country = $('#country').val();

        let data = {
            first_names : form_name,
            last_names: formlast_name,
            company_email: form_email,
            company: form_company,
            country: form_country,
            mobileorweb: brw+"w"+vw,
            os: brw_os
        };

        //console.log (jsonData);
        sendData(JSON.stringify(data));
        $("#thanks_footer").show(500);

    });
});

function cleanForm(){
    $('#name').val(" ");
    $('#last_name').val(" ");
    $('#email').val(" ");
    $('#company').val(" ");
}


function sendData(jsonData){
    let googleUrl= "https://script.google.com/macros/s/AKfycbz5oaeGtQF_KIFNHs2CcqxUTUQ8EYEbzE13_NgK-hk52N0DrSF5/exec";
    console.log(jsonData);

    /*
    var request = $.ajax({
        url: googleUrl,
        type:"POST",
        dataType: 'json',
        data: jsonData
    });

    request.done(function (response, textStatus, jqXHR){
        console.log("Encuesta guardada correctamente!");
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
    */

}

function hide_needs_tabs(){
    $("#txt_managers").hide();
    $("#txt_teams").hide();
    $("#txt_travelers").hide();
}


