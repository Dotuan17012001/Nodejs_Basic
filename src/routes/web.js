import express from "express"
import homeController from '../controller/homeController'

let router = express.Router();

const initWebRoute = (app) => {

    router.get('/',homeController.getHomePage)

    router.get('/detail/user/:userId', homeController.getDetailPage)
    
    router.post('/create-new-user', homeController.createNewUser)
    
    router.post('/delete-user', homeController.deleteUser)
   
    router.get('/edit-user/:id', homeController.getEditUser)

    router.post('/update-user', homeController.postUpdateUser)

    //* Test router
    router.get('/about',  homeController.getAboutPage)

    router.get('/it', function(req, res){
        res.send("IT Wow???");
    })
    //* Test router

    return app.use('/',router)
}
export default initWebRoute;