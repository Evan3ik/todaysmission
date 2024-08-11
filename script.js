window.onload = function() { // called when page opens
 console.log("open")
 var missionTypes = localStorage.getItem("missionTypes").split(";")
 if (missionTypes != null) {
  console.log("im in it")
  console.log(missionTypes[0])
  if (missionTypes[0] == "false") { missionSelect(false) }
  if (missionTypes[1] == "false") { missionSelect(true) }
 }
 console.log(missionTypes) 
}

function missionSelect(mType) {
 var type = "simple"
 if(mType) { type = "complex" }
  var button = document.getElementById(type + "mission"); 
  var active = button.src.includes("enabled")
  var source = button.src.split("enabled.png")[0]
  if (!active) { source = button.src.split(".png")[0] }
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
