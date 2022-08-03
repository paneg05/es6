
    

            let promise = new Promise((resolve, reject)=>{
                try{

                    throw new Error('Opa, houve um erro!');
                    setTimeout(()=>{
                        resolve('promessa concluída')
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
            }, 5000);