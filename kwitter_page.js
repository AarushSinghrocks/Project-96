const config = {
    apiKey: "AIzaSyDkMKD1Ft-zZ9-gHlsinpJCpLD5MtQlV0w",
    authDomain: "project---kwitter.firebaseapp.com",
    databaseURL: "https://project---kwitter-default-rtdb.firebaseio.com",
    projectId: "project---kwitter",
    storageBucket: "project---kwitter.appspot.com",
    messagingSenderId: "158709753753",
    appId: "1:158709753753:web:eaa592bef65d9ce117d508"
  };
  
  // Initialize Firebase
   firebase.initializeApp(config);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name : user_name, 
            message : msg,
            like : 0
      });
      document.getElementById("msg").value="";
      }
      
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

      } });  }); }
getData();