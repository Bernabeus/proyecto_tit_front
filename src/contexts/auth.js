import React, { createContext, useContext, useEffect, useState } from "react";
import cookie from "js-cookie";
import User from "../api/user.js";
import PropTypes from "prop-types";

    export const AuthContext = createContext(null);

    export function AuthProvider({ children }) {
        const auth = useAuthProvider();
        return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
    }

    AuthProvider.propTypes = {
        children: PropTypes.shape(),
    };

    export const useAuth = () => {
        const context = useContext(AuthContext);
        if (context === undefined) {
            throw new Error("useAuth must be used within an AuthProvider");
        }
        return context;
    };

    function useAuthProvider() {
    const [user, setUser] = useState(null);

    const handleUser = (user) => {
        if (user) {
            // si tengo sesión activa
            setUser(user);
            cookie.set("auth", true, {
                expires: 1, // dia
            });
            return user;
        } else {
            // no tengo sesión activa
            setUser(false);
            cookie.remove("auth");
            return false;
        }
    };

    async function register(data) {
        try {
            const res = await User.register(data);
            const respo = {
                email: data.email,
                password: data.password
            };
            const response = await User.login(respo);
            handleUser(response.data);
            return response;
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
                return Promise.reject(error.response);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        }
    };


    async function login(data) {
        try {
            const response = await User.login(data);
            handleUser(response.data.user);
            return response;
        } catch (error) {
            if (error.response) {
                alert(translateMessage(error.response.data.message));
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                return error.response;
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        }
    };

    async function logout() {
        try {
            const response = await User.logout();
            handleUser(false);
            return response;
        } catch (error) {
            console.log("error", error);
        }
    };

    async function getAuthenticatedUser() {
        try {
            const response = await User.getAuthenticatedUser();
            handleUser(response.data);
            return response;
        } catch (error) {
            handleUser(false);
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                return error.response;
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        }
    }; 

    useEffect(() => {
        try {
            getAuthenticatedUser();
        } catch (error) {
            console.log("NO USER");
        }
    }, []);

    return {
        user,
        register,
        login,
        logout,
    };
}