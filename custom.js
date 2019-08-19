$(document).ready(function() {
	var oldContent = $("title").html();
	$("title").html(oldContent.replace(new RegExp("GitLab", "g"), "Amuzil Git"));
	$("body").removeClass();
	$("body").addClass();
	
	$(".col-lg-8.application-theme").append(`
<label>
	<div class="preview ui-amuzil"></div>
	<input type="radio" value="11" name="user[theme_id]" id="user_theme_id_11">
	Amuzil
</label>
	`);
	
	$(".col-lg-8.application-theme").on("click", "label", function(event) {
		var theme = $(this).find("div").attr("class").split(/\s+/)[1];
		onSelectTheme(theme);
		event.preventDefault();
	});
});

function onSelectTheme(theme) {
	console.log(theme);	
}

function onSelectAmuzilTheme() {
	if (typeof Cookies === "undefined") $.getScript("https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js", onSelectAmuzilTheme);
	else {
		Cookies.set("mahtaran-custom_selected_theme", "amuzil-theme"
	}
}
