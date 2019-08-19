$(document).ready(function() {
    var oldContent = $("title").html();
    $("title").html(oldContent.replace(new RegExp("GitLab", "g"), "Amuzil Git"));
    $("body").removeClass();
    $("body").addClass();
    
    print($(".col-lg-8.application-theme").html());
    $(".col-lg-8.application-theme").append(`
<label>
    <div class="preview ui-amuzil"></div>
    <input type="radio" value="11" name="user[theme_id]" id="user_theme_id_11" onclick="onSelectAmuzilTheme">
    Amuzil
</label>
    `);
});

function onSelectAmuzilTheme() {
    if (typeof Cookies === "undefined") $.getScript("https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js");
    print(Cookies.get());
}
