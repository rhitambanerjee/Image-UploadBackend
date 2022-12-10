const Image = require("../models/imageModel");
const id=req.params.id;

app.get("/allimages/:id", (req, res) => {
   Image.find({_id:id},function(err, data) {
     if (err) {
       res.json(err.message);
     } else {
       res.json(data);
     }
   });
   Image.findByIdAndUpdate({_id:id},{$inc:{counter:1}},{new:true},(err,data)=>{
    if(err){
      res.json(err.message);
    }
    else{
      console.log(data);
    }
   })
});
