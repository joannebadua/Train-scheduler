var firebaseConfig = {
    apiKey: "AIzaSyCgzjwZJ-31l19SFQcVYbsTjUnb0EiOkXQ",
    authDomain: "my-awesome-project-d9f20.firebaseapp.com",
    databaseURL: "https://my-awesome-project-d9f20.firebaseio.com",
    projectId: "my-awesome-project-d9f20",
    storageBucket: "my-awesome-project-d9f20.appspot.com",
    messagingSenderId: "1032074531161",
    appId: "1:1032074531161:web:5835a66636caa31d"
  };
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  var trainName = '';
  var trainDest = '';
  var trainTime = '';
  var trainFreq = '';

  function timer() {
    var time = moment(moment()).format('HH:mm:ss a');
    $('#timer').text(time, 1000);
  }
  setInterval(timer);
  
  // button for adding next train and then grabbing user input
  $('#submit-input').on('click', function(event){
    event.preventDefault();
    trainName = $('#name')
    .val()
    .trim();
    destination = $('#destination') 
    .val()
    .trim();
    firstTrain = $('#first')
    .val()
    .trim();
    frequency = $('#frequency')
    .val()
    .trim();
    var newTrain = {
      trainName: trainName,
      destination: destination,
      firstTrain: firstTrain,
      frequency: frequency
    };
    // console.log(newTrain)
    // do the save on the firebase
    database.ref().push(newTrain);
  })
// PART 2: Grab input from data base and stick on screen, happens when page load
  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
    var firstTrainTime = moment(childSnapshot.val().firstTrain, 'hh:mm');
    var minutesSinceFirstTrain = moment().diff(firstTrainTime, "minutes");
console.log("minutesSinceFirstTrain", minutesSinceFirstTrain)
  // appending
var trainHtml = "<tr><th>"+childSnapshot.val().trainName+"</th><th>"+childSnapshot.val().destination+"</th><th>"+childSnapshot.val().firstTrain+"</th><th>"+childSnapshot.val().frequency+"</th></tr>"
$("#tableInfo").append(trainHtml);
  })

  // PART 3: 

