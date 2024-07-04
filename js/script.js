const inputCep = document.getElementById("cep");

inputCep.addEventListener(
    "blur", () => {
        const cep = inputCep.value;
        
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                document.getElementById("city").value = data.localidade;
                document.getElementById("state").value = data.uf;
                let street = document.getElementById("street");
                street.className = "street";
                street.removeAttribute("readonly");
            })
            .catch(error => console.error(
                "Erro ao buscar endereço: ",
                error
            ))
    }

)
