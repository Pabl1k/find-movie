import "./Filters.css";

const RangeInput = ({ title, fromValue, toValue, onFromChange, onToChange }) => (
  <div className="sorting-container">
    <span>{title}</span>
    <div style={{ display: "flex" }}>
      <input
        className="sorting-range-input"
        type="number"
        placeholder="From"
        value={fromValue}
        onChange={onFromChange}
      />
      <input
        className="sorting-range-input"
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
    <div className="sorting">
      <h3>Filters:</h3>
      <div className="sorting-container">
        <span>Keyword</span>
        <input
          placeholder="Enter keyword..."
          value={filters.keyword || ""}
          onChange={(e) => change("keyword", e.currentTarget.value)}
        />
      </div>
      <div className="sorting-container">
        <span>Director</span>
        <input
          placeholder="Enter director name..."
          value={filters.director || ""}
          onChange={(e) => change("director", e.currentTarget.value)}
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
      <div className="sorting-buttons">
        <button onClick={onFilterHandler}>Filter</button>
        <button className="sorting-clear-button" onClick={onClearHandler}>
          Clear filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
