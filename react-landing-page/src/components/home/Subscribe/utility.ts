import * as Yup from "yup";

export const emailValidationSchema = Yup.object().shape({
    email: Yup.string()
        .required("* Please enter email")
        .email("* Please enter valid email address"),
});

export const initialEmailFormValues = {
    email: "",
} 
