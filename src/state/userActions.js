import { setUserCredentials, logOutUser } from "./userSlice";
import axios from "axios";

export const loginUser = (credentials) => async (dispatch) => {
  try {
    const url = `localhost:3000/api/auth/login`;
    const response = await axios.post(url, credentials);

    const { token } = response.data;

    localStorage.setItem("token", token);
   

    dispatch(setUserCredentials(response.data));

  } catch (error) {
    console.error("Error en el inicio de sesión:", error);
    dispatch(logOutUser());
  }
};

export const setAuthenticatedUser = (user) => (dispatch) => {
  dispatch(setUserCredentials(user));
};

export const getUser = () => async (dispatch) => {
    try {
      const token = localStorage.getItem("token");

  
      if (!token) {
        console.log("No se encontró un token de autenticación.");
        return;
      }
  
      const config = {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      };

      const response = await axios.get(`localhost:3000/api/auth/me`, config);
      const {data}= response;

      const user={payload:data, token}

      dispatch(setAuthenticatedUser(user));

    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.log("La sesión ha expirado. Cerrar la sesión localmente.");
        dispatch(logOutUser());
      } else {
        console.error("Error al obtener los datos del usuario:", error);
      }
    }
  };