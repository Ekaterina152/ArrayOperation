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

  var a = new Array(10), sum = 0;
    a = new Array(1,2,3);
    a = [4, 5];
    console.log([a]) ;
    console.log([sum]) ;
    for (var i=0; i < b.length; i++ ){
        console.log([i]);
        sum += b[i]  ;
        console.log([sum]);

    }
    return sum


}


function mymul(b){
// произведение
    var a = new Array(10), mul = 1;
    a = new Array(1,2,3);
    a = [4, 5];
    console.log([a]) ;
    console.log([mul]) ;
    for (var i=0; i < b.length; i++ ){
        console.log([i]);
       mul *= b[i]  ;
        console.log([mul]);

    }
    return mul


}