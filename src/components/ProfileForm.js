import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Form, { Field, FormFooter, ErrorMessage } from "@atlaskit/form";
import { DatePicker } from "@atlaskit/datetime-picker";
import { LoadingButton } from "@atlaskit/button";
import Textfield from "@atlaskit/textfield";
import TextArea from "@atlaskit/textarea";
import AvatarUploadComponent from "./AvatarUploadComponent";
import formValidator from "../utils/formValidator";

function ProfileForm() {
  const [isFormSending, setIsFormSending] = useState(false);
  const [imagePreviewSourceViaFileAPI, setImagePreviewSourceViaViaFileAPI] =
    useState("");
  const history = useHistory();

  const handleSave = (formData) => {
    setIsFormSending(true);
    fetch("apis/add", {
      method: "POST",
      body: JSON.stringify({
        ...formData,
        avatar: imagePreviewSourceViaFileAPI,
      }),
    })
      .then((response) => response.json())
      .then((data) => history.push(`/ds-task/profile/${data}`))
      .catch((e) => {
        // invoke some snackbar with error message here;
        console.log(e);
      })
      .finally(() => setIsFormSending(false));
  };

  return (
    <div className="container">
      <Form onSubmit={(formState) => handleSave(formState)}>
        {({ formProps }) => (
          <form {...formProps}>
            <h1 className="header-main">Profile form</h1>
            <Field
              isRequired
              label="First name"
              name="firstName"
              validate={(value) => formValidator("name", value)}
            >
              {({ fieldProps, error }) => (
                <>
                  <Textfield
                    placeholder="Enter your first name"
                    {...fieldProps}
                  />
                  {error && (
                    <ErrorMessage>
                      First name must contains only letters from a-z
                    </ErrorMessage>
                  )}
                </>
              )}
            </Field>
            <Field
              isRequired
              label="Last name"
              name="lastName"
              validate={(value) => formValidator("name", value)}
            >
              {({ fieldProps, error }) => (
                <>
                  <Textfield
                    placeholder="Enter your last name"
                    {...fieldProps}
                  />
                  {error && (
                    <ErrorMessage>
                      Last name must contains only letters from a-z
                    </ErrorMessage>
                  )}
                </>
              )}
            </Field>
            <Field
              isRequired
              label="Email"
              name="email"
              validate={(value) => formValidator("email", value)}
            >
              {({ fieldProps, error }) => (
                <>
                  <Textfield placeholder="Enter your e-mail" {...fieldProps} />
                  {error && <ErrorMessage>Invalid e-mail</ErrorMessage>}
                </>
              )}
            </Field>
            <Field
              isRequired
              label="Phone number"
              name="phone"
              validate={(value) => formValidator("phone", value)}
            >
              {({ fieldProps, error }) => (
                <>
                  <Textfield
                    placeholder="Enter your phone number"
                    {...fieldProps}
                  />
                  {error && <ErrorMessage>Invalid phone number </ErrorMessage>}
                </>
              )}
            </Field>
            <Field
              isRequired
              label="About"
              name="about"
              validate={(value) => formValidator("about", value)}
            >
              {({ fieldProps, error }) => (
                <>
                  <TextArea
                    placeholder="Type something about you"
                    minimumRows={3}
                    {...fieldProps}
                  />
                  {error && <ErrorMessage>This field is required</ErrorMessage>}
                </>
              )}
            </Field>
            <Field
              name="birthday"
              label="Birthday"
              isRequired
              validate={(value) => formValidator("birthday", value)}
            >
              {({ fieldProps, error }) => (
                <>
                  <DatePicker
                    {...fieldProps}
                    placeholder="Pick your birthday"
                  />
                  {error && <ErrorMessage>Pick your birthday</ErrorMessage>}
                </>
              )}
            </Field>
            <AvatarUploadComponent
              handleSetImagePreviewSourceViaViaFileAPI={
                setImagePreviewSourceViaViaFileAPI
              }
              imagePreviewSourceViaFileAPI={imagePreviewSourceViaFileAPI}
            />

            <FormFooter>
              <LoadingButton
                type="submit"
                appearance="primary"
                isLoading={isFormSending}
              >
                Submit
              </LoadingButton>
            </FormFooter>
          </form>
        )}
      </Form>
    </div>
  );
}

export default ProfileForm;
