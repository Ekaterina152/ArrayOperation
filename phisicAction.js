/**
 * Created with JetBrains WebStorm.
 * User: Катя
 * Date: 15.09.13
 * Time: 16:18
 * To change this template use File | Settings | File Templates.
 */

//Тело высотой "a", длинной 'b', широной 'c', плотностью 'ro' двигают(без трения) параллельно поверхсти земли с коэффициентом трения 'mu',
//Найти работу совершаемую при перемещении тела на 'l' меторов, и Мощность за 't' секунд.

var a, b, c,//высота, длинна, ширина
    ro, mu, l, t, //плотность, коофициэнт, работа, время
    g=10

function A(a,b,c,ro,mu,l,g){
  var q = a*b*c*ro*mu*l*g

    return q

}

function N(a,b,c,ro,mu,l,t,g,t){
   var o = A(a,b,c,ro,mu,l,g)/t
   return o
}

//console.log(A(1,2,3,4,5,6,7))


a = [0, 1, 2, 3, 4, 5];

function mysort(v){
    //return v.sort()

}

function mymax(v){
//    return r.max()

}

function mymin(v){
//    return r.min()

}

function mysum(b) {
// summa

  var a = new Array(10), sum = 0;   //создаём массив и начальное значение суммы
    a = []; // сохраняем новые значения
    for (var i=0; i < a.length; i++ ){ //выполняем цикл
        sum += a[i]  ;      //складываем все числа
    }
    return sum   //возвращаем сумму


}


function mymul(b){
// произведение
    var a = new Array(10), mul = 1;  //создаём массив и начальное значение произведения
    a = []; // сохраняем новые значения
    for (var i=0; i < a.length; i++ ){   //выполняем цикл
       mul *= a[i]  ; //перемножаем числа
    }
    return mul  //возвращаем произведение


}