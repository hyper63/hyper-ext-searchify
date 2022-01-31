import { assertEquals } from 'asserts'
import { searchify } from './mod.ts'

type Fn = (x:any) => any
const Identity = (v : any) => ({
  v,
  map: (fn : Fn) => Identity(fn(v)),
  extract: () => v
})
const of = (v : any) => Identity(v)

const _hyper = {
  data: {
    add: () => Promise.resolve({ok: true})
  },
  search: {
    add: () => Promise.resolve({ok: true})
  }
}

const test = Deno.test

test('ok', () => 
  assertEquals(true, true)
)

test('add document to searchify', async () => 
  of(searchify(_hyper))
    .map(async hyper => await hyper.ext.searchify.add({_id: 'movie-1', type: 'movie', title: 'Ghostbusters'}))
    .map(result => assertEquals(result.ok, true))

)