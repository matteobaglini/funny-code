/*
 * TODO
 *
 *  array
 *  ... (rest operator)
 *  ternary operator
 */

const EMPTY = null
const pair = (x, y) => { return {x, y} }
const first = (pair) => pair.x
const rest = (pair) => pair.y

const emptyList = pair(EMPTY, EMPTY)
const oneItemList = pair("foo", emptyList)
const manyItemsList = pair("foo", pair("bar", pair("baz", emptyList)))


const length = (list) => {

  const inner = (pair, acc) =>
    first(pair) === EMPTY
      ? acc
      : inner(rest(pair), 1 + acc)

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
