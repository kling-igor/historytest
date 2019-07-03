// ;(async () => {
//   const val = await Promise.resolve(42)
//   console.log(val)
// })()

import produce, { applyPatches } from 'immer'

const patches = [{ op: 'replace', path: ['public'], value: false }, { op: 'add', path: ['visibility'], value: false }]

const inversePatches = [{ op: 'replace', path: ['public'], value: true }, { op: 'remove', path: ['visibility'] }]

// const newState = produce({}, draft => {
//   draft.foo = 42
// }, (patches, inversePatches) => {

// })

const initialState = {
  public: false
}

const restoredState = applyPatches(initialState, inversePatches)

console.log(JSON.stringify(restoredState))

/*
иметь начальное состояние объекта

применить модификацию 1

применить модификацию 2

применить модификацию 3

применить модификацию 4

история должна состоять из 5 значений (самые новыe отображаются для пользователя сверху)


undo - перемещение по истории к более старым состояниям (оперирует historyMoment)
redo - перемещение из глубины истории к более новыми состояниям (оперирует historyMoment)


откат к состоянию с индексом 0 должен привести к изначальному состоянию

undo / redo операции должны менять historyMoment - в списке изменений это должно отражаться на том, какой элемент будет выделен


сдвинуть historyMoment на середину истории
провести модификацию
история должна быть правильно срезана и добавлена проведенной модификацией, redo - off
*/
