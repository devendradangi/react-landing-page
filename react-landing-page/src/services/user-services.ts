
import { LOGIN } from "../components/auth/Login/LoginUtility";
import { SIGNUP } from "../components/auth/Signup/SignupUtility";
import { initIDB } from "../db";
import bcrypt from 'bcryptjs';


export const registerUser = async (user: Omit<SIGNUP, 'id' | 'createdAt'>): Promise<void> => {
    const db = await initIDB();

    const existing = await db.getFromIndex('users', 'email', user.email);

    if (existing) {
        throw new Error('User already exists');
    }

    if (!user.password || user.password.length < 8) {
        throw new Error('Password must be at least 8 characters long');
    }
    console.log(user.password)
    const hashedPassword = await bcrypt.hash(user.password, 10);

    const newUser = {
        ...user,
        password: hashedPassword,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
    };

    await db.add('users', newUser);
};

export const loggedInUser = async (user: LOGIN): Promise<void> => {
    console.log(user)
    const db = await initIDB();

    const existing = await db.getFromIndex('users', 'email', user.email);

    if (!existing) {
        throw new Error('User does not exist');
    }

    if (existing.authType === 'GOOGLE_SSO' && user.authType === 'MANUAL_REGISTRATION') {
        throw new Error("You're registered with Google. Please use Google login.");
    }

    if (existing.authType === 'MANUAL_REGISTRATION' && user.authType === 'GOOGLE_SSO') {
        throw new Error("You're registered manually. Google login is not allowed.");
    }

    const isPasswordValid = await bcrypt.compare(user.password, existing.password);

    if (!isPasswordValid) {
        throw new Error('Invalid password');
    }

    // Here i am storing logged in user data without password in localstorage
    const { password, ...userDataToStore } = existing;
    localStorage.setItem('loggedInUser', JSON.stringify(userDataToStore))
}

