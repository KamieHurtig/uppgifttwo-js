var operatorValue = []

function countTotal (event) {
  // hemsidan ska inte uppdateras
  event.preventDefault()

  // när användare lägger till inkomster
  var operator = document.querySelector('#operator')

  if (operator.value === '+') {
    var description = document.querySelector('#description').value
    var value = document.querySelector('#value').value

    operatorValue.push(Number(value))

    var inkomstData = document.querySelector('.inkomst-data')
    inkomstData.innerText = value

    var li = document.createElement('li')
    li.innerText = description + ' : ' + value
    var ul = document.querySelector('.listaInkomst')
    ul.appendChild(li)
  } else if (operator.value === '-') {
    description = document.querySelector('#description').value
    value = document.querySelector('#value').value

    operatorValue.push(Number(-value))

    var utgiftData = document.querySelector('.utgift-data')
    utgiftData.innerText = value

    li = document.createElement('li')
    li.innerText = description + ' : ' + value
    ul = document.querySelector('.listaUtgift')
    ul.appendChild(li)
  }

  // Räknar ihop totalt kvar
  var totalt = 0
  for (var i = 0; i < operatorValue.length; i++) {
    totalt += operatorValue[i]
  }

  var totalSpan = document.querySelector('.totalt-data')
  totalSpan.innerText = totalt
}

// button Lägg till click event
var btn = document.querySelector('.btn1')
btn.addEventListener('click', countTotal)
