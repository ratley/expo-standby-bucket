import * as React from 'react';

import { ExpoStandbyBucketViewProps } from './ExpoStandbyBucket.types';

export default function ExpoStandbyBucketView(props: ExpoStandbyBucketViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
