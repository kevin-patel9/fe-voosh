import { postData } from "../common/Apicall";

export const registerUserApi = async (userId, name, password) => {
    return await postData("/api/v1/user/register", { userId, name, password });
};

export const loginUserApi = async (userId, password) => {
    return await postData("/api/v1/user/login", { userId, password });
};
