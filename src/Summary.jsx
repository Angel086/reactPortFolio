import React from "react";
import './App.css'

export default function Summary(){
    return(<>
        <section id="mysum-sec">
      <div id="mysum">
        <h2>Summary</h2>
        <p>
          FrontEnd/FullStack engineer, with Experience in cyber, scripting and
          much more. Graduated from CSU Chico,
        </p>
        <a href="#">Resume</a>
      </div>
    </section>

    <section className="skills">
      <h2>Skills</h2>
      <p>
        <strong>Languages:</strong> C++,C , Python, JavaScript, HTML, CSS,
        Bash<br />
      </p>
      <p>
        <strong>Frameworks/Tech:</strong> React, Bootstrap, Docker, Django,
        MongoDB, SQL, Git, Google Cloud, Supabase, Vercel<br />
      </p>
      <p>
        <strong>Security:</strong> Kali Linux, Wireshark, VirtualBox,
        Forensics<br />
      </p>
      <p>
        <strong>Languages Spoken:</strong> English (Native), Spanish (Native)
      </p>
    </section></>);
};