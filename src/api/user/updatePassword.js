export const updatePassword = async (formData
    
    ) => {
      const response = await fetch(`${process.env.VUE_APP_API_URL_USER}/update`,
        {method: "POST",
      
      body: formData,})
          if (!response.ok) {
              throw new Error('Failed to update password');
            }
      return await response.json()
    }