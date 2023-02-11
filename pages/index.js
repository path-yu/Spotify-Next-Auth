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
    axios("/api/callback", {
      method: "get",
      params: {
        code: code || null,
        redirect_uri,
      },
    }).then((res) => {
      if (res.data.code == 400) {
        router.push("/fail");
      } else {
        console.log("跳转到成功页面!");
        location.href =
          location.origin +
          `/success?refresh_token=${res.data.refresh_token}&access_token=${res.data.access_token}`;
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
