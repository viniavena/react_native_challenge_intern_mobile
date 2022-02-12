import axios from "axios";

const uri = 'https://www.healthcare.gov/api';

const api = axios.create({
  baseURL: uri,
});

export async function getArticles() {
  try{
    const response = (await api.get('/articles.json'))
    return(response.data)
  }
  catch(err)
  {
    console.log(err)
  }
}
