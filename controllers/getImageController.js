import {API_URL} from '@env';

const getImage = async () => {
  try {
    const res = await fetch(API_URL + 'water-level-image/3', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getWaterLevel = async () => {
  try {
    const res = await fetch(API_URL + 'water-level/3', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getLEDStatus = async () => {
  try {
    const res = await fetch(API_URL + 'led-status/3', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export {getLEDStatus, getImage, getWaterLevel};
