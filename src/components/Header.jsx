import React from 'react'
import Swal from "sweetalert2/dist/sweetalert2.js";
const packageJson = require('../../package.json');

export default function header() {
  return (
    <header>
      <section className="hero is-link is-medium">
        <div className="hero-body">
          <div className=" text-center">
            <img src="/assets/logo-full-white.png" alt="Inkonfig" width="20%"/>
            <p className="mt-2 title">
              A quick way to configure your Windows device
            </p>
            <p className="is-family-monospace">
              Version {packageJson.version} | Supported: Windows 10, Windows 11 (Beta)
            </p>
            <div className="mt-5">
              {/* TODO: Add docs link here */}
              <a href="#noDocsYet" className="button is-link is-light mr-2" onClick={displayDocsAlert}>
                Documentation
              </a>
              <a href="#noDocsYet" className="button is-warning is-light ml-2" onClick={displayDocsAlert}>
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

function displayDocsAlert() {
  Swal.fire({
    icon: 'info',
    title: 'The docs are not yet ready!',
    text: 'Come back in a few days and try again 😉'
  })
}