/*
 * TODO
 *
 *  array
 *  toString
 *  slice
 */

const emptyList = []
const oneItemList = [ "foo" ]
const manyItemsList = [ "foo", "bar", "baz" ]


const length = ([first, ...rest]) =>
  first === undefined
    ? 0
    : 1 + length(rest)











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
