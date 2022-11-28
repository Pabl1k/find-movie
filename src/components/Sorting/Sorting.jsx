import "./Sorting.css";

const RangeInput = ({ title }) => (
  <div className="sorting-container">
    <span>{title}</span>
    <div style={{ display: "flex" }}>
      <input className="sorting-range-input" type="number" placeholder="from" />
      <input className="sorting-range-input" type="number" placeholder="to" />
    </div>
  </div>
);

const Sorting = ({}) => {
  return (
    <div className="sorting">
      <h3>Sort by:</h3>
      <div className="sorting-container">
        <span>Keyword</span>
        <input placeholder="Enter keyword..." />
      </div>
      <div className="sorting-container">
        <span>Director</span>
        <input placeholder="Enter director name..." />
      </div>
      <RangeInput title="Rank" />
      <RangeInput title="Year" />
      <RangeInput title="Rating" />
      <button>Sort</button>
    </div>
  );
};

export default Sorting;
