import Button from "@mui/material/Button";
import { useEffect, useRef, useState } from "react";

export default function Success() {
  const btn = useRef();
  const [href, setHref] = useState("");
  useEffect(() => {
    let query = new URLSearchParams(location.search);
    let refresh_token = query.get("refresh_token");
    let access_token = query.get("access_token");
    if (refresh_token && access_token) {
      setHref(
        location.origin +
          `/center?refresh_token=${refresh_token}&access_token=${access_token}`
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
          rel="noreferrer"
        >
          Open in App
        </a>
      </Button>
    </div>
  );
}
