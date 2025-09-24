import ExpoModulesCore

public class ExpoStandbyBucketModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoStandbyBucket")

    Function("getAppStandbyBucket") {
      return [
        "bucket": -1,
        "bucketName": "UNSUPPORTED",
        "supported": false
      ] as [String: Any]
    }
  }
}
