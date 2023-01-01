const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('welcome to india')
        res.end()
    }
    else if (req.url==='/about'){
        res.write('here is a short history')
        res.end()
    }
    else{
        res.end(`<h1>oops!!</h1>
    <p>we cant find the page you're looking for</p>
    <a href="/">back home</a>`
    )}
})

server.listen(5000)