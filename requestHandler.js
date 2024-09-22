import donorSchema from './models/donor.model.js'

export async function Home(req,res){
    try{
        const{...donor}=req.body;
        const {phone}=req.body;
        const check=await donorSchema.findOne({phone});
        if (!check) {
            const data=await donorSchema.create({...donor});
            return res.status(201).send({msg:data})
        }
        return res.status(400).send({msg:"data exist"})
        
    }catch(error){
        res.status(404).send({msg:error})
    }
}
export async function getDonors(req,res) {
    try {
        const donors=await donorSchema.find();
        res.status(200).send(donors)
        
    } catch (error) {
        res.status(404).send({msg:error})
    }
}

export async function getDonor(req,res) {
    try {
        console.log(req.params);
        const {id}=req.params
        const data=await donorSchema.findOne({_id:id});
        console.log(data);
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send(error)
    }
}
export async function editDonor(req,res) {
    try {
        const {_id}=req.params;
    const {...donor}=req.body;
    const data=await donorSchema.updateOne({_id},{$set:{...donor}});
    res.status(201).send(data);
    } catch (error) {
        res.status(404).send(error)
    }
    
}
export async function deleteDonor(req,res) {
    try {
        const {_id}=req.params;
        console.log(_id);
        const data=await donorSchema.deleteOne({_id});
        res.status(201).send(data);
    } catch (error) {
        res.status(404).send(error)
    }   
}