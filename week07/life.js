var kids = [0,3,6,2,];
var spouse = ["Jayda","Bri","Mya","Taylor"];
var city = ["Houston","Miami","Philadelphia","New York"];
var job = ["NFL athlete","NBA Athlete","Youtuber","Rapper"];

var xx = Math.floor(Math.random() * 3)

function fortune(job,city,spouse,kids) {
document.write("You will be a " + job + " in " + city +", and married to " + spouse + " with "  + kids + " kids.")
}

fortune (job[xx],city[xx],spouse[xx],kids[xx])
