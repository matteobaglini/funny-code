/*
 * TODO
 *
 *  for loop
 *  array
 */

const emptyList = []
const oneItemList = [ "foo" ]
const manyItemsList = [ "foo", "bar", "baz" ]


const length = (list) => {
  let count = 0
  for(item in list)
    count++
  return count
}











// not interesting print utils
printAll()
function printAll() {

  function print(what, tx, x) {
    console.log(`=== ${what}`)
    console.log(tx(x))
    console.log()
  }

  console.log(`## length`)
  print("empty", length, emptyList)
  print("one", length, oneItemList)
  print("many", length, manyItemsList)
}
