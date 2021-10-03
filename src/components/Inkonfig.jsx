import React from 'react';
import Sidebar from './Sidebar';
import generateScript from '../scripts/inkonfigGenerate';
import {TextField, Dropdown, Checkbox, Textbox} from '../components/Fields';
import {Title, Subtitle} from '../components/Titles';
import {toggleChocolateyInput, preventSpaces} from '../scripts/inkonfigHelpers';
import VanillaScrollspy from 'vanillajs-scrollspy';
import Swal from "sweetalert2/dist/sweetalert2.js";

export default function Inkonfig() {

  return (
    <form
      id="form"
      onSubmit={(e) => {
      generateScript(e);
    }}
      className="InkonfigWizard p-6">
      <div className="columns">
        <Sidebar/>
        <div className="column ml-5">
          <div id="personalization">
            <Title>
              Personalization
            </Title>

            <TextField
              label="Change the name of your PC"
              name="pcName"
              placeholder="Max. 15 characters long. Can't contain the following characters: ` ~ ! @ # $ % ^ &amp; * ( ) = + _ [ ] { } \ | ; : . ' &quot; , &lt; &gt; / ?."
              maxLength="15"
              pattern="^(?![0-9]{1,15}$)[a-zA-Z0-9-]{1,15}$"
              onKeyDown={preventSpaces}
              optional
              isNotColumn/>

            <div className="columns">

              <Dropdown
                label="Common File Extensions:"
                name="showFileExt"
                trueText="Shown"
                falseText="Hidden"
                systemDefault="false"/>

              <Dropdown label="Hibernation:" name="enableHibernation" systemDefault="false"/>

              <Dropdown
                label="Seconds in the taskbar clock:"
                name="showSecondsInTaskbarClock"
                systemDefault="false"
                trueText="Shown"
                falseText="Hidden"/>

            </div>
            <div className="columns">

              <Dropdown
                label="Require CTRL + ALT + DEL to login:"
                name="enableCtrlAltDelToLogin"
                systemDefault="false"/>

              <Dropdown
                label="Verbose logon messages:"
                name="enableVerboseLogon"
                systemDefault="false"/>

              <Dropdown
                label="Open Explorer to:"
                name="launchExplorerTo"
                trueText="Quick Access"
                trueValue="quickaccess"
                falseText="This PC"
                falseValue="thispc"
                systemDefault="true"/>

            </div>
            <fieldset>
              <Subtitle>Shell Folders</Subtitle>
              <div className="columns" id="shellFolders">
                <TextField
                  label="Documents"
                  name="shellDocumentsLocation"
                  placeholder="C:\Users\User\Documents"
                  pattern='^[a-zA-Z]:\\(((?![<>:"/\\|?*]).)+((?<![ .])\\)?)*$'
                  onKeyDown={preventSpaces}
                  optional/>

                <TextField
                  label="Pictures"
                  name="shellPicturesLocation"
                  placeholder="C:\Users\User\Pictures"
                  pattern='^[a-zA-Z]:\\(((?![<>:"/\\|?*]).)+((?<![ .])\\)?)*$'
                  onKeyDown={preventSpaces}
                  optional/>

                <TextField
                  label="Videos"
                  name="shellVideosLocation"
                  placeholder="C:\Users\User\Videos"
                  pattern='^[a-zA-Z]:\\(((?![<>:"/\\|?*]).)+((?<![ .])\\)?)*$'
                  onKeyDown={preventSpaces}
                  optional/>
              </div>
              <div className="columns">
                <TextField
                  label="Music"
                  name="shellMusicLocation"
                  placeholder="C:\Users\User\Music"
                  pattern='^[a-zA-Z]:\\(((?![<>:"/\\|?*]).)+((?<![ .])\\)?)*$'
                  onKeyDown={preventSpaces}
                  optional/>

                <TextField
                  label="Desktop"
                  name="shellDesktopLocation"
                  placeholder="C:\Users\User\Desktop"
                  pattern='^[a-zA-Z]:\\(((?![<>:"/\\|?*]).)+((?<![ .])\\)?)*$'
                  onKeyDown={preventSpaces}
                  optional/>

                <TextField
                  label="Downloads"
                  name="shellDownloadsLocation"
                  placeholder="C:\Users\User\Downloads"
                  pattern='^[a-zA-Z]:\\(((?![<>:"/\\|?*]).)+((?<![ .])\\)?)*$'
                  onKeyDown={preventSpaces}
                  optional/>
              </div>
            </fieldset>
          </div>
          <Title>Software</Title>
          <div id="software">
            <Checkbox
              label="Install software using Chocolatey"
              name="installSoftware"
              onClick={toggleChocolateyInput}/>

            <div id="chocolateyInput" className="is-hidden">
              <Checkbox
                label="I already have the Chocolatey Package Manager Installed"
                name="dontInstallChocolatey"/>

              <Textbox
                label="Enter chocolatey package names seperated by a space"
                name="softwareToInstall"
                rows="2"
                placeholder="e.g. firefox vlc jre8 7zip git desktopicontoggle"/>
            </div>
            <div className="mb-5" id="bloatwareAndAds">
              <Subtitle>Bloatware and Ads</Subtitle>
              <Dropdown
                label="Ads and unwanted apps"
                name="disableAds"
                systemDefault="false"
                trueText="Disabled"
                falseText="Enabled"
                isNotColumn/>
            </div>
            <div className="my-5" id="wsl">
              <Subtitle>Windows Subsystem for Linux (WSL)</Subtitle>
              <p className="mb-4">
                To install WSL you must be running Windows 10 version 2004 and higher (Build
                19041 and higher) or Windows 11.
              </p>
              <Checkbox label="Install Windows Subsystem for Linux" name="installWsl"/>

              <TextField
                label="Specify a Linux distribution to install"
                name="wslDistro"
                placeholder="Ubuntu (default)"
                optional
                isNotColumn/>
            </div>
          </div>

          <Title>Advanced Configuration</Title>
          <div className="columns" id="advancedConfiguration">
            <TextField
              label="Change the default TMP and TEMP location"
              name="tempPath"
              placeholder="e.g. C:\Temp"
              pattern='^[a-zA-Z]:\\(((?![<>:"/\\|?*]).)+((?<![ .])\\)?)*$'
              optional/>
            <Dropdown
              label="Shutdown Event Tracker:"
              name="enableShutdownEventTracker"
              systemDefault="false"
              optional/>
          </div>
          <Title>Script Options</Title>
          <div className="columns" id="scriptOptions">
            <TextField
              label="Generated script file name"
              name="scriptName"
              placeholder="InkonfigScript"
              optional/>
            <Dropdown
              label="File Extension"
              name="scriptExtension"
              defaultValue="true"
              trueText=".bat"
              trueValue="bat"
              falseText=".cmd"
              falseValue="cmd"
              noDefault/>
          </div>
        </div>
      </div>
    </form>
    ); 
  } 


window.onload = function() {
  var sidebar = document.querySelector("#inkonfig-sidebar");
  const scrollspy = VanillaScrollspy(sidebar, 1000, 'easeInOutQuint');
  scrollspy.init();

  var mobileDevice = (/iphone|ipad|ipod|android|blackberry|mini|palm/i.test(navigator.userAgent.toLowerCase()));
  if (mobileDevice && !sessionStorage.getItem('mobileWarningAck')) {
    Swal.fire({
      icon: 'warning',
      title: 'It looks like you\'re using a mobile device.',
      text: 'This app is used to generate configuration scripts for Windows devices and wasn\'t designed to display correctly on mobile devices.',
      confirmButtonText: 'I Understand',
      confirmButtonColor: '#01b0d3'
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.setItem('mobileWarningAck', true);
      }
        
    })
  }
  document.querySelector("#generateButton").classList.remove("is-loading");
}