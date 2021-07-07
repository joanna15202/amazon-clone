import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "http://localhost:5001/challenge-64600/us-central1/api",
  // https://us-central1-challenge-64600.cloudfunctions.net/api
});

export default instance;
