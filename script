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

 var otherMission = "complex"
 if (type == "complex") { otherMission = "simple" }
 var otherButton = document.getElementById(otherMission + "mission");
 if (otherButton.src.includes("enabled") || !active) { return }
 missionSelect(false) // enable simple 
}
