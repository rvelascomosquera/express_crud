import {Person} from '../models/person.js'

export const getAllPersons = async(req, res)=> {
  try {
    const persons = await Person.findAll()
    res.json(persons)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export const createPerson = async (req, res)=> {
 try {
  const { document, name, surname, age, email, num1_cell, 
    num2_cell, occupation, leaderId, genderId } = req.body
  const newPerson = await Person.create({
    document, name, surname, age, email, num1_cell, num2_cell, 
    occupation, leaderId, genderId 
  })
  res.json(newPerson)
 } catch (error) {
  res.status(500).json({
    message: error.message,
  });
 }
}

export const updatePerson = async(req, res) => {
  try {
    console.log(req.params)
    const {document,} = req.body
    const person = await Person.findOne({
      where: {
        document,
      },});
     person.set(req.body)
     await person.save();
     res.json(person)
    
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  } 

  export const getPerson = async (req, res) => {
    try {
      const {document} = req.body
      const person = await Person.findOne({
        where: { document, },
      attributes: ['document', 'name', 'surname', 'age', 'email', 'num1_cell', 
          'num2_cell', 'occupation', 'leaderId', 'genderId']
      });
      res.json(person)
      
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  export const deletePerson = async (req, res) => {
    try {
      const {document} = req.body
      const result = await Person.destroy({
        where: {document,}
      })
      res.json(result)
      
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }