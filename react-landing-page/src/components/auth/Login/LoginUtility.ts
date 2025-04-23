import * as Yup from "yup"
import { AuthType } from "../../../utils/utils";


export const initialLoginState = {
    email: "",
    password: "",
    authType: AuthType.MANUAL_REGISTRATION
}

export const loginValidationSchema = Yup.object().shape({
    email: Yup.string().required("* Please enter email").email("* Please enter valid email address"),
    password: Yup.string().required("* Please enter password").min(8, "* Password must be at least 8 characters"),
});

export interface LOGIN {
    email: string,
    password: string,
    authType: string,
}
