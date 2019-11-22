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

function searchCategory(buttonId, category) {
    var filter, ul, li, a;
    var searchInput = document.getElementById("searchInput");
    
    toggleClasses(buttonId);
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

function toggleClasses(button) {
    var buttons = document.getElementById("tabbed-buttons").querySelectorAll(".tab-button"); 

    for (var counter = 0; counter < buttons.length; counter++) {
        buttons[counter].classList.remove("active");
    }

    button.classList.add("active"); 
}

// WORKING ON THIS
function fadeAwayElement(element) {
    // let box = document.getElementById('icon-buttons');
    let box = element;

    if (box.classList.contains('hidden')) {
        box.classList.remove('hidden');
        
        setTimeout(function () {
            box.classList.remove('visuallyhidden');
        }, 20);
    } else {
        box.classList.add('visuallyhidden');    

        box.addEventListener('transitionend', function(e) {
            box.classList.add('hidden');
        }, {
            capture: false,
            once: true,
            passive: false
        });
    }
}