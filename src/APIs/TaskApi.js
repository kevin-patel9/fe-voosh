import { postData, getData, deleteData } from "../common/Apicall";

export const createTaskApi = async (title, description) => {
    const token = localStorage.getItem("token");
    return await postData("/api/v1/task/createTask", {title, description, token});
};

export const updateTaskApi = async (taskId, title, description) => {
    return await postData("/api/v1/task/updateTask", {taskId, title, description});
};

export const updateTaskTypeApi = async (taskId, taskType) => {
    return await postData("/api/v1/task/changeTaskType", {taskId, taskType});
};

export const getAllTaskApi = async (sorted) => {
    const token = localStorage.getItem("token");
    return await getData(`/api/v1/task/getAllTask/${sorted}/${token}`);
};

export const deleteTaskApi = async (taskId) => {
    return await deleteData("/api/v1/task/deleteTask", { taskId });
};
