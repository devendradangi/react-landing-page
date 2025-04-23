import * as Yup from "yup"
import { AuthType } from "../../../utils/utils";

export const initialSignUpState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    authType: AuthType.MANUAL_REGISTRATION
}

export const signUpValidationSchema = Yup.object().shape({
    firstName: Yup.string().required("* Please enter first name"),
    lastName: Yup.string().required("* Please enter last name"),
    email: Yup.string().required("* Please enter email").email("* Please enter valid email address"),
    password: Yup.string().required("* Please enter password").min(8, "* Password must be at least 8 characters"),
});

export interface SIGNUP {
    id?: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    authType: string,
    createdAt?: string,
}

