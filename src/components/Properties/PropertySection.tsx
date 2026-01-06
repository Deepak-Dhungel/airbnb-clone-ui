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

      setProperties(allProperties);
      setPropertiesLoading(false);
    } catch (error) {
      console.log("Error while getting Data", error);
    }
  }

  return (
    <>
      <div
        style={{
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <span style={{ fontSize: "20px", fontWeight: "700" }}>
          Popular homes in New York
        </span>

        <div
          style={{
            display: "flex",
            width: "100%",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "space-between",
          }}
        >
          {propertiesLoading ? (
            <>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <PropertyCardSkeleton key={item} />
              ))}
            </>
          ) : (
            properties?.map((item: PropertyDetailsType) => {
              return <PropertyCard item={item} key={item.id} />;
            })
          )}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            gap: "10px",
            marginTop: "40px",
          }}
        >
          <span style={{ fontSize: "20px", fontWeight: "700" }}>
            Popular homes in Denver
          </span>

          <div
            style={{
              display: "flex",
              width: "100%",
              flexWrap: "wrap",
              gap: "20px",
              justifyContent: "space-between",
            }}
          >
            {propertiesLoading ? (
              <>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <PropertyCardSkeleton key={item} />
                ))}
              </>
            ) : (
              properties?.map((item: PropertyDetailsType) => {
                return <PropertyCard item={item} key={item.id} />;
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default PropertySection;
