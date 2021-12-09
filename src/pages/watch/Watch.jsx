import { ArrowBackOutlined } from "@material-ui/icons";
import React from "react";
import "./watch.scss";

function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://vod-progressive.akamaized.net/exp=1639046748~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2529%2F23%2F587646749%2F2772470317.mp4~hmac=9695033f8475f6f08995a765c3a92cc00d7bf48bae1979c9bc310cdd78e0e20a/vimeo-prod-skyfire-std-us/01/2529/23/587646749/2772470317.mp4?filename=Road+-+84970.mp4"
      ></video>
    </div>
  );
}

export default Watch;
