const fetchApi = async (page, search, setData) => {
  const url = `https://core.ac.uk:443/api-v2/search/${search}?page=${page}&pageSize=10&apiKey=pblsZQN9WajuB3YzSVXyJG8HIfOMoUFt`;
  try {
    const response = await fetch(url);
    const info = await response.json();
    setData(info.data);
  } catch (error) {
    console.log(error);
  }
};

export default fetchApi;
