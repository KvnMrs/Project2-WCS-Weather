import { capitales } from './CapitalesJSON';

const CapitalesFetch = async () => {
  const queries = capitales.map((item) => {
    const query = {
      city: item.name,
      latitude: item.latitude,
      longitude: item.longitude,
    };
    return query;
  });
  const data = queries;
  return data;
};

export default CapitalesFetch;
