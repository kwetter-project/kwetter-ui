export const logout = async (
    
    ) => {
      const response = await fetch(`${process.env.VUE_APP_API_URL_USER}/logout`,
        {method: "POST",})
          if (!response.ok) {
              throw new Error('Failed to logout');
            }
      return await response.json()
    }