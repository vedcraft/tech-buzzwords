const fs = require('fs')

data = "";

try {
    data = fs.readFileSync('../README.md', 'utf8')
    var showdown  = require('showdown'),
    converter = new showdown.Converter({tables: true})
    text      = data,
    html      = converter.makeHtml(text)
    fs.writeFileSync('./generated-blog.html', html)
    console.log(html)
    //file written successfully
} catch (err) {
  console.error(err)
}