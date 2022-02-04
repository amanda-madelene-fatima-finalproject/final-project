import React from "react";
import { useSelector } from "react-redux";
import AdCopy from "../../components/reusable-components/AdCopy.js";

const AdCopyDashboard = () => {
  const nameItem = useSelector((store) => store.user.name);

  // const test = "amanda";

  //   useEffect(() => {
  //     if (nameItem === false) {
  //       console.log("working");
  //     }
  //   }, [nameItem]);

  return (
    <>
      <AdCopy text={nameItem} />
    </>
  );
};

export default AdCopyDashboard;
