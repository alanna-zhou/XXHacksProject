//declare new user information
var myUsername;
var myCareer;
var mySalary;
var index;
var indexFound=false;

//default users
var bill_gates = {"username":"bill_gates","gender":"male","salary":11500000000, "details":"Co-Founder at Microsoft"}
var marissa_mayer = {"username":"marissa_mayer","gender":"female","salary":36000000,"details":"CEO at Yahoo"}
var mark_zuckerberg = {"username":"mark_zuckerberg","gender":"male","salary":1, "details":"CEO and Co-Founder at Facebook. Computer Programmer, Internet Entrepreneur."};

//existing array of occupations and members
var users = [bill_gates, mark_zuckerberg]

function newUser(username, gender, salary, details){
  var user = {"username":username,"gender":gender,"salary":salary,"details":details};
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
    indexFound=true;
  }
  //add user to user array
  users.splice(index,0,user);
}
