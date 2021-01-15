const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000
const database = require('./database.js')
app.get('',(req, res)=> {
    res.sendFile(path.join(__dirname,'../public/index.html'))
})
app.get('/tracking',(req,res)=>{
      database(req.query.trackingno,(data)=>
         {res.send(data)}
      )      
} )
/*app.get('/tracking',(req,res)=>
{
    res.send({ 
        1 : {country : 'Canada',
             province : 'Manitoba',
             city : 'Winnipeg',
             time : '4:07 pm',
             date : '11/24/2020',
             status : 'Item arrived'
             },
        2 :  {country : 'Canada',
              province : 'Saskatchewan',
              city : 'Regina',
              time : '8:47 am',
              date : '11/24/2020',
              status : 'Item departed'
              },
        3 :  {country : 'Canada',
              province : 'Saskatchewan',
              city : 'Regina',
              time : '8:19 am',
              date : '11/24/2020',
              status : 'Item arrived'
        },
        4 :  {country : 'Canada',
              province : 'British Columbia',
              city : 'Richmond',
              time : '7:05 am',
              date : '11/23/2020',
              status : 'Item departed'
        },
        5 :  {country : 'Canada',
              province : 'British Columbia',
              city : 'Richmond',
              time : '2:09 pm',
              date : '11/22/2020',
              status : 'Item processed'
        },
        6 :  {country : 'Canada',
              province : 'British Columbia',
              city : 'Richmond',
              time : '11:58 am',
              date : '11/20/2020',
              status : 'Shipment Received at local facility'
        }    
    })
})*/
app.listen(port,()=> {
    console.log('server is up '+ port)
    
})