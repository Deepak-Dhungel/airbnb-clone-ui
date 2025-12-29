import React from "react";
import { IconType } from "react-icons";

interface CategoryBoxInterface {
  label: string;
  icon: IconType;
  selected: null | string;
}

const CategoryBox: React.FC<CategoryBoxInterface> = ({
  label,
  icon: Icon,
  selected,
}) => {
  console.log("selected", selected);
  return (
    <div
      className="category-box"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "column",
        width: "50px",
        marginRight: "40px",
        borderBottom: `${selected === label ? "2px solid var(--dark-gray)" : ""}`,
      }}
    >
      <Icon size={30} />
      <span
        style={{
          fontSize: "12px",
          fontWeight: "600",
          color: "var(--dark-gray)",
          margin: "10px 0",
        }}
      >
        {label}
      </span>
    </div>
  );
};

export default CategoryBox;
