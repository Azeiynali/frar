function nav_1_clicked(ev) {
    let old_activ = document.querySelector(".nav-1 .activ");
    if (old_activ) {
        old_activ.setAttribute("class", "nav-item");
    }
    console.log(ev.target.tagName);
    if (ev.target.tagName == "P" || ev.target.tagName == "I") {
        var div = ev.target.parentNode;
    } else {
        var div = ev.target;
    }
    console.log(ev.target.parentElementNode);
    div.classList.add("activ");
}
