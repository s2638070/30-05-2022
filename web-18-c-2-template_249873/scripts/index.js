// Add the coffee to local storage with key "coffee"

                                                                                                                                                               

async function main(){
    let menu= document.getElementById("menu").value;
    let response= allCoffee(menu);
    let data=   await response;
   console.log(data)

}

async function allCoffee(c){
   try{
    let url= "https://masai-mock-api.herokuapp.com/coffee/menu";
    let res= await fetch(url);
    let data= await res.json();
    console.log(res)
   return data;
   }
   catch(error){
       console.log('error:', error);
   }

   function appendCoffee(menu){
       menu.forEach(function(el){
           let p= document.createElement('p')
           p.innerText=el.name;
           let img= document.createElement('img')
           img.src
           menu.append(p)

       })
   }
}