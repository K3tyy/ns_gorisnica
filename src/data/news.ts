export interface NewsItem {
  id: number;
  title: string;
  date: string;
  time: string;
  author: string;
  image: string;
  summary: string;
  content: string;
  category: string;
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Veliki točki proti jesenskim prvakom",
    date: "12. Dec 2025",
    time: "16:30",
    author: "Marko Novak",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2693&auto=format&fit=crop",
    category: "Člani",
    summary: "Naša članska ekipa je v napeti tekmi uspela iztržiti remi proti vodilni ekipi lige.",
    content: `
      <p>Včerajšnja tekma proti vodilni ekipi lige je postregla s pravo dramo in vrhunskim nogometom. Naši fantje so pokazali izjemen karakter in borbenost ter si zasluženo priigrali točko proti favoriziranim gostom.</p>
      
      <p>Tekma se je začela previdno z obeh strani, a so gostje hitro prevzeli pobudo. Kljub temu je naša obramba delovala zanesljivo. V 35. minuti so gostje povedli po hitrem protinapadu, a nas to ni zmedlo. Še pred polčasom je za izenačenje poskrbel naš kapetan z natančnim strelom z roba kazenskega prostora.</p>
      
      <p>V drugem polčasu smo videli še dva zadetka. Najprej so gostje ponovno povedli, a smo v sodnikovem podaljšku uspeli izenačiti in stadion je eksplodiral od navdušenja. Končni rezultat 2:2 je pravičen odraz dogajanja na igrišču.</p>
      
      <p>Trener je po tekmi dejal: "Ponosen sem na fante. Pokazali so, da se lahko kosajo z vsakim nasprotnikom v ligi. Ta točka nam bo dala dodatnega zagona za nadaljevanje sezone."</p>
    `
  },
  {
    id: 2,
    title: "Mladinci jesenski prvaki",
    date: "10. Dec 2025",
    time: "14:00",
    author: "Janez Kovač",
    image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=2629&auto=format&fit=crop",
    category: "Mladinci",
    summary: "Izjemen uspeh naše mladinske selekcije, ki je prvi del sezone zaključila brez poraza.",
    content: `
      <p>Naša mladinska selekcija U19 je dosegla izjemen uspeh in postala jesenski prvak lige! Fantje so skozi celotno jesen kazali konstantne predstave in zaključili prvi del sezone brez enega samega poraza.</p>
      
      <p>V zadnjem krogu so na domačem igrišču prepričljivo premagali neposredne konkurente za naslov z rezultatom 3:0. S tem so si zagotovili 5 točk prednosti pred zasledovalci pred spomladanskim delom prvenstva.</p>
      
      <p>Trener mladinske ekipe poudarja, da je to rezultat trdega dela in odličnega vzdušja v ekipi: "Fantje so prava klapa, tako na igrišču kot izven njega. To se pozna na rezultatih. A ne smemo zaspati na lovorikah, spomladi nas čaka še težje delo."</p>
      
      <p>Čestitke celi ekipi in strokovnemu štabu za ta fantastičen dosežek!</p>
    `
  },
  {
    id: 3,
    title: "Priprave za U15 in U17",
    date: "05. Dec 2025",
    time: "09:00",
    author: "Tehnična služba",
    image: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=2500&auto=format&fit=crop",
    category: "Mlajše selekcije",
    summary: "Začenjajo se zimske priprave za mlajše selekcije. Preverite termine treningov.",
    content: `
      <p>Obveščamo vse igralce in starše selekcij U15 in U17, da se s prihodnjim tednom začenjajo zimske priprave. Treningi bodo potekali v dvorani in na igrišču z umetno travo, odvisno od vremenskih razmer.</p>
      
      <p><strong>Urnik treningov U15:</strong><br/>
      Ponedeljek: 17:30 - 19:00 (Umetna trava)<br/>
      Sreda: 18:00 - 19:30 (Dvorana)<br/>
      Petek: 17:30 - 19:00 (Umetna trava)</p>
      
      <p><strong>Urnik treningov U17:</strong><br/>
      Torek: 18:00 - 19:30 (Umetna trava)<br/>
      Četrtek: 18:30 - 20:00 (Dvorana)<br/>
      Petek: 19:00 - 20:30 (Umetna trava)</p>
      
      <p>Prosimo, da igralci na treninge prihajajo vsaj 15 minut pred začetkom. V primeru odsotnosti je potrebno obvestiti trenerja.</p>
    `
  },
  {
    id: 4,
    title: "Zimska liga se začenja",
    date: "01. Dec 2025",
    time: "10:00",
    author: "Uprava kluba",
    image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?q=80&w=2670&auto=format&fit=crop",
    category: "Dogodki",
    summary: "Ta vikend se začenja zimska liga v dvoranskem nogometu. Naše ekipe bodo nastopale v vseh kategorijah.",
    content: `
      <p>Prihaja čas dvoranskega nogometa! Ta vikend se v športni dvorani Gorišnica začenja tradicionalna Zimska liga, ki bo potekala vse do konca februarja.</p>
      
      <p>Naš klub bo imel predstavnike v vseh starostnih kategorijah, od U7 do veteranov. Tekme bodo potekale vsako soboto in nedeljo. Vabimo vse navijače, da pridejo v dvorano in podprejo naše ekipe.</p>
      
      <p>Poleg tekmovalnega dela bo poskrbljeno tudi za bogat spremljevalni program in gostinsko ponudbo. Vstopnine ni!</p>
      
      <p>Razpored tekem za prvi vikend je že objavljen na oglasni deski v dvorani in na naši Facebook strani.</p>
    `
  },
  {
    id: 5,
    title: "Prenova garderob zaključena",
    date: "20. Nov 2025",
    time: "11:30",
    author: "Predsednik kluba",
    image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=2670&auto=format&fit=crop",
    category: "Klub",
    summary: "Z veseljem sporočamo, da je prenova garderob na glavnem stadionu uspešno zaključena.",
    content: `
      <p>Z velikim veseljem in ponosom sporočamo, da je projekt prenove garderob na glavnem stadionu uspešno zaključen. Dela, ki so potekala zadnja dva meseca, so prinesla popolnoma prenovljene prostore, ki bodo našim igralcem nudili vrhunske pogoje za delo.</p>
      
      <p>Prenova je zajemala:
      <ul>
        <li>Popolno prenovo tušev in sanitarij</li>
        <li>Novo keramiko in tlake</li>
        <li>Nove omarice in klopi</li>
        <li>Posodobitev ogrevalnega sistema</li>
        <li>Novo razsvetljavo</li>
      </ul>
      </p>
      
      <p>Investicija ne bi bila mogoča brez pomoči Občine Gorišnica in naših zvestih sponzorjev, ki so prispevali material in finančna sredstva. Posebna zahvala gre tudi vsem prostovoljcem, ki so pomagali pri delih.</p>
      
      <p>Uradna otvoritev bo potekala pred naslednjo domačo tekmo članske ekipe.</p>
    `
  },
  {
    id: 6,
    title: "Vpis novih članov",
    date: "15. Nov 2025",
    time: "08:00",
    author: "Vodja nogometne šole",
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=2670&auto=format&fit=crop",
    category: "Nogometna šola",
    summary: "Vabimo vse mlade nogometne navdušence, da se pridružijo naši nogometni šoli.",
    content: `
      <p>Nogometni klub Gorišnica odpira vrata za nove člane! Vabimo vse dečke in deklice od 5. leta starosti dalje, da se nam pridružijo in naredijo svoje prve nogometne korake v naši nogometni šoli.</p>
      
      <p>Ponujamo:
      <ul>
        <li>Strokovno vodenje z licenciranimi trenerji</li>
        <li>Odlične pogoje za trening</li>
        <li>Redna tekmovanja in turnirje</li>
        <li>Druženje in nova prijateljstva</li>
        <li>Športno opremo kluba</li>
      </ul>
      </p>
      
      <p>Vpis poteka vsak torek in četrtek ob 17. uri v pisarni kluba na stadionu. Prvi mesec vadbe je brezplačen!</p>
      
      <p>Za več informacij nas lahko kontaktirate na telefon ali email, ki sta objavljena na spletni strani.</p>
    `
  }
];
