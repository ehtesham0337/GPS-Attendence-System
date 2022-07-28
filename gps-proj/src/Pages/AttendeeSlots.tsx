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
  useEffect,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import { Flask } from "tabler-icons-react";

import HeaderDemo from "../Components/header";
import OrganizerEventSlots from "./OrganizerSlots";

function AttendeeEventSlots(props: {
  event:
    | any; 
  date:
    | string
    | number
    | boolean
    | any
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
  start_time:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
  end_time:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
  credit_hours:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
  //   attd:
  //   | any;
  // setAttd:
  //   | any;
  boundary:
    | any;
  timer:
    | any;
    
}) {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  const [opened, setOpened] = useState(false);
  const [attendence, setAttendence] = useState(false);

  function markAttendence() {
    
    setAttendence(true);
    return console.log("Attendence Marked");
  }
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


//   const url = 'https://chall.free.beeceptor.com/yaar'
//   const tett: any = []
//   fetch (url).then((res) => res.json()).then((data) => {
// console.log(data.result)


     return (
    <div>
      
     {/* <Button onClick={()=> {fetch(url).then((res) => res.json().then((data) => console.log(data.age)))}}>ff</Button>
     */}
     
  
      <HeaderDemo />
      <Paper>
        <Text
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan", deg: 45 }}
          size="xl"
          weight={1000}
        >
          Attendee Slots
        </Text>
      </Paper>
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

<Text weight={500}>{props.event}</Text>
          {/* <div>
          { props.head.map((attD: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined) => (
          
          <Text weight={500}>{attD}</Text>
          ))}
          </div> */}
          <Group>
            {" "}
            <Badge hidden color="red" variant="outline">
              Attendence Not Open
            </Badge>
            <Badge
              onClick={() => setAttendence(false)}
              color="green"
              variant="outline"
            >
              Attendence Open
            </Badge>
          </Group>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          Date: {props.date} {<br/>} 
           Start Time: {props.start_time} {<br />}
          End Time: {props.end_time} {<br />}
          Credit Hours: {props.credit_hours} {<br />} 
        </Text>

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
export default AttendeeEventSlots;
