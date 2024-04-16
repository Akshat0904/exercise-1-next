import { useState } from "react";
import Button from "@/src/shared/component/button/Button";
import Modal from "@/src/shared/component/modal/Modal";

interface IProps {
  title: string;
  address: string;
  displayLocation: string;
}

const LocationDetails = ({ title, address, displayLocation }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const setModal = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <h3 className="text-at-lg font-bold">Location of {title}</h3>
      <div className="w-full">
        <div className="mb-4">
          <h4 className="text-sm font-bold">Development Location</h4>
          <p className="text-xs font-normal">{address}</p>
        </div>
        <div className="mb-4">
          <h4 className="text-sm font-bold">Display Location</h4>
          <p className="text-xs font-normal">{displayLocation}</p>
        </div>
        <div className="mb-4">
          <h4 className="text-sm font-bold">Display Open Hours</h4>
          <p className="text-xs font-normal">Not available</p>
        </div>
        <Button
          buttonClass="w-full font-bold text-white bg-at-primary border-at-primary hover:border-at-primary-700 hover:bg-at-primary-700 active:bg-at-primary-700"
          onClick={setModal}
        >
          Request a private appointment
        </Button>
        <Modal open={isOpen}>
          <h3>Hello</h3>
        </Modal>
      </div>
    </>
  );
};

export default LocationDetails;
