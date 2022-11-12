import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-l-image-heading-para-con">
      <div className="home-s-image-heading-para-con">
        <h1 className="heading">Clothes That Get YOU Noticed</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="sm-cloths-image"
        />
        <p className="para">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new exciting fashion in
          your own way.
        </p>
        <button type="button" className="shop-now-btn">
          Shop Now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="l-cloths-image"
      />
    </div>
  </>
)

export default Home
