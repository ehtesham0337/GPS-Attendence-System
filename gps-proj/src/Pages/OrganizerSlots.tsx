import {
  Card,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
  Space,
  Modal,
  Paper
} from "@mantine/core";
import {
  useState,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";

import Countdown from "react-countdown";

import HeaderDemo from "../Components/header";

 import PlzTime from './OrganizerAddSlot';

function OrganizerEventSlots(props: {
  head:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
  description:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
  attendees:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
  organizer:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
  attd:
    | any;
  setAttd:
    | any;
  time:
    | any;
}) {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  const [opened, setOpened] = useState(false);
  const [attendence, setAttendence] = useState(false);
  const [timer, setTimer] = useState(false);

  function markAttendence() {
    setAttendence(true);
    return console.log("Attendence Marked");
  }



  const Dummy =() => <Badge>hello</Badge>
  function timeOver () {
    if (timer){
    return (
      <div>
        <Countdown onStart={() => setAttendence(true)} date={Date.now() + props.time}>
           <Dummy/>
        </Countdown>
      </div>
    );
    }
    else{
      <div>Cannot</div>
    }

  
    
  };

//   const [time,setTime]  = useState(true);


// const Dumm = () => <div>{"Attendence CLosed"}</div>

// function chalo() {
//   return(
//     <Countdown  date={Date.now() + 5000}>
//     <Dumm/>
// </Countdown>
//   )
// }

// function displayTT(){
//   if(time){
    
//     return(
      
//       "Sorry its closed"
//     )
//   }
//   else if (!time){
//     return (
//       <>
//       {chalo()}
    
//       </>
//     )
//   }
// }

  // function startTimer() {
  //   return (
  //     <Countdown onStart={() => setAttendence(true)} date={Date.now() + 5000}>
  //       <TimeOver />
  //     </Countdown>
  //   );
  // }

  // function notBadge(){
  //     return(
  //     <Badge color="red" variant="outline">
  //     Attendence Not Open
  //   </Badge>
  //     )
  // }

  // function DisableBadge(props:{attStatus: boolean;}){

  //     if (props.attStatus === false){
  //         return(
  //             <>
  //             <Badge color="red" variant="outline">
  //     Attendence Not Open
  //   </Badge>
  //   </>
  //         )

  const CLO = () =>  <>{ console.log(props.attd)}</>
  return (
    <div>
       {/* <CLO/>
        <Button
              onClick={() => {props.setAttd(false)}}
              color="green"
              variant="outline"
            >
              
             Test Open Attendence
            </Button>

            <Button
              color="red"
              variant="filled"
              onClick={() => {props.setAttd(true)}}
            >
              Test Close Attendence
            </Button> */}
            
            <Paper>
    <Text
      variant="gradient"
      gradient={{ from: "indigo", to: "cyan", deg: 45 }}
      size="xl"
      weight={1000}
    >
      Start Attendence
    </Text>
  </Paper>

      <HeaderDemo />
      <Space h="xl" />
      <Space w="xl" />
      <Card
        withBorder
        shadow="sm"
        p="lg"
        styles={{ padding: "20px" }}
        sx={(theme) => ({
          backgroundColor: theme.colors.gray[0],
        })}
      >
        <Card.Section>
          {/* <Image src="./image.png" height={160} alt="Norway" /> */}
        </Card.Section>

        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <Text weight={500}>{props.head}</Text>

          <Group>
            
            <Button
              onClick={() => setAttendence(false)}
              color="green"
              variant="outline"
            >
              Open Attendence
            </Button>

            <Button
              color="red"
              variant="filled"
              onClick={() => setAttendence(true)}
            >
              Close Attendence
            </Button>
           
       
            {/* <Countdown onStart={() => setAttendence(true)} date={Date.now() + 10000}>
                <TimeOver/>
              </Countdown> */}
          </Group>
        </Group>
        
        <Group position="right" >
          {/* <Button onClick={() => setTime(false)}>Start Timer</Button>
          <Button onClick={() => setTime(true)}>End Timer</Button> */}
          <PlzTime time={50000}/>
              
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          {/* Name: {props.name} {<br/>}  */}
          Start Time: {props.description} {<br />}
          End Time: {props.attendees} {<br />}
          Credit Hours: {props.organizer} {<br />}
        </Text>

              {/* <Badge style={{width:'100%'}}>
                {displayTT()}
              </Badge> */}


        <Button
          className="markAttendence"
          variant="gradient"
          gradient={{ from: "teal", to: "blue", deg: 60 }}
          disabled={attendence}
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
          onClick={() => markAttendence()}
        >
          Mark Attendence
        </Button>
      </Card>

      <Modal
        transition="fade"
        transitionDuration={600}
        transitionTimingFunction="ease"
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}
        opened={opened}
        onClose={() => setOpened(false)}
        title="View:"
      >
        <Button
          color="violet"
          radius="xl"
          size="md"
          style={{ margin: "0 36%", justifySelf: "center" }}
        >
          Slots
        </Button>
        <Space h={20} />
        <Button
          color="violet"
          radius="xl"
          size="md"
          style={{ margin: "0 30%", justifySelf: "center" }}
        >
          Attendence
        </Button>
      </Modal>
    </div>
  );
}
export default OrganizerEventSlots;
