const GOOGLE_API_KEY = "AIzaSyA1XOE5eVU8GICR8_txi24KeBIYq8hlVd8";

//const CORS_REMOVER="https://thingproxy.freeboard.io/fetch/"

export const OFFSET_LIVE_CHAT = 25;

const CORS_REMOVER="https://thingproxy.freeboard.io/fetch/"

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = CORS_REMOVER + 
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
