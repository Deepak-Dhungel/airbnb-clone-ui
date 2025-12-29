import React, { useState } from "react";
import { PropertyDetailsType } from "../types/propertyDetails.type";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { db, storage } from "../firebase.config";
import { addDoc, collection } from "firebase/firestore";

type ContextProviderType = {
  children: React.ReactNode;
};

interface AddPropertyInterface {
  propertyDetails: PropertyDetailsType;
  setPropertyDetails: React.Dispatch<React.SetStateAction<PropertyDetailsType>>;
  displayImage: File[];
  setDisplayImage: React.Dispatch<React.SetStateAction<File[]>>;
  uploadPropertyToFirebase: () => void;
  publish: boolean;
  uploadingProperty: boolean;
  setUploadingProperty: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddPropertyContext = React.createContext<AddPropertyInterface>(
  {} as AddPropertyInterface
);

export const AddPropertyContextProvider = ({
  children,
}: ContextProviderType) => {
  const [propertyDetails, setPropertyDetails] = useState(
    {} as PropertyDetailsType
  );

  const [displayImage, setDisplayImage] = useState<File[]>([]);
  const [publish, setPublish] = useState<boolean>(false);
  const [uploadingProperty, setUploadingProperty] = useState(false);

  async function handleImageUploadToStorage() {
    try {
      const addImgToProperty: string[] = [];
      await Promise.all(
        displayImage.map(async (photo, index) => {
          const storageRef = ref(storage, `images/${displayImage[index].name}`);
          const snapshot = await uploadBytes(storageRef, displayImage[index]);
          const imgURL = await getDownloadURL(snapshot.ref);

          addImgToProperty.push(imgURL);
        })
      );

      return addImgToProperty;
    } catch (error) {
      console.log("image upload error", error);
      return [];
    }
  }

  async function addPropertyDetailsToFirebase(imageURLs: string[]) {
    try {
      const dbRef = collection(db, "properties");
      await addDoc(dbRef, { ...propertyDetails, images: imageURLs });
    } catch (error) {
      console.log("Firestore upload error", error);
    }
  }

  async function uploadPropertyToFirebase() {
    try {
      setUploadingProperty(true);
      const imageURLs = await handleImageUploadToStorage();
      await addPropertyDetailsToFirebase(imageURLs);
      setUploadingProperty(false);
      setPropertyDetails({} as PropertyDetailsType);
      setDisplayImage([]);
      alert("Property added Successfully!");
    } catch (error) {
      console.log("Upload error:", error);
    }
  }

  React.useEffect(() => {}, [propertyDetails]);

  return (
    <AddPropertyContext.Provider
      value={{
        propertyDetails,
        setPropertyDetails,
        displayImage,
        setDisplayImage,
        uploadPropertyToFirebase,
        publish,
        uploadingProperty,
        setUploadingProperty,
      }}
    >
      {children}
    </AddPropertyContext.Provider>
  );
};
