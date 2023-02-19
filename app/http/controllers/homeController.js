function homeController() {
    return {
        index : function () {
            res.render('home')
        }
    }
}


module.exports = homeController