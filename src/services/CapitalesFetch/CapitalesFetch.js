import { capitales } from './CapitalesJSON';

// const key = 'ae8db554743a0d9e76dda942a3f3fb05';

const CapitalesFetch = async () => {
  const queries = capitales.map((item) => {
    const query = {
      city: item.name,
      latitude: item.latitude,
      longitude: item.longitude,
      // url: `http://api.openweathermap.org/data/2.5/air_pollution?lat=${item.latitude}&lon=${item.longitude}&appid=${key}`,
    };
    return query;
  });
  const data = queries;
  return data;
};

export default CapitalesFetch;
