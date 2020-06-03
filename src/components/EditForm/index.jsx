import React from "react";
import { Form, Icon, Input, Switch } from "antd";
import { Button } from "../";
import { validateField } from "../../utils/helper";

import { MehOutlined } from "@ant-design/icons";
import "./EditForm.scss";

const EditForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    isSubmitting,
  } = props;
  return (
    <div className="edit">
      <Form onSubmit={handleSubmit} className="edit-form">
        <Form.Item
          validateStatus={validateField("username", touched, errors)}
          help={!touched.username ? "" : errors.username}
          hasFeedback
        >
          <Input
            id="username"
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            size="large"
            placeholder="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item>
          <Input
            id="first_name"
            prefix={<MehOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            size="large"
            placeholder="firstname"
            value={values.first_name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item>
          <Input
            id="last_name"
            prefix={<MehOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            size="large"
            placeholder="lastname"
            value={values.last_name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item
          validateStatus={validateField("password", touched, errors)}
          help={!touched.password ? "" : errors.password}
          hasFeedback
        >
          <Input
            id="password"
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            size="large"
            type="password"
            placeholder="Пароль"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item label="Активация">
          <Switch
            id="is_active"
            onChange={() => (values.is_active = !values.is_active)}
            defaultChecked
          />
        </Form.Item>
        <Form.Item>
          {isSubmitting && !isValid && <span>Ошибка!</span>}
          <Button
            disabled={isSubmitting}
            onClick={handleSubmit}
            type="primary"
            size="large"
          >
            Применить изменения
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditForm;
