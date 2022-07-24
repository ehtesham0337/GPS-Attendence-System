import {  Button, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { NavbarMinimal} from './Components/navbar';
import GetUserLocation from './Components/location';
import { Notification } from '@mantine/core';
import { Check } from 'tabler-icons-react';
import HeaderDemo from './Components/header';
import SignUp from './Pages/SignUp';
import AttendeeEventTiles from './Pages/AttendeeEvents';
import AttendeeEventSlots from './Pages/AttendeeSlots';
import AppShellDemo from './Components/Appshell';


const App = () =>  {

  return(
    <div>
      <MantineProvider>
      
        {/* <SignUp /> */}
      
        {/* <AttendeeEventTiles head="Stats" description="Statttttttt" attendees={50} organizer="Sir Dani"/> */}
        <AttendeeEventSlots head="Stats" description="Statttttttt" attendees={50} organizer="Sir Dani"/>
       
        
     
    {/* <NavbarMinimal></NavbarMinimal> */}


      

       {/* <GetUserLocation/> */}

      {/* <HeaderMenuColored links={[{"link": "hello", "label" : "hello", "links" : "link": "/about",
      "label": "Features" ]}></HeaderMenuColored> */}
  
      
 
    </MantineProvider>
    </div>
  )
}

export default App;
