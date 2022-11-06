import callAPI from "../config/api";
import { AuthTypes } from "./data-types";

const ROOT_API = process.env.NEXT_PUBLIC_API;

export const setSignUp = async (data: AuthTypes) => {
    const url = `${ROOT_API}/auth/signup`;

    return callAPI({
        url,
        method: "POST",
        data
    });
}

export const setLogin = async (data: AuthTypes) => {
    const url = `${ROOT_API}/auth/signin`;

    return callAPI({
        url,
        method: "POST",
        data
    });
}