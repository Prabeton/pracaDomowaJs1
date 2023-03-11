//--------------------------
//  1.  ZMIENNE I TYPY
//--------------------------

// !a) zdefiniuj zmienne const z wartościami w następujących typach: boolean, number, string. Wyloguj w konsoli te zmienne oraz użyj typeof aby wyświetlić również typy danych
console.log("---------------- 1 a ----------------");
const bool = true;
const number = 10;
const word = "string";
console.log(`${bool} "Jest to typ:" ${typeof bool}`);
console.log(`${number} "Jest to typ:" ${typeof number}`);
console.log(`${word} "Jest to typ:" ${typeof word}`);

//!b) użyj console log i wyświetl wyniki poniższych działań, dodatkowo wyjaśnij: jaki jest typ wyniku i z czego wynika.
// 2 + "2"
// 2 + 2
// 2 * "2"
// 2 * 2
// 1 == true
// 0 == false
// 0 == null
// null == undefined

//napisz dodatkowo czym różnią się następujące zapisy: "=", "==", "==="

console.log("---------------- 1 b ----------------");

console.log('(2 + "2")');
console.log(2 + "2");
console.log("Jest to typ 'string'. Wynika to z tego, że podczas dodawania typu number do typu string zachodzi niejawna konwersja typu number na typ string.");
console.log("------------");
console.log("(2 + 2)");
console.log(2 + 2);
console.log("Jest to typ 'number'. Wynika to z tego, że podczas dodawania typu number do typu number nie zachodzi niejawna konwersja typów.");
console.log("------------");
console.log('(2 * "2")');
console.log(2 * "2");
console.log("Jest to typ 'number'. Wynika to z tego, że podczas operacji mnożenia typu number przez typu string zachodzi niejawna konwersja typu string na typ number.");
console.log("------------");
console.log("(2 * 2)");
console.log(2 * 2);
console.log("Jest to typ 'number'. Wynika to z tego, że podczas operacji mnożenia typu number przez typu number nie zachodzi niejawna konwersja typów.");
console.log("------------");
console.log("(1 == true)");
console.log(1 == true);
console.log("Wynikiem porównania jest typ 'boolean' (true).");
console.log("Wartość true jest przekonwertowana niejawnie na typ number (wartość 1). (1 == 1) => true.");
console.log("------------");
console.log("0 == false");
console.log(0 == false);
console.log("Wynikiem porównania jest typ 'boolean' (true).");
console.log("Wartość false jest przekonwertowana niejawnie na typ number (wartość 0). (0 == 0) => true.");
console.log("------------");
console.log("(0 == null)");
console.log(0 == null);
console.log("Wynikiem porównania jest typ 'boolean' (false). Wartość null jest tu  specjalną warością i nie jest to zero.");
console.log("------------");
console.log("(null == undefined");
console.log(null == undefined);
console.log("Ten wynik daję warość true i jest typu 'boolean'. Wynika to ze specyfikacji ECMAScript.");
console.log("------------");
console.log("Znak '=' to operator przypisania. Przypisuje wartość po prawej stronie znaku '=' do zmiennej po lewej stronie znaku.");
console.log("Znak '==' to operator porównania. Porównuje tylko warości a nie porównuje typów.");
console.log("Znak '===' to operator porównania. Porównuje zarówno warości jak i typy.");

