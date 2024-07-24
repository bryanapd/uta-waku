import React, { Fragment, ReactNode } from "react";
import Image from "next/image";
import classNames from "classnames";

import { HeaderProps, BrandProps, LinksProps } from "@/app/_types/header";

export const AppHeader = ({ children }: HeaderProps) => (
  <div className="border-t-2 border-transparent fixed top-0 w-full z-100 p-1">
    <div className="container mx-auto">
      <div className="flex flex-row justify-between">{children}</div>
    </div>
  </div>
);

export const AppSpacer = () => <div className="h-[72px]" />;

export const AppBrand = ({
  logo,
  title,
  alt,
  width,
  height,
  onMenuClick,
}: BrandProps) => (
  <div className="flex w-full md:w-auto min-h-[50px] overflow-hidden">
    <a href="/" className="pr-5 cursor-pointer">
      {logo ? (
        <Image
          src={logo}
          alt={alt}
          width={width}
          height={height}
          className="w-[60px] h-[60px] rounded-xl"
        />
      ) : (
        <h1 className="text-lg">{title}</h1>
      )}
    </a>
    <div className="flex-grow" />
    <button className="flex md:hidden bg-transparent mr-0">Burger</button>
  </div>
);

export const AppLinks = ({
  isOpen,
  onOpen,
  onClose,
  routes = [],
  direction = "row",
  children,
}: LinksProps) => (
  <div
    className={classNames("flex items-center md:flex", {
      "flex-col flex": direction === "column",
      "flex-row hidden": direction !== "column",
    })}
  >
    {routes.map((route, rId) =>
      route.isDivider ? (
        <div
          key={route.key}
          className={classNames("border self-center", {
            "border-l h-[30px]": direction === "row",
            "border-t w-full": direction !== "row",
          })}
        />
      ) : route.render ? (
        <Fragment key={rId}>{route.render()}</Fragment>
      ) : (
        <a href={route.path} key={rId}>
          <button className="mx-10">{route.label}</button>
        </a>
      )
    )}
    {children}
  </div>
);
