import {Leader} from '../models/leader.js'

export const getAllLeader = async(req, res) => {
  try {
    const leaders = await Leader.findAll()
    res.json(leaders)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export const getLeader = async (req, res) => {
  try {
    const { id } = req.params;
    const leader = await Leader.findOne({
      where: {
        id,
      },
    });
    res.json(leader);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export const createLeader = async (req, res) => {
  try {
    const {name, surname, age, email, num1_cell, num2_cell, occupation, description } = req.body;
    const newLeader = await Leader.create({
    name, surname, age, email, num1_cell, num2_cell, occupation, description
  })

  res.json(newLeader);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export const updateLeader = async (req, res) => {
try {
  const { id } = req.params;
  const {name, surname, age, email, num1_cell, num2_cell, occupation, description } = req.body;
  const leader = await Leader.findByPk(id);
   leader.name = name;
   leader.surname = surname;
   leader.age = age;
   leader.email = email;
   leader.num1_cell = num1_cell;
   leader.num2_cell = num2_cell;
   leader.occupation = occupation;
   leader.description = description;
   await leader.save()
   res.json(leader)
} catch (error) {
    res.status(500).json({
      message: error.message,
    });
}
}

export const deleteLeader = async (req, res) => {
 try {
  const {id} = req.params;
  await Leader.destroy({
    where: { id, },
  });
  res.sendStatus(204);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}