


var logout = async (req, res, next) => {

    try {
        
        res.cookie("token", null,{expire:0});

    } catch {
        (e) => {
            console.log("their is an error" + e)
        }
    }
}

module.exports = {
    logout: logout
}