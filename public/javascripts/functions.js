function generateblogPostUrl(title){
    var blogPostUrl = title.replace(/\s+/g, '-').toLowerCase();
    console.log(blogPostUrl);
    $('#blogPostUrl').val(blogPostUrl);

}