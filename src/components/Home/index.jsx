import React from "react";
import { Input, Empty, Table, Modal, Tooltip, Button } from "antd";

import { Profile } from "../";

import "./Home.scss";

const Home = ({
  users,
  onSearch,
  inputValue,
  userSelect,
  onClose,
  visible,
  currentUser,
  deleteUser,
  logout,
}) => {
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      width: 40,
      align: "center",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "username",
      dataIndex: "username",

      ellipsis: true,
      align: "center",

      render: (text, record) => (
        <Button type="link" block onClick={() => userSelect(record.id)}>
          {text}
        </Button>
      ),
    },
    {
      title: "firstname",
      dataIndex: "first_name",
    },
    {
      title: "lastname",
      dataIndex: "last_name",
    },
    {
      title: "Action",
      key: "action",
      width: 100,

      render: (text, record) => (
        <Button
          type="link"
          style={{ color: "#ff4d4f" }}
          onClick={() => deleteUser(record.id)}
        >
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div className="home">
      <div className="home__header">
        <Input.Search
          placeholder="Поиск среди контактам"
          onChange={(e) => onSearch(e.target.value)}
          value={inputValue}
        />
        <Tooltip title="logout">
          <Button shape="circle" icon="logout" onClick={logout} />
        </Tooltip>
      </div>
      <div className="home__content">
        {users.length ? (
          <Table
            columns={columns}
            dataSource={users}
            rowKey="id"
            pagination={{ pageSize: 5, position: "bottom" }}
            style={{ whiteSpace: "pre" }}
            scroll={{ x: 500 }}
          />
        ) : (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="ничего не найдено"
          />
        )}
        <Modal
          title="Информация о пользоватиле"
          visible={visible}
          onOk={onClose}
          onCancel={onClose}
          okText="Применить"
          cancelText="Закрыть"
        >
          <Profile currentUser={currentUser} />
        </Modal>
      </div>
    </div>
  );
};

export default Home;
