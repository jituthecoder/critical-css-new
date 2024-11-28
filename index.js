import {generate} from 'critical';
import express from 'express'
import bodyParser from 'body-parser';
import conn from './conn.js';
import connNew from './conn-new.js';

const app = express();
var port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const sql = 'SELECT * FROM licence_key_list WHERE domain_name = ? AND licence_key = ?';


app.get('/css',(req,res)=>{
  var url =req.body.url;
  var key = req.body.key;
  var _wpnonce = req.body._wpnonce;
  var filename = req.body.filename;
  var css_url = req.body.css_url;
  var path = req.body.path;
  var html = req.body.html;
  if (url== null || key == null) {
    return res.send('rocket1');
  }
  var domain = new URL(url).hostname;
  console.log(domain);
  // Remove subdomains (if any)
  var domain_name = domain.replace(/^www\./, '');
  console.log(domain_name);
  connNew.execute(sql, [domain_name , key], (err, results) => {
    if (results.length > 0) {
      conn.execute(sql, [domain_name , key], (err, results) => {
        if (results.length > 0) {
          const cssGenerate = async() =>{
            res.setHeader('Content-Type', 'application/json');
            const {css, html, uncritical} = await generate({
              src: url,
              width: 1300,
              height: 900,
            });
            const data = {
              url: url,
              w3_put_preload_css: 1,
              result:'success',
              _wpnonce: _wpnonce,
              filename:filename,
              path:path,
              w3_css:css
            };      
            res.send(JSON.stringify(data));
          }
          cssGenerate();
        }else{
          return res.send('rocket3');
        }
        conn.end();
      });
    }else{
      return res.send('rocket2');
    }
    connNew.end();
  });
});


app.post('/css',(req,res)=>{
  var url =req.body.url;
  var key = req.body.key;
  var _wpnonce = req.body._wpnonce;
  var filename = req.body.filename;
  var css_url = req.body.css_url;
  var path = req.body.path;
  var html = req.body.html;
  if (url== null || key == null) {
    return res.send('rocket1');
  }
  var domain = new URL(url).hostname;
  console.log(domain);
  // Remove subdomains (if any)
  var domain_name = domain.replace(/^www\./, '');
  console.log(domain_name);
  connNew.execute(sql, [domain_name , key], (err, results) => {
    if (results.length > 0) {
      conn.execute(sql, [domain_name , key], (err, results) => {
        if (results.length > 0) {
          const cssGenerate = async() =>{
            res.setHeader('Content-Type', 'application/json');
            const {css, html, uncritical} = await generate({
              src: url,
              width: 1300,
              height: 900,
            });
            const data = {
              url: url,
              w3_put_preload_css: 1,
              result:'success',
              _wpnonce: _wpnonce,
              filename:filename,
              path:path,
              w3_css:css
            };      
            res.send(JSON.stringify(data));
          }
          cssGenerate();
        }else{
          return res.send('rocket3');
        }
        conn.end();
      });
    }else{
      return res.send('rocket2');
    }
    connNew.end();
  });
});

app.listen(port, () => {
    console.log(`Critical Css app listening on port ${port}`)
  })
