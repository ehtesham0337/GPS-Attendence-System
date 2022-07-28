import { Table , Paper, Text} from "@mantine/core";

function ViewSlotAttendence() {
  const elements = [   
    { position: "ali", mass: 12.011, symbol: "C", name:     7},
    { position: "Ahmad", mass: 14.007, symbol: "N", name:   15 },
    { position: "Shakeel", mass: 88.906, symbol: "Y", name: 25 },
    { position: "Mehmood", mass: 137.33, symbol: "Ba", name:30 },
    { position: "Nabeel", mass: 140.12, symbol: "Ce", name: 19 },
  ];
  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.position}</td>
      <td>{element.name + " / 30"}</td>
      <td>{(element.name / 30) *100 +"%"} </td>
    </tr>
  ));

  return (
    <>
    <Paper>
    <Text
      variant="gradient"
      gradient={{ from: "indigo", to: "cyan", deg: 45 }}
      size="xl"
      weight={1000}
    >
      Attendee Attendence
    </Text>
  </Paper>
    <Table
      fontSize="md"
      highlightOnHover
      horizontalSpacing="xl"
      verticalSpacing="sm"
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Classes Attended</th>
          <th>Total Classes</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
    </>
  );
}

export default ViewSlotAttendence;
