const stream = require('stream')

let Feed = function(channel) {
  let readable = new stream.Readable({})
  let news = 'A long headline might go here'
  readable._read = () => {
    readable.push(news)
    readable.push(null)
  }
  return readable;
}

const feed = new Feed()

feed.on('readable', () => {
  let character;
  while(character = feed.read(2)) {
    // process.stdout.write(character)
    console.log(character.toString())
  }
});

feed.on('end', () => {
  console.log("that's the end!")
})