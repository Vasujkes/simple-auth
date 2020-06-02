import { axios } from "./";
import { openNotification } from "./helper";

export default {
  signIn: (postData) =>
    axios.post("api-token-auth/", postData).then(
      (response) => {
        openNotification({
          text: "Отлично!",
          type: "success",
          title: "Авторизация успешна",
        });
        return response
      },
      (error) => {
        openNotification({
          text: "Неверная почта или пароль",
          type: "error",
          title: "Ошибка при авторизации",
        });
        return error
      }
    ),
  fetchData: () => axios.get("api/v1/users/"),
};
