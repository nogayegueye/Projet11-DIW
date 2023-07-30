import axios from "axios";

export const login = async (username, password) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      {
        email: username,
        password,
      }
    );

    if (response.status === 200) {
      const token = response.data.body.token;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const profileResponse = await axios.post(
        "http://localhost:3001/api/v1/user/profile",
        {},
        config
      );
      return {
        token: token,
        user: profileResponse.data.body,
      };
    }
    return null;
  } catch (error) {
    console.error("Erreur lors de la connexion : ", error);
  }
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};

export const updateUserName = async (userId, newUserName, token) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.put(
      "http://localhost:3001/api/v1/user/profile",
      {
        userName: newUserName,
      },
      config
    );

    if (response.status === 200) {
      return newUserName; 
    }

    return null;
  } catch (error) {
    console.error(
      "Erreur lors de la mise à jour du nom d'utilisateur : ",
      error
    );
    return null;
  }
};
