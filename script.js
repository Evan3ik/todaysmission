const timer = ms => new Promise(res => setTimeout(res, ms))

window.onload = function() { // called when page opens
 //load mission types
 var missionTypes = localStorage.getItem("missionTypes").split(";")
 if (missionTypes != null) {
  console.log("im in it")
  console.log(missionTypes[0])
  if (missionTypes[0] == "false") { missionSelect(false) }
  if (missionTypes[1] == "false") { missionSelect(true) }
 }

 //time stuff
 const t = new Date();
 document.getElementById("thisyear").textContent = "TODAY'S MISSION " + t.getFullYear();
 const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 document.getElementById("currentday").textContent = months[t.getMonth()] + " " + t.getDate() 
}

function missionSelect(mType) {
 var type = "simple"
 if(mType) { type = "complex" }
 console.log(type)
  var button = document.getElementById(type + "mission"); 
  var active = button.src.includes("enabled")
  console.log(active)
  var source = button.src.split("enabled.png")[0]
  if (!active) { source = button.src.split(".png")[0] }
  console.log(source)
  if (active) { source += ".png" }
  else { source += "enabled.png" }
  button.src = source
  
  // check if no missions are enabled

 var otherMission = "complex";
 if (type == "complex") { otherMission = "simple" }
 var otherButton = document.getElementById(otherMission + "mission");

 localStorage.setItem("missionTypes", !active + ";" + otherButton.src.includes("enabled")); //save data

 if (otherButton.src.includes("enabled") || !active) { return }
 missionSelect(false) // enable simple 
}


async function generate() {
  document.getElementById("missionComps").style.display = "none"
  document.getElementById("missionGenerate").style.display = "block"
  var statusTexts = ["Probing mission database...", "Checking legality...", "Sourcing peanuts...", "Refreshing lighter fluid...", "Buying striped paint...", "Fixing marriages...", "Asking the mission man...", "Shouting out freakbait...", "Blasting nas...", "Cleaning bathrooms...", "Generating information...", "Completing mission...", "Eesting our Software...", "Watching cartoons...", "Speedrunning the missions...", "Fishing for ideas...", "Silencing men...", "Conquering social anxiety...", "Jacking the box...", "Confirming date...", "Stealing 9 Mili...", "Sorting a kilo of missions...", "Missing missions...", "Finding missions...", "Checking if site is online...", "Fixing servers...", "Being nice...", "Refilling on blinker fluid...", "Signaling right...", "Doing 150 on the highway...", "Cranking up the speeds..."]
   var limit = Math.floor(Math.random() * (9 - 4) ) + 4
   console.log(limit)
   for (i = 0; i <= limit; i++) {
     console.log(i);
     document.getElementById("statustext").textContent = statusTexts [Math.floor(Math.random() * statusTexts.length)]
     await timer(500 + (Math.floor(Math.random() * (1000 - 500) ) + 500));
   }
   document.getElementById("header").textContent = "TODAY'S MISSION:"
   document.getElementById("missionGenerate").style.display = "none"
   document.getElementById("todaysMission").style.display = "block"
   for (i = 0; i <= 100; i++) {
     console.log(document.getElementById("mission").style.opacity)
     document.getElementById("mission").style.opacity = 0 + (i / 100)
     await timer(1);
   }
}
