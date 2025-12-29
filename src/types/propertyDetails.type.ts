export type PropertyDetailsType = {
  id: string;
  propertyCategory: string;
  typeOfPlace: string;
  location: string;
  propertyInfo: PropertyInfoType;
  amenities: string[];
  images: string[];
  generalInfo: GeneralInfoType;
};

export type PropertyInfoType = {
  guestNo: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
};

export type AmenitiesType = {
  name: string;
};

export type GeneralInfoType = {
  title: string;
  description: string;
  price: string;
};
