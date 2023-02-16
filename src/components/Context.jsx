import { useState } from "react";

const Context = () => {
    const Answer = new Array(18);
    console.log(Answer);
    const [obj,setObj]=useState({})
    return { Answer,obj,setObj };
  };
  export default Context;