//!c) napisz krótko czym różni się typ referencyjny od typu prostego, oraz podaj przykłady tych typów. Odpowiedź wyświetl w konsoli
console.log("---------------- 1 c ----------------");
console.log("Do typów prostych należą: typ 'string', typ 'number', typ 'boolean', typ 'symbol', 'typ null', typ 'bigint', typ 'undifined'.");
console.log("Typy referencyjne (obiektowe) to: 'function', 'object', 'array'.");
console.log("Te typy różnią się np. w sposobie 'przkazywanie wartości' w przypadku typu prostego w sytuacji np. `'zamienna-2' = 'zmienna-1'` do 'zmienna-2' przekazywana jest ");
console.log("kopia wartości 'zmienna-1' i późniejsze operacje wykonywane np. na 'zmienna-2' nie wpływają na 'zmienna-1'. Obie zmienne \"żyją\" niejako swoim własnym życiem.");
console.log("W przypadku typów obiektowych w sytuacji: array1 = array2 przekazywana jest referencja czyli wskazanie na adres pod którym znajduje sie tablica.");
console.log("Finalnie mamy dwie zmienne (array1 i array2), które wskazują na tę samą tablicę (albo obiekt) i modyfikacja tej tablicy za pomocą którejś z tych zmiennych");
console.log("powoduję modyfikację oryginału a więc będzie ona (ta modyfikacja) widoczna też przy wywołaniu tej drugiej zmiennej.");
console.log('W przypadku typów referencyjnych przekazujemy orginał danej tablicy czy objectu do dalszej "obróbki".');
console.log('Różnice między typami prostymi i referencyjnymi objawiaja się np. przy użyciu operatora "==".');
console.log("Chodzi o to, że dwa różne obiekty mające pozornie taką samą wartość przy porównaniu dadzą nam false.");

//d) spróbuj przekonwertować i wyświetlić w konsoli poniższe wartości:
// let val = 0 (przekonwertuj na typ Boolean)
// let num = "2137" (przekonwertuj na typ Number)
// let str = 007 (przekonwertuj na String)
// let und = undefined (przekonwertuj na Boolean)
console.log("---------------- 1 d ----------------");
let val = 0;
console.log("Zmienna val = 0 przekonwertowana na typ boolean:");
console.log(Boolean(val));
let num = "2137";
console.log('Zmienna num = "2137" przekonwertowana na typ number:');
console.log(Number(num));
let str = 007;
console.log("Zmienna str = 007 przekonwertowana na typ string:");
console.log(String(str));
let und = undefined;
console.log("Zmienna und = undefined przekonwertowana na typ boolean:");
console.log(Boolean(und));

//e) stwórz pustą tablicę za pomocą new Array() i dodaj do niej 3 elementy za pomocą .push(), wyświetl wynik w konsoli
console.log("---------------- 1 e ----------------");
const array1 = new Array();
console.log("Pusta tablica 'array1' zadeklarowana przy pomocy new Array():");
console.log(array1);
console.log("Tablica 'array1' po dodaniu trzech elementów metodą push():");
const element1 = "element1";
const element2 = "element2";
const element3 = "element3";
array1.push(element1, element2, element3);
console.log(array1);

//f) swtórz pusty obiekt za pomocą new Object() i dodaj do niego 3 klucze z wartościami, wyświetl wynik w konsoli
console.log("---------------- 1 f ----------------");
console.log("Pysty objekt stworzony za pomocą new Object():");
const car = new Object();
console.log(car);
console.log("Ten sam ocjekt po dodaniu 3 kluczy z wartościami:");
car.mark = "Opel";
car.color = "dimond-shwartz-metalic";
car.mileage = 287456;
console.log(car);

//g)* opisz krótko czym dokładnie jest typ NaN
console.log("---------------- 1 g ----------------");
console.log("NaN jest specjalną wartością, którą możemy otrzymać np. przy stosowaniu operacji matematycznych na niematematycznych wartościach.");
console.log("Rozwinięcie tego anagramu to: 'Not a Number' i choć oznacza to 'brak liczby' to sama wartość NaN jest typu 'number'.");
console.log("NaN jest wartością unikalną za każdym razem, co oznacza, że każde NaN jest inne od innego NaN (NaN === NaN) => false.");

//h)** znajdź w sieci informacje o typie Symbol i opisz go krótko
console.log("---------------- 1 h ----------------");
console.log("Typ 'symbol' jest typem prostym wprowadzonym w ES6 i służy do przechowywania wartości unikatowych (np do tworzenia unikatowych kluczy w obiektach).");
console.log("Dzięki temu może mieć większą pewność, że nie nadpiszemy nioczego czego nie chcemy. Tworzymy je za pomocą tzn. Fabryki (funkcji fabrykującaj)");
console.log("a nie za pomocą Konstruktora. Robimy to tak: 'const mySymbol = Symbol()'");

