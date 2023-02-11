import Button, { ButtonProps } from "@mui/material/Button";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

import { styled } from "@mui/material/styles";
export default function Success() {
  const btn = useRef();
  const route = useRouter();
  const handleClick = () => {
    let query = new URLSearchParams(location.search);
    let refresh_token = query.get("refresh_token");
    let access_token = query.get("access_token");
    if (refresh_token && access_token) {
      window.location.href =
        location.origin +
        `/center?refresh_token=${refresh_token}&access_token=${access_token}`;
    }
    1;
  };
  return (
    <div>
      <Button size="large" ref={btn} variant="text" onClick={handleClick}>
        Back App
      </Button>
    </div>
  );
}
