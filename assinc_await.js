let processoAssyncrono = new Promise((resolve,reject)=>{
    setTimeout(()=> resolve('sucesso'),3000)
})


let recuperarDados=()=>{
    processoAssyncrono.then(p=>console.log(p))

    console.log('processo assincrono 1')

    fetch('https://jsonplaceholder.typicode.com/comments')
}

recuperarDados()

