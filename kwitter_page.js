//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyD4i6y4645z5K7TsuVapcxiqJheY8VBlE8",
      authDomain: "kwitter-51e04.firebaseapp.com",
      databaseURL: "https://kwitter-51e04-default-rtdb.firebaseio.com",
      projectId: "kwitter-51e04",
      storageBucket: "kwitter-51e04.appspot.com",
      messagingSenderId: "84501186860",
      appId: "1:84501186860:web:b5ed036c03234513174489"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send()
    {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
