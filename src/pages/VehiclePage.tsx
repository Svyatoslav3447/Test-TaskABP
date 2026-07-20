import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList";

import { getVehicle } from "../api/vehicleApi";
import { type Vehicle, type Review } from "../types/vehicle";

import {
  FiHeart,
  FiStar,
  FiTruck,
  FiShield,
  FiPackage,
  FiTag,
} from "react-icons/fi";

function VehiclePage() {
  const { id } = useParams();

  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    async function loadVehicle() {
      if (!id) return;

      setLoading(true);

      const data = await getVehicle(id);

      const savedReviews = localStorage.getItem(`reviews-${data.id}`);

      if (savedReviews) {
        data.reviews = JSON.parse(savedReviews);
      }

      setVehicle(data);
      setActiveImage(data.thumbnail);

      const favorites: number[] = JSON.parse(
        localStorage.getItem("favorites") || "[]",
      );

      setIsFavorite(favorites.includes(data.id));

      setLoading(false);
    }

    loadVehicle();
  }, [id]);

  function handleAddReview(review: Review) {
    if (!vehicle) return;

    const updatedReviews = [review, ...vehicle.reviews];

    setVehicle({
      ...vehicle,
      reviews: updatedReviews,
    });

    localStorage.setItem(
      `reviews-${vehicle.id}`,
      JSON.stringify(updatedReviews),
    );
  }

  function handleFavorite() {
    if (!vehicle) return;

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

  if (loading) {
    return (
      <>
        <Header />
        <main className="vehicle">
          <div className="container">
            <h2>Loading...</h2>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!vehicle) {
    return (
      <>
        <Header />
        <main className="vehicle">
          <div className="container">
            <h2>Vehicle not found.</h2>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="vehicle">
        <div className="container">
          <div className="vehicle__breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/">Vehicles</Link>
            <span>/</span>
            <span>{vehicle.title}</span>
          </div>

          <div className="vehicle__wrapper">
            <section className="vehicle__gallery">
              <div className="vehicle__image">
                <img src={activeImage} alt={vehicle.title} />
              </div>

              <div className="vehicle__thumbs">
                {vehicle.images.map((img, index) => (
                  <button
                    key={index}
                    type="button"
                    className={
                      img === activeImage
                        ? "vehicle__thumb vehicle__thumb--active"
                        : "vehicle__thumb"
                    }
                    onClick={() => setActiveImage(img)}
                  >
                    <img src={img} alt={`${vehicle.title} ${index + 1}`} />
                  </button>
                ))}
              </div>
            </section>

            <section className="vehicle__content">
              <h1 className="vehicle__title">{vehicle.title}</h1>

              <div className="vehicle__price">${vehicle.price}</div>

              <div className="vehicle__rating">
                <FiStar />
                <span>{vehicle.rating}</span>

                <small>({vehicle.reviews.length} reviews)</small>
              </div>

              <div className="vehicle__tags">
                {vehicle.tags.map((tag) => (
                  <span key={tag} className="vehicle__tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="vehicle__info">
                <div className="vehicle__info-item">
                  <FiTag />
                  <span>Brand</span>
                  <strong>{vehicle.brand}</strong>
                </div>

                <div className="vehicle__info-item">
                  <FiPackage />
                  <span>Category</span>
                  <strong>{vehicle.category}</strong>
                </div>

                <div className="vehicle__info-item">
                  <FiTruck />
                  <span>Shipping</span>
                  <strong>{vehicle.shippingInformation}</strong>
                </div>

                <div className="vehicle__info-item">
                  <FiShield />
                  <span>Warranty</span>
                  <strong>{vehicle.warrantyInformation}</strong>
                </div>

                <div className="vehicle__info-item">
                  <FiPackage />
                  <span>Stock</span>
                  <strong>{vehicle.stock}</strong>
                </div>

                <div className="vehicle__info-item">
                  <FiShield />
                  <span>Status</span>
                  <strong>{vehicle.availabilityStatus}</strong>
                </div>
              </div>

              <button
                className={
                  isFavorite
                    ? "vehicle__favorite vehicle__favorite--active"
                    : "vehicle__favorite"
                }
                type="button"
                onClick={handleFavorite}
              >
                <FiHeart fill={isFavorite ? "currentColor" : "none"} />

                {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
              </button>
            </section>
          </div>

          <div className="vehicle__bottom">
            <div className="vehicle__left">
              <section className="vehicle__description">
                <h2>Description</h2>

                <p>{vehicle.description}</p>
              </section>

              <section className="vehicle__reviews">
                <div className="vehicle__section-header">
                  <h2>Reviews ({vehicle.reviews.length})</h2>
                </div>

                <CommentList reviews={vehicle.reviews} />
              </section>
            </div>

            <aside className="vehicle__right">
              <section className="vehicle__review-form">
                <h2>Add a Review</h2>

                <CommentForm onAddReview={handleAddReview} />
              </section>
            </aside>
          </div>

          <Link to="/" className="vehicle__back">
            ← Back to catalog
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default VehiclePage;
