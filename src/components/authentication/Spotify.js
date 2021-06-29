const authEndpoint = "https://accounts.spotify.com/authorize";
//const redirectUri = "http://localhost:3000/";
const redirectUri = "https://upbeat-mccarthy-2f56f2.netlify.app/"
const clientId = "c48fdc544c2249149f80f4d79ab3ffe4";

const scopes = [
  "streaming",
  "user-read-email",
  "user-read-private",
  "user-top-read",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}`;

// loginUrl = "https://accounts.spotify.com/authorize?client_id=YourClientId&response_type=code&redirect_uri=https://localhost:3000/&scope=streaming%20user-read-email%20user-read-private"

