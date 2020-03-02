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
class AppDelegate: UIResponder, UIApplicationDelegate {
  var window: UIWindow?
  var bridge: RCTBridge!

  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    let jsCodeLocation = URL(string: "http://localhost:8081/index.bundle?platform=ios")
    let rootView = RCTRootView(bundleURL: jsCodeLocation!, moduleName: "SongFestApp", initialProperties: nil, launchOptions: launchOptions)
    let rootViewController = UIViewController()
    rootViewController.view = rootView

    self.window = UIWindow(frame: UIScreen.main.bounds)
    self.window?.rootViewController = rootViewController
    self.window?.makeKeyAndVisible()

    return true
  }
}
