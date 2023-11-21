import axios from "axios";

const API_URL = process.env.API_URL;
export class ApiServices {
  static async getAllBarbers() {
    return await axios.get(`${API_URL}/barbers`);
  }
  static async setTurno(data) {
    return await axios.post(`${API_URL}/appointment`, data);
  }
  static async getHorarios(barberId, date) {
    return await axios.get(`${API_URL}/hours/${barberId}/${date}`);
  }
}
