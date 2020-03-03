import Foundation
import TinyConstraints
import UIKit
import Gifu

class GifViewController: UIViewController {

  lazy var loadinggif: GIFImageView = {
    let view = GIFImageView()
    view.contentMode = .scaleAspectFit
    view.animate(withGIFNamed: "songfest-launch-gif")
    view.alpha = 0.0
    return view
  }()

  override func viewDidLoad() {
    super.viewDidLoad()
    
    view.addSubview(loadinggif)
    loadinggif.centerInSuperview()
    loadinggif.width(view.frame.width * 0.9)

    // fade in/out animation for gif
    UIView.animate(withDuration: 1.55, delay: 0.8, options: [.curveEaseOut, .autoreverse, .repeat], animations: {
        self.loadinggif.alpha = 1.0
      }, completion: nil)
    
    Timer.scheduledTimer(withTimeInterval: 7.0, repeats: false, block: {
      _ in
      // should create a listener for when react native app is launched and only then invoke this (without a random timer)
      DispatchQueue.main.async(execute: {
          let controller = UIViewController()
          controller.view = AppDelegate.reactView
          UIApplication.shared.windows.first?.rootViewController = controller
          UIApplication.shared.windows.first?.makeKeyAndVisible()
        })
    })
  }
  
}
