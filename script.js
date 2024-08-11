
const baseMissions = [["Call a random number, say coordinates, and hang up.", `Text a person you haven't spoken to in a while and say "Sorry for breaking our pact."`, "Ask a stranger for directions and walk the opposite way.", `Sneak up on a random person and say "Tag! You're it."`, 'During conversation, stop talking, look them directly in the eyes and say "Wake up", Then continue as normal.', "Hold open a door for someone open from an absurd distance and smile at them.", `Share a "personal story" with someone and see how long it takes for them to realise you're describing the plot of a movie.`, "During conversation, gradually turn until you face the opposite way.", "Stand infront of the bathroom until a line forms, then, walk away.", 'Text someone "We need to talk.", and dont respond. Next time you see them in person, talk about something boring.',"Pretend you're a tourist and ask people to take photos of you infront of random objects.", `Text a friend asking them "When they're coming", and dont respond.`, `Go up to a random person, point to another random person, and say "My friend has a crush on you."`, "Kneel down in conversation, as if to tie your shoes, then, untie the other person's shoes.", "Ask strangers diretions to a made up place.", `Walk up to a stranger and say "It's you! I've been looking for you everywhere!", then walk away. `, "Sit down next to a stranger and narrate their every move like a nature documentary.", "During conversation, randomly freeze for a few seconds and continue like normal.", "Humm in a tight space with a few people and ask them if they can hear it too.", "See how long you can last in conversation with repeating everything the other person says.", "See how long you can last in conversation remaining completely silent.", "During conversation, clap as many times as you can until the other person says something.", `Walk up to a random person and tell them "Happy Birthday!"`, "See how many times you can change your accent mid conversation.", "Hold the door open for someone and stand in the way.", "Mispronounce random common words during conversation and act suprised when corrected.", "Make up a story with no point during conversation, just a series of tangents, when the other person tries to say something, keep talking.", "In a group, tell a friend you have a secret to share, and see how far you can get them to walk away.", "In a group, stare in a random direction and see how long it takes them to stare too.", "Tell someone a compliment that makes no sense.", "Try forcing an embarrasing nickname on a stranger.", "Walk up to a friend, as if you are going to whisper in their ear, and see how long you can stand there without saying anything.", "Randomly lie down in a public area, face down. After a crowd forms or a few minutes have passed, get up and walk away.", "Slowly move closer to a person during conversation until they notice.", `Ask someone the time, and say "No, that's wrong." and walk away.`,  "Sprint up to a person in a panic, and ask them what year it is. When they respond, start panicking more.", `Walk up to a stranger doing something, and tell them "Careful doing that, after last time."`, "During conversation, tell someone to calm down, then continue as normal.", "When a person asks you something, respond with gibberish."], ['Find a nice car, and put a note on it saying "Sorry for scratching your car."', "Draw a face on a fruit and leave it on a random doorstep.", "See how many times you can change clothes during the day before your friends notice.", "Hide a helium baloon under a toilet seat.", "Ask someone for directions to the bank, and put on a mask while walking there.", "Write a note with a list of your friends named, and cross some out. Then drop it somewhere for them to find.", "At the store, leave a random shopping list in an unattended cart.", "Compliment a stranger on their shoes and see if you can try them on.", "See how many notes you can sneak on a person's back.", "Eat food from a bowl and using cutlery in a public place while walking.", "Ask a friend to borrow their pen for something important, then, draw a poor sketch of them.", `Put "Use other Door" signs on every door of a building.`, "Request an autograph from a random person.","Start a conversation in a bathroom stall with someone, when you exit, pretend you were on the phone.", "Take a phone call during conversation, pretend to recieve tragic news, and continue like nothing happened.", "Pretend you're on a phone call in a public place and use ridiculous phrases.", `Show a friend "This cool new song." and play the sound of babies crying or some other strange noise.`, "Fill a mayonnaise (or some other sauce) jar with pudding and eat from it in public.", "Give a friend a pen and tell them you're returning it.", "Tape an ominous message to a public bathroom mirror.", "Give a stranger a random object, tell them to watch it, and never return.", "Walk around in public with a bottle of shampoo or something similar. When you pass anyone, ask them if they need any.", "Make notes in a notepad when around someone, as if you are studying them.", "Walk around in public with a frying pan or some other kitchen utensil.", `Call a friend and tell them to meet you at a specific location, tape a note saying "Sorry, couldn't make it." at the location.`, "See how many things you can get a person to hold for you.", "See how many things you can sneak in a persons pockets before they notice.", 'During conversation, see how many times you can switch an item between your pockets.', "Walk around in public drinking from a glass of water."]]

var missions = [Array.from(baseMissions[0]), Array.from(baseMissions[1])] // duplicates

const timer = ms => new Promise(res => setTimeout(res, ms))

