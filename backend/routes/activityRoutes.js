const express = require('express')
const router = express.Router()
          
const { getActivity, setActivity, updateActivity, removeActivity, updateEnrolled } = require('../controllers/activityController.js')

router.route('/').get(getActivity).post(setActivity)
router.route('/:id').put(updateActivity).delete(removeActivity)
router.route('/enroll/:id').put(updateEnrolled)



module.exports = router