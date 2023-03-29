/* eslint-disable react/jsx-no-target-blank */
import Button from "@mui/material/Button";
import { useEffect, useRef, useState } from "react";

export default function Success() {
  const btn = useRef();
  const [href, setHref] = useState("");
  useEffect(() => {
    let query = new URLSearchParams(location.search);
    let refresh_token = query.get("refresh_token");
    let access_token = query.get("access_token");
    let  expires_in = query.get('expires_in');
    if (refresh_token && access_token) {
      setHref(
        location.origin +
          `/center?refresh_token=${refresh_token}&access_token=${access_token}&expires_in=${expires_in}`
      );
    }
  }, []),
    [];
  return (
    <div>
      <Button size="large" ref={btn} variant="text">
        <a
          target="_blank"
          href={href}
          style={{ textDecoration: "none", color: "#1BC458" }}
        >
          Open in App
        </a>
      </Button>
    </div>
  );
}
