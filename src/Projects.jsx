import React from "react";
import extReadIt from "./assets/ExtReadIt.png";
import portfolio from "./assets/portfolio.png";
import underDev from "./assets/under-construction-warning-sign.jpg";
import "./App.css";
export default function Projects() {
  return (
    <>
      {" "}
      <section id="proj-sec">
        <h2>Projects</h2>
        <div className="mycontainer">
          <div className="project p1">
            <h3
              className="projTitle"
            >
              ReadIT
            </h3>
            <img id="pic" src={extReadIt} alt="Image of a google extension" />
            <p className="projsen">
              A Chrome extension that reads Reddit posts and comments aloud,
              summarizes them with ChatGPT, and lets users pick custom voices.
            </p>

            <div className="Tech">
              <p>Tech: JS, HTML,CSS, Vercel, Render,OpenAI</p>
            </div>
          </div>
          <div className="project p2">
            <h3
              className="projTitle"
            >
              ReadIT Web
            </h3>
            <img id="pic" src={underDev} alt="Image of construction" />

            <p className="projsen">
              A web version of ReadIT using React and ElevenLabs. Offers post
              playback, voice customization, GPT summaries, and playlist
              creation.
            </p>

            <div className="Tech">
              <p>Tech: React,Vercel,Render,OpenAI, Supabase</p>
            </div>
          </div>

          <div className="project p3">
            <h3
              className="projTitle"
            >
              Portfolio
            </h3>
            <img id="pic" src={portfolio} alt="Image of personal portfolio" />
            <p className="projsen">
              A responsive portfolio site showcasing my skills and projects.
              Designed, developed, and deployed with a custom layout.
            </p>

            <div className="Tech">
              <p>Tech: JS,HTML,CSS,Vercel</p>
            </div>
          </div>

          <div className="project p4">
            <h3
              className="projTitle"  
            >
              MusicMirror
            </h3>
            <img id="pic" src={underDev} alt="Image of construction" />
            <p className="projsen">
              A cross-platform music app that pulls content from Spotify,
              YouTube, and BiliBili, enabling multi-source playlist creation and
              discovery.
            </p>

            <div className="Tech">
              <p>Tech : React, API, supabase, vercel</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
