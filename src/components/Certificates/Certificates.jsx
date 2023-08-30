import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";
import React from "react";
import certificates from "../../../certificates";

const Certificates = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <div className="bg-black w-full py-10">
      <Accordion
        className="flex justify-center items-center "
        variant="splitted"
      >
        {certificates.map((certificate) => {
          return (
            <AccordionItem
              className="w-1/2 flex flex-col"
              key={certificate.id}
              startContent={
                <Avatar
                  className="bg-transparent"
                  radius="none"
                  src={certificate.icon}
                />
              }
              aria-label={certificate.name}
              title={certificate.name}
            >
              <div className="pb-2.5">
                <h3 className="text-sm">Granted by</h3>
                <h3 className="font-bold">{certificate.granted}</h3>
              </div>
              <div className="pb-2.5">
                <h3 className="text-sm">Certificate ID</h3>
                <h3 className="font-bold">{certificate.id}</h3>
              </div>
              <div>
                <h3 className="text-sm">Time spent</h3>
                <h3 className="font-bold">{certificate.time}</h3>
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-white button button:hover"
                  onClick={() => window.open(certificate.url)}
                >
                  Open certificate
                </button>
              </div>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default Certificates;
