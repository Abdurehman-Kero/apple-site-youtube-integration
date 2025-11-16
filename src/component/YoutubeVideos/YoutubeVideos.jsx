import React, { useEffect, useState } from "react";

const YoutubeVideos = () => {
  const [appleVideos, setAppleVideos] = useState([]);
  useEffect(() => {
    const getAppleVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=AIzaSyA1T8kDTy54k-UGGupth3sGrqdTNt2l7Po&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet&order=date&maxResults=9&type=video `
        );
        const data = await response.json();
        setAppleVideos(data?.items);
      } catch (error) {
        console.error(error);
      }
    };
    getAppleVideos();
  }, []);
  console.log(appleVideos);
  return (
    <>
      <h1>Latest Apple video</h1>
      {
        appleVideos?.map((singleVideo)=>{
            return <h1>{singleVideo.snippet.title}</h1>
        })
      }
    </>
  );
};

export default YoutubeVideos;
