export const nama=(req,res)=> {
    const username = req.params.username;
    res.render('profile.nama',{
        title : username,
})
}