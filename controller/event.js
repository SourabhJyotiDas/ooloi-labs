const Event = require("../models/Event");
const cloudinary = require("cloudinary");


exports.createEvent = async (req, res) => {
   try {

      const myCloud = await cloudinary.v2.uploader.upload(req.body.speackeravatar, {
         folder: "avatars",
      });
      const myCloud2 = await cloudinary.v2.uploader.upload(req.body.moderatorAvatar, {
         folder: "avatars",
      });
      // console.log(req.body.speackeravatar);
      let speakersArrays = [];
      let moderatorArrays = [];
      let organisedByArrays = [];
      let tagsArrays = [];
      let referLinkArrays = [];


      speakersArrays.push({
         name: req.body.speakers,
         information: req.body.speakerInfomation,
         avatar: { public_id: myCloud.public_id, url: myCloud.secure_url },
      });


      moderatorArrays.push({
         name: req.body.moderator,
         information: req.body.moderatorInformation,
         avatar: { public_id: myCloud2.public_id, url: myCloud2.secure_url },
      });

      organisedByArrays.push(
         req.body.organisedBy,
      );

      tagsArrays.push(
         req.body.tags,
      );

      referLinkArrays.push(
         req.body.referLink,
      );

      req.body.speakers = speakersArrays
      req.body.moderator = moderatorArrays
      req.body.organisedBy = organisedByArrays
      req.body.tags = tagsArrays
      req.body.referLink = referLinkArrays

      let event = await Event.create(req.body);

      res.status(200).json({
         success: true,
         event
      })

   } catch (error) {
      res.status(500).json({
         success: false,
         message: error.message
      })
   }
}


exports.getAllEvents = async (req, res) => {
   try {

      let events = await Event.find()

      res.status(200).json({
         success: true,
         events
      })

   } catch (error) {
      res.status(500).json({
         success: false,
         message: error.message
      })
   }
};

exports.eventDetails = async (req, res) => {
   try {

      let event = await Event.findById(req.params.id)

      if(!event){
        return res.status(500).json({
         success:false,
         message:"Not Found"
        })
      }
      res.status(200).json({
         success: true,
         event
      })

   } catch (error) {
      res.status(500).json({
         success: false,
         message: error.message
      })
   }
}

exports.updateEvent = async (req, res) => {
   try {

      let event = req.params.id;
      if (!event) {
         res.status(500).json({
            success: false,
            message: "Event not found"
         })
      }

      event = req.body;
      await event.save();
      res.status(200).json({
         success: true,
         events
      })

   } catch (error) {
      res.status(500).json({
         success: false,
         message: error.message
      })
   }
}



exports.deleteEvent = async (req, res) => {
   try {
      let event = req.params.id;

      if (!event) {
         res.status(500).json({
            success: false,
            message: "Event not found"
         })
      }

      await Event.findByIdAndDelete(req.params.id)

      res.status(200).json({
         success: true,
         message: "Deleted Successfully"
      })

   } catch (error) {
      res.status(500).json({
         success: false,
         message: error.message
      })
   }
}
