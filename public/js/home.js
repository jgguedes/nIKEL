const myModal = new bootstrap.Modal("#transaction-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

let data= {
    transactions: []
};

document.getElementById("button-logout").addEventListener("click, logout");
document.getElementById("transaction-button").addEventListener("clic", function(){
    window.location.href = transactions.html
})
document.getElementById("transaction-form").addEventListener("submit", function(ev){
    ev.preventDefault();

    const value = parseFloat document.getElementById("value-input").value
    const description.getElementById("description-input").value
    const date = document.getElementById("date-input").value
    const type = document.querySelector('input[name= "type-input"):checked').value

    data.transactions.unshift ({
        value: value, type: type, description: description, date:date
    });
        saveData(data);
        ev.targer.reset();
        myModal.hide();

    getCashIn();
    getCashOut();
    getTotal();
        
    alert("Lançamento realizado com sucesso");
    
});


checkLogged();

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

    getCashIn();
    getCashOut();
    getTotal();


function logout() {
    sessionStorage.removeItem("logged");
    localStorage.removeItem("session");

    Window.location.href = "index.html";
    }

function getcashIn(){
    const transaction = data.transactions;

    const getcashIn = transaction.filter(item) => item.type === "1";

    if(CacheStorage.length) {
        let cashInHtml = ``;
        let limit = 0;

        if(cash.length > 5) {
    limit = 5;
    }else {
    limit = cashIn.length
    }
     for (let index = 0;  index < limit; index++) {
         cashInHtml += `
         <div class="row mb-4">
            <div class="col-12">
                <h3 class="fs-2">R$ ${cashIn[index].value.tofixed(2)}</h3>
                    <div class="container p-0">
                        <div class="row">
                            <div class="col-12 col-md-8">
                                <p>${cashIn[index].description}</p>
                                    </div>
                                        <div class="col-12 col-md-3 d-flex justify-content-end">
                                            ${cashIn[index].date}
                        </div>
                    </div>
                </div>
            </div>
          </div>
         `
        }

        document.getElementById("cash-in-list").imerHTML = cashInHtml;
    }
}

function getcashOut(){
    const transaction = data.transactions;

    const getcashIn = transaction.filter(item) => item.type === "2";

    if(CacheStorage.length) {
        let cashInHtml = ``;
        let limit = 0;

        if(cash.length > 5) {
    limit = 5;
    }else {
    limit = cashIn.length
    }
     for (let index = 0;  index < limit; index++) {
         cashInHtml += `
         <div class="row mb-4">
            <div class="col-12">
                <h3 class="fs-2">R$ ${cashIn[index].value.tofixed(2)}</h3>
                    <div class="container p-0">
                        <div class="row">
                            <div class="col-12 col-md-8">
                                <p>${cashIn[index].description}</p>
                                    </div>
                                        <div class="col-12 col-md-3 d-flex justify-content-end">
                                            ${cashIn[index].date}
                        </div>
                    </div>
                </div>
            </div>
          </div>
         `
        }

        document.getElementById("cash-out-list").imerHTML = cashInHtml;
    }
}

function getTotal(){
    const transaction = data.transactions;
        let total = 0;

    transactions.forEach(item) => {
        if(item.type === "1") {
            total += item.value;
        }else{
            total -= item.value;
        }
    };

    document.getElementById("total").innerHTML = `R$ ${total.toFixed(2)}`;
    

}

function saveData(data){
        localStorage.setItem(data.login, JSON.stringify(data));
    }
 }