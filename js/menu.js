function menudrop(){
    const menudrop = document.getElementById("menu-drop")
    if (menudrop.style.visibility == "hidden"){
        menudrop.style.visibility="visible";
        document.getElementById("home").style.marginTop="400px"
    }else{
        menudrop.style.visibility="hidden";
        document.getElementById("home").style.marginTop="0"
    }
}