package expo.modules.standbybucket

import android.app.usage.UsageStatsManager
import android.content.Context
import android.os.Build
import expo.modules.kotlin.exception.CodedException
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoStandbyBucketModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("StandbyBucket")

    Function("getAppStandbyBucket") {
      if (Build.VERSION.SDK_INT < Build.VERSION_CODES.P) {
        return@Function mapOf(
          "bucket" to UNSUPPORTED_BUCKET_VALUE,
          "bucketName" to "UNSUPPORTED",
          "supported" to false
        )
      }

      val reactContext = appContext.reactContext
        ?: throw StandbyBucketException("React context is unavailable.")

      val usageStatsManager = reactContext.getSystemService(Context.USAGE_STATS_SERVICE) as? UsageStatsManager
        ?: throw StandbyBucketException("UsageStatsManager is not available on this device.")

      val bucket = usageStatsManager.appStandbyBucket

      mapOf(
        "bucket" to bucket,
        "bucketName" to bucketName(bucket),
        "supported" to true
      )
    }
  }

  private fun bucketName(bucket: Int): String = when (bucket) {
    5 -> "EXEMPTED"  // STANDBY_BUCKET_EXEMPTED (API 30+)
    10 -> "ACTIVE"    // STANDBY_BUCKET_ACTIVE
    20 -> "WORKING_SET" // STANDBY_BUCKET_WORKING_SET
    30 -> "FREQUENT"  // STANDBY_BUCKET_FREQUENT
    40 -> "RARE"      // STANDBY_BUCKET_RARE
    45 -> "RESTRICTED" // STANDBY_BUCKET_RESTRICTED
    50 -> "NEVER"     // STANDBY_BUCKET_NEVER (API 30+)
    else -> "UNKNOWN"
  }

  private class StandbyBucketException(message: String, cause: Throwable? = null) :
    CodedException(message, cause)

  private companion object {
    const val UNSUPPORTED_BUCKET_VALUE = -1
  }
}
