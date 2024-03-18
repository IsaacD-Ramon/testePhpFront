
const cadastrar = document.getElementById("cadastrar");
const login = document.getElementById("login");

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const form = document.querySelector("#form");
    
    axios.defaults.baseURL = 'http://127.0.0.1:9005/api/v1/';
    const formData = new FormData(event.target);

    cadastrar.addEventListener("click", cadUsuario(formData)); 
    login.addEventListener("click", auth(formData)); 
});

async function cadUsuario(formData){
    const {data} = await axios.post('usuario', formData);

    alert("Usuario cadastrado com sucesso!");
}

async function auth(formData){
    try {
    
        const {data} = await axios.post('login', formData);
    
        alert("Usuario Logado com sucesso!");
    
    } catch (error) {
        alert("Usuario ou senha estão incorreto!")
        console.log(error);
    }
}
