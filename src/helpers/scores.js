import axios from 'axios';

const fetchData = () => {
  const api = {
    key: 'NLwNRR6lDiDhTAfns436',
    baseurl: 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
  };

  const url = `${api.baseurl}${api.key}/scores/`;

  const saveScore = (user, score = 0) => {
    let details = { user, score };
    return axios.post(url, details).then(response => response.data);
  };

  const getScores = () => axios.get(url).then(response => response.data.result);

  return {
    saveScore, getScores,
  };
};

export default fetchData;