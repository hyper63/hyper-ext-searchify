import crocks from 'crocks'
import { mergeDeepLeft, compose, all as _all, equals, pluck } from 'ramda'

const { Async } = crocks
const { of, all, fromPromise } = Async 

console.log(of)

export const searchify = hyper => mergeDeepLeft({
  ext: {
    searchify: {
      add: (body) => 
      all([
          fromPromise(hyper.data.add)(body),
          fromPromise(hyper.search.add)(body)
      ])
      .map(compose(all(equals(true)), pluck('ok')))
      .chain(result => result === true 
        ? Async.Resolved({ok: true}) 
        : Async.Rejected({ok: false}))
      .toPromise()
    }
  }
})(hyper)