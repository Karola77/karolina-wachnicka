import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App.jsx';


const ksiazkiKinga = [
  ['Lśnienie', 'Mroczny thriller psychologiczny o rodzinie zamkniętej na zimę w nawiedzonym hotelu Panorama.'],
  ['To', 'Grupa przyjaciół z dzieciństwa staje do walki z pradawnym złem przybierającym postać klauna Pennywise’a.'],
  ['Zielona mila', 'Poruszająca opowieść osadzona w celi śmierci, gdzie strażnik odkrywa niezwykły dar skazańca.'],
  ['Skazani na Shawshank', 'Historia niesłusznie skazanego bankiera, który w więzieniu zachowuje nadzieję i godność.'],
  ['Misery', 'Pisarz trafia pod opiekę swojej „największej fanki”, która szybko zmienia się w bezwzględnego oprawcę.'],
  ['Cmętarz zwieżąt', 'Rodzina odkrywa w lesie miejsce, które potrafi przywrócić zmarłych — ale cena jest przerażająca.'],
  ['Carrie', 'Nieśmiała nastolatka prześladowana w szkole odkrywa u siebie przerażającą moc telekinezy.'],
  ['Bastion', 'Postapokaliptyczna wizja świata zdziesiątkowanego przez wirusa i starcie dobra ze złem.'],
  ['Miasteczko Salem', 'Pisarz wraca do rodzinnego miasteczka i odkrywa, że jego mieszkańcy zamieniają się w wampiry.'],
  ['Doktor Sen', 'Dorosły Danny Torrance z „Lśnienia” musi chronić dziewczynkę obdarzoną potężnym darem.'],
  ['Dallas ’63', 'Nauczyciel cofa się w czasie do lat 60., aby powstrzymać zamach na prezydenta Johna F. Kennedy’ego.'],
  ['Pod kopułą', 'Niewidzialna, niezniszczalna kopuła odcina małe miasteczko Chester’s Mill od reszty świata.'],
  ['Cujo', 'Łagodny bernardyn zostaje ugryziony przez nietoperza i staje się śmiertelnym zagrożeniem dla matki i syna.'],
  ['Christine', 'Nastoletni chłopak kupuje stary samochód z 1958 roku, który posiada własną, morderczą duszę.'],
  ['Martwa strefa', 'Mężczyzna budzi się po latach ze śpiączki ze zdolnością widzenia przyszłości przez dotyk.'],
  ['Podpalaczka', 'Dziewczynka potrafiąca wzniecać ogień siłą woli ucieka przed tajną agencją rządową.'],
  ['Mgła', 'Gęsta, tajemnicza mgła spowija miasteczko, a w niej czają się krwiożercze istoty z innego wymiaru.'],
  ['Wielki marsz', 'Mroczna dystopia, w której stu chłopców bierze udział w morderczym marszu bez prawa do zatrzymania się.'],
  ['Uciekinier', 'W brutalnym teleturnieju przyszłości uczestnik musi przeżyć 30 dni, ścigany przez zawodowych zabójców.'],
  ['Dolores Claiborne', 'Poruszająca spowiedź kobiety oskarżonej o morderstwo swojej wieloletniej pracodawczyni.'],
  ['Gra Geralda', 'Kobieta zostaje przykuta kajdankami do łóżka w odludnym domku i musi walczyć o przetrwanie.'],
  ['Bezsenność', 'Starszy mężczyzna cierpiący na bezsenność zaczyna dostrzegać aury i tajemnicze istoty decydujące o życiu.'],
  ['Desperacja', 'Podróżni zatrzymani na pustyni w Nevadzie trafiają w ręce opętanego szeryfa małego miasteczka.'],
  ['Zielona mila: Dwie martwe dziewczynki', 'Początek historii Johna Coffeya i tajemniczego uzdrowiciela z bloku E więzienia Cold Mountain.'],
  ['Pan Mercedes', 'Emerytowany detektyw ściga psychopatycznego zamachowca, który wjechał skradzionym autem w tłum.'],
  ['Instytut', 'Porwane dzieci obdarzone zdolnościami parapsychicznymi próbują uciec z tajnego ośrodka badawczego.'],
  ['Outsider', 'Brutalna zbrodnia w małym mieście stawia śledczych przed zagadką z pogranicza nadnaturalnego koszmaru.'],
  ['Baśniowa opowieść', 'Nastolatek dziedziczy klucze do równoległego, baśniowego świata pogrążonego w mroku.'],
  ['Joyland', 'Student podejmuje wakacyjną pracę w wesołym miasteczku, w którym straszy duch zamordowanej dziewczyny.'],
  ['Ręka mistrza', 'Artysta po wypadku przeprowadza się na Florydę i odkrywa, że jego obrazy mają przerażającą moc.']
];


const ciekawostkiKinga = [
  'Ciekawostka: Pierwszy szkic „Carrie” Stephen King wyrzucił do kosza — uratowała go jego żona Tabitha.',
  'Ciekawostka: King napisał „Uciekiniera” w zaledwie 72 godziny, pijąc litry kawy.',
  'Cytat: „Potwory są prawdziwe, a duchy też są prawdziwe. Żyją w nas i czasem to one wygrywają.”',
  'Ciekawostka: Wiele jego książek dzieje się w fikcyjnym miasteczku Castle Rock w stanie Maine.',
  'Ciekawostka: Stephen King pisze codziennie około 2000 słów — nawet w święta i swoje urodziny.'
];


const losowaCiekawostka =
  ciekawostkiKinga[Math.floor(Math.random() * ciekawostkiKinga.length)];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App ksiazki={ksiazkiKinga} ciekawostka={losowaCiekawostka} />
  </StrictMode>
);