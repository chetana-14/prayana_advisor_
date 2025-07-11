import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'x-rapidapi-key': 'c33e700a16mshe55b11480d82ebcp190485jsn03713fc6aab0',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
      }
    });
    
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};