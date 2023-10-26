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
    // "INSERT INTO Levels (ClassId,StudentId,PracticalId) VALUES (5,5,5); ",
    function (err, records) {
      if (err) console.log(err);
      else console.log(records);
    }
  );
});

module.exports = sql;


async function insertData(data) {
  try {
    await sql.connect(config);

    const request = new sql.Request();

    // Define your SQL query and parameters
    const query = 'INSERT INTO Usersignup (name,email,password) VALUES (@value1, @value2, @value3)';

    // Define the parameters and their values
    request.input('value1', sql.VarChar, data['name']);
    request.input('value2', sql.VarChar, data['email']);
    request.input('value3', sql.VarChar, data['password']);

    // Execute the query
    const result = await request.query(query);

    // Handle the result, if needed
    console.log('Data inserted successfully');

  } catch (err) {
    console.error('Error:', err);
  } finally {
    // Close the connection when done
    sql.close();
  }
}

// insertData();


