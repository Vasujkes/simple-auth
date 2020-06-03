import { axios } from "./";

export default {
  signIn: (postData) => axios.post("api-token-auth/", postData),
  getAll: () => axios.get("api/v1/users/"),
  findUser: (id) => axios.get("api/v1/users/" + id),
  updateUser: (putData, id) => axios.put(`api/v1/users/${id}/`, putData),
  deleteUser: (id) => axios.delete("api/v1/users/" + id),
};
