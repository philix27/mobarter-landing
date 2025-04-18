"use client";
import LinkButton from "../Common/LinkButton";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Hero() {
  const { theme, setTheme } = useTheme();
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
                className="wow fadeInUp mx-auto mt-5 w-[90%] md:mt-0 md:w-[50%] md:max-w-[50%]"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-6xl md:leading-tight">
                  A better way to
                  <span className="text-primary"> buy & sell crypto </span>
                  at reliable prices
                </h1>
                <p className="dark:text-body-color-dark text-body-color mb-12 text-base !leading-relaxed text-muted sm:text-lg md:text-xl">
                  Empower millions globally with seamless crypto-to-fiat
                  transactions through Mobarter — a simple, free integration
                  that helps you grow your revenue effortlessly.
                </p>
                <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <LinkButton
                    isBlank
                    title="Get started"
                    href="https://t.me/mobarter_bot/app"
                  />
                  {/* <LinkButton title="Buy airtime" mode="secondary" /> */}
                </div>
              </div>
              <div
                className="wow fadeInUp mx-auto mt-8 flex h-[400px] w-[90%] items-center justify-center text-center md:mt-0 md:w-[40%]"
                data-wow-delay=".2s"
              >
                <div className="relative flex h-full w-full items-center justify-center">
                  {/* <iframe
                    src="https://mobarter.vercel.app/swap"
                    className="md:w-[80%] w-full rounded-lg h-full"
                  ></iframe> */}
                  <Image
                    src={"/a1.png"}
                    alt="logo"
                    width={200}
                    height={250}
                    className="bottom-[10px] left-[0px] h-[100%] w-fit md:h-[120%]"
                  />
                  {/* <img
                    src={theme === "dark" ? "/globe.png" : "/globe.png"}
                    alt="logo"
                    className="h-[360px] w-[400px] filter md:h-[360px] md:w-[350px]"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
