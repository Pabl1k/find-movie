import "./Filters.css";

const RangeInput = ({ title, fromValue, toValue, onFromChange, onToChange }) => (
  <div className="filters-container">
    <span>{title}</span>
    <div style={{ display: "flex" }}>
      <input
        className="filters-range-input"
        type="number"
        placeholder="From"
        value={fromValue}
        onChange={onFromChange}
      />
      <input
        className="filters-range-input"
        type="number"
        placeholder="To"
        value={toValue}
        onChange={onToChange}
      />
    </div>
  </div>
);

const Filters = ({ filters, setFilters, onClearHandler, onFilterHandler }) => {
  const change = (filter, value) => {
    setFilters((prevState) => ({
      ...prevState,
      [filter]: value,
    }));
  };

  const changeRange = (filter, section, value) => {
    if (section === "to") {
      setFilters({
        ...filters,
        [filter]: {
          from: filters[filter].from,
          to: value,
        },
      });

      return;
    }

    setFilters({
      ...filters,
      [filter]: {
        from: value,
        to: filters[filter].to,
      },
    });
  };

  return (
    <div className="filters">
      <h3>Filters:</h3>
      <div className="filters-container">
        <span>Keyword</span>
        <input
          placeholder="Enter keyword..."
          value={filters.keyword || ""}
          onChange={(e) => change("keyword", e.currentTarget.value)}
        />
      </div>
      <div className="filters-container">
        <span>Crew</span>
        <input
          placeholder="Enter crew name..."
          value={filters.crew || ""}
          onChange={(e) => change("crew", e.currentTarget.value)}
        />
      </div>
      <RangeInput
        title="Rank"
        fromValue={filters.rank.from || ""}
        toValue={filters.rank.to || ""}
        onFromChange={(e) =>
          changeRange("rank", "from", +e.currentTarget.value)
        }
        onToChange={(e) => changeRange("rank", "to", +e.currentTarget.value)}
      />
      <RangeInput
        title="Year"
        fromValue={filters.year.from || ""}
        toValue={filters.year.to || ""}
        onFromChange={(e) =>
          changeRange("year", "from", +e.currentTarget.value)
        }
        onToChange={(e) => changeRange("year", "to", +e.currentTarget.value)}
      />
      <RangeInput
        title="Rating"
        fromValue={filters.rating.from || ""}
        toValue={filters.rating.to || ""}
        onFromChange={(e) =>
          changeRange("rating", "from", +e.currentTarget.value)
        }
        onToChange={(e) => changeRange("rating", "to", +e.currentTarget.value)}
      />
      <div className="filters-buttons">
        <button onClick={onFilterHandler}>Filter</button>
        <button className="filters-clear-button" onClick={onClearHandler}>
          Clear filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
