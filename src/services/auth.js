import {apiClient} from  "./config"



export const apiSignup = async (payload) => {
    return await apiClient.post("/agents/register",payload)
}

export const apiLogin = async (payload) => {
    return apiClient.post("/agents/login",payload)
}