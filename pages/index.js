import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  let redirect_uri =
    router.query.redirect_uri || "https://spotify-next-auth-blue.vercel.app/";
  useEffect(() => {
    let search = new URLSearchParams(location.search);
    let code = search.get("code");
    axios("/api/callback", {
      method: "post",
      data: {
        code: code || null,
        redirect_uri,
      },
    }).then((res) => {
      console.log(res);
      if (res.data.code == 400) {
        router.push("/fail");
      }
      router.push("/success", {
        query: {
          refresh_token: res.data.refresh_token,
          access_token: res.data.access_token,
        },
      });
    });
  }, []);
  return (
    <div className="spin">
      <svg className="loading" id="loading" viewBox="22 22 44 44">
        <circle
          className="circle"
          cx="44"
          cy="44"
          r="20.2"
          fill="none"
          strokeWidth="3.6"
        ></circle>
      </svg>
    </div>
  );
}
