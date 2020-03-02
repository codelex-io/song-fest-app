//
//  GifViewController.swift
//  SongFestApp
//
//  Created by sandris on 28/02/2020.
//  Copyright © 2020 Facebook. All rights reserved.
//

import Foundation
import TinyConstraints
import UIKit
import Gifu

class GifViewController: UIViewController {
  
  lazy var loadinggif: GIFImageView = {
    let view = GIFImageView()
    view.contentMode = .scaleAspectFit
    view.animate(withGIFNamed: "songfest-launch-gif")
    view.alpha = 0
    view.animationRepeatCount = 1
    return view
  }()
  
  
  @IBAction func touchUp(_ sender: UIButton) {
    print("button clicked")
    let jsCodeLocation = URL(string: "http://localhost:8081/index.bundle?platform=ios")
    let rootView = RCTRootView(bundleURL: jsCodeLocation!, moduleName: "SongFestApp", initialProperties: nil, launchOptions: nil)
    let rootViewController = UIViewController()
    rootViewController.view = rootView

    let window : UIWindow
    window = UIWindow(frame: UIScreen.main.bounds)
    window.rootViewController = rootViewController
    window.makeKeyAndVisible()
  }
  
  
  override func viewDidLoad() {
    super.viewDidLoad()
    
    // set up in view
    view.addSubview(loadinggif)
    loadinggif.centerInSuperview()
    //set width 90% of view.frame.width and height == width
    loadinggif.width(340)
    loadinggif.height(340)
    
    // quickfix. fade in animation for gif
    var i = 0.0
    while (i <= 1.0) {
      // wait for x time on each iteration
      i = i + 0.01
      loadinggif.alpha = CGFloat.init(i)
    }
  }
  
}
