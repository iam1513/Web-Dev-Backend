// 1. Write a function to download data from a url

function DownloadFile(url, cb) {
  console.log("Starting Downloading from ", url);
  setTimeout(function d() {
    console.log("Downloading completed");
    const content = "ABCDEF";
    cb(content);
  }, 5000);
}

// 2. Write a function to save that dwnloaded data in a file and return the filename
function write(data, cb) {
  console.log("Started writing a file with", data);
  setTimeout(function write() {
    console.log("Completed writing data into a file");
    const filename = "File.txt";
    cb(filename);
  }, 5000);
}

// 3. Write a function to upload written file on new url
function upload(url, file, cb) {
  console.log("Stated uplaoding", file, "on", url);
  setTimeout(function up() {
    console.log("Upload completed");
    const response = "SUCCESS";
    cb(response);
  }, 2000);
}

DownloadFile("www.xyz.com", function process(content) {
  console.log("We are now going to process the downloaded data");
  write(content, function processWrite(filename) {
    console.log("File is downloaded and written , now will be upload");
    upload("www.upload.com", filename, function processUpload(response) {
      console.log("We have uploaded with", response);
    });
  });
});
