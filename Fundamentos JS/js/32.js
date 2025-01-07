//Performance y multiple Async Await
const url='https://jsonplaceholder.typicode.com/comments'
const url2='https://jsonplaceholder.typicode.com/todos'
const url3='https://jsonplaceholder.typicode.com/photos'

const consultarAPI= async () =>{
    try{

        const inicio= performance.now()

        const reponse=await fetch(url)
        const data= await reponse.json()
        console.log(data)

        const reponse2=await fetch(url2)
        const data2= await reponse2.json()
        console.log(data2)

        const reponse3=await fetch(url3)
        const data3= await reponse3.json()
        console.log(data3)

        const fin= performance.now()
        const resul=fin-inicio
        console.log("El resultado de la primera funcion es: "+ resul+" ms")

    }catch (error){

        console.log(error)

    }
}

// consultarAPI()


const consultarAPI2 = async () =>{

    try{

        const inicio= performance.now()

        const [reponse,reponse2,reponse3] = await Promise.all([fetch(url),fetch(url2),fetch(url3)])

        const [data,data2,data3] = await Promise.all([reponse.json(),reponse2.json(),reponse3.json()])

        console.log(data)
        console.log(data2)
        console.log(data3)

        const fin= performance.now()
        const resul=fin-inicio
        console.log("El resultado de la segunda funcion es: "+ resul+" ms")

    }catch (error){

        console.log(error)

    }
}

consultarAPI()
consultarAPI2()