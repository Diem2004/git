import  express  from "express";
import homeController from '../Controller/homeController';

let router = express.Router();

const initWedRoute = (app) => {
    // app.METHOD(PATH, HANDLER)
    router.get('/', homeController.getHomepage);
    router.get('/detail/user/:userId', homeController.getDetailPage)
    router.get('/about',(req, res) => {
        res.send(`I'm Diem`);
    })    


    return app.use('/', router)
}
export default initWedRoute;
//module.export = initWedRoute;