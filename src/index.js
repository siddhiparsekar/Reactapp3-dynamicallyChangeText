import React from "react";
import ReactDOM from "react-dom";

//Create react app from scratch
//show a singe h1 that says "good morning" if between midnight and 12pm
//or "goodafternoon" if between 12pm and 6pm
//or "goodnight" if between 6pm and midnight
//Apply the heading style in the stlye.css
//Dynamically change the color of the h1 using inline cssstyles
//Morning =blue, Afternoon=yellow, Night=green
const date = new Date();
const currentTime = date.getHours();

let greetings;

const customStyle = {
  color: ""
};

if (currentTime < 12) {
  greetings = "Good Morning";
  customStyle.color = "blue";
} else if (currentTime < 18) {
  greetings = "Good Afternoon";
  customStyle.color = "yellow";
} else {
  greetings = "Good Night";
  customStyle.color = "green";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greetings}
  </h1>,
  document.getElementById("root")
);
