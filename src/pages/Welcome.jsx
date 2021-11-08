import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { WelcomeFetchCampus } from '../services/WelcomeFetchCampus/WelcomeFetchItems';
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
  //
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="static min-h-screen bg-gray-50">
        <div className="static flex flex-col mx-auto max-w-6xl lg:max-w-7xl items-center">
          <WelcomeHeader />
          {loaded && data.length > 0 ? <CampusGrid data={data} /> : null}
          <div className="pt-10">{loaded ? null : <WelcomeLoading />}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Welcome;
