import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Avatar, { AvatarItem } from "@atlaskit/avatar";
import Spinner from "@atlaskit/spinner";

function Profile() {
  const [profileData, setProfileData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { profileId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetch(`/apis/profile/${profileId}`)
      .then((response) => response.json())
      .then((data) => {
        setProfileData(data.profile);
      })
      .catch((e) => {
        console.log(e);
        // invoke some snackbar with error message here;
      })
      .finally(() => setIsLoading(false));
  }, [profileId]);

  if (isLoading) {
    return (
      <div className="spinner-box">
        <Spinner appearance="inherit" size="xlarge" />
      </div>
    );
  }
  return (
    <div className="profile">
      <div className="profile-avatar">
        <AvatarItem
          avatar={
            <Avatar
              presence="online"
              src={profileData?.avatar}
              size="xxlarge"
            />
          }
        />
      </div>
      <div className="profile-data">
        <div className="profile-item">
          <span className="profile-item-label">First Name:</span>
          <span>{profileData?.firstName}</span>
        </div>
        <div className="profile-item">
          <span className="profile-item-label">Last Name:</span>
          <span>{profileData?.lastName}</span>
        </div>
        <div className="profile-item">
          <span className="profile-item-label">Email:</span>
          <span>{profileData?.email}</span>
        </div>
        <div className="profile-item">
          <span className="profile-item-label">Phone:</span>
          <span>{profileData?.phone}</span>
        </div>
        <div className="profile-item">
          <span className="profile-item-label">Birthday:</span>
          <span>{profileData?.birthday}</span>
        </div>
        <div className="profile-item">
          <span className="profile-item-label">About:</span>
          <span>{profileData?.about}</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
