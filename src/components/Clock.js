import React from 'react';
import '../styles/clock_styles.css';

export default function Clock(){
  const date = new Date()
  const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
  let months
  if (month === 0){
    months = "Jan"
  }
  else if (month === 1){
    months = "Feb"
  }
  else if (month === 2){
    months = "Mar"
  }
  else if (month === 3){
    months = "Apr"
  }
  else if (month === 4){
    months = "May"
  }
  else if (month === 5){
    months = "Jun"
  }
  else if (month === 6){
    months = "July"
  }
  else if (month === 7){
    months = "Aug"
  }
  else if (month === 8){
    months = "Sept"
  }
  else if (month === 9){
    months = "Oct"
  }
  else if (month === 10){
    months = "Nov"
  }
  else if (month === 11){
    months = "Dec"
  }
  console.log(month)
  return(
    <div className="clock_con">
        {months}/{day}/{year}
    </div>
  )
}
