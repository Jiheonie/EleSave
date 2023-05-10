import axios from "axios";

const API_KEY = "AIzaSyBRI3T5_3Ib4IyVer0dBWI420Fmag1Jl4E";

const createUser = async (email, password) => {
  await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
};

export { createUser };