//--------------------------
//   2. FUNKCJE & WARUNKI
//--------------------------

//a) napisz funkcję która przyjmie trzy parametry i zwróci ich sumę. Wyświetl w konsoli wynik dodawania dowolnych trzech liczb
console.log("---------------- 2 a ----------------");
console.log("Funkcja przyjmująca trzy argumenty i zwracająca ich sumę.");
function sumaTrzech(arg1, arg2, arg3) {
  return arg1 + arg2 + arg3;
}
let suma3 = sumaTrzech(10, 20, 30);
console.log(`"Wynik dodawania 10+20+30 to: ${suma3}"`);

//b) napisz funkcję która przymie dwa parametry, wysokość i podstawę trójkąta a następnie obliczy i zwróci pole trójkąta. Przekaż do funkcji dowolne wartości i wyświetl w konsoli wynik
console.log("---------------- 2 b ----------------");
function poleTrojkata(width, height) {
  const pole = (1 / 2) * width * height;
  return pole;
}
let poleT = poleTrojkata(10, 15);
console.log("Funkcja przyjmuje dwa argumenty: podstawę i wysokość trójkąta a zwraca jego pole.");
console.log(`"Pole trójkąta o podstawie=10 i wysokości=15 wynosi: ${poleT}"`);

//c) napisz funkcję która przyjmie aktualny wiek i obliczy oraz zwróci informację ile lat minęło od 18 urodzin. Jeśli podany wiek będzie mniejszy niż 18, użyj if aby zwrócić taką informację
console.log("---------------- 2 c ----------------");
function ileDoroslosci(age) {
  let agee = age;
  let dystans;
  if (agee < 18) {
    console.log("Masz poniżej 18 lat! Ten test jest dla pełnoletnich.");
  } else {
    dystans = age - 18;
    console.log(`"Od Twoich 18-stych urodzin mineło ${dystans} lat."`);
  }
}
let ileLat = 45;
console.log(`"Masz ${ileLat} lat."`);
ileDoroslosci(ileLat);

//d) napisz funkcję która przyjmie tablicę z co najmniej 3 elementami i zwróci następujący komunikat: "Przekazana tablica ma X elementów a elementem numer 3 jest X"
// w miejscach oznaczonych jako X powinny wyświetlać się odpowienie wartości
console.log("---------------- 2 d ----------------");
const arr = ["cebula", "worek", "śróbka", "tadeusz", "samolot"];
function mixElement(array) {
  const arrX = array;
  console.log(`"Przekazana tablica ma ${arrX.length} elementów a elementem 3 jest: ${arrX[2]}"`);
}
mixElement(arr);

//e) napisz funkcję która przyjmie obiekt testPerson i zwróci komunikat "Pan/i (imię) (nazwisko) ma (wiek) lat oraz (wzrost) cm wzrostu".
// Możesz zdefiniować inną osobę i użyc funkcji ponownie.
console.log("---------------- 2 e ----------------");

let testPerson = {
  name: "Jan",
  surname: "Kowalski",
  age: 20,
  height: 180,
};

function viuePerson(object) {
  console.log(`"Pan/i ${object.name} ${object.surname} ma ${object.age} lat oraz ${object.height} cm wzrostu"`);
}
viuePerson(testPerson);

//f) napisz funkcję która przyjmie obiekt testPerson oraz drugi parametr. Funkcja powinna zmienić wartośc jednego z klucza w obiekcie. Spróbuj zmodyfikować na przykład wiek.
console.log("---------------- 2 f ----------------");
function modPerson(object, age) {
  object.age = age;
  console.log(object);
}
modPerson(testPerson, 34);

