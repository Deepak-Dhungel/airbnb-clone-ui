import { AiOutlineCoffee } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { MdOutlineApartment } from "react-icons/md";
import { TbBuildingCottage } from "react-icons/tb";

export const propertyCategories = [
  {
    icon: `<BsHouseDoor />`,
    name: "House",
  },
  {
    icon: "<MdOutlineApartment />",
    name: "Flat/Apartment",
  },
  {
    icon: "<TbBuildingCottage />",
    name: "Barn",
  },
  {
    icon: "<AiOutlineCoffee />",
    name: "Bed & Breakfast",
  },
];

export const placeTypeData = [
  {
    title: "An entire place",
    desc: "Guests have the whole place to themselves",
  },
  {
    title: "A private room",
    desc: "Guests sleep in a private room but some areas may be shared with you or others.",
  },
  {
    title: "A shared room",
    desc: "Guests sleep in a room or common area that may be shared with you or others.",
  },
];

export const amenitiesData = [
  {
    name: "Wifi",
  },
  {
    name: "TV",
  },
  {
    name: "Washing Machine",
  },
  {
    name: "Air Conditioning",
  },
];