window.onload = function() { // called when page opens
 //load mission types
 var missionTypes = localStorage.getItem("missionTypes").split(";")
 if (missionTypes != null) {
  if (missionTypes[0] == "false") { missionSelect(false) }
  if (missionTypes[1] == "false") { missionSelect(true) }
 }

 //time stuff
 const t = new Date();
 document.getElementById("thisyear").textContent = "TODAY'S MISSION " + t.getFullYear();
 const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 document.getElementById("currentday").textContent = months[t.getMonth()] + " " + t.getDate()

 //mission count
 
  if (localStorage.getItem("pastMissions") != null) {
    var pastMissions = [localStorage.getItem("pastMissions")]
    if (pastMissions[0].includes(";")) { pastMissions = pastMissions[0].split(";")}
     for(j = 0; j < pastMissions.length; j++) {
       if (missions[0].indexOf(pastMissions[j]) >= 0) {missions[0].splice(missions[0].indexOf(pastMissions[j]), 1) }
       else if (missions[1].indexOf(pastMissions[j]) >= 0) { missions[1].splice(missions[1].indexOf(pastMissions[j]), 1) }
     }
    
  }
  var completedMissions = [missions[0].length, missions[1].length]
  document.getElementById("missionamount").textContent = "Total missions: " + (parseInt(completedMissions[0]) + parseInt(completedMissions[1])) + "/" + (parseInt(baseMissions[0].length) + parseInt(baseMissions[1].length)) + ". Simple: " + completedMissions[0] + "/" + baseMissions[0].length + ", Complex: " + completedMissions[1] + "/" + baseMissions[1].length

if (localStorage.getItem("missionTime") == null || new Date().getTime() >= parseInt(localStorage.getItem("missionTime")) + 86400000) 
{
document.getElementById("nextday").style.display = "none"
localStorage.setItem("rerolled", "false")
return 
}

document.getElementById("todaysMission").style.display = "block"
document.getElementById("missionComps").style.display = "none"
document.getElementById("mission").textContent = localStorage.getItem("todaysMission")
document.getElementById("header").textContent = "TODAY'S MISSION:"
document.getElementById("regenerate").style.display = "none"
if (localStorage.getItem("rerolled") == "false") {document.getElementById("regenerate").style.display = "block"}
document.getElementById("mission").style.opacity = 1
var nextTime = parseInt(localStorage.getItem("missionTime")) + 86400000
var tommorowDate = new Date(nextTime)
var hours = tommorowDate.getHours()
if (String(hours).length <= 1) {hours = "0" + hours}
var minutes = tommorowDate.getMinutes()
if (String(minutes).length <= 1) {minutes = "0" + minutes}
document.getElementById("nextday").style.display = "block"
document.getElementById("nextday").textContent = "Next mission: " + months[tommorowDate.getMonth()] + " " + tommorowDate.getDate() +" at " + hours + ":" + minutes 

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


async function generate() {
  if (document.getElementById("todaysMission").style.display == "block") {localStorage.setItem("rerolled", "true")}
  document.getElementById("todaysMission").style.display = "none"
  document.getElementById("missionComps").style.display = "none"
  document.getElementById("missionGenerate").style.display = "block"
  var statusTexts = ["Probing mission database...", "Checking legality...", "Sourcing peanuts...", "Refreshing lighter fluid...", "Buying striped paint...", "Fixing marriages...", "Asking the mission man...", "Shouting out freakbait...", "Blasting nas...", "Cleaning bathrooms...", "Generating information...", "Completing mission...", "Eesting our Software...", "Watching cartoons...", "Speedrunning the missions...", "Fishing for ideas...", "Silencing men...", "Conquering social anxiety...", "Jacking the box...", "Confirming date...", "Stealing 9 Mili...", "Sorting a kilo of missions...", "Missing missions...", "Finding missions...", "Checking if site is online...", "Fixing servers...", "Being nice...", "Refilling on blinker fluid...", "Signaling right...", "Doing 150 on the highway...", "Cranking up the speeds...", "Engaging conversation...", "Grabbing random items...", "Eating mayonnaise...", "Using shampo..."]
   var limit = Math.floor(Math.random() * (9 - 4) ) + 4
   
   var allMissions = []
   if (document.getElementById("simplemission").src.includes("enabled")) { allMissions.push(...missions[0]) }
   if (document.getElementById("complexmission").src.includes("enabled")) { allMissions.push(...missions[1]) }
  
   document.getElementById("mission").textContent = allMissions [Math.floor(Math.random() * allMissions.length)]
   for (i = 0; i <= limit; i++) {
     document.getElementById("statustext").textContent = statusTexts [Math.floor(Math.random() * statusTexts.length)]
     await timer(500 + (Math.floor(Math.random() * (1000 - 500) ) + 500));
   }
   document.getElementById("header").textContent = "TODAY'S MISSION:"
   document.getElementById("missionGenerate").style.display = "none"
   document.getElementById("todaysMission").style.display = "block"
   localStorage.setItem("todaysMission", document.getElementById("mission").textContent);
   document.getElementById("regenerate").style.display = "none"
   if (localStorage.getItem("rerolled") == null || localStorage.getItem("rerolled") == "false") {
     document.getElementById("regenerate").style.display = "block"
   } else { acceptMission() }
    
   for (i = 0; i <= 100; i++) {
     document.getElementById("mission").style.opacity = 0 + (i / 100)
     await timer(1);
   }
}

function acceptMission() {
  localStorage.setItem("rerolled", "true")
  document.getElementById("regenerate").style.display = "none"
  localStorage.setItem("missionTime", new Date().getTime());
  var pastMissions = localStorage.getItem("pastMissions")
  if (pastMissions == null) {pastMissions = []} 
  else if (!pastMissions.includes(";")) {pastMissions = [pastMissions]} 
  else {pastMissions = pastMissions.split(";")}
  pastMissions.push(localStorage.getItem("todaysMission"))
  localStorage.setItem("pastMissions", pastMissions.join(";"))
}
