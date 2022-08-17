import { createRouter } from "../../utils/routeUtils";
import UserController from "./UserController";

const UserRouter = createRouter(UserController);

export default UserRouter;
