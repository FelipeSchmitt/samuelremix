function showhide(){
    var showhide = document.getElementById("password")
    console.log(showhide)
    if(showhide.type == "password"){
        showhide.type="text"
    }else{
        showhide.type="password"
    }
}

var firebaseConfig = {
    apiKey: "AIzaSyB-sbmp66y_OyQMlUH0en6-Nq97omS4S_8",
    authDomain: "agenciasamuel-889e0.firebaseapp.com",
    databaseURL: "https://agenciasamuel-889e0.firebaseio.com",
    projectId: "agenciasamuel-889e0",
    storageBucket: "agenciasamuel-889e0.appspot.com",
    messagingSenderId: "950738928242",
    appId: "1:950738928242:web:094959a889710ea0c438eb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function login() {
    if (firebase.auth().currentUser) {
      firebase.auth().signOut()
    }
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        swal
          .fire({
            icon: "success",
            title: "Login realizado com sucesso",
          })
          .then(() => {
            setTimeout(() => {
              window.location.replace("console.html")
            }, 1000)
          })
      })
      .catch((error) => {
        const errorCode = error.code
        switch (errorCode) {
          case "auth/wrong-password":
            swal.fire({
              icon: "error",
              title: "Senha inválida",
            })
            break
          case "auth/invalid-email":
            swal.fire({
              icon: "error",
              title: "E-mail inválido",
            })
              .then((result) => {
                if (result.value) {
                  signUp(email, password)
                }
              })
            break
          default:
            swal.fire({
              icon: "error",
              title: "Usuário ou senha invalidos!",
            })
        }
      })
  }
  
  function cadastro() {
    if (firebase.auth().currentUser) {
        firebase.auth().signOut()
      }
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        swal
          .fire({ icon: "success", title: "Usuário foi criado com sucesso" })
          .then(() => {
            setTimeout(() => {
              window.location.replace("console.html")
            }, 1000)
          })
      })
    }
    
  function logout() {
  firebase.auth().signOut()
}
