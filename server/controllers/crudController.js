const createOne =  (model) => async (req, res) => {
    try {
        const newModel = await model.create(req.body);
        await newModel.save();
        console.log('model created');
        return res.status(201).json(newModel);
       
    }
    catch (err) {
        console.log(err);
        return res.status(404).json({err});
    }
}

const getMany = (model,populate) => async (req, res) => {
    try {
        const newModel = await model.find(req.body ? req.body : {}).populate(populate);
        console.log(newModel);
        return res.status(201).json(newModel);
       
    }
    catch (err) {
        console.log(err);
        return res.status(404).json({err});
    }
} 


const getOne = (model,populate) => async (req, res) => {
    try {
        const newModel = await model.findById(req.body.id).populate(populate);
        console.log(newModel);
        return res.status(201).json(newModel);
       
    }
    catch (err) {
        console.log(err);
        return res.status(404).json({err});
    }
} 

const updateOne = (model,populate) => async (req, res) => {
    try {
        const newModel =await model.findByIdAndUpdate(req.body.id,req.body).populate(populate)
        await newModel.save();
        console.log('model updated');
        return res.status(201).json(newModel);
       
    }
    catch (err) {
        console.log(err);
        return res.status(404).json({err});
    }
}


const crudController = (model,populate={}) => {
    return {
    createOne: createOne(model),
    getMany: getMany(model,populate),
    getOne: getOne(model,populate),
    updateOne: updateOne(model,populate)
} }
module.exports = crudController