// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyB7uUndqiACoEu4WmPxmsN6ZB10tgbWI2s",
    authDomain: "lets-chat-web-app-67458.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-67458-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-67458",
    storageBucket: "lets-chat-web-app-67458.appspot.com",
    messagingSenderId: "904848501180",
    appId: "1:904848501180:web:5181a85e946abf0bdc23b9"
  };
  
  
   

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



