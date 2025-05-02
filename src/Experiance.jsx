import React from "react";

export default function Experience() {
  return (
    <section id="Experience">
      <div className="myExper">
        <h2 className="ExperienceSec">Experience</h2>

        <div className="mycard xp1">
          <h3 id="XPtitle">Assistant Programmer</h3>
          <h4 id="subTxt">California State University, Chico</h4>
          <p id="xpSen">
            Built a secure password generator in C++ used for internal tools. Created tutorials to help fellow students understand key concepts.
          </p>
        </div>

        <div className="mycard xp2">
          <h3>Mentee at CrowdStrike</h3>
          <h4 id="subTxt">CrowdStrike + NCL</h4>
          <p id="xpSen">
            Participated in a digital forensics mentorship. Investigated a compromised virtual machine, identified attack vectors, and compiled a detailed report. Monthly sessions included Q&A with cybersecurity experts.
          </p>
        </div>

        <div className="mycard xp3">
          <h3>Soccer Coach</h3>
          <h4 id="subTxt">Kidz Love Soccer</h4>
          <p id="xpSen">
            Coached youth teams across multiple locations. Focused on skill-building, teamwork, and communication. Maintained parent correspondence and managed weekly scheduling.
          </p>
        </div>
      </div>
    </section>
  );
}
