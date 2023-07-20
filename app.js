const API_KEY = 'your API key'
const clickBtn = document.querySelector("#clickBtn");
const answerDiv = document.querySelector("#answer-div"); 
const inputElement = document.querySelector("input");
const loadingElement = document.querySelector("#lds-ring");

loadingElement.style.visibility = "hidden";

async function getMessege(){
    loadingElement.style.visibility = "visible";
    if(loadingElement.style.visibility = "visible")
    {
        loadingElement.style.marginBottom = "80px";
    }

    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: inputElement.value}]
        })
    }
    
    try{
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data =  await response.json()
        console.log(data)
        answerDiv.textContent = data.choices[0].message.content;
        loadingElement.style.visibility = "hidden";
        if(loadingElement.style.visibility = "hidden")
        {
            loadingElement.style.marginBottom = "0px";
        }
        inputElement.value = '';
    } catch (error){
        console.error(error);
    }
}

clickBtn.addEventListener("click", getMessege);

