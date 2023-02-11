let client_id = "ba7d6d4a56644b198aa47bb9d88cfc17";
let client_secret = "a348122d48eb46ae94fb2eee5d8cf2a6";
import request from "request";

export default function handler(req, res) {
  let code = req.query.code || null;
  let redirect_uri = req.query.redirect_uri;
  var authOptions = {
    url: "https://accounts.spotify.com/api/token",
    form: {
      code: code,
      redirect_uri: redirect_uri,
      grant_type: "authorization_code",
    },
    headers: {
      Authorization:
        "Basic " +
        new Buffer(client_id + ":" + client_secret).toString("base64"),
    },
    json: true,
  };

  request.post(authOptions, (error, response, body) => {
    res.send(body);
  });
}
