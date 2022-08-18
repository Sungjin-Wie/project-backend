import { createRouter } from "../../src/utils/routeUtils";
import UserController from "./UserController";

const UserRouter = createRouter(UserController);

export default UserRouter;
