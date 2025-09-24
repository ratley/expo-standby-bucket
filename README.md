# expo-standby-bucket

Access your app's current Android App Standby bucket (ACTIVE, WORKING_SET, FREQUENT, RARE, RESTRICTED, etc.) from Expo or React Native so you can tune background work based on how the system ranks your app.

## Installation

1. Install the module:

   ```sh
   npx expo install expo-standby-bucket
   ```

2. Rebuild your native project:
   - **Expo (managed)**: run `npx expo prebuild` and rebuild your Android app (EAS Build or `expo run:android`).
   - **Bare React Native**: rebuild the Android application as you normally would.

3. No manifest changes required. The module works without any special permissions.

## Usage

```ts
import ExpoStandbyBucket from "expo-standby-bucket";

const info = ExpoStandbyBucket.getAppStandbyBucket();

console.log(info.bucket);      // e.g. 10
console.log(info.bucketName);  // "ACTIVE"
console.log(info.supported);   // true when API >= 28 (Android 9) and permission granted
```

`getAppStandbyBucket` runs synchronously and returns the current bucket as an `AppStandbyBucketInfo` object:

- `bucket`: the raw integer from `UsageStatsManager.appStandbyBucket`.
- `bucketName`: one of `EXEMPTED`, `ACTIVE`, `WORKING_SET`, `FREQUENT`, `RARE`, `RESTRICTED`, `NEVER`, `UNKNOWN`, or `UNSUPPORTED`.
- `supported`: `true` only on Android 9+ when the usage access permission is available; otherwise `false` with `bucket = -1` and `bucketName = "UNSUPPORTED"`.

| Raw value | bucketName    | Notes |
|-----------|---------------|-------|
| 5         | EXEMPTED      | Android 11+ |
| 10        | ACTIVE        | |
| 20        | WORKING_SET   | |
| 30        | FREQUENT      | |
| 40        | RARE          | |
| 45        | RESTRICTED    | |
| 50        | NEVER         | Android 11+ |
| other     | UNKNOWN       | |


## Platform notes

- Android 9 (API 28) and higher: returns the real standby bucket.
- Android versions below 9: reports `supported = false` and `bucketName = "UNSUPPORTED"`.
- iOS, web, and other platforms: always return the `UNSUPPORTED` response.

## Example app

A minimal demo lives in `example/`. To try it out:

```sh
cd example
bun install
npx expo run:android
```

The example app will immediately show your app's real standby bucket values.

## Development

Install dependencies with Bun and build the module before sending changes:

```sh
bun install
bun run build
```

Then run the example app
```sh
cd example
bun install
npx expo run:android
```

The package is published under the MIT license.
