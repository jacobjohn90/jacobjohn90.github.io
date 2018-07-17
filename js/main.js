$('#viewAboutMe').on('click', function(){
    const aboutMe = $('#aboutMe').position().top;
    $('html, body').animate({
        scrollTop: aboutMe
    }, 900);
});
$('#viewMyWork').on('click', function () {
    const myWork = $('#myWork').position().top;
    $('html, body').animate({
        scrollTop: myWork
    }, 900);
});
$('#viewContact').on('click', function () {
    const contact = $('#contact').position().top;
    $('html, body').animate({
        scrollTop: contact
    }, 900);
});