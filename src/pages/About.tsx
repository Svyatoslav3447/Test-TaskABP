import Footer from "../components/Footer";
import Header from "../components/Header";

function About() {
  return (
    <>
      <Header />
      <section className="about">
        <div className="container">
          <span className="about__badge">About CarShowroom</span>

          <h1 className="about__title">
            Find Your Perfect Vehicle with Confidence
          </h1>

          <p className="about__text">
            CarShowroom is a modern online platform designed to help users
            discover high-quality vehicles quickly and easily. Whether you're
            searching for a luxury sedan, a family SUV, or a powerful sports
            car, our catalog provides everything you need in one place.
          </p>

          <p className="about__text">
            Every vehicle page includes detailed specifications, pricing,
            ratings, customer reviews, and a photo gallery to help you make an
            informed decision. Users can also save their favorite vehicles for
            future comparison.
          </p>

          <div className="about__grid">
            <div className="about__card">
              <h3>Large Collection</h3>
              <p>
                Browse a wide selection of premium vehicles from different
                manufacturers and categories.
              </p>
            </div>

            <div className="about__card">
              <h3>Smart Search</h3>
              <p>
                Search, filter, and sort vehicles by brand, tags, price, and
                rating.
              </p>
            </div>

            <div className="about__card">
              <h3>Favorites</h3>
              <p>
                Save your favorite vehicles and access them anytime with a
                single click.
              </p>
            </div>

            <div className="about__card">
              <h3>Responsive Design</h3>
              <p>
                Enjoy a seamless experience on desktop, tablet, and mobile
                devices thanks to a mobile-first layout.
              </p>
            </div>
          </div>

          <section className="about__technologies">
            <h2>Built With</h2>

            <ul>
              <li>React</li>
              <li>TypeScript</li>
              <li>React Router</li>
              <li>Vite</li>
              <li>CSS (Mobile-First)</li>
              <li>DummyJSON API</li>
              <li>React Icons</li>
            </ul>
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
