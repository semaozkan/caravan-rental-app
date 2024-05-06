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
