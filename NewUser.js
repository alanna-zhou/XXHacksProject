//declare new user information
var myUsername;
var myCareer;
var mySalary;
var index;
var indexFound=false;

//default users
var bill_gates = {"username":"bill_gates","career":"engineer", "salary":11500000000, "details":"Co-Founder at Microsoft"}
var mark_zuckerberg = {"username":"mark_zuckerberg","career":"engineer", "salary":1, "details":"CEO and Co-Founder at Facebook. Computer Programmer, Internet Entrepreneur."};

//existing array of occupations and members
var users = [bill_gates, mark_zuckerberg]

function newUser(username, career, salary, details){
  var user = {"username":username,"career":career,"salary":salary,"details":details};
  addUser(user);
}

function addUser(user){
  //find index
  for (i=0; i<users.length; i++){
    if (indexFound==false){
      if (users[i].salary>user.salary){
        index=i+1;
        indexFound=true;
      }
    }
  }
  if (indexFound==false){
    index=users.length;
  }
  //add user to user array
  users.splice(index,0,user);
}
