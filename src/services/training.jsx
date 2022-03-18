import Axios from "axios";

Axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";

export default class TrainingServices {
  getData() {
    return Axios.get(
      "https://run.mocky.io/v3/db2b72e7-d5dc-4803-a12d-9ee17e2cfeba"
    );
  }
}
