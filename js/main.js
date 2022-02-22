// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";

import {
  getDatabase, ref, onValue, set
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_Hv03H-4SO0GGjuZARfi0w2m2bwsT1dE",
  authDomain: "lulzbot-monitoring-system.firebaseapp.com",
  databaseURL: "https://lulzbot-monitoring-system-default-rtdb.firebaseio.com",
  projectId: "lulzbot-monitoring-system",
  storageBucket: "lulzbot-monitoring-system.appspot.com",
  messagingSenderId: "636470762374",
  appId: "1:636470762374:web:669c7ba8b17759c0d1aa07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

var button = document.getElementById("shutDown");

onValue(ref(database,'relayStatus/'), (snapshot) => {
  const data = snapshot.val().relayStatus;
  var statusUpdate = document.getElementById("status");
  var path46 = document.getElementById("path46");
  var path48 = document.getElementById("path48");
  var path54 = document.getElementById("path54");
  switch (data) {
    case 1:
      statusUpdate.innerHTML ="The printer is currently powered down";
      statusUpdate.style.color="white";
      console.log("off");
      break;
    case 0:
      statusUpdate.innerHTML ="The printer is currently running";
      statusUpdate.style.color="white";
      console.log("on");
      path46.style.animation="pathStart 6s linear infinite"
      path54.style.animation="pathStart 12s linear infinite"
      path48.style.animation="pathStart2 1s linear infinite alternate-reverse"
  }
})

button.onclick = function(){
  var result = confirm("Are you sure you want to stop this print?");
  if (result == false){
    event.preventDefault();
  }
  else{
    set(ref(database, 'relayStatus/'),{
      relayStatus: 1
    });
  }
}
