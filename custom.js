$(document).ready(function() {
    var oldContent = $("title").html();
    $("title").html(oldContent.replace(new RegExp("GitLab", "g"), "Amuzil Git"));
    $("body").removeClass();
    $("body").addClass();
    
    $(".col-lg-8.application-theme").append(`
<label>
    <div class="preview ui-amuzil"></div>
    <input type="radio" onclick="onSelectAmuzilTheme">
    Amuzil
</label>
    `);
});

function onSelectAmuzilTheme() {
    if (typeof Cookies === "undefined") $.getScript("https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js");
    print(Cookies.get());
}
