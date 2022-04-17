import { fromEvent } from 'rxjs';

const $input = document.querySelector('.todo-val')

const input$ = fromEvent($input, 'keydown')

input$.subscribe(x => console.log(x));
