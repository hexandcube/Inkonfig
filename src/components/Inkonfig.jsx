import React from 'react';
import Sidebar from './Sidebar';
import generateScript from '../scripts/inkonfigGenerate';
import { TextField, Dropdown, Checkbox, Textbox } from '../components/Fields';
import { Title, Subtitle } from '../components/Titles';
import { toggleChocolateyInput, preventSpaces } from '../scripts/inkonfigHelpers';
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
        <Sidebar />
        <div className="column ml-5">
          <Title>
            Personalization
          </Title>

          <div className='module' id="personalization">
            <TextField
              label="Change the name of your PC"
              name="pcName"
              placeholder="Max. 15 characters long. Can't contain the following characters: ` ~ ! @ # $ % ^ &amp; * ( ) = + _ [ ] { } \ | ; : . ' &quot; , &lt; &gt; / ?."
              maxLength="15"
              pattern="^(?![0-9]{1,15}$)[a-zA-Z0-9-]{1,15}$"
              onKeyDown={preventSpaces}
              optional
              isNotColumn />

            <div className="columns">

              <Dropdown
                label="Common File Extensions:"
                name="showFileExt"
                trueText="Shown"
                falseText="Hidden"
                systemDefault="false" />
              
              <Dropdown
                label="Open Explorer to:"
                name="launchExplorerTo"
                trueText="Quick Access"
                trueValue="quickaccess"
                falseText="This PC"
                falseValue="thispc"
                systemDefault="true" />

              <Dropdown
                label="Seconds in the taskbar clock:"
                name="showSecondsInTaskbarClock"
                systemDefault="false"
                trueText="Shown"
                falseText="Hidden" />

            </div>
            <div className="columns">

              <Dropdown
                label="Require CTRL + ALT + DEL to login:"
                name="enableCtrlAltDelToLogin"
                systemDefault="false" />

              <Dropdown
                label="Verbose logon messages:"
                name="enableVerboseLogon"
                systemDefault="false" />

            </div>
            <Dropdown
              label="Show Windows version on desktop:"
              name="showWindowsVersionOnDesktop"
              systemDefault="false"
              isNotColumn />

            <fieldset className="mt-5">
              <Subtitle>Shell Folders</Subtitle>
              <div className="columns" id="shellFolders">
                <TextField
                  label="Documents"
                  name="shellDocumentsLocation"
                  placeholder="C:\Users\User\Documents"
                  pattern='^[a-zA-Z]:\\(((?![<>:"/\\|?*]).)+((?<![ .])\\)?)*$'
                  onKeyDown={preventSpaces}
                  optional />

                <TextField
                  label="Pictures"
                  name="shellPicturesLocation"
                  placeholder="C:\Users\User\Pictures"
                  pattern='^[a-zA-Z]:\\(((?![<>:"/\\|?*]).)+((?<![ .])\\)?)*$'
                  onKeyDown={preventSpaces}
                  optional />

                <TextField
                  label="Videos"
                  name="shellVideosLocation"
                  placeholder="C:\Users\User\Videos"
                  pattern='^[a-zA-Z]:\\(((?![<>:"/\\|?*]).)+((?<![ .])\\)?)*$'
                  onKeyDown={preventSpaces}
                  optional />
              </div>
              <div className="columns">
                <TextField
                  label="Music"
                  name="shellMusicLocation"
                  placeholder="C:\Users\User\Music"
                  pattern='^[a-zA-Z]:\\(((?![<>:"/\\|?*]).)+((?<![ .])\\)?)*$'
                  onKeyDown={preventSpaces}
                  optional />

                <TextField
                  label="Desktop"
                  name="shellDesktopLocation"
                  placeholder="C:\Users\User\Desktop"
                  pattern='^[a-zA-Z]:\\(((?![<>:"/\\|?*]).)+((?<![ .])\\)?)*$'
                  onKeyDown={preventSpaces}
                  optional />

                <TextField
                  label="Downloads"
                  name="shellDownloadsLocation"
                  placeholder="C:\Users\User\Downloads"
                  pattern='^[a-zA-Z]:\\(((?![<>:"/\\|?*]).)+((?<![ .])\\)?)*$'
                  onKeyDown={preventSpaces}
                  optional />
              </div>
            </fieldset>
            <fieldset className='mt-5'>
              <Subtitle>Context Menu</Subtitle>
              <div id="contextMenu">
                <Dropdown
                  label="Classic context menus (Windows 11):"
                  name="enableClassicContextMenus"
                  systemDefault="false"
                  isNotColumn />
              </div>
            </fieldset>
          </div>

          <Title>Power Plan</Title>
          <div className='module' id="powerPlan">
            <div className="columns">
              <Dropdown
                label="Select Power Plan:"
                name="powerPlan"
                trueText="Balanced"
                trueValue="balanced"
                falseText="High Performance"
                falseValue="highperformance"
                option3Text="Power Saver"
                option3Value="powersaver"
                systemDefault="true" />

              <Dropdown
                label="Hibernation:"
                name="enableHibernation"
                systemDefault="false" />
            </div>

            <div className="mb-5" id="onAcPower">
              <Subtitle>On AC Power</Subtitle>
              <div className='columns'>
                <Dropdown
                  label="Lid Close Action:"
                  name="acLidCloseAction"
                  trueText="Do nothing"
                  trueValue="0"
                  falseText="Sleep"
                  falseValue="1"
                  option3Text="Hibernate"
                  option3Value="2"
                  option4Text="Shut down"
                  option4Value="3"
                  systemDefault="1" />
                
                <Dropdown
                  label="Power Button Action:"
                  name="acPowerButtonAction"
                  trueText="Do nothing"
                  trueValue="0"
                  falseText="Sleep"
                  falseValue="1"
                  option3Text="Hibernate"
                  option3Value="2"
                  option4Text="Shut down"
                  option4Value="3"
                  option5Text="Turn off the display"
                  option5Value="4"
                  systemDefault="1" />
                
                <Dropdown
                  label="Sleep Button Action:"
                  name="acSleepButtonAction"
                  trueText="Do nothing"
                  trueValue="0"
                  falseText="Sleep"
                  falseValue="1"
                  option3Text="Hibernate"
                  option3Value="2"
                  option4Text="Shut down"
                  option4Value="3"
                  option5Text="Turn off the display"
                  option5Value="4"
                  systemDefault="1" />
              </div>
            </div>
            <div className="mb-5" id="onBatteryPower">
              <Subtitle>On Battery Power</Subtitle>
              <div className='columns'>
                <Dropdown
                  label="Lid Close Action:"
                  name="battLidCloseAction"
                  trueText="Do nothing"
                  trueValue="0"
                  falseText="Sleep"
                  falseValue="1"
                  option3Text="Hibernate"
                  option3Value="2"
                  option4Text="Shut down"
                  option4Value="3"
                  systemDefault="1" />
                
                <Dropdown
                  label="Power Button Action:"
                  name="battPowerButtonAction"
                  trueText="Do nothing"
                  trueValue="0"
                  falseText="Sleep"
                  falseValue="1"
                  option3Text="Hibernate"
                  option3Value="2"
                  option4Text="Shut down"
                  option4Value="3"
                  option5Text="Turn off the display"
                  option5Value="4"
                  systemDefault="1" />
                
                <Dropdown
                  label="Sleep Button Action:"
                  name="battSleepButtonAction"
                  trueText="Do nothing"
                  trueValue="0"
                  falseText="Sleep"
                  falseValue="1"
                  option3Text="Hibernate"
                  option3Value="2"
                  option4Text="Shut down"
                  option4Value="3"
                  option5Text="Turn off the display"
                  option5Value="4"
                  systemDefault="1" />
              </div>
            </div>
          </div>

          <Title>Software</Title>
          <div className="module" id="software">
            <Subtitle id="installSoftware">Install Software</Subtitle>
            <Checkbox
              label="Install software using Chocolatey"
              name="installSoftwareChoco"
              onClick={toggleChocolateyInput} />

            <div id="chocolateyInput" className="is-hidden">
              <Checkbox
                label="I already have the Chocolatey Package Manager Installed"
                name="dontInstallChocolatey" />

              <Textbox
                label="Enter chocolatey package names seperated by a space"
                name="softwareToInstall"
                rows="2"
                placeholder="e.g. firefox vlc jre8 7zip git desktopicontoggle" />
            </div>
            <div className="mb-5" id="bloatwareAndAds">
              <Subtitle>Bloatware and Ads</Subtitle>
              <Dropdown
                label="Ads and unwanted apps"
                name="disableAds"
                systemDefault="false"
                trueText="Disabled"
                falseText="Enabled"
                isNotColumn />
            </div>
            <div className="my-5" id="wsl">
              <Subtitle>Windows Subsystem for Linux (WSL)</Subtitle>
              <p className="mb-4">
                To install WSL you must be running Windows 10 version 2004 and higher (Build
                19041 and higher) or Windows 11.
              </p>
              <Checkbox label="Install Windows Subsystem for Linux" name="installWsl" />

              <TextField
                label="Specify a Linux distribution to install"
                name="wslDistro"
                placeholder="Ubuntu (default)"
                optional
                isNotColumn />
            </div>
          </div>

          <Title>Advanced Configuration</Title>
          <div className="module" id="advancedConfiguration">
            <div className='columns'>
              <TextField
                label="Change the default TMP and TEMP location"
                name="tempPath"
                placeholder="e.g. C:\Temp"
                pattern='^[a-zA-Z]:\\(((?![<>:"/\\|?*]).)+((?<![ .])\\)?)*$'
                optional />
              <Dropdown
                label="Shutdown Event Tracker:"
                name="enableShutdownEventTracker"
                systemDefault="false"
                optional />
            </div>
          </div>
          <Title>Script Options</Title>
          <div className="module" id="scriptOptions">
            <div className="columns">

              <TextField
                label="Generated script file name"
                name="scriptName"
                placeholder="InkonfigScript"
                optional />
              <Dropdown
                label="File Extension"
                name="scriptExtension"
                defaultValue="true"
                trueText=".bat"
                trueValue="bat"
                falseText=".cmd"
                falseValue="cmd"
                noDefault />
            </div>

            <Checkbox
              name="restartComputer"
              label="Restart the computer after applying the configuration (Recommended)"
            />

          </div>
        </div>
      </div>
    </form>
  );
}


window.onload = function () {
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