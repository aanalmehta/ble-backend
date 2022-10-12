import * as My from "jm-ez-mysql";
import * as _ from "lodash";
import { Tables } from "../../config/tables";

export class DeviceUtils {
    public async addDevice(device: Json) {
        return My.insert(Tables.DEVICE, device)
    }
}
