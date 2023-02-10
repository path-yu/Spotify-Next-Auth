import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    axios("/api/callback", {
      method: "post",
      data: {
        code: router.query.code || null,
        redirect_uri: router.query.redirect_uri || "https://spotify-next-auth-blue.vercel.app/",
      },
    }).then((res) => {
      if (res.data.code == 400) {
        location.href = `https://accounts.spotify.com/authorize?response_type=code&client_id=ba7d6d4a56644b198aa47bb9d88cfc17&redirect_uri=${router.query.redirect_uri}`;
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
