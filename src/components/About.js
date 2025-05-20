import React from "react";

function About() {
  document.title = "About - YT Playlist Duration Calculator";
  return (
    <div className=" h-full p-4 flex flex-col justify-center items-center text-center">
      <h1 className="font-bold text-4xl m-6">About the Site</h1>
      <p className="m-7 p-2 md:p-5 text-lg font-serif">
      The YouTube Playlist Duration Calculator, built with React JS, helps users determine the total duration of YouTube playlists at various playback speeds.<br/> It offers accurate, flexible calculations and an intuitive interface.
      </p>
    </div>
  );
}

export default About;