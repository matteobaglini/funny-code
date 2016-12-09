/*
 * TODO
 *
 *  ternary operator
 */

const kestrel = (x) => (y) => x
const identity = (x) => x
const vireo = (x) => (y) => (z) => z(x)(y)

const EMPTY = null
const first = kestrel
const rest = kestrel(identity)
const pair = vireo

const emptyList = pair(EMPTY)(EMPTY)
const oneItemList = pair("foo")(emptyList)
const manyItemsList = pair("foo")(pair("bar")(pair("baz")(emptyList)))


const length = (list) => {

  const inner = (pair, acc) =>
    pair(first) === EMPTY
      ? acc
      : inner(pair(rest), 1 + acc)

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
