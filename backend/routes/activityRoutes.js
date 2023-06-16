const express = require('express')
const router = express.Router()
          
const { getActivity, setActivity, updateActivity, removeActivity } = require('../controllers/activityController.js')

router.route('/').get(getActivity).post(setActivity)
router.route('/:id').put(updateActivity).delete(removeActivity)



module.exports = router