import { NativeModule, registerWebModule } from "expo";

import type {
	AppStandbyBucketInfo,
	ExpoStandbyBucketModuleInterface,
} from "./ExpoStandbyBucket.types";

class StandbyBucketModule
	extends NativeModule
	implements ExpoStandbyBucketModuleInterface
{
	getAppStandbyBucket(): AppStandbyBucketInfo {
		return {
			bucket: -1,
			bucketName: "UNSUPPORTED",
			supported: false,
		};
	}
}

export default registerWebModule(StandbyBucketModule, "StandbyBucket");
