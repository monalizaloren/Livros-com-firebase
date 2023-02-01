
  
  const firebaseConfig = {
    apiKey: "AIzaSyCxfgMGB-32Lrt1rZjOLvO2DXcpebSb1DY",
    authDomain: "projeto-pcv.firebaseapp.com",
    databaseURL: "https://projeto-pcv-default-rtdb.firebaseio.com",
    projectId: "projeto-pcv",
    storageBucket: "projeto-pcv.appspot.com",
    messagingSenderId: "213813433513",
    appId: "1:213813433513:web:23b0cae90781fca23dc5b8",
    
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  
  document.getElementById("nameBook").innerHTML =  nameBook ;

  function getData() 
  {
 firebase.database().ref("/").on('value', function(snapshot)
  { document.getElementById("nameBook").innerHTML = "";
   snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
    nameBook = childKey;
   row = nameBook +"</div><hr>";
   document.getElementById("nameBook").innerHTML += row;
 });
});

}

getData();