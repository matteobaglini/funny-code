/*
 * TODO
 *
 *  array
 *  ... (rest operator)
 *  ternary operator
 */

const emptyList = []
const oneItemList = [ "foo" ]
const manyItemsList = [ "foo", "bar", "baz" ]


const length = (list) => {

  const inner = ([first, ...rest], acc) =>
    first === undefined
      ? acc
      : inner(rest, 1 + acc)

  return inner(list, 0)
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
