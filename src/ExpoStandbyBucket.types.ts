import type { StyleProp, ViewStyle } from "react-native";

export type AppStandbyBucket =
	| "EXEMPTED"
	| "ACTIVE"
	| "WORKING_SET"
	| "FREQUENT"
	| "RARE"
	| "RESTRICTED"
	| "NEVER"
	| "UNKNOWN"
	| "UNSUPPORTED";

export type AppStandbyBucketInfo = {
	bucket: number;
	bucketName: AppStandbyBucket;
	supported: boolean;
};

export type ExpoStandbyBucketModuleInterface = {
	getAppStandbyBucket(): AppStandbyBucketInfo;
};

export type OnLoadEventPayload = {
	url: string;
};

export type ExpoStandbyBucketViewProps = {
	url: string;
	onLoad: (event: { nativeEvent: OnLoadEventPayload }) => void;
	style?: StyleProp<ViewStyle>;
};
