import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";
import React from "react";
import certificates from "../../../certificates";
import { RxExternalLink } from "react-icons/rx";

const Certificates = () => {
  return (
    <>
      <div className=" w-full pb-10">
        <Accordion
          className="flex justify-center items-center"
          variant="splitted"
        >
          {certificates.map((certificate) => {
            return (
              <AccordionItem
                className="w-1/2 2xl:w-1/2 xl:w-1/2 lg:w-5/6 md:w-5/6 sm:w-5/6 duration-200"
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
                    className="button button:hover mb-2.5 gap-1"
                    onClick={() => window.open(certificate.url)}
                  >
                    View certificate
                    <RxExternalLink />
                  </button>
                </div>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </>
  );
};

export default Certificates;
