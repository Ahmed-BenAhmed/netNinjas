const createOne =  (model) => async (req, res) => {
    try {
        const newModel = await model.create(req.body);
        await newModel.save();
        console.log('model created');
        return res.status(201).json({newModel});
       
    }
    catch (err) {
        console.log(err);
        return res.status(404).json({err});
    }
}

const getMany = (model) => async (req, res) => {
    try {
        const newModel = await model.find(req.body);
        console.log(newModel);
        return res.status(201).json({newModel});
       
    }
    catch (err) {
        console.log(err);
        return res.status(404).json({err});
    }
} 


const getOne = (model) => async (req, res) => {
    try {
        const newModel = await model.findById(req.body.id);
        console.log(newModel);
        return res.status(201).json({newModel});
       
    }
    catch (err) {
        console.log(err);
        return res.status(404).json({err});
    }
} 

const updateOne = (model) => async (req, res) => {
    try {
        const newModel =await model.findByIdAndUpdate(req.body.id,req.body )
        await newModel.save();
        console.log('model updated');
        return res.status(201).json({newModel});
       
    }
    catch (err) {
        console.log(err);
        return res.status(404).json({err});
    }
}


const crudController = (model) => {
    return {
    createOne: createOne(model),
    getMany: getMany(model),
    getOne: getOne(model),
    updateOne: updateOne(model)
} }
module.exports = crudController