//g) napisz funkcję która przyjmie jeden parametr. Jeśli parametr nie jest typu Number, funkcja powinna zwrócić informację w konsoli,
// że przyjmowany jest tylko typ number. Jeśli przekazana wartość jest typu Number:
// - gdy cyfra jest podzielna przez 3 i 5, niech zwróci string "FizzBuzz"
// - gdy cyfra jest podzielna przez 3, niech zwróci string "Fizz"
// - gdy cyfra jest podzielna przez 5, niech zwróci string "Buzz"
console.log("---------------- 2 g ----------------");
function fizzBuzz(number) {
  if (typeof number !== "number") {
    console.log("Przyjmowany jest tylko typ number!");
  } else if (number % 3 == 0 && number % 5 == 0) {
    console.log("FizzBuzz");
  } else if (number % 3 == 0) {
    console.log("Fizz");
  } else if (number % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log("PyrrPyrrPyrr - ta liczba nie jest podzielna ani przez 3 ani przez 5");
  }
}
fizzBuzz(15);

//h) napisz funkcję która przyjmie numer a następnie sprawdzi czy cyfra jest parzysta i zwróci informację. Użyj operatora trójargumentowego
console.log("---------------- 2 h ----------------");
function parzystosc(number) {
  number % 2 === 0 ? console.log("Ta liczba jest parzysta.") : console.log("Ta liczba jest nieparzysta");
}
parzystosc(7100);

//i)* napisz funkcję która wylosuje i zwróci liczbę od 1 do 10
console.log("---------------- 2 i ----------------");
function liczbaLosowa() {
  let losowa = Math.floor(Math.random() * 10 + 1);
  console.log("Wylosowana liczba z zakresu 1-10 to:");
  console.log(losowa);
}
liczbaLosowa();

//j)** napisz funkcję która przyjmie dwie liczby, a następnie wylosuje i zwróci liczbę z podanego zakresu
console.log("---------------- 2 j ----------------");
function liczbaLosowaZzakresu(start, stop) {
  let losowa = Math.floor(Math.random() * (stop - start + 1)) + start;
  console.log(`"Wylosowana liczba z zakresu ${start}-${stop} to:"`);
  console.log(losowa);
}
liczbaLosowaZzakresu(33, 58);

//k)*** wyszukaj w internecie metody Javascriptowe Math. i użyj trzech z nich aby napisać funkcje wykonujące działania według Twojego własnego pomysłu.
console.log("---------------- 2 k ----------------");
console.log("Funkcja korzysta z takich metod jak Math.pow(), Math.sqrt(), Math.floor()");
console.log("Jest przeznaczona dla ośmioklasistów jako samodzielna weryfikacja znajomości twierdzenia Pitagorasa.");
console.log("Funkcja liczy przeciwprostokątną przy podanych przyprostokątnych, a wynika podaje z dokładnością do drugiego miejsca po przecinku.");
console.log("Pamiętaj! Najpierw policz na kartce a potem sprawdź!");
function przeciwprostokątnaFn(przyprostokątna1, przyprostokątna2) {
  let przeciwprostokątna = Math.floor(Math.sqrt(Math.pow(przyprostokątna1, 2) + Math.pow(przyprostokątna2, 2)) * 100) / 100;
  console.log(`"Dla przyprostokątnej równej ${przyprostokątna1} i przyprostokątnej równej ${przyprostokątna2} przeciwprostokątna ma długość: ${przeciwprostokątna}"`);
}
przeciwprostokątnaFn(3.5, 4.74);

//--------------------------
// 3. FUNKCJE & PĘTLE
//--------------------------

//uwaga! Możesz spróbować każdą z pętli napisać w funkcji
// Uwaga!! Jasne, bez problemu ale na gotowo oddam same pętle a od zadania 'j' z funkcjami - tak dla porządku umysłu ;)

