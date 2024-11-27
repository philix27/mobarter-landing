import Link from "next/link";
import React from "react";

export default function LinkButton(props: {
  title: string;
  href?: string;
  mode?: "primary" | "secondary";
}) {
  return (
    <Link
      href={props.href || "#"}
      className={"hover:bg-primary/80 rounded-md px-8 py-2 text-base font-semibold text-white duration-300 ease-in-out".concat(
        " ",
        props.mode === "secondary" ? "bg-secondary" : "bg-primary",
      )}
    >
      {props.title}
    </Link>
  );
}
