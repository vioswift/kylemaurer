function searchText() {
    var input, filter, ul, li, a, txtValue;

    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("icon-buttons");
    li = ul.getElementsByTagName("li");

    for (var count = 0; count < li.length; count++) {
        a = li[count].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[count].style.display = "";
        } else {
            li[count].style.display = "none";
        }
    }
}

function searchCategory(category) {
    var filter, ul, li, a;
    var searchInput = document.getElementById("searchInput");
    
    searchInput.value = '';

    filter = category.toUpperCase();
    ul = document.getElementById("icon-buttons");
    li = ul.getElementsByTagName("li");

    for (var count = 0; count < li.length; count++) {
        a = li[count].getElementsByTagName("a")[0].id;

        if (a.toUpperCase().indexOf(filter) > -1) {
            li[count].style.display = "";
        } else {
            li[count].style.display = "none";
        }
    }
}