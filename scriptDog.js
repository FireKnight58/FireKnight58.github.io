var defualtData = [["Dog", 'Votes'],
                  ["Black Lab",     2],
                  ["German Shepherd",      2],
                  ["Shizu",  2],
                  ["Terrier", 2],
                  ["Pug",    2],
                  ["Dalmation", 2],
                  ["Bloodhound", 2],
                  ["Wolf", 10],
                  ["Austrlian Shepherd", 50]];

//text for thid place winner
var thirdDog = ["Black Labs: known as Labrador Retrievers, these are one of the most versatile dogs and are highly intelligent. They are purpose bred for hunting and have a love of swimming. However they are known for having high energy and it is highly recommended to start training them as early as possible.",
               "German Shepherd's were first herding dogs, but their intelligence and acute sense of smell, combined with there extremely protective personality has made them well suited for complex tasks such as aiding police, guarding properties, explosive and contraband detection, and many more.",
               "Shih Tzu: Records of Shih Tzu go back to 1,000 B.c in Chinese history, namely mentioning them as 'under the table dogs'. They are known for there happy temperaments and you will rarely find a Shih Tzu that is snippy or holds a dislike of humans or other animals.",
              "Jack Russell Terrier: These Terriers were originally bred for fox hunting and were named after Reverend John “Jack” Russell, an avid fox hunter in England during the 1800s. They are highly intelligent and very active. They have a love of digging and are easily capable of jumping 5 feet high.",
              "Pugs: Originating in China, these dogs were treated as royalty in ancient times. Some were even given mini palaces to live in. Pugs are excellent pets because of their adaptable personality, and have been the companions of many Lord, Ladies, and Kings throughout history. A group of Pugs are called a Grumble.",
              "Dalmatian: Nobody knows exactly where or when the origin of the Dalmatian breed came about, but the breed has existed long enough to be on Egyption hieroglyphs, standing side by side with ancient warriors on chariots. In more recent times they held the job of 'coaching' for horse drawn stagecoaches that were used for fire departments. Coaching essentially means that the dog would run in front of the stagecoach, clearing the way of people and animals so the fire department could speed through without any difficulty. In present day Dalmations are kept in Fire Stations as mascots.",
              "Bloodhound: Famous for their tracking abilities the tell tail wrinkles of the Bloodhound serve an important purpose. As scents are wafted into the air they are trapped by the wrinkles, storing them there for the Bloodhound to smell latter as a fresh reminder of the sent he is meant to be following.",
               "The spot for third place is a tie! As I had a black lab in my childhood I declare him the Bronze winner!",
               "The spot for third place is a tie! As I had a black lab in my childhood I declare him the Bronze winner!"];










function voteForDog(i) {
  //resets dfault data
  defualtData = [["Dog", 'Votes'],
                  ["Black Lab",     2],
                  ["German Shepherd",      2],
                  ["Shizu",  2],
                  ["Terrier", 2],
                  ["Pug",    2],
                  ["Dalmatian", 2],
                  ["Bloodhound", 2],
                  ["Wolf", 10],
                  ["Austrlian Shepherd", 50]];
  defualtData[i][1] = defualtData[i][1] + 1;
  google.charts.setOnLoadCallback(drawChart);
  //create text for first and second place winnrs
  let results = document.getElementById("results");
  let xhr = new XMLHttpRequest();
  xhr.addEventListener("load", function() {
    results.innerHTML = xhr.response;   
  });
  xhr.open("GET", "dogVote.html");
  xhr.send();
  //create text for third place winner
  let thirdTitle = document.getElementById("title");
  let thirdText = document.getElementById("third");
  thirdTitle.textContent = "Third Place Winner";
  thirdText.textContent = thirdDog[i-1];
}


//Fetching picture for labrador
let urlBlack = "https://dog.ceo/api/breed/labrador/images";
fetch(urlBlack)
   .then(function(response) {
      console.log("status is " + response.status);
          return response.text();
   })
   .then(function(html) {
      let imgBlack = JSON.parse(html)
      console.log(imgBlack.message[0]);
      let black = document.getElementById("black")
      black.src = imgBlack.message[Math.floor(Math.random() * imgBlack.message.length)];
     
   })
   .catch(function(error) {
      console.log("Request failed", error)
   });

//Fetching picture for German Shepherd
let urlGerman = "https://dog.ceo/api/breed/germanshepherd/images";
fetch(urlGerman)
   .then(function(response) {
      console.log("status is " + response.status);
          return response.text();
   })
   .then(function(htmlgerman) {
      let imgGerman = JSON.parse(htmlgerman)
      console.log(imgGerman.message[0]);
      let german = document.getElementById("german")
      german.src = imgGerman.message[Math.floor(Math.random() * imgGerman.message.length)];
     
   })
   .catch(function(error) {
      console.log("Request failed", error)
   });

//Fetching picture for Dalmatian
let urlspot = "https://dog.ceo/api/breed/dalmatian/images";
fetch(urlspot)
   .then(function(response) {
      console.log("status is " + response.status);
          return response.text();
   })
   .then(function(htmlspot) {
      let imgspot = JSON.parse(htmlspot)
      console.log(imgspot.message[0]);
      let spot = document.getElementById("spot")
      spot.src = imgspot.message[Math.floor(Math.random() * imgspot.message.length)];
     
   })
   .catch(function(error) {
      console.log("Request failed", error)
   });

//Fetching picture for Bloodhound
let urlblood = "https://dog.ceo/api/breed/hound/blood/images";
fetch(urlblood)
   .then(function(response) {
      console.log("status is " + response.status);
          return response.text();
   })
   .then(function(htmlblood) {
      let imgblood = JSON.parse(htmlblood)
      console.log(imgblood.message[0]);
      let blood = document.getElementById("blood")
      blood.src = imgblood.message[Math.floor(Math.random() * imgblood.message.length)];
     
   })
   .catch(function(error) {
      console.log("Request failed", error)
   });



google.charts.load("current", {packages:["corechart"]});

//Function to create chart
function drawChart() {
  
  var data = google.visualization.arrayToDataTable(defualtData);

  var options = {
    title: "Voting Results for Most Popular Dog",
    pieHole: 0.4,
    backgroundColor: "beige",
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
}
