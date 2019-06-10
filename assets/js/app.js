var firebaseConfig = {
    apiKey: "AIzaSyCgzjwZJ-31l19SFQcVYbsTjUnb0EiOkXQ",
    authDomain: "my-awesome-project-d9f20.firebaseapp.com",
    databaseURL: "https://my-awesome-project-d9f20.firebaseio.com",
    projectId: "my-awesome-project-d9f20",
    storageBucket: "my-awesome-project-d9f20.appspot.com",
    messagingSenderId: "1032074531161",
    appId: "1:1032074531161:web:5835a66636caa31d"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var trainName = '';
  var trainDest = '';
  var trainTime = '';
  var trainFreq = '';

  // button for adding next train and then grabbing user input
  $('submit').on('click', function(event){
    event.preventDefault();
    trainName = $('#train-name-input')
    .val()
    .trim();
    destination = $('#destination-input') 
    .val()
    .trim();
    firstTrain = $('#first-train-time-input')
    .val()
    .trim();
    frequency = $('#frequency-input')
    .val()
    .trim();

  }