const sql = require("mssql/msnodesqlv8");
var config = {
  server: "DESKTOP-ES0QU2E",
  database: "VR_fyp",
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true,
  },
};

sql.connect(config, function (err) {
  if (err) console.log(err);
  var request = new sql.Request();
  console.log(request);
  request.query(
    "Select * from Levels",
    function (err, records) {
      if (err) console.log(err);
      else console.log(records);
    }
  );
});
