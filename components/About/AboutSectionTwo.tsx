import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { ReactNode } from "react";

export default function AboutSectionTwo() {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/exchange.jpg"
                alt="about image"
                fill
                className="drop-shadow-three dark:drop-shadow-none"
              />
             
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <SectionTitle
                  title=" P2P exchange"
                  paragraph="An open market place to exchange your assets"
                  mb="44px"
                />
              </div>
              <div className="mb-9">
                <Subheading> Fair Rates</Subheading>
                <Paragraph>
                 Select from the pool of vendors who has a fair price offering.
                </Paragraph>
              </div>
              <div className="mb-1">
                <Subheading>Quick and Trust worthy</Subheading>
                <Paragraph>
                  KYC verification must be done before participating in an exchange, 
                  to make the platform a reliable place resistance to money laundering.
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Subheading(props: { children: ReactNode }) {
  return (
    <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
      {props.children}
    </h3>
  );
}

function Paragraph(props: { children: ReactNode }) {
  return (
    <p className="text-body-color font-light leading-relaxed sm:text-lg sm:leading-relaxed">
      {props.children}
    </p>
  );
}
