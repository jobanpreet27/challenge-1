const { Client } = require('pg');
  const client = new Client({
  connectionString: process.env.DATABASE_URL||'postgres://owvyrncvwvpnlz:f962ad62a7ac6720ab6a568238da215c40de5c12b170aec5b36b1b661ca0c4d1@ec2-54-80-184-43.compute-1.amazonaws.com:5432/dbaj1o25oa1vbi'
  ,
  ssl: {
    rejectUnauthorized: false
  }
})
const database = function (trackingNo,callback){

  client.query('SELECT * from orders where trackingid = \''+trackingNo+'\'', (err, res) => {
    callback(JSON.stringify(res.rows));
  }
  )

}
client.connect();
module.exports = database;
