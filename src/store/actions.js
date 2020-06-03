import { api } from "../utils";
import { openNotification } from "../utils/helper";

const Actions = {
  fetchUserLogin: (postData) => (dispatch) => {
    return api.signIn(postData).then(
      (response) => {
        const { token } = response.data;
        if (response.status === 200) {
          window.axios.defaults.headers.common[
            "Authorization"
          ] = `Token ${token}`;
          window.localStorage["token"] = `Token ${token}`;
          dispatch(Actions.setIsAuth(true));
          return { status: "success" };
        }
      },
      (error) => {
        openNotification({
          text: "Неверная почта или пароль",
          type: "error",
          title: "Ошибка при авторизации",
        });
        return { status: "error" };
      }
    );
  },
  fetchUserData: (value) => (dispatch) => {
    api.findUser(value).then(({ data }) => {
      dispatch(Actions.setCurrentUser(data));
    });
  },
  fetchUsers: () => (dispatch) => {
    api.getAll().then(({ data }) => {
      dispatch(Actions.setUsers(data));
    });
  },
  setIsAuth: (bool) => ({
    type: "USER:SET_IS_AUTH",
    payload: bool,
  }),

  setUsers: (users) => ({
    type: "USER:SET_USERS",
    payload: users,
  }),

  setCurrentUser: (value) => ({
    type: "USER:FETCH_CURRENT_USER",
    payload: value,
  }),
  updateUser: (putData, id) => {
    return api.updateUser(putData, id).then((res) => {
      if (res.status === 200) {
        openNotification({
          text: "Отлично!",
          type: "success",
          title: "Юзер изменен",
        });
      } else {
        openNotification({
          text: "Чтото нетак!",
          type: "error",
          title: "Юзер не изменен",
        });
      }
      return res;
    });
  },
  deleteUser: (id) => (dispatch) => {
    return api.deleteUser(id).then((res) => {
      if (res.status === 204) {
        openNotification({
          text: "Отлично!",
          type: "success",
          title: "Юзер удален",
        });
      } else {
        openNotification({
          text: "Чтото нетак!",
          type: "error",
          title: "Не получилось удалить",
        });
      }
      dispatch(Actions.fetchUsers());
      return res;
    });
  },
};

export default Actions;
