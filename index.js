var Immutable = require('immutable')

exports.postStart = function(context) {
  const repl = context.repl

  repl.context.Immutable = Immutable
  repl.context.List = Immutable.List
  repl.context.Stack = Immutable.Stack
  repl.context.Map = Immutable.Map
  repl.context.OrderedMap = Immutable.OrderedMap
  repl.context.Set = Immutable.Set
  repl.context.OrderedSet = Immutable.OrderedSet
  repl.context.Record = Immutable.Record
}
