import bcryptjs = require("bcryptjs");
import { Request, Response } from "express";
import _ = require("lodash");
import { Constants } from "../../config/constants";
import { ResponseBuilder } from "../../helpers/responseBuilder";
import { DeviceUtils } from "./deviceUtils";

export class DeviceController {
  private deviceUtils: DeviceUtils = new DeviceUtils();

  public addDevice = async (req: Request, res: Response) => {

    const { uid } = req.body;
    const { display_name } = req.body;
    const { rssi } = req.body;
    const { event_type } = req.body;
    const { primary_phy } = req.body;
    const { secondary_phy } = req.body;
    const { advertising_sid } = req.body;
    const { tx_power } = req.body;
    const { periodic_advertising_interval } = req.body;
    const { data_status } = req.body;
    const { tx_power_level } = req.body;
    const { is_connectable } = req.body;
    const { is_legacy } = req.body;
    const { device_name } = req.body;
    const { advertisement_bytes } = req.body;
    const { manufacturer_bytes } = req.body;
    const { service_uuids } = req.body;
    const deviceDeails = { uid, display_name, rssi, event_type, primary_phy, secondary_phy, 
      advertising_sid, tx_power, periodic_advertising_interval, data_status, tx_power_level, 
      is_connectable, is_legacy, device_name, advertisement_bytes, manufacturer_bytes, service_uuids}
    await this.deviceUtils.addDevice(deviceDeails);
    const rb = ResponseBuilder.data({ uid }, req.t("SUCCESS_ADDED", { name: "Device" }));
    res.status(Constants.SUCCESS_CODE).json({ msg: rb.msg, ...rb.result });
  }

}
