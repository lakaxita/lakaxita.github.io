$(document).ready(function() {
    $('nav > a.posts').click(function(event) {
        event.preventDefault();
        var articles = $('section#posts > article');
        articles.hide();
        articles.filter('.'+$(this).text()).show();
    });
});
