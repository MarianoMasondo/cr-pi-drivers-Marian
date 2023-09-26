const postNewDriver = async (req, res) =>{
    const { Name, Lastname, Description, Image, Nacionality, Birthdate, Teams} = req.body;
    if(!Name, !Lastname, !Description, !Image, !Nacionality, !Birthdate, !Teams){
        return res.status(404).send("Data missing to crate driver")
    }
    try{
        const createDriver = await postNewDriver(
            Name,
            Lastname,
            Description,
            Image,
            Nacionality,
            Birthdate,
            Teams,
        );
        res.status(200).json(createDriver)
    } catch(error){
        res.status(404).json({error: error.message})
    }

}
module.exports = postNewDriver;