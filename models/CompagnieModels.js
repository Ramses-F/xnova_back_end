const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const CompanySchema = new mongoose.Schema({
  compagnie: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  destinationTravel: {
    type: String,
    required: true,
  },
  tarifTravel: {
    type: String,
    required: true,
  },
  gareTravel: {
    type: String,
    required: true,
  },
  destinationColis: {
    type: String,
    required: true,
  },
  TarifColis: {
    type: String,
    required: true,
  },
  gareColis: {
    type: String,
    required: true,
  },
  depart: {
    type: String, 
    required: true,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
  logo: {
    data: Buffer, // Store the binary photo data
    contentType: String, // Store the content type of the photo (e.g., image/jpeg, image/png)
  },
});

CompanySchema.plugin(uniqueValidator);

module.exports = mongoose.model('Company', CompanySchema);
