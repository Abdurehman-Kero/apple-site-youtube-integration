import { useEffect, useState } from "react";

const YoutubeVideos = () => {
  const [appleVideos, setAppleVideos] = useState([]);

  useEffect(() => {
    const getAppleVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=AIzaSyA1T8kDTy54k-UGGupth3sGrqdTNt2l7Po&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet&order=date&maxResults=9&type=video`
        );
        const data = await response.json();
        setAppleVideos(data?.items);
      } catch (error) {
        console.error(error);
      }
    };

    getAppleVideos();
  }, []);

  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper bold video-title-wrapper">
              Latest Videos
            </div>
          </div>

          {appleVideos?.map((singleVideo, i) => {
            const vidId = singleVideo?.id.videoId; 

            const vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            const thumbUrl =
              singleVideo?.snippet.thumbnails.high.url || 
              "";
            const title = singleVideo?.snippet.title || "Untitled video";
            const description =
              singleVideo?.snippet.description || "No description";

            return (
              <div key={vidId} className="col-sm-12 col-md-4">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank" >
                      <img src={thumbUrl} alt={title} />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a
                        href={vidLink}
                        target="_blank" 
                      >
                        {title}
                      </a>
                    </div>
                    <div className="videoDesc">{description}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default YoutubeVideos;
