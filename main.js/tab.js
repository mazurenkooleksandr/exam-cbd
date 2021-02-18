function openTab(evt, name) {
    var x = window.matchMedia("(max-width: 1200px)")
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("third-container__tab_tabcontent");
    
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("third-container__tab_tablinks");
    
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
    


    
}

document.getElementById("defaultOpen").click();