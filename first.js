/*const userChoice=(userInput)=>
{
  userInput=userInput.toLowerCase();
    if(userInput=="rock"|| userInput=="paper"|| userInput=="sciers")
     {
       return userInput;
     }
    else
     {
       document.write("enter correct word");
     }
};




const computerChoice=()=>
{
 
 var randomnumber=Math.floor(Math.random()*3);
  switch(randomnumber)
 {
case 0: return "rock";
         break;
case 1: return "paper";
        break;
case 2: return "sciers";
         break;

}
};



const determinWinner=(userChoice,getcomputerChoice)=>
{
    if(userChoice===getcomputerChoice)
        {
            document.write(getcomputerChoice);
            return "game tie";
        }
    
  if(userChoice==="rock")
        {
            if(getcomputerChoice==="paper")
                {
                    document.write(getcomputerChoice);
                    return "computer won";
                }
            else 
                {
                    document.write(getcomputerChoice);
                     return "user won";
                }
        }
     
    
    if(userChoice==="paper")
        {
            if(getcomputerChoice==="sciers")
                {
                    document.write(getcomputerChoice);
                  return "computer won";  
                }
      else
               {
                   document.write(getcomputerChoice);
                   return "user won";

               }                     
        }
     
    
    if(userChoice==="sciers")
        {
            if(getcomputerChoice==="rock")
                {
                    document.write(getcomputerChoice);
                    return "computer won";
                }
            else
            {
                document.write(getcomputerChoice);
                return "user won";
            }
        }
};
document.write("paper");
document.write(determinWinner("paper",computerChoice()));

const playGame=()=>
    {
    var userchoice=userChoice("rock");
    var computerchoice=computerChoice();
        document.write(userchoice);
        document.write(computerchoice);
        document.write(determinWinner(userChoice,computerChoice));
};
playGame();*/

/*2.const getSleepHours=day=>                          //deathsleephours
{
    switch(day)
           {
               case "monday":
                       return 8;
                    break;
               case "tuesday":
                        return 7;
                        break;
               case "wednesday":
                        return 6;
                        break;
               case "thursday":
                         return 5;
                         break;
               case "friday":
                        return 4;
                        break;
               case "saturday":
                        return 3;
                         break;
               case "sunday":
                        return 2;
                        
           }
   };
 document.write(getSleepHours("monday"));

const getActualSleepHours=()=>
{
    sum=getSleepHours("monday")+getSleepHours("tuesday")+getSleepHours("wednesday")+getSleepHours("thursday")+getSleepHours("friday")+ getSleepHours("saturday")+getSleepHours("sunday");
    return sum;

};

const getIdelSleepHours=()=>
{
  var idealhours=8;
    return idealhours*7;
        getSleepHours();
    getActualSleepHours();
};
document.write(getIdelSleepHours());
document.write(getActualSleepHours());


const calculateSleepDeat=()=>
{
  var actualsleephours=getActualSleepHours();
  var idealsleephours=getIdelSleepHours();
    if(actualsleephours==idealsleephours)
        {
            document.write("He has sufficient sleep");
        }
    else if(actualsleephours>idealsleephours)
        {
            document.write("user got more sleep");
        }
    else{
        document.write(`you got${idealsleephours-actualsleephours}hours less than you need.get some rest`);
        document.write("you got" +(idealsleephours-actualsleephours)+ "hours less than you need.get some rest");
    }
};
calculateSleepDeat();*/

/* var b1="teja";
document.write(b1[2]);
var newyearresolution=["hai","bye","hello"];
document.write(newyearresolution);
document.write(newyearresolution[1]);
document.write(newyearresolution[3]);
newyearresolution[1]="ravi";
newyearresolution[3]="how";
newyearresolution[4]="are";
document.write(newyearresolution);
document.write(newyearresolution.length);
newyearresolution.push("manideep","kumar");
document.write(newyearresolution);
newyearresolution.pop(4);
document.write(newyearresolution);*/


/*const random=Math.floor(Math.random()*3);
const getGrandEvent=()=>
{
  if(random===0)
      {
          return "marathan";
      }
    else if(random===1)
    {
            return "Triathoran";
    }
    else if(random===2)
    {
            return "Pentahalan";
    }
};
document.write(getGrandEvent());

const getTrainingDays=event=>
{
    if(event==="marathan")
        {
             let days=50;
         
        }
    else if(event==="Triathoran")
    {
        let days=100;
    }
    else if(event==="Pentahalan")
        {
            let days=200;
            
        }
    return days;
};
document.write(getTrainingDays());

const logEvent=event=>
{
  const name=mala;
    document.write(`${name} and ${event}`);
};

const logTime=days=>
{
    const name=mala;
    document.write(`${name} and ${days}`);
};

const event=getGrandEvent();
const days=getTrainingDays(event);
logEvent(event);
logTime(days);*/





