import React, { useEffect, useState } from "react";


import { api } from "../../utils";
import { Home } from "../../components";

const HomeContainer = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    api.fetchData().then((res) => setUsers(res.data));
  }, []);
  return <Home users={users}/>;
};

export default HomeContainer;
