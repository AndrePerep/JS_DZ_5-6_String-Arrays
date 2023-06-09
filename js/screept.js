//________________________________________Домашнее задание JS 5-6______________________________________________



/*______________________________________________ЗАДАЧА 1_______________________________________________________
    Форма авторизации и регистрации - очень популярная и неотъемлемая часть многих веб-сайтов. Сейчас вы разработаете ее на JavaScript.
Представим, что на нашем сайте есть пользователь, у которого логин - это “the_best_user”, а пароль - “12345678”. Сохраните эти значения в переменные и назовите их existedUserLogin и existedUserPassword соответственно.
    Вам требуется с помощью функции prompt вывести 2 модальных окна на экран. 1-е будет с надписью “Введите логин”, 2-е - “Введите пароль”. Сохраните введенные пользователем значения в переменные userLogin и userPassword. Также учтите, что в итоговых данных пользователя не должно быть лишних пробелов в начале и в конце строки. Используйте метод trim, чтобы убрать лишние пробелы.
Если введенные пользователем логин и пароль совпадают с уже существующими данными в existedUserLogin и existedUserPassword, то выведите сообщение “Добро пожаловать, userLogin!” (замените userLogin на логин пользователя). Иначе же отобразите сообщение “Логин и (или) Пароль введены неверно!”.*/

const existedUserLogin = 'the_best_user'
const existedUserPassword = '12345678'
let userLogin = prompt('Введите логин').trim()
let userPassword = prompt('Введите пароль').trim()
if (existedUserLogin === userLogin && existedUserPassword === userPassword) {
    alert(`Добро пожаловать, ${userLogin}!`)
} else{
    alert(`Логин и (или) Пароль введены неверно!`)
}



/*______________________________________________ЗАДАЧА 2_______________________________________________________
2) С помощью prompt запросить у пользователя его имя. Передайте в prompt строку “Как вас зовут?” и введенный пользователем результат сохраните в переменную userName. Какое бы значение пользователь не ввел, вам требуется отформатировать строку userName по следующим условиям:
1. Все буквы должны быть строчными.
2. В начале и в конце строки не должно быть лишних пробелов.
После выведите в модальное окно с помощью alert строку “Вас зовут userName” (замените userName на отформатированный текст, введенный пользователем).*/

// let userName = prompt('Как вас зовут?')
// alert(`Вас зовут ${userName.trim().toLowerCase()}`)



/*______________________________________________ЗАДАЧА 3_______________________________________________________
3) Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' (разными методами строк)*/

// const str = 'Я учу javascript!'
// console.log(str.substring(2, 5))
// console.log(str.slice(6, str.length - 1))



/*______________________________________________ЗАДАЧА 4_______________________________________________________
4) Вам дан массив, элементами которого являются массивы.
const arr = [
[ 1, 2, 3 ],
[ 4, 5, 6 ],
[ 7, 8, 9 ],
];
Вам необходимо сделать из элементов вложенных массивов один массив. Итоговый результат должен выглядеть следующим образом: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ].
Условия:
1. Нельзя использовать метод массивов flat.*/

// const arr = [
//     [ 1, 2, 3 ],
//     [ 4, 5, 6 ],
//     [ 7, 8, 9 ],
//     ];
// let arrNew = []
// for (let i = 0; i < arr.length; i++) {
//         arrNew = arrNew.concat(arr[i])
// }
// console.log(arrNew)



/*______________________________________________ЗАДАЧА 5_______________________________________________________
5) С помощью циклов for вам необходимо создать матрицу 3x5. В итоге она должна выглядеть следующим образом:
Подсказка: как видите, в итоге получился массив из 3-х элементов, внутри которого хранятся массивы, каждый из которых имеет по 5 элементов. Это можно реализовать с помощью 2-х циклов for. Внутрь одного цикла for необходимо поместить еще один цикл.*/

// let arr = []
// for (let i = 0; i < 3; i++) {
//     let arr2 = []
//     for (let j = 0; j < 5; j++) {
//         arr2 [j] = Math.trunc(Math.random()*10)
//     }
//     arr [i] = arr2
// }
// console.log(arr)



/*______________________________________________ЗАДАЧА 6_______________________________________________________
6) Вам дан массив чисел.
const numbers = [10, 4, 100, -5, 54, 2];
Необходимо посчитать сумму кубов всех чисел в массиве. Например, для массива [1, 5, 9] должен быть следующий результат:
1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
Решите данную задачу 2-мя способами:
1. Через цикл for
2. Через цикл for of
Для данного массива numbers сумма кубов должна равняться 1158411.*/

// const numbers = [10, 4, 100, -5, 54, 2]
// // - - 1 Через цикл for
// let sum = 0
// for (let i = 0; i < numbers.length; i++) {
//     sum += Math.pow(numbers[i],3)
// }
// console.log(sum)
// // - - 1 Через цикл for of
// let sum2 = 0
// for (const j of numbers) {
//     sum2 += Math.pow(j,3)
// }
// console.log(sum2)



/*______________________________________________ЗАДАЧА 7_______________________________________________________
7) Дан массив ['John', 'Dan', 'David', 'Lambert', 'Eddie', 'Janett', 'Mike']
Вырезать из массива 'Lambert и 'Eddie'
Создать новый массив с вырезанными именами*/ 

// const arr = ['John', 'Dan', 'David', 'Lambert', 'Eddie', 'Janett', 'Mike']
// const arrNew = arr.splice(arr.indexOf('Lambert'),2)
// console.log(arrNew)