const createOne = async (model, req, res) => {
    try {
        const model = model.create(req.body);
        await model.save();
        console.log('model created');
        return res.status(201).json({model});
       
    }
    catch (err) {
        console.log(err);
        return res.status(404).json({err});
    }
}

const getMany = async (model, req, res) => {
    try {
        const model = await model.find(req.body);
        console.log(model);
        return res.status(201).json({model});
       
    }
    catch (err) {
        console.log(err);
        return res.status(404).json({err});
    }
} 


const getOne = async (model, req, res) => {
    try {
        const model = await model.findById(req.body.id);
        console.log(model);
        return res.status(201).json({model});
       
    }
    catch (err) {
        console.log(err);
        return res.status(404).json({err});
    }
} 

const updateOne = async (model, req, res) => {
    try {
        const model = model.findByIdAndUpdate(req.body.id,req.body )
        await model.save();
        console.log('model updated');
        return res.status(201).json({model});
       
    }
    catch (err) {
        console.log(err);
        return res.status(404).json({err});
    }
}


const crudController = (model) => {
    createOne: createOne(model)
    getMany: getMany(model)
    getOne: getOne(model)
    updateOne: updateOne(model)
}
module.exports = crudController