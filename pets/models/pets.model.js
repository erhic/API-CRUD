import db from "../../db/db.js";

export const addItem = (data) => {
  try {
    const petItem = { id: db.pets.length + 1, ...data };
  } catch (err) {
    console.log("Error", err);
  }
};
export const listItems = () => {
  try {
    return db?.pets;
  } catch (error) {
    console.log("Error", error);
  }
};
export const getItem = (id) => {
  try {
    const pet = db?.pets?.filter((petItem) => petItem?.id === id)[0];
    return pet;
  } catch (error) {
    console.log("Error found", error);
  }
};
export const deleteItem = (id) => {
  try {
    const deletePet = db?.pets?.filter((petDelItem) => {
      petDelItem?.id === id;
    })[0];
    if (deletePet === -1) throw new Error("Pet not found");
    else {
      db.pets.slice(deletePet, 1);
      return db.pets;
    }
  } catch (error) {}
};
export const editItem = (data) => {
  try {
  } catch (error) {}
};
