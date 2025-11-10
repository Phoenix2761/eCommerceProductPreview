function navbarResponsiveFunction() {
    document.querySelector("nav div svg").addEventListener("click", function () {
        const hoverMenu = document.querySelector("nav div ul");
        if ((hoverMenu.classList.contains("show") === true)) {
            hoverMenu.classList.remove("show"); 
        }
        else if ((hoverMenu.classList.contains("show")) === false) {
            hoverMenu.classList.add("show");
        }
        else {
            hoverMenu.style.display = "block";
        }
    });
}

var modalParentElement = document.querySelector("div.shoppingCartItemsModalContainer");
var shoppingCartButton = document.querySelector("button#shoppingCartButton");
var modalRemoveButton = document.querySelector("div.shoppingCartItemsModalContainer div.shoppingCartItems span.removeModalSpan");
var shoppingItemsSpan = document.querySelector("div.shoppingCartItemsModalContainer div.shoppingCartItems span.shoppingItems");
var addToCartButtonElement = document.querySelector("div.productActions button.addToCart");

function modalHandlers() {
    shoppingCartButton.addEventListener("click", function () {
        modalParentElement.classList.add("showModal");
    });

    modalRemoveButton.addEventListener("click", function () {
        modalParentElement.classList.remove("showModal");
    });

    modalParentElement.addEventListener("click", function (eventObject) {
        if (eventObject.target === modalParentElement) {
            modalParentElement.classList.remove("showModal");
        }
        else {

        }
    });
}
var purchaseButtonElements;
navbarResponsiveFunction();
modalHandlers();
var divItemsContainer = document.querySelector("div#itemsContainer");
divItemsContainer.innerHTML = "";
var xmlHttpRequestObject = new XMLHttpRequest();
xmlHttpRequestObject.open("GET", "./itemFetch.php");
xmlHttpRequestObject.responseType = "document";
xmlHttpRequestObject.send();
xmlHttpRequestObject.onreadystatechange = function () {
    if ((xmlHttpRequestObject.readyState === (XMLHttpRequest.DONE)) && ((xmlHttpRequestObject.status) === 200)) {
        divItemsContainer.innerHTML += this.responseXML.body.innerHTML;
        purchaseButtonElements = document.querySelectorAll("button.purchaseButton");
        console.log(purchaseButtonElements);
        for (var i=0; i < (purchaseButtonElements.length); i++) {
            purchaseButtonElements[i].addEventListener("click", function () {
                window.open(`./productPreview.php?imagePath=${this.parentElement.parentElement.parentElement.children[0].src}`);
            });
        }
    }
    else {
        console.log("xmlHttpRequest was not successful");
        console.log(`xmlHttpRequest.readyState: ${xmlHttpRequestObject.readyState}`);;
        console.log(`XMLHttpRequest.DONE: ${XMLHttpRequest.DONE}`);;
        console.log(`xmlHttpRequest.status: ${xmlHttpRequestObject.status}`);
        console.log(`xmlHttpRequest.statusText: ${xmlHttpRequestObject.statusText}`);;
        console.log(`this.responseXML.body: ${xmlHttpRequestObject.response}`);;
    }
}