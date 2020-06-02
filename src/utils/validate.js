export default ({ values, errors }) => {
  const rules = {
    username: (value) => {
      if (!value) {
        errors.username = "Введите юзернейм";
      } else if (!/^[\w.@+-]+$/i.test(value)) {
        errors.username = "Неверный юзернейм";
      }
    },
    password: (value) => {
      if (!value) {
        errors.password = "Введите пароль";
      } else if (!/^(?=.*[A-Z])(?=.*\d).{6,}$/i.test(value)) {
        errors.password = "Слишком легкий пароль";
      }
    },
  };

  Object.keys(values).forEach((key) => rules[key] && rules[key](values[key]));
};
