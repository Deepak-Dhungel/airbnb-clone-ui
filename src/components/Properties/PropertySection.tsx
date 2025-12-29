import { DocumentData, collection, getDocs } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../firebase.config";
import { PropertyDetailsType } from "../../types/propertyDetails.type";
import PropertyCard from "../property-card/PropertyCard";
import PropertyCardSkeleton from "../property-card/PropertyCardSkeleton";

function PropertySection() {
  const [properties, setProperties] = useState<DocumentData>([]);
  const [propertiesLoading, setPropertiesLoading] = useState(false);

  React.useEffect(() => {
    getProperties();
  }, []);

  async function getProperties() {
    setPropertiesLoading(true);
    const propertiesRef = collection(db, "properties");
    try {
      const getProperties = await getDocs(propertiesRef);
      const allProperties = getProperties.docs.map((property) => ({
        ...property.data(),
        id: property.id,
      }));
      // console.log("all prop",allProperties);
      setProperties(allProperties);
      setPropertiesLoading(false);
    } catch (error) {
      console.log("Error while getting Data", error);
    }
  }

  return (
    <div
      style={{
        padding: "40px",
        display: "flex",
        flexWrap: "wrap",
        gap: "40px",
      }}
    >
      {propertiesLoading ? (
        <>
          <PropertyCardSkeleton />
          <PropertyCardSkeleton />
          <PropertyCardSkeleton />
          <PropertyCardSkeleton />
          <PropertyCardSkeleton />
          <PropertyCardSkeleton />
          <PropertyCardSkeleton />
          <PropertyCardSkeleton />
        </>
      ) : (
        properties?.map((item: PropertyDetailsType, i: any) => {
          return <PropertyCard item={item} key={i} />;
        })
      )}
    </div>
  );
}

export default PropertySection;
