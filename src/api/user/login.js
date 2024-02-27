export const login = async (requestBody
    
    ) => {
      const response = await fetch(`${process.env.VUE_APP_API_URL_USER}/login`,
        {method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: requestBody,})
          if (!response.ok) {
              throw new Error('Failed to login');
            }
      return await response.json()
    }