import { NativeModule, requireNativeModule } from "expo";

import type {
	AppStandbyBucketInfo,
	ExpoStandbyBucketModuleInterface,
} from "./ExpoStandbyBucket.types";

declare class StandbyBucketModule
	extends NativeModule
	implements ExpoStandbyBucketModuleInterface
{
	getAppStandbyBucket(): AppStandbyBucketInfo;
}

const StandbyBucket = requireNativeModule<StandbyBucketModule>("StandbyBucket");

// Export a simple function for easier usage
export const getStandbyBucket = () => StandbyBucket.getAppStandbyBucket();

// Legacy export for backward compatibility
export default StandbyBucket;
