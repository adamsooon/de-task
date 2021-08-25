import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "@atlaskit/button";
import Avatar, { AvatarItem } from "@atlaskit/avatar";
import { AvatarPickerDialog } from "@atlaskit/media-avatar-picker";
import { ModalTransition } from "@atlaskit/modal-dialog";

function AvatarUploadComponent({
  imagePreviewSourceViaFileAPI,
  handleSetImagePreviewSourceViaViaFileAPI,
}) {
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);
  const [isAvatarLoading, setIsAvatarLoading] = useState(false);
  const toggleIsAvatarOpen = () => {
    setIsAvatarModalOpen((isOpen) => !isOpen);
  };

  const handleImagePicked = (file) => {
    setIsAvatarLoading(true);
    handleSetImagePreviewSourceViaViaFileAPI(URL.createObjectURL(file));
    toggleIsAvatarOpen();
    setIsAvatarLoading(false);
  };

  return (
    <>
      {imagePreviewSourceViaFileAPI && (
        <AvatarItem
          avatar={
            <Avatar
              presence="online"
              src={imagePreviewSourceViaFileAPI}
              size="xxlarge"
            />
          }
        />
      )}
      <Button
        appearance="primary"
        className="upload-button"
        onClick={toggleIsAvatarOpen}
      >
        {!!imagePreviewSourceViaFileAPI ? "Change Avatar" : "Upload Avatar"}
      </Button>
      <ModalTransition>
        {!!isAvatarModalOpen && (
          <AvatarPickerDialog
            onImagePicked={(selectedImage) => {
              handleImagePicked(selectedImage);
            }}
            onCancel={toggleIsAvatarOpen}
            isLoading={isAvatarLoading}
          />
        )}
      </ModalTransition>
    </>
  );
}

AvatarUploadComponent.propTypes = {
  imagePreviewSourceViaFileAPI: PropTypes.string.isRequired,
  handleSetImagePreviewSourceViaViaFileAPI: PropTypes.func.isRequired,
};

export default AvatarUploadComponent;
