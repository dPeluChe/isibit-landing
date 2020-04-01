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
    $('#name').trigger('focus')
});

$(document).ready(function() {
    hide_needs_tabs();
    $("#txt_managers").show();

    $("#btn_managers, #btn_teams, #btn_travelers").click(function(){
        hide_needs_tabs();
        name = $(this).attr('id');
        name = name.replace('btn','txt');
        $("#"+name).show(0);
    });

    $("#joinbeta").submit(function(event) {
        var ajaxRequest;
        console.log("holoo2");
    });

    $('#btn_submit').click(function () {

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
        };
        console.log(data);

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://script.google.com/macros/s/AKfycbz5oaeGtQF_KIFNHs2CcqxUTUQ8EYEbzE13_NgK-hk52N0DrSF5/exec', true);
        xhr.withCredentials = true;
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 2) {// do something}
                console.log("ready");
            }
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(data);

/*
        $.ajax({
                //method: 'POST',
                type: "POST",
                //jsonp: "callback",
                //crossdomain: true,
                contentType: 'plain/text',
                dataType: 'json',
                xhrFields: {
                    withCredentials: true
                },
                //crossOrigin: true,
                //async: true,
                data:JSON.stringify(data),
                url: "https://script.google.com/macros/s/AKfycbz5oaeGtQF_KIFNHs2CcqxUTUQ8EYEbzE13_NgK-hk52N0DrSF5/exec",
                headers: { 'Access-Control-Allow-Origin': '*' }, //add this line
                /*headers: {
                    'Access-Control-Allow-Methods': '*',
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Headers" : "Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, Authorization",
                    "Access-Control-Allow-Origin": "*",
                    "Control-Allow-Origin": "*",
                    "cache-control": "no-cache",
                    'Content-Type': 'application/javascript',
                    //'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json',
                },
            success: function(response){
                console.log("Respond was: ", response);
            },
            error: function(request, status, error) {
                console.log("There was an error: ", error);
            }
        });
    */
    }
});


function hide_needs_tabs(){
    $("#txt_managers").hide();
    $("#txt_teams").hide();
    $("#txt_travelers").hide();
}


