import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiHeart, FiStar } from "react-icons/fi";

import { type Vehicle } from "../types/vehicle";

interface VehicleCardProps {
  vehicle: Vehicle;
}

function VehicleCard({ vehicle }: VehicleCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites: number[] = JSON.parse(
      localStorage.getItem("favorites") || "[]",
    );

    setIsFavorite(favorites.includes(vehicle.id));
  }, [vehicle.id]);

  function handleFavorite(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault(); // не переходити по Link
    e.stopPropagation();

    const favorites: number[] = JSON.parse(
      localStorage.getItem("favorites") || "[]",
    );

    let updated: number[];

    if (favorites.includes(vehicle.id)) {
      updated = favorites.filter((id) => id !== vehicle.id);
      setIsFavorite(false);
    } else {
      updated = [...favorites, vehicle.id];
      setIsFavorite(true);
    }

    localStorage.setItem("favorites", JSON.stringify(updated));
  }

  return (
    <Link to={`/vehicle/${vehicle.id}`} className="car-card__link">
      <article className="car-card">
        <button
          className={
            isFavorite
              ? "car-card__favorite car-card__favorite--active"
              : "car-card__favorite"
          }
          onClick={handleFavorite}
        >
          <FiHeart fill={isFavorite ? "currentColor" : "none"} />
        </button>

        <img
          className="car-card__image"
          src={vehicle.thumbnail}
          alt={vehicle.title}
        />

        <div className="car-card__body">
          <h3 className="car-card__title">{vehicle.title}</h3>

          <div className="car-card__tags">
            {vehicle.tags.map((tag) => (
              <span className="car-card__tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>

          <div className="car-card__rating">
            <FiStar />
            <span>{vehicle.rating}</span>
          </div>

          <h4 className="car-card__price">${vehicle.price}</h4>
        </div>
      </article>
    </Link>
  );
}

export default VehicleCard;
