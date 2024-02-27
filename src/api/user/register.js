export const register = async (formData
    
    ) => {
      const response = await fetch(`${process.env.VUE_APP_API_URL_USER}/register`,
        {method: "POST",
      
      body: formData,})
          if (!response.ok) {
              throw new Error('Failed to register');
            }
      return await response.json()
    }