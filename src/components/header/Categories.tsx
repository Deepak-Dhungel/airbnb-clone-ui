import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";
import React from "react";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import "../../styles/components/headerCategoriesStyles.css";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property is has windmills!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern!",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is in the countryside!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This is property has a beautiful pool!",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "This property is on an island!",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This property is near a lake!",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property has skiing activies!",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "This property is an ancient castle!",
  },
  {
    label: "Caves",
    icon: GiCaveEntrance,
    description: "This property is in a spooky cave!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This property offers camping activities!",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This property is in arctic environment!",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This property is in the desert!",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This property is in a barn!",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This property is brand new and luxurious!",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This property is in the desert!",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This property is in a barn!",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This property is brand new and luxurious!",
  },
];

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<null | string>(
    null
  );

  let scrollContainer = React.useRef<HTMLDivElement>(null);
  const [xPosition, setXPosition] = React.useState(0);
  const [scrollEnd, setscrollEnd] = React.useState(false);

  const handleScroll = (shift: number) => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft += shift;
      setXPosition(xPosition + shift);

      if (
        Math.floor(
          scrollContainer.current.scrollWidth -
            scrollContainer.current.scrollLeft
        ) <= scrollContainer.current.offsetWidth
      ) {
        setscrollEnd(true);
      } else {
        setscrollEnd(false);
      }
    }
  };

  const scrollCheck = () => {
    if (scrollContainer.current) {
      setXPosition(scrollContainer.current.scrollLeft);
      if (
        Math.floor(
          scrollContainer.current.scrollWidth -
            scrollContainer.current.scrollLeft
        ) <= scrollContainer.current.offsetWidth
      ) {
        setscrollEnd(true);
      } else {
        setscrollEnd(false);
      }
    }
  };

  return (
    <div className="header_categories_container">
      {xPosition !== 0 && (
        <div
          className="scroll_left_btn"
          onClick={() => handleScroll(-150)}
          style={{ cursor: "pointer" }}
        >
          <TfiArrowCircleLeft size={20} color="var(--dark)" />
        </div>
      )}
      <div
        className="category_tabs"
        ref={scrollContainer}
        onScroll={scrollCheck}
      >
        {categories.map((item, i) => {
          const { label, icon: Icon } = item;
          return (
            <div
            key={i}
              className="category_box"
              onClick={() => setSelectedCategory(label)}
              style={{
                borderBottom: `${
                  selectedCategory === item.label
                    ? "2px solid var(--dark-gray)"
                    : ""
                }`,
              }}
            >
              <Icon
                size={25}
                style={{
                  color: `${
                    selectedCategory === item.label
                      ? "var(--dark)"
                      : "var(--dark-gray)"
                  }`,
                }}
              />
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: `${
                    selectedCategory === item.label ? "700" : "600"
                  }`,
                  color: `${
                    selectedCategory === item.label
                      ? "var(--dark)"
                      : "var(--dark-gray)"
                  }`,
                  margin: "10px 0",
                }}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
      {!scrollEnd && (
        <div
          className="scroll_right_btn"
          onClick={() => handleScroll(+150)}
          style={{ cursor: "pointer" }}
        >
          <TfiArrowCircleRight size={20} color="var(--dark)" />
        </div>
      )}
    </div>
  );
};

export default Categories;
