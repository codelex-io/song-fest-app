import Foundation
import UIKit

@objc(AppDelegate)
@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate, RCTBridgeDelegate {
  var window: UIWindow?
  var bridge: RCTBridge!
  static var reactView: RCTRootView!
  static var instance: AppDelegate = AppDelegate.init()
  
  func application(_ application: UIApplication,
                   didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    bridge = RCTBridge.init(delegate: self, launchOptions: launchOptions)
    self.window = UIWindow(frame: UIScreen.main.bounds)
    self.showLoading()
    
    AppDelegate.reactView = RCTRootView(
      bundleURL: sourceURL(for: self.bridge),
      moduleName: "SongFestApp",
      initialProperties: nil,
      launchOptions: nil
    )
    AppDelegate.reactView.backgroundColor = UIColor.white
    
    return true
  }
  
  func showLoading() -> Void {
    let controller = UIStoryboard(name: "Main", bundle: nil)
      .instantiateViewController(withIdentifier: "GifViewController") as! GifViewController

    self.window?.rootViewController = controller
    self.window?.makeKeyAndVisible()
  }
    
  // instead of this method, notify swift app (maybe via variable reactInitiated in AppDelegate with a listener)
//  static var reactAppInitiated: Bool = false
  @objc
  func showReactApp() -> Void {
    print("react app would be initiated from App.tsx")
    // maybe
    // self.reactAppInitiated = true
    
//    DispatchQueue.main.async {
//      let controller = UIViewController()
//      controller.view = AppDelegate.reactView
//
//      UIApplication.shared.windows.first?.rootViewController = controller
//      UIApplication.shared.windows.first?.makeKeyAndVisible()
//    }
  }
  
  func sourceURL(for bridge: RCTBridge!) -> URL! {
    return RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index", fallbackResource: nil)
  }
  
  @objc static func requiresMainQueueSetup() -> Bool {
      return false
  }
}
