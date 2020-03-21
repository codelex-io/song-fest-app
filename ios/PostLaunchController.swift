import Foundation
import TinyConstraints
import UIKit
import Gifu

class PostLaunchController: UIViewController {

  lazy var loadinggif: GIFImageView = {
    let view = GIFImageView()
    view.contentMode = .scaleAspectFit
    view.animate(withGIFNamed: "splash-animation")
    return view
  }()

  override func viewDidLoad() {
    super.viewDidLoad()
    
    view.addSubview(loadinggif)
    loadinggif.centerInSuperview()
    loadinggif.width(view.frame.width - 60, relation: .equal, priority: .required, isActive: true)
  }
}
