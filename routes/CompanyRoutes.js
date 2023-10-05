const express = require('express');
const router = express.Router();
const { registerCompany, loginCompany ,modifyCompanyName, modifyCompanyEmail, modifyCompanyPassword, getCompanyById, companyDeletionRequest  } = require('../Controllers/Compagnie')



router.post('/register1', registerCompany);
router.post('/login1', loginCompany);
router.put('/companies/:id/updateCompany', modifyCompanyName);
router.put('/companies/:id/updateCompanyEmail', modifyCompanyEmail);
router.put('/companies/:id/updateCompanyPwd', modifyCompanyPassword);
router.post('/companies/RequestCompany', companyDeletionRequest);
router.get('/companies/:id',getCompanyById)

module.exports = router;