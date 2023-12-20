import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
export class ApiServices {
  static async getAllBarbers() {
    return await axios.get(`${API_URL}/barbers/?API_KEY=${API_KEY}`);
  }
  static async setTurno(data) {
    return await axios.post(`${API_URL}/appointment/?API_KEY=${API_KEY}`, data);
  }
  static async getHorarios(barberId, date) {
    return await axios.get(
      `${API_URL}/hours/${barberId}/${date}/?API_KEY=${API_KEY}`
    );
  }
  static async getTurnoById(turnoId) {
    return await axios.get(
      `${API_URL}/appointment/${turnoId}/?API_KEY=${API_KEY}`
    );
  }
  static async deletTurno(turnoId) {
    return await axios.delete(
      `${API_URL}/appointment/${turnoId}/?API_KEY=${API_KEY}`
    );
  }
  static async getBarberById(barberId) {
    return await axios.get(
      `${API_URL}/barbers/${barberId}/?API_KEY=${API_KEY}`
    );
  }
}
