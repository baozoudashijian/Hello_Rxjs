import { Observable  } from 'rxjs'

const $input = document.querySelector('.todo-val')

const input$ = Observable.fromEvent($input, 'keydown')
  .do(e => console.log(e))

const app$ = input$

app$.subscribe()
