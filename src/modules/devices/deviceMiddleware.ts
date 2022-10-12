import { Request, Response } from "express";
import moment = require("moment");
import { DeviceUtils } from "./deviceUtils";

export class DeviceMiddleware {
    private deviceUtils: DeviceUtils = new DeviceUtils();
}