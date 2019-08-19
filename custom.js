$(document).ready(function() {
	var oldContent = $("title").html();
	$("title").html(oldContent.replace(new RegExp("GitLab", "g"), "Amuzil Git"));
	
	//$("body").removeClass();
	//$("body").addClass();
	
	executeWithCookies(function() {
		var theme = Cookies.get("mahtaran_gitlab_ui_overrides_custom_selected_theme");
		if (theme !== undefined) {
			var classes = $("body").attr("class").split(/\s+/);
			var elements = $(".col-lg-8.application-theme").find("label");
			var availableThemes = new Array(elements.length);
			var newTheme = "ui-amuzil";
			
			elements.each(function() {
				var elementTheme = $(this).find("div").attr("class").split(/\s+/)[1];
				availableThemes.push(elementTheme);
				if (elementTheme === theme) {
					$(this).find("input").prop("checked", true);
					newTheme = elementTheme;
				} else {
					$(this).find("input").prop("checked", false);	
				}
			});
			
			var newClasses = classes.filter(class => !availableThemes.includes(class));
			newClasses.push(newTheme);
			
			console.log(classes);
			console.log(newClasses);
			
			$("body").attr("class", newClasses.join(" "));
		}
	});
	
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
	$(".col-lg-8.application-theme").find("label").each(function() {
		if ($(this).find("div").attr("class").split(/\s+/)[1] === theme) {
			$(this).find("input").prop("checked", true);
			Cookies.set("mahtaran_gitlab_ui_overrides_custom_selected_theme", theme);
		} else {
			$(this).find("input").prop("checked", false);	
		}
	});
}

function executeWithCookies(callback) {
	if (typeof Cookies === "undefined") $.getScript("https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js", callback);
	else callback();
}
