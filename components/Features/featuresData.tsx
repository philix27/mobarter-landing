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
      "Exchange cryptocureencies at a fair exchange rate provided by the market.",
  },
  {
    id: 1,
    icon: <IoSpeedometerOutline className="size-[24px] text-white" />,
    title: "Quick and Reliable",
    paragraph:
      "We ensure all participants of the p2p exchange have undergone kyc verification to minimize fraud.",
  },

  {
    id: 1,
    icon: <LiaMoneyBillSolid className="size-[25px] text-white" />,
    title: "Pay Bills",
    paragraph: "Use crypto currencies to pay bills and purchase utilities.",
  },
];
