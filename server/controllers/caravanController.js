const Caravan = require('../models/caravanModel');

//Add a caravan in the DB
exports.add = async (req, res) => {
  try {
    const newCaravan = new Caravan({
      photos: req.body.photos,
      title: req.body.title,
      location: req.body.location,
      type: req.body.type,
      fuel: req.body.fuel,
      gear: req.body.gear,
      maxGuests: req.body.maxGuests,
      dailyPrice: req.body.dailyPrice,
      owner: req.body.owner,
      description: req.body.description,
      notAvailableDates: req.body.notAvailableDates,
    });

    const caravan = await newCaravan.save();
    res.status(200).json(caravan);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Update a caravan
exports.updateCaravan = async (req, res) => {
  try {
    const updatedCaravan = await Caravan.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedCaravan);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Delete a caravan
exports.deleteCaravan = async (req, res) => {
  try {
    const caravan = await Caravan.findById(req.params.id);
    try {
      await Caravan.findByIdAndDelete(req.params.id);
      res.status(200).json('Caravan has been deleted.');
    } catch (error) {
      res.status(500).json(error);
    }
  } catch (error) {
    res.status(404).json('User not found');
  }
};

//Get a single caravan
exports.getSingleCaravan = async (req, res) => {
  try {
    const caravan = await Caravan.findById(req.params.id);

    res.status(200).json(caravan);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Get all caravans
exports.getAllCaravans = async (req, res) => {
  try {
    const caravans = await Caravan.find();

    res.status(200).json(caravans);
  } catch (error) {
    res.status(500).json(error);
  }
};
