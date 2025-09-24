import ExpoModulesCore

public class ExpoStandbyBucketModule: Module {
  public func definition() -> ModuleDefinition {
    Name("StandbyBucket")

    Function("getAppStandbyBucket") {
      return [
        "bucket": -1,
        "bucketName": "UNSUPPORTED",
        "supported": false
      ] as [String: Any]
    }
  }
}
