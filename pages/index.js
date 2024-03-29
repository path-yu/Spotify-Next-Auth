import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
export default function Home() {
  const router = useRouter();
  let redirect_uri =
    router.query.redirect_uri || "https://spotify-next-auth-blue.vercel.app";
  useEffect(() => {
    let search = new URLSearchParams(location.search);
    let code = search.get("code");
    let scope = search.get("scope") || "user-library-read user-library-modify";
    axios("/api/callback", {
      method: "get",
      params: {
        code: code || null,
        redirect_uri,
        scope,
      },
    }).then((res) => {
      if (res.data.code == 400) {
        router.push("/fail");
      } else {
        location.href =
          location.origin +
          `/success?refresh_token=${res.data.refresh_token}&access_token=${res.data.access_token}&expires_in=${res.data.expires_in}`;
      }
    });
  }, []);
  return (
    <CircularProgress
      size={60}
      thickness={4}
      sx={{
        color: "#1BC458",
      }}
    />
  );
}
