const express = require('express')
var IPToASN = require('ip-to-asn');



const app = express()
const port = 3000

// app.get('/:ip?', async function(req, res)  {
//     var client = new IPToASN();

//     const cip = req.params.ip;
//     const getIP = require('external-ip')();
//     getIP((err, ip) => {
//         if (err) {
//             // every service in the list has failed
//             throw err;
//         }
//         console.log(ip);
//         var clientIp = cip!=null?cip: ip
//     var addresses = [
//         clientIp,
//       ];
    
//       client.query(addresses, function (err, results) {
//         if (err) {
//           console.error(err);
//           return;
//         }
       
//         console.log(results);
//         res.send({
//             results
          
//         });
//       });
  
   
//   });
//     });


    
app.get('/isgoogle', async function(req, res)  {
    var client = new IPToASN();
    const getIP = require('external-ip')();
    getIP((err, ip) => {
        if (err) {
            // every service in the list has failed
            throw err;
        }
        console.log(ip);
       
    var addresses = [
        ip,
      ];
    
      client.query(addresses, function (err, results) {
        if (err) {
          console.error(err);
          return;
        }
        
        var ipsdesc=results[ip]['description'].toLowerCase();
       
        if (ipsdesc.includes("google")) {
            console.log('isgoogle');
            res.send({            
                isgoogle : true
            });
        }
        else {
            res.send({            
                isgoogle : false
            });
        }

      

        
      });
  
   
  });
    });


 
    

    

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})