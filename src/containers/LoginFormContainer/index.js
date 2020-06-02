import { withFormik } from "formik";

import { LoginForm } from "../../components";
import validateForm from "../../utils/validate";

import Actions from "../../store/actions";
import store from "../../store/store";

const LoginFormContainer = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    username: "",
    password: "",
  }),
  validate: (values) => {
    let errors = {};
    validateForm({ isAuth: true, values, errors });
    return errors;
  },

  handleSubmit: (values, { setSubmitting, props }) => {
    store.dispatch(Actions.fetchUserLogin(values)).then((response) => {
      const { status } = response;
      if (status === 200) {
        setTimeout(() => {
          props.history.push("/");
        }, 500);
        setSubmitting(false);
      }
      setSubmitting(false);
    });
  },

  displayName: "LoginForm",
})(LoginForm);

export default LoginFormContainer;
