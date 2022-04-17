import { fromEvent } from "rxjs";
import { filter } from 'rxjs/operators';

const $input = document.querySelector('.todo-val')

const input$ = fromEvent($input, 'keydown') // Observable对象

// filter: 筛选出keyCode !== 13 的keyDown数组
const inputKeyCode13$ = input$.pipe(filter((r) =>  r.keyCode === 13 )) // Observable对象


inputKeyCode13$.subscribe(x => console.log(x));
