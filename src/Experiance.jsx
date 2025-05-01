import React from "react";

export default function Experiance(){
    return(<section id="Experience">
      <div className="myExper" >
        <h2 className="ExperienceSec">Experience:</h2>
        <div className="mycard xp1">
          <h3 id="XPtitle">Assistant Programmer</h3>
          <h4 id="subTxt">Califronia State University Chico</h4>
          <p id="xpSen">
            Developed a password generator in C++. Later used to make tutorial
            for fellow alumnia, covering various concepts.
          </p>
        </div>

        <div className="mycard xp2">
          <h3>Mentee At CrowdStrike</h3>
          <h4 id="subTxt">CrowdStrike and NCL</h4>
          <p id="xpSen">
            Was a mentee with CrowdStrike, given an image of a compromised
            machine. Tasked, to examine artifacts, what was modified, Tech used,
            paths taken, and give a report of the findings. Once a month, would
            have a meeting with cyber experts, ask any questions, either in
            regard to the task, hints or what it's like to work in the fild.
          </p>
        </div>

        <div className="mycard xp3">
          <h3>Soccer Coach</h3>
          <h4 id="subTxt">Kidz Love Soccer</h4>
          <p id="xpSen">
            Managed and trained a local youth groups in various locations,
            teaching them team work, rules of the game and nurtuer their skills.
            As well, communicate with parents in regard to any changes occuring
            the week or possible cancelations.
          </p>
        </div>
      </div>
    </section>);
};