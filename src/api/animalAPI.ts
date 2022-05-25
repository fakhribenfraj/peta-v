const url = `http://localhost:8000/api`;

export const addNewPet = async (
  token: string,
  name: string,
  about: string,
  specs?: any,
  images?: string[]
) => {
  try {
    const body = {
      name,
      desc: about,
      images,
      size: specs.size,
      // age: specs.age,
      // gender: specs.gender === "male" ? 0 : 1,
      // category: specs.species,
      // status: 0,
    };
    const data = await fetch(`${url}/pets`, {
      method: "POST",
      body: JSON.stringify(body),
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
export const getAllPets = async () => {
  try {
    const data = await fetch(`${url}/pets`, {
      method: "GET",
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
export const getMyPets = async (token: string) => {
  try {
    const data = await fetch(`${url}/user/pets`, {
      method: "GET",
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
export const getPetById = async (id: number) => {
  try {
    const data = await fetch(`${url}/pets/${id}`, {
      method: "GET",
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
const getPetImages = async (id: number) => {
  try {
    const data = await fetch(`${url}/pets/${id}/images`, {
      method: "GET",
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
const getAllImages = async (ids: number[]) => {
  try {
    const data = []
    for (let id of ids) {
      const images = await getPetImages(id);
      data.push(images)
    }

    return data;
  } catch (error) {
    console.log(error);
  }
};
