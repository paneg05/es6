
    
            // requisições http
            let responta= {}


            let promise = new Promise((resolve, reject)=>{
                try{

                    throw new Error('Opa, houve um erro!');
                    setTimeout(()=>{
                        resposta = {dados: {msg: 'recuperamos os dados com sucesso !'}}
                        resolve(resposta)
                    },3000)
        
                } catch(e) {
        
                    setTimeout(()=>{
                        reject(e)
                    })
                }
            })

            console.log(promise)

            setTimeout(() => {
                console.log(promise)
                console.log(resposta)
            }, 5000);

           