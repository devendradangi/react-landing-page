import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { Button } from "react-bootstrap";
import { FaGoogle } from "react-icons/fa";
import { GOOGLE_AUTH_TYPE } from "../../common";
import { FcGoogle } from "react-icons/fc";


interface GoogleAuthButtonProps {
    type: string;
    onGoogleSuccess: (userData: any) => void;
    onGoogleError?: (error: any) => void;
}

const GoogleAuthButton = ({ type, onGoogleSuccess, onGoogleError }: GoogleAuthButtonProps) => {
    const handleGoogleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                    headers: {
                        Authorization: `Bearer ${tokenResponse.access_token}`,
                    },
                });
                onGoogleSuccess(res.data);
            } catch (error) {
                console.error("Failed to fetch Google user data", error);
                onGoogleError?.(error);
            }
        },
        onError: (error) => {
            console.error("Getting Error From Google", error);
            onGoogleError?.(error);
        },
    });

    return (
        <Button onClick={() => handleGoogleLogin()} variant="dark" className="w-100 mb-2">
            <span className="d-flex align-items-center justify-content-center gap-2">
                <>{FcGoogle({ fontSize: '25px' })}</>
                {type === GOOGLE_AUTH_TYPE.SIGNUP ? "Sign Up with Google" : "Log In with Google"}
            </span>
        </Button>
    );
};

export default GoogleAuthButton;
