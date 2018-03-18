function justInvoke(fn) {
  return fn()
}

function setThisWithCall(fn, v, a) {
  return fn.call(v, a)
}
