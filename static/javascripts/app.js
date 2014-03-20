function filter_posts(category) {
    if (category.length != 0) {
        var articles = $('section#posts > article');
        articles.hide();
        articles.filter('.'+category).show();
    };
};

$(document).ready(function() {
    var category = window.location.hash.replace('#','');
    filter_posts(category);
    $('nav a.posts').click(function(event) {
        var category = $(this).text();
        filter_posts(category);
    });
});
