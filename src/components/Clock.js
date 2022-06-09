import React from 'react';
import '../styles/clock_styles.css';

export default function Clock(){
  const date = new Date()
  const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
  return(
    <div className="clock_con">
        {month}/{day}/{year}
    </div>
  )
}
