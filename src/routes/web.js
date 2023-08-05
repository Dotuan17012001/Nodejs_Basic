import express from "express"
import homeController from '../controller/homeController'

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/',homeController.getHomePage)

    router.get('/about',homeController.getAboutPage)

    router.get('/it', function(req, res){
        res.send("IT Wow???");
    })
    

    return app.use('/',router)
}

export default initWebRoute;