import React, { useEffect, useState } from "react";
import Auth from "./Auth";
import SpotifyWebApi from "spotify-web-api-node";
import Main from "../Main";
//import { Redirect } from "react-router-dom";

// Setting the spotifyApi, so that we can use it's functions
const spotifyApi = new SpotifyWebApi({
  clientId: "7b215911d14245089d73d78055353cb2",
});

const Dashboard = ({ code }) => {
  let accessToken = (code !== undefined) ? Auth(code) : sessionStorage.getItem("code");
  const [data, setData] = useState();

  if(code !== undefined){
    sessionStorage.setItem("code", accessToken);
  }

  useEffect(() => {
    if (!accessToken) return;

    // Setting Up the spotifyApi with AccessToken so that we can use its functions anywhere in the component without setting AccessToken value again & again. 
    spotifyApi.setAccessToken(accessToken);

    // Get user details with help of getMe() function
    spotifyApi.getMe().then(data => {
      console.log(data);
      setData(data)
    })
  }, [accessToken]);

  return (
    <div>
      <Main token={accessToken} data={data} />      
    </div>
  );
};

export default Dashboard;
