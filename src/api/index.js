import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'    

export const getPlacesData = async (sw, ne) => {
    try {
        const { data: {data} } = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
              },
              headers: {
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
                'X-RapidAPI-Key': '812db5616bmsh0a8bb08b35f0882p126f1fjsn901b14d1fb48',
              }
        });

        return data;
    } catch (error) {
        console.log(error)
    }
};