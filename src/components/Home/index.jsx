import React from "react";
import orderBy from "lodash/orderBy";
import { Input, Empty, Table } from "antd";

import "./Home.scss";

const columns = [
  {
    title: "id",
    dataIndex: "id",
  },
  {
    title: "username",
    dataIndex: "username",

    render: (text) => <a>{text}</a>,
  },
];

const Home = ({ users }) => {
  console.log(users);

  const data = orderBy(users, ["id"], ["asc"]);

  return (
    <div className="home">
      <div className="home__header">123</div>
      <div className="home__content">
        {users.length ? (
          <Table columns={columns} dataSource={data} rowkey="id" />
        ) : (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="ничего не найдено"
          />
        )}
      </div>
    </div>
  );
};

export default Home;