//a) napisz pętlę która odliczy od 1 do 9
console.log("---------------- 3 a ----------------");
for (let i = 1; i <= 9; i++) {
  console.log(i);
}
//b) napisz pętlę która odliczy od 9 do 1
console.log("---------------- 3 b ----------------");
for (let i = 9; i >= 1; i--) {
  console.log(i);
}
//c) napisz pętlę która odliczy od 5 do 15
console.log("---------------- 3 c ----------------");
for (let i = 5; i <= 15; i++) {
  console.log(i);
}
//d) napisz pętlę która odliczy od 0 do -10
console.log("---------------- 3 d ----------------");
for (let i = 0; i >= -10; i--) {
  console.log(i);
}
//e) napisz pętlę która odliczy od 1 do 20, iteracja co 2
console.log("---------------- 3 e ----------------");
for (let i = 1; i <= 20; i = i + 2) {
  console.log(i);
}
//f) napisz pętlę która odliczy od 10 do -10, iteracja co 4
console.log("---------------- 3 f ----------------");
for (let i = 10; i >= -10; i = i - 4) {
  console.log(i);
}
//g)* napisz pętlę, ktora będzie odliczać od 1 do 100, ale iteracja z każdym wykonaniem będzie rosła dwukrotnie, czyli 1, 2, 4, 8...
console.log("---------------- 3 g ----------------");
for (let i = 1; i <= 100; i = i * 2) {
  console.log(i);
}
//h)* napisz pętlę która będzie odliczać od 1 do 10, ale wyświetli tylko nieparzyste wartości
console.log("---------------- 3 h ----------------");
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//i)* napisz pętlę która odliczy od 1 do 10, i wyświetli w konsoli informację o tym czy wyświetlona cyfra jest parzysta czy nie, możesz użyć operatora trójargumentowego
console.log("---------------- 3 i ----------------");
for (let i = 1; i <= 10; i++) {
  i % 2 === 0 ? console.log(`"${i} - to liczba parzysta."`) : console.log(`"${i} - to liczba nieparzysta."`);
}
//Uwaga! kolejne pętle trzeba napisać w funkcji

//j) napisz funkcję, która przyjmie numer i w pętli odliczy od 1 do podanej wartości
console.log("---------------- 3 j ----------------");
function loopToNumber(number) {
  console.log(`"Odlicza do ${number}"`);
  for (let i = 1; i <= number; i++) {
    console.log(i);
  }
}
loopToNumber(13);

//k) napisz funkcję, która przyjmie numer i w pętli odliczy od 1 do 50, ale iteracja będzie się odbywać co podaną wartość.
// (Jeśli argumentem przekazanym do funkcji jest 3, to pętla ma odliczać 3,6,9 itp.)
console.log("---------------- 3 k ----------------");
function iterationNumber(number) {
  for (let i = 0; i <= 50; i = i + number) {
    if (i === 0) {
      continue;
    }
    console.log(i);
  }
}
iterationNumber(3);

//l) napisz funkcję która przyjmie tablicę arrNames i wyświetli w konsoli przywitanie dla każdej z osób
console.log("---------------- 3 l ----------------");
const arrNames = ["Ksawery", "Zenobiusz", "Klementyna", "Apolonia", "Jeremiasz", "Bernadetta"];
function helloNames(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`"Witaj ${array[i]}! Miło Cię widzieć!"`);
  }
}
helloNames(arrNames);

//ł) napisz funkcję która przymie tablicę arrObjects i wyświetli dla każdego obiektu informację "przed Tobą stoi (kolor) (marka)", np niebieski Mustang.
console.log("---------------- 3 ł ----------------");

const arrObjects = [
  {
    brand: "Mustang",
    color: "niebieski",
  },
  {
    brand: "Tesla",
    color: "czarna",
  },
  {
    brand: "Polonez",
    color: "żółty",
  },
  {
    brand: "Toyota",
    color: "fioletowa",
  },
];

function carPrezentation(array) {
  for (let index of array) {
    console.log(`"Przed Tobą stoi ${index.color} ${index.brand}.`);
  }
}
carPrezentation(arrObjects);

//m) napisz funkcję która przyjmie tablic arrNumbers i wyświetli w konsoli tylko przyste elementy tablicy
console.log("---------------- 3 m ----------------");

