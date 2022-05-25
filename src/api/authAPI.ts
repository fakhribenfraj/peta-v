export const authenticate = async (
  name?: string,
  email?: string,
  password?: string,
  isLogin = true
) => {
  const url = `http://localhost:8000/api/${isLogin ? "login" : "register"}`;
  try {
    const body = isLogin
      ? {
          email,
          password,
        }
      : {
          name,
          email,
          password,
          password_confirmation: password,
        };
    const data = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
export const logout = async (token: string) => {
  try {
    const data = await fetch(`http://localhost:8000/api/logout`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
