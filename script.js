function nav_1_clicked(ev) {
    const div =
        ev.target.tagName == "P" || ev.target.tagName == "I"
            ? ev.target.parentNode
            : ev.target;
    const old_activ = div.parentNode.querySelector(".activ");
    if (old_activ) {
        old_activ.classList.remove("activ");
    }
    div.classList.add("activ");
}