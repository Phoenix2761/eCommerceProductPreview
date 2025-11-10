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

navbarResponsiveFunction();

function imageMagnification() {
    /* var image;
    var lensOne; */

    var image = document.querySelector("div#productPreviewContainer div.productPreviewCarousel div.productImageContainer img.active");
    var lensOne = document.querySelector("div#productPreviewLens");
    // resultDiv = document.querySelector("div.productPreviewContainer div#imagePreviewContainer");
    var imageWidthRatioFactor = ((image.offsetWidth) / (lensOne.offsetWidth));
    var imageHeightRatioFactor = ((image.offsetHeight) / (lensOne.offsetHeight));

    lensOne.style.backgroundImage = "url(" + (image.src) + ")";
    // console.log("mainproductImageSrc: " + (image.src));
    lensOne.style.backgroundSize = ((((image.width) * imageWidthRatioFactor) + "px ") + (((image.height) * imageHeightRatioFactor)) + "px");

    function getCursorPosition(eventObject) {
        var boundingClientRectangle = image.getBoundingClientRect();
        var xCoordinate = ((eventObject.pageX) - (boundingClientRectangle.left));
        var yCoordinate = ((eventObject.pageY) - (boundingClientRectangle.top));

        xCoordinate = (xCoordinate - (window.pageXOffset));
        yCoordinate = (yCoordinate - (window.pageYOffset));
        return {xCoordinate: xCoordinate, yCoordinate: yCoordinate};
    }

    function lensMove(eventObject) {
        eventObject.preventDefault();

        var cursorPosition = getCursorPosition(eventObject);
        var xPosition = ((cursorPosition.xCoordinate) - ((lensOne.offsetWidth) / 2));
        var yPosition = ((cursorPosition.yCoordinate) - ((lensOne.offsetHeight) / 2));

        /* console.log("xPosition: " + xPosition);
        console.log("yPosition: " + yPosition); */

        if (xPosition > ((image.width) - (lensOne.offsetWidth))) {
            xPosition = ((image.width) - (lensOne.offsetWidth));
        }
        else if (xPosition < 0) {
            xPosition = 0;
        }
        else {
            // No execution
        }

        if (yPosition > ((image.height) - lensOne.offsetHeight)) {
            yPosition = ((image.height) - lensOne.offsetHeight);
        }
        else if (yPosition < 0) {
            yPosition = 0;
        }
        else {
            // No execution
        }

        lensOne.style.left = (xPosition + "px");
        lensOne.style.top = (yPosition + "px");
        lensOne.style.backgroundPosition = "-" + (xPosition * imageWidthRatioFactor) + "px -" + (yPosition * imageHeightRatioFactor) + "px";
    }

    image.addEventListener("mousemove", lensMove);
    lensOne.addEventListener("mousemove", lensMove);
    image.addEventListener("touchmove", lensMove);
    lensOne.addEventListener("touchmove", lensMove);
    if ((image.style.display) === "none") {
        lensOne.style.display = "none";
    }
    else if ((image.style.display) === "block") {
        lensOne.style.display = "block";
    }
    else {
        // No execution
    }
}

window.addEventListener("resize", imageMagnification);

var index = 0;
var images = document.querySelectorAll("div.productPreviewCarousel div.productImageContainer img");
var slideImageIndicators = document.querySelectorAll("div.productVariationsContainer div.imageViewsContainer img");
var productDetails = [[0, "Army Green", "NGN15000.00", "GUCCI", images[0]], [1, "Black", "NGN18000.00", "GUCCI", images[1]], 
[2, "XT12", "NGN20000.00", "GUCCI", images[2]], [3, "Sand Brown", "NGN12000.00", "GUCCI", images[3]]];
// console.log("productDetails[1].src: " + productDetails[1][4].src);
var productName = document.querySelector("div.productActions span.productName");
var productPrice = document.querySelector("div.productActions span.productPrice");
var productBrand = document.querySelector("div.productActions span.productBrand");
function setProductDetails(indexOfProductObject) {
    var productArray = productDetails[indexOfProductObject];
    /* console.log("productArray: " + productArray);
    console.log("productName: " + productName);
    console.log("productPrice: " + productPrice);
    console.log("indexOfProductObject: " + indexOfProductObject); */
    productName.textContent = productArray[1];
    productPrice.textContent = productArray[2];
    productBrand.textContent = productArray[3];
    
}

