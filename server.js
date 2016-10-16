var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles={
    'articleone':{
        title:'Article one | Matariya Savan',
        heading:'Article one',
        date:'Oct 16,2016',
        content:`
                <p> Hi ! it's Article one written by Savan Matariya<p>`
    },
     'articletwo':{
        title:'Article two | Matariya Savan',
        heading:'Article two',
        date:'Oct 20,2016',
        content:`
                <p> Hi ! it's Article two written by Savan Matariya<p>`
    },
     'articlethree':{
        title:'Article three | Matariya Savan',
        heading:'Article three',
        date:'Oct 22,2016',
        content:`
                <p> Hi ! it's Article three written by Savan Matariya<p>`
    },
};


function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var htmlTemplate=`
    <html>
        <head>
            <title>
                ${title}
            </title>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/ui/index.html">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    `;
    return htmlTemplate;
}
app.get('/:articleName', function (req, res) {
  var articleName=req.params.articleName;
  res.send(path.join(createTemplate(articles[articleName])));
});
app.get('/ui/index.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
