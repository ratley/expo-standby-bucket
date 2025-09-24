import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoStandbyBucketViewProps } from './ExpoStandbyBucket.types';

const NativeView: React.ComponentType<ExpoStandbyBucketViewProps> =
  requireNativeView('ExpoStandbyBucket');

export default function ExpoStandbyBucketView(props: ExpoStandbyBucketViewProps) {
  return <NativeView {...props} />;
}
