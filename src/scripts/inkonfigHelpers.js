function toggleChocolateyInput() {
  const chocolateyInput = document.querySelector("#chocolateyInput");
  const installSoftwareCheckbox = document.querySelector("#installSoftwareChoco");
  if (installSoftwareCheckbox.checked) {
    chocolateyInput.classList.remove("is-hidden");
  } else {
    chocolateyInput.classList.add("is-hidden");
  }
}

function downloadFile(data, filename, type) {
  var file = new Blob([data], { type: type });
  if (window.navigator.msSaveOrOpenBlob)
    window.navigator.msSaveOrOpenBlob(file, filename);
  else {
    var a = document.createElement("a"),
      url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 0);
  }
}

const preventSpaces = (e) => {
  if (e.key === " ") {
    e.preventDefault();
  }
}; 

export { toggleChocolateyInput, downloadFile, preventSpaces };