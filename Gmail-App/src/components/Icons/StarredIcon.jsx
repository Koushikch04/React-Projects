import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

const StarredIcon = () => {
  return (
    <SvgIcon style={{ display: "block", margin: "auto" }}>
      <svg
        viewBox="0 0 91 91"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: "scale(1.35)",
        }}
      >
        <path fill="none" d="M0 0h50v50H0z"></path>
        <path
          d="M69.116 40.930H53.119l-5.529-16.83a1.7 1.7 0 0 0-3.23 0l-5.529 16.83H22.834a1.698 1.698 0 0 0-.986 3.084l12.943 9.213-5.213 15.869a1.702 1.702 0 0 0 .607 1.9 1.704 1.704 0 0 0 1.994.016l13.795-9.822 13.797 9.822a1.704 1.704 0 0 0 1.993-.016 1.701 1.701 0 0 0 .608-1.9L57.16 53.222l12.941-9.213a1.698 1.698 0 0 0-.985-3.084zM54.168 51.179a1.703 1.703 0 0 0-.629 1.916l3.988 12.141-10.566-7.521a1.693 1.693 0 0 0-1.972 0l-10.565 7.521 3.989-12.141a1.7 1.7 0 0 0-.63-1.916l-9.629-6.855h11.908c.735 0 1.386-.471 1.615-1.168l4.298-13.084 4.299 13.084a1.7 1.7 0 0 0 1.615 1.168h11.908l-9.629 6.855z"
          fill="#157efb"
          class="fill-000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="1"
        ></path>
      </svg>
    </SvgIcon>
  );
};

export default StarredIcon;
