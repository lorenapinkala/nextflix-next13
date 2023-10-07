import { setUserCredentials, logOutUser } from "./userSlice";

export const loginUser = (credentials) => async (dispatch) => {
  try {
    const url = "/api/auth/login";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (response.ok) {
      const data = await response.json();

      const { token } = data;
      localStorage.setItem("token", token);

      dispatch(setUserCredentials(data));
    } else {
      console.error("Login error: ", response.statusText);
      dispatch(logOutUser());
    }
  } catch (error) {
    console.error("Login error: ", error);
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
      console.log("No authentication token found.");
      return;
    }

    const url = "/api/auth/me";

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    if (response.ok) {
      const userData = await response.json();

      const user = {
        _id: userData.user._id,
        username: userData.user.username,
        email: userData.user.email,
        token: token,
      };

      dispatch(setAuthenticatedUser(user));
    } else if (response.status === 401) {
      console.log("The session has expired. Log out locally.");
      dispatch(logOutUser());
    } else {
      console.error("Error fetching user data:", response.statusText);
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.log("The session has expired. Log out locally.");
      dispatch(logOutUser());
    } else {
      console.error("Error fetching user data:", error);
    }
  }
};
