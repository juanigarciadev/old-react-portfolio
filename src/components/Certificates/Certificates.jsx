import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";
import React from "react";
import certificates from "../../maps/certificates";
import { RxExternalLink } from "react-icons/rx";

const Certificates = () => {
  return (
    <>
      <div>
        <Accordion
          className="flex justify-center items-center"
          variant="splitted"
        >
          {certificates.map((certificate) => {
            return (
              <AccordionItem
                className="w-full duration-200"
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
                <section className="pb-2.5">
                  <h3 className="text-sm">Granted by</h3>
                  <p className="font-bold">{certificate.granted}</p>
                </section>
                <section className="pb-2.5">
                  <h3 className="text-sm">Certificate ID</h3>
                  <p className="font-bold">{certificate.id}</p>
                </section>
                <section>
                  <h3 className="text-sm">Time spent</h3>
                  <p className="font-bold">{certificate.time}</p>
                </section>
                <section className="flex justify-end">
                  <button
                    className="button button:hover mb-2.5 gap-1"
                    onClick={() => window.open(certificate.url)}
                  >
                    View certificate
                    <RxExternalLink />
                  </button>
                </section>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </>
  );
};

export default Certificates;