var modalParentElement = document.querySelector("div.shoppingCartItemsModalContainer");
var shoppingCartButton = document.querySelector("button#shoppingCartButton");
var modalRemoveButton = document.querySelector("div.shoppingCartItemsModalContainer div.shoppingCartItems span.removeModalSpan");
var shoppingItemsSpan = document.querySelector("div.shoppingCartItemsModalContainer div.shoppingCartItems span.shoppingItems");
var addToCartButtonElement = document.querySelector("div.productActions button.addToCart");
// console.log(addToCartButtonElement);
var shoppingCartItemsArray = [];
function addItemToShoppingCartItemsArray(itemsArray) {
    shoppingCartItemsArray.push(itemsArray);
}

function removeItemFromShoppingCartItemsArray(itemsArray) {
    for (let q=0; q < (shoppingCartItemsArray.length); q++) {
        if ((shoppingCartItemsArray[q][1]) === (itemsArray[1])) {
            shoppingCartItemsArray.splice(q, 1);
            /* console.log(`shoppingCartItemsArray ${q}th iteration`);
            console.log(`shoppingCartItemsArray${q}th element: ${shoppingCartItemsArray}`); */
        }
        else {
            continue;
        }
    }
    console.log(shoppingCartItemsArray);
    shoppingItemsSpan.innerHTML = "";
    console.log("shoppingCartItemsArray: " + shoppingCartItemsArray);
    for (var s=0; s < (shoppingCartItemsArray.length); s++) {
        shoppingItemsSpan.innerHTML += (`
        <span class="item">
            <img src="${shoppingCartItemsArray[s][4].src}" alt="${shoppingCartItemsArray[s][1]}"/>
            <span>${shoppingCartItemsArray[s][1]}</span>
            <span>${shoppingCartItemsArray[s][2]}</span>
            <span>${shoppingCartItemsArray[s][3]}</span>
            <span class='removeItemButton'>&times;</span>
        </span>`);
    };
}
var p = null;
// var shoppingItemsRemoveButtons;
addToCartButtonElement.addEventListener("click", function () {
    console.log("Testing...");
});
addToCartButtonElement.addEventListener("click", function () {
    for (let r=0; r < (slideImageIndicators.length); r++) {
        if (slideImageIndicators[r].classList.contains("active") === true) {
            /* console.log("slideImageIndicators: " + slideImageIndicators);
            console.log("slideImageIndicators[r]: " + (slideImageIndicators[r].src)); */
            for (let s=0; s < (productDetails.length); s++) {
                if ((slideImageIndicators[r].src) === (productDetails[s][4].src)) {
                    // console.log("productDetails[s][4].src: " + productDetails[s][4].src);
                    shoppingCartItemsArray.push(productDetails[s]);
                    // console.log("shoppingCartItemsArrayLength_: " + (shoppingCartItemsArray.length));
                    break;
                }
                else {
                    continue;
                }
            }
        }
        else {
            continue;
        }
    }
    shoppingItemsSpan.innerHTML += (`
        <span class="item">
            <img src="${shoppingCartItemsArray[(shoppingCartItemsArray.length - 1)][4].src}" alt="${shoppingCartItemsArray[(shoppingCartItemsArray.length - 1)][1]}"/>
            <span>${shoppingCartItemsArray[(shoppingCartItemsArray.length - 1)][1]}</span>
            <span>${shoppingCartItemsArray[(shoppingCartItemsArray.length - 1)][2]}</span>
            <span>${shoppingCartItemsArray[(shoppingCartItemsArray.length - 1)][3]}</span>
            <span class='removeItemButton'>&times;</span>
        </span>
    `);
    shoppingItemsRemoveButtons = document.querySelectorAll("div.shoppingCartItems span.shoppingItems span.item");
    /* for (var indexOne=0; indexOne<(shoppingItemsRemoveButtons.length); indexOne++) {
        console.log("shoppingItemsRemoveButtons: " + shoppingItemsRemoveButtons[indexOne]);
    }
    console.log(`shoppingItemsRemoveButtons.length: ${shoppingItemsRemoveButtons.length}`); */
    for (let indexTwo=0; indexTwo < (shoppingItemsRemoveButtons.length); indexTwo++) {
        // console.log(shoppingItemsSpan.children[(shoppingItemsSpan.children.length) - 1]);
        shoppingItemsSpan.children[indexTwo].children[4].addEventListener("click", function () {
            console.log(shoppingItemsSpan.children[indexTwo].children[4]);
            console.log(typeof(shoppingItemsRemoveButtons));
            var indexOfItem = 0;
            for (var indexOfShoppingCartItem=0; indexOfShoppingCartItem<(shoppingItemsRemoveButtons.length); indexOfShoppingCartItem++) {
                if (shoppingItemsRemoveButtons[indexOfShoppingCartItem] === this) {
                    indexOfItem = indexOfShoppingCartItem;
                }
                else {
                    continue;
                }
            }
            console.log("indexOfItem: " + indexOfItem);
            shoppingItemsSpan.splice((indexOfShoppingCartItem), 1);
            shoppingItemsRemoveButtons.innerHTML += "1w";
        });
    }
    // for (var r=0; r < (shoppingItemsRemoveButtons.length); r++) {
    // var t = r;
    // console.log(`shoppingItemsRemoveButtonsForLoop ${t}th iteration.`);
    function addRemovalEventListenerFunction () {
        console.log(typeof(this.parentElement.parentElement.children));
        removeItemFromShoppingCartItemsArray();
    }
});

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
modalHandlers();

