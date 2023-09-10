import {
  addItem,
  listItems,
  getItem,
  editItem,
  deleteItem,
} from "../models/pets.model";
/**
 * callback function to call our(models function => that return resources from the database,
 */

export const addPet = (req, res) => {
  try {
    const resp = addItem(req.body);
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const listPets = (req, res) => {
  try {
    const resp = listItems();
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getPet = (req, res) => {
  try {
    const resp = getItem(parseInt(req.params.id));
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const editPet = (req, res) => {
  try {
  } catch (error) {}
};

export const deletePet = (req, res) => {
  try {
  } catch (error) {}
};
