import axios from 'axios';

const gameId = 'Zl4d7IVkemOTTVg2fUdz';
const apiURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
// https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/
const getScore = async () => {
  const response = await axios.get(`${apiURL}/games/${gameId}/scores`);
  return response;
};

const addScore = async (game) => {
  const response = await axios.post(`${apiURL}/games/${gameId}/scores`, game);
  return response;
};

export { getScore, addScore };
