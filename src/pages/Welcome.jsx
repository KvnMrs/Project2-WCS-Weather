import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import WelcomeFetchCampus from '../services/WelcomeFetchCampus/WelcomeFetchItems';
import WelcomeHeader from '../components/WelcomeHeader/WelcomeHeader';
import CampusGrid from '../components/WelcomeCampusGrid/CampusGrid';
import WelcomeLoading from '../components/WelcomeLoading/WelcomeLoading';

const Welcome = () => {
  //
  // Fetched Data States
  //
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState([]);
  //
  // Fetch Campus from Files
  //
  async function promisedData() {
    const campus = await WelcomeFetchCampus()
      .then((result) => setData(result))
      .then(setLoaded(true));
    return campus;
  }
  //
  // Await Data
  useEffect(() => {
    (async () => {
      await promisedData();
    })();
  }, []);
  //
  //
  if (data.length > 0) {
    console.log(data);
  } else {
    console.log('No data yet.');
  }
  //
  // Animation
  //
  const fade = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });
  //
  //
  return (
    <animated.div className="static min-h-screen bg-gray-50" style={fade}>
      <div className="static flex flex-col mx-auto max-w-6xl lg:max-w-7xl items-center">
        <WelcomeHeader />
        {loaded && data.length > 0 ? <CampusGrid data={data} /> : null}
        <div className="pt-10">{loaded ? null : <WelcomeLoading />}</div>
      </div>
    </animated.div>
  );
};

export default Welcome;
