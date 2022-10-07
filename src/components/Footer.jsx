import React from 'react';
const packageJson = require("../../package.json");

export default function Footer() {
  return (
    <footer className="level p-6 footer mt-6">
      <div className="level-left">
        <div>
          <img
            src="/assets/logotype-white.png"
            alt="Inkonfig"
            width="200vw"
            className="ml-2"
          />
          <p className="ml-2 mt-1">
            Version {packageJson.version} by&nbsp;
            <a href="https://hexandcube.eu.org" className="link">
              Hexandcube
            </a>
            <br></br>
            Powered by <a className="link" href="https://netlify.com/?ref=inkonfig">Netlify</a>
          </p>
        </div>
      </div>
      <div className="level-right has-text-right">
        <div>
            <p>
              Windows&reg;, Windows 10&reg; and Windows 11&reg; are registered
              trademarks
              <br></br> of Microsoft Corporation in the United States and other
              countries.
            </p>
        </div>
      </div>
    </footer>
  );
}
