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
  }
  
  override func viewDidLoad() {
    super.viewDidLoad()
    
    view.addSubview(loadinggif)
    loadinggif.centerInSuperview()
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
