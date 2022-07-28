import {  Button, ColorSchemeProvider, MantineProvider, Table } from '@mantine/core';
import { NavbarMinimal} from './Components/navbar';
import GetUserLocation from './Components/location';
import { Notification } from '@mantine/core';
import { Check, RecycleOff } from 'tabler-icons-react';
import HeaderDemo from './Components/header';
import AppShellDemo from './Components/Appshell';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState, useEffect, JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal } from 'react';



import SignUp from './Pages/SignUp';
import AttendeeEventTiles from './Pages/AttendeeEvents';
import AttendeeEventSlots from './Pages/AttendeeSlots';
import ViewSlotAttendence from './Pages/AttendeeAttendence';
import OrganizerEventTiles from './Pages/OrganizerEvents';
import OrganizerEventSlots from './Pages/OrganizerSlots';
import OrganizerViewSlotAttendence from './Pages/OrganizerAttendenceView';
import Lemme from './Pages/APItest';
import { title } from 'process';

import data from './data/attendeeData.json'



// import PlzTime from './Pages/OrganizerAddSlot';

const App = () =>  {

  const [attd, setAttd] = useState(false)
  const [tried, setTried] = useState <any >([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => {
      return res.json()
    })
    .then((data) => {
      console.log(data)
      setTried(data)
    })
  }, [])

  const Rows = () => (
    <tbody>
   <tr key={tried.id}>
      <td>{tried.name}</td>
      <td>{tried.username}</td>
      <td>{tried.email}</td>
    </tr>
    </tbody>
  );

  useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts/', {
  method: 'POST',
  body: JSON.stringify({
    id: 1,
    title: 'challllll',
    body: 'bar',
    userId: 69999,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}, [])
 


  return(

    <div>

<BrowserRouter>
      <Routes>
        <Route path="/"  element={<SignUp />}/>

        <Route path="AttendeeEvents"  element={<AttendeeEventTiles head={tried.username} description="Stats" attendees={50} organizer="Sir Daniyal"/>}/>
        <Route path="AttendeeEvents/AttendeeSlots"  element={<AttendeeEventSlots event="project_eval" date="29/07/2022" start_time="16:15" end_time="17:10" credit_hours={10} boundary={10} timer={5000}/>}/>
       <Route path="AttendeeEvents/AttendeeAttendence" element={<ViewSlotAttendence  />} />
        <Route path="OrganizerEvents"  element={<OrganizerEventTiles head="DBMS" description="Normalization" attendees={25} organizer="Miss Raheela"/>}/>
        <Route path="OrganizerEvents/OrganizerSlots"  element={<OrganizerEventSlots head="DBMS" description="Normalization" attendees={25} organizer={7} attd={attd} setAttd={setAttd} time={5000}/>}/>
        
        <Route path="OrganizerEvents/OrganizerAttendenceView" element={<OrganizerViewSlotAttendence  />} />
        </Routes> 
    </BrowserRouter>

    
     {/* <Table><Rows/></Table> */}
 
      {/*<MantineProvider>
      
        {/* <SignUp /> */}
      
        {/* <AttendeeEventTiles head="Stats" description="Statttttttt" attendees={50} organizer="Sir Dani"/> */}
        {/* <AttendeeEventSlots head="Stats" description="Statttttttt" attendees={50} organizer="Sir Dani"/> */}
       
        
     
    {/* <NavbarMinimal></NavbarMinimal> */}


      

    

      {/* <HeaderMenuColored links={[{"link": "hello", "label" : "hello", "links" : "link": "/about",
      "label": "Features" ]}></HeaderMenuColored> */}
  
      
 
    
    </div>
  )
    }

export default App;
