import React from "react";

const sizes = {
  xs: "text-sm font-medium",
  lg: "text-lg font-normal",
  s: "text-[15px] font-medium",
  xl: "text-xl font-medium",
  md: "text-base font-medium",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900_01 font-nunito ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
