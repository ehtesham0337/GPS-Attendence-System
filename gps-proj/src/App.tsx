import {  Button, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { NavbarMinimal} from './Components/navbar';
import GetUserLocation from './Components/location';
import { Notification } from '@mantine/core';
import { Check } from 'tabler-icons-react';
import HeaderDemo from './Components/header';
import SignUp from './Pages/SignUp';
import AttendeeEventTiles from './Pages/Attendee';
import AppShellDemo from './Components/Appshell';

// {
//   "links": [
//     {
//       "link": "/about",
//       "label": "Home"
//     },
//     {
//       "link": "/learn",
//       "label": "Features"
//     },
//     {
//       "link": "/pricing",
//       "label": "Pricing"
//     }
//   ]
// }

const App = () =>  {

  return(
    <div>
      <MantineProvider>
      <HeaderDemo/>
        {/* <SignUp /> */}
      
        <AttendeeEventTiles head="Stats" description="Statttttttt" attendees={50} organizer="Sir Dani"/>
       
        
     
    {/* <NavbarMinimal></NavbarMinimal> */}


      

       {/* <GetUserLocation/> */}

      {/* <HeaderMenuColored links={[{"link": "hello", "label" : "hello", "links" : "link": "/about",
      "label": "Features" ]}></HeaderMenuColored> */}
  
      
 
    </MantineProvider>
    </div>
  )
}

export default App;
