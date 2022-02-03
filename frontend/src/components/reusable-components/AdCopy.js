import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const AdCopy = (props) => {
  const nameItem = useSelector((store) => store.user.name);
  // const [name, SetName] = useState("Maria");
  const { text } = props;

  useEffect(() => {
    if (nameItem) {
      console.log("working");
    }
  }, [nameItem]);

  return (
    <div>
      <p>{nameItem}</p>
      {/* {nameItem.map((item) => (
        <h1>{item.name}</h1>
      ))} */}
      <h1>{text}</h1>
    </div>
  );
};

export default AdCopy;
