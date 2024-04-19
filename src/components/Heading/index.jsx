import React from "react";

const sizes = {
  xl: "text-2xl font-semibold md:text-[22px]",
  s: "text-base font-bold",
  md: "text-lg font-bold",
  xs: "text-[15px] font-semibold",
  lg: "text-xl font-semibold",
};

const Heading = ({ children, className = "", size = "lg", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900_01 font-nunito ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
