const express = require('express');
const router = express.Router();

var multer  = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
      cb(null,file.originalname);
    }
  });
  var upload = multer({ storage: storage })

const {
        getCoursebyId,
        createCourse,
        getCourse,
        getAllCourse,
        removeCourse,
        updateCourse
    } = require("../controller/courseController");

router.param("courseId", getCoursebyId); //param : parameter
//router.post("/course/create/",createProduct);  //http://localhost:4000/api/createcourse
router.post("/createcourse",upload.single('courseImage'),createCourse);
router.get("/coursebyid/:courseId", getCourse)  //http://localhost:4000/api/coursebyid/
router.get("/getallcourses/",getAllCourse); //http://localhost:4000/api/getallcourses
router.delete("/removecoursebyid/:courseId",removeCourse); //http://localhost:4000/api/removecoursebyid/
router.put("/updatecoursebyid/:courseId", updateCourse);  //http://localhost:4000/api/updatecoursebyid/

module.exports = router;