/*function MyFunction(p1,p2)
{
    if(p1>=p2)
        {
            let p1=10;
            document.write("p1 is greater "+(p1));
        }
    else
        {
document.write("p2 is greater "+(p2));
            
        }
    
    var p1=150,p2=250;
     if(p1>=p2)
        {
            document.write("p1 is greater "+(p1));
        }
    else
        {
document.write("p2 is greater "+(p2));
            
        }
     
};*/
/*MyFunction(4,6);


function MyFunction1(p1,p2)
{
  var p1=42,p2=63;
    if(p1>=p2)
        {
            document.write("p1 is greater "+(p1));
        }
    else
        {
document.write("p2 is greater "+(p2));
            
        }
};*/
/*MyFunction1();

function a1(a,b)
{
  return a*b; 
};
document.write(a1(5,6));


/*var fullStack=["eswar","samson","deepak","kesav","madhuri","rangi","sasimanideep<br>"];
fullStack.push("Akhila");// used to add the item at end
document.write(fullStack);
document.write(fullStack.length);
document.write(fullStack.indexOf("sasimanideep"));
fullStack.pop("Akhila"); // used to remove the item at end
document.write(fullStack.indexOf("Akhila"));
fullStack.shift(); // used to remove first element in the list
document.write(fullStack);
fullStack.unshift("vishnu");// used to add at the first of the list
document.write(fullStack);
fullStack.splice(3,1);// used to remove the particular index value
document.write(fullStack);
fullStack.splice(2,0,"SSUT");//add the item inplace of another index
document.write(fullStack);*/


//let eswar={name:["teja","deepak"],age:22,sex:"male",nationality:"Indian",collage:"BITS",number:9908689554};
//document.write("may name is"+eswar.name[0]+"my age is"+eswar["age"]);


/*       var fun1=(name[0])=>
{
           if(eswar.name[0]==="teja")
          {
              document.write("my age is"+eswar.age);
          }
    else
    {
    document.write("Hello"+eswar.name);    
    }
};
document.write(eswar.fun1(eswar.name[0]));*/

/*const alarmNotification=(day)=>
{   
    var name="sasi",age=26;
    if(name==="sasi" && age===26)
    {
    switch(day)
      {
          case "monday": return "Alarm set at 7AM"
                         break;
          case "tuesday": return "Alarm set at 7AM"
                         break;
          case "wednesday": return "Alarm set at 7AM"
                         break;
          case "thursday": return "Alarm set at 7AM"
                         break;
          case "friday": return "Alarm set at 7AM"
                         break;
          case "saterday": return "no alarm set"
                         break;
          case "sunday": return "no alarm set"
                         break;

      }
    
    }
  };
document.write(alarmNotification("monday"));*/


/*let person = {
    name:"sasi",
    age:26,
    weekdays:"set alarm to 7Am",
    weekend:"no alarm",
    };
document.write("my name is"+person.name+"and i am "+person.age);
var day="sunday";
var alarm;
if(day==="sunday" || day==="saturday")
   {
       alarm="weekend";  
   }
else{
    alarm="weekdays";
}
document.write(person[alarm]);*/

/*  using functions in an object
let ag ={
        name:"teja",
        getMonth(num)
        {
            switch(num)
            {
                case 1: return "jan";
                    break;
            }t
       }
};
document.write(ag.getMonth(1));
document.write(ag.name);  */


/*var h1 = document.getElementById("two");
console.log("the type of this",h1.nodeType);
console.log(h1.innerHTML);
h1.innerHTML="I just started learning DOM";
console.log(h1.innerHTML);
var h12=document.getElementById("ten");
h12.innerHTML="I Learned getter and setter method";
console.log(h12.innerHTML);*/




/*var a=document.createElement("h6");
console.log(a);
a.innerHTML="i am teja";
console.log(a.innerHTML);*/

/*var ssut=document.getElementById("four");
console.log(ssut);
var mani=document.createElement("h6");
console.log(mani);
mani.innerHTML="i am mani";
console.log(mani.innerHTML);
ssut.appendChild(mani);*/

/*var ssut=document.getElementById("four");
c="i am sasi manideep";
var b=document.createElement("h2");
b.innerHTML=c;
ssut.appendChild(b);
console.log(ssut);*/

var myImage = document.getElementById("i1");
arrayImage = ["p1.jpg","p2.jpg","p3.jpg"];
 var index = 0;
function changeImage(index)
{
   myImage.setAttribute("src",arrayImage[index]);
    index++;
    
  if(index >= arrayImage.length)
      {
          index = 0;
      }
}

setInterval(changeImage,3000);
/*
function getVolume()
{
var f1=document.getElementById("width").value;
var f2=document.getElementById("height").value;
var f3=document.getElementById("breath").value;
	var f4=f1*f2*f3;
	document.getElementById("volume").value=f4;
};
*/


/*function months()
{
	
var a=Math.floor(Math.random()*12);
  switch(a)
	  {
	  case 0: return "jan";
			  break;
	  case 1: return "feb";
			  break;
	  case 2: return "march";
			  break;
	  case 3: return "april";
			  break;
	  case 4: return "may";
			  break;
	  case 5: return "june";
			  break;
	  case 6: return "july";
			  break;
	  case 7: return "August";
			  break;
	  case 8: return "September";
			  break;
	  case 9: return "october";
			  break;
	  case 10: return "november";
			  break;
	  case 11: return "December";
			  break;			  
	  }
};
document.write(months());*/

/*function confirm()
{
	confirm("your name");
}
confirm();

function alert()
{
	alert("hello");
}
alert();

function prompt()
{
	prompt("hello");
}
prompt();*/

//var a;
//console.log(typeof(a));

