const Router = require ('express').Router;
const UserController = require ('../controllers/user-controller');


const router = new Router();

router.post('./registration', UserController.regisration);
router.post('./login', UserController.login);
router.post('./logout', UserController.logout);
router.post('./activate/:link', UserController.activate);
router.post('./refresh', UserController.refresh);
router.post('./users', UserController.getUsers);

module.exports = router;

