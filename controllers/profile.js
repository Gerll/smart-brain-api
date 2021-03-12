const handleProfile = (req,res)=>{
    const { id } = req.params;
    let found = false;
    db.select('*').from('users').where({id})
    .then (user => {
        if (user.length){
            res.json(user[0])
        } else{
            res.status(400).json('Not found')
        }
    })
    .catch(err => res.status(400).json('Error getting user'))
    /*
    if (!found){
        res.status(400).json('not found');
    }
    */
}

module.exports = {
    handleProfile: handleProfile
}