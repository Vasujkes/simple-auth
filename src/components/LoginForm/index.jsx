import React from "react";
import { Form, Icon, Input } from "antd";
import { Button, Block } from "../";
import { validateField } from "../../utils/helper";

import "./LoginForm.scss"

const LoginForm = (props) => {
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
    <div className="auth">
      <div className="auth__top">
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйста, войдите в свой аккаунт</p>
      </div>

      <Block>
        <Form onSubmit={handleSubmit} className="login-form">
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
          <Form.Item>
            {isSubmitting && !isValid && <span>Ошибка!</span>}
            <Button
              disabled={isSubmitting}
              onClick={handleSubmit}
              type="primary"
              size="large"
            >
              Войти в аккаунт
            </Button>
          </Form.Item>
        </Form>
      </Block>
    </div>
  );
};

export default LoginForm;
