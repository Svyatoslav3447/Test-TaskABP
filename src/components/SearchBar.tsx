import { FiSearch } from "react-icons/fi";

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
  brand: string;
  setBrand: (value: string) => void;
  tag: string;
  setTag: (value: string) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
  brands: string[];
  tags: string[];
}

function SearchBar({
  search,
  setSearch,
  brand,
  setBrand,
  tag,
  setTag,
  sortBy,
  setSortBy,
  brands,
  tags,
}: SearchBarProps) {
  return (
    <section className="search">
      <div className="container">
        <form className="search__form" onSubmit={(e) => e.preventDefault()}>
          <div className="search__input">
            <FiSearch />

            <input
              type="text"
              placeholder="Search by make, model..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <select
            className="search__select"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value="">All Brands</option>
            {brands.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>

          <select
            className="search__select"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          >
            <option value="">All tags</option>
            {tags.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          <select
            className="search__select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>

          <button className="search__button" type="submit">
            <FiSearch />
            Search
          </button>
        </form>
      </div>
    </section>
  );
}

export default SearchBar;
