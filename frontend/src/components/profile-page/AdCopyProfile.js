import React from "react";
// import { useSelector } from "react-redux";
import AdCopy from "../reusable-components/AdCopy.js";

const AdCopyProfile = () => {
  // const nameItem = useSelector((store) => store.user.name);

  // const test = "amanda";

  //   useEffect(() => {
  //     if (nameItem === false) {
  //       console.log("working");
  //     }
  //   }, [nameItem]);

  return (
    <>
      <AdCopy text="Hey! Let’s see how you’ve been doing." />
    </>
  );
};

export default AdCopyProfile;
