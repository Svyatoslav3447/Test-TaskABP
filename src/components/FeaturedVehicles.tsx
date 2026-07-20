import { type Vehicle } from "../types/vehicle";
import VehicleCard from "./VehicleCard";

interface FeaturedVehiclesProps {
  vehicles: Vehicle[];
}

function FeaturedVehicles({ vehicles }: FeaturedVehiclesProps) {
  return (
    <section className="featured">
      <div className="container">
        <div className="featured__header">
          <h2 className="featured__title">Featured Vehicles</h2>

          <a href="/" className="featured__link">
            View all
          </a>
        </div>

        <div className="featured__grid">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedVehicles;
