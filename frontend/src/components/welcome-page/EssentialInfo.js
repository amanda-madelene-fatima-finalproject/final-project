import React from 'react';
import NavbarWelcome from '../welcome-page/NavbarWelcome.js';
import Loader from 'components/reusable-components/Loader.js';
const EssentialInfo = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  });
  return (
    <>
      {loading == true ? (
        <Loader />
      ) : (
        <div>
          <NavbarWelcome />
        </div>
      )}
    </>
  );
};

export default EssentialInfo;
