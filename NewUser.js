//declare new user information
var myUsername;
var myCareer;
var mySalary;
var myGender;
var index;
var indexFound;

//default users
var bill_gates = {"id": 1, "username":"bill_gates","gender":"male","salary":11500000000, "details":"Co-Founder at Microsoft"};
var marissa_mayer = {"id": 2, "username":"marissa_mayer","gender":"female","salary":36000000,"details":"CEO at Yahoo"};
var mark_zuckerberg = {"id": 3, "username":"mark_zuckerberg","gender":"male","salary":1, "details":"CEO and Co-Founder at Facebook. Computer Programmer, Internet Entrepreneur."};

//existing array of occupations and members
var users = [bill_gates, marissa_mayer, mark_zuckerberg];

function newUser(){
  //window.alert("starting newUser");
  indexFound=false;
  myUsername = document.getElementById("username").value;
  mySalary = document.getElementById("salary").value;
  // validateField(myUsername);
  // validateField(mySalary);

  // if (validateField(myUsername) == true || validateField(mySalary) == true) {
  var user = {"username":myUsername,"gender":myGender,"salary":mySalary}; //,"details":details
  addUser(user);




  // var isFemale = document.getElementById("optionFemale").value;
  // if (isFemale == true){
  //   myGender = "female";
  // }else{
  //   myGender = "male";
  // }
  //details = document.getElementById("");

}

// function validateField(field) {
//   if (field == "") {
//     alert("All fields must be filled out");
//     return false;
//   }
// }

function addUser(user){
  //find index
  //window.alert("starting addUser");
  for (i=0; i<users.length; i++){
    if (indexFound==false){
      if (user.salary>users[i].salary){
        index=i;
        indexFound=true;
      }
      else if (users[i].salary>user.salary && users[i+1].salary<user.salary){
        index=i+1;
        indexFound=true;
      }
    }
  }
  if (indexFound==false){
    index=users.length;
    indexFound=true;
  }
  //add user to user array
  users.splice(index,0,user);
  sendAlert();
}

function sendAlert(){
  var string = "";
  for (i=0;i<users.length;i++){
    var x=i+1;
    string+=x+": "+users[i].username+"\n";
  }
  window.alert(string);
}

function toHTML(i){
  var string ="";
  string+="<h3>"+users[i].username
  +"</h3><h4>Salary: $"+users[i].salary
  +"</h4><h5>Gender: "+users[i].gender
  +"</h5><h5>More Details: "+users[i].details+"</h5>";
  return string;

}

function pleaseWork(){
      var string ="";
  for (i=0; i<users.length; i++){

    string+='<li class="timeline">'+
    '<div class="timeline-badge info"><i class="fa fa-envelope-o"></i></div>'+
        '<div class="timeline-panel">'+
            '<div class="timeline-heading">'+
                '<h4 class="timeline-title">'+
                  '<script>'+
                  'document.write(toHTML('+i+'))'+
                  '</script>'+
                '</h4>'+
            '</div>'+
        '</div>'+
    '</li>'
  }
  return string;
}
