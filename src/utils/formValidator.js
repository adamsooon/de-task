import { EMAIL_REGEX, NAME_REGEX, PHONE_REGEX } from "../contants/regexes";

export default function formValidator(field, value) {
  switch (field) {
    case "name":
      if (!NAME_REGEX.test(value)) {
        return "INCORRECT";
      }
      return undefined;
    case "phone":
      if (!PHONE_REGEX.test(value)) {
        return "INCORRECT";
      }
      return undefined;
    case "email":
      if (!EMAIL_REGEX.test(value)) {
        return "INCORRECT";
      }
      return undefined;
    case "birthday":
    case "about":
      if (!value) {
        return "INCORRECT";
      }
      return undefined;

    default:
      return undefined;
  }
}
