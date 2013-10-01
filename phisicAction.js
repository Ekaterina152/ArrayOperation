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
    var m= v[0]     // создаём массив
    for (var i=0; i <= v.length-1; i++)  //выполняем цикл
    { if (v[i] > m)      // ищем максимальное число
        m=v[i]          //сохраняем максимальное число в переменную m
    }
    return m         // возвращаем m
}

function mymin(v){
//    return r.min()

    var m= v[0]        // создаём массив
    for (var i=0; i <= v.length-1; i++)  //выполняем цикл
    { if (v[i] < m )     // ищем мнимальное число
        m= v[i]        //сохраняем минимальное число в переменную m
    }
    return m   // возвращаем m
}

function mysum(d) {
// summa

  var  sum = 0;   //создаём массив и начальное значение суммы
    for (var i=0; i < d.length; i++ ){ //выполняем цикл
        sum += d[i]  ;      //складываем все числа
    }
    return sum   //возвращаем сумму


}


function mymul(d){
// произведение
    var mul = 1;  //создаём массив и начальное значение произведения
    for (var i=0; i < d.length; i++ ){   //выполняем цикл
       mul *= d[i]  ; //перемножаем числа
    }
    return mul  //возвращаем произведение


}