export {navbarResponsiveFunction, modalHandlers};

function changeSlide(indexToChangeTo) {
    // console.log("indexToChangeTo(beforeValidation): " + indexToChangeTo);
    if (indexToChangeTo >= (images.length)) {
        indexToChangeTo = 0;
    }
    else if (indexToChangeTo < 0) {
        indexToChangeTo = ((images.length) - 1);
        // console.log("imagesLength: " + (images.length));
    }
    else {
        // No execution
    }

    // console.log("indexToChangeTo: " + indexToChangeTo);

    for (var j=0; j < (images.length); j++) {
        images[j].classList.remove("active");
    }

    for (var k=0; k < (slideImageIndicators.length); k++) {
        slideImageIndicators[k].classList.remove("active");
    }

    images[indexToChangeTo].classList.add("active");
    slideImageIndicators[indexToChangeTo].classList.add("active");
    setProductDetails(indexToChangeTo);
    imageMagnification();
}

function nextSlide(N) {
    changeSlide(N + 1);
}

function currentSlide(number) {
    changeSlide(number);
}

document.querySelector("div#productPreviewContainer div.productPreviewCarousel span.previousSlideButton").addEventListener("click", function () {
    for (var l = 1; l <= (images.length); l++) {
        if ((images[l - 1].classList.contains("active")) === true) {
            // console.log("l-2 is: " + (l - 2));
            changeSlide(l - 2);
            imageMagnification();
            // setProductDetails(l - 2);
            break;
        }
        else {
            continue;
        }
    }
});

document.querySelector("div#productPreviewContainer div.productPreviewCarousel span.nextSlideButton").addEventListener("click", function () {
    for (var m = 1; m <= (images.length); m++) {
        if ((images[m - 1].classList.contains("active")) === true) {
            // console.log("m is: " + m);
            changeSlide(m);
            imageMagnification();
            // setProductDetails(m);
            break;
        }
        else {
            continue;
        }
    }
});

for (var n = 0; n < (slideImageIndicators.length); n++) {
    var indexOfCurrentSlide = n;
    slideImageIndicators[n].addEventListener("click", function () {
        var indexOfSlideImageElement = Array.from(slideImageIndicators).indexOf(this);
        changeSlide(indexOfSlideImageElement);
        setProductDetails(indexOfSlideImageElement);
        // alert("Loading...");
    });
}

const feedbackContentContainer = document.querySelector("span.feedbackContentContainer");
const feedBackTextAreaElement = document.querySelector("textarea#feedbackContent");
const feedBackButton = document.querySelector("span.sendFeedback");
const giveFeedbackButton = document.querySelector("button.feedbackButton");
console.log(giveFeedbackButton);

function giveFeedback(feedbackText) {
    const feedbackItemsContainer = document.querySelector("span.feedbackItemsContainer");
    feedbackItemsContainer.innerHTML += `
        <span class="feedbackItem">
            <span class="userNameContainer"> Unknown User </span>
            <span class="reviewContainer"> ${feedbackText} </span>
        </span>
    `;
    feedBackTextAreaElement.value = "";
}

giveFeedbackButton.addEventListener("click", function () {
    if ((feedbackContentContainer.classList.contains("show") === false)) {
        // console.log("textOne");
        giveFeedbackButton.classList.add("hide");
        // feedBackTextAreaElement.classList.add("show");
        // feedBackButton.classList.add("show");
        feedbackContentContainer.classList.add("show");
        feedBackButton.addEventListener("click", function () {
            if (feedBackTextAreaElement.value === "") {
                // No execution
            }
            else {
                giveFeedback(feedBackTextAreaElement.value);   
            }
            // console.log("sendFeedbackButton clicked!");
        });
    }
    else if (feedbackContentContainer.classList.contains("show") === true) {
        // console.log("textTwo");
        giveFeedbackButton.classList.remove("hide");
        // feedBackTextAreaElement.classList.remove("show");
        // feedBackButton.classList.remove("show");
        feedbackContentContainer.classList.remove("show");
    }
    else {
        // console.log("textThree");
    }
});

changeSlide(index);
imageMagnification();