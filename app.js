const express = require('express')
var IPToASN = require('ip-to-asn');



const app = express()
const port = 3000

app.get('/ip/:ip?', async function(req, res)  {
    var client = new IPToASN();
    const userIP = require('user-ip');

    var ipAddress=userIP(req);
    const myArray = ipAddress.split(":");


    var addresses = myArray;
    if (req.params.ip!=null) {
      addresses.push(req.params.ip);
    }
    console.log(addresses[addresses.length - 1]);
    client.query(addresses, function (err, results) {
      if (err) {
        console.error(err);
        return;
      }
     
      console.log(results);
      res.send({
          results
        
      });
    });
    });


    
app.get('/isgoogle', async function(req, res)  {
    var client = new IPToASN();
    const userIP = require('user-ip');

    var ipAddress=userIP(req);
    const myArray = ipAddress.split(":");


    var addresses = myArray;
    console.log(addresses[addresses.length - 1]);

    client.query(addresses, function (err, results) {
      if (err) {
        console.error(err);
        return;
      }
      
      var ipsdesc=results[addresses[addresses.length - 1]]['description'].toLowerCase();
     
      if (ipsdesc.includes("google")) {
          console.log('isgoogle');
          res.send({            
              isgoogle : true,
              ipAddress : addresses[addresses.length - 1]
          });
      }
      else {
          res.send({            
              isgoogle : false,
              ipAddress : addresses[addresses.length - 1]
          });
      }

    

      
    });
    });


 
    

    

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})