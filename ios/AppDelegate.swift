import Foundation
import UIKit

@objc(AppDelegate)
@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate, RCTBridgeDelegate {
  var window: UIWindow?
  var bridge: RCTBridge!
  var reactView: RCTRootView!

  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    bridge = RCTBridge.init(delegate: self, launchOptions: launchOptions)
    self.window = UIWindow(frame: UIScreen.main.bounds)
    self.showLoading()
    
    reactView = RCTRootView(bundleURL: sourceURL(for: self.bridge), moduleName: "SongFestApp", initialProperties: nil, launchOptions: nil)
    reactView.backgroundColor = UIColor.white
            
    return true
  }
  
  func showLoading() -> Void {
    let controller = UIStoryboard(name: "Main", bundle: nil)
      .instantiateViewController(withIdentifier: "GifViewController") as! GifViewController

    self.window?.rootViewController = controller
    self.window?.makeKeyAndVisible()
  }
    
  @objc
  func showReactApp() -> Void {
    DispatchQueue.main.async {
      print("=================")
      print("show react app")
      
      let controller = UIViewController()
      controller.view = self.reactView
      
      self.window?.rootViewController = controller
      self.window?.makeKeyAndVisible()
      
      print("=================")
      print("finished showing app")
    }
  }
  
  func sourceURL(for bridge: RCTBridge!) -> URL! {
    return RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index", fallbackResource: nil)
  }
  
  @objc static func requiresMainQueueSetup() -> Bool {
      return false
  }
}
