const http = require("http")
let controller = (req, res) => {
}

let books = [
  {
    id: 1,
    name: "HTML & CSS",
    price: "400",
  },
  {
    id: 2,
    name: "JavaScript",
    price: "800",
  },
];

const server = http.createServer((req, res) => {
  let url = req.url
  let arr = url.split("/")
  arr.shift()
  if (arr[0] == "welcome") {
    res.statusCode = 200;
    res.write("Welcome To my server!")
  }

  else if (arr[0] == "books") {
    if (arr.length < 2) {
      console.log(arr)
      res.statusCode = 200
      res.write(JSON.stringify(books))
    }
    else {
      let a = false
      books.forEach((val, idx) => {
        if (val.id == arr[1]) {
          res.statusCode = 200
          res.write(JSON.stringify(books[idx]))
          a = true
        }
      })
      if (!a) {
        res.statusCode = 404
        res.write("Book not Found")

      }
    }
  }

  else {
    res.statusCode = 404
    res.write("Request not found!")
  }

  res.end()
})

server.listen(5000, () => { console.log("Server is up!") })
