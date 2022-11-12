import './index.css'

const Header = () => (
  <nav className="nav-con">
    <div className="responsive-con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="logo-image"
      />
      <div className="m-link-logout-con">
        <ul className="m-link-con">
          <li className="m-link">Home</li>
          <li className="m-link">Products</li>
          <li className="m-link">Cart</li>
        </ul>
        <button type="button" className="m-logout-btn">
          Logout
        </button>
      </div>
      <button type="button" className="sm-logout-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="image"
        />
      </button>
    </div>
    <ul className="sm-link-con">
      <li className="sm-link">
        <button type="button" className="sm-link-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="image"
          />
        </button>
      </li>
      <li className="sm-link">
        <button type="button" className="sm-link-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="image"
          />
        </button>
      </li>
      <li className="sm-link">
        <button type="button" className="sm-link-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="image"
          />
        </button>
      </li>
    </ul>
  </nav>
)

export default Header
