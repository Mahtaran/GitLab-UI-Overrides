function executeWithCookies(callback) {
	if (typeof Cookies === "undefined") $.getScript("https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js", callback);
	else callback();
}

const COOKIE_PREFIX = "mahtaran_gitlab_ui_overrides_";
const COOKIE_CUSTOM_SELECTED_THEME = COOKIE_PREFIX + "custom_selected_theme";

const DEFAULT_THEMES = ["ui-indigo", "ui-light-indigo", "ui-blue",
			"ui-light-blue", "ui-green", "ui-light-green",
			"ui-red", "ui-light-red", "ui-dark", "ui-light"]
const THEMES = DEFAULT_THEMES.slice();

$(document).ready(function() {
	var oldContent = $("title").html();
	$("title").html(oldContent.replace(new RegExp("GitLab", "g"), "Amuzil Git"));
	
	// Themes
	addTheme("Amuzil");
	
	$(".col-lg-8.application-theme").on("click", "label", function(event) {
		$(this).find("div").attr("class").trim().split(/\s+/).filter(element => THEMES.includes(element)).forEach(setTheme);
		event.preventDefault();
	});
	
	// Set correct theme
	setTheme();
});

function addTheme(theme) {
	const theme_identifier = "ui-" + theme.toLowerCase().replace(/\s+/, "-");
	const theme_number = THEMES.length + 1; // Not necessary, but here for completeness.
	
	$(".col-lg-8.application-theme").append(`
<label>
	<div class="preview ${theme_identifier}"></div>
	<input type="radio" value="${theme_number}" name="user[theme_id]" id="user_theme_id_${theme_number}">
	${theme}
</label>
	`);
	
	THEMES.push(theme_identifier);
}

function setTheme(theme) {
	executeWithCookies(function() {
		if (typeof theme === "undefined") theme = Cookies.get(COOKIE_CUSTOM_SELECTED_THEME);
		else Cookies.set(COOKIE_CUSTOM_SELECTED_THEME, theme);
		
		if (typeof theme === "undefined") return;
		
		const classes = $("body").attr("class").trim().split(/\s+/);
		
		// Only used on the preferences page
		$(".col-lg-8.application-theme").find("label").each(function() {
			if ($(this).find("div").attr("class").split(/\s+/)[1] === theme) {
				$(this).find("input").prop("checked", true);
			} else {
				$(this).find("input").prop("checked", false);	
			}
		});
		
		const newClasses = classes.filter(clazz => !THEMES.includes(clazz));
		newClasses.push(theme);
		
		// Debugging
		console.log(classes);
		console.log(newClasses);
		
		$("body").attr("class", newClasses.join(" "));
	});
}
