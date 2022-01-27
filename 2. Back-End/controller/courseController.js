const Course = require("../model/courseModel");
// const formidable = require("formidable");
// const _ = require("lodash");
// const fs = require("fs");
   
  // to create course
  exports.createCourse = (req, res) => 
  {
    const course = new Course(req.body);
    course.image = req.file.path; 
 
  course.save((error, course) => 
  {
    if (error) 
    {
      if(error.code === 11000 || error.code === 11001)
      {
        return res.status(400).json({
          error: "Duplicate Value " +req.body.name +", Course Name Must Be Unique",
         
        });
      }
      else
      {
        return res.status(400).json({
          error: "Not Able To Save Course",
          message : error
         
        });
      }
      }
    res.json({course});
  });
};
  

  // to read all course
  exports.getAllCourse = (req, res) => 
  {
    
    Course.find().exec((error, courseData) => 
    {
      if (error) {
        return res.status(400).json({
          error: "No Courses Found"
        });
      }

      res.json(courseData);
    });
  };

    //to read course
    exports.getCoursebyId = (req, res, next, id) => 
     {
        Course.findById(id) 
        .exec((error, courseData) => 
            {
                if (error) {
                return res.status(400).json({
                error: "Course Not Found"
            });
      }

      req.course =courseData;  //global variable 
      next();
    
    });
  };

  //to read course byId
  exports.getCourse = (req, res) => 
{
    return res.json(req.course);
};

//to remove course bycourseId
  exports.removeCourse = (req, res) =>
   {
    const course = req.course;
  
    course.remove((error, course) => {
      if (error) {
        return res.status(400).json({
          error: "Failed To Delete This Course"
        });
      }
      res.json({
        message: "Successfully Deleted"
      
      });
    });
  };

  //to update course
 exports.updateCourse = (req, res) => 
 {
  const course = req.course;
  course.name = req.body.name;
  course.image = req.body.image;
  course.description = req.body.description;
  course.coursecontent = req.body.coursecontent;
  course.duration = req.body.duration;
  course.category = req.body.category;
  course.certificate = req.body.certificate;
  course.rating = req.body.rating;
  course.numReviews = req.body.numReviews;
  course.price = req.body.price;
 
       course.save((error, updatedCourse) => {
         if(error) {
           return res.status(400).json({
             error: "Failed To Update Course"
           });
         }
         res.json(updatedCourse);
       });
    };