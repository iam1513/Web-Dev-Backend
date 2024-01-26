function downloadFile(url) {
  return new Promise(function exec(res, rej) {
    console.log("Starting downloading the file");
    setTimeout(function () {
      console.log("Downloading the file");
      const content = "ABCDEF";
      res(content);
    }, 5000);
  });
}

function writeFile(data) {
  return new Promise(function exec(res, rej) {
    console.log("Writing a file");
    setTimeout(function () {
      const filename = "file.txt";
      res(filename);
    }, 2000);
  });
}

function uploadFile(url, file) {
  return new Promise(function exwc(res, rej) {
    console.log("Uploading a file");
    setTimeout(function () {
      const response = "SUCCESS";
      res(response);
    }, 2000);
  });
}

downloadFile("www.xyz.com")
  .then(function processDownload(value) {
    console.log("Downloading done with the following value", value);
    return writeFile(value);
  })
  .then(function processWrite(value) {
    console.log("Data written int he file with name", value);
    return uploadFile(value);
  })
  .then(function processUpload(value) {
    console.log("We have uploaded with", value);
  });
