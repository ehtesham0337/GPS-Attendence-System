import { Table } from "@mantine/core";

function OrganizerViewSlotAttendence() {
  const elements = [
    { position: "ali", mass: 12.011, time: "17:52", name:     7, distance:8},
    { position: "Ahmad", mass: 14.007, time: "17:50", name:   15  ,distance:5},
    { position: "Shakeel", mass: 88.906, time: "17:49:", name: 25 , distance:1},
    { position: "Mehmood", mass: 137.33, time: "17:53", name:30 , distance:3},
    { position: "Nabeel", mass: 140.12, time: "17:20", name: 19, distance:7},
  ];
  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.position}</td>
      <td>{element.name + " / 30"}</td>
      <td>{(element.name / 30) *100 +"%"} </td>
      <td>{element.time}</td>
      <td>{element.distance}</td>
     

    </tr>
  ));

//   const ths = (
//     <tr>
//       <th>Element position</th>
//       <th>Element name</th>
//       <th>Symbol</th>
//       <th>Atomic mass</th>
//     </tr>
//   );

  return (
    <Table
      fontSize="md"
      highlightOnHover
      horizontalSpacing="xl"
      verticalSpacing="sm"
    >
      <thead>
        <tr>
          <th>Attendee</th>
          <th>Classes Attended</th>
          <th>Total Classes</th>
          <th>Time</th>
          <th>Distance</th>

        </tr>
      </thead>
      <tbody>{rows}</tbody>
      {/* <tfoot>{ths}</tfoot> */}
    </Table>
  );
}

export default OrganizerViewSlotAttendence;
