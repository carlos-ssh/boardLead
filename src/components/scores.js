import axios from 'axios';

const gameId = 'Zl4d7IVkemOTTVg2fUdz';
const apiURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/`;

const getScore = async () => {
  const response = await axios.get(`${apiURL}/games/${gameId}/scores`);
  return response;
};

const addScore = async (score) => {
  const response = await axios.post(`${apiURL}/games/${gameId}/scores`, game);
  return response;
}

export { getScore, addScore };