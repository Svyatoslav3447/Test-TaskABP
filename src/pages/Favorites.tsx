import { useEffect, useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import VehicleCard from "../components/VehicleCard";

import { getVehicles } from "../api/vehicleApi";
import { type Vehicle } from "../types/vehicle";

function Favorites() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFavorites() {
      const data = await getVehicles();

      const favorites: number[] = JSON.parse(
        localStorage.getItem("favorites") || "[]",
      );

      const favoriteVehicles = data.filter((vehicle) =>
        favorites.includes(vehicle.id),
      );

      setVehicles(favoriteVehicles);
      setLoading(false);
    }

    loadFavorites();
  }, []);

  return (
    <>
      <Header />

      <main className="favorites">
        <div className="container">
          <h1 className="favorites__title">My Favorites</h1>

          {loading ? (
            <h2>Loading...</h2>
          ) : vehicles.length === 0 ? (
            <div className="favorites__empty">
              <h2>No favorite vehicles</h2>

              <p>Add vehicles by clicking the heart icon.</p>
            </div>
          ) : (
            <div className="featured__grid">
              {vehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Favorites;
