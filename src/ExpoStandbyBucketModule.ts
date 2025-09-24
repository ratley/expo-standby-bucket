import { NativeModule, requireNativeModule } from "expo";

import type {
	AppStandbyBucketInfo,
	ExpoStandbyBucketModuleInterface,
} from "./ExpoStandbyBucket.types";

declare class ExpoStandbyBucketModule
	extends NativeModule
	implements ExpoStandbyBucketModuleInterface
{
	getAppStandbyBucket(): AppStandbyBucketInfo;
}

export default requireNativeModule<ExpoStandbyBucketModule>(
	"ExpoStandbyBucket",
);
