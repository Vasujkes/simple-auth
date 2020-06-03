export default ({ values, errors }) => {
  const rules = {
    username: (value) => {
      if (!value) {
        errors.username = "Введите юзернейм";
      } else if (!/^[\w.@+-]{1,149}$/i.test(value)) {
        errors.username = "Неверный юзернейм";
      }
    },
    password: (value) => {
      let reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,127}$/
      if (!value) {
        errors.password = "Введите пароль";
      } else if (!value.match(reg)) {
        errors.password = "Слишком легкий пароль";
      }
    },
  };

  Object.keys(values).forEach((key) => rules[key] && rules[key](values[key]));
};
