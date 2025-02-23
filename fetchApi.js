const URL = "https://cat-fact.herokuapp.com/facts";

const factpara = document.querySelector("#fact")
const btn = document.querySelector("#btn")

const getFacts = async() =>{
    console.log("fetching the data");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    // console.log(data[4].text);
    factpara.innerHTML=(data[4].text)
}
btn.addEventListener("click",getFacts)