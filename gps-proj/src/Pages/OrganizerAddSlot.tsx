import { Button, Group } from "@mantine/core";
import { AnyTxtRecord } from "dns";
import { useState } from "react";
import Countdown from "react-countdown";


const PlzTime = (props: {time: | any;}) => {
  
const [time,setTime]  = useState(true);


const Dumm = () => <div>{"Attendence CLosed"}</div>

function chalo() {
  return(
    <Countdown  date={Date.now() + props.time}>
    <Dumm/>
</Countdown>
  )
}

function displayTT(){
  if(time){
    
    return(
      
      "Sorry its closed"
    )
  }
  else if (!time){
    return (
      <>
   {chalo()}
    
      </>
    )
  }
}

return (
  <div>
      {displayTT()}
      <Group position="apart">
      <Button color="indigo"
              variant="outline" onClick={() => setTime(false)}>Start Timer</Button>
      
      <Button color="orange"
              variant="outline" onClick={() => setTime(true)}>Close Timer</Button>
              </Group>

  </div>
)
}

export default PlzTime