import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const FeedbackDashboard: React.FC = () => {
  const feedbackEntries = useSelector((state: RootState) => state.feedback.entries);

  const chartData = {
    labels: feedbackEntries.map((entry) => entry.name),
    datasets: [
      {
        label: "Ratings",
        data: feedbackEntries.map((entry) => entry.rating),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <Box p={4}>
      <Bar data={chartData} />
      <Table mt={4} variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Rating</Th>
            <Th>Feedback</Th>
          </Tr>
        </Thead>
        <Tbody>
          {feedbackEntries.map((entry) => (
            <Tr key={entry.id}>
              <Td>{entry.name}</Td>
              <Td>{entry.email}</Td>
              <Td>{entry.rating}</Td>
              <Td>{entry.feedback}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default FeedbackDashboard;