import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import FeaturedVehicles from "../components/FeaturedVehicles";
import Footer from "../components/Footer";
import { type Vehicle } from "../types/vehicle";
import { useEffect, useState } from "react";
import { getVehicles } from "../api/vehicleApi";

function Home() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [tag, setTag] = useState("");
  const [sortBy, setSortBy] = useState("");

  let filteredVehicles = vehicles.filter((v) =>
    v.title.toLowerCase().includes(search.toLowerCase()),
  );

  if (brand) {
    filteredVehicles = filteredVehicles.filter((v) => v.brand === brand);
  }

  if (tag) {
    filteredVehicles = filteredVehicles.filter((v) => v.tags.includes(tag));
  }

  if (sortBy === "priceAsc") {
    filteredVehicles.sort((a, b) => a.price - b.price);
  } else if (sortBy === "priceDesc") {
    filteredVehicles.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredVehicles.sort((a, b) => b.rating - a.rating);
  }

  const brands = [...new Set(vehicles.map((v) => v.brand))];

  const allTags = vehicles.map((v) => v.tags).flat();
  const tags = [...new Set(allTags)];
  useEffect(() => {
    async function loadVehicles() {
      const data = await getVehicles();

      setVehicles(data);
    }

    loadVehicles();
  }, []);

  return (
    <>
      <Header />
      <section className="hero">
        <div className="container">
          <div className="hero__content">
            <span className="hero__badge">Premium Car Marketplace</span>

            <h1 className="hero__title">
              Find your
              <span> perfect car</span>
            </h1>

            <p className="hero__description">
              Explore our collection of amazing vehicles and find the one that
              fits your lifestyle.
            </p>

            <div className="hero__buttons">
              <button className="btn btn--primary">Browse Vehicles</button>

              <button className="btn btn--secondary">Learn More</button>
            </div>
          </div>

          <div className="hero__image">
            <img src="/BMW_M3_.png" alt="BMW M5" />
          </div>
        </div>
      </section>
      <SearchBar
        search={search}
        setSearch={setSearch}
        brand={brand}
        setBrand={setBrand}
        tag={tag}
        setTag={setTag}
        sortBy={sortBy}
        setSortBy={setSortBy}
        brands={brands}
        tags={tags}
      />
      <FeaturedVehicles vehicles={filteredVehicles} />
      <Footer />
    </>
  );
}

export default Home;
