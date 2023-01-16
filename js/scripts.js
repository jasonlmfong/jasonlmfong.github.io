//changes page title when user clicks away
const docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Come back :(";
})
window.addEventListener("focus", () => {
    document.title = docTitle;
})

//collapses navbar upon user clicking away
$(document).ready(function () { 
    $(document).click(function () {
         $('.navbar-collapse').collapse('hide');
    });
})