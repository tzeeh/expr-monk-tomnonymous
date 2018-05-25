function generateblogPostUrl(title){
    var blogPostUrl = title.replace(/\s+/g, '-').toLowerCase();
    $('#blogPostUrl').val(blogPostUrl);
}
function passId(element){
    var id = $(element).text();
    $('#updateId').val(id);
    $('#deleteId').val(id);
}