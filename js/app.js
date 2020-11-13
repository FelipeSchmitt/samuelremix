function showhide(){
    var showhide = document.getElementById("password")
    console.log(showhide)
    if(showhide.type == "password"){
        showhide.type="text"
    }else{
        showhide.type="password"
    }
}


