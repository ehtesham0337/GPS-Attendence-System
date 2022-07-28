import { useState, useEffect } from "react"
import AttendeeEventSlots from "./AttendeeSlots"

const Lemme = () => {
    const [tried, setTried] = useState(null)

useEffect(() => {
  fetch('https://challl.free.beeceptor.com/yaar')
  .then(res => {
    return res.json()
  })
  .then((data) => {
    console.log(data)
    setTried(data)
  })
}, [])

return (
    <>
   {/* {tried.map((yes: any) => console.log(yes))} */}
      {/* { tried && <AttendeeEventSlots head={tried} />} */}
       </> 
)
}

export default Lemme