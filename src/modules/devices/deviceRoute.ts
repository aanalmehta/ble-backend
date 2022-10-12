// Import only what we need from express
import { Router } from "express";
import { DeviceController } from "./deviceController";
import { DeviceMiddleware } from "./deviceMiddleware";

// Assign router to the express.Router() instance
const router: Router = Router();
const deviceController: DeviceController = new DeviceController();
const deviceMiddleware: DeviceMiddleware = new DeviceMiddleware();

router.post("/",
    deviceController.addDevice
);

// Export the express.Router() instance to be used by server.ts
export const DeviceRoute: Router = router;
