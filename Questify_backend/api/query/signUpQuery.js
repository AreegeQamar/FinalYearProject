const pool  = require ('../database/sql');
const sql = require('mssql/msnodesqlv8');

// function insertsignupData(data){
//     console.log("data : ", data['name']);
//     const sql_query = 'INSERT INTO Usersignup (name,email,password) VALUES ?';
//     sql.query(sql_query, [data['name'], data['email'], data['password']], function (err, result) {
//         if (err) throw err;
//         console.log("Number of records inserted: " + result.affectedRows);
//       });
// }

async function insertsignupData(data) {
    try {
      const connection = await pool.connect(); // Connect to the database
      const request = connection.request();
  
      // Your SQL query goes here
      const query = 'INSERT INTO Usersignup (name,email,password) VALUES (@value1, @value2, @value3)';

    // Define the parameters and their values
    request.input('value1', sql.VarChar, data['name']);
    request.input('value2', sql.VarChar, data['email']);
    request.input('value3', sql.VarChar, data['password']);

    // Execute the query
    const result = await request.query(query);

    connection.release(); // Release the connection back to the pool
    console.log(result);
    // return result;
  } catch (error) {
    throw error; // Handle or log errors as needed
  }
}
  


module.exports = {insertsignupData}