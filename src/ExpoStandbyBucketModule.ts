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

export const getStandbyBucket = () => StandbyBucket.getAppStandbyBucket();
export default StandbyBucket;
