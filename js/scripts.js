let docTitle = document.title;

window.addEventListener("blur", () => {
    document.title = "Come back :(";
})
window.addEventListener("focus", () => {
    document.title = docTitle;
})

$(document).ready(function () { 
    $(document).click(function () {
         $('.navbar-collapse').collapse('hide');
    });
})