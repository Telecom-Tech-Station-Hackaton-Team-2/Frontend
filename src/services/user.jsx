import Axios from "axios";

Axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";

export default class UserServices {
  login(user) {
    return Axios.post(
      "https://run.mocky.io/v3/f9690c25-38d8-4769-992c-fedc65244675",
      user
    );
  }
  getData() {
    return Axios.get(
      "https://run.mocky.io/v3/c6ae5a52-5ce1-4386-9ae8-35d3e01b5e02"
    );
  }
  getUserData() {
    return Axios.get("https://run.mocky.io/v3/bcace46d-2a73-4bce-89d5-7dfb923f8c7c");
  }

}
