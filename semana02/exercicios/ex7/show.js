function showForm(){
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let desc=document.getElementById('description').value;
    console.log(`Formulário de contato => Nome: ${name} - E-mail: ${email} - Descrição: ${desc}`);
    alert("Formulário enviado com sucesso!");
}