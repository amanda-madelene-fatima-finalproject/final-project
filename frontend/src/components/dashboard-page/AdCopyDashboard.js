import React from 'react';
import { useSelector } from 'react-redux';
import AdCopy from '../../components/reusable-components/AdCopy.js';

const AdCopyDashboard = () => {
  const name = useSelector((store) => store.user.name);

  return (
    <>
      <AdCopy text={`Welcome ${name}! Let’s make this day great.`} />
    </>
  );
};

export default AdCopyDashboard;
