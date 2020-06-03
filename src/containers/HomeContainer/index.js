import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { Home } from "../../components";

import store from "../../store/store";
import Actions from "../../store/actions";


const HomeContainer = ({ currentUser, users }) => {
  const [inputValue, setValue] = useState("");
  const [filtred, setFiltred] = useState(Array.from(users));
  const [visible, setVisible] = useState(false);
  
  const onChangeInput = (value = "") => {
    setFiltred(
      users.filter(
        (user) => user.username.toLowerCase().indexOf(value.toLowerCase()) >= 0
      )
    );
    setValue(value);
  };

  const userSelect = (value) => {
    store.dispatch(Actions.fetchUserData(value));
    setVisible(true);
  };

  const deleteUser = async (value) => {
    await store.dispatch(Actions.deleteUser(value));
  };

  const onClose = () => {
    setVisible(false);
  };

  const logout = async () => {
    localStorage.clear();
    await store.dispatch(Actions.setIsAuth(false));
  };

  useEffect(() => {
    store.dispatch(Actions.fetchUsers());
  }, []);

  useEffect(() => {
    onChangeInput('');
  }, [users]);

  return (
    <Home
      users={filtred}
      onSearch={onChangeInput}
      inputValue={inputValue}
      userSelect={userSelect}
      onClose={onClose}
      visible={visible}
      currentUser={currentUser}
      deleteUser={deleteUser}
      logout={logout}
    />
  );
};

export default connect((currentUser, users) => currentUser || users)(
  HomeContainer
);
