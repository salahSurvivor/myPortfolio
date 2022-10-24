/*Start Navbar Script*/
var portfolio = $('#prt');
var about = $('#abt');
var skills = $('#sks');
var resume = $('#rsm');
var contact = $('#cntct');

portfolio.click(function(){
    $('html,body').animate({ scrollTop : 708}, -150);
    portfolio.addClass('active');
});

about.click(function(){
    $('html, body').animate({scrollTop: 1378}, -150);
    about.addClass('active');
});

skills.click(function(){
    $('html, body').animate({scrollTop: 2225}, -150);
    skills.addClass('active');
});

resume.click(function(){
    $('html, body').animate({scrollTop: 3065}, -150);
    resume.addClass('active');
});

contact.click(function(){
    $('html, body').animate({scrollTop: 3500}, -150);
    contact.addClass('active');
});
/*End Navbar Script*/

/*Start loadingPage script*/
$(window).on('load', function(){
    $('body').css('overflow', 'auto');
    $('.loading-container').css('display', 'none');
});
/*End loadingPage script*/

function showMessage(){
    alert('you can not send this message because any free hosting website i go to does not want to deploy my website because there is many of files, so for deploy it i have to pay, so i deceided to leave just the front-end version');
}

