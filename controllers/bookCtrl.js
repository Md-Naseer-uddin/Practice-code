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
    {
        id: 3,
        name: "React JS",
        price: 1000,
    }
];

const getBooks = (req, res) => {
    res.status(200).json(books)
}

const getBook = (req, res) => {
    let id = req.params.id
    let a = false
    books.forEach((val) => {
        if (val.id == id) {
            res.status(200).json(val)
            a = true
        }
    })
    if (!a) {
        res.status(404).send("Book not found")
    }
}

const createBook=(req,res)=>{
    let n =books[books.length-1].id+1
    let newBook={
        id: n,
        ...req.body
    }
    books.push(newBook)
    res.status(200).json(books)
}

const deleteBook = (req, res) => {
    let id = req.params.id
    let newBooks = books.filter((val) => val.id != id)
    books=newBooks
    res.status(200)
    res.json(books)
}

const putUpdate=(req,res)=>{
    let id=req.params.id
    let newBooks=books.map((val)=>{
        if(val.id==id){
            val.name=req.body.name
            val.price=req.body.price
        }
        return val
    })
    books=newBooks
    res.status(200).json(books)
}

const patchUpdate=(req,res)=>{
    let id = req.params.id
    let newBooks=books.map((val)=>{
        if (val.id==id){
            val={
                ...val,
                ...req.body
            }
        }
        return val
    })
    books=newBooks
    res.status(200).json(books)
}

module.exports = {
    getBooks,
    getBook,
    deleteBook,
    putUpdate,
    patchUpdate,
    createBook
}