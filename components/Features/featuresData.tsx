import { Feature } from "@/types/feature";
import { FaExchangeAlt } from "react-icons/fa";
import { IoSpeedometerOutline } from "react-icons/io5";
import { LiaMoneyBillSolid } from "react-icons/lia";

export const featuresData: Feature[] = [
  {
    id: 1,
    icon: <FaExchangeAlt className="size-[20px] text-white" />,
    title: "P2P Exchange",
    paragraph:
      "Trade cryptocurrencies directly with other users at fair, real-time rates—no middlemen or hidden fees. Our P2P system ensures secure, transparent, and flexible transactions, giving you full control.",
  },
  {
    id: 1,
    icon: <IoSpeedometerOutline className="size-[24px] text-white" />,
    title: "Fast and Secure Transactions",
    paragraph:
      "At Morbarter, your safety is our priority. All P2P exchange participants undergo KYC verification to ensure a secure and trusted trading environment with verified users.",
  },

  {
    id: 1,
    icon: <LiaMoneyBillSolid className="size-[25px] text-white" />,
    title: "Pay Bills with Cryptocurrencies",
    paragraph: "Use cryptocurrencies to quickly and securely pay bills and purchase utilities like electricity, water, and internet. Enjoy a faster, digital alternative to traditional payment methods."









  },
];
