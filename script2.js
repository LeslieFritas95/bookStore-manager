const car1 = new Auto('Audi','August Horch', 'Germania', 'Automobilistico', new Date('1909-07-16').toDateString(), 5)
const car2 = new Auto ('Ferrari', 'Enzo Ferrari', 'Italia', 'Automobilistico', new Date('1947-03-12').toDateString(), 7);
console.log(car1.toString());
console.log(car2.toString());

const motorcycle1 = new Moto('Ducati', 'Fratelli:Cavalieri Ducati', 'Italia', 'Motociclistica', 1926);
const motorcycle2 = new Moto('Honda', 'Sōichirō Honda', 'Giappone', 'Autoveicoli,Motoveicoli,Motori marini', new Date('1948-09-24').toDateString());
console.log(motorcycle1.toString());
console.log(motorcycle2.toString());
