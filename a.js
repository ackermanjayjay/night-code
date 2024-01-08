
const nameDetection = async() =>{
    const getValue = document.getElementById("name").value
    const detection = await fetch(`https://api.genderize.io/?name=${getValue}&country_id=ID `)
    const response = await detection.json()
    

    const summarize = document.getElementById("keterangan").innerHTML= response['probability']*100 + "%"
    const gender = document.getElementById("gender").innerHTML= "Gender: "+response['gender']
    const country = document.getElementById("country").innerHTML= "Country: "+response['country_id']
    console.log("hasil = ",response)
}