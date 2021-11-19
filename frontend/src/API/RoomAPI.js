import AxiosClient from "./AxiosClient"
const RoomAPI = {
  getAll() {
    const url = `/room`;
    return AxiosClient.get(url);
  },
};
export default RoomAPI;
