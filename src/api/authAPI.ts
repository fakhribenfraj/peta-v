export const authenticate = async (email?: string, password?: string, isLogin = true) => {
  const url = isLogin ? `https://localhost:4001/login` : `https://localhost:4001/register`
  try {
    const data = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return data
  } catch (error) {
    console.log(error)
  }
}

// export const login = async (email: string, password: string) => {
//   try {
//     const {
//       data: { data },
//     } = await axios.get(
//       `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_KEY}`,
//       {
//         params: {
//           email,
//           password,
//           returnSecureToken: true,
//         },
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const signup = async (email: string, password: string) => {
//   try {
//     const { data } = await axios.get(
//       `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_KEY}`,
//       {
//         params: { email, password, returnSecureToken: true },
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
