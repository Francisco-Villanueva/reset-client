import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
export class ApiServices {
  static async getAllBarbers() {
    return await axios.get(`${API_URL}/barbers/active/`);
  }
  static async setTurno(data) {
    return await axios.post(`${API_URL}/appointment/`, data);
  }
  static async getHorarios(barberId, date) {
    return await axios.get(
      `${API_URL}/hours/${barberId}/${date}/`
    );
  }
  static async getTurnoById(turnoId) {
    return await axios.get(
      `${API_URL}/appointment/${turnoId}/`
    );
  }
  static async deletTurno(turnoId) {
    return await axios.delete(
      `${API_URL}/appointment/${turnoId}/`
    );
  }
  static async getBarberById(barberId) {
    return await axios.get(
      `${API_URL}/barbers/${barberId}/`
    );
  }
  static async createCustomer(data) {
    return await axios.post(
      `${API_URL}/customers`, data
    );
  }
}
