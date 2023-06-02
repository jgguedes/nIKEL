const myModal = new bootstrap.Modal("#transaction-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

let data= {
    transactions: []
};

document.getElementById("button-logout").addEventListener("click, logout");

sessionStorage.removeItem("logged");
localStorage.removeItem("session");

Window.location.href = "index.html";



document.getElementById("transaction-form").addEventListener("submit", function(ev){
    ev.preventDefault();

    conts value = parseFloat(document.getElementById("value-input").value);
    conts description.getElementById("description-input").value;
    conts date = document.getElementById("date-input").value;
    conts type = document.querySelector('input[name= "type-input"):checked').value

    data.transactions.unshift ({
        value: value, type: type, description: description, date:date
    };)
        saveData(data);
        ev.targer.reset();
        myModal.hide();

     getTransactionS();   

    alert("Lançamento realizado com sucesso");
    
    function checkLogged(){
        if(session){
            sessionStorage.setItem("logged", session);
            logged = session;
        }
        
        if(logged) {
             window.location.href = "index.html";
        }
    
        const dataUser = localStorage.getItem(logged);
        if(dataUser){
            data = JSON.parse(dataUser);
        }
    
    getTransactionS();

        getCashIn();
        getCashOut();
        getTotal();
        
     function logout(){
        sessionStorage.removeItem("logged");
        localStorage.removeItem("session");
        
        Window.location.href = "index.html";
     }
     
     function getTransaction() {
        const transactions = data.transactions;
        let transactionsHtml = ``

        if(transactions.length) {
            transactions.forEach(item) =>{
                lettype = "Entrada";

                if(item.type === "2") [
                    type = "Saída";
                ]
            }

            transactionsHtml += `
                <tr>
                    <th scope="row">${item.date}</th>
                    <td>${item.value.toFixed(2)}</td>
                    <td>${type}</td>
                    <td>${item.description}</td>
                 </tr>

            `
        
        }

    document.getElementById("transaction-list").innerHTML = transactionsHtml;

     }
     function saveData(data){
        localStorage.setItem(data.login, JSON.stringify(data));
}       
});
    
