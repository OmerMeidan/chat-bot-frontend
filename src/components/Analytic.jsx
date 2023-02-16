import { useEffect, useState } from "react";
import axios from "axios";
import { Chart } from "react-google-charts";

function Analytic(props) {
  const [userList, setUserList] = useState();
  const [statList, setStatList] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("http://localhost:8000/Getallstats");
        setStatList(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    statList &&
      setData([
        ["Answer", "Cat", "Age", "Count"],
        [statList[0].Answer, "Data", statList[0].Counter, 1],
        [statList[1].Answer, "Data", statList[1].Counter, 7],
        [statList[2].Answer, "Data", statList[2].Counter, 3],
        [statList[3].Answer, "Data", statList[3].Counter, 2],
        [statList[4].Answer, "Data", statList[4].Counter, 6],
        [statList[5].Answer, "Data", statList[5].Counter, 2],
        [statList[6].Answer, "Data", statList[6].Counter, 1],
        [statList[7].Answer, "Data", statList[7].Counter, 8],
        [statList[8].Answer, "Data", statList[8].Counter, 2],
      ]);
  }, [statList]);

  const options = {
    legend: "none",
    chartArea: { left: 0, top: 0, right: 0, bottom: 0 },
    pieSliceText: "label",
  };

  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      {data && (
        <Chart
          chartType="PieChart"
          width="50vw"
          height="50vh"
          data={data}
          options={options}
          chartWrapperParams={{ view: { columns: [0, 3] } }}
          chartPackages={["corechart", "controls"]}
          controls={[
            {
              controlEvents: [
                {
                  eventName: "statechange",
                  callback: ({ chartWrapper, controlWrapper }) => {
                    console.log("State changed to", controlWrapper?.getState());
                  },
                },
              ],
              controlType: "CategoryFilter",
              options: {
                filterColumnIndex: 1,
                ui: {
                  labelStacking: "vertical",
                  label: "Select:",
                  allowTyping: false,
                  allowMultiple: false,
                },
              },
            },
          ]}
        />
      )}
    </div>
  );
}

export default Analytic;
