import { useEffect, useState } from "react";
import axios from "axios";

function Analytic(props) {
  const [list, setList] = useState();
  const final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  useEffect(() => {
    const getData = async () => {
      const temp = [];
      try {
        axios.get("http://localhost:8000/UserList").then((data) => {
          console.log(data);
          data && temp.push(data.data.map((a) => a.Answers));
          // console.log(res.data[0].Answers);
          setList(temp[0]);
          if (list) {
            for (let i = 0; i < list.length; i++) {
              const sheet = list[i];
              console.log("this is sheet:", sheet);

              if (list[i] !== undefined) {
                for (let j = 0; j < sheet.length; j++) {
                  if (typeof sheet[j] === "string") {
                    console.log(i);
                  } else if (typeof sheet[j] === "number") {
                    final[i]++;
                    console.log("hi mommy2");
                    console.log("works:", final[i]);
                  }
                  // final[i][j] = list[i][j];
                  // console.log(final[1][0]);
                  // console.log(list[i][j]);
                }
              }
            }
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  console.log(list);
  console.log(final);
  return <div></div>;
}

export default Analytic;
