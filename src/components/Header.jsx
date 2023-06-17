import React from 'react'
const packageJson = require('../../package.json');

export default function header() {
  return (
    <header>
      <section className="hero is-link is-medium">
        <div className="hero-body">
          <div className=" text-center">
            <img src="/assets/logo-full-white.png" alt="Inkonfig" width="20%"/>
            <p className="mt-2 title">
              Windows configuration script generator
            </p>
            <p className="is-family-monospace">
              Version {packageJson.version} | Supported: Windows 11, Windows 10
            </p>
            <div className="mt-5">
              <a href="https://inkonfigdocs.hexandcube.eu.org" className="button is-primary is-light mr-2">
                Documentation
              </a>
              <a href="https://github.com/hexandcube/Inkonfig/" className="button is-link is-light ml-2">
                Source Code
              </a> 
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
