let premessa1 = new Promise((resolve,reject)=>{
   /* try{

    }catch(e){

    }   */

    //requisição http
    setTimeout(() => {
        

        //requisição realizada
        let resposta = {}

        //erro na requisição
        if(true){

            resposta_da_requisicao={
                codigo:1050,
                erro: 'falha de autorização'
            }
            reject(resposta_da_requisicao)
        }

        resposta_da_requisicao={
            0:{id:1, nome: 'jose'},
            1:{id:2, nome:'joão'},
            2:{id:3, nome: 'maria'}
        }

        resolve(resposta_da_requisicao)

    }, 4000);


}).then((dados)=>{
    console.log('operação sequencial:',dados)
    return 'parametro 1 para o then 2'
}).then(param=>{
    console.log(param)
}).catch((e)=>{
    console.log('operação sequencial catch',e)
})