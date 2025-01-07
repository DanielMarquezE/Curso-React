//Fetch API con Async / await


const url='https://jsonplaceholder.typicode.com/comments'



// fetch(url)
//     .then( (reponse)=>{
//         if(reponse.ok){
//             return reponse.json()
//         }else
//         throw new Error("Hubo un error")       
//     } )
//         .then(data => console.log(data))
//         .catch(error=>console.log(error))


const consultarAPI= async () =>{
    try{

        
    const reponse=await fetch(url)
    const data= await reponse.json()
    console.log(data)

    }catch (error){

        console.log(error)

    }
}

consultarAPI()