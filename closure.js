const moneyBox = (coins) => {
  var saveCoins = 0
  saveCoins += coins
  console.log(`Hay ${saveCoins} monedas`)
}

moneyBox(5)
moneyBox(10)

const moneyBox = () => {
  var saveCoins = 0
  const countCoins = (coins) => {
    saveCoins += coins
    console.log(`Money $${saveCoins}`)
  }

  return countCoins
}

let money = moneyBox()

money(4)
money(5)
money(19)
money(1)