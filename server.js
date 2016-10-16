var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles={
    'article-one':{
        title:'Article one | Matariya Savan',
        heading:'Article one',
        date:'Oct 16,2016',
        content:`
                <p> Hi ! it's Article one written by Savan Matariya<p>`
    },
     'article-two':{
        title:'Article two | Matariya Savan',
        heading:'Article two',
        date:'Oct 20,2016',
        content:`
                <p> Hi ! it's Article two written by Savan Matariya<p>`
    },
     'article-three':{
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
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    $heading
                </h3>
                <div>
                    $date
                </div>
                <div>
                    $content
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



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