const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function pokazParzyste(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      console.log(array[i]);
    }
  }
}
pokazParzyste(arrNumbers);

//n)* napisz funkcję, która przeiteruje po tablicy arrTypes i:
// - za pomocą push umieści elementy o typie innym niż number w tablicy arrOther
// - za pomocą push umieści elementy o typie number w tablicy arrNumbers
// - za pomocą push umieści numery parzyste w tablicy arrEven
// - na końcu zwróci obiekt z tymi trzema tablicami
console.log("---------------- 3 n ----------------");

const arrTypes = [2, 4, 5, undefined, null, "val", NaN, 7, 10, 333, "874", 22, 21, 400, "400", "undefined"];
const arrOther = [];
const arrNubers = [];
const arrEven = [];
function arrayChengeToObject(array) {
  for (let i = 0; i < array.length; i++) {
    let typ = typeof array[i];
    if (typ !== "number") {
      arrOther.push(array[i]);
    } else {
      arrNubers.push(array[i]);
      if (array[i] % 2 === 0) {
        arrEven.push(array[i]);
      }
    }
  }
  return {arrOther, arrNubers, arrEven};
}
const object = arrayChengeToObject(arrTypes);
console.log("Poniżej powinniśmy zobaczyć objekt z trzema tablicami.");
console.log(object);

//--------------------------
// 4. METODY
//--------------------------

//a) za pomocą metody map wyloguj przywitanie dla każdej osoby z tablicy names
console.log("---------------- 4 a ----------------");
const names = ["Seba", "Kari", "Mati", "Andżi"];
function callbackFn(array) {
  console.log(`"Siemka ${array}! Byku!"`);
}
names.map(callbackFn);

//b) za pomocą metody filter stwórz nową tablicę z tablicy array10 z parzystymi liczbami
console.log("---------------- 4 b ----------------");
const array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filterFnn(value) {
  let index = value;
  if (index % 2 == 0) {
    return index;
  }
}
const arrayParzyste = array10.filter(filterFnn);
console.log(arrayParzyste);

//c) użyj filter na tablicy people aby zwrócić tablicę tylko z kobietami
console.log("---------------- 4 c ----------------");
const people = [
  {
    name: "Tomasz",
    lastname: "Kowalski",
    gender: "male",
  },
  {
    name: "Karol",
    lastname: "Nowak",
    gender: "male",
  },
  {
    name: "Joanna",
    lastname: "Kowalska",
    gender: "female",
  },
  {
    name: "Anna",
    lastname: "Nowak",
    gender: "female",
  },
];
function filterFn(object) {
  if (object.gender == "female") {
    return object;
  }
}
const female = people.filter(filterFn);
console.log(female);

//d) użyj metod takich jak split i sort aby zmienną shopping przekonwertować na tablicę z listą zakupów. Każde słowo powinno być osobną pozycją w tablicy.
// Ponad to posortuj wartości alfabetycznie. Spróbuj też ujednolicić wielkość liter aby lista była bardziej czytelna.
console.log("---------------- 4 d ----------------");
const shopping = "kawa MaSŁo chleb WODA ogórki jabłka Ziemniaki chipsy salcesoN wędLIna pieczarki Włoszczyzna heRBata truskawKi maliny";
const shoppingList = shopping.split(" ");
function wielkoscLiterFn(index) {
  let indexNew = index.toLowerCase();
  return indexNew;
}
const shoppingListLetter = shoppingList.map(wielkoscLiterFn);
console.log(shoppingListLetter.sort());

//e) połącz litery alfabetu w tablicy alphabet w jeden string a następnie odwróć kolejność aby wynik wyglądał tak: "ZYXWV..."
console.log("---------------- 4 e ----------------");
console.log("Wersja poniżej właściwie jest słuszna choć nie jest do końca ścisła z życzeniem zadania.");
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const alphabetReverse = alphabet.reverse();
const alphabetOne = alphabetReverse.reduce((acc, curr) => {
  return acc + curr;
});
console.log(alphabetOne);
