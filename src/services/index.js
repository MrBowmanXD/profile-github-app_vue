import axios from "axios";
import config from "../../config";

const http = axios.create({
  baseURL: config.github.url,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

class GithubService {
  constructor(http) {
    this.http = http;
  }

  async getUser(username) {
    return await this.http.get(`/${username}`);
  }
}

export default new GithubService(http);
