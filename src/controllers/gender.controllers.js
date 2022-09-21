import {Gender} from '../models/gender.js'

export const getAllGender = async (req, res) =>  {

  try {
    const genders = await Gender.findAll();
    res.json(genders)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export const createGender = async (req, res) => {
  try {
    const { description } = req.body;
    const newGender = await Gender.create({ description })
    res.json(newGender);
    
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export const deleteGender = async (req, res) => {
  try {
    const {id} = req.params;
    const gender = Gender.destroy({
      where: {id,}
    })
    res.sendStatus(204);
    
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }

}

