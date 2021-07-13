// SELECTORS

const checkbox = document.getElementById('checkbox'),
price = document.getElementById('price-amount'),
pageviews = document.getElementById('pageview-count'),
duration = document.getElementById('month-amount');
range = document.getElementById('slider');

let thePrice = parseFloat(price.innerHTML);

// FUNCTIONS

function updatePageviews(){
  if(price.innerHTML == 6){
    pageviews.innerHTML = "10k";
  } else if(price.innerHTML == 8){
    pageviews.innerHTML = "20k";
  } else if(price.innerHTML == 12){
    pageviews.innerHTML = "50k";
  } else if(price.innerHTML == 16){
    pageviews.innerHTML = "100k";
  } else if(price.innerHTML == 20){
    pageviews.innerHTML = "200k";
  } else if(price.innerHTML == 24){
    pageviews.innerHTML = "500k";
  } else if(price.innerHTML == 30){
    pageviews.innerHTML = "1M";
  }
}

function updatePrice(){
  if(range.value == 1){
    thePrice = price.innerHTML = `6.00`;
  } else if(range.value > 1 && range.value <= 6){
    thePrice = price.innerHTML = (range.value*4).toFixed(2);
  } else if(range.value = 7){
    thePrice = price.innerHTML = parseFloat(30).toFixed(2);
  }
  updatePageviews();
  makeDiscount();
}

function makeDiscount(){
  if(checkbox.checked){
  price.innerHTML = parseFloat(`${thePrice - thePrice*.25}`).toFixed(2);
  } else {
    price.innerHTML = parseFloat(thePrice).toFixed(2);
  }
}

function updateTheColor(){
  range.style.backgroundImage = `linear-gradient(90deg, var(--slider-bar-color) ${16.66*(range.value - 1)}%, var(--empty-slider-bar) ${16.66*(range.value - 1)}%)`;
}

// EVENTLISTENERS

range.addEventListener('input', function(){
  updatePrice();
  updateTheColor();
});
checkbox.addEventListener('change', makeDiscount)








