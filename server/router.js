const express = require("express")
const router = express.Router()
const InfoRouter = require("./infoSchema")

router.post("/", async(req,res) => {
    
    const data = new InfoRouter({
        Name:req.body.Name,
        Age:req.body.Age,
        City:req.body.City
    });

    await data.save()
    res.json(data)
})

router.get("/",async (req,res) => {
    const findData = await InfoRouter.find()
    res.json(findData)
})

router.delete("/del/:id",async(req, res) => {
    const delData = await InfoRouter.findByIdAndRemove(req.params.id).then(e => {
    res.json({message:"Deleted Successfully"})
    })
    })

router.put("/update",async(req,res) => {
    const update = await InfoRouter.update({_id:req.body._id},{$set:{
    Name:req.body.Name,
    Age:req.body.Age,
    City:req.body.City
    }});
    
    res.json(update);
})

router.get("/", (req,res) => {
    res.json("I am from Router File")
})

module.exports = router;