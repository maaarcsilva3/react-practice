const currentDate = new Date(2023, 1,1,20);
var currentTime= currentDate.getHours();
let greeting = "";

var customStyle = {color: " "}

if (currentTime<12){
  greeting = "Good Morning";
  customStyle.color = "red";
}else if (currentTime<18){
  greeting = "Good Afternoon";
  customStyle.color = "green";
}
else {
  greeting = "Good Evening";
  customStyle.color = "blue";
}

function Greeting() {

    return(
        <div>
           <h1 style={customStyle}> {greeting}</h1>
        </div>
    );
}

export default Greeting;