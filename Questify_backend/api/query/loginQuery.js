const pool = require('../database/sql');
const sql = require('mssql/msnodesqlv8');

async function checkloginData(data, res) {
  try {
    const connection = await pool.connect(); // Connect to the database
    const request = connection.request();

    // Your SQL query goes here
    const query = 'SELECT * FROM Usersignup WHERE email = @value1 AND password = @value2';

    request.input('value1', sql.VarChar, data['email']);
    request.input('value2', sql.VarChar, data['password']);

    // Execute the query
    const result = await request.query(query);

    connection.release(); // Release the connection back to the pool

    console.log(result);
    if (result.recordset.length != 0) {
      // Successful login
      console.log('Login successful');
      return res.json({ message: 'Login successful' });
    } else {
      // Failed login due to incorrect email or password
      console.log('Incorrect email or password');
      return res.status(404).json({ message: 'Incorrect email or password' });
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }



  // 1111111111111111111111111111111
  // 1111111111111111111111111111111

}

module.exports = { checkloginData };
