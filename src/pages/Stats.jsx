import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import Header from "../components/Header";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const Stats = () => {
  const data = {
    labels: ["React", "NextJS", "JS", "Tailwind", "CSS", "CI/CD"],
    datasets: [
      {
        label: "Habilidades",
        data: [8, 9, 7, 5, 1, 10],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <Header />
      <h1>Stats</h1>
      <div className="container-chart">
        <Radar data={data} />
      </div>
      <style jsx>
        {`
          .container-chart {
            width: 50%;
            height: 400px;
            margin: 0 auto;
          }
        `}
      </style>
    </>
  );
};

export default Stats;
