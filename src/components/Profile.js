import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Avatar, { AvatarItem } from "@atlaskit/avatar";

function Profile() {
  const [profileData, setProfileData] = useState({});
  const { profileId } = useParams();

  useEffect(() => {
    fetch(`/apis/profile/${profileId}`).then((res) => setProfileData(res));
  }, [profileId]);
  return (
    <div className="container-small">
      <AvatarItem avatar={<Avatar presence="online" />} />
      <div className="profile-item">
        <span className="profile-item-label">First Name:</span>
        <span>John</span>
      </div>
      <div className="profile-item">
        <span className="profile-item-label">Last Name:</span>
        <span>John</span>
      </div>
      <div className="profile-item">
        <span className="profile-item-label">Email:</span>
        <span>John@op.pl</span>
      </div>
      <div className="profile-item">
        <span className="profile-item-label">Phone:</span>
        <span>John</span>
      </div>
      <div className="profile-item">
        <span className="profile-item-label">Birthday:</span>
        <span>John</span>
      </div>
      <div className="profile-item">
        <span className="profile-item-label">About:</span>
        <span>John About About About</span>
      </div>
    </div>
  );
}

export default Profile;
