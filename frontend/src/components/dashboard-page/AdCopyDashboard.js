import React from "react";
import { useSelector } from "react-redux";
import AdCopy from "../../components/reusable-components/AdCopy.js";

const AdCopyDashboard = () => {
  const nameItem = useSelector((store) => store.user.username);

  return (
    <>
      <AdCopy text={`Welcome ${nameItem}! Let’s make this day great.`} />

    </>
  );
};

export default AdCopyDashboard;
