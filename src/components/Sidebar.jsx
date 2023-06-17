import React from 'react';
import { toggleChocolateyInput } from '../scripts/inkonfigHelpers';

function Sidebar() {
    return (
        <div className="column is-one-fifth">
            <aside id="inkonfig-sidebar" className="pt-5">
                <p className="menu-label">
                    Inkonfig Wizard
                </p>
                <ul className="menu-list" id="inkonfig-menu">
                    <li className="menu-item">
                        <a href="#personalization">Personalization</a>
                        <ul>
                            <li className="menu-item">
                                <a href="#shellFolders">Shell folders</a>
                            </li>
                            <li className="menu-item">
                                <a href="#contextMenu">Context Menu</a>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-item">
                        <a href="#powerplan">Power Plan</a>
                        <ul>
                            <li className="menu-item">
                                <a href="#onacpower">On AC Power</a>
                            </li>
                            <li className="menu-item">
                                <a href="#onbatterypower">On Battery Power</a>
                            </li>
                        </ul>
                    </li>

                    <li className="menu-item">
                        <a href="#software" className="menu-item-header">
                            Software
                        </a>
                        <ul>
                            <li className="menu-item">
                                <a href="#bloatwareAndAds">Bloatware and Ads</a>
                            </li>
                            <li className="menu-item">
                                <a href="#wsl">Windows Subsystem for Linux (WSL)</a>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-item">
                        <a href="#advancedConfiguration">Advanced Configuration</a>
                    </li>
                    <li className="menu-item">
                        <a href="#scriptOptions">Script options</a>
                    </li>
                </ul>
                <div className="container sidebar-buttons mt-5">
                    <button
                        type="submit"
                        id="generateButton"
                        className="button is-info is-fullwidth is-loading"
                    >
                        Generate Script
                    </button>
                    <br></br>
                    <button
                        type="button"
                        className="button is-danger is-inverted is-fullwidth"
                        id="generateButton"
                        onClick={clearForm}
                    >
                        Reset
                    </button>
                </div>
            </aside>
        </div>
    )
}

function clearForm() {
    document.querySelector("#form").reset();
    toggleChocolateyInput();
}

export default Sidebar;