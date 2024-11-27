import Link from "next/link";
import LinkButton from "../Common/LinkButton";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full flex-col gap-y-4 px-4 md:flex md:flex-row md:gap-x-5">
              <div
                className="wow fadeInUp mx-auto mt-5 w-[90%]  md:mt-0 md:w-[50%] md:max-w-[50%]"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Empower users to{" "}
                  <span className="text-primary">buy & sell crypto</span> inside
                  your app
                </h1>
                <p className="dark:text-body-color-dark text-body-color mb-12 text-muted text-base !leading-relaxed sm:text-lg md:text-xl">
                  Give millions of users worldwide a direct connection between
                  crypto and fiat, and boost your revenue with one simple, free
                  integration.
                </p>
                <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <LinkButton title="Buy & Sell Crypto" />
                  <LinkButton title="Buy airtime" mode="secondary" />
                </div>
              </div>
              <div
                className="wow fadeInUp mx-auto mt-5 w-[90%] text-center md:mt-0 md:w-[40%]"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/hero/borrow.png"
                  alt="logo"
                  width={140}
                  height={150}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
