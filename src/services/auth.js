import {apiClient} from  "./config"



export const apiSignup = async (payload) => {
    return await apiClient.post("/agents/register",payload)
}

// export const apiLogin = async (payload) => {
//     return apiClient.post("/agents/login",payload)
// }


export const apiLogin = async (payload) => {
    try {
      const response = await apiClient.post("/agents/login", payload);
      
      if (response.status === 200) {
        const { userId, accessToken, refreshToken } = response.data;
        
        // Store both access and refresh tokens
        localStorage.setItem("userID", userId); // Store user ID if needed
        localStorage.setItem("token", accessToken); // Store access token
        localStorage.setItem("refreshToken", refreshToken); // Store refresh token
        
        console.log("Login successful. Tokens stored:", { userId, accessToken, refreshToken });
        
        return response;
      }
    } catch (error) {
      console.error("Login failed:", error);
      throw error; // Propagate the error for further handling in the UI
    }
  };