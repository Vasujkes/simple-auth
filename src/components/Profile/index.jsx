import React, { useState, useEffect } from "react";
import { Card, Avatar } from "antd";
import { EditFormContainer } from "../../containers";

const { Meta } = Card;

const Profile = ({ currentUser }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (currentUser !== "undefined") {
      setLoading(false);
    }
  }, [currentUser]);
  return (
    <div className="profile">
      {currentUser && (
        <Card loading={loading}>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={currentUser.username}
            description={`User ID: ${currentUser.id}`}
          />
          <EditFormContainer currentUser={currentUser}/>
        </Card>
      )}
    </div>
  );
};

export default Profile;
