$(document).ready(function() {
    var oldContent = $("title").html();
    $("title").html(oldContent.replace(new RegExp("GitLab", "g"), "Amuzil Git"));
});
