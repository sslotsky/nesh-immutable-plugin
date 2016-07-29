import Immutable, { List, Stack, Map, OrderedMap, Set, OrderedSet, Record } from 'immutable'

export function postStart(context) {
  const repl = context.repl

  repl.context.Immutable = Immutable
  repl.context.List = List
  repl.context.Stack = Stack
  repl.context.Map = Map
  repl.context.OrderedMap = OrderedMap
  repl.context.Set = Set
  repl.context.OrderedSet = OrderedSet
  repl.context.Record = Record
}
