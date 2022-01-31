import { mergeDeepRight } from 'ramda'

const noop = () => null

interface Result {
  ok: boolean,
  id?: string,
  msg?: string,
  status?: string
}

export interface HyperExtSearchify {
  ext: {
    searchify: {
      add: <Type>(body: Type) => Promise<Result>
    }
  }
}

export const searchify = <H extends Hyper>(hyper : H) : H & HyperExtSearchify => 
  mergeDeepRight(hyper, {
    ext: {
      searchify: {
        add: (body) => Promise.all([
          hyper.data.add,
          hyper.search.add
        ]).then(() => ({ok: true})),
        get: noop,
        update: noop,
        remove: noop
      }
    }
  })