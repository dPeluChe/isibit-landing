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

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
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
});

function hide_needs_tabs(){
    $("#txt_managers").hide();
    $("#txt_teams").hide();
    $("#txt_travelers").hide();
}

