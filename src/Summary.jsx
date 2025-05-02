import React from "react";
import "./App.css";
import resume from "./assets/AngelResume25.pdf";

export default function Summary() {
  return (
     <div >
      <section id="mysum-sec" >
       
        <h1 style={{fontWeight:"bolder"}}>Angel Marquez</h1>
        <div id="mysum">
          <h2>Summary</h2>
          <p>
            FrontEnd engineer, with Experience in cyber, scripting and much more. Graduated from CSU Chico.
          </p>
          <a style={{display:"flex", width:"60px",fontWeight:"bolder"}} href={resume}>Resume</a>
        </div>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <p>
          <strong>Languages:</strong> C++,C , Python, JavaScript, HTML, CSS,
          Bash
          <br />
        </p>
        <p>
          <strong>Frameworks/Tech:</strong> React, Bootstrap, Docker, Django,
          MongoDB, SQL, Git, Google Cloud, Supabase, Vercel
          <br />
        </p>
        <p>
          <strong>Security:</strong> Kali Linux, Wireshark, VirtualBox,
          Forensics
          <br />
        </p>
        <p>
          <strong>Languages Spoken:</strong> English (Native), Spanish (Native)
        </p>
      </section>
    </div>
  );
}
