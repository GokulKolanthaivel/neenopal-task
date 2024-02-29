// Dependencies
import { useState } from "react";

// Constants
import EditModal from "./EditModal.jsx";

// Components
import { profilesData } from "../constants.jsx";

// Images
import emailIcon from "../images/mail.png";
import phoneIcon from "../images/telephone.png";
import websiteIcon from "../images/website.png";
import editIcon from "../images/edit.png";
import deleteIcon from "../images/delete.png";
import heartFill from "../images/heart-fill.png";
import heartOutline from "../images/heart-outline.png";

export default function Profiles() {
  const [profiles, setProfiles] = useState(profilesData);
  const [currentProfileId, setCurrentProfileId] = useState();

  const handleDelete = (profileId) => {
    setProfiles(profiles.filter((profile) => profile.key !== profileId));
  };

  const handleLike = (profileId, likeStatus) => {
    const updatedItem = profiles?.map((profile) => {
      if (profile.key === profileId) {
        profile.like = likeStatus;
        return profile;
      } else {
        return profile;
      }
    });
    setProfiles(updatedItem);
  };

  return (
    <>
      <div className="profile-container">
        {profiles?.map((profile) => (
          <div className="profile-card" key={profile?.key}>
            <div>
              <img
                src={profile?.image}
                alt="profile"
                height="200px"
                width="300px"
              />
            </div>
            <div className="profile-details">
              <h4>{profile?.name}</h4>
              <div className="profile-details-others">
                <div className="profile-item">
                  <img src={emailIcon} alt="email" width="16px" height="16px" />
                  <span>{profile?.email}</span>
                </div>
                <div className="profile-item">
                  <img src={phoneIcon} alt="phone" width="16px" height="16px" />
                  <span>{profile?.phone}</span>
                </div>
                <div className="profile-item">
                  <img
                    src={websiteIcon}
                    alt="website"
                    width="16px"
                    height="16px"
                  />
                  <span>{profile?.site}</span>
                </div>
              </div>
            </div>
            <div className="profile-actions">
              <img
                src={profile?.like ? heartFill : heartOutline}
                alt="like"
                width="16px"
                height="16px"
                onClick={() => handleLike(profile?.key, !profile?.like)}
              />
              <img
                src={editIcon}
                alt="edit"
                width="16px"
                height="16px"
                onClick={() => setCurrentProfileId(profile?.key)}
              />
              <img
                src={deleteIcon}
                alt="delete"
                width="16px"
                height="16px"
                onClick={() => handleDelete(profile?.key)}
              />
            </div>
          </div>
        ))}
      </div>
      {currentProfileId && (
        <EditModal
          currentProfileId={currentProfileId}
          setCurrentProfileId={setCurrentProfileId}
          profiles={profiles}
          setProfiles={setProfiles}
        />
      )}
    </>
  );
}
