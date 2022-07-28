import {
  Button,
  ColorSchemeProvider,
  MantineProvider,
  Table,
} from "@mantine/core";
import { NavbarMinimal } from "./Components/navbar";
import GetUserLocation from "./Components/location";
import { Notification } from "@mantine/core";
import { Check, RecycleOff } from "tabler-icons-react";
import HeaderDemo from "./Components/header";

import { Link } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  useState,
  useEffect,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from "react";

import SignUp from "./Pages/SignUp";
import AttendeeEventTiles from "./Pages/AttendeeEvents";
import AttendeeEventSlots from "./Pages/AttendeeSlots";
import ViewSlotAttendence from "./Pages/AttendeeAttendence";
import OrganizerEventTiles from "./Pages/OrganizerEvents";
import OrganizerEventSlots from "./Pages/OrganizerSlots";
import OrganizerViewSlotAttendence from "./Pages/OrganizerAttendenceView";
import Lemme from "./Pages/APItest";
import { title } from "process";

import data from "./data/attendeeData.json";

import Login from "./Components/Login/Login";
import useToken from "./Components/useToken";


// import PlzTime from './Pages/OrganizerAddSlot';

const App = () => {
  const { token, setToken } = useToken();
  

  const [attd, setAttd] = useState(false);
  const [tried, setTried] = useState<any>([]);



  const [movieData, setMovieData] = useState <any> ([]);
  // const getMovieList  = async () => {

  //     const url = 'https://reqres.in/api/users/2';

  //     const response = await fetch (url);
            
  //                 const responseJson = await response.json();
  //                 const data = (responseJson.results);
  //                 setMovieData(data);
  //                 console.log(movieData)
            

  // };

  // useEffect (()=> {
     
  //  getMovieList();
  // }, []);

  useEffect(() => {
    fetch("https://reqres.in/api/users/2")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovieData(data)
       
      });
  }, []);

  // console.log(movieData?.data)

  // const Rows = () => (
  //   <tbody>
  //     <tr key={tried.id}>
  //       <td>{tried.name}</td>
  //       <td>{tried.username}</td>
  //       <td>{tried.email}</td>
  //     </tr>
  //   </tbody>
  // );

  // useEffect(() => {
  //   fetch("http://localhost:8000/auth/register", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       email: "jondoe@gmail.com",
  //       password: "challllll",
        
  //     }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // }, []);

//   if (!token) {
//     return (
//       <div>
//       <BrowserRouter>
//         <Routes>
//     <Route path="/" element ={<Login setToken={setToken} />} />;
//     </Routes>
//     </BrowserRouter>
// </div>
//     )
//   }
if(!token) {
  return <Login setToken={setToken} />
}
const Dum = () => <><h1>Helo</h1></>
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Dum />} /> */}

{movieData.map((attdd : any ) => {
        return(
          <Route
            path="/AttendeeEvents"
            element={
              <AttendeeEventTiles
                head={attdd.data}
                description="Stats"
                attendees={50}
                organizer="Sir Daniyal"
              />
            }
          />
        )
        })}
          <Route
            path="/AttendeeEvents/AttendeeSlots"
            element={
              <AttendeeEventSlots
                event="project_eval"
                date="29/07/2022"
                start_time="16:15"
                end_time="17:10"
                credit_hours={10}
                boundary={10}
                timer={5000}
              />
            }
          />
          <Route
            path="/AttendeeEvents/AttendeeAttendence"
            element={<ViewSlotAttendence />}
          />
          <Route
            path="/OrganizerEvents"
            element={
              <OrganizerEventTiles
                head="DBMS"
                description="Normalization"
                attendees={25}
                organizer="Miss Raheela"
              />
            }
          />
          <Route
            path="/OrganizerEvents/OrganizerSlots"
            element={
              <OrganizerEventSlots
                head="DBMS"
                description="Normalization"
                attendees={25}
                organizer={7}
                attd={attd}
                setAttd={setAttd}
                time={5000}
              />
            }
          />

          <Route
            path="/OrganizerEvents/OrganizerAttendenceView"
            element={<OrganizerViewSlotAttendence />}
          />
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
  );
};

export default App;
