import Foundation
import UIKit
import Firebase

@objc(AppDelegate)
@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate, RCTBridgeDelegate {
  var window: UIWindow?
  var bridge: RCTBridge!
  static var reactView: RCTRootView!
  
  func application(_ application: UIApplication,
                   didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    bridge = RCTBridge.init(delegate: self, launchOptions: launchOptions)
    self.window = UIWindow(frame: UIScreen.main.bounds)
    self.showLoading()
    
    FirebaseApp.configure()
    RNFirebaseNotifications.configure();
  
    #if targetEnvironment(simulator)
      let isRealDevice = false;
    #else
      let isRealDevice = true;
    #endif
    AppDelegate.reactView = RCTRootView(
      bundleURL: sourceURL(for: self.bridge),
      moduleName: "SongFestApp",
      initialProperties: ["isRealDevice": isRealDevice],
      launchOptions: nil
    )
    AppDelegate.reactView.backgroundColor = UIColor.white
    
    return true
  }
  
  func showLoading() -> Void {
    let controller = UIStoryboard(name: "Main", bundle: nil)
      .instantiateViewController(withIdentifier: "PostLaunchController") as! PostLaunchController

    self.window?.rootViewController = controller
    self.window?.makeKeyAndVisible()
  }
    
  @objc
  func showReactApp() -> Void {
    DispatchQueue.main.async {
      let controller = UIViewController()
      controller.view = AppDelegate.reactView

      UIApplication.shared.windows.first?.rootViewController = controller
      UIApplication.shared.windows.first?.makeKeyAndVisible()
    }
  }
  
  func sourceURL(for bridge: RCTBridge!) -> URL! {
    return RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index", fallbackResource: nil)
  }
  
  @objc static func requiresMainQueueSetup() -> Bool {
      return false
  }
  
  @objc(application:didReceiveLocalNotification:)
  func application(_ application: UIApplication, didReceive notification: UILocalNotification) {
    RNFirebaseNotifications.instance().didReceive(notification)
  }
  
  func application(_ application: UIApplication,
                   didReceiveRemoteNotification userInfo: [AnyHashable : Any],
                   fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
    RNFirebaseNotifications.instance().didReceiveRemoteNotification(userInfo, fetchCompletionHandler: completionHandler);
  }
  
  @objc(application:didRegisterUserNotificationSettings:)
  func application(_ application: UIApplication, didRegister notificationSettings: UIUserNotificationSettings) {
    RNFirebaseMessaging.instance().didRegister(notificationSettings);
  }
  
  func userNotificationCenter(_ center: UNUserNotificationCenter,
                              willPresent notification: UNNotification,
                              withCompletionHandler completionHandler: @escaping (UNNotificationPresentationOptions) -> Void) {
      completionHandler([.alert, .badge, .sound])
  }
}
