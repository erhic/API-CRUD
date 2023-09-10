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
  } catch (error) {}
};
export const getItem = (id) => {
  try {
  } catch (error) {}
};
export const deleteItem = (id) => {
  try {
  } catch (error) {}
};
export const editItem = (data) => {
  try {
  } catch (error) {}
};
