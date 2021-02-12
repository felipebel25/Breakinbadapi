
const url = 'https://www.breakingbadapi.com/api/characters/'
const app = document.querySelector('.app')

async function fetchData(){
    const response = await fetch(url);  
    const data = await response.json()
    

    const every=[]
    data.forEach(data => {
        const div = document.createElement('div')
        const img = document.createElement('img')
        img.src = data.img;
        // img.width = 400;
        div.className = "content"
        
        const textos = document.createElement('div')
        textos.className = "textos";

        const name = document.createElement('h1')
        name.textContent= data.name;
        

        const occupations = document.createElement('h3')
        occupations.textContent= "Occupation:  " + data.occupation;

        const status = document.createElement('h3')
        status.textContent= "Status:  " +data.status;
       
        const nickname = document.createElement('h3')
        nickname.textContent= "Alias:  " +data.nickname;

        const birthday = document.createElement('h3')
        birthday.textContent= "Birthday: "+ data.birthday;
        birthday.className = 'inecesario';

        const portrayed = document.createElement('h3')
        portrayed.textContent= "Portrayed: "+ data.portrayed;
        portrayed.className = 'inecesario';

        console.log(data.name)
        textos.append(name,occupations,status,nickname,birthday,portrayed)
        div.append(img,textos)
      
        every.push(div)
       
     
    })
    app.append(...every)

}




fetchData()