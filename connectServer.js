const http = require("http");
const request = require("request");

module.exports.getData = () => {
  http.get("http://api.quuu.linuxpl.eu/todo/rrwrwxqu", res => {
    res.setEncoding("utf8");
    let rawData = "";
    res.on("data", chunk => {
      rawData += chunk;
    });
    res.on("end", () => {
      try {
        const parsedData = JSON.parse(rawData);
        console.log(parsedData);
      } catch (e) {
        console.error(e.message);
      }
    });
  });
};

module.exports.postData = data => {
  request.post(
    "http://api.quuu.linuxpl.eu/todo/rrwrwxqu",
    {
      json: data
    },
    (error, res, body) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log(`statusCode: ${res.statusCode}`);
      console.log(body);
    }
  );
};
