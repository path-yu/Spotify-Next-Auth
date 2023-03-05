let client_id = "ba7d6d4a56644b198aa47bb9d88cfc17";
let client_secret = "a348122d48eb46ae94fb2eee5d8cf2a6";
import request from "request";

export default function handler(req, res) {
  let refresh_token = req.query.refresh_token;
  let authOptions = {
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization:
        "Basic " +
        new Buffer(client_id + ":" + client_secret).toString("base64"),
    },
    form: {
      grant_type: "refresh_token",
      refresh_token: refresh_token,
    },
    json: true,
  };

  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      res.send({
        access_token: access_token,
      });
    } else {
      res.send({ error: "invalid_token", code: 400 });
    }
  });
}
