let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];


function printReceipt(order) {
  console.log("QTY     ITEM                TOTAL");
  let totalCostPence = 0;

  for (let item of order) {
    let { itemName, quantity, unitPricePence } = item;
    let itemTotalPence = quantity * unitPricePence;
    totalCostPence += itemTotalPence;

    let itemTotalDollars = (itemTotalPence / 100).toFixed(2);
    console.log(
      `${quantity}       ${itemName.padEnd(18)}${itemTotalDollars}`
    );
  }

  let totalCostDollars = (totalCostPence / 100).toFixed(2);
  console.log(`\nTotal: ${totalCostDollars}`);
}

printReceipt(order);