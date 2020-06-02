import { api } from "../utils";

const Actions = {
  fetchUserLogin: (postData) => (dispatch) => {
    return api.signIn(postData).then(
      (response) => {
        const { token } = response.data;
        if (response.status === 200) {
          window.axios.defaults.headers.common["token"] = `Token ${token}`;
          window.localStorage["token"] = `Token ${token}`;
          dispatch(Actions.setIsAuth(true));
        }
        return response;
      },
      (error) => {
        console.log(error);
      }
    );
  },
  setIsAuth: (bool) => ({
    type: "USER:SET_IS_AUTH",
    payload: bool,
  }),
};

export default Actions;
