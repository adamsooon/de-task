import React, { useState } from "react";
import Button from "@atlaskit/button";
import Form, { Field, FormFooter, HelperMessage } from "@atlaskit/form";
import { DatePicker } from "@atlaskit/datetime-picker";
import Textfield from "@atlaskit/textfield";
import TextArea from "@atlaskit/textarea";
import { AvatarPickerDialog, Avatar } from "@atlaskit/media-avatar-picker";
import { ModalTransition } from "@atlaskit/modal-dialog";

const avatars = [{ dataURI: "some-data-uri" }];
function TableComponent() {
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);
  const [isAvatarLoading, setIsAvatarLoading] = useState(false);
  const toggleIsAvatarOpen = () => {
    setIsAvatarModalOpen((isOpen) => !isOpen);
  };

  return (
    <div className="container">
      <Form onSubmit={(formState) => console.log("form submitted", formState)}>
        {({ formProps }) => (
          <form className="profile-form" {...formProps}>
            <h1 className="header-main">Profile form</h1>
            <Field isRequired label="First name" name="firstName">
              {({ fieldProps }) => (
                <>
                  <Textfield
                    placeholder="Enter your first name"
                    {...fieldProps}
                  />
                  <HelperMessage>
                    Help or instruction text goes here
                  </HelperMessage>
                </>
              )}
            </Field>
            <Field isRequired label="Last name" name="lastName">
              {({ fieldProps }) => (
                <>
                  <Textfield
                    placeholder="Enter your last name"
                    {...fieldProps}
                  />
                  <HelperMessage>
                    Help or instruction text goes here
                  </HelperMessage>
                </>
              )}
            </Field>
            <Field isRequired label="Email" name="email">
              {({ fieldProps }) => (
                <>
                  <Textfield placeholder="Enter your e-mail" {...fieldProps} />
                  <HelperMessage>
                    Help or instruction text goes here
                  </HelperMessage>
                </>
              )}
            </Field>
            <Field isRequired label="Phone number" name="phone">
              {({ fieldProps }) => (
                <>
                  <Textfield
                    placeholder="Enter your phone number"
                    {...fieldProps}
                  />
                  <HelperMessage>
                    Help or instruction text goes here
                  </HelperMessage>
                </>
              )}
            </Field>
            <Field isRequired label="About" name="about">
              {({ fieldProps }) => (
                <>
                  <TextArea
                    placeholder="Type something about you"
                    minimumRows={3}
                    {...fieldProps}
                  />
                  <HelperMessage>
                    Help or instruction text goes here
                  </HelperMessage>
                </>
              )}
            </Field>
            <Field name="birthday" label="Birthday" isRequired defaultValue="">
              {({ fieldProps }) => (
                <>
                  <DatePicker {...fieldProps} />
                  <HelperMessage>
                    Help or instruction text goes here
                  </HelperMessage>
                </>
              )}
            </Field>
            <Button appearance="primary" onClick={toggleIsAvatarOpen}>
              Upload Avatar
            </Button>
            <ModalTransition>
              {isAvatarModalOpen && (
                <AvatarPickerDialog
                  avatars={avatars}
                  onImagePicked={(selectedImage, crop) => {
                    setIsAvatarLoading(true);
                    console.log(selectedImage.size, crop.x, crop.y, crop.size);
                  }}
                  onAvatarPicked={(selectedAvatar) => {
                    console.log(selectedAvatar.dataURI);
                    setIsAvatarLoading(true);
                  }}
                  onCancel={toggleIsAvatarOpen}
                  isLoading={isAvatarLoading}
                />
              )}
            </ModalTransition>
            <FormFooter>
              <Button type="submit" appearance="primary">
                Submit
              </Button>
            </FormFooter>
          </form>
        )}
      </Form>
    </div>
  );
}

export default TableComponent;
