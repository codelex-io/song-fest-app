//
//  AppDelegate.swift
//  SongFestApp
//
//  Created by sandris on 02/03/2020.
//  Copyright © 2020 Facebook. All rights reserved.
//

import Foundation
import UIKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate, RCTBridgeDelegate {
  func sourceURL(for bridge: RCTBridge!) -> URL! {
      let jsCodeLocation = URL(string: "http://localhost:8081/index.bundle?platform=ios")
    return jsCodeLocation!
  }
  
  var window: UIWindow?
  var bridge: RCTBridge!

  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    
    bridge = RCTBridge.init(delegate: self, launchOptions: launchOptions)
    let rootView = RCTRootView.init(bridge: bridge, moduleName: "SongFestApp", initialProperties: nil)
    rootView.backgroundColor = UIColor.white
    self.window = UIWindow(frame: UIScreen.main.bounds)
    let rootController = UIStoryboard(name: "Main", bundle: nil).instantiateViewController(withIdentifier: "GifViewController") as! GifViewController

    self.window?.rootViewController = rootController
    self.window?.makeKeyAndVisible()
    
    return true
  }
  
}
