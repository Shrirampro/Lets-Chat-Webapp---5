//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyB8AOiAzV-jka4we3dvBHHL2HmtsGcLNVI",
    authDomain: "kwitterfirebase-249a9.firebaseapp.com",
    databaseURL: "https://kwitterfirebase-249a9-default-rtdb.firebaseio.com",
    projectId: "kwitterfirebase-249a9",
    storageBucket: "kwitterfirebase-249a9.appspot.com",
    messagingSenderId: "202861212027",
    appId: "1:202861212027:web:a567d2f3e612f835928dde",
    measurementId: "G-J6DP08KN7G"
  };
  
  // Initialize Firebase
  var app = initializeApp(firebaseConfig);
  
  
  
   user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom() {
      room_name = document.getElementById("room_name").value;
  
      firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
      });
  
      localStorage.setItem("room_name", room_name);
  
      window.location = "kwitter_page.html";
  }
  
  function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function(childSnapshot) {
              childKey = childSnapshot.key;
              Room_names = childKey;
              console.log("Room Name - " + Room_names);
              row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
              document.getElementById("output").innerHTML += row;
          });
      });
  
  }
  
  getData();
  
  function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter_login.html";
  }