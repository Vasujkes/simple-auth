import { withFormik } from "formik";

import { EditForm } from "../../components";
import validateForm from "../../utils/validate";

import Actions from "../../store/actions";

const EditFormContainer = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    is_active: true,
  }),
  validate: (values) => {
    let errors = {};
    validateForm({ isAuth: true, values, errors });
    return errors;
  },

  handleSubmit: (values, { setSubmitting, props }) => {
    const { id } = props.currentUser;
    Actions.updateUser(values, id).then((res) => {
      setSubmitting(false);
    });
  },

  displayName: "LoginForm",
})(EditForm);

export default EditFormContainer;
