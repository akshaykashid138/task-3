var request=new XMLHttpRequest()

request.open('GET','https://restcountries.eu/rest/v2/all',true)

request.send()

request.onload=function(){
    var countryData=JSON.parse(this.response)
   

	
    for(var i in countryData)
    {
        console.log(countryData[i].flag)
    }
}