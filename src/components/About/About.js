import React from "react";
import "./about.scss";

const About = (props) => {
  return (
    <div>
      <h1 className="aboutTitle">
        Meet the <span className="highlight">Plantie</span> team!{" "}
      </h1>
      <h1>🍃</h1>
      <br></br>

      <div className="teamCotainer">
        <div className="monica">
          <img src="https://res-console.cloudinary.com/dnfumu7j3/thumbnails/transform/v1/image/upload/Y19zY2FsZSx3XzIwMA==/v1622145470/UGxhbnRpZSB0ZWFtLzY5RURCMEU1LUIxMUItNERBMy1BOEEwLTVFODBGNTM0QUQ3MF8xXzEwNV9jX3V6c2J6bQ==/template_primary" />
          <h2>Monica</h2>
        </div>

        <div className="jerrald">
          <img src="https://res-console.cloudinary.com/dnfumu7j3/thumbnails/transform/v1/image/upload/Y19zY2FsZSxxXzEwMCx3XzIwMA==/v1622145154/UGxhbnRpZSB0ZWFtL3NsYWNrLWltZ3MuY29tX2g0bmZkNA==/template_primary" />
          <h2>Jerald</h2>
        </div>
        <div className="tony">
          <img src="https://res-console.cloudinary.com/dnfumu7j3/thumbnails/transform/v1/image/upload/Y19zY2FsZSxxXzEwMCx3XzIwMA==/v1622145894/UGxhbnRpZSB0ZWFtL1QwMzUxSlpRMC1VMDFRTEpNTEJSVC1kZTg5MWVmYWVmNWQtNTEyX2tpYTh2dA==/template_primary" />
          <h2>Tony</h2>
        </div>
        <div className="joe">
          <img src="https://res-console.cloudinary.com/dnfumu7j3/thumbnails/transform/v1/image/upload/Y19zY2FsZSxxXzEwMCx3XzIwMA==/v1622146135/UGxhbnRpZSB0ZWFtLzE2MDcwMjY5OTUyMjFfbmZlYjlx/template_primary" />
        <h2>Joe</h2>
              </div>
      </div>
    </div>
  );
};

export default About;
