function download(url) {
  return new Promise(function exec(res, rej) {
    console.log("Starting downloading the file");
    setTimeout(function () {
      console.log("Downloading the file");
      const content = "ABCDEF";
      res(content);
    }, 5000);
  });
}

function write(data) {
  return new Promise(function exec(res, rej) {
    console.log("Writing a file");
    setTimeout(function () {
      const filename = "file.txt";
      res(filename);
    }, 2000);
  });
}

function upload(url, file) {
  return new Promise(function exwc(res, rej) {
    console.log("Uploading a file");
    setTimeout(function () {
      const response = "SUCCESS";
      res(response);
    }, 2000);
  });
}

async function steps() {
  const downloadedData = await download("www.xyz.com");
  console.log("Data downloaded is ", downloadedData);
  const fileWritten = await write(downloadedData);
  console.log("File written is ", fileWritten);
  const uploadResponse = await upload("www.drive.google.com", fileWritten);
  console.log("Upload response is ", uploadResponse);
}

steps();
