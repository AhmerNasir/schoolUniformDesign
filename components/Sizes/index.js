import React, { useState } from "react";
import styles from "./styles";
import classNames from "classnames";

const sizeOptions = [
  { id: 1, size: "Small" },
  { id: 2, size: "Medium" },
  { id: 3, size: "Large" },
  { id: 4, size: "XL" },
  { id: 5, size: "XXL" },
  { id: 6, size: "XXXL" },
  { id: 7, size: "Custom" },
  { id: 8, size: "Other" },
];

const seasonOptions = [
  { id: 1, size: "Summer" },
  { id: 2, size: "Spring" },
  { id: 3, size: "Fall" },
  { id: 4, size: "Winter" },
];

function SizeOptions({ seasons }) {
  const [selectedSizes, setSelectedSizes] = useState([]);

  const handleSizeChange = (id) => {
    if (selectedSizes.includes(id)) {
      setSelectedSizes(selectedSizes.filter((item) => item !== id));
    } else {
      setSelectedSizes([...selectedSizes, id]);
    }
  };

  const options = seasons ? seasonOptions : sizeOptions;

  return (
    <div>
      <form
        className={classNames({
          "selected-options": !seasons,
        })}
      >
        {options?.map((option) => (
          <label key={option.id} className="check-box-container">
            {option.size}
            <input
              type="checkbox"
              name="size"
              value={option.size}
              checked={selectedSizes.includes(option.id)}
              onChange={() => handleSizeChange(option.id)}
            />
            <span className="checkmark"></span>
          </label>
        ))}
      </form>
      <style jsx>{styles}</style>
    </div>
  );
}

export default SizeOptions;
