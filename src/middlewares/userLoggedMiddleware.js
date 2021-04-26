module.exports = (req, res, next) =>{
    if (req.session.user == null ) {
        res.redirect("/");
    }else{
        res.locals.user =req.session.user
        if (req.session.user.id != req.params.id){ 
            return res.redirect("/profile/" + req.session.user.id)
        }   
            next();
        }    
}