type Name = {
  common: string
  [key: string]: any
}

type Flags = {
  png: string
  svg: string
}

type Country = {
  name: Name
  flags: Flags
  population: number
  region: string
  capital?: string[]
  cca2: string
  [key: string]: any
}

const countries: Country[] = [
  {
    name: {
      common: 'Malaysia',
      official: 'Malaysia',
      nativeName: {
        eng: {
          official: 'Malaysia',
          common: 'Malaysia',
        },
        msa: {
          official: 'مليسيا',
          common: 'مليسيا',
        },
      },
    },
    tld: ['.my'],
    cca2: 'MY',
    ccn3: '458',
    cca3: 'MYS',
    cioc: 'MAS',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      MYR: {
        name: 'Malaysian ringgit',
        symbol: 'RM',
      },
    },
    idd: {
      root: '+6',
      suffixes: ['0'],
    },
    capital: ['Kuala Lumpur'],
    altSpellings: ['MY'],
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    languages: {
      eng: 'English',
      msa: 'Malay',
    },
    translations: {
      ara: {
        official: 'ماليزيا',
        common: 'ماليزيا',
      },
      ces: {
        official: 'Malajsie',
        common: 'Malajsie',
      },
      cym: {
        official: 'Malaysia',
        common: 'Malaysia',
      },
      deu: {
        official: 'Malaysia',
        common: 'Malaysia',
      },
      est: {
        official: 'Malaisia',
        common: 'Malaisia',
      },
      fin: {
        official: 'Malesia',
        common: 'Malesia',
      },
      fra: {
        official: 'Fédération de Malaisie',
        common: 'Malaisie',
      },
      hrv: {
        official: 'Malezija',
        common: 'Malezija',
      },
      hun: {
        official: 'Malajzia',
        common: 'Malajzia',
      },
      ita: {
        official: 'Malaysia',
        common: 'Malesia',
      },
      jpn: {
        official: 'マレーシア',
        common: 'マレーシア',
      },
      kor: {
        official: '말레이시아',
        common: '말레이시아',
      },
      nld: {
        official: 'Maleisië',
        common: 'Maleisië',
      },
      per: {
        official: 'فدراسیون مالزی',
        common: 'مالزی',
      },
      pol: {
        official: 'Malezja',
        common: 'Malezja',
      },
      por: {
        official: 'Malásia',
        common: 'Malásia',
      },
      rus: {
        official: 'Малайзия',
        common: 'Малайзия',
      },
      slk: {
        official: 'Malajzia',
        common: 'Malajzia',
      },
      spa: {
        official: 'Malasia',
        common: 'Malasia',
      },
      swe: {
        official: 'Malaysia',
        common: 'Malaysia',
      },
      urd: {
        official: 'ملائیشیا',
        common: 'ملائیشیا',
      },
      zho: {
        official: '马来西亚',
        common: '马来西亚',
      },
    },
    latlng: [2.5, 112.5],
    landlocked: false,
    borders: ['BRN', 'IDN', 'THA'],
    area: 330803.0,
    demonyms: {
      eng: {
        f: 'Malaysian',
        m: 'Malaysian',
      },
      fra: {
        f: 'Malaisienne',
        m: 'Malaisien',
      },
    },
    flag: '\uD83C\uDDF2\uD83C\uDDFE',
    maps: {
      googleMaps: 'https://goo.gl/maps/qrY1PNeUXGyXDcPy6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/2108121',
    },
    population: 32365998,
    gini: {
      '2015': 41.1,
    },
    fifa: 'MAS',
    car: {
      signs: ['MAL'],
      side: 'left',
    },
    timezones: ['UTC+08:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/my.png',
      svg: 'https://flagcdn.com/my.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/my.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/my.svg',
    },
    startOfWeek: 'sunday',
    capitalInfo: {
      latlng: [3.17, 101.7],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Haiti',
      official: 'Republic of Haiti',
      nativeName: {
        fra: {
          official: "République d'Haïti",
          common: 'Haïti',
        },
        hat: {
          official: 'Repiblik Ayiti',
          common: 'Ayiti',
        },
      },
    },
    tld: ['.ht'],
    cca2: 'HT',
    ccn3: '332',
    cca3: 'HTI',
    cioc: 'HAI',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      HTG: {
        name: 'Haitian gourde',
        symbol: 'G',
      },
    },
    idd: {
      root: '+5',
      suffixes: ['09'],
    },
    capital: ['Port-au-Prince'],
    altSpellings: ['HT', 'Republic of Haiti', "République d'Haïti", 'Repiblik Ayiti'],
    region: 'Americas',
    subregion: 'Caribbean',
    languages: {
      fra: 'French',
      hat: 'Haitian Creole',
    },
    translations: {
      ara: {
        official: 'جمهورية هايتي',
        common: 'هايتي',
      },
      ces: {
        official: 'Republika Haiti',
        common: 'Haiti',
      },
      cym: {
        official: 'Republic of Haiti',
        common: 'Haiti',
      },
      deu: {
        official: 'Republik Haiti',
        common: 'Haiti',
      },
      est: {
        official: 'Haiti Vabariik',
        common: 'Haiti',
      },
      fin: {
        official: 'Haitin tasavalta',
        common: 'Haiti',
      },
      fra: {
        official: "République d'Haïti",
        common: 'Haïti',
      },
      hrv: {
        official: 'Republika Haiti',
        common: 'Haiti',
      },
      hun: {
        official: 'Haiti Köztársaság',
        common: 'Haiti',
      },
      ita: {
        official: 'Repubblica di Haiti',
        common: 'Haiti',
      },
      jpn: {
        official: 'ハイチ共和国',
        common: 'ハイチ',
      },
      kor: {
        official: '아이티 공화국',
        common: '아이티',
      },
      nld: {
        official: 'Republiek Haïti',
        common: 'Haïti',
      },
      per: {
        official: 'جمهوری هائیتی',
        common: 'هائیتی',
      },
      pol: {
        official: 'Republika Haiti',
        common: 'Haiti',
      },
      por: {
        official: 'República do Haiti',
        common: 'Haiti',
      },
      rus: {
        official: 'Республика Гаити',
        common: 'Гаити',
      },
      slk: {
        official: 'Haitská republika',
        common: 'Haiti',
      },
      spa: {
        official: 'República de Haití',
        common: 'Haití',
      },
      swe: {
        official: 'Republiken Haiti',
        common: 'Haiti',
      },
      urd: {
        official: 'جمہوریہ ہیٹی',
        common: 'ہیٹی',
      },
      zho: {
        official: '海地共和国',
        common: '海地',
      },
    },
    latlng: [19.0, -72.41666666],
    landlocked: false,
    borders: ['DOM'],
    area: 27750.0,
    demonyms: {
      eng: {
        f: 'Haitian',
        m: 'Haitian',
      },
      fra: {
        f: 'Haïtienne',
        m: 'Haïtien',
      },
    },
    flag: '\uD83C\uDDED\uD83C\uDDF9',
    maps: {
      googleMaps: 'https://goo.gl/maps/9o13xtjuUdqFnHbn9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/307829',
    },
    population: 11402533,
    gini: {
      '2012': 41.1,
    },
    fifa: 'HAI',
    car: {
      signs: ['RH'],
      side: 'right',
    },
    timezones: ['UTC-05:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/ht.png',
      svg: 'https://flagcdn.com/ht.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ht.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ht.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [18.53, -72.33],
    },
    postalCode: {
      format: 'HT####',
      regex: '^(?:HT)*(\\d{4})$',
    },
  },
  {
    name: {
      common: 'Tajikistan',
      official: 'Republic of Tajikistan',
      nativeName: {
        rus: {
          official: 'Республика Таджикистан',
          common: 'Таджикистан',
        },
        tgk: {
          official: 'Ҷумҳурии Тоҷикистон',
          common: 'Тоҷикистон',
        },
      },
    },
    tld: ['.tj'],
    cca2: 'TJ',
    ccn3: '762',
    cca3: 'TJK',
    cioc: 'TJK',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      TJS: {
        name: 'Tajikistani somoni',
        symbol: 'ЅМ',
      },
    },
    idd: {
      root: '+9',
      suffixes: ['92'],
    },
    capital: ['Dushanbe'],
    altSpellings: ['TJ', 'Toçikiston', 'Republic of Tajikistan', 'Ҷумҳурии Тоҷикистон', 'Çumhuriyi Toçikiston'],
    region: 'Asia',
    subregion: 'Central Asia',
    languages: {
      rus: 'Russian',
      tgk: 'Tajik',
    },
    translations: {
      ara: {
        official: 'جمهورية طاجيكستان',
        common: 'طاجيكستان',
      },
      ces: {
        official: 'Republika Tádžikistán',
        common: 'Tádžikistán',
      },
      cym: {
        official: 'Republic of Tajikistan',
        common: 'Tajikistan',
      },
      deu: {
        official: 'Republik Tadschikistan',
        common: 'Tadschikistan',
      },
      est: {
        official: 'Tadžikistani Vabariik',
        common: 'Tadžikistan',
      },
      fin: {
        official: 'Tadžikistanin tasavalta',
        common: 'Tadžikistan',
      },
      fra: {
        official: 'République du Tadjikistan',
        common: 'Tadjikistan',
      },
      hrv: {
        official: 'Republika Tadžikistan',
        common: 'Tađikistan',
      },
      hun: {
        official: 'Tádzsik Köztársaság',
        common: 'Tádzsikisztán',
      },
      ita: {
        official: 'Repubblica del Tajikistan',
        common: 'Tagikistan',
      },
      jpn: {
        official: 'タジキスタン共和国',
        common: 'タジキスタン',
      },
      kor: {
        official: '타지키스탄 공화국',
        common: '타지키스탄',
      },
      nld: {
        official: 'Tadzjikistan',
        common: 'Tadzjikistan',
      },
      per: {
        official: 'جمهوری تاجیکستان',
        common: 'تاجیکِستان',
      },
      pol: {
        official: 'Republika Tadżykistanu',
        common: 'Tadżykistan',
      },
      por: {
        official: 'República do Tajiquistão',
        common: 'Tajiquistão',
      },
      rus: {
        official: 'Республика Таджикистан',
        common: 'Таджикистан',
      },
      slk: {
        official: 'Taǆická republika',
        common: 'Taǆikistan',
      },
      spa: {
        official: 'República de Tayikistán',
        common: 'Tayikistán',
      },
      swe: {
        official: 'Republiken Tadzjikistan',
        common: 'Tadzjikistan',
      },
      urd: {
        official: 'جمہوریہ تاجکستان',
        common: 'تاجکستان',
      },
      zho: {
        official: '塔吉克斯坦共和国',
        common: '塔吉克斯坦',
      },
    },
    latlng: [39.0, 71.0],
    landlocked: true,
    borders: ['AFG', 'CHN', 'KGZ', 'UZB'],
    area: 143100.0,
    demonyms: {
      eng: {
        f: 'Tadzhik',
        m: 'Tadzhik',
      },
      fra: {
        f: 'Tadjike',
        m: 'Tadjike',
      },
    },
    flag: '\uD83C\uDDF9\uD83C\uDDEF',
    maps: {
      googleMaps: 'https://goo.gl/maps/8rQgW88jEXijhVb58',
      openStreetMaps: 'https://www.openstreetmap.org/relation/214626',
    },
    population: 9537642,
    gini: {
      '2015': 34.0,
    },
    fifa: 'TJK',
    car: {
      signs: ['TJ'],
      side: 'right',
    },
    timezones: ['UTC+05:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/tj.png',
      svg: 'https://flagcdn.com/tj.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/tj.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/tj.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [38.55, 68.77],
    },
    postalCode: {
      format: '######',
      regex: '^(\\d{6})$',
    },
  },
  {
    name: {
      common: 'American Samoa',
      official: 'American Samoa',
      nativeName: {
        eng: {
          official: 'American Samoa',
          common: 'American Samoa',
        },
        smo: {
          official: 'Sāmoa Amelika',
          common: 'Sāmoa Amelika',
        },
      },
    },
    tld: ['.as'],
    cca2: 'AS',
    ccn3: '016',
    cca3: 'ASM',
    cioc: 'ASA',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      USD: {
        name: 'United States dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+1',
      suffixes: ['684'],
    },
    capital: ['Pago Pago'],
    altSpellings: ['AS', 'Amerika Sāmoa', 'Amelika Sāmoa', 'Sāmoa Amelika'],
    region: 'Oceania',
    subregion: 'Polynesia',
    languages: {
      eng: 'English',
      smo: 'Samoan',
    },
    translations: {
      ara: {
        official: 'ساموا الأمريكية',
        common: 'ساموا الأمريكية',
      },
      ces: {
        official: 'Americká Samoa',
        common: 'Americká Samoa',
      },
      cym: {
        official: 'American Samoa',
        common: 'American Samoa',
      },
      deu: {
        official: 'Amerikanisch-Samoa',
        common: 'Amerikanisch-Samoa',
      },
      est: {
        official: 'Ameerika Samoa',
        common: 'Ameerika Samoa',
      },
      fin: {
        official: 'Amerikan Samoa',
        common: 'Amerikan Samoa',
      },
      fra: {
        official: 'Samoa américaines',
        common: 'Samoa américaines',
      },
      hrv: {
        official: 'američka Samoa',
        common: 'Američka Samoa',
      },
      hun: {
        official: 'Szamoa',
        common: 'Szamoa',
      },
      ita: {
        official: 'Samoa americane',
        common: 'Samoa Americane',
      },
      jpn: {
        official: '米サモア',
        common: 'アメリカ領サモア',
      },
      kor: {
        official: '아메리칸사모아',
        common: '아메리칸사모아',
      },
      nld: {
        official: 'Amerikaans Samoa',
        common: 'Amerikaans Samoa',
      },
      per: {
        official: 'ساموآی آمریکا',
        common: 'ساموآی آمریکا',
      },
      pol: {
        official: 'Samoa Amerykańskie',
        common: 'Samoa Amerykańskie',
      },
      por: {
        official: 'Samoa americana',
        common: 'Samoa Americana',
      },
      rus: {
        official: 'американское Самоа',
        common: 'Американское Самоа',
      },
      slk: {
        official: 'Americká Samoa',
        common: 'Americká Samoa',
      },
      spa: {
        official: 'Samoa Americana',
        common: 'Samoa Americana',
      },
      swe: {
        official: 'Amerikanska Samoa',
        common: 'Amerikanska Samoa',
      },
      urd: {
        official: 'امریکی سمووا',
        common: 'امریکی سمووا',
      },
      zho: {
        official: '美属萨摩亚',
        common: '美属萨摩亚',
      },
    },
    latlng: [-14.33333333, -170.0],
    landlocked: false,
    area: 199.0,
    demonyms: {
      eng: {
        f: 'American Samoan',
        m: 'American Samoan',
      },
      fra: {
        f: 'Samoane',
        m: 'Samoan',
      },
    },
    flag: '\uD83C\uDDE6\uD83C\uDDF8',
    maps: {
      googleMaps: 'https://goo.gl/maps/Re9ePMjwP1sFCBFA6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/2177187',
    },
    population: 55197,
    fifa: 'ASA',
    car: {
      signs: ['USA'],
      side: 'right',
    },
    timezones: ['UTC-11:00'],
    continents: ['Oceania'],
    flags: {
      png: 'https://flagcdn.com/w320/as.png',
      svg: 'https://flagcdn.com/as.svg',
    },
    coatOfArms: {},
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-14.27, -170.7],
    },
  },
  {
    name: {
      common: 'Italy',
      official: 'Italian Republic',
      nativeName: {
        ita: {
          official: 'Repubblica italiana',
          common: 'Italia',
        },
      },
    },
    tld: ['.it'],
    cca2: 'IT',
    ccn3: '380',
    cca3: 'ITA',
    cioc: 'ITA',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['9'],
    },
    capital: ['Rome'],
    altSpellings: ['IT', 'Italian Republic', 'Repubblica italiana'],
    region: 'Europe',
    subregion: 'Southern Europe',
    languages: {
      ita: 'Italian',
    },
    translations: {
      ara: {
        official: 'الجمهورية الإيطالية',
        common: 'إيطاليا',
      },
      ces: {
        official: 'Italská republika',
        common: 'Itálie',
      },
      cym: {
        official: 'Italian Republic',
        common: 'Italy',
      },
      deu: {
        official: 'Italienische Republik',
        common: 'Italien',
      },
      est: {
        official: 'Itaalia Vabariik',
        common: 'Itaalia',
      },
      fin: {
        official: 'Italian tasavalta',
        common: 'Italia',
      },
      fra: {
        official: 'République italienne',
        common: 'Italie',
      },
      hrv: {
        official: 'talijanska Republika',
        common: 'Italija',
      },
      hun: {
        official: 'Olasz Köztársaság',
        common: 'Olaszország',
      },
      ita: {
        official: 'Repubblica italiana',
        common: 'Italia',
      },
      jpn: {
        official: 'イタリア共和国',
        common: 'イタリア',
      },
      kor: {
        official: '이탈리아 공화국',
        common: '이탈리아',
      },
      nld: {
        official: 'Italiaanse Republiek',
        common: 'Italië',
      },
      per: {
        official: 'جمهوری ایتالیا',
        common: 'ایتالیا',
      },
      pol: {
        official: 'Republika Włoska',
        common: 'Włochy',
      },
      por: {
        official: 'República Italiana',
        common: 'Itália',
      },
      rus: {
        official: 'итальянская Республика',
        common: 'Италия',
      },
      slk: {
        official: 'Talianska republika',
        common: 'Taliansko',
      },
      spa: {
        official: 'República Italiana',
        common: 'Italia',
      },
      swe: {
        official: 'Republiken Italien',
        common: 'Italien',
      },
      urd: {
        official: 'جمہوریہ اطالیہ',
        common: 'اطالیہ',
      },
      zho: {
        official: '意大利共和国',
        common: '意大利',
      },
    },
    latlng: [42.83333333, 12.83333333],
    landlocked: false,
    borders: ['AUT', 'FRA', 'SMR', 'SVN', 'CHE', 'VAT'],
    area: 301336.0,
    demonyms: {
      eng: {
        f: 'Italian',
        m: 'Italian',
      },
      fra: {
        f: 'Italienne',
        m: 'Italien',
      },
    },
    flag: '\uD83C\uDDEE\uD83C\uDDF9',
    maps: {
      googleMaps: 'https://goo.gl/maps/8M1K27TDj7StTRTq8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/365331',
    },
    population: 59554023,
    gini: {
      '2017': 35.9,
    },
    fifa: 'ITA',
    car: {
      signs: ['I'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/it.png',
      svg: 'https://flagcdn.com/it.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/it.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/it.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [41.9, 12.48],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Mexico',
      official: 'United Mexican States',
      nativeName: {
        spa: {
          official: 'Estados Unidos Mexicanos',
          common: 'México',
        },
      },
    },
    tld: ['.mx'],
    cca2: 'MX',
    ccn3: '484',
    cca3: 'MEX',
    cioc: 'MEX',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      MXN: {
        name: 'Mexican peso',
        symbol: '$',
      },
    },
    idd: {
      root: '+5',
      suffixes: ['2'],
    },
    capital: ['Mexico City'],
    altSpellings: ['MX', 'Mexicanos', 'United Mexican States', 'Estados Unidos Mexicanos'],
    region: 'Americas',
    subregion: 'North America',
    languages: {
      spa: 'Spanish',
    },
    translations: {
      ara: {
        official: 'الولايات المتحدة المكسيكية',
        common: 'المسكيك',
      },
      ces: {
        official: 'Spojené státy mexické',
        common: 'Mexiko',
      },
      cym: {
        official: 'United Mexican States',
        common: 'Mexico',
      },
      deu: {
        official: 'Vereinigte Mexikanische Staaten',
        common: 'Mexiko',
      },
      est: {
        official: 'Mehhiko Ühendriigid',
        common: 'Mehhiko',
      },
      fin: {
        official: 'Meksikon yhdysvallat',
        common: 'Meksiko',
      },
      fra: {
        official: 'États-Unis du Mexique',
        common: 'Mexique',
      },
      hrv: {
        official: 'Sjedinjene Meksičke Države',
        common: 'Meksiko',
      },
      hun: {
        official: 'Mexikói Egyesült Államok',
        common: 'Mexikó',
      },
      ita: {
        official: 'Stati Uniti del Messico',
        common: 'Messico',
      },
      jpn: {
        official: 'メキシコ合衆国',
        common: 'メキシコ',
      },
      kor: {
        official: '멕시코 합중국',
        common: '멕시코',
      },
      nld: {
        official: 'Verenigde Mexicaanse Staten',
        common: 'Mexico',
      },
      per: {
        official: 'ایالات متحد مکزیک',
        common: 'مکزیک',
      },
      pol: {
        official: 'Meksykańskie Stany Zjednoczone',
        common: 'Meksyk',
      },
      por: {
        official: 'Estados Unidos Mexicanos',
        common: 'México',
      },
      rus: {
        official: 'Мексиканские Соединённые Штаты',
        common: 'Мексика',
      },
      slk: {
        official: 'Spojené štášy mexické',
        common: 'Mexiko',
      },
      spa: {
        official: 'Estados Unidos Mexicanos',
        common: 'México',
      },
      swe: {
        official: 'Mexikos förenta stater',
        common: 'Mexiko',
      },
      urd: {
        official: 'ریاستہائے متحدہ میکسیکو',
        common: 'میکسیکو',
      },
      zho: {
        official: '墨西哥合众国',
        common: '墨西哥',
      },
    },
    latlng: [23.0, -102.0],
    landlocked: false,
    borders: ['BLZ', 'GTM', 'USA'],
    area: 1964375.0,
    demonyms: {
      eng: {
        f: 'Mexican',
        m: 'Mexican',
      },
      fra: {
        f: 'Mexicaine',
        m: 'Mexicain',
      },
    },
    flag: '\uD83C\uDDF2\uD83C\uDDFD',
    maps: {
      googleMaps: 'https://goo.gl/maps/s5g7imNPMDEePxzbA',
      openStreetMaps: 'https://www.openstreetmap.org/relation/114686',
    },
    population: 128932753,
    gini: {
      '2018': 45.4,
    },
    fifa: 'MEX',
    car: {
      signs: ['MEX'],
      side: 'right',
    },
    timezones: ['UTC-08:00', 'UTC-07:00', 'UTC-06:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/mx.png',
      svg: 'https://flagcdn.com/mx.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/mx.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/mx.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [19.43, -99.13],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'North Macedonia',
      official: 'Republic of North Macedonia',
      nativeName: {
        mkd: {
          official: 'Република Северна Македонија',
          common: 'Македонија',
        },
      },
    },
    tld: ['.mk'],
    cca2: 'MK',
    ccn3: '807',
    cca3: 'MKD',
    cioc: 'MKD',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      MKD: {
        name: 'denar',
        symbol: 'den',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['89'],
    },
    capital: ['Skopje'],
    altSpellings: [
      'MK',
      'The former Yugoslav Republic of Macedonia',
      'Republic of North Macedonia',
      'Macedonia, The Former Yugoslav Republic of',
      'Република Северна Македонија',
    ],
    region: 'Europe',
    subregion: 'Southeast Europe',
    languages: {
      mkd: 'Macedonian',
    },
    translations: {
      ara: {
        official: 'جمهورية شمال مقدونيا',
        common: 'شمال مقدونيا',
      },
      ces: {
        official: 'Republika Severní Makedonie',
        common: 'Severní Makedonie',
      },
      cym: {
        official: 'Republic of North Macedonia',
        common: 'North Macedonia',
      },
      deu: {
        official: 'Republik Nordmazedonien',
        common: 'Nordmazedonien',
      },
      est: {
        official: 'Põhja-Makedoonia Vabariik',
        common: 'Põhja-Makedoonia',
      },
      fin: {
        official: 'Pohjois-Makedonian tasavalta',
        common: 'Pohjois-Makedonia',
      },
      fra: {
        official: 'République de Macédoine du Nord',
        common: 'Macédoine du Nord',
      },
      hrv: {
        official: 'Republika Sjeverna Makedonija',
        common: 'Sjeverna Makedonija',
      },
      hun: {
        official: 'Észak-macedón Köztársaság',
        common: 'Észak-Macedónia',
      },
      ita: {
        official: 'Repubblica di Macedonia del Nord',
        common: 'Macedonia del Nord',
      },
      jpn: {
        official: '北マケドニア共和国',
        common: '北マケドニア ',
      },
      kor: {
        official: '북마케도니아 공화국',
        common: '북마케도니아',
      },
      nld: {
        official: 'Republiek Noord-Macedonië',
        common: 'Noord-Macedonië',
      },
      per: {
        official: 'جمهوری مقدونیه شمالی',
        common: 'مقدونیه شمالی',
      },
      pol: {
        official: 'Republika Macedonii Północnej',
        common: 'Macedonia Północna',
      },
      por: {
        official: 'República da Macedônia do Norte',
        common: 'Macedónia do Norte',
      },
      rus: {
        official: 'Республика Северная Македония',
        common: 'Северная Македония',
      },
      slk: {
        official: 'Severomacedónska republika',
        common: 'Severné Macedónsko',
      },
      spa: {
        official: 'República de Macedonia del Norte',
        common: 'Macedonia del Norte',
      },
      swe: {
        official: 'Republiken Nordmakedonien',
        common: 'Nordmakedonien',
      },
      urd: {
        official: 'جمہوریہ مقدونیہ',
        common: 'شمالی مقدونیہ',
      },
      zho: {
        official: '北馬其頓共和國',
        common: '北馬其頓',
      },
    },
    latlng: [41.83333333, 22.0],
    landlocked: true,
    borders: ['ALB', 'BGR', 'GRC', 'UNK', 'SRB'],
    area: 25713.0,
    demonyms: {
      eng: {
        f: 'Macedonian',
        m: 'Macedonian',
      },
      fra: {
        f: 'Macédonienne',
        m: 'Macédonien',
      },
    },
    flag: '\uD83C\uDDF2\uD83C\uDDF0',
    maps: {
      googleMaps: 'https://goo.gl/maps/55Q8MEnF6ACdu3q79',
      openStreetMaps: 'https://www.openstreetmap.org/relation/53293',
    },
    population: 2077132,
    gini: {
      '2018': 33.0,
    },
    fifa: 'MKD',
    car: {
      signs: ['MK'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/mk.png',
      svg: 'https://flagcdn.com/mk.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/mk.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/mk.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [42.0, 21.43],
    },
    postalCode: {
      format: '####',
      regex: '^(\\d{4})$',
    },
  },
  {
    name: {
      common: 'Samoa',
      official: 'Independent State of Samoa',
      nativeName: {
        eng: {
          official: 'Independent State of Samoa',
          common: 'Samoa',
        },
        smo: {
          official: 'Malo Saʻoloto Tutoʻatasi o Sāmoa',
          common: 'Sāmoa',
        },
      },
    },
    tld: ['.ws'],
    cca2: 'WS',
    ccn3: '882',
    cca3: 'WSM',
    cioc: 'SAM',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      WST: {
        name: 'Samoan tālā',
        symbol: 'T',
      },
    },
    idd: {
      root: '+6',
      suffixes: ['85'],
    },
    capital: ['Apia'],
    altSpellings: ['WS', 'Independent State of Samoa', 'Malo Saʻoloto Tutoʻatasi o Sāmoa'],
    region: 'Oceania',
    subregion: 'Polynesia',
    languages: {
      eng: 'English',
      smo: 'Samoan',
    },
    translations: {
      ara: {
        official: 'دولة ساموا المستقلة',
        common: 'ساموا',
      },
      ces: {
        official: 'Nezávislý stát Samoa',
        common: 'Samoa',
      },
      cym: {
        official: 'Independent State of Samoa',
        common: 'Samoa',
      },
      deu: {
        official: 'Unabhängige Staat Samoa',
        common: 'Samoa',
      },
      est: {
        official: 'Samoa Iseseisvusriik',
        common: 'Samoa',
      },
      fin: {
        official: 'Samoan itsenäinen valtio',
        common: 'Samoa',
      },
      fra: {
        official: 'Samoa',
        common: 'Samoa',
      },
      hrv: {
        official: 'Nezavisna Država Samoa',
        common: 'Samoa',
      },
      hun: {
        official: 'Szamoai Független Állam',
        common: 'Szamoa',
      },
      ita: {
        official: 'Stato indipendente di Samoa',
        common: 'Samoa',
      },
      jpn: {
        official: 'サモア独立国',
        common: 'サモア',
      },
      kor: {
        official: '사모아 독립국',
        common: '사모아',
      },
      nld: {
        official: 'Onafhankelijke Staat Samoa',
        common: 'Samoa',
      },
      per: {
        official: 'ایالت مستقل ساموآ',
        common: 'ساموآ',
      },
      pol: {
        official: 'Niezależne Państwo Samoa',
        common: 'Samoa',
      },
      por: {
        official: 'Estado Independente de Samoa',
        common: 'Samoa',
      },
      rus: {
        official: 'Независимое Государство Самоа',
        common: 'Самоа',
      },
      slk: {
        official: 'Nezávislý štátSamoa',
        common: 'Samoa',
      },
      spa: {
        official: 'Estado Independiente de Samoa',
        common: 'Samoa',
      },
      swe: {
        official: 'Självständiga staten Samoa',
        common: 'Samoa',
      },
      urd: {
        official: 'آزاد سلطنتِ ساموا',
        common: 'سامووا',
      },
      zho: {
        official: '萨摩亚独立国',
        common: '萨摩亚',
      },
    },
    latlng: [-13.58333333, -172.33333333],
    landlocked: false,
    area: 2842.0,
    demonyms: {
      eng: {
        f: 'Samoan',
        m: 'Samoan',
      },
      fra: {
        f: 'Samoane',
        m: 'Samoan',
      },
    },
    flag: '\uD83C\uDDFC\uD83C\uDDF8',
    maps: {
      googleMaps: 'https://goo.gl/maps/CFC9fEFP9cfkYUBF9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/1872673',
    },
    population: 198410,
    gini: {
      '2013': 38.7,
    },
    fifa: 'SAM',
    car: {
      signs: ['WS'],
      side: 'left',
    },
    timezones: ['UTC+13:00'],
    continents: ['Oceania'],
    flags: {
      png: 'https://flagcdn.com/w320/ws.png',
      svg: 'https://flagcdn.com/ws.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ws.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ws.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-13.82, -171.77],
    },
  },
  {
    name: {
      common: 'Guernsey',
      official: 'Bailiwick of Guernsey',
      nativeName: {
        eng: {
          official: 'Bailiwick of Guernsey',
          common: 'Guernsey',
        },
        fra: {
          official: 'Bailliage de Guernesey',
          common: 'Guernesey',
        },
        nfr: {
          official: 'Dgèrnésiais',
          common: 'Dgèrnésiais',
        },
      },
    },
    tld: ['.gg'],
    cca2: 'GG',
    ccn3: '831',
    cca3: 'GGY',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      GBP: {
        name: 'British pound',
        symbol: '£',
      },
      GGP: {
        name: 'Guernsey pound',
        symbol: '£',
      },
    },
    idd: {
      root: '+4',
      suffixes: ['4'],
    },
    capital: ['St. Peter Port'],
    altSpellings: ['GG', 'Bailiwick of Guernsey', 'Bailliage de Guernesey'],
    region: 'Europe',
    subregion: 'Northern Europe',
    languages: {
      eng: 'English',
      fra: 'French',
      nfr: 'Guernésiais',
    },
    translations: {
      ara: {
        official: 'غيرنزي',
        common: 'غيرنزي',
      },
      ces: {
        official: 'Rychtářství Guernsey',
        common: 'Guernsey',
      },
      cym: {
        official: 'Bailiwick of Guernsey',
        common: 'Guernsey',
      },
      deu: {
        official: 'Vogtei Guernsey',
        common: 'Guernsey',
      },
      est: {
        official: 'Guernsey foogtkond',
        common: 'Guernsey',
      },
      fin: {
        official: 'Guernsey',
        common: 'Guernsey',
      },
      fra: {
        official: 'Bailliage de Guernesey',
        common: 'Guernesey',
      },
      hrv: {
        official: 'Struka Guernsey',
        common: 'Guernsey',
      },
      hun: {
        official: 'Guernsey',
        common: 'Guernsey',
      },
      ita: {
        official: 'Baliato di Guernsey',
        common: 'Guernsey',
      },
      jpn: {
        official: 'ガーンジーの得意分野',
        common: 'ガーンジー',
      },
      kor: {
        official: '건지 섬',
        common: '건지 섬',
      },
      nld: {
        official: 'Baljuwschap Guernsey',
        common: 'Guernsey',
      },
      per: {
        official: 'گرنزی',
        common: 'گرنزی',
      },
      pol: {
        official: 'Baliwat Guernsey',
        common: 'Guernsey',
      },
      por: {
        official: 'Bailiado de Guernsey',
        common: 'Guernsey',
      },
      rus: {
        official: 'Коронное владение Гернси',
        common: 'Гернси',
      },
      slk: {
        official: 'Guernsey',
        common: 'Guernsey',
      },
      spa: {
        official: 'Bailía de Guernsey',
        common: 'Guernsey',
      },
      swe: {
        official: 'Guernsey',
        common: 'Guernsey',
      },
      urd: {
        official: 'گرنزی رودبار',
        common: 'گرنزی',
      },
      zho: {
        official: '根西岛',
        common: '根西岛',
      },
    },
    latlng: [49.46666666, -2.58333333],
    landlocked: false,
    area: 78.0,
    demonyms: {
      eng: {
        f: 'Channel Islander',
        m: 'Channel Islander',
      },
      fra: {
        f: 'Guernesiaise',
        m: 'Guernesiais',
      },
    },
    flag: '\uD83C\uDDEC\uD83C\uDDEC',
    maps: {
      googleMaps: 'https://goo.gl/maps/6kXnQU5QvEZMD9VB7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/270009',
    },
    population: 62999,
    car: {
      signs: ['GBG'],
      side: 'left',
    },
    timezones: ['UTC+00:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/gg.png',
      svg: 'https://flagcdn.com/gg.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/gg.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/gg.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [49.45, -2.54],
    },
    postalCode: {
      format: '@# #@@|@## #@@|@@# #@@|@@## #@@|@#@ #@@|@@#@ #@@|GIR0AA',
      regex:
        '^(([A-Z]\\d{2}[A-Z]{2})|([A-Z]\\d{3}[A-Z]{2})|([A-Z]{2}\\d{2}[A-Z]{2})|([A-Z]{2}\\d{3}[A-Z]{2})|([A-Z]\\d[A-Z]\\d[A-Z]{2})|([A-Z]{2}\\d[A-Z]\\d[A-Z]{2})|(GIR0AA))$',
    },
  },
  {
    name: {
      common: 'Laos',
      official: "Lao People's Democratic Republic",
      nativeName: {
        lao: {
          official: 'ສາທາລະນະ ຊາທິປະໄຕ ຄົນລາວ ຂອງ',
          common: 'ສປປລາວ',
        },
      },
    },
    tld: ['.la'],
    cca2: 'LA',
    ccn3: '418',
    cca3: 'LAO',
    cioc: 'LAO',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      LAK: {
        name: 'Lao kip',
        symbol: '₭',
      },
    },
    idd: {
      root: '+8',
      suffixes: ['56'],
    },
    capital: ['Vientiane'],
    altSpellings: ['LA', 'Lao', "Lao People's Democratic Republic", 'Sathalanalat Paxathipatai Paxaxon Lao'],
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    languages: {
      lao: 'Lao',
    },
    translations: {
      ara: {
        official: 'جمهورية لاوس الديمقراطية الشعبية',
        common: 'لاوس',
      },
      ces: {
        official: 'Laoská lidově demokratická republika',
        common: 'Laos',
      },
      cym: {
        official: "Lao People's Democratic Republic",
        common: 'Laos',
      },
      deu: {
        official: 'Demokratische Volksrepublik Laos',
        common: 'Laos',
      },
      est: {
        official: 'Laose Demokraatlik Rahvavabariik',
        common: 'Laos',
      },
      fin: {
        official: 'Laosin demokraattinen kansantasavalta',
        common: 'Laos',
      },
      fra: {
        official: 'République démocratique populaire lao',
        common: 'Laos',
      },
      hrv: {
        official: 'Narodna Demokratska Republika',
        common: 'Laos',
      },
      hun: {
        official: 'Laoszi Népi Demokratikus Köztársaság',
        common: 'Laosz',
      },
      ita: {
        official: 'Repubblica democratica popolare del Laos',
        common: 'Laos',
      },
      jpn: {
        official: 'ラオス人民民主共和国',
        common: 'ラオス人民民主共和国',
      },
      kor: {
        official: '라오 인민 민주 공화국',
        common: '라오스',
      },
      nld: {
        official: 'Lao Democratische Volksrepubliek',
        common: 'Laos',
      },
      per: {
        official: 'جمهوری دموکراتیک خلق لائوس',
        common: 'لائوس',
      },
      pol: {
        official: 'Laotańska Republika Ludowo-Demokratyczna',
        common: 'Laos',
      },
      por: {
        official: 'Laos, República Democrática',
        common: 'Laos',
      },
      rus: {
        official: 'Лаосская Народно-Демократическая Республика',
        common: 'Лаос',
      },
      slk: {
        official: 'Laoská ľudovodemokratická republika',
        common: 'Laos',
      },
      spa: {
        official: 'República Democrática Popular Lao',
        common: 'Laos',
      },
      swe: {
        official: 'Demokratiska folkrepubliken Laos',
        common: 'Laos',
      },
      urd: {
        official: 'عوامی جمہوری جمہوریہ لاؤ',
        common: 'لاؤس',
      },
      zho: {
        official: '老挝人民民主共和国',
        common: '老挝',
      },
    },
    latlng: [18.0, 105.0],
    landlocked: true,
    borders: ['MMR', 'KHM', 'CHN', 'THA', 'VNM'],
    area: 236800.0,
    demonyms: {
      eng: {
        f: 'Laotian',
        m: 'Laotian',
      },
      fra: {
        f: 'Laotienne',
        m: 'Laotien',
      },
    },
    flag: '\uD83C\uDDF1\uD83C\uDDE6',
    maps: {
      googleMaps: 'https://goo.gl/maps/F3asVB7sRKgSnwbE7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/49903',
    },
    population: 7275556,
    gini: {
      '2018': 38.8,
    },
    fifa: 'LAO',
    car: {
      signs: ['LAO'],
      side: 'right',
    },
    timezones: ['UTC+07:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/la.png',
      svg: 'https://flagcdn.com/la.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/la.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/la.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [17.97, 102.6],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Namibia',
      official: 'Republic of Namibia',
      nativeName: {
        afr: {
          official: 'Republiek van Namibië',
          common: 'Namibië',
        },
        deu: {
          official: 'Republik Namibia',
          common: 'Namibia',
        },
        eng: {
          official: 'Republic of Namibia',
          common: 'Namibia',
        },
        her: {
          official: 'Republic of Namibia',
          common: 'Namibia',
        },
        hgm: {
          official: 'Republic of Namibia',
          common: 'Namibia',
        },
        kwn: {
          official: 'Republic of Namibia',
          common: 'Namibia',
        },
        loz: {
          official: 'Republic of Namibia',
          common: 'Namibia',
        },
        ndo: {
          official: 'Republic of Namibia',
          common: 'Namibia',
        },
        tsn: {
          official: 'Lefatshe la Namibia',
          common: 'Namibia',
        },
      },
    },
    tld: ['.na'],
    cca2: 'NA',
    ccn3: '516',
    cca3: 'NAM',
    cioc: 'NAM',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      NAD: {
        name: 'Namibian dollar',
        symbol: '$',
      },
      ZAR: {
        name: 'South African rand',
        symbol: 'R',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['64'],
    },
    capital: ['Windhoek'],
    altSpellings: ['NA', 'Namibië', 'Republic of Namibia'],
    region: 'Africa',
    subregion: 'Southern Africa',
    languages: {
      afr: 'Afrikaans',
      deu: 'German',
      eng: 'English',
      her: 'Herero',
      hgm: 'Khoekhoe',
      kwn: 'Kwangali',
      loz: 'Lozi',
      ndo: 'Ndonga',
      tsn: 'Tswana',
    },
    translations: {
      ara: {
        official: 'جمهورية ناميبيا',
        common: 'ناميبيا',
      },
      ces: {
        official: 'Namibijská republika',
        common: 'Namibie',
      },
      cym: {
        official: 'Republic of Namibia',
        common: 'Namibia',
      },
      deu: {
        official: 'Republik Namibia',
        common: 'Namibia',
      },
      est: {
        official: 'Namiibia Vabariik',
        common: 'Namiibia',
      },
      fin: {
        official: 'Namibian tasavalta',
        common: 'Namibia',
      },
      fra: {
        official: 'République de Namibie',
        common: 'Namibie',
      },
      hrv: {
        official: 'Republika Namibija',
        common: 'Namibija',
      },
      hun: {
        official: 'Namíbiai Köztársaság',
        common: 'Namíbia',
      },
      ita: {
        official: 'Repubblica di Namibia',
        common: 'Namibia',
      },
      jpn: {
        official: 'ナミビア共和国',
        common: 'ナミビア',
      },
      kor: {
        official: '나미비아 공화국',
        common: '나미비아',
      },
      nld: {
        official: 'Republiek Namibië',
        common: 'Namibië',
      },
      per: {
        official: 'جمهوری نامیبیا',
        common: 'نامیبیا',
      },
      pol: {
        official: 'Republika Namibii',
        common: 'Namibia',
      },
      por: {
        official: 'República da Namíbia',
        common: 'Namíbia',
      },
      rus: {
        official: 'Республика Намибия',
        common: 'Намибия',
      },
      slk: {
        official: 'Namíbijská republika',
        common: 'Namíbia',
      },
      spa: {
        official: 'República de Namibia',
        common: 'Namibia',
      },
      swe: {
        official: 'Republiken Namibia',
        common: 'Namibia',
      },
      urd: {
        official: 'جمہوریہ نمیبیا',
        common: 'نمیبیا',
      },
      zho: {
        official: '纳米比亚共和国',
        common: '纳米比亚',
      },
    },
    latlng: [-22.0, 17.0],
    landlocked: false,
    borders: ['AGO', 'BWA', 'ZAF', 'ZMB'],
    area: 825615.0,
    demonyms: {
      eng: {
        f: 'Namibian',
        m: 'Namibian',
      },
      fra: {
        f: 'Namibienne',
        m: 'Namibien',
      },
    },
    flag: '\uD83C\uDDF3\uD83C\uDDE6',
    maps: {
      googleMaps: 'https://goo.gl/maps/oR1i8BFEYX3EY83WA',
      openStreetMaps: 'https://www.openstreetmap.org/relation/195266',
    },
    population: 2540916,
    gini: {
      '2015': 59.1,
    },
    fifa: 'NAM',
    car: {
      signs: ['NAM'],
      side: 'left',
    },
    timezones: ['UTC+01:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/na.png',
      svg: 'https://flagcdn.com/na.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/na.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/na.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-22.57, 17.08],
    },
  },
  {
    name: {
      common: 'British Virgin Islands',
      official: 'Virgin Islands',
      nativeName: {
        eng: {
          official: 'Virgin Islands',
          common: 'British Virgin Islands',
        },
      },
    },
    tld: ['.vg'],
    cca2: 'VG',
    ccn3: '092',
    cca3: 'VGB',
    cioc: 'IVB',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      USD: {
        name: 'United States dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+1',
      suffixes: ['284'],
    },
    capital: ['Road Town'],
    altSpellings: ['VG', 'Virgin Islands, British'],
    region: 'Americas',
    subregion: 'Caribbean',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'جزر العذراء البريطانية',
        common: 'جزر العذراء',
      },
      ces: {
        official: 'Britské Panenské ostrovy',
        common: 'Britské Panenské ostrovy',
      },
      cym: {
        official: 'Virgin Islands',
        common: 'British Virgin Islands',
      },
      deu: {
        official: 'Jungferninseln',
        common: 'Britische Jungferninseln',
      },
      est: {
        official: 'Neitsisaared',
        common: 'Briti Neitsisaared',
      },
      fin: {
        official: 'Brittiläiset Neitsytsaaret',
        common: 'Neitsytsaaret',
      },
      fra: {
        official: 'îles Vierges',
        common: 'Îles Vierges britanniques',
      },
      hrv: {
        official: 'Djevičanski Otoci',
        common: 'Britanski Djevičanski Otoci',
      },
      hun: {
        official: 'Brit Virgin-szigetek',
        common: 'Brit Virgin-szigetek',
      },
      ita: {
        official: 'Isole Vergini',
        common: 'Isole Vergini Britanniche',
      },
      jpn: {
        official: 'バージン諸島',
        common: 'イギリス領ヴァージン諸島',
      },
      kor: {
        official: '영국령 버진아일랜드',
        common: '영국령 버진아일랜드',
      },
      nld: {
        official: 'Maagdeneilanden',
        common: 'Britse Maagdeneilanden',
      },
      per: {
        official: 'جزایر ویرجین بریتانیا',
        common: 'جزایر ویرجین بریتانیا',
      },
      pol: {
        official: 'Brytyjskie Wyspy Dziewicze',
        common: 'Brytyjskie Wyspy Dziewicze',
      },
      por: {
        official: 'Ilhas Virgens',
        common: 'Ilhas Virgens',
      },
      rus: {
        official: 'Виргинские острова',
        common: 'Британские Виргинские острова',
      },
      slk: {
        official: 'Panenské ostrovy',
        common: 'Panenské ostrovy',
      },
      spa: {
        official: 'Islas Vírgenes',
        common: 'Islas Vírgenes del Reino Unido',
      },
      swe: {
        official: 'Brittiska Jungfruöarna',
        common: 'Brittiska Jungfruöarna',
      },
      urd: {
        official: 'برطانوی جزائر ورجن',
        common: 'برطانوی جزائر ورجن',
      },
      zho: {
        official: '英属维尔京群岛',
        common: '英属维尔京群岛',
      },
    },
    latlng: [18.431383, -64.62305],
    landlocked: false,
    area: 151.0,
    demonyms: {
      eng: {
        f: 'Virgin Islander',
        m: 'Virgin Islander',
      },
    },
    flag: '\uD83C\uDDFB\uD83C\uDDEC',
    maps: {
      googleMaps: 'https://goo.gl/maps/49C9cSesNVAR9DQk8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/285454',
    },
    population: 30237,
    fifa: 'VGB',
    car: {
      signs: ['BVI'],
      side: 'left',
    },
    timezones: ['UTC-04:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/vg.png',
      svg: 'https://flagcdn.com/vg.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/vg.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/vg.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [18.42, -64.62],
    },
  },
  {
    name: {
      common: 'Cayman Islands',
      official: 'Cayman Islands',
      nativeName: {
        eng: {
          official: 'Cayman Islands',
          common: 'Cayman Islands',
        },
      },
    },
    tld: ['.ky'],
    cca2: 'KY',
    ccn3: '136',
    cca3: 'CYM',
    cioc: 'CAY',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      KYD: {
        name: 'Cayman Islands dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+1',
      suffixes: ['345'],
    },
    capital: ['George Town'],
    altSpellings: ['KY'],
    region: 'Americas',
    subregion: 'Caribbean',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'جزر كايمان',
        common: 'جزر كايمان',
      },
      ces: {
        official: 'Kajmanské ostrovy',
        common: 'Kajmanské ostrovy',
      },
      cym: {
        official: 'Ynysoedd Cayman',
        common: 'Ynysoedd Cayman',
      },
      deu: {
        official: 'Cayman-Inseln',
        common: 'Kaimaninseln',
      },
      est: {
        official: 'Kaimanisaared',
        common: 'Kaimanisaared',
      },
      fin: {
        official: 'Caymansaaret',
        common: 'Caymansaaret',
      },
      fra: {
        official: 'Îles Caïmans',
        common: 'Îles Caïmans',
      },
      hrv: {
        official: 'Kajmanski otoci',
        common: 'Kajmanski otoci',
      },
      hun: {
        official: 'Kajmán-szigetek',
        common: 'Kajmán-szigetek',
      },
      ita: {
        official: 'Isole Cayman',
        common: 'Isole Cayman',
      },
      jpn: {
        official: 'ケイマン諸島',
        common: 'ケイマン諸島',
      },
      kor: {
        official: '케이맨 제도',
        common: '케이맨 제도',
      },
      nld: {
        official: 'Caymaneilanden',
        common: 'Caymaneilanden',
      },
      per: {
        official: 'جزایر کیمن',
        common: 'جزایر کیمن',
      },
      pol: {
        official: 'Kajmany',
        common: 'Kajmany',
      },
      por: {
        official: 'Ilhas Cayman',
        common: 'Ilhas Caimão',
      },
      rus: {
        official: 'Каймановы острова',
        common: 'Каймановы острова',
      },
      slk: {
        official: 'Kajmanie ostrovy',
        common: 'Kajmanie ostrovy',
      },
      spa: {
        official: 'Islas Caimán',
        common: 'Islas Caimán',
      },
      swe: {
        official: 'Caymanöarna',
        common: 'Caymanöarna',
      },
      urd: {
        official: 'جزائر کیمین',
        common: 'جزائر کیمین',
      },
      zho: {
        official: '开曼群岛',
        common: '开曼群岛',
      },
    },
    latlng: [19.5, -80.5],
    landlocked: false,
    area: 264.0,
    demonyms: {
      eng: {
        f: 'Caymanian',
        m: 'Caymanian',
      },
      fra: {
        f: 'Caïmanienne',
        m: 'Caïmanien',
      },
    },
    flag: '\uD83C\uDDF0\uD83C\uDDFE',
    maps: {
      googleMaps: 'https://goo.gl/maps/P3ZVXX3LH63t91hL8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/7269765',
    },
    population: 65720,
    fifa: 'CAY',
    car: {
      signs: ['GB'],
      side: 'left',
    },
    timezones: ['UTC-05:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/ky.png',
      svg: 'https://flagcdn.com/ky.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ky.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ky.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [19.3, -81.38],
    },
  },
  {
    name: {
      common: 'Egypt',
      official: 'Arab Republic of Egypt',
      nativeName: {
        ara: {
          official: 'جمهورية مصر العربية',
          common: 'مصر',
        },
      },
    },
    tld: ['.eg', '.مصر'],
    cca2: 'EG',
    ccn3: '818',
    cca3: 'EGY',
    cioc: 'EGY',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      EGP: {
        name: 'Egyptian pound',
        symbol: '£',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['0'],
    },
    capital: ['Cairo'],
    altSpellings: ['EG', 'Arab Republic of Egypt'],
    region: 'Africa',
    subregion: 'Northern Africa',
    languages: {
      ara: 'Arabic',
    },
    translations: {
      ara: {
        official: 'جمهورية مصر العربية',
        common: 'مصر',
      },
      ces: {
        official: 'Egyptská arabská republika',
        common: 'Egypt',
      },
      cym: {
        official: 'Gweriniaeth Arabaidd yr Aifft',
        common: 'Yr Aifft',
      },
      deu: {
        official: 'Arabische Republik Ägypten',
        common: 'Ägypten',
      },
      est: {
        official: 'Egiptuse Araabia Vabariik',
        common: 'Egiptus',
      },
      fin: {
        official: 'Egyptin arabitasavalta',
        common: 'Egypti',
      },
      fra: {
        official: "République arabe d'Égypte",
        common: 'Égypte',
      },
      hrv: {
        official: 'Arapska Republika Egipat',
        common: 'Egipat',
      },
      hun: {
        official: 'Egyiptomi Arab Köztársaság',
        common: 'Egyiptom',
      },
      ita: {
        official: "Repubblica araba d'Egitto",
        common: 'Egitto',
      },
      jpn: {
        official: 'エジプト·アラブ共和国',
        common: 'エジプト',
      },
      kor: {
        official: '이집트 아랍 공화국',
        common: '이집트',
      },
      nld: {
        official: 'Arabische Republiek Egypte',
        common: 'Egypte',
      },
      per: {
        official: 'جمهوری عربی مصر',
        common: 'مصر',
      },
      pol: {
        official: 'Arabska Republika Egiptu',
        common: 'Egipt',
      },
      por: {
        official: 'República Árabe do Egipto',
        common: 'Egito',
      },
      rus: {
        official: 'Арабская Республика Египет',
        common: 'Египет',
      },
      slk: {
        official: 'Egyptská arabská republika',
        common: 'Egypt',
      },
      spa: {
        official: 'República Árabe de Egipto',
        common: 'Egipto',
      },
      swe: {
        official: 'Arabrepubliken Egypten',
        common: 'Egypten',
      },
      urd: {
        official: 'مصری عرب جمہوریہ',
        common: 'مصر',
      },
      zho: {
        official: '阿拉伯埃及共和国',
        common: '埃及',
      },
    },
    latlng: [27.0, 30.0],
    landlocked: false,
    borders: ['ISR', 'LBY', 'PSE', 'SDN'],
    area: 1002450.0,
    demonyms: {
      eng: {
        f: 'Egyptian',
        m: 'Egyptian',
      },
      fra: {
        f: 'Égyptienne',
        m: 'Égyptien',
      },
    },
    flag: '\uD83C\uDDEA\uD83C\uDDEC',
    maps: {
      googleMaps: 'https://goo.gl/maps/uoDRhXbsqjG6L7VG7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/1473947',
    },
    population: 102334403,
    gini: {
      '2017': 31.5,
    },
    fifa: 'EGY',
    car: {
      signs: ['ET'],
      side: 'right',
    },
    timezones: ['UTC+02:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/eg.png',
      svg: 'https://flagcdn.com/eg.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/eg.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/eg.svg',
    },
    startOfWeek: 'sunday',
    capitalInfo: {
      latlng: [30.05, 31.25],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Cambodia',
      official: 'Kingdom of Cambodia',
      nativeName: {
        khm: {
          official: 'ព្រះរាជាណាចក្រកម្ពុជា',
          common: 'Kâmpŭchéa',
        },
      },
    },
    tld: ['.kh'],
    cca2: 'KH',
    ccn3: '116',
    cca3: 'KHM',
    cioc: 'CAM',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      KHR: {
        name: 'Cambodian riel',
        symbol: '៛',
      },
      USD: {
        name: 'United States dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+8',
      suffixes: ['55'],
    },
    capital: ['Phnom Penh'],
    altSpellings: ['KH', 'Kingdom of Cambodia'],
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    languages: {
      khm: 'Khmer',
    },
    translations: {
      ara: {
        official: 'مملكة كمبوديا',
        common: 'كمبوديا',
      },
      ces: {
        official: 'Kambodžské království',
        common: 'Kambodža',
      },
      cym: {
        official: 'Teyrnas Cambodia',
        common: 'Cambodia',
      },
      deu: {
        official: 'Königreich Kambodscha',
        common: 'Kambodscha',
      },
      est: {
        official: 'Kambodža Kuningriik',
        common: 'Kambodža',
      },
      fin: {
        official: 'Kambodžan kuningaskunta',
        common: 'Kambodža',
      },
      fra: {
        official: 'Royaume du Cambodge',
        common: 'Cambodge',
      },
      hrv: {
        official: 'Kraljevina Kambodža',
        common: 'Kambodža',
      },
      hun: {
        official: 'Kambodzsai Királyság',
        common: 'Kambodzsa',
      },
      ita: {
        official: 'Regno di Cambogia',
        common: 'Cambogia',
      },
      jpn: {
        official: 'カンボジア王国',
        common: 'カンボジア',
      },
      kor: {
        official: '캄보디아 왕국',
        common: '캄보디아',
      },
      nld: {
        official: 'Koninkrijk Cambodja',
        common: 'Cambodja',
      },
      per: {
        official: 'پادشاهی کامبوج',
        common: 'کامبوج',
      },
      pol: {
        official: 'Królestwo Kambodży',
        common: 'Kambodża',
      },
      por: {
        official: 'Reino do Camboja',
        common: 'Camboja',
      },
      rus: {
        official: 'Королевство Камбоджа',
        common: 'Камбоджа',
      },
      slk: {
        official: 'Kamboǆské kráľovstvo',
        common: 'Kamboǆa',
      },
      spa: {
        official: 'Reino de Camboya',
        common: 'Camboya',
      },
      swe: {
        official: 'Konungariket Kambodja',
        common: 'Kambodja',
      },
      urd: {
        official: 'مملکتِ کمبوڈیا',
        common: 'کمبوڈیا',
      },
      zho: {
        official: '柬埔寨王国',
        common: '柬埔寨',
      },
    },
    latlng: [13.0, 105.0],
    landlocked: false,
    borders: ['LAO', 'THA', 'VNM'],
    area: 181035.0,
    demonyms: {
      eng: {
        f: 'Cambodian',
        m: 'Cambodian',
      },
      fra: {
        f: 'Cambodgienne',
        m: 'Cambodgien',
      },
    },
    flag: '\uD83C\uDDF0\uD83C\uDDED',
    maps: {
      googleMaps: 'https://goo.gl/maps/nztQtFSrUXZymJaW8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/49898',
    },
    population: 16718971,
    fifa: 'CAM',
    car: {
      signs: ['K'],
      side: 'right',
    },
    timezones: ['UTC+07:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/kh.png',
      svg: 'https://flagcdn.com/kh.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/kh.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/kh.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [11.55, 104.92],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Cook Islands',
      official: 'Cook Islands',
      nativeName: {
        eng: {
          official: 'Cook Islands',
          common: 'Cook Islands',
        },
        rar: {
          official: "Kūki 'Āirani",
          common: "Kūki 'Āirani",
        },
      },
    },
    tld: ['.ck'],
    cca2: 'CK',
    ccn3: '184',
    cca3: 'COK',
    cioc: 'COK',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      CKD: {
        name: 'Cook Islands dollar',
        symbol: '$',
      },
      NZD: {
        name: 'New Zealand dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+6',
      suffixes: ['82'],
    },
    capital: ['Avarua'],
    altSpellings: ['CK', "Kūki 'Āirani"],
    region: 'Oceania',
    subregion: 'Polynesia',
    languages: {
      eng: 'English',
      rar: 'Cook Islands Māori',
    },
    translations: {
      ara: {
        official: 'جزر كوك',
        common: 'جزر كوك',
      },
      ces: {
        official: 'Cookovy ostrovy',
        common: 'Cookovy ostrovy',
      },
      cym: {
        official: 'Ynysoedd Cook',
        common: 'Ynysoedd Cook',
      },
      deu: {
        official: 'Cookinseln',
        common: 'Cookinseln',
      },
      est: {
        official: 'Cooki saared',
        common: 'Cooki saared',
      },
      fin: {
        official: 'Cookinsaaret',
        common: 'Cookinsaaret',
      },
      fra: {
        official: 'Îles Cook',
        common: 'Îles Cook',
      },
      hrv: {
        official: 'Cook Islands',
        common: 'Cookovo Otočje',
      },
      hun: {
        official: 'Cook-szigetek',
        common: 'Cook-szigetek',
      },
      ita: {
        official: 'Isole Cook',
        common: 'Isole Cook',
      },
      jpn: {
        official: 'クック諸島',
        common: 'クック諸島',
      },
      kor: {
        official: '쿡 제도',
        common: '쿡 제도',
      },
      nld: {
        official: 'Cook eilanden',
        common: 'Cookeilanden',
      },
      per: {
        official: 'جزایر کوک',
        common: 'جزایر کوک',
      },
      pol: {
        official: 'Wyspy Cooka',
        common: 'Wyspy Cooka',
      },
      por: {
        official: 'Ilhas Cook',
        common: 'Ilhas Cook',
      },
      rus: {
        official: 'острова Кука',
        common: 'Острова Кука',
      },
      slk: {
        official: 'Cookove ostrovy',
        common: 'Cookove ostrovy',
      },
      spa: {
        official: 'Islas Cook',
        common: 'Islas Cook',
      },
      swe: {
        official: 'Cooköarna',
        common: 'Cooköarna',
      },
      urd: {
        official: 'جزائر کک',
        common: 'جزائر کک',
      },
      zho: {
        official: '库克群岛',
        common: '库克群岛',
      },
    },
    latlng: [-21.23333333, -159.76666666],
    landlocked: false,
    area: 236.0,
    demonyms: {
      eng: {
        f: 'Cook Islander',
        m: 'Cook Islander',
      },
      fra: {
        f: 'Cookienne',
        m: 'Cookien',
      },
    },
    flag: '\uD83C\uDDE8\uD83C\uDDF0',
    maps: {
      googleMaps: 'https://goo.gl/maps/nrGZrvWRGB4WHgDC9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/2184233',
    },
    population: 18100,
    fifa: 'COK',
    car: {
      signs: ['NZ'],
      side: 'left',
    },
    timezones: ['UTC-10:00'],
    continents: ['Oceania'],
    flags: {
      png: 'https://flagcdn.com/w320/ck.png',
      svg: 'https://flagcdn.com/ck.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ck.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ck.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-21.2, -159.77],
    },
  },
  {
    name: {
      common: 'Seychelles',
      official: 'Republic of Seychelles',
      nativeName: {
        crs: {
          official: 'Repiblik Sesel',
          common: 'Sesel',
        },
        eng: {
          official: 'Republic of Seychelles',
          common: 'Seychelles',
        },
        fra: {
          official: 'République des Seychelles',
          common: 'Seychelles',
        },
      },
    },
    tld: ['.sc'],
    cca2: 'SC',
    ccn3: '690',
    cca3: 'SYC',
    cioc: 'SEY',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      SCR: {
        name: 'Seychellois rupee',
        symbol: '₨',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['48'],
    },
    capital: ['Victoria'],
    altSpellings: ['SC', 'Republic of Seychelles', 'Repiblik Sesel', 'République des Seychelles'],
    region: 'Africa',
    subregion: 'Eastern Africa',
    languages: {
      crs: 'Seychellois Creole',
      eng: 'English',
      fra: 'French',
    },
    translations: {
      ara: {
        official: 'جمهورية سيشل',
        common: 'سيشل',
      },
      ces: {
        official: 'Seychelská republika',
        common: 'Seychely',
      },
      cym: {
        official: 'Republic of Seychelles',
        common: 'Seychelles',
      },
      deu: {
        official: 'Republik der Seychellen',
        common: 'Seychellen',
      },
      est: {
        official: 'Seišelli Vabariik',
        common: 'Seišellid',
      },
      fin: {
        official: 'Seychellien tasavalta',
        common: 'Seychellit',
      },
      fra: {
        official: 'République des Seychelles',
        common: 'Seychelles',
      },
      hrv: {
        official: 'Republika Sejšeli',
        common: 'Sejšeli',
      },
      hun: {
        official: 'Seychelle Köztársaság',
        common: 'Seychelle-szigetek',
      },
      ita: {
        official: 'Repubblica delle Seychelles',
        common: 'Seychelles',
      },
      jpn: {
        official: 'セイシェル共和国',
        common: 'セーシェル',
      },
      kor: {
        official: '세이셸 공화국',
        common: '세이셸',
      },
      nld: {
        official: 'Republiek der Seychellen',
        common: 'Seychellen',
      },
      per: {
        official: 'جمهوری سیشل',
        common: 'سیشل',
      },
      pol: {
        official: 'Republika Seszeli',
        common: 'Seszele',
      },
      por: {
        official: 'República das Seychelles',
        common: 'Seicheles',
      },
      rus: {
        official: 'Республика Сейшельские Острова',
        common: 'Сейшельские Острова',
      },
      slk: {
        official: 'Seychelská republika',
        common: 'Seychely',
      },
      spa: {
        official: 'República de las Seychelles',
        common: 'Seychelles',
      },
      swe: {
        official: 'Republiken Seychellerna',
        common: 'Seychellerna',
      },
      urd: {
        official: 'جمہوریہ سیچیلیس',
        common: 'سیچیلیس',
      },
      zho: {
        official: '塞舌尔共和国',
        common: '塞舌尔',
      },
    },
    latlng: [-4.58333333, 55.66666666],
    landlocked: false,
    area: 452.0,
    demonyms: {
      eng: {
        f: 'Seychellois',
        m: 'Seychellois',
      },
      fra: {
        f: 'Seychelloise',
        m: 'Seychellois',
      },
    },
    flag: '\uD83C\uDDF8\uD83C\uDDE8',
    maps: {
      googleMaps: 'https://goo.gl/maps/aqCcy2TKh5TV5MAX8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/536765',
    },
    population: 98462,
    gini: {
      '2018': 32.1,
    },
    fifa: 'SEY',
    car: {
      signs: ['SY'],
      side: 'left',
    },
    timezones: ['UTC+04:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/sc.png',
      svg: 'https://flagcdn.com/sc.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/sc.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/sc.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-4.62, 55.45],
    },
  },
  {
    name: {
      common: 'Israel',
      official: 'State of Israel',
      nativeName: {
        ara: {
          official: 'دولة إسرائيل',
          common: 'إسرائيل',
        },
        heb: {
          official: 'מדינת ישראל',
          common: 'ישראל',
        },
      },
    },
    tld: ['.il'],
    cca2: 'IL',
    ccn3: '376',
    cca3: 'ISR',
    cioc: 'ISR',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      ILS: {
        name: 'Israeli new shekel',
        symbol: '₪',
      },
    },
    idd: {
      root: '+9',
      suffixes: ['72'],
    },
    capital: ['Jerusalem'],
    altSpellings: ['IL', 'State of Israel', "Medīnat Yisrā'el"],
    region: 'Asia',
    subregion: 'Western Asia',
    languages: {
      ara: 'Arabic',
      heb: 'Hebrew',
    },
    translations: {
      ara: {
        official: 'دولة إسرائيل',
        common: 'إسرائيل',
      },
      ces: {
        official: 'Stát Izrael',
        common: 'Izrael',
      },
      cym: {
        official: 'State of Israel',
        common: 'Israel',
      },
      deu: {
        official: 'Staat Israel',
        common: 'Israel',
      },
      est: {
        official: 'Iisraeli Riik',
        common: 'Iisrael',
      },
      fin: {
        official: 'Israelin valtio',
        common: 'Israel',
      },
      fra: {
        official: "État d'Israël",
        common: 'Israël',
      },
      hrv: {
        official: 'Država Izrael',
        common: 'Izrael',
      },
      hun: {
        official: 'Izrael',
        common: 'Izrael',
      },
      ita: {
        official: 'Stato di Israele',
        common: 'Israele',
      },
      jpn: {
        official: 'イスラエル国',
        common: 'イスラエル',
      },
      kor: {
        official: '이스라엘국',
        common: '이스라엘',
      },
      nld: {
        official: 'Staat Israël',
        common: 'Israël',
      },
      per: {
        official: 'فلسطين اشغالی',
        common: 'فلسطين اشغالی',
      },
      pol: {
        official: 'Państwo Izrael',
        common: 'Izrael',
      },
      por: {
        official: 'Estado de Israel',
        common: 'Israel',
      },
      rus: {
        official: 'Государство Израиль',
        common: 'Израиль',
      },
      slk: {
        official: 'Izraelský štát',
        common: 'Izrael',
      },
      spa: {
        official: 'Estado de Israel',
        common: 'Israel',
      },
      swe: {
        official: 'Staten Israel',
        common: 'Israel',
      },
      urd: {
        official: 'ریاستِ اسرائیل',
        common: 'اسرائیل',
      },
      zho: {
        official: '以色列国',
        common: '以色列',
      },
    },
    latlng: [31.47, 35.13],
    landlocked: false,
    borders: ['EGY', 'JOR', 'LBN', 'PSE', 'SYR'],
    area: 20770.0,
    demonyms: {
      eng: {
        f: 'Israeli',
        m: 'Israeli',
      },
      fra: {
        f: 'Israélienne',
        m: 'Israélien',
      },
    },
    flag: '\uD83C\uDDEE\uD83C\uDDF1',
    maps: {
      googleMaps: 'https://goo.gl/maps/6UY1AH8XeafVwdC97',
      openStreetMaps: 'https://www.openstreetmap.org/relation/1473946',
    },
    population: 9216900,
    gini: {
      '2016': 39.0,
    },
    fifa: 'ISR',
    car: {
      signs: ['IL'],
      side: 'right',
    },
    timezones: ['UTC+02:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/il.png',
      svg: 'https://flagcdn.com/il.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/il.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/il.svg',
    },
    startOfWeek: 'sunday',
    capitalInfo: {
      latlng: [31.77, 35.23],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Bolivia',
      official: 'Plurinational State of Bolivia',
      nativeName: {
        aym: {
          official: 'Wuliwya Suyu',
          common: 'Wuliwya',
        },
        grn: {
          official: 'Tetã Volívia',
          common: 'Volívia',
        },
        que: {
          official: 'Buliwya Mamallaqta',
          common: 'Buliwya',
        },
        spa: {
          official: 'Estado Plurinacional de Bolivia',
          common: 'Bolivia',
        },
      },
    },
    tld: ['.bo'],
    cca2: 'BO',
    ccn3: '068',
    cca3: 'BOL',
    cioc: 'BOL',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      BOB: {
        name: 'Bolivian boliviano',
        symbol: 'Bs.',
      },
    },
    idd: {
      root: '+5',
      suffixes: ['91'],
    },
    capital: ['Sucre'],
    altSpellings: [
      'BO',
      'Buliwya',
      'Wuliwya',
      'Bolivia, Plurinational State of',
      'Plurinational State of Bolivia',
      'Estado Plurinacional de Bolivia',
      'Buliwya Mamallaqta',
      'Wuliwya Suyu',
      'Tetã Volívia',
    ],
    region: 'Americas',
    subregion: 'South America',
    languages: {
      aym: 'Aymara',
      grn: 'Guaraní',
      que: 'Quechua',
      spa: 'Spanish',
    },
    translations: {
      ara: {
        official: 'دولة بوليفيا المتعددة القوميات',
        common: 'بوليفيا',
      },
      ces: {
        official: 'Mnohonárodnostní stát Bolívie',
        common: 'Bolívie',
      },
      cym: {
        official: 'Gweriniaeth Bolifia',
        common: 'Bolifia',
      },
      deu: {
        official: 'Plurinationaler Staat Bolivien',
        common: 'Bolivien',
      },
      est: {
        official: 'Boliivia Paljurahvuseline Riik',
        common: 'Boliivia',
      },
      fin: {
        official: 'Bolivian monikansainen valtio',
        common: 'Bolivia',
      },
      fra: {
        official: 'État plurinational de Bolivie',
        common: 'Bolivie',
      },
      hrv: {
        official: 'Plurinational State of Bolivia',
        common: 'Bolivija',
      },
      hun: {
        official: 'Bolíviai Többnemzetiségű Állam',
        common: 'Bolívia',
      },
      ita: {
        official: 'Stato Plurinazionale della Bolivia',
        common: 'Bolivia',
      },
      jpn: {
        official: 'ボリビアの多民族国',
        common: 'ボリビア多民族国',
      },
      kor: {
        official: '볼리비아 다민족국',
        common: '볼리비아',
      },
      nld: {
        official: 'Plurinationale Staat van Bolivia',
        common: 'Bolivia',
      },
      per: {
        official: 'جمهوری بولیوی',
        common: 'بولیوی',
      },
      pol: {
        official: 'Wielonarodowe Państwo Boliwia',
        common: 'Boliwia',
      },
      por: {
        official: 'Estado Plurinacional da Bolívia',
        common: 'Bolívia',
      },
      rus: {
        official: 'Многонациональное Государство Боливия',
        common: 'Боливия',
      },
      slk: {
        official: 'Bolívijská republika',
        common: 'Bolívia',
      },
      spa: {
        official: 'Estado Plurinacional de Bolivia',
        common: 'Bolivia',
      },
      swe: {
        official: 'Mångnationella staten Bolivia',
        common: 'Bolivia',
      },
      urd: {
        official: 'جمہوریہ بولیویا',
        common: 'بولیویا',
      },
      zho: {
        official: '多民族玻利维亚国',
        common: '玻利维亚',
      },
    },
    latlng: [-17.0, -65.0],
    landlocked: true,
    borders: ['ARG', 'BRA', 'CHL', 'PRY', 'PER'],
    area: 1098581.0,
    demonyms: {
      eng: {
        f: 'Bolivian',
        m: 'Bolivian',
      },
      fra: {
        f: 'Bolivienne',
        m: 'Bolivien',
      },
    },
    flag: '\uD83C\uDDE7\uD83C\uDDF4',
    maps: {
      googleMaps: 'https://goo.gl/maps/9DfnyfbxNM2g5U9b9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/252645',
    },
    population: 11673029,
    gini: {
      '2019': 41.6,
    },
    fifa: 'BOL',
    car: {
      signs: ['BOL'],
      side: 'right',
    },
    timezones: ['UTC-04:00'],
    continents: ['South America'],
    flags: {
      png: 'https://flagcdn.com/w320/bo.png',
      svg: 'https://flagcdn.com/bo.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/bo.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/bo.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-19.02, -65.26],
    },
  },
  {
    name: {
      common: 'Åland Islands',
      official: 'Åland Islands',
      nativeName: {
        swe: {
          official: 'Landskapet Åland',
          common: 'Åland',
        },
      },
    },
    tld: ['.ax'],
    cca2: 'AX',
    ccn3: '248',
    cca3: 'ALA',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['5818'],
    },
    capital: ['Mariehamn'],
    altSpellings: ['AX', 'Aaland', 'Aland', 'Ahvenanmaa'],
    region: 'Europe',
    subregion: 'Northern Europe',
    languages: {
      swe: 'Swedish',
    },
    translations: {
      ara: {
        official: 'جزر أولاند',
        common: 'جزر أولاند',
      },
      ces: {
        official: 'Ålandské ostrovy',
        common: 'Ålandy',
      },
      cym: {
        official: 'Åland Islands',
        common: 'Åland Islands',
      },
      deu: {
        official: 'Åland-Inseln',
        common: 'Åland',
      },
      est: {
        official: 'Ahvenamaa maakond',
        common: 'Ahvenamaa',
      },
      fin: {
        official: 'Ahvenanmaan maakunta',
        common: 'Ahvenanmaa',
      },
      fra: {
        official: 'Ahvenanmaa',
        common: 'Ahvenanmaa',
      },
      hrv: {
        official: 'Aland Islands',
        common: 'Ålandski otoci',
      },
      hun: {
        official: 'Åland-szigetek',
        common: 'Åland-szigetek',
      },
      ita: {
        official: 'Isole Åland',
        common: 'Isole Aland',
      },
      jpn: {
        official: 'オーランド諸島',
        common: 'オーランド諸島',
      },
      kor: {
        official: '올란드 제도',
        common: '올란드 제도',
      },
      nld: {
        official: 'Åland eilanden',
        common: 'Ålandeilanden',
      },
      per: {
        official: 'جزایر الند',
        common: 'جزایر الند',
      },
      pol: {
        official: 'Wyspy Alandzkie',
        common: 'Wyspy Alandzkie',
      },
      por: {
        official: 'Ilhas Åland',
        common: 'Alândia',
      },
      rus: {
        official: 'Аландские острова',
        common: 'Аландские острова',
      },
      slk: {
        official: 'Alandské ostrovy',
        common: 'Alandy',
      },
      spa: {
        official: 'Islas Åland',
        common: 'Alandia',
      },
      swe: {
        official: 'Åland',
        common: 'Åland',
      },
      urd: {
        official: 'جزائر اولند',
        common: 'جزائر اولند',
      },
      zho: {
        official: '奥兰群岛',
        common: '奥兰群岛',
      },
    },
    latlng: [60.116667, 19.9],
    landlocked: false,
    area: 1580.0,
    demonyms: {
      eng: {
        f: 'Ålandish',
        m: 'Ålandish',
      },
      fra: {
        f: 'Ålandaise',
        m: 'Ålandais',
      },
    },
    flag: '\uD83C\uDDE6\uD83C\uDDFD',
    maps: {
      googleMaps: 'https://goo.gl/maps/ewFb3vYsfUmVCoSb8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/1650407',
    },
    population: 29458,
    car: {
      signs: [''],
      side: 'right',
    },
    timezones: ['UTC+02:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/ax.png',
      svg: 'https://flagcdn.com/ax.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ax.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ax.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [60.12, 19.9],
    },
  },
  {
    name: {
      common: 'United Arab Emirates',
      official: 'United Arab Emirates',
      nativeName: {
        ara: {
          official: 'الإمارات العربية المتحدة',
          common: 'دولة الإمارات العربية المتحدة',
        },
      },
    },
    tld: ['.ae', 'امارات.'],
    cca2: 'AE',
    ccn3: '784',
    cca3: 'ARE',
    cioc: 'UAE',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      AED: {
        name: 'United Arab Emirates dirham',
        symbol: 'د.إ',
      },
    },
    idd: {
      root: '+9',
      suffixes: ['71'],
    },
    capital: ['Abu Dhabi'],
    altSpellings: ['AE', 'UAE', 'Emirates'],
    region: 'Asia',
    subregion: 'Western Asia',
    languages: {
      ara: 'Arabic',
    },
    translations: {
      ara: {
        official: 'الإمارات العربية المتحدة',
        common: 'دولة الإمارات العربية المتحدة',
      },
      ces: {
        official: 'Spojené arabské emiráty',
        common: 'Spojené arabské emiráty',
      },
      cym: {
        official: 'United Arab Emirates',
        common: 'United Arab Emirates',
      },
      deu: {
        official: 'Vereinigte Arabische Emirate',
        common: 'Vereinigte Arabische Emirate',
      },
      est: {
        official: 'Araabia Ühendemiraadid',
        common: 'Araabia Ühendemiraadid',
      },
      fin: {
        official: 'Yhdistyneet arabiemiirikunnat',
        common: 'Arabiemiraatit',
      },
      fra: {
        official: 'Émirats arabes unis',
        common: 'Émirats arabes unis',
      },
      hrv: {
        official: 'Ujedinjeni Arapski Emirati',
        common: 'Ujedinjeni Arapski Emirati',
      },
      hun: {
        official: 'Egyesült Arab Emírségek',
        common: 'Egyesült Arab Emírségek',
      },
      ita: {
        official: 'Emirati Arabi Uniti',
        common: 'Emirati Arabi Uniti',
      },
      jpn: {
        official: 'アラブ首長国連邦',
        common: 'アラブ首長国連邦',
      },
      kor: {
        official: '아랍 토후국 연방',
        common: '아랍에미리트',
      },
      nld: {
        official: 'Verenigde Arabische Emiraten',
        common: 'Verenigde Arabische Emiraten',
      },
      per: {
        official: 'امارات متحده عربی',
        common: 'امارات',
      },
      pol: {
        official: 'Zjednoczone Emiraty Arabskie',
        common: 'Zjednoczone Emiraty Arabskie',
      },
      por: {
        official: 'Emirados Árabes Unidos',
        common: 'Emirados Árabes Unidos',
      },
      rus: {
        official: 'Объединенные Арабские Эмираты',
        common: 'Объединённые Арабские Эмираты',
      },
      slk: {
        official: 'Spojené arabské emiráty',
        common: 'Spojené arabské emiráty',
      },
      spa: {
        official: 'Emiratos Árabes Unidos',
        common: 'Emiratos Árabes Unidos',
      },
      swe: {
        official: 'Förenade Arabemiraten',
        common: 'Förenade Arabemiraten',
      },
      urd: {
        official: 'متحدہ عرب امارات',
        common: 'متحدہ عرب امارات',
      },
      zho: {
        official: '阿拉伯联合酋长国',
        common: '阿拉伯联合酋长国',
      },
    },
    latlng: [24.0, 54.0],
    landlocked: false,
    borders: ['OMN', 'SAU'],
    area: 83600.0,
    demonyms: {
      eng: {
        f: 'Emirati',
        m: 'Emirati',
      },
      fra: {
        f: 'Emirienne',
        m: 'Emirien',
      },
    },
    flag: '\uD83C\uDDE6\uD83C\uDDEA',
    maps: {
      googleMaps: 'https://goo.gl/maps/AZZTDA6GzVAnKMVd8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/307763',
    },
    population: 9890400,
    gini: {
      '2018': 26.0,
    },
    fifa: 'UAE',
    car: {
      signs: ['UAE'],
      side: 'right',
    },
    timezones: ['UTC+04'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/ae.png',
      svg: 'https://flagcdn.com/ae.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ae.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ae.svg',
    },
    startOfWeek: 'sunday',
    capitalInfo: {
      latlng: [24.47, 54.37],
    },
  },
  {
    name: {
      common: 'Grenada',
      official: 'Grenada',
      nativeName: {
        eng: {
          official: 'Grenada',
          common: 'Grenada',
        },
      },
    },
    tld: ['.gd'],
    cca2: 'GD',
    ccn3: '308',
    cca3: 'GRD',
    cioc: 'GRN',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      XCD: {
        name: 'Eastern Caribbean dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+1',
      suffixes: ['473'],
    },
    capital: ["St. George's"],
    altSpellings: ['GD'],
    region: 'Americas',
    subregion: 'Caribbean',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'غرينادا',
        common: 'غرينادا',
      },
      ces: {
        official: 'Grenada',
        common: 'Grenada',
      },
      cym: {
        official: 'Grenada',
        common: 'Grenada',
      },
      deu: {
        official: 'Grenada',
        common: 'Grenada',
      },
      est: {
        official: 'Grenada',
        common: 'Grenada',
      },
      fin: {
        official: 'Grenada',
        common: 'Grenada',
      },
      fra: {
        official: 'Grenade',
        common: 'Grenade',
      },
      hrv: {
        official: 'Grenada',
        common: 'Grenada',
      },
      hun: {
        official: 'Grenada',
        common: 'Grenada',
      },
      ita: {
        official: 'Grenada',
        common: 'Grenada',
      },
      jpn: {
        official: 'グレナダ',
        common: 'グレナダ',
      },
      kor: {
        official: '그레나다',
        common: '그레나다',
      },
      nld: {
        official: 'Grenada',
        common: 'Grenada',
      },
      per: {
        official: 'گرنادا',
        common: 'گرنادا',
      },
      pol: {
        official: 'Grenada',
        common: 'Grenada',
      },
      por: {
        official: 'Grenada',
        common: 'Granada',
      },
      rus: {
        official: 'Гренада',
        common: 'Гренада',
      },
      slk: {
        official: 'Grenada',
        common: 'Grenada',
      },
      spa: {
        official: 'Granada',
        common: 'Grenada',
      },
      swe: {
        official: 'Grenada',
        common: 'Grenada',
      },
      urd: {
        official: 'گریناڈا',
        common: 'گریناڈا',
      },
      zho: {
        official: '格林纳达',
        common: '格林纳达',
      },
    },
    latlng: [12.11666666, -61.66666666],
    landlocked: false,
    area: 344.0,
    demonyms: {
      eng: {
        f: 'Grenadian',
        m: 'Grenadian',
      },
      fra: {
        f: 'Grenadienne',
        m: 'Grenadien',
      },
    },
    flag: '\uD83C\uDDEC\uD83C\uDDE9',
    maps: {
      googleMaps: 'https://goo.gl/maps/rqWyfUAt4xhvk1Zy9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/550727',
    },
    population: 112519,
    fifa: 'GRN',
    car: {
      signs: ['WG'],
      side: 'left',
    },
    timezones: ['UTC-04:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/gd.png',
      svg: 'https://flagcdn.com/gd.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/gd.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/gd.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [32.38, -64.68],
    },
  },
  {
    name: {
      common: 'China',
      official: "People's Republic of China",
      nativeName: {
        zho: {
          official: '中华人民共和国',
          common: '中国',
        },
      },
    },
    tld: ['.cn', '.中国', '.中國', '.公司', '.网络'],
    cca2: 'CN',
    ccn3: '156',
    cca3: 'CHN',
    cioc: 'CHN',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      CNY: {
        name: 'Chinese yuan',
        symbol: '¥',
      },
    },
    idd: {
      root: '+8',
      suffixes: ['6'],
    },
    capital: ['Beijing'],
    altSpellings: [
      'CN',
      'Zhōngguó',
      'Zhongguo',
      'Zhonghua',
      "People's Republic of China",
      '中华人民共和国',
      'Zhōnghuá Rénmín Gònghéguó',
    ],
    region: 'Asia',
    subregion: 'Eastern Asia',
    languages: {
      zho: 'Chinese',
    },
    translations: {
      ara: {
        official: 'جمهورية الصين الشعبية',
        common: 'الصين',
      },
      ces: {
        official: 'Čínská lidová republika',
        common: 'Čína',
      },
      cym: {
        official: 'Gweriniaeth Pobl Tsieina',
        common: 'Tsieina',
      },
      deu: {
        official: 'Volksrepublik China',
        common: 'China',
      },
      est: {
        official: 'Hiina Rahvavabariik',
        common: 'Hiina',
      },
      fin: {
        official: 'Kiinan kansantasavalta',
        common: 'Kiina',
      },
      fra: {
        official: 'République populaire de Chine',
        common: 'Chine',
      },
      hrv: {
        official: 'Narodna Republika Kina',
        common: 'Kina',
      },
      hun: {
        official: 'Kínai Népköztársaság',
        common: 'Kína',
      },
      ita: {
        official: 'Repubblica popolare cinese',
        common: 'Cina',
      },
      jpn: {
        official: '中華人民共和国',
        common: '中国',
      },
      kor: {
        official: '중화인민공화국',
        common: '중국',
      },
      nld: {
        official: 'Volksrepubliek China',
        common: 'China',
      },
      per: {
        official: 'جمهوری خلق چین',
        common: 'چین',
      },
      pol: {
        official: 'Chińska Republika Ludowa',
        common: 'Chiny',
      },
      por: {
        official: 'República Popular da China',
        common: 'China',
      },
      rus: {
        official: 'Народная Республика Китай',
        common: 'Китай',
      },
      slk: {
        official: 'Čínska ľudová republika',
        common: 'Čína',
      },
      spa: {
        official: 'República Popular de China',
        common: 'China',
      },
      swe: {
        official: 'Folkrepubliken Kina',
        common: 'Kina',
      },
      urd: {
        official: 'عوامی جمہوریہ چین',
        common: 'چین',
      },
    },
    latlng: [35.0, 105.0],
    landlocked: false,
    borders: [
      'AFG',
      'BTN',
      'MMR',
      'HKG',
      'IND',
      'KAZ',
      'NPL',
      'PRK',
      'KGZ',
      'LAO',
      'MAC',
      'MNG',
      'PAK',
      'RUS',
      'TJK',
      'VNM',
    ],
    area: 9706961.0,
    demonyms: {
      eng: {
        f: 'Chinese',
        m: 'Chinese',
      },
      fra: {
        f: 'Chinoise',
        m: 'Chinois',
      },
    },
    flag: '\uD83C\uDDE8\uD83C\uDDF3',
    maps: {
      googleMaps: 'https://goo.gl/maps/p9qC6vgiFRRXzvGi7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/270056',
    },
    population: 1402112000,
    gini: {
      '2016': 38.5,
    },
    fifa: 'CHN',
    car: {
      signs: ['RC'],
      side: 'right',
    },
    timezones: ['UTC+08:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/cn.png',
      svg: 'https://flagcdn.com/cn.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/cn.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/cn.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [39.92, 116.38],
    },
    postalCode: {
      format: '######',
      regex: '^(\\d{6})$',
    },
  },
  {
    name: {
      common: 'Greenland',
      official: 'Greenland',
      nativeName: {
        kal: {
          official: 'Kalaallit Nunaat',
          common: 'Kalaallit Nunaat',
        },
      },
    },
    tld: ['.gl'],
    cca2: 'GL',
    ccn3: '304',
    cca3: 'GRL',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      DKK: {
        name: 'krone',
        symbol: 'kr.',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['99'],
    },
    capital: ['Nuuk'],
    altSpellings: ['GL', 'Grønland'],
    region: 'Americas',
    subregion: 'North America',
    languages: {
      kal: 'Greenlandic',
    },
    translations: {
      ara: {
        official: 'جرينلاند',
        common: 'جرينلاند',
      },
      ces: {
        official: 'Grónsko',
        common: 'Grónsko',
      },
      cym: {
        official: 'Greenland',
        common: 'Greenland',
      },
      deu: {
        official: 'Grönland',
        common: 'Grönland',
      },
      est: {
        official: 'Gröönimaa',
        common: 'Gröönimaa',
      },
      fin: {
        official: 'Groönlanti',
        common: 'Groönlanti',
      },
      fra: {
        official: 'Groenland',
        common: 'Groenland',
      },
      hrv: {
        official: 'Grenland',
        common: 'Grenland',
      },
      hun: {
        official: 'Grönland',
        common: 'Grönland',
      },
      ita: {
        official: 'Groenlandia',
        common: 'Groenlandia',
      },
      jpn: {
        official: 'グリーンランド',
        common: 'グリーンランド',
      },
      kor: {
        official: '그린란드',
        common: '그린란드',
      },
      nld: {
        official: 'Groenland',
        common: 'Groenland',
      },
      per: {
        official: 'گروئنلند',
        common: 'گرینلند',
      },
      pol: {
        official: 'Grenlandia',
        common: 'Grenlandia',
      },
      por: {
        official: 'Groenlândia',
        common: 'Gronelândia',
      },
      rus: {
        official: 'Гренландия',
        common: 'Гренландия',
      },
      slk: {
        official: 'Grónsko',
        common: 'Grónsko',
      },
      spa: {
        official: 'Groenlandia',
        common: 'Groenlandia',
      },
      swe: {
        official: 'Grönland',
        common: 'Grönland',
      },
      urd: {
        official: 'گرین لینڈ',
        common: 'گرین لینڈ',
      },
      zho: {
        official: '格陵兰',
        common: '格陵兰',
      },
    },
    latlng: [72.0, -40.0],
    landlocked: false,
    area: 2166086.0,
    demonyms: {
      eng: {
        f: 'Greenlandic',
        m: 'Greenlandic',
      },
      fra: {
        f: 'Groenlandaise',
        m: 'Groenlandais',
      },
    },
    flag: '\uD83C\uDDEC\uD83C\uDDF1',
    maps: {
      googleMaps: 'https://goo.gl/maps/j3289UPEQXt1ceSy8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/2184073',
    },
    population: 56367,
    car: {
      signs: ['DK'],
      side: 'right',
    },
    timezones: ['UTC-04:00', 'UTC-03:00', 'UTC-01:00', 'UTC+00:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/gl.png',
      svg: 'https://flagcdn.com/gl.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/gl.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/gl.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [64.18, -51.75],
    },
    postalCode: {
      format: '####',
      regex: '^(\\d{4})$',
    },
  },
  {
    name: {
      common: 'Vatican City',
      official: 'Vatican City State',
      nativeName: {
        ita: {
          official: 'Stato della Città del Vaticano',
          common: 'Vaticano',
        },
        lat: {
          official: 'Status Civitatis Vaticanæ',
          common: 'Vaticanæ',
        },
      },
    },
    tld: ['.va'],
    cca2: 'VA',
    ccn3: '336',
    cca3: 'VAT',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['906698', '79'],
    },
    capital: ['Vatican City'],
    altSpellings: ['VA', 'Holy See (Vatican City State)', 'Vatican City State', 'Stato della Città del Vaticano'],
    region: 'Europe',
    subregion: 'Southern Europe',
    languages: {
      ita: 'Italian',
      lat: 'Latin',
    },
    translations: {
      ara: {
        official: 'دولة مدينة الفاتيكان',
        common: 'مدينة الفاتيكان',
      },
      ces: {
        official: 'Městský stát Vatikán',
        common: 'Vatikán',
      },
      cym: {
        official: 'Vatican City State',
        common: 'Vatican City',
      },
      deu: {
        official: 'Staat Vatikanstadt',
        common: 'Vatikanstadt',
      },
      est: {
        official: 'Vatikani Linnriik',
        common: 'Vatikan',
      },
      fin: {
        official: 'Vatikaanin kaupunkivaltio',
        common: 'Vatikaani',
      },
      fra: {
        official: 'Cité du Vatican',
        common: 'Cité du Vatican',
      },
      hrv: {
        official: 'Vatikan',
        common: 'Vatikan',
      },
      hun: {
        official: 'Vatikán Állam',
        common: 'Vatikán',
      },
      ita: {
        official: 'Città del Vaticano',
        common: 'Città del Vaticano',
      },
      jpn: {
        official: 'バチカン市国の状態',
        common: 'バチカン市国',
      },
      kor: {
        official: '바티칸 시국',
        common: '바티칸',
      },
      nld: {
        official: 'Vaticaanstad',
        common: 'Vaticaanstad',
      },
      per: {
        official: 'دولت‌شهر واتیکان',
        common: 'واتیکان',
      },
      pol: {
        official: 'Państwo Watykańskie',
        common: 'Watykan',
      },
      por: {
        official: 'Cidade do Vaticano',
        common: 'Cidade do Vaticano',
      },
      rus: {
        official: 'Город-государство Ватикан',
        common: 'Ватикан',
      },
      slk: {
        official: 'Svätá stolica (Vatikánsky mestský štát',
        common: 'Vatikán',
      },
      spa: {
        official: 'Ciudad del Vaticano',
        common: 'Ciudad del Vaticano',
      },
      swe: {
        official: 'Vatikanstaten',
        common: 'Vatikanstaten',
      },
      urd: {
        official: 'ویٹیکن سٹی',
        common: 'ویٹیکن سٹی',
      },
      zho: {
        official: '梵蒂冈城国',
        common: '梵蒂冈',
      },
    },
    latlng: [41.9, 12.45],
    landlocked: true,
    borders: ['ITA'],
    area: 0.44,
    demonyms: {
      eng: {
        f: 'Vatican',
        m: 'Vatican',
      },
      fra: {
        f: 'Vaticane',
        m: 'Vatican',
      },
    },
    flag: '\uD83C\uDDFB\uD83C\uDDE6',
    maps: {
      googleMaps: 'https://goo.gl/maps/DTKvw5Bd1QZaDZmE8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/36989',
    },
    population: 451,
    car: {
      signs: ['V'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/va.png',
      svg: 'https://flagcdn.com/va.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/va.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/va.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [41.9, 12.45],
    },
  },
  {
    name: {
      common: 'Vanuatu',
      official: 'Republic of Vanuatu',
      nativeName: {
        bis: {
          official: 'Ripablik blong Vanuatu',
          common: 'Vanuatu',
        },
        eng: {
          official: 'Republic of Vanuatu',
          common: 'Vanuatu',
        },
        fra: {
          official: 'République de Vanuatu',
          common: 'Vanuatu',
        },
      },
    },
    tld: ['.vu'],
    cca2: 'VU',
    ccn3: '548',
    cca3: 'VUT',
    cioc: 'VAN',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      VUV: {
        name: 'Vanuatu vatu',
        symbol: 'Vt',
      },
    },
    idd: {
      root: '+6',
      suffixes: ['78'],
    },
    capital: ['Port Vila'],
    altSpellings: ['VU', 'Republic of Vanuatu', 'Ripablik blong Vanuatu', 'République de Vanuatu'],
    region: 'Oceania',
    subregion: 'Melanesia',
    languages: {
      bis: 'Bislama',
      eng: 'English',
      fra: 'French',
    },
    translations: {
      ara: {
        official: 'جمهورية فانواتو',
        common: 'فانواتو',
      },
      ces: {
        official: 'Republika Vanuatu',
        common: 'Vanuatu',
      },
      cym: {
        official: 'Republic of Vanuatu',
        common: 'Vanuatu',
      },
      deu: {
        official: 'Vanuatu',
        common: 'Vanuatu',
      },
      est: {
        official: 'Vanuatu Vabariik',
        common: 'Vanuatu',
      },
      fin: {
        official: 'Vanuatun tasavalta',
        common: 'Vanuatu',
      },
      fra: {
        official: 'République de Vanuatu',
        common: 'Vanuatu',
      },
      hrv: {
        official: 'Republika Vanuatu',
        common: 'Vanuatu',
      },
      hun: {
        official: 'Vanuatui Köztársaság',
        common: 'Vanuatu',
      },
      ita: {
        official: 'Repubblica di Vanuatu',
        common: 'Vanuatu',
      },
      jpn: {
        official: 'バヌアツ共和国',
        common: 'バヌアツ',
      },
      kor: {
        official: '바누아투 공화국',
        common: '바누아투',
      },
      nld: {
        official: 'Republiek Vanuatu',
        common: 'Vanuatu',
      },
      per: {
        official: 'جمهوری وانواتو',
        common: 'وانواتو',
      },
      pol: {
        official: 'Republika Vanuatu',
        common: 'Vanuatu',
      },
      por: {
        official: 'República de Vanuatu',
        common: 'Vanuatu',
      },
      rus: {
        official: 'Республика Вануату',
        common: 'Вануату',
      },
      slk: {
        official: 'Vanuatská republika',
        common: 'Vanuatu',
      },
      spa: {
        official: 'República de Vanuatu',
        common: 'Vanuatu',
      },
      swe: {
        official: 'Republiken Vanuatu',
        common: 'Vanuatu',
      },
      urd: {
        official: 'جمہوریہ وانواتو',
        common: 'وانواتو',
      },
      zho: {
        official: '瓦努阿图共和国',
        common: '瓦努阿图',
      },
    },
    latlng: [-16.0, 167.0],
    landlocked: false,
    area: 12189.0,
    demonyms: {
      eng: {
        f: 'Ni-Vanuatu',
        m: 'Ni-Vanuatu',
      },
      fra: {
        f: 'Vanuatuane',
        m: 'Vanuatuan',
      },
    },
    flag: '\uD83C\uDDFB\uD83C\uDDFA',
    maps: {
      googleMaps: 'https://goo.gl/maps/hwAjehcT7VfvP5zJ8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/2177246',
    },
    population: 307150,
    gini: {
      '2010': 37.6,
    },
    fifa: 'VAN',
    car: {
      signs: ['VU'],
      side: 'right',
    },
    timezones: ['UTC+11:00'],
    continents: ['Oceania'],
    flags: {
      png: 'https://flagcdn.com/w320/vu.png',
      svg: 'https://flagcdn.com/vu.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/vu.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/vu.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-17.73, 168.32],
    },
  },
  {
    name: {
      common: 'Nauru',
      official: 'Republic of Nauru',
      nativeName: {
        eng: {
          official: 'Republic of Nauru',
          common: 'Nauru',
        },
        nau: {
          official: 'Republic of Nauru',
          common: 'Nauru',
        },
      },
    },
    tld: ['.nr'],
    cca2: 'NR',
    ccn3: '520',
    cca3: 'NRU',
    cioc: 'NRU',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      AUD: {
        name: 'Australian dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+6',
      suffixes: ['74'],
    },
    capital: ['Yaren'],
    altSpellings: ['NR', 'Naoero', 'Pleasant Island', 'Republic of Nauru', 'Ripublik Naoero'],
    region: 'Oceania',
    subregion: 'Micronesia',
    languages: {
      eng: 'English',
      nau: 'Nauru',
    },
    translations: {
      ara: {
        official: 'جمهورية ناورو',
        common: 'ناورو',
      },
      ces: {
        official: 'Republika Nauru',
        common: 'Nauru',
      },
      cym: {
        official: 'Republic of Nauru',
        common: 'Nauru',
      },
      deu: {
        official: 'Republik Nauru',
        common: 'Nauru',
      },
      est: {
        official: 'Nauru Vabariik',
        common: 'Nauru',
      },
      fin: {
        official: 'Naurun tasavalta',
        common: 'Nauru',
      },
      fra: {
        official: 'République de Nauru',
        common: 'Nauru',
      },
      hrv: {
        official: 'Republika Nauru',
        common: 'Nauru',
      },
      hun: {
        official: 'Naurui Köztársaság',
        common: 'Nauru',
      },
      ita: {
        official: 'Repubblica di Nauru',
        common: 'Nauru',
      },
      jpn: {
        official: 'ナウル共和国',
        common: 'ナウル',
      },
      kor: {
        official: '나우루 공화국',
        common: '나우루',
      },
      nld: {
        official: 'Republiek Nauru',
        common: 'Nauru',
      },
      per: {
        official: 'جمهوری نائورو',
        common: 'نائورو',
      },
      pol: {
        official: 'Republika Nauru',
        common: 'Nauru',
      },
      por: {
        official: 'República de Nauru',
        common: 'Nauru',
      },
      rus: {
        official: 'Республика Науру',
        common: 'Науру',
      },
      slk: {
        official: 'Naurská republika',
        common: 'Nauru',
      },
      spa: {
        official: 'República de Nauru',
        common: 'Nauru',
      },
      swe: {
        official: 'Republiken Nauru',
        common: 'Nauru',
      },
      urd: {
        official: 'جمہوریہ ناورو',
        common: 'ناورو',
      },
      zho: {
        official: '瑙鲁共和国',
        common: '瑙鲁',
      },
    },
    latlng: [-0.53333333, 166.91666666],
    landlocked: false,
    area: 21.0,
    demonyms: {
      eng: {
        f: 'Nauruan',
        m: 'Nauruan',
      },
      fra: {
        f: 'Nauruane',
        m: 'Nauruan',
      },
    },
    flag: '\uD83C\uDDF3\uD83C\uDDF7',
    maps: {
      googleMaps: 'https://goo.gl/maps/kyAGw6XEJgjSMsTK7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/571804',
    },
    population: 10834,
    gini: {
      '2012': 34.8,
    },
    car: {
      signs: ['NAU'],
      side: 'left',
    },
    timezones: ['UTC+12:00'],
    continents: ['Oceania'],
    flags: {
      png: 'https://flagcdn.com/w320/nr.png',
      svg: 'https://flagcdn.com/nr.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/nr.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/nr.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-0.55, 166.92],
    },
  },
  {
    name: {
      common: 'Micronesia',
      official: 'Federated States of Micronesia',
      nativeName: {
        eng: {
          official: 'Federated States of Micronesia',
          common: 'Micronesia',
        },
      },
    },
    tld: ['.fm'],
    cca2: 'FM',
    ccn3: '583',
    cca3: 'FSM',
    cioc: 'FSM',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      USD: {
        name: 'United States dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+6',
      suffixes: ['91'],
    },
    capital: ['Palikir'],
    altSpellings: ['FM', 'Federated States of Micronesia', 'Micronesia, Federated States of'],
    region: 'Oceania',
    subregion: 'Micronesia',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'ولايات ميكرونيسيا المتحدة',
        common: 'ميكرونيسيا',
      },
      ces: {
        official: 'Federativní státy Mikronésie',
        common: 'Mikronésie',
      },
      cym: {
        official: 'Federated States of Micronesia',
        common: 'Micronesia',
      },
      deu: {
        official: 'Föderierte Staaten von Mikronesien',
        common: 'Mikronesien',
      },
      est: {
        official: 'Mikroneesia Liiduriigid',
        common: 'Mikroneesia',
      },
      fin: {
        official: 'Mikronesian liittovaltio',
        common: 'Mikronesia',
      },
      fra: {
        official: 'États fédérés de Micronésie',
        common: 'Micronésie',
      },
      hrv: {
        official: 'Savezne Države Mikronezije',
        common: 'Mikronezija',
      },
      hun: {
        official: 'Mikronéziai Szövetségi Államok',
        common: 'Mikronéziai Szövetségi Államok',
      },
      ita: {
        official: 'Stati federati di Micronesia',
        common: 'Micronesia',
      },
      jpn: {
        official: 'ミクロネシア連邦',
        common: 'ミクロネシア連邦',
      },
      kor: {
        official: '미크로네시아 연방',
        common: '미크로네시아',
      },
      nld: {
        official: 'Federale Staten van Micronesia',
        common: 'Micronesië',
      },
      per: {
        official: 'ایالات فدرال میکرونزی',
        common: 'میکرونزی',
      },
      pol: {
        official: 'Sfederowane Stany Mikronezji',
        common: 'Mikronezja',
      },
      por: {
        official: 'Estados Federados da Micronésia',
        common: 'Micronésia',
      },
      rus: {
        official: 'Федеративные Штаты Микронезии',
        common: 'Федеративные Штаты Микронезии',
      },
      slk: {
        official: 'Mikronézske federatívne štáty',
        common: 'Mikronézia',
      },
      spa: {
        official: 'Estados Federados de Micronesia',
        common: 'Micronesia',
      },
      swe: {
        official: 'Mikronesiska federationen',
        common: 'Mikronesiska federationen',
      },
      urd: {
        official: 'ریاستہائے وفاقیہ مائکرونیشیا',
        common: 'مائکرونیشیا',
      },
      zho: {
        official: '密克罗尼西亚联邦',
        common: '密克罗尼西亚',
      },
    },
    latlng: [6.91666666, 158.25],
    landlocked: false,
    area: 702.0,
    demonyms: {
      eng: {
        f: 'Micronesian',
        m: 'Micronesian',
      },
      fra: {
        f: 'Micronésienne',
        m: 'Micronésien',
      },
    },
    flag: '\uD83C\uDDEB\uD83C\uDDF2',
    maps: {
      googleMaps: 'https://goo.gl/maps/LLcnofC5LxZsJXTo8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/571802',
    },
    population: 115021,
    gini: {
      '2013': 40.1,
    },
    car: {
      signs: ['FSM'],
      side: 'right',
    },
    timezones: ['UTC+10:00', 'UTC+11'],
    continents: ['Oceania'],
    flags: {
      png: 'https://flagcdn.com/w320/fm.png',
      svg: 'https://flagcdn.com/fm.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/fm.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/fm.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [6.92, 158.15],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Solomon Islands',
      official: 'Solomon Islands',
      nativeName: {
        eng: {
          official: 'Solomon Islands',
          common: 'Solomon Islands',
        },
      },
    },
    tld: ['.sb'],
    cca2: 'SB',
    ccn3: '090',
    cca3: 'SLB',
    cioc: 'SOL',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      SBD: {
        name: 'Solomon Islands dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+6',
      suffixes: ['77'],
    },
    capital: ['Honiara'],
    altSpellings: ['SB'],
    region: 'Oceania',
    subregion: 'Melanesia',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'جزر سليمان',
        common: 'جزر سليمان',
      },
      ces: {
        official: 'Šalamounovy ostrovy',
        common: 'Šalamounovy ostrovy',
      },
      cym: {
        official: 'Solomon Islands',
        common: 'Solomon Islands',
      },
      deu: {
        official: 'Salomonen',
        common: 'Salomonen',
      },
      est: {
        official: 'Saalomoni Saared',
        common: 'Saalomoni Saared',
      },
      fin: {
        official: 'Salomonsaaret',
        common: 'Salomonsaaret',
      },
      fra: {
        official: 'Îles Salomon',
        common: 'Îles Salomon',
      },
      hrv: {
        official: 'Solomonski Otoci',
        common: 'Solomonski Otoci',
      },
      hun: {
        official: 'Salamon-szigetek',
        common: 'Salamon-szigetek',
      },
      ita: {
        official: 'Isole Salomone',
        common: 'Isole Salomone',
      },
      jpn: {
        official: 'ソロモン諸島',
        common: 'ソロモン諸島',
      },
      kor: {
        official: '솔로몬 제도',
        common: '솔로몬 제도',
      },
      nld: {
        official: 'Solomon eilanden',
        common: 'Salomonseilanden',
      },
      per: {
        official: 'جزایر سلیمان',
        common: 'جزایر سلیمان',
      },
      pol: {
        official: 'Wyspy Salomona',
        common: 'Wyspy Salomona',
      },
      por: {
        official: 'Ilhas Salomão',
        common: 'Ilhas Salomão',
      },
      rus: {
        official: 'Соломоновы острова',
        common: 'Соломоновы Острова',
      },
      slk: {
        official: 'Salomonove ostrovy',
        common: 'Salomonove ostrovy',
      },
      spa: {
        official: 'islas Salomón',
        common: 'Islas Salomón',
      },
      swe: {
        official: 'Salomonöarna',
        common: 'Salomonöarna',
      },
      urd: {
        official: 'جزائر سلیمان',
        common: 'جزائر سلیمان',
      },
      zho: {
        official: '所罗门群岛',
        common: '所罗门群岛',
      },
    },
    latlng: [-8.0, 159.0],
    landlocked: false,
    area: 28896.0,
    demonyms: {
      eng: {
        f: 'Solomon Islander',
        m: 'Solomon Islander',
      },
      fra: {
        f: 'Salomonienne',
        m: 'Salomonien',
      },
    },
    flag: '\uD83C\uDDF8\uD83C\uDDE7',
    maps: {
      googleMaps: 'https://goo.gl/maps/JbPkx86Ywjv8C1n8A',
      openStreetMaps: 'https://www.openstreetmap.org/relation/1857436',
    },
    population: 686878,
    gini: {
      '2012': 37.1,
    },
    fifa: 'SOL',
    car: {
      signs: ['SOL'],
      side: 'left',
    },
    timezones: ['UTC+11:00'],
    continents: ['Oceania'],
    flags: {
      png: 'https://flagcdn.com/w320/sb.png',
      svg: 'https://flagcdn.com/sb.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/sb.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/sb.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-9.43, 159.95],
    },
  },
  {
    name: {
      common: 'United States Virgin Islands',
      official: 'Virgin Islands of the United States',
      nativeName: {
        eng: {
          official: 'Virgin Islands of the United States',
          common: 'United States Virgin Islands',
        },
      },
    },
    tld: ['.vi'],
    cca2: 'VI',
    ccn3: '850',
    cca3: 'VIR',
    cioc: 'ISV',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      USD: {
        name: 'United States dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+1',
      suffixes: ['340'],
    },
    capital: ['Charlotte Amalie'],
    altSpellings: ['VI', 'Virgin Islands, U.S.'],
    region: 'Americas',
    subregion: 'Caribbean',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'جزر العذراء الامريكية',
        common: 'جزر العذراء الامريكية',
      },
      ces: {
        official: 'Americké Panenské ostrovy',
        common: 'Americké Panenské ostrovy',
      },
      cym: {
        official: 'Virgin Islands of the United States',
        common: 'United States Virgin Islands',
      },
      deu: {
        official: 'Amerikanische Jungferninseln',
        common: 'Amerikanische Jungferninseln',
      },
      est: {
        official: 'Ühendriikide Neitsisaared',
        common: 'Neitsisaared, USA',
      },
      fin: {
        official: 'Yhdysvaltain Neitsytsaaret',
        common: 'Neitsytsaaret',
      },
      fra: {
        official: 'Îles Vierges des États-Unis',
        common: 'Îles Vierges des États-Unis',
      },
      hrv: {
        official: 'Djevičanski Otoci SAD',
        common: 'Američki Djevičanski Otoci',
      },
      hun: {
        official: 'Amerikai Virgin-szigetek',
        common: 'Amerikai Virgin-szigetek',
      },
      ita: {
        official: 'Isole Vergini degli Stati Uniti',
        common: 'Isole Vergini americane',
      },
      jpn: {
        official: '米国のバージン諸島',
        common: 'アメリカ領ヴァージン諸島',
      },
      kor: {
        official: '미국령 버진아일랜드',
        common: '미국령 버진아일랜드',
      },
      nld: {
        official: 'Maagdeneilanden van de Verenigde Staten',
        common: 'Amerikaanse Maagdeneilanden',
      },
      per: {
        official: 'جزایر ویرجین ایالات متحده آمریکا',
        common: 'جزایر ویرجین ایالات متحده آمریکا',
      },
      pol: {
        official: 'Wyspy Dziewicze Stanów Zjednoczonych',
        common: 'Wyspy Dziewicze Stanów Zjednoczonych',
      },
      por: {
        official: 'Ilhas Virgens dos Estados Unidos',
        common: 'Ilhas Virgens dos Estados Unidos',
      },
      rus: {
        official: 'Виргинские острова Соединенных Штатов',
        common: 'Виргинские Острова',
      },
      slk: {
        official: 'Americké Panenské ostrovy',
        common: 'Americké Panenské ostrovy',
      },
      spa: {
        official: 'Islas Vírgenes de los Estados Unidos',
        common: 'Islas Vírgenes de los Estados Unidos',
      },
      swe: {
        official: 'Amerikanska Jungfruöarna',
        common: 'Amerikanska Jungfruöarna',
      },
      urd: {
        official: 'امریکی جزائر ورجن',
        common: 'امریکی جزائر ورجن',
      },
      zho: {
        official: '美属维尔京群岛',
        common: '美属维尔京群岛',
      },
    },
    latlng: [18.35, -64.933333],
    landlocked: false,
    area: 347.0,
    demonyms: {
      eng: {
        f: 'Virgin Islander',
        m: 'Virgin Islander',
      },
    },
    flag: '\uD83C\uDDFB\uD83C\uDDEE',
    maps: {
      googleMaps: 'https://goo.gl/maps/mBfreywj8dor6q4m9',
      openStreetMaps: 'openstreetmap.org/relation/286898',
    },
    population: 106290,
    fifa: 'VIR',
    car: {
      signs: ['USA'],
      side: 'right',
    },
    timezones: ['UTC-04:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/vi.png',
      svg: 'https://flagcdn.com/vi.svg',
    },
    coatOfArms: {},
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [18.35, -64.93],
    },
  },
  {
    name: {
      common: 'Turkey',
      official: 'Republic of Turkey',
      nativeName: {
        tur: {
          official: 'Türkiye Cumhuriyeti',
          common: 'Türkiye',
        },
      },
    },
    tld: ['.tr'],
    cca2: 'TR',
    ccn3: '792',
    cca3: 'TUR',
    cioc: 'TUR',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      TRY: {
        name: 'Turkish lira',
        symbol: '₺',
      },
    },
    idd: {
      root: '+9',
      suffixes: ['0'],
    },
    capital: ['Ankara'],
    altSpellings: ['TR', 'Turkiye', 'Republic of Turkey', 'Türkiye Cumhuriyeti'],
    region: 'Asia',
    subregion: 'Western Asia',
    languages: {
      tur: 'Turkish',
    },
    translations: {
      ara: {
        official: 'الجمهورية التركية',
        common: 'تركيا',
      },
      ces: {
        official: 'Turecká republika',
        common: 'Turecko',
      },
      cym: {
        official: 'Republic of Turkey',
        common: 'Turkey',
      },
      deu: {
        official: 'Republik Türkei',
        common: 'Türkei',
      },
      est: {
        official: 'Türgi Vabariik',
        common: 'Türgi',
      },
      fin: {
        official: 'Turkin tasavalta',
        common: 'Turkki',
      },
      fra: {
        official: 'République de Turquie',
        common: 'Turquie',
      },
      hrv: {
        official: 'Republika Turska',
        common: 'Turska',
      },
      hun: {
        official: 'Török Köztársaság',
        common: 'Törökország',
      },
      ita: {
        official: 'Repubblica di Turchia',
        common: 'Turchia',
      },
      jpn: {
        official: 'トルコ共和国',
        common: 'トルコ',
      },
      kor: {
        official: '터키 공화국',
        common: '터키',
      },
      nld: {
        official: 'Republiek Turkije',
        common: 'Turkije',
      },
      per: {
        official: 'جمهوری ترکیه',
        common: 'ترکیه',
      },
      pol: {
        official: 'Republika Turcji',
        common: 'Turcja',
      },
      por: {
        official: 'República da Turquia',
        common: 'Turquia',
      },
      rus: {
        official: 'Республика Турции',
        common: 'Турция',
      },
      slk: {
        official: 'Turecká republika',
        common: 'Turecko',
      },
      spa: {
        official: 'República de Turquía',
        common: 'Turquía',
      },
      swe: {
        official: 'Republiken Turkiet',
        common: 'Turkiet',
      },
      urd: {
        official: 'جمہوریہ ترکی',
        common: 'ترکی',
      },
      zho: {
        official: '土耳其共和国',
        common: '土耳其',
      },
    },
    latlng: [39.0, 35.0],
    landlocked: false,
    borders: ['ARM', 'AZE', 'BGR', 'GEO', 'GRC', 'IRN', 'IRQ', 'SYR'],
    area: 783562.0,
    demonyms: {
      eng: {
        f: 'Turkish',
        m: 'Turkish',
      },
      fra: {
        f: 'Turque',
        m: 'Turc',
      },
    },
    flag: '\uD83C\uDDF9\uD83C\uDDF7',
    maps: {
      googleMaps: 'https://goo.gl/maps/dXFFraiUDfcB6Quk6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/174737',
    },
    population: 84339067,
    gini: {
      '2019': 41.9,
    },
    fifa: 'TUR',
    car: {
      signs: ['TR'],
      side: 'right',
    },
    timezones: ['UTC+03:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/tr.png',
      svg: 'https://flagcdn.com/tr.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/tr.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/tr.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [39.93, 32.87],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Kuwait',
      official: 'State of Kuwait',
      nativeName: {
        ara: {
          official: 'دولة الكويت',
          common: 'الكويت',
        },
      },
    },
    tld: ['.kw'],
    cca2: 'KW',
    ccn3: '414',
    cca3: 'KWT',
    cioc: 'KUW',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      KWD: {
        name: 'Kuwaiti dinar',
        symbol: 'د.ك',
      },
    },
    idd: {
      root: '+9',
      suffixes: ['65'],
    },
    capital: ['Kuwait City'],
    altSpellings: ['KW', 'State of Kuwait', 'Dawlat al-Kuwait'],
    region: 'Asia',
    subregion: 'Western Asia',
    languages: {
      ara: 'Arabic',
    },
    translations: {
      ara: {
        official: 'دولة الكويت',
        common: 'الكويت',
      },
      ces: {
        official: 'Stát Kuvajt',
        common: 'Kuvajt',
      },
      cym: {
        official: 'State of Kuwait',
        common: 'Kuwait',
      },
      deu: {
        official: 'Staat Kuwait',
        common: 'Kuwait',
      },
      est: {
        official: 'Kuveidi Riik',
        common: 'Kuveit',
      },
      fin: {
        official: 'Kuwaitin valtio',
        common: 'Kuwait',
      },
      fra: {
        official: 'État du Koweït',
        common: 'Koweït',
      },
      hrv: {
        official: 'Država Kuvajt',
        common: 'Kuvajt',
      },
      hun: {
        official: 'Kuvaiti Állam',
        common: 'Kuvait',
      },
      ita: {
        official: 'Stato del Kuwait',
        common: 'Kuwait',
      },
      jpn: {
        official: 'クウェート国',
        common: 'クウェート',
      },
      kor: {
        official: '쿠웨이트국',
        common: '쿠웨이트',
      },
      nld: {
        official: 'Staat Koeweit',
        common: 'Koeweit',
      },
      per: {
        official: 'دولت کویت',
        common: 'کُویت',
      },
      pol: {
        official: 'Państwo Kuwejt',
        common: 'Kuwejt',
      },
      por: {
        official: 'Estado do Kuwait',
        common: 'Kuwait',
      },
      rus: {
        official: 'Государство Кувейт',
        common: 'Кувейт',
      },
      slk: {
        official: 'Kuvajtský štát',
        common: 'Kuvajt',
      },
      spa: {
        official: 'Estado de Kuwait',
        common: 'Kuwait',
      },
      swe: {
        official: 'Staten Kuwait',
        common: 'Kuwait',
      },
      urd: {
        official: 'دولتِ کویت',
        common: 'کویت',
      },
      zho: {
        official: '科威特国',
        common: '科威特',
      },
    },
    latlng: [29.5, 45.75],
    landlocked: false,
    borders: ['IRQ', 'SAU'],
    area: 17818.0,
    demonyms: {
      eng: {
        f: 'Kuwaiti',
        m: 'Kuwaiti',
      },
      fra: {
        f: 'Koweïtienne',
        m: 'Koweïtien',
      },
    },
    flag: '\uD83C\uDDF0\uD83C\uDDFC',
    maps: {
      googleMaps: 'https://goo.gl/maps/aqr3aNQjS1BAvksJ7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/305099',
    },
    population: 4270563,
    fifa: 'KUW',
    car: {
      signs: ['KWT'],
      side: 'right',
    },
    timezones: ['UTC+03:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/kw.png',
      svg: 'https://flagcdn.com/kw.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/kw.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/kw.svg',
    },
    startOfWeek: 'sunday',
    capitalInfo: {
      latlng: [29.37, 47.97],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Senegal',
      official: 'Republic of Senegal',
      nativeName: {
        fra: {
          official: 'République du Sénégal',
          common: 'Sénégal',
        },
      },
    },
    tld: ['.sn'],
    cca2: 'SN',
    ccn3: '686',
    cca3: 'SEN',
    cioc: 'SEN',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      XOF: {
        name: 'West African CFA franc',
        symbol: 'Fr',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['21'],
    },
    capital: ['Dakar'],
    altSpellings: ['SN', 'Republic of Senegal', 'République du Sénégal'],
    region: 'Africa',
    subregion: 'Western Africa',
    languages: {
      fra: 'French',
    },
    translations: {
      ara: {
        official: 'جمهورية السنغال',
        common: 'السنغال',
      },
      ces: {
        official: 'Senegalská republika',
        common: 'Senegal',
      },
      cym: {
        official: 'Republic of Senegal',
        common: 'Senegal',
      },
      deu: {
        official: 'Republik Senegal',
        common: 'Senegal',
      },
      est: {
        official: 'Senegali Vabariik',
        common: 'Senegal',
      },
      fin: {
        official: 'Senegalin tasavalta',
        common: 'Senegal',
      },
      fra: {
        official: 'République du Sénégal',
        common: 'Sénégal',
      },
      hrv: {
        official: 'Republika Senegal',
        common: 'Senegal',
      },
      hun: {
        official: 'Szenegáli Köztársaság',
        common: 'Szenegál',
      },
      ita: {
        official: 'Repubblica del Senegal',
        common: 'Senegal',
      },
      jpn: {
        official: 'セネガル共和国',
        common: 'セネガル',
      },
      kor: {
        official: '세네갈 공화국',
        common: '세네갈',
      },
      nld: {
        official: 'Republiek Senegal',
        common: 'Senegal',
      },
      per: {
        official: 'جمهوری سنگال',
        common: 'سنگال',
      },
      pol: {
        official: 'Senegal',
        common: 'Senegal',
      },
      por: {
        official: 'República do Senegal',
        common: 'Senegal',
      },
      rus: {
        official: 'Республика Сенегал',
        common: 'Сенегал',
      },
      slk: {
        official: 'Senegalská republika',
        common: 'Senegal',
      },
      spa: {
        official: 'República de Senegal',
        common: 'Senegal',
      },
      swe: {
        official: 'Republiken Senegal',
        common: 'Senegal',
      },
      urd: {
        official: 'جمہوریہ سینیگال',
        common: 'سینیگال',
      },
      zho: {
        official: '塞内加尔共和国',
        common: '塞内加尔',
      },
    },
    latlng: [14.0, -14.0],
    landlocked: false,
    borders: ['GMB', 'GIN', 'GNB', 'MLI', 'MRT'],
    area: 196722.0,
    demonyms: {
      eng: {
        f: 'Senegalese',
        m: 'Senegalese',
      },
      fra: {
        f: 'Sénégalaise',
        m: 'Sénégalais',
      },
    },
    flag: '\uD83C\uDDF8\uD83C\uDDF3',
    maps: {
      googleMaps: 'https://goo.gl/maps/o5f1uD5nyihCL3HCA',
      openStreetMaps: 'https://www.openstreetmap.org/relation/192775',
    },
    population: 16743930,
    gini: {
      '2011': 40.3,
    },
    fifa: 'SEN',
    car: {
      signs: ['SN'],
      side: 'right',
    },
    timezones: ['UTC'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/sn.png',
      svg: 'https://flagcdn.com/sn.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/sn.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/sn.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [14.73, -17.63],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Burundi',
      official: 'Republic of Burundi',
      nativeName: {
        fra: {
          official: 'République du Burundi',
          common: 'Burundi',
        },
        run: {
          official: "Republika y'Uburundi ",
          common: 'Uburundi',
        },
      },
    },
    tld: ['.bi'],
    cca2: 'BI',
    ccn3: '108',
    cca3: 'BDI',
    cioc: 'BDI',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      BIF: {
        name: 'Burundian franc',
        symbol: 'Fr',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['57'],
    },
    capital: ['Gitega'],
    altSpellings: ['BI', 'Republic of Burundi', "Republika y'Uburundi", 'République du Burundi'],
    region: 'Africa',
    subregion: 'Eastern Africa',
    languages: {
      fra: 'French',
      run: 'Kirundi',
    },
    translations: {
      ara: {
        official: 'جمهورية بوروندي',
        common: 'بوروندي',
      },
      ces: {
        official: 'Burundská republika',
        common: 'Burundi',
      },
      cym: {
        official: 'Gweriniaeth Bwrwndi',
        common: 'Bwrwndi',
      },
      deu: {
        official: 'Republik Burundi',
        common: 'Burundi',
      },
      est: {
        official: 'Burundi Vabariik',
        common: 'Burundi',
      },
      fin: {
        official: 'Burundin tasavalta',
        common: 'Burundi',
      },
      fra: {
        official: 'République du Burundi',
        common: 'Burundi',
      },
      hrv: {
        official: 'Burundi',
        common: 'Burundi',
      },
      hun: {
        official: 'Burundi',
        common: 'Burundi',
      },
      ita: {
        official: 'Repubblica del Burundi',
        common: 'Burundi',
      },
      jpn: {
        official: 'ブルンジ共和国',
        common: 'ブルンジ',
      },
      kor: {
        official: '부룬디',
        common: '부룬디',
      },
      nld: {
        official: 'Republiek Burundi',
        common: 'Burundi',
      },
      per: {
        official: 'جمهوری بوروندی',
        common: 'بوروندی',
      },
      pol: {
        official: 'Republika Burundi',
        common: 'Burundi',
      },
      por: {
        official: 'República do Burundi',
        common: 'Burundi',
      },
      rus: {
        official: 'Республика Бурунди',
        common: 'Бурунди',
      },
      slk: {
        official: 'Burundská republika',
        common: 'Burundi',
      },
      spa: {
        official: 'República de Burundi',
        common: 'Burundi',
      },
      swe: {
        official: 'Republiken Burundi',
        common: 'Burundi',
      },
      urd: {
        official: 'جمہوریہ برونڈی',
        common: 'برونڈی',
      },
      zho: {
        official: '布隆迪共和国',
        common: '布隆迪',
      },
    },
    latlng: [-3.5, 30.0],
    landlocked: true,
    borders: ['COD', 'RWA', 'TZA'],
    area: 27834.0,
    demonyms: {
      eng: {
        f: 'Burundian',
        m: 'Burundian',
      },
      fra: {
        f: 'Burundaise',
        m: 'Burundais',
      },
    },
    flag: '\uD83C\uDDE7\uD83C\uDDEE',
    maps: {
      googleMaps: 'https://goo.gl/maps/RXPWoRrB9tfrJpUG7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/195269',
    },
    population: 11890781,
    gini: {
      '2013': 38.6,
    },
    fifa: 'BDI',
    car: {
      signs: ['RU'],
      side: 'right',
    },
    timezones: ['UTC+02:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/bi.png',
      svg: 'https://flagcdn.com/bi.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/bi.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/bi.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-3.43, 29.93],
    },
  },
  {
    name: {
      common: 'Serbia',
      official: 'Republic of Serbia',
      nativeName: {
        srp: {
          official: 'Република Србија',
          common: 'Србија',
        },
      },
    },
    tld: ['.rs', '.срб'],
    cca2: 'RS',
    ccn3: '688',
    cca3: 'SRB',
    cioc: 'SRB',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      RSD: {
        name: 'Serbian dinar',
        symbol: 'дин.',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['81'],
    },
    capital: ['Belgrade'],
    altSpellings: ['RS', 'Srbija', 'Republic of Serbia', 'Република Србија', 'Republika Srbija'],
    region: 'Europe',
    subregion: 'Southeast Europe',
    languages: {
      srp: 'Serbian',
    },
    translations: {
      ara: {
        official: 'جمهورية صيربيا',
        common: 'صيربيا',
      },
      ces: {
        official: 'Srbská republika',
        common: 'Srbsko',
      },
      cym: {
        official: 'Republic of Serbia',
        common: 'Serbia',
      },
      deu: {
        official: 'Republik Serbien',
        common: 'Serbien',
      },
      est: {
        official: 'Serbia Vabariik',
        common: 'Serbia',
      },
      fin: {
        official: 'Serbian tasavalta',
        common: 'Serbia',
      },
      fra: {
        official: 'République de Serbie',
        common: 'Serbie',
      },
      hrv: {
        official: 'Republika Srbija',
        common: 'Srbija',
      },
      hun: {
        official: 'Szerb Köztársaság',
        common: 'Szerbia',
      },
      ita: {
        official: 'Repubblica di Serbia',
        common: 'Serbia',
      },
      jpn: {
        official: 'セルビア共和国',
        common: 'セルビア',
      },
      kor: {
        official: '세르비아 공화국',
        common: '세르비아',
      },
      nld: {
        official: 'Republiek Servië',
        common: 'Servië',
      },
      per: {
        official: 'جمهوری صربستان',
        common: 'صربستان',
      },
      pol: {
        official: 'Republika Serbii',
        common: 'Serbia',
      },
      por: {
        official: 'República da Sérvia',
        common: 'Sérvia',
      },
      rus: {
        official: 'Республика Сербия',
        common: 'Сербия',
      },
      slk: {
        official: 'Srbská republika',
        common: 'Srbsko',
      },
      spa: {
        official: 'República de Serbia',
        common: 'Serbia',
      },
      swe: {
        official: 'Republiken Serbien',
        common: 'Serbien',
      },
      urd: {
        official: 'جمہوریہ سربیا',
        common: 'سربیا',
      },
      zho: {
        official: '塞尔维亚共和国',
        common: '塞尔维亚',
      },
    },
    latlng: [44.0, 21.0],
    landlocked: true,
    borders: ['BIH', 'BGR', 'HRV', 'HUN', 'UNK', 'MKD', 'MNE', 'ROU'],
    area: 88361.0,
    demonyms: {
      eng: {
        f: 'Serbian',
        m: 'Serbian',
      },
      fra: {
        f: 'Serbe',
        m: 'Serbe',
      },
    },
    flag: '\uD83C\uDDF7\uD83C\uDDF8',
    maps: {
      googleMaps: 'https://goo.gl/maps/2Aqof7aV2Naq8YEK8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/1741311',
    },
    population: 6908224,
    gini: {
      '2017': 36.2,
    },
    fifa: 'SRB',
    car: {
      signs: ['SRB'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/rs.png',
      svg: 'https://flagcdn.com/rs.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/rs.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/rs.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [44.83, 20.5],
    },
    postalCode: {
      format: '######',
      regex: '^(\\d{6})$',
    },
  },
  {
    name: {
      common: 'Brunei',
      official: 'Nation of Brunei, Abode of Peace',
      nativeName: {
        msa: {
          official: 'Nation of Brunei, Abode Damai',
          common: 'Negara Brunei Darussalam',
        },
      },
    },
    tld: ['.bn'],
    cca2: 'BN',
    ccn3: '096',
    cca3: 'BRN',
    cioc: 'BRU',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      BND: {
        name: 'Brunei dollar',
        symbol: '$',
      },
      SGD: {
        name: 'Singapore dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+6',
      suffixes: ['73'],
    },
    capital: ['Bandar Seri Begawan'],
    altSpellings: ['BN', 'Brunei Darussalam', 'Nation of Brunei', 'the Abode of Peace'],
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    languages: {
      msa: 'Malay',
    },
    translations: {
      ara: {
        official: 'بروناي دار السلام',
        common: 'بروناي',
      },
      ces: {
        official: 'Sultanát Brunej',
        common: 'Brunej',
      },
      cym: {
        official: 'Teyrnas Brwnei',
        common: 'Brunei',
      },
      deu: {
        official: 'Sultanat Brunei Darussalam',
        common: 'Brunei',
      },
      est: {
        official: 'Brunei Darussalami Riik',
        common: 'Brunei',
      },
      fin: {
        official: 'Brunei Darussalamin valtio',
        common: 'Brunei',
      },
      fra: {
        official: 'État de Brunei Darussalam',
        common: 'Brunei',
      },
      hrv: {
        official: 'Nacija od Bruneja, Kuću Mira',
        common: 'Brunej',
      },
      hun: {
        official: 'Brunei Szultanátus',
        common: 'Brunei',
      },
      ita: {
        official: 'Nazione di Brunei, Dimora della Pace',
        common: 'Brunei',
      },
      jpn: {
        official: 'ブルネイ、平和の精舎の国家',
        common: 'ブルネイ・ダルサラーム',
      },
      kor: {
        official: '브루나이 다루살람국',
        common: '브루나이',
      },
      nld: {
        official: 'Natie van Brunei, de verblijfplaats van de Vrede',
        common: 'Brunei',
      },
      per: {
        official: 'برونئی سرای صلح',
        common: 'برونئی',
      },
      pol: {
        official: 'Państwo Brunei Darussalam',
        common: 'Brunei',
      },
      por: {
        official: 'Nação do Brunei, Morada da Paz',
        common: 'Brunei',
      },
      rus: {
        official: 'Нация Бруней, обитель мира',
        common: 'Бруней',
      },
      slk: {
        official: 'Brunejský sultanât',
        common: 'Brunej',
      },
      spa: {
        official: 'Nación de Brunei, Morada de la Paz',
        common: 'Brunei',
      },
      swe: {
        official: 'Brunei Darussalam',
        common: 'Brunei',
      },
      urd: {
        official: 'ریاستِ برونائی دارالسلام',
        common: 'برونائی',
      },
      zho: {
        official: '文莱和平之国',
        common: '文莱',
      },
    },
    latlng: [4.5, 114.66666666],
    landlocked: false,
    borders: ['MYS'],
    area: 5765.0,
    demonyms: {
      eng: {
        f: 'Bruneian',
        m: 'Bruneian',
      },
      fra: {
        f: 'Brunéienne',
        m: 'Brunéien',
      },
    },
    flag: '\uD83C\uDDE7\uD83C\uDDF3',
    maps: {
      googleMaps: 'https://goo.gl/maps/4jb4CqBXhr8vNh579',
      openStreetMaps: 'https://www.openstreetmap.org/relation/2103120',
    },
    population: 437483,
    fifa: 'BRU',
    car: {
      signs: ['BRU'],
      side: 'left',
    },
    timezones: ['UTC+08:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/bn.png',
      svg: 'https://flagcdn.com/bn.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/bn.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/bn.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [4.88, 114.93],
    },
    postalCode: {
      format: '@@####',
      regex: '^([A-Z]{2}\\d{4})$',
    },
  },
  {
    name: {
      common: 'Heard Island and McDonald Islands',
      official: 'Heard Island and McDonald Islands',
      nativeName: {
        eng: {
          official: 'Heard Island and McDonald Islands',
          common: 'Heard Island and McDonald Islands',
        },
      },
    },
    tld: ['.hm', '.aq'],
    cca2: 'HM',
    ccn3: '334',
    cca3: 'HMD',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    idd: {},
    altSpellings: ['HM', 'Heard Island and McDonald Islands'],
    region: 'Antarctic',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'جزيرة هيرد وجزر ماكدونالد',
        common: 'جزيرة هيرد وجزر ماكدونالد',
      },
      ces: {
        official: 'Heardův ostrov a McDonaldovy ostrovy',
        common: 'Heardův ostrov a McDonaldovy ostrovy',
      },
      cym: {
        official: 'Heard Island and McDonald Islands',
        common: 'Heard Island and McDonald Islands',
      },
      deu: {
        official: 'Heard und McDonaldinseln',
        common: 'Heard und die McDonaldinseln',
      },
      est: {
        official: 'Heardi ja McDonaldi saarte ala',
        common: 'Heard ja McDonald',
      },
      fin: {
        official: 'Heard ja McDonaldinsaaret',
        common: 'Heard ja McDonaldinsaaret',
      },
      fra: {
        official: 'Des îles Heard et McDonald',
        common: 'Îles Heard-et-MacDonald',
      },
      hrv: {
        official: 'Otok Heard i otočje McDonald',
        common: 'Otok Heard i otočje McDonald',
      },
      hun: {
        official: 'Heard-sziget és McDonald-szigetek',
        common: 'Heard-sziget és McDonald-szigetek',
      },
      ita: {
        official: 'Isole Heard e McDonald',
        common: 'Isole Heard e McDonald',
      },
      jpn: {
        official: 'ハード島とマクドナルド諸島',
        common: 'ハード島とマクドナルド諸島',
      },
      kor: {
        official: '허드 맥도널드 제도',
        common: '허드 맥도널드 제도',
      },
      nld: {
        official: 'Heard en McDonaldeilanden',
        common: 'Heard-en McDonaldeilanden',
      },
      per: {
        official: 'جزیره هرد و جزایر مک‌دونالد',
        common: 'جزیره هرد و جزایر مک‌دونالد',
      },
      pol: {
        official: 'Terytorium Wysp Heard i McDonalda',
        common: 'Wyspy Heard i McDonalda',
      },
      por: {
        official: 'Ilha Heard e Ilhas McDonald',
        common: 'Ilha Heard e Ilhas McDonald',
      },
      rus: {
        official: 'Остров Херд и острова Макдональд',
        common: 'Остров Херд и острова Макдональд',
      },
      slk: {
        official: 'Teritórium Heardovho ostrova a Macdonaldových ostrovov',
        common: 'Heardov ostrov',
      },
      spa: {
        official: 'Islas Heard y McDonald',
        common: 'Islas Heard y McDonald',
      },
      swe: {
        official: 'Heard- och McDonaldöarna',
        common: 'Heard- och McDonaldöarna',
      },
      urd: {
        official: 'جزیرہ ہرڈ و جزائر مکڈونلڈ',
        common: 'جزیرہ ہرڈ و جزائر مکڈونلڈ',
      },
      zho: {
        official: '赫德岛和麦当劳群岛',
        common: '赫德岛和麦当劳群岛',
      },
    },
    latlng: [-53.1, 72.51666666],
    landlocked: false,
    area: 412.0,
    demonyms: {
      eng: {
        f: 'Heard and McDonald Islander',
        m: 'Heard and McDonald Islander',
      },
    },
    flag: '\uD83C\uDDED\uD83C\uDDF2',
    maps: {
      googleMaps: 'https://goo.gl/maps/k5FBAiVaVyozuYeA7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/2177227',
    },
    population: 0,
    car: {
      signs: [''],
      side: 'right',
    },
    timezones: ['UTC+05:00'],
    continents: ['Antarctica'],
    flags: {
      png: 'https://flagcdn.com/w320/hm.png',
      svg: 'https://flagcdn.com/hm.svg',
    },
    coatOfArms: {},
    startOfWeek: 'monday',
    capitalInfo: {},
  },
  {
    name: {
      common: 'Bahamas',
      official: 'Commonwealth of the Bahamas',
      nativeName: {
        eng: {
          official: 'Commonwealth of the Bahamas',
          common: 'Bahamas',
        },
      },
    },
    tld: ['.bs'],
    cca2: 'BS',
    ccn3: '044',
    cca3: 'BHS',
    cioc: 'BAH',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      BSD: {
        name: 'Bahamian dollar',
        symbol: '$',
      },
      USD: {
        name: 'United States dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+1',
      suffixes: ['242'],
    },
    capital: ['Nassau'],
    altSpellings: ['BS', 'Commonwealth of the Bahamas'],
    region: 'Americas',
    subregion: 'Caribbean',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'كومنولث جزر البهاما',
        common: 'باهاماس',
      },
      ces: {
        official: 'Bahamské společenství',
        common: 'Bahamy',
      },
      cym: {
        official: 'Cymanwlad y Bahamas',
        common: 'Bahamas',
      },
      deu: {
        official: 'Commonwealth der Bahamas',
        common: 'Bahamas',
      },
      est: {
        official: 'Bahama Ühendus',
        common: 'Bahama',
      },
      fin: {
        official: 'Bahaman liittovaltio',
        common: 'Bahamasaaret',
      },
      fra: {
        official: 'Commonwealth des Bahamas',
        common: 'Bahamas',
      },
      hrv: {
        official: 'Zajednica Bahama',
        common: 'Bahami',
      },
      hun: {
        official: 'Bahamai Közösség',
        common: 'Bahama-szigetek',
      },
      ita: {
        official: 'Commonwealth delle Bahamas',
        common: 'Bahamas',
      },
      jpn: {
        official: 'バハマ',
        common: 'バハマ',
      },
      kor: {
        official: '바하마 연방',
        common: '바하마',
      },
      nld: {
        official: "Gemenebest van de Bahama's",
        common: 'Bahama’s',
      },
      per: {
        official: 'قلمرو همسود باهاما',
        common: 'باهاما',
      },
      pol: {
        official: 'Bahamy',
        common: 'Bahamy',
      },
      por: {
        official: 'Comunidade das Bahamas',
        common: 'Bahamas',
      },
      rus: {
        official: 'Содружество Багамских Островов',
        common: 'Багамские Острова',
      },
      slk: {
        official: 'Bahamské spoločenstvo',
        common: 'Bahamy',
      },
      spa: {
        official: 'Commonwealth de las Bahamas',
        common: 'Bahamas',
      },
      swe: {
        official: 'Samväldet Bahamas',
        common: 'Bahamas',
      },
      urd: {
        official: 'دولتِ مشترکہ بہاماس',
        common: 'بہاماس',
      },
      zho: {
        official: '巴哈马联邦',
        common: '巴哈马',
      },
    },
    latlng: [24.25, -76.0],
    landlocked: false,
    area: 13943.0,
    demonyms: {
      eng: {
        f: 'Bahamian',
        m: 'Bahamian',
      },
      fra: {
        f: 'Bahamienne',
        m: 'Bahamien',
      },
    },
    flag: '\uD83C\uDDE7\uD83C\uDDF8',
    maps: {
      googleMaps: 'https://goo.gl/maps/1YzRs1BZrG8p8pmVA',
      openStreetMaps: 'https://www.openstreetmap.org/relation/547469',
    },
    population: 393248,
    fifa: 'BAH',
    car: {
      signs: ['BS'],
      side: 'left',
    },
    timezones: ['UTC-05:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/bs.png',
      svg: 'https://flagcdn.com/bs.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/bs.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/bs.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [25.08, -77.35],
    },
  },
  {
    name: {
      common: 'Bahrain',
      official: 'Kingdom of Bahrain',
      nativeName: {
        ara: {
          official: 'مملكة البحرين',
          common: '‏البحرين',
        },
      },
    },
    tld: ['.bh'],
    cca2: 'BH',
    ccn3: '048',
    cca3: 'BHR',
    cioc: 'BRN',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      BHD: {
        name: 'Bahraini dinar',
        symbol: '.د.ب',
      },
    },
    idd: {
      root: '+9',
      suffixes: ['73'],
    },
    capital: ['Manama'],
    altSpellings: ['BH', 'Kingdom of Bahrain', 'Mamlakat al-Baḥrayn'],
    region: 'Asia',
    subregion: 'Western Asia',
    languages: {
      ara: 'Arabic',
    },
    translations: {
      ara: {
        official: 'مملكة البحرين',
        common: '‏البحرين',
      },
      ces: {
        official: 'Království Bahrajn',
        common: 'Bahrajn',
      },
      cym: {
        official: 'Teyrnas Bahrein',
        common: 'Bahrain',
      },
      deu: {
        official: 'Königreich Bahrain',
        common: 'Bahrain',
      },
      est: {
        official: 'Bahreini Kuningriik',
        common: 'Bahrein',
      },
      fin: {
        official: 'Bahrainin kuningaskunta',
        common: 'Bahrain',
      },
      fra: {
        official: 'Royaume de Bahreïn',
        common: 'Bahreïn',
      },
      hrv: {
        official: 'Kraljevina Bahrein',
        common: 'Bahrein',
      },
      hun: {
        official: 'Bahreini Királyság',
        common: 'Bahrein',
      },
      ita: {
        official: 'Regno del Bahrain',
        common: 'Bahrein',
      },
      jpn: {
        official: 'バーレーン王国',
        common: 'バーレーン',
      },
      kor: {
        official: '바레인 왕국',
        common: '바레인',
      },
      nld: {
        official: 'Koninkrijk Bahrein',
        common: 'Bahrein',
      },
      per: {
        official: 'پادشاهی بحرین',
        common: 'بحرین',
      },
      pol: {
        official: 'Królestwo Bahrajnu',
        common: 'Bahrajn',
      },
      por: {
        official: 'Reino do Bahrein',
        common: 'Bahrein',
      },
      rus: {
        official: 'Королевство Бахрейн',
        common: 'Бахрейн',
      },
      slk: {
        official: 'Bahrajnské kráľovstvo',
        common: 'Bahrajn',
      },
      spa: {
        official: 'Reino de Bahrein',
        common: 'Bahrein',
      },
      swe: {
        official: 'Konungariket Bahrain',
        common: 'Bahrain',
      },
      urd: {
        official: 'مملکتِ بحرین',
        common: 'بحرین',
      },
      zho: {
        official: '巴林王国',
        common: '巴林',
      },
    },
    latlng: [26.0, 50.55],
    landlocked: false,
    area: 765.0,
    demonyms: {
      eng: {
        f: 'Bahraini',
        m: 'Bahraini',
      },
      fra: {
        f: 'Bahreïnienne',
        m: 'Bahreïnien',
      },
    },
    flag: '\uD83C\uDDE7\uD83C\uDDED',
    maps: {
      googleMaps: 'https://goo.gl/maps/5Zue99Zc6vFBHxzJ7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/378734',
    },
    population: 1701583,
    fifa: 'BHR',
    car: {
      signs: ['BRN'],
      side: 'right',
    },
    timezones: ['UTC+03:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/bh.png',
      svg: 'https://flagcdn.com/bh.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/bh.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/bh.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [26.23, 50.57],
    },
    postalCode: {
      format: '####|###',
      regex: '^(\\d{3}\\d?)$',
    },
  },
  {
    name: {
      common: 'Dominican Republic',
      official: 'Dominican Republic',
      nativeName: {
        spa: {
          official: 'República Dominicana',
          common: 'República Dominicana',
        },
      },
    },
    tld: ['.do'],
    cca2: 'DO',
    ccn3: '214',
    cca3: 'DOM',
    cioc: 'DOM',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      DOP: {
        name: 'Dominican peso',
        symbol: '$',
      },
    },
    idd: {
      root: '+1',
      suffixes: ['809', '829', '849'],
    },
    capital: ['Santo Domingo'],
    altSpellings: ['DO'],
    region: 'Americas',
    subregion: 'Caribbean',
    languages: {
      spa: 'Spanish',
    },
    translations: {
      ara: {
        official: 'جمهورية الدومينيكان',
        common: 'جمهورية الدومينيكان',
      },
      ces: {
        official: 'Dominikánská republika',
        common: 'Dominikánská republika',
      },
      cym: {
        official: 'Gweriniaeth Dominica',
        common: 'Gweriniaeth Dominica',
      },
      deu: {
        official: 'Dominikanische Republik',
        common: 'Dominikanische Republik',
      },
      est: {
        official: 'Dominikaani Vabariik',
        common: 'Dominikaani Vabariik',
      },
      fin: {
        official: 'Dominikaaninen tasavalta',
        common: 'Dominikaaninen tasavalta',
      },
      fra: {
        official: 'République Dominicaine',
        common: 'République dominicaine',
      },
      hrv: {
        official: 'Dominikanska Republika',
        common: 'Dominikanska Republika',
      },
      hun: {
        official: 'Dominikai Köztársaság',
        common: 'Dominikai Köztársaság',
      },
      ita: {
        official: 'Repubblica Dominicana',
        common: 'Repubblica Dominicana',
      },
      jpn: {
        official: 'ドミニカ共和国',
        common: 'ドミニカ共和国',
      },
      kor: {
        official: '도미니카 공화국',
        common: '도미니카 공화국',
      },
      nld: {
        official: 'Dominicaanse Republiek',
        common: 'Dominicaanse Republiek',
      },
      per: {
        official: 'جمهوری دومینیکن',
        common: 'جمهوری دومینیکن',
      },
      pol: {
        official: 'Republika Dominikańska',
        common: 'Dominikana',
      },
      por: {
        official: 'República Dominicana',
        common: 'República Dominicana',
      },
      rus: {
        official: 'Доминиканская Республика',
        common: 'Доминиканская Республика',
      },
      slk: {
        official: 'Dominikánska republika',
        common: 'Dominikánska republika',
      },
      spa: {
        official: 'República Dominicana',
        common: 'República Dominicana',
      },
      swe: {
        official: 'Dominikanska republiken',
        common: 'Dominikanska republiken',
      },
      urd: {
        official: 'جمہوریہ ڈومینیکن',
        common: 'ڈومینیکن',
      },
      zho: {
        official: '多明尼加共和国',
        common: '多明尼加',
      },
    },
    latlng: [19.0, -70.66666666],
    landlocked: false,
    borders: ['HTI'],
    area: 48671.0,
    demonyms: {
      eng: {
        f: 'Dominican',
        m: 'Dominican',
      },
      fra: {
        f: 'Dominicaine',
        m: 'Dominicain',
      },
    },
    flag: '\uD83C\uDDE9\uD83C\uDDF4',
    maps: {
      googleMaps: 'https://goo.gl/maps/soxooTHxEeiAbn3UA',
      openStreetMaps: 'https://www.openstreetmap.org/relation/307828',
    },
    population: 10847904,
    gini: {
      '2019': 41.9,
    },
    fifa: 'DOM',
    car: {
      signs: ['DOM'],
      side: 'right',
    },
    timezones: ['UTC-04:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/do.png',
      svg: 'https://flagcdn.com/do.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/do.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/do.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [18.47, -69.9],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Curaçao',
      official: 'Country of Curaçao',
      nativeName: {
        eng: {
          official: 'Country of Curaçao',
          common: 'Curaçao',
        },
        nld: {
          official: 'Land Curaçao',
          common: 'Curaçao',
        },
        pap: {
          official: 'Pais Kòrsou',
          common: 'Pais Kòrsou',
        },
      },
    },
    tld: ['.cw'],
    cca2: 'CW',
    ccn3: '531',
    cca3: 'CUW',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      ANG: {
        name: 'Netherlands Antillean guilder',
        symbol: 'ƒ',
      },
    },
    idd: {
      root: '+5',
      suffixes: ['99'],
    },
    capital: ['Willemstad'],
    altSpellings: ['CW', 'Curacao', 'Kòrsou', 'Country of Curaçao', 'Land Curaçao', 'Pais Kòrsou'],
    region: 'Americas',
    subregion: 'Caribbean',
    languages: {
      eng: 'English',
      nld: 'Dutch',
      pap: 'Papiamento',
    },
    translations: {
      ara: {
        official: 'دولة كوراساو',
        common: 'كوراساو',
      },
      ces: {
        official: 'Autonomní země Curaçao',
        common: 'Curaçao',
      },
      cym: {
        official: 'Country of Curaçao',
        common: 'Curaçao',
      },
      deu: {
        official: 'Land Curaçao',
        common: 'Curaçao',
      },
      est: {
        official: 'Curaçao',
        common: 'Curaçao',
      },
      fin: {
        official: 'Curaçao',
        common: 'Curaçao',
      },
      fra: {
        official: 'Pays de Curaçao',
        common: 'Curaçao',
      },
      hun: {
        official: 'Curaçao',
        common: 'Curaçao',
      },
      ita: {
        official: 'Paese di Curaçao',
        common: 'Curaçao',
      },
      kor: {
        official: '퀴라소',
        common: '퀴라소',
      },
      nld: {
        official: 'Land Curaçao',
        common: 'Curaçao',
      },
      per: {
        official: 'کوراسائو',
        common: 'کوراسائو',
      },
      pol: {
        official: 'Curaçao',
        common: 'Curaçao',
      },
      por: {
        official: 'País de Curaçao',
        common: 'ilha da Curação',
      },
      rus: {
        official: 'Страна Кюрасао',
        common: 'Кюрасао',
      },
      slk: {
        official: 'Curacao',
        common: 'Curacao',
      },
      spa: {
        official: 'País de Curazao',
        common: 'Curazao',
      },
      swe: {
        official: 'Curaçao',
        common: 'Curaçao',
      },
      urd: {
        official: 'مملکتِ کیوراساؤ',
        common: 'کیوراساؤ',
      },
      zho: {
        official: '库拉索',
        common: '库拉索',
      },
    },
    latlng: [12.116667, -68.933333],
    landlocked: false,
    area: 444.0,
    demonyms: {
      eng: {
        f: 'Curaçaoan',
        m: 'Curaçaoan',
      },
      fra: {
        f: 'Curacienne',
        m: 'Curacien',
      },
    },
    flag: '\uD83C\uDDE8\uD83C\uDDFC',
    maps: {
      googleMaps: 'https://goo.gl/maps/9D3hTeA3qKaRT7S16',
      openStreetMaps: 'https://www.openstreetmap.org/relation/1216719',
    },
    population: 155014,
    fifa: 'CUW',
    car: {
      signs: ['CW'],
      side: 'right',
    },
    timezones: ['UTC-04:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/cw.png',
      svg: 'https://flagcdn.com/cw.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/cw.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/cw.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [12.1, -68.92],
    },
  },
  {
    name: {
      common: 'Norfolk Island',
      official: 'Territory of Norfolk Island',
      nativeName: {
        eng: {
          official: 'Territory of Norfolk Island',
          common: 'Norfolk Island',
        },
        pih: {
          official: "Teratri of Norf'k Ailen",
          common: "Norf'k Ailen",
        },
      },
    },
    tld: ['.nf'],
    cca2: 'NF',
    ccn3: '574',
    cca3: 'NFK',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      AUD: {
        name: 'Australian dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+6',
      suffixes: ['72'],
    },
    capital: ['Kingston'],
    altSpellings: ['NF', 'Territory of Norfolk Island', "Teratri of Norf'k Ailen"],
    region: 'Oceania',
    subregion: 'Australia and New Zealand',
    languages: {
      eng: 'English',
      pih: 'Norfuk',
    },
    translations: {
      ara: {
        official: 'إقليم جزيرة نورفولك',
        common: 'جزيرة نورفولك',
      },
      ces: {
        official: 'Teritorium ostrova Norfolk',
        common: 'Norfolk',
      },
      cym: {
        official: 'Territory of Norfolk Island',
        common: 'Norfolk Island',
      },
      deu: {
        official: 'Gebiet der Norfolkinsel',
        common: 'Norfolkinsel',
      },
      est: {
        official: 'Norfolki saare ala',
        common: 'Norfolk',
      },
      fin: {
        official: 'Norfolkinsaaren territorio',
        common: 'Norfolkinsaari',
      },
      fra: {
        official: "Territoire de l'île Norfolk",
        common: 'Île Norfolk',
      },
      hrv: {
        official: 'Teritorij Norfolk Island',
        common: 'Otok Norfolk',
      },
      hun: {
        official: 'Norfolk-sziget',
        common: 'Norfolk-sziget',
      },
      ita: {
        official: 'Territorio di Norfolk Island',
        common: 'Isola Norfolk',
      },
      jpn: {
        official: 'ノーフォーク島の領土',
        common: 'ノーフォーク島',
      },
      kor: {
        official: '노퍽 섬',
        common: '노퍽 섬',
      },
      nld: {
        official: 'Grondgebied van Norfolk Island',
        common: 'Norfolkeiland',
      },
      per: {
        official: 'قلمرو جزایر نورفک',
        common: 'جزیره نورفک',
      },
      pol: {
        official: 'Terytorium Wyspy Norfolk',
        common: 'Wyspa Norfolk',
      },
      por: {
        official: 'Território da Ilha Norfolk',
        common: 'Ilha Norfolk',
      },
      rus: {
        official: 'Территория острова Норфолк',
        common: 'Норфолк',
      },
      slk: {
        official: 'Teritórium ostrova Norfolk',
        common: 'Norfolk',
      },
      spa: {
        official: 'Territorio de la Isla Norfolk',
        common: 'Isla de Norfolk',
      },
      swe: {
        official: 'Norfolkön',
        common: 'Norfolkön',
      },
      urd: {
        official: 'جزیرہ نورفک خطہ',
        common: 'جزیرہ نورفک',
      },
      zho: {
        official: '诺福克岛',
        common: '诺福克岛',
      },
    },
    latlng: [-29.03333333, 167.95],
    landlocked: false,
    area: 36.0,
    demonyms: {
      eng: {
        f: 'Norfolk Islander',
        m: 'Norfolk Islander',
      },
      fra: {
        f: 'Norfolkaise',
        m: 'Norfolkais',
      },
    },
    flag: '\uD83C\uDDF3\uD83C\uDDEB',
    maps: {
      googleMaps: 'https://goo.gl/maps/pbvtm6XYd1iZbjky5',
      openStreetMaps: 'https://www.openstreetmap.org/relation/2574988',
    },
    population: 2302,
    car: {
      signs: ['AUS'],
      side: 'left',
    },
    timezones: ['UTC+11:30'],
    continents: ['Oceania'],
    flags: {
      png: 'https://flagcdn.com/w320/nf.png',
      svg: 'https://flagcdn.com/nf.svg',
    },
    coatOfArms: {},
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-29.05, 167.97],
    },
  },
  {
    name: {
      common: 'North Korea',
      official: "Democratic People's Republic of Korea",
      nativeName: {
        kor: {
          official: '조선민주주의인민공화국',
          common: '조선',
        },
      },
    },
    tld: ['.kp'],
    cca2: 'KP',
    ccn3: '408',
    cca3: 'PRK',
    cioc: 'PRK',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      KPW: {
        name: 'North Korean won',
        symbol: '₩',
      },
    },
    idd: {
      root: '+8',
      suffixes: ['50'],
    },
    capital: ['Pyongyang'],
    altSpellings: [
      'KP',
      "Democratic People's Republic of Korea",
      'DPRK',
      '조선민주주의인민공화국',
      'Chosŏn Minjujuŭi Inmin Konghwaguk',
      "Korea, Democratic People's Republic of",
      '북한',
      '북조선',
    ],
    region: 'Asia',
    subregion: 'Eastern Asia',
    languages: {
      kor: 'Korean',
    },
    translations: {
      ara: {
        official: 'جمهورية كوريا الديمقراطية الشعبية',
        common: 'كوريا الشمالية',
      },
      ces: {
        official: 'Korejská lidově demokratická republika',
        common: 'Severní Korea',
      },
      cym: {
        official: "Democratic People's Republic of Korea",
        common: 'North Korea',
      },
      deu: {
        official: 'Demokratische Volksrepublik Korea',
        common: 'Nordkorea',
      },
      est: {
        official: 'Korea Rahvademokraatlik Vabariik',
        common: 'Põhja-Korea',
      },
      fin: {
        official: 'Korean demokraattinen kansantasavalta',
        common: 'Pohjois-Korea',
      },
      fra: {
        official: 'République populaire démocratique de Corée',
        common: 'Corée du Nord',
      },
      hrv: {
        official: 'Demokratska Narodna Republika Koreja',
        common: 'Sjeverna Koreja',
      },
      hun: {
        official: 'Koreai Népi Demokratikus Köztársaság',
        common: 'Észak-Korea',
      },
      ita: {
        official: 'Repubblica democratica popolare di Corea',
        common: 'Corea del Nord',
      },
      jpn: {
        official: '朝鮮民主主義人民共和国',
        common: '朝鮮民主主義人民共和国',
      },
      kor: {
        official: '조선민주주의인민공화국',
        common: '조선',
      },
      nld: {
        official: 'Democratische Volksrepubliek Korea',
        common: 'Noord-Korea',
      },
      per: {
        official: 'جمهوری دموکراتیک خلق کره',
        common: 'کُره شمالی',
      },
      pol: {
        official: 'Koreańska Republika Ludowo-Demokratyczna',
        common: 'Korea Północna',
      },
      por: {
        official: 'República Popular Democrática da Coreia',
        common: 'Coreia do Norte',
      },
      rus: {
        official: 'Корейская Народно-Демократическая Республика Корея',
        common: 'Северная Корея',
      },
      slk: {
        official: 'Kórejská ľudovodemokratická republika',
        common: 'Kórejská ľudovodemokratická republika (KĽR, Severná Kórea)',
      },
      spa: {
        official: 'República Popular Democrática de Corea',
        common: 'Corea del Norte',
      },
      swe: {
        official: 'Demokratiska Folkrepubliken Korea',
        common: 'Nordkorea',
      },
      urd: {
        official: 'جمہوری عوامی جمہوریہ کوریا',
        common: 'شمالی کوریا',
      },
      zho: {
        official: '朝鲜人民民主共和国',
        common: '朝鲜',
      },
    },
    latlng: [40.0, 127.0],
    landlocked: false,
    borders: ['CHN', 'KOR', 'RUS'],
    area: 120538.0,
    demonyms: {
      eng: {
        f: 'North Korean',
        m: 'North Korean',
      },
      fra: {
        f: 'Nord-coréenne',
        m: 'Nord-coréen',
      },
    },
    flag: '\uD83C\uDDF0\uD83C\uDDF5',
    maps: {
      googleMaps: 'https://goo.gl/maps/9q5T2DMeH5JL7Tky6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/192734',
    },
    population: 25778815,
    fifa: 'PRK',
    car: {
      signs: [''],
      side: 'right',
    },
    timezones: ['UTC+09:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/kp.png',
      svg: 'https://flagcdn.com/kp.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/kp.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/kp.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [39.02, 125.75],
    },
    postalCode: {
      format: '###-###',
      regex: '^(\\d{6})$',
    },
  },
  {
    name: {
      common: 'Tokelau',
      official: 'Tokelau',
      nativeName: {
        eng: {
          official: 'Tokelau',
          common: 'Tokelau',
        },
        smo: {
          official: 'Tokelau',
          common: 'Tokelau',
        },
        tkl: {
          official: 'Tokelau',
          common: 'Tokelau',
        },
      },
    },
    tld: ['.tk'],
    cca2: 'TK',
    ccn3: '772',
    cca3: 'TKL',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      NZD: {
        name: 'New Zealand dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+6',
      suffixes: ['90'],
    },
    capital: ['Fakaofo'],
    altSpellings: ['TK'],
    region: 'Oceania',
    subregion: 'Polynesia',
    languages: {
      eng: 'English',
      smo: 'Samoan',
      tkl: 'Tokelauan',
    },
    translations: {
      ara: {
        official: 'توكيلاو',
        common: 'توكيلاو',
      },
      ces: {
        official: 'Tokelau',
        common: 'Tokelau',
      },
      cym: {
        official: 'Tokelau',
        common: 'Tokelau',
      },
      deu: {
        official: 'Tokelau',
        common: 'Tokelau',
      },
      est: {
        official: 'Tokelau',
        common: 'Tokelau',
      },
      fin: {
        official: 'Tokelau',
        common: 'Tokelau',
      },
      fra: {
        official: 'Îles Tokelau',
        common: 'Tokelau',
      },
      hrv: {
        official: 'Tokelau',
        common: 'Tokelau',
      },
      hun: {
        official: 'Tokelau-szigetek',
        common: 'Tokelau-szigetek',
      },
      ita: {
        official: 'Tokelau',
        common: 'Isole Tokelau',
      },
      jpn: {
        official: 'トケラウ諸島',
        common: 'トケラウ',
      },
      kor: {
        official: '토켈라우',
        common: '토켈라우',
      },
      nld: {
        official: 'Tokelau',
        common: 'Tokelau',
      },
      per: {
        official: 'توکلائو',
        common: 'توکلائو',
      },
      pol: {
        official: 'Tokelau',
        common: 'Tokelau',
      },
      por: {
        official: 'Tokelau',
        common: 'Tokelau',
      },
      rus: {
        official: 'Токелау',
        common: 'Токелау',
      },
      slk: {
        official: 'Tokelauské ostrovy',
        common: 'Tokelau',
      },
      spa: {
        official: 'Tokelau',
        common: 'Islas Tokelau',
      },
      swe: {
        official: 'Tokelauöarna',
        common: 'Tokelauöarna',
      },
      urd: {
        official: 'ٹوکیلاؤ',
        common: 'ٹوکیلاؤ',
      },
      zho: {
        official: '托克劳',
        common: '托克劳',
      },
    },
    latlng: [-9.0, -172.0],
    landlocked: false,
    area: 12.0,
    demonyms: {
      eng: {
        f: 'Tokelauan',
        m: 'Tokelauan',
      },
    },
    flag: '\uD83C\uDDF9\uD83C\uDDF0',
    maps: {
      googleMaps: 'https://goo.gl/maps/Ap5qN8qien6pT9UN6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/2186600',
    },
    population: 1411,
    car: {
      signs: [''],
      side: 'left',
    },
    timezones: ['UTC+13:00'],
    continents: ['Oceania'],
    flags: {
      png: 'https://flagcdn.com/w320/tk.png',
      svg: 'https://flagcdn.com/tk.svg',
    },
    coatOfArms: {},
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-9.38, -171.22],
    },
  },
  {
    name: {
      common: 'South Sudan',
      official: 'Republic of South Sudan',
      nativeName: {
        eng: {
          official: 'Republic of South Sudan',
          common: 'South Sudan',
        },
      },
    },
    tld: ['.ss'],
    cca2: 'SS',
    ccn3: '728',
    cca3: 'SSD',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      SSP: {
        name: 'South Sudanese pound',
        symbol: '£',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['11'],
    },
    capital: ['Juba'],
    altSpellings: ['SS'],
    region: 'Africa',
    subregion: 'Middle Africa',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'جمهورية جنوب السودان',
        common: 'جنوب السودان',
      },
      ces: {
        official: 'Jihosúdánská republika',
        common: 'Jižní Súdán',
      },
      cym: {
        official: 'Republic of South Sudan',
        common: 'South Sudan',
      },
      deu: {
        official: 'Republik Südsudan',
        common: 'Südsudan',
      },
      est: {
        official: 'Lõuna-Sudaani Vabariik',
        common: 'Lõuna-Sudaan',
      },
      fin: {
        official: 'Etelä-Sudanin tasavalta',
        common: 'Etelä-Sudan',
      },
      fra: {
        official: 'République du Soudan du Sud',
        common: 'Soudan du Sud',
      },
      hrv: {
        official: 'Republika Južni Sudan',
        common: 'Južni Sudan',
      },
      hun: {
        official: 'Dél-szudáni Köztársaság',
        common: 'Dél-Szudán',
      },
      ita: {
        official: 'Repubblica del Sudan del Sud',
        common: 'Sudan del sud',
      },
      jpn: {
        official: '南スーダン共和国',
        common: '南スーダン',
      },
      kor: {
        official: '남수단 공화국',
        common: '남수단',
      },
      nld: {
        official: 'Republiek Zuid-Soedan',
        common: 'Zuid-Soedan',
      },
      per: {
        official: 'جمهوری سودان جنوبی',
        common: 'سودان جنوبی',
      },
      pol: {
        official: 'Republika Sudanu',
        common: 'Sudan',
      },
      por: {
        official: 'República do Sudão do Sul',
        common: 'Sudão do Sul',
      },
      rus: {
        official: 'Республика Южный Судан',
        common: 'Южный Судан',
      },
      slk: {
        official: 'Juhosudánska republika',
        common: 'Južný Sudán',
      },
      spa: {
        official: 'República de Sudán del Sur',
        common: 'Sudán del Sur',
      },
      swe: {
        official: 'Republiken Sydsudan',
        common: 'Sydsudan',
      },
      urd: {
        official: 'جمہوریہ جنوبی سوڈان',
        common: 'جنوبی سوڈان',
      },
      zho: {
        official: '南苏丹共和国',
        common: '南苏丹',
      },
    },
    latlng: [7.0, 30.0],
    landlocked: true,
    borders: ['CAF', 'COD', 'ETH', 'KEN', 'SDN', 'UGA'],
    area: 619745.0,
    demonyms: {
      eng: {
        f: 'South Sudanese',
        m: 'South Sudanese',
      },
      fra: {
        f: 'Sud-Soudanaise',
        m: 'Sud-Soudanais',
      },
    },
    flag: '\uD83C\uDDF8\uD83C\uDDF8',
    maps: {
      googleMaps: 'https://goo.gl/maps/Zm1AYCXb9HSNF1P27',
      openStreetMaps: 'https://www.openstreetmap.org/relation/1656678',
    },
    population: 11193729,
    gini: {
      '2016': 44.1,
    },
    fifa: 'SSD',
    car: {
      signs: [''],
      side: 'right',
    },
    timezones: ['UTC+03:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/ss.png',
      svg: 'https://flagcdn.com/ss.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ss.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ss.svg',
    },
    startOfWeek: 'sunday',
    capitalInfo: {
      latlng: [4.85, 31.62],
    },
  },
  {
    name: {
      common: 'Aruba',
      official: 'Aruba',
      nativeName: {
        nld: {
          official: 'Aruba',
          common: 'Aruba',
        },
        pap: {
          official: 'Aruba',
          common: 'Aruba',
        },
      },
    },
    tld: ['.aw'],
    cca2: 'AW',
    ccn3: '533',
    cca3: 'ABW',
    cioc: 'ARU',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      AWG: {
        name: 'Aruban florin',
        symbol: 'ƒ',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['97'],
    },
    capital: ['Oranjestad'],
    altSpellings: ['AW'],
    region: 'Americas',
    subregion: 'Caribbean',
    languages: {
      nld: 'Dutch',
      pap: 'Papiamento',
    },
    translations: {
      ara: {
        official: 'أروبا',
        common: 'أروبا',
      },
      ces: {
        official: 'Aruba',
        common: 'Aruba',
      },
      cym: {
        official: 'Aruba',
        common: 'Aruba',
      },
      deu: {
        official: 'Aruba',
        common: 'Aruba',
      },
      est: {
        official: 'Aruba',
        common: 'Aruba',
      },
      fin: {
        official: 'Aruba',
        common: 'Aruba',
      },
      fra: {
        official: 'Aruba',
        common: 'Aruba',
      },
      hrv: {
        official: 'Aruba',
        common: 'Aruba',
      },
      hun: {
        official: 'Aruba',
        common: 'Aruba',
      },
      ita: {
        official: 'Aruba',
        common: 'Aruba',
      },
      jpn: {
        official: 'アルバ',
        common: 'アルバ',
      },
      kor: {
        official: '아루바',
        common: '아루바',
      },
      nld: {
        official: 'Aruba',
        common: 'Aruba',
      },
      per: {
        official: 'آروبا',
        common: 'آروبا',
      },
      pol: {
        official: 'Aruba',
        common: 'Aruba',
      },
      por: {
        official: 'Aruba',
        common: 'Aruba',
      },
      rus: {
        official: 'Аруба',
        common: 'Аруба',
      },
      slk: {
        official: 'Aruba',
        common: 'Aruba',
      },
      spa: {
        official: 'Aruba',
        common: 'Aruba',
      },
      swe: {
        official: 'Aruba',
        common: 'Aruba',
      },
      urd: {
        official: 'اروبا',
        common: 'اروبا',
      },
      zho: {
        official: '阿鲁巴',
        common: '阿鲁巴',
      },
    },
    latlng: [12.5, -69.96666666],
    landlocked: false,
    area: 180.0,
    demonyms: {
      eng: {
        f: 'Aruban',
        m: 'Aruban',
      },
      fra: {
        f: 'Arubaise',
        m: 'Arubais',
      },
    },
    flag: '\uD83C\uDDE6\uD83C\uDDFC',
    maps: {
      googleMaps: 'https://goo.gl/maps/8hopbQqifHAgyZyg8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/1231749',
    },
    population: 106766,
    fifa: 'ARU',
    car: {
      side: 'right',
    },
    timezones: ['UTC-04:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/aw.png',
      svg: 'https://flagcdn.com/aw.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/aw.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/aw.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [12.52, -70.03],
    },
  },
  {
    name: {
      common: 'Czechia',
      official: 'Czech Republic',
      nativeName: {
        ces: {
          official: 'Česká republika',
          common: 'Česko',
        },
        slk: {
          official: 'Česká republika',
          common: 'Česko',
        },
      },
    },
    tld: ['.cz'],
    cca2: 'CZ',
    ccn3: '203',
    cca3: 'CZE',
    cioc: 'CZE',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      CZK: {
        name: 'Czech koruna',
        symbol: 'Kč',
      },
    },
    idd: {
      root: '+4',
      suffixes: ['20'],
    },
    capital: ['Prague'],
    altSpellings: ['CZ', 'Česká republika', 'Česko'],
    region: 'Europe',
    subregion: 'Central Europe',
    languages: {
      ces: 'Czech',
      slk: 'Slovak',
    },
    translations: {
      ara: {
        official: 'جمهورية التشيك',
        common: 'التشيك',
      },
      ces: {
        official: 'Česká republika',
        common: 'Česko',
      },
      cym: {
        official: 'Y Weriniaeth Tsiec',
        common: 'Y Weriniaeth Tsiec',
      },
      deu: {
        official: 'Tschechische Republik',
        common: 'Tschechien',
      },
      est: {
        official: 'Tšehhi Vabariik',
        common: 'Tšehhi',
      },
      fin: {
        official: 'Tšekin tasavalta',
        common: 'Tšekki',
      },
      fra: {
        official: 'République tchèque',
        common: 'Tchéquie',
      },
      hrv: {
        official: 'Češka',
        common: 'Češka',
      },
      hun: {
        official: 'Cseh Köztársaság',
        common: 'Csehország',
      },
      ita: {
        official: 'Repubblica Ceca',
        common: 'Cechia',
      },
      jpn: {
        official: 'チェコ共和国',
        common: 'チェコ',
      },
      kor: {
        official: '체코',
        common: '체코',
      },
      nld: {
        official: 'Tsjechische Republiek',
        common: 'Tsjechië',
      },
      per: {
        official: 'جمهوری چک',
        common: 'جمهوری چک',
      },
      pol: {
        official: 'Republika Czeska',
        common: 'Czechy',
      },
      por: {
        official: 'República Checa',
        common: 'Chéquia',
      },
      rus: {
        official: 'Чешская Республика',
        common: 'Чехия',
      },
      slk: {
        official: 'Česká republika',
        common: 'Česko',
      },
      spa: {
        official: 'República Checa',
        common: 'Chequia',
      },
      swe: {
        official: 'Republiken Tjeckien',
        common: 'Tjeckien',
      },
      urd: {
        official: 'چيک جمہوريہ',
        common: 'چيک',
      },
      zho: {
        official: '捷克共和国',
        common: '捷克',
      },
    },
    latlng: [49.75, 15.5],
    landlocked: true,
    borders: ['AUT', 'DEU', 'POL', 'SVK'],
    area: 78865.0,
    demonyms: {
      eng: {
        f: 'Czech',
        m: 'Czech',
      },
      fra: {
        f: 'Tchèque',
        m: 'Tchèque',
      },
    },
    flag: '\uD83C\uDDE8\uD83C\uDDFF',
    maps: {
      googleMaps: 'https://goo.gl/maps/47dmgeXMZyhDHyQW8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/51684',
    },
    population: 10698896,
    gini: {
      '2018': 25.0,
    },
    fifa: 'CZE',
    car: {
      signs: ['CZ'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/cz.png',
      svg: 'https://flagcdn.com/cz.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/cz.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/cz.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [50.08, 14.47],
    },
    postalCode: {
      format: '### ##',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Guadeloupe',
      official: 'Guadeloupe',
      nativeName: {
        fra: {
          official: 'Guadeloupe',
          common: 'Guadeloupe',
        },
      },
    },
    tld: ['.gp'],
    cca2: 'GP',
    ccn3: '312',
    cca3: 'GLP',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    idd: {
      root: '+5',
      suffixes: ['90'],
    },
    capital: ['Basse-Terre'],
    altSpellings: ['GP', 'Gwadloup'],
    region: 'Americas',
    subregion: 'Caribbean',
    languages: {
      fra: 'French',
    },
    translations: {
      ara: {
        official: 'غوادلوب',
        common: 'غوادلوب',
      },
      ces: {
        official: 'Guadeloupe',
        common: 'Guadeloupe',
      },
      cym: {
        official: 'Guadeloupe',
        common: 'Guadeloupe',
      },
      deu: {
        official: 'Guadeloupe',
        common: 'Guadeloupe',
      },
      est: {
        official: 'Guadeloupe’i ja sõltkondade departemang',
        common: 'Guadeloupe',
      },
      fin: {
        official: 'Guadeloupen departmentti',
        common: 'Guadeloupe',
      },
      fra: {
        official: 'Guadeloupe',
        common: 'Guadeloupe',
      },
      hrv: {
        official: 'Gvadalupa',
        common: 'Gvadalupa',
      },
      hun: {
        official: 'Guadeloupe',
        common: 'Guadeloupe',
      },
      ita: {
        official: 'Guadeloupe',
        common: 'Guadeloupa',
      },
      jpn: {
        official: 'グアドループ島',
        common: 'グアドループ',
      },
      kor: {
        official: '과들루프',
        common: '과들루프',
      },
      nld: {
        official: 'Guadeloupe',
        common: 'Guadeloupe',
      },
      per: {
        official: 'گوادلوپ',
        common: 'گوادلوپ',
      },
      pol: {
        official: 'Gwadelupa',
        common: 'Gwadelupa',
      },
      por: {
        official: 'Guadalupe',
        common: 'Guadalupe',
      },
      rus: {
        official: 'Гваделупа',
        common: 'Гваделупа',
      },
      slk: {
        official: 'Guadeloupe',
        common: 'Guadeloupe',
      },
      spa: {
        official: 'Guadalupe',
        common: 'Guadalupe',
      },
      swe: {
        official: 'Guadeloupe',
        common: 'Guadeloupe',
      },
      urd: {
        official: 'گواڈیلوپ',
        common: 'گواڈیلوپ',
      },
      zho: {
        official: '瓜德罗普岛',
        common: '瓜德罗普岛',
      },
    },
    latlng: [16.25, -61.583333],
    landlocked: false,
    area: 1628.0,
    demonyms: {
      eng: {
        f: 'Guadeloupian',
        m: 'Guadeloupian',
      },
      fra: {
        f: 'Guadeloupéenne',
        m: 'Guadeloupéen',
      },
    },
    flag: '\uD83C\uDDEC\uD83C\uDDF5',
    maps: {
      googleMaps: 'https://goo.gl/maps/Dy9R2EufJtoWm8UN9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/7109289',
    },
    population: 400132,
    car: {
      signs: ['F'],
      side: 'right',
    },
    timezones: ['UTC-04:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/gp.png',
      svg: 'https://flagcdn.com/gp.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/gp.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/gp.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [16.03, -61.73],
    },
    postalCode: {
      format: '#####',
      regex: '^((97|98)\\d{3})$',
    },
  },
  {
    name: {
      common: 'Syria',
      official: 'Syrian Arab Republic',
      nativeName: {
        ara: {
          official: 'الجمهورية العربية السورية',
          common: 'سوريا',
        },
      },
    },
    tld: ['.sy', 'سوريا.'],
    cca2: 'SY',
    ccn3: '760',
    cca3: 'SYR',
    cioc: 'SYR',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      SYP: {
        name: 'Syrian pound',
        symbol: '£',
      },
    },
    idd: {
      root: '+9',
      suffixes: ['63'],
    },
    capital: ['Damascus'],
    altSpellings: ['SY', 'Syrian Arab Republic', 'Al-Jumhūrīyah Al-ʻArabīyah As-Sūrīyah'],
    region: 'Asia',
    subregion: 'Western Asia',
    languages: {
      ara: 'Arabic',
    },
    translations: {
      ara: {
        official: 'الجمهورية العربية السورية',
        common: 'سوريا',
      },
      ces: {
        official: 'Syrská arabská republika',
        common: 'Sýrie',
      },
      cym: {
        official: 'Syrian Arab Republic',
        common: 'Syria',
      },
      deu: {
        official: 'Arabische Republik Syrien',
        common: 'Syrien',
      },
      est: {
        official: 'Süüria Araabia Vabariik',
        common: 'Süüria',
      },
      fin: {
        official: 'Syyrian arabitasavalta',
        common: 'Syyria',
      },
      fra: {
        official: 'République arabe syrienne',
        common: 'Syrie',
      },
      hrv: {
        official: 'Sirijska Arapska Republika',
        common: 'Sirija',
      },
      hun: {
        official: 'Szíriai Arab Köztársaság',
        common: 'Szíria',
      },
      ita: {
        official: 'Repubblica araba siriana',
        common: 'Siria',
      },
      jpn: {
        official: 'シリアアラブ共和国',
        common: 'シリア・アラブ共和国',
      },
      kor: {
        official: '시리아 아랍 공화국',
        common: '시리아',
      },
      nld: {
        official: 'Syrische Arabische Republiek',
        common: 'Syrië',
      },
      per: {
        official: 'جمهوری عربی سوریه',
        common: 'سوریه',
      },
      pol: {
        official: 'Syryjska Republika Arabska',
        common: 'Syria',
      },
      por: {
        official: 'República Árabe Síria',
        common: 'Síria',
      },
      rus: {
        official: 'Сирийская Арабская Республика',
        common: 'Сирия',
      },
      slk: {
        official: 'Sýrska arabská republika',
        common: 'Sýria',
      },
      spa: {
        official: 'República Árabe Siria',
        common: 'Siria',
      },
      swe: {
        official: 'Syriska arabiska republiken',
        common: 'Syrien',
      },
      urd: {
        official: 'عرب جمہوریہ سوریہ',
        common: 'سوریہ',
      },
      zho: {
        official: '叙利亚阿拉伯共和国',
        common: '叙利亚',
      },
    },
    latlng: [35.0, 38.0],
    landlocked: false,
    borders: ['IRQ', 'ISR', 'JOR', 'LBN', 'TUR'],
    area: 185180.0,
    demonyms: {
      eng: {
        f: 'Syrian',
        m: 'Syrian',
      },
      fra: {
        f: 'Syrienne',
        m: 'Syrien',
      },
    },
    flag: '\uD83C\uDDF8\uD83C\uDDFE',
    maps: {
      googleMaps: 'https://goo.gl/maps/Xe3VnFbwdb4nv2SM9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/184840',
    },
    population: 17500657,
    gini: {
      '2003': 37.5,
    },
    fifa: 'SYR',
    car: {
      signs: ['SYR'],
      side: 'right',
    },
    timezones: ['UTC+02:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/sy.png',
      svg: 'https://flagcdn.com/sy.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/sy.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/sy.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [33.5, 36.3],
    },
  },
  {
    name: {
      common: 'Marshall Islands',
      official: 'Republic of the Marshall Islands',
      nativeName: {
        eng: {
          official: 'Republic of the Marshall Islands',
          common: 'Marshall Islands',
        },
        mah: {
          official: 'Republic of the Marshall Islands',
          common: 'M̧ajeļ',
        },
      },
    },
    tld: ['.mh'],
    cca2: 'MH',
    ccn3: '584',
    cca3: 'MHL',
    cioc: 'MHL',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      USD: {
        name: 'United States dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+6',
      suffixes: ['92'],
    },
    capital: ['Majuro'],
    altSpellings: ['MH', 'Republic of the Marshall Islands', 'Aolepān Aorōkin M̧ajeļ'],
    region: 'Oceania',
    subregion: 'Micronesia',
    languages: {
      eng: 'English',
      mah: 'Marshallese',
    },
    translations: {
      ara: {
        official: 'جمهورية جزر مارشال',
        common: 'جزر مارشال',
      },
      ces: {
        official: 'Republika Marshallovy ostrovy',
        common: 'Marshallovy ostrovy',
      },
      cym: {
        official: 'Republic of the Marshall Islands',
        common: 'Marshall Islands',
      },
      deu: {
        official: 'Republik Marshallinseln',
        common: 'Marshallinseln',
      },
      est: {
        official: 'Marshalli Saarte Vabariik',
        common: 'Marshalli Saared',
      },
      fin: {
        official: 'Marshallinsaarten tasavalta',
        common: 'Marshallinsaaret',
      },
      fra: {
        official: 'République des Îles Marshall',
        common: 'Îles Marshall',
      },
      hrv: {
        official: 'Republika Maršalovi Otoci',
        common: 'Maršalovi Otoci',
      },
      hun: {
        official: 'Marshall-szigetek',
        common: 'Marshall-szigetek',
      },
      ita: {
        official: 'Repubblica delle Isole Marshall',
        common: 'Isole Marshall',
      },
      jpn: {
        official: 'マーシャル諸島共和国',
        common: 'マーシャル諸島',
      },
      kor: {
        official: '마셜 제도 공화국',
        common: '마셜 제도',
      },
      nld: {
        official: 'Republiek van de Marshall-eilanden',
        common: 'Marshalleilanden',
      },
      per: {
        official: 'جمهوری جزایر مارشال',
        common: 'جزایر مارشال',
      },
      pol: {
        official: 'Republika Wysp Marshalla',
        common: 'Wyspy Marshalla',
      },
      por: {
        official: 'República das Ilhas Marshall',
        common: 'Ilhas Marshall',
      },
      rus: {
        official: 'Республика Маршалловы острова',
        common: 'Маршалловы Острова',
      },
      slk: {
        official: 'Republika Marshallových ostrovov',
        common: 'Marshallove ostrovy',
      },
      spa: {
        official: 'República de las Islas Marshall',
        common: 'Islas Marshall',
      },
      swe: {
        official: 'Republiken Marshallöarna',
        common: 'Marshallöarna',
      },
      urd: {
        official: 'جمہوریہ جزائر مارشل',
        common: 'جزائر مارشل',
      },
      zho: {
        official: '马绍尔群岛共和国',
        common: '马绍尔群岛',
      },
    },
    latlng: [9.0, 168.0],
    landlocked: false,
    area: 181.0,
    demonyms: {
      eng: {
        f: 'Marshallese',
        m: 'Marshallese',
      },
      fra: {
        f: 'Marshallaise',
        m: 'Marshallais',
      },
    },
    flag: '\uD83C\uDDF2\uD83C\uDDED',
    maps: {
      googleMaps: 'https://goo.gl/maps/A4xLi1XvcX88gi3W8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/571771',
    },
    population: 59194,
    car: {
      signs: ['MH'],
      side: 'right',
    },
    timezones: ['UTC+12:00'],
    continents: ['Oceania'],
    flags: {
      png: 'https://flagcdn.com/w320/mh.png',
      svg: 'https://flagcdn.com/mh.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/mh.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/mh.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [7.1, 171.38],
    },
  },
  {
    name: {
      common: 'Tanzania',
      official: 'United Republic of Tanzania',
      nativeName: {
        eng: {
          official: 'United Republic of Tanzania',
          common: 'Tanzania',
        },
        swa: {
          official: 'Jamhuri ya Muungano wa Tanzania',
          common: 'Tanzania',
        },
      },
    },
    tld: ['.tz'],
    cca2: 'TZ',
    ccn3: '834',
    cca3: 'TZA',
    cioc: 'TAN',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      TZS: {
        name: 'Tanzanian shilling',
        symbol: 'Sh',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['55'],
    },
    capital: ['Dodoma'],
    altSpellings: [
      'TZ',
      'Tanzania, United Republic of',
      'United Republic of Tanzania',
      'Jamhuri ya Muungano wa Tanzania',
    ],
    region: 'Africa',
    subregion: 'Eastern Africa',
    languages: {
      eng: 'English',
      swa: 'Swahili',
    },
    translations: {
      ara: {
        official: 'جمهورية تنزانيا الاتحادية',
        common: 'تنزانيا',
      },
      ces: {
        official: 'Sjednocená tanzanská republika',
        common: 'Tanzanie',
      },
      cym: {
        official: 'United Republic of Tanzania',
        common: 'Tanzania',
      },
      deu: {
        official: 'Vereinigte Republik Tansania',
        common: 'Tansania',
      },
      est: {
        official: 'Tansaania Ühendvabariik',
        common: 'Tansaania',
      },
      fin: {
        official: 'Tansanian yhdistynyt tasavalta',
        common: 'Tansania',
      },
      fra: {
        official: 'République -Unie de Tanzanie',
        common: 'Tanzanie',
      },
      hrv: {
        official: 'Ujedinjena Republika Tanzanija',
        common: 'Tanzanija',
      },
      hun: {
        official: 'Tádzsik Köztársaság',
        common: 'Tádzsikisztán',
      },
      ita: {
        official: 'Repubblica Unita di Tanzania',
        common: 'Tanzania',
      },
      jpn: {
        official: 'タンザニア連合共和国',
        common: 'タンザニア',
      },
      kor: {
        official: '탄자니아 연합 공화국',
        common: '탄자니아',
      },
      nld: {
        official: 'Verenigde Republiek Tanzania',
        common: 'Tanzania',
      },
      per: {
        official: 'جمهوری متحد تانزانیا',
        common: 'تانزانیا',
      },
      pol: {
        official: 'Zjednoczona Republika Tanzanii',
        common: 'Tanzania',
      },
      por: {
        official: 'República Unida da Tanzânia',
        common: 'Tanzânia',
      },
      rus: {
        official: 'Объединенная Республика Танзания',
        common: 'Танзания',
      },
      slk: {
        official: 'Tanzánijská zjednotená republika',
        common: 'Tanzánia',
      },
      spa: {
        official: 'República Unida de Tanzania',
        common: 'Tanzania',
      },
      swe: {
        official: 'Förenade republiken Tanzania',
        common: 'Tanzania',
      },
      urd: {
        official: 'متحدہ جمہوریہ تنزانیہ',
        common: 'تنزانیہ',
      },
      zho: {
        official: '坦桑尼亚联合共和国',
        common: '坦桑尼亚',
      },
    },
    latlng: [-6.0, 35.0],
    landlocked: false,
    borders: ['BDI', 'COD', 'KEN', 'MWI', 'MOZ', 'RWA', 'UGA', 'ZMB'],
    area: 945087.0,
    demonyms: {
      eng: {
        f: 'Tanzanian',
        m: 'Tanzanian',
      },
      fra: {
        f: 'Tanzanienne',
        m: 'Tanzanien',
      },
    },
    flag: '\uD83C\uDDF9\uD83C\uDDFF',
    maps: {
      googleMaps: 'https://goo.gl/maps/NWYMqZYXte4zGZ2Q8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/195270',
    },
    population: 59734213,
    gini: {
      '2017': 40.5,
    },
    fifa: 'TAN',
    car: {
      signs: ['EAT'],
      side: 'left',
    },
    timezones: ['UTC+03:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/tz.png',
      svg: 'https://flagcdn.com/tz.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/tz.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/tz.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-6.16, 35.75],
    },
  },
  {
    name: {
      common: 'Papua New Guinea',
      official: 'Independent State of Papua New Guinea',
      nativeName: {
        eng: {
          official: 'Independent State of Papua New Guinea',
          common: 'Papua New Guinea',
        },
        hmo: {
          official: 'Independen Stet bilong Papua Niugini',
          common: 'Papua Niu Gini',
        },
        tpi: {
          official: 'Independen Stet bilong Papua Niugini',
          common: 'Papua Niugini',
        },
      },
    },
    tld: ['.pg'],
    cca2: 'PG',
    ccn3: '598',
    cca3: 'PNG',
    cioc: 'PNG',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      PGK: {
        name: 'Papua New Guinean kina',
        symbol: 'K',
      },
    },
    idd: {
      root: '+6',
      suffixes: ['75'],
    },
    capital: ['Port Moresby'],
    altSpellings: ['PG', 'Independent State of Papua New Guinea', 'Independen Stet bilong Papua Niugini'],
    region: 'Oceania',
    subregion: 'Melanesia',
    languages: {
      eng: 'English',
      hmo: 'Hiri Motu',
      tpi: 'Tok Pisin',
    },
    translations: {
      ara: {
        official: 'دولة بابوا غينيا الجديدة',
        common: 'بابوا غينيا الجديدة',
      },
      ces: {
        official: 'Nezávislý stát Papua Nová Guinea',
        common: 'Papua-Nová Guinea',
      },
      cym: {
        official: 'Independent State of Papua New Guinea',
        common: 'Papua New Guinea',
      },
      deu: {
        official: 'Unabhängiger Staat Papua-Neuguinea',
        common: 'Papua-Neuguinea',
      },
      est: {
        official: 'Paapua Uus-Guinea Iseseisvusriik',
        common: 'Paapua Uus-Guinea',
      },
      fin: {
        official: 'Papua-Uuden-Guinean Itsenäinen valtio',
        common: 'Papua-Uusi-Guinea',
      },
      fra: {
        official: 'État indépendant de Papouasie-Nouvelle-Guinée',
        common: 'Papouasie-Nouvelle-Guinée',
      },
      hrv: {
        official: 'Nezavisna Država Papui Novoj Gvineji',
        common: 'Papua Nova Gvineja',
      },
      hun: {
        official: 'Pápua Új-Guinea Független Állam',
        common: 'Pápua Új-Guinea',
      },
      ita: {
        official: 'Stato indipendente di Papua Nuova Guinea',
        common: 'Papua Nuova Guinea',
      },
      jpn: {
        official: 'パプアニューギニア独立国',
        common: 'パプアニューギニア',
      },
      kor: {
        official: '파푸아뉴기니 독립국',
        common: '파푸아뉴기니',
      },
      nld: {
        official: 'Onafhankelijke Staat Papoea -Nieuw-Guinea',
        common: 'Papoea-Nieuw-Guinea',
      },
      per: {
        official: 'مملکت مستقل پاپوآ گینهٔ نو',
        common: 'پاپوآ گینه نو',
      },
      pol: {
        official: 'Niezależne Państwo Papui-Nowej Gwinei',
        common: 'Papua-Nowa Gwinea',
      },
      por: {
        official: 'Estado Independente da Papua Nova Guiné',
        common: 'Papua Nova Guiné',
      },
      rus: {
        official: 'Независимое Государство Папуа-Новой Гвинеи',
        common: 'Папуа — Новая Гвинея',
      },
      slk: {
        official: 'Nezávislý štát Papua-Nová Guinea',
        common: 'Papua-Nová Guinea',
      },
      spa: {
        official: 'Estado Independiente de Papúa Nueva Guinea',
        common: 'Papúa Nueva Guinea',
      },
      swe: {
        official: 'Den oberoende staten Papua Nya Guinea',
        common: 'Papua Nya Guinea',
      },
      urd: {
        official: 'آزاد ریاستِ پاپوا نیو گنی',
        common: 'پاپوا نیو گنی',
      },
      zho: {
        official: '巴布亚新几内亚',
        common: '巴布亚新几内亚',
      },
    },
    latlng: [-6.0, 147.0],
    landlocked: false,
    borders: ['IDN'],
    area: 462840.0,
    demonyms: {
      eng: {
        f: 'Papua New Guinean',
        m: 'Papua New Guinean',
      },
      fra: {
        f: 'Papouasienne',
        m: 'Papouasien',
      },
    },
    flag: '\uD83C\uDDF5\uD83C\uDDEC',
    maps: {
      googleMaps: 'https://goo.gl/maps/ChGmzZBjZ3vnBwR2A',
      openStreetMaps: 'https://goo.gl/maps/ChGmzZBjZ3vnBwR2A',
    },
    population: 8947027,
    gini: {
      '2009': 41.9,
    },
    fifa: 'PNG',
    car: {
      signs: ['PNG'],
      side: 'left',
    },
    timezones: ['UTC+10:00'],
    continents: ['Oceania'],
    flags: {
      png: 'https://flagcdn.com/w320/pg.png',
      svg: 'https://flagcdn.com/pg.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/pg.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/pg.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-9.45, 147.18],
    },
    postalCode: {
      format: '###',
      regex: '^(\\d{3})$',
    },
  },
  {
    name: {
      common: 'Eritrea',
      official: 'State of Eritrea',
      nativeName: {
        ara: {
          official: 'دولة إرتريا',
          common: 'إرتريا‎',
        },
        eng: {
          official: 'State of Eritrea',
          common: 'Eritrea',
        },
        tir: {
          official: 'ሃገረ ኤርትራ',
          common: 'ኤርትራ',
        },
      },
    },
    tld: ['.er'],
    cca2: 'ER',
    ccn3: '232',
    cca3: 'ERI',
    cioc: 'ERI',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      ERN: {
        name: 'Eritrean nakfa',
        symbol: 'Nfk',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['91'],
    },
    capital: ['Asmara'],
    altSpellings: ['ER', 'State of Eritrea', 'ሃገረ ኤርትራ', 'Dawlat Iritriyá', 'ʾErtrā', 'Iritriyā'],
    region: 'Africa',
    subregion: 'Eastern Africa',
    languages: {
      ara: 'Arabic',
      eng: 'English',
      tir: 'Tigrinya',
    },
    translations: {
      ara: {
        official: 'دولة إريتريا',
        common: 'إريتريا',
      },
      ces: {
        official: 'Stát Eritrea',
        common: 'Eritrea',
      },
      cym: {
        official: 'Gwladwriaeth Eritrea',
        common: 'Eritrea',
      },
      deu: {
        official: 'Staat Eritrea',
        common: 'Eritrea',
      },
      est: {
        official: 'Eritrea Riik',
        common: 'Eritrea',
      },
      fin: {
        official: 'Eritrean valtio',
        common: 'Eritrea',
      },
      fra: {
        official: "État d'Érythrée",
        common: 'Érythrée',
      },
      hrv: {
        official: 'Država Eritreji',
        common: 'Eritreja',
      },
      hun: {
        official: 'Eritrea',
        common: 'Eritrea',
      },
      ita: {
        official: 'Stato di Eritrea',
        common: 'Eritrea',
      },
      jpn: {
        official: 'エリトリア国',
        common: 'エリトリア',
      },
      kor: {
        official: '에리트레아국',
        common: '에리트레아',
      },
      nld: {
        official: 'Staat Eritrea',
        common: 'Eritrea',
      },
      per: {
        official: 'جمهوری اریتره',
        common: 'اریتره',
      },
      pol: {
        official: 'Państwo Erytrea',
        common: 'Erytrea',
      },
      por: {
        official: 'Estado da Eritreia',
        common: 'Eritreia',
      },
      rus: {
        official: 'Государство Эритрея',
        common: 'Эритрея',
      },
      slk: {
        official: 'Eritrejský štát',
        common: 'Eritrea',
      },
      spa: {
        official: 'Estado de Eritrea',
        common: 'Eritrea',
      },
      swe: {
        official: 'Staten Eritrea',
        common: 'Eritrea',
      },
      urd: {
        official: 'ریاستِ ارتریا',
        common: 'ارتریا',
      },
      zho: {
        official: '厄立特里亚',
        common: '厄立特里亚',
      },
    },
    latlng: [15.0, 39.0],
    landlocked: false,
    borders: ['DJI', 'ETH', 'SDN'],
    area: 117600.0,
    demonyms: {
      eng: {
        f: 'Eritrean',
        m: 'Eritrean',
      },
      fra: {
        f: 'Érythréenne',
        m: 'Érythréen',
      },
    },
    flag: '\uD83C\uDDEA\uD83C\uDDF7',
    maps: {
      googleMaps: 'https://goo.gl/maps/HRyqUpnPwwG6jY5j6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/296961',
    },
    population: 5352000,
    fifa: 'ERI',
    car: {
      signs: ['ER'],
      side: 'right',
    },
    timezones: ['UTC+03:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/er.png',
      svg: 'https://flagcdn.com/er.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/er.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/er.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [15.33, 38.93],
    },
  },
  {
    name: {
      common: 'Moldova',
      official: 'Republic of Moldova',
      nativeName: {
        ron: {
          official: 'Republica Moldova',
          common: 'Moldova',
        },
      },
    },
    tld: ['.md'],
    cca2: 'MD',
    ccn3: '498',
    cca3: 'MDA',
    cioc: 'MDA',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      MDL: {
        name: 'Moldovan leu',
        symbol: 'L',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['73'],
    },
    capital: ['Chișinău'],
    altSpellings: ['MD', 'Moldova, Republic of', 'Republic of Moldova', 'Republica Moldova'],
    region: 'Europe',
    subregion: 'Eastern Europe',
    languages: {
      ron: 'Moldavian',
    },
    translations: {
      ara: {
        official: 'جمهورية مولدوڤا',
        common: 'مولدوڤا',
      },
      ces: {
        official: 'Moldavská republika',
        common: 'Moldavsko',
      },
      cym: {
        official: 'Republic of Moldova',
        common: 'Moldova',
      },
      deu: {
        official: 'Republik Moldau',
        common: 'Moldawien',
      },
      est: {
        official: 'Moldova Vabariik',
        common: 'Moldova',
      },
      fin: {
        official: 'Moldovan tasavalta',
        common: 'Moldova',
      },
      fra: {
        official: 'République de Moldavie',
        common: 'Moldavie',
      },
      hrv: {
        official: 'Moldavija',
        common: 'Moldova',
      },
      hun: {
        official: 'Moldovai Köztársaság',
        common: 'Moldova',
      },
      ita: {
        official: 'Repubblica di Moldova',
        common: 'Moldavia',
      },
      jpn: {
        official: 'モルドバ共和国',
        common: 'モルドバ共和国',
      },
      kor: {
        official: '몰도바 공화국',
        common: '몰도바',
      },
      nld: {
        official: 'Republiek Moldavië',
        common: 'Moldavië',
      },
      per: {
        official: 'جمهوری مولداوی',
        common: 'مولداوی',
      },
      pol: {
        official: 'Republika Mołdawii',
        common: 'Mołdawia',
      },
      por: {
        official: 'República da Moldávia',
        common: 'Moldávia',
      },
      rus: {
        official: 'Молдова',
        common: 'Молдавия',
      },
      slk: {
        official: 'Moldavská republika',
        common: 'Moldavsko',
      },
      spa: {
        official: 'República de Moldova',
        common: 'Moldavia',
      },
      swe: {
        official: 'Republiken Moldavien',
        common: 'Moldavien',
      },
      urd: {
        official: 'جمہوریہ مالدووا',
        common: 'مالدووا',
      },
      zho: {
        official: '摩尔多瓦共和国',
        common: '摩尔多瓦',
      },
    },
    latlng: [47.0, 29.0],
    landlocked: true,
    borders: ['ROU', 'UKR'],
    area: 33846.0,
    demonyms: {
      eng: {
        f: 'Moldovan',
        m: 'Moldovan',
      },
      fra: {
        f: 'Moldave',
        m: 'Moldave',
      },
    },
    flag: '\uD83C\uDDF2\uD83C\uDDE9',
    maps: {
      googleMaps: 'https://goo.gl/maps/JjmyUuULujnDeFPf7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/58974',
    },
    population: 2617820,
    gini: {
      '2018': 25.7,
    },
    fifa: 'MDA',
    car: {
      signs: ['MD'],
      side: 'right',
    },
    timezones: ['UTC+02:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/md.png',
      svg: 'https://flagcdn.com/md.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/md.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/md.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [47.01, 28.9],
    },
    postalCode: {
      format: 'MD-####',
      regex: '^(?:MD)*(\\d{4})$',
    },
  },
  {
    name: {
      common: 'Uzbekistan',
      official: 'Republic of Uzbekistan',
      nativeName: {
        rus: {
          official: 'Республика Узбекистан',
          common: 'Узбекистан',
        },
        uzb: {
          official: "O'zbekiston Respublikasi",
          common: 'O‘zbekiston',
        },
      },
    },
    tld: ['.uz'],
    cca2: 'UZ',
    ccn3: '860',
    cca3: 'UZB',
    cioc: 'UZB',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      UZS: {
        name: 'Uzbekistani soʻm',
        symbol: "so'm",
      },
    },
    idd: {
      root: '+9',
      suffixes: ['98'],
    },
    capital: ['Tashkent'],
    altSpellings: ['UZ', 'Republic of Uzbekistan', 'O‘zbekiston Respublikasi', 'Ўзбекистон Республикаси'],
    region: 'Asia',
    subregion: 'Central Asia',
    languages: {
      rus: 'Russian',
      uzb: 'Uzbek',
    },
    translations: {
      ara: {
        official: 'جمهورية أوزباكستان',
        common: 'أوزباكستان',
      },
      ces: {
        official: 'Republika Uzbekistán',
        common: 'Uzbekistán',
      },
      cym: {
        official: 'Republic of Uzbekistan',
        common: 'Uzbekistan',
      },
      deu: {
        official: 'Republik Usbekistan',
        common: 'Usbekistan',
      },
      est: {
        official: 'Usbekistani Vabariik',
        common: 'Usbekistan',
      },
      fin: {
        official: 'Uzbekistanin tasavalta',
        common: 'Uzbekistan',
      },
      fra: {
        official: "République d'Ouzbékistan",
        common: 'Ouzbékistan',
      },
      hrv: {
        official: 'Republika Uzbekistan',
        common: 'Uzbekistan',
      },
      hun: {
        official: 'Üzbég Köztársaság',
        common: 'Üzbegisztán',
      },
      ita: {
        official: 'Repubblica di Uzbekistan',
        common: 'Uzbekistan',
      },
      jpn: {
        official: 'ウズベキスタン共和国',
        common: 'ウズベキスタン',
      },
      kor: {
        official: '우즈베키스탄 공화국',
        common: '우즈베키스탄',
      },
      nld: {
        official: 'Republiek Oezbekistan',
        common: 'Oezbekistan',
      },
      per: {
        official: 'جمهوری ازبکستان',
        common: 'ازبکستان',
      },
      pol: {
        official: 'Republika Uzbekistanu',
        common: 'Uzbekistan',
      },
      por: {
        official: 'República do Usbequistão',
        common: 'Uzbequistão',
      },
      rus: {
        official: 'Республика Узбекистан',
        common: 'Узбекистан',
      },
      slk: {
        official: 'Uzbecká republika',
        common: 'Uzbekistan',
      },
      spa: {
        official: 'República de Uzbekistán',
        common: 'Uzbekistán',
      },
      swe: {
        official: 'Republiken Uzbekistan',
        common: 'Uzbekistan',
      },
      urd: {
        official: 'جمہوریہ ازبکستان',
        common: 'ازبکستان',
      },
      zho: {
        official: '乌兹别克斯坦共和国',
        common: '乌兹别克斯坦',
      },
    },
    latlng: [41.0, 64.0],
    landlocked: true,
    borders: ['AFG', 'KAZ', 'KGZ', 'TJK', 'TKM'],
    area: 447400.0,
    demonyms: {
      eng: {
        f: 'Uzbekistani',
        m: 'Uzbekistani',
      },
      fra: {
        f: 'Ouzbèke',
        m: 'Ouzbèke',
      },
    },
    flag: '\uD83C\uDDFA\uD83C\uDDFF',
    maps: {
      googleMaps: 'https://goo.gl/maps/AJpo6MjMx23qSWCz8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/196240',
    },
    population: 34232050,
    gini: {
      '2003': 35.3,
    },
    fifa: 'UZB',
    car: {
      signs: ['UZ'],
      side: 'right',
    },
    timezones: ['UTC+05:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/uz.png',
      svg: 'https://flagcdn.com/uz.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/uz.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/uz.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [41.32, 69.25],
    },
    postalCode: {
      format: '######',
      regex: '^(\\d{6})$',
    },
  },
  {
    name: {
      common: 'France',
      official: 'French Republic',
      nativeName: {
        fra: {
          official: 'République française',
          common: 'France',
        },
      },
    },
    tld: ['.fr'],
    cca2: 'FR',
    ccn3: '250',
    cca3: 'FRA',
    cioc: 'FRA',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['3'],
    },
    capital: ['Paris'],
    altSpellings: ['FR', 'French Republic', 'République française'],
    region: 'Europe',
    subregion: 'Western Europe',
    languages: {
      fra: 'French',
    },
    translations: {
      ara: {
        official: 'الجمهورية الفرنسية',
        common: 'فرنسا',
      },
      ces: {
        official: 'Francouzská republika',
        common: 'Francie',
      },
      cym: {
        official: 'French Republic',
        common: 'France',
      },
      deu: {
        official: 'Französische Republik',
        common: 'Frankreich',
      },
      est: {
        official: 'Prantsuse Vabariik',
        common: 'Prantsusmaa',
      },
      fin: {
        official: 'Ranskan tasavalta',
        common: 'Ranska',
      },
      fra: {
        official: 'République française',
        common: 'France',
      },
      hrv: {
        official: 'Francuska Republika',
        common: 'Francuska',
      },
      hun: {
        official: 'Francia Köztársaság',
        common: 'Franciaország',
      },
      ita: {
        official: 'Repubblica francese',
        common: 'Francia',
      },
      jpn: {
        official: 'フランス共和国',
        common: 'フランス',
      },
      kor: {
        official: '프랑스 공화국',
        common: '프랑스',
      },
      nld: {
        official: 'Franse Republiek',
        common: 'Frankrijk',
      },
      per: {
        official: 'جمهوری فرانسه',
        common: 'فرانسه',
      },
      pol: {
        official: 'Republika Francuska',
        common: 'Francja',
      },
      por: {
        official: 'República Francesa',
        common: 'França',
      },
      rus: {
        official: 'Французская Республика',
        common: 'Франция',
      },
      slk: {
        official: 'Francúzska republika',
        common: 'Francúzsko',
      },
      spa: {
        official: 'República francés',
        common: 'Francia',
      },
      swe: {
        official: 'Republiken Frankrike',
        common: 'Frankrike',
      },
      urd: {
        official: 'جمہوریہ فرانس',
        common: 'فرانس',
      },
      zho: {
        official: '法兰西共和国',
        common: '法国',
      },
    },
    latlng: [46.0, 2.0],
    landlocked: false,
    borders: ['AND', 'BEL', 'DEU', 'ITA', 'LUX', 'MCO', 'ESP', 'CHE'],
    area: 551695.0,
    demonyms: {
      eng: {
        f: 'French',
        m: 'French',
      },
      fra: {
        f: 'Française',
        m: 'Français',
      },
    },
    flag: '\uD83C\uDDEB\uD83C\uDDF7',
    maps: {
      googleMaps: 'https://goo.gl/maps/g7QxxSFsWyTPKuzd7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/1403916',
    },
    population: 67391582,
    gini: {
      '2018': 32.4,
    },
    fifa: 'FRA',
    car: {
      signs: ['F'],
      side: 'right',
    },
    timezones: [
      'UTC-10:00',
      'UTC-09:30',
      'UTC-09:00',
      'UTC-08:00',
      'UTC-04:00',
      'UTC-03:00',
      'UTC+01:00',
      'UTC+02:00',
      'UTC+03:00',
      'UTC+04:00',
      'UTC+05:00',
      'UTC+10:00',
      'UTC+11:00',
      'UTC+12:00',
    ],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/fr.png',
      svg: 'https://flagcdn.com/fr.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/fr.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/fr.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [48.87, 2.33],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Uruguay',
      official: 'Oriental Republic of Uruguay',
      nativeName: {
        spa: {
          official: 'República Oriental del Uruguay',
          common: 'Uruguay',
        },
      },
    },
    tld: ['.uy'],
    cca2: 'UY',
    ccn3: '858',
    cca3: 'URY',
    cioc: 'URU',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      UYU: {
        name: 'Uruguayan peso',
        symbol: '$',
      },
    },
    idd: {
      root: '+5',
      suffixes: ['98'],
    },
    capital: ['Montevideo'],
    altSpellings: ['UY', 'Oriental Republic of Uruguay', 'República Oriental del Uruguay'],
    region: 'Americas',
    subregion: 'South America',
    languages: {
      spa: 'Spanish',
    },
    translations: {
      ara: {
        official: 'جمهورية الأوروغواي الشرقية',
        common: 'الأوروغواي',
      },
      ces: {
        official: 'Uruguayská východní republika',
        common: 'Uruguay',
      },
      cym: {
        official: 'Oriental Republic of Uruguay',
        common: 'Uruguay',
      },
      deu: {
        official: 'Republik Östlich des Uruguay',
        common: 'Uruguay',
      },
      est: {
        official: 'Uruguay Idavabariik',
        common: 'Uruguay',
      },
      fin: {
        official: 'Uruguayn itäinen tasavalta',
        common: 'Uruguay',
      },
      fra: {
        official: "République orientale de l'Uruguay",
        common: 'Uruguay',
      },
      hrv: {
        official: 'Orijentalna Republika Urugvaj',
        common: 'Urugvaj',
      },
      hun: {
        official: 'Uruguayi Keleti Köztársaság',
        common: 'Uruguay',
      },
      ita: {
        official: "Repubblica Orientale dell'Uruguay",
        common: 'Uruguay',
      },
      jpn: {
        official: 'ウルグアイ東方共和国',
        common: 'ウルグアイ',
      },
      kor: {
        official: '우루과이 동방 공화국',
        common: '우루과이',
      },
      nld: {
        official: 'Oosterse Republiek Uruguay',
        common: 'Uruguay',
      },
      per: {
        official: 'جمهوری اروگوئه',
        common: 'اروگوئه',
      },
      pol: {
        official: 'Wschodnia Republika Urugwaju',
        common: 'Urugwaj',
      },
      por: {
        official: 'República Oriental do Uruguai',
        common: 'Uruguai',
      },
      rus: {
        official: 'Восточной Республики Уругвай',
        common: 'Уругвай',
      },
      slk: {
        official: 'Uruguajská východná republika',
        common: 'Uruguaj',
      },
      spa: {
        official: 'República Oriental del Uruguay',
        common: 'Uruguay',
      },
      swe: {
        official: 'Republiken Uruguay',
        common: 'Uruguay',
      },
      urd: {
        official: 'جمہوریہ شرقیہ یوراگوئے',
        common: 'یوراگوئے',
      },
      zho: {
        official: '乌拉圭东岸共和国',
        common: '乌拉圭',
      },
    },
    latlng: [-33.0, -56.0],
    landlocked: false,
    borders: ['ARG', 'BRA'],
    area: 181034.0,
    demonyms: {
      eng: {
        f: 'Uruguayan',
        m: 'Uruguayan',
      },
      fra: {
        f: 'Uruguayenne',
        m: 'Uruguayen',
      },
    },
    flag: '\uD83C\uDDFA\uD83C\uDDFE',
    maps: {
      googleMaps: 'https://goo.gl/maps/tiQ9Baekb1jQtDSD9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/287072',
    },
    population: 3473727,
    gini: {
      '2019': 39.7,
    },
    fifa: 'URU',
    car: {
      signs: ['ROU'],
      side: 'right',
    },
    timezones: ['UTC-03:00'],
    continents: ['South America'],
    flags: {
      png: 'https://flagcdn.com/w320/uy.png',
      svg: 'https://flagcdn.com/uy.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/uy.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/uy.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-34.85, -56.17],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'DR Congo',
      official: 'Democratic Republic of the Congo',
      nativeName: {
        fra: {
          official: 'République démocratique du Congo',
          common: 'RD Congo',
        },
        kon: {
          official: 'Repubilika ya Kongo Demokratiki',
          common: 'Repubilika ya Kongo Demokratiki',
        },
        lin: {
          official: 'Republiki ya Kongó Demokratiki',
          common: 'Republiki ya Kongó Demokratiki',
        },
        lua: {
          official: 'Ditunga dia Kongu wa Mungalaata',
          common: 'Ditunga dia Kongu wa Mungalaata',
        },
        swa: {
          official: 'Jamhuri ya Kidemokrasia ya Kongo',
          common: 'Jamhuri ya Kidemokrasia ya Kongo',
        },
      },
    },
    tld: ['.cd'],
    cca2: 'CD',
    ccn3: '180',
    cca3: 'COD',
    cioc: 'COD',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      CDF: {
        name: 'Congolese franc',
        symbol: 'FC',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['43'],
    },
    capital: ['Kinshasa'],
    altSpellings: ['CD', 'DR Congo', 'Congo-Kinshasa', 'Congo, the Democratic Republic of the', 'DRC'],
    region: 'Africa',
    subregion: 'Middle Africa',
    languages: {
      fra: 'French',
      kon: 'Kikongo',
      lin: 'Lingala',
      lua: 'Tshiluba',
      swa: 'Swahili',
    },
    translations: {
      ara: {
        official: 'جمهورية الكونغو الديمقراطية',
        common: 'الكونغو',
      },
      ces: {
        official: 'Demokratická republika Kongo',
        common: 'DR Kongo',
      },
      cym: {
        official: 'Gweriniaeth Ddemocrataidd Congo',
        common: 'Gweriniaeth Ddemocrataidd Congo',
      },
      deu: {
        official: 'Demokratische Republik Kongo',
        common: 'Kongo (Dem. Rep.)',
      },
      est: {
        official: 'Kongo Demokraatlik Vabariik',
        common: 'Kongo DV',
      },
      fin: {
        official: 'Kongon demokraattinen tasavalta',
        common: 'Kongon demokraattinen tasavalta',
      },
      fra: {
        official: 'République démocratique du Congo',
        common: 'Congo (Rép. dém.)',
      },
      hrv: {
        official: 'Demokratska Republika Kongo',
        common: 'Kongo, Demokratska Republika',
      },
      hun: {
        official: 'Kongói Demokratikus Köztársaság',
        common: 'Kongói Demokratikus Köztársaság',
      },
      ita: {
        official: 'Repubblica Democratica del Congo',
        common: 'Congo (Rep. Dem.)',
      },
      jpn: {
        official: 'コンゴ民主共和国',
        common: 'コンゴ民主共和国',
      },
      kor: {
        official: '콩고 민주 공화국',
        common: '콩고 민주 공화국',
      },
      nld: {
        official: 'Democratische Republiek Congo',
        common: 'Congo (DRC)',
      },
      per: {
        official: 'جمهوری دموکراتیک کنگو',
        common: 'کنگو دموکراتیک',
      },
      pol: {
        official: 'Demokratyczna Republika Konga',
        common: 'Demokratyczna Republika Konga',
      },
      por: {
        official: 'República Democrática do Congo',
        common: 'República Democrática do Congo',
      },
      rus: {
        official: 'Демократическая Республика Конго',
        common: 'Демократическая Республика Конго',
      },
      slk: {
        official: 'Konžská demokratická republika',
        common: 'Kongo',
      },
      spa: {
        official: 'República Democrática del Congo',
        common: 'Congo (Rep. Dem.)',
      },
      swe: {
        official: 'Demokratiska republiken Kongo',
        common: 'Kongo-Kinshasa',
      },
      urd: {
        official: 'جمہوری جمہوریہ کانگو',
        common: 'کانگو',
      },
      zho: {
        official: '刚果民主共和国',
        common: '民主刚果',
      },
    },
    latlng: [0.0, 25.0],
    landlocked: false,
    borders: ['AGO', 'BDI', 'CAF', 'COG', 'RWA', 'SSD', 'TZA', 'UGA', 'ZMB'],
    area: 2344858.0,
    demonyms: {
      eng: {
        f: 'Congolese',
        m: 'Congolese',
      },
      fra: {
        f: 'Congolaise',
        m: 'Congolais',
      },
    },
    flag: '\uD83C\uDDE8\uD83C\uDDE9',
    maps: {
      googleMaps: 'https://goo.gl/maps/KfhNVn6VqdZXWu8n9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/192795',
    },
    population: 89561404,
    gini: {
      '2012': 42.1,
    },
    fifa: 'COD',
    car: {
      signs: ['CGO'],
      side: 'right',
    },
    timezones: ['UTC+01:00', 'UTC+02:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/cd.png',
      svg: 'https://flagcdn.com/cd.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/cd.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/cd.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-4.32, 15.3],
    },
  },
  {
    name: {
      common: 'Saint Lucia',
      official: 'Saint Lucia',
      nativeName: {
        eng: {
          official: 'Saint Lucia',
          common: 'Saint Lucia',
        },
      },
    },
    tld: ['.lc'],
    cca2: 'LC',
    ccn3: '662',
    cca3: 'LCA',
    cioc: 'LCA',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      XCD: {
        name: 'Eastern Caribbean dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+1',
      suffixes: ['758'],
    },
    capital: ['Castries'],
    altSpellings: ['LC'],
    region: 'Americas',
    subregion: 'Caribbean',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'سانت لوسيا',
        common: 'سانت لوسيا',
      },
      ces: {
        official: 'Svatá Lucie',
        common: 'Svatá Lucie',
      },
      cym: {
        official: 'Saint Lucia',
        common: 'Saint Lucia',
      },
      deu: {
        official: 'St. Lucia',
        common: 'St. Lucia',
      },
      est: {
        official: 'Saint Lucia',
        common: 'Saint Lucia',
      },
      fin: {
        official: 'Saint Lucia',
        common: 'Saint Lucia',
      },
      fra: {
        official: 'Sainte-Lucie',
        common: 'Sainte-Lucie',
      },
      hrv: {
        official: 'Sveta Lucija',
        common: 'Sveta Lucija',
      },
      hun: {
        official: 'Saint Lucia',
        common: 'Saint Lucia',
      },
      ita: {
        official: 'Santa Lucia',
        common: 'Santa Lucia',
      },
      jpn: {
        official: 'セントルシア',
        common: 'セントルシア',
      },
      kor: {
        official: '세인트루시아',
        common: '세인트루시아',
      },
      nld: {
        official: 'Saint Lucia',
        common: 'Saint Lucia',
      },
      per: {
        official: 'سنت لوسیا',
        common: 'سنت لوسیا',
      },
      pol: {
        official: 'Saint Lucia',
        common: 'Saint Lucia',
      },
      por: {
        official: 'Santa Lúcia',
        common: 'Santa Lúcia',
      },
      rus: {
        official: 'Сент-Люсия',
        common: 'Сент-Люсия',
      },
      slk: {
        official: 'Svätá Lucia',
        common: 'Svätá Lucia',
      },
      spa: {
        official: 'Santa Lucía',
        common: 'Santa Lucía',
      },
      swe: {
        official: 'Saint Lucia',
        common: 'Saint Lucia',
      },
      urd: {
        official: 'سینٹ لوسیا',
        common: 'سینٹ لوسیا',
      },
      zho: {
        official: '圣卢西亚',
        common: '圣卢西亚',
      },
    },
    latlng: [13.88333333, -60.96666666],
    landlocked: false,
    area: 616.0,
    demonyms: {
      eng: {
        f: 'Saint Lucian',
        m: 'Saint Lucian',
      },
      fra: {
        f: 'Saint-Lucienne',
        m: 'Saint-Lucien',
      },
    },
    flag: '\uD83C\uDDF1\uD83C\uDDE8',
    maps: {
      googleMaps: 'https://goo.gl/maps/4HhJ2jkPdSL9BPRcA',
      openStreetMaps: 'https://www.openstreetmap.org/relation/550728',
    },
    population: 183629,
    gini: {
      '2016': 51.2,
    },
    fifa: 'LCA',
    car: {
      signs: ['WL'],
      side: 'left',
    },
    timezones: ['UTC-04:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/lc.png',
      svg: 'https://flagcdn.com/lc.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/lc.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/lc.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [14.0, -61.0],
    },
  },
  {
    name: {
      common: 'Tuvalu',
      official: 'Tuvalu',
      nativeName: {
        eng: {
          official: 'Tuvalu',
          common: 'Tuvalu',
        },
        tvl: {
          official: 'Tuvalu',
          common: 'Tuvalu',
        },
      },
    },
    tld: ['.tv'],
    cca2: 'TV',
    ccn3: '798',
    cca3: 'TUV',
    cioc: 'TUV',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      AUD: {
        name: 'Australian dollar',
        symbol: '$',
      },
      TVD: {
        name: 'Tuvaluan dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+6',
      suffixes: ['88'],
    },
    capital: ['Funafuti'],
    altSpellings: ['TV'],
    region: 'Oceania',
    subregion: 'Polynesia',
    languages: {
      eng: 'English',
      tvl: 'Tuvaluan',
    },
    translations: {
      ara: {
        official: 'توفالو',
        common: 'توفالو',
      },
      ces: {
        official: 'Tuvalu',
        common: 'Tuvalu',
      },
      cym: {
        official: 'Tuvalu',
        common: 'Tuvalu',
      },
      deu: {
        official: 'Tuvalu',
        common: 'Tuvalu',
      },
      est: {
        official: 'Tuvalu',
        common: 'Tuvalu',
      },
      fin: {
        official: 'Tuvalu',
        common: 'Tuvalu',
      },
      fra: {
        official: 'Tuvalu',
        common: 'Tuvalu',
      },
      hrv: {
        official: 'Tuvalu',
        common: 'Tuvalu',
      },
      hun: {
        official: 'Tuvalu',
        common: 'Tuvalu',
      },
      ita: {
        official: 'Tuvalu',
        common: 'Tuvalu',
      },
      jpn: {
        official: 'ツバル',
        common: 'ツバル',
      },
      kor: {
        official: '투발루',
        common: '투발루',
      },
      nld: {
        official: 'Tuvalu',
        common: 'Tuvalu',
      },
      per: {
        official: 'تووالو',
        common: 'تووالو',
      },
      pol: {
        official: 'Tuvalu',
        common: 'Tuvalu',
      },
      por: {
        official: 'Tuvalu',
        common: 'Tuvalu',
      },
      rus: {
        official: 'Тувалу',
        common: 'Тувалу',
      },
      slk: {
        official: 'Tuvalu',
        common: 'Tuvalu',
      },
      spa: {
        official: 'Tuvalu',
        common: 'Tuvalu',
      },
      swe: {
        official: 'Tuvalu',
        common: 'Tuvalu',
      },
      urd: {
        official: 'تووالو',
        common: 'تووالو',
      },
      zho: {
        official: '图瓦卢',
        common: '图瓦卢',
      },
    },
    latlng: [-8.0, 178.0],
    landlocked: false,
    area: 26.0,
    demonyms: {
      eng: {
        f: 'Tuvaluan',
        m: 'Tuvaluan',
      },
      fra: {
        f: 'Tuvaluane',
        m: 'Tuvaluan',
      },
    },
    flag: '\uD83C\uDDF9\uD83C\uDDFB',
    maps: {
      googleMaps: 'https://goo.gl/maps/LbuUxtkgm1dfN1Pn6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/2177266',
    },
    population: 11792,
    gini: {
      '2010': 39.1,
    },
    car: {
      signs: ['TUV'],
      side: 'left',
    },
    timezones: ['UTC+12:00'],
    continents: ['Oceania'],
    flags: {
      png: 'https://flagcdn.com/w320/tv.png',
      svg: 'https://flagcdn.com/tv.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/tv.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/tv.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-8.52, 179.22],
    },
  },
  {
    name: {
      common: 'Canada',
      official: 'Canada',
      nativeName: {
        eng: {
          official: 'Canada',
          common: 'Canada',
        },
        fra: {
          official: 'Canada',
          common: 'Canada',
        },
      },
    },
    tld: ['.ca'],
    cca2: 'CA',
    ccn3: '124',
    cca3: 'CAN',
    cioc: 'CAN',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      CAD: {
        name: 'Canadian dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+1',
      suffixes: [''],
    },
    capital: ['Ottawa'],
    altSpellings: ['CA'],
    region: 'Americas',
    subregion: 'North America',
    languages: {
      eng: 'English',
      fra: 'French',
    },
    translations: {
      ara: {
        official: 'كندا',
        common: 'كندا',
      },
      ces: {
        official: 'Kanada',
        common: 'Kanada',
      },
      cym: {
        official: 'Canada',
        common: 'Canada',
      },
      deu: {
        official: 'Kanada',
        common: 'Kanada',
      },
      est: {
        official: 'Kanada',
        common: 'Kanada',
      },
      fin: {
        official: 'Kanada',
        common: 'Kanada',
      },
      fra: {
        official: 'Canada',
        common: 'Canada',
      },
      hrv: {
        official: 'Kanada',
        common: 'Kanada',
      },
      hun: {
        official: 'Kanada',
        common: 'Kanada',
      },
      ita: {
        official: 'Canada',
        common: 'Canada',
      },
      jpn: {
        official: 'カナダ',
        common: 'カナダ',
      },
      kor: {
        official: '캐나다',
        common: '캐나다',
      },
      nld: {
        official: 'Canada',
        common: 'Canada',
      },
      per: {
        official: 'کانادا',
        common: 'کانادا',
      },
      pol: {
        official: 'Kanada',
        common: 'Kanada',
      },
      por: {
        official: 'Canadá',
        common: 'Canadá',
      },
      rus: {
        official: 'Канада',
        common: 'Канада',
      },
      slk: {
        official: 'Kanada',
        common: 'Kanada',
      },
      spa: {
        official: 'Canadá',
        common: 'Canadá',
      },
      swe: {
        official: 'Kanada',
        common: 'Kanada',
      },
      urd: {
        official: 'کینیڈا',
        common: 'کینیڈا',
      },
      zho: {
        official: '加拿大',
        common: '加拿大',
      },
    },
    latlng: [60.0, -95.0],
    landlocked: false,
    borders: ['USA'],
    area: 9984670.0,
    demonyms: {
      eng: {
        f: 'Canadian',
        m: 'Canadian',
      },
      fra: {
        f: 'Canadienne',
        m: 'Canadien',
      },
    },
    flag: '\uD83C\uDDE8\uD83C\uDDE6',
    maps: {
      googleMaps: 'https://goo.gl/maps/jmEVLugreeqiZXxbA',
      openStreetMaps: 'https://www.openstreetmap.org/relation/1428125',
    },
    population: 38005238,
    gini: {
      '2017': 33.3,
    },
    fifa: 'CAN',
    car: {
      signs: ['CDN'],
      side: 'right',
    },
    timezones: ['UTC-08:00', 'UTC-07:00', 'UTC-06:00', 'UTC-05:00', 'UTC-04:00', 'UTC-03:30'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/ca.png',
      svg: 'https://flagcdn.com/ca.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ca.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ca.svg',
    },
    startOfWeek: 'sunday',
    capitalInfo: {
      latlng: [45.42, -75.7],
    },
    postalCode: {
      format: '@#@ #@#',
      regex: '^([ABCEGHJKLMNPRSTVXY]\\d[ABCEGHJKLMNPRSTVWXYZ]) ?(\\d[ABCEGHJKLMNPRSTVWXYZ]\\d)$ ',
    },
  },
  {
    name: {
      common: 'Switzerland',
      official: 'Swiss Confederation',
      nativeName: {
        fra: {
          official: 'Confédération suisse',
          common: 'Suisse',
        },
        gsw: {
          official: 'Schweizerische Eidgenossenschaft',
          common: 'Schweiz',
        },
        ita: {
          official: 'Confederazione Svizzera',
          common: 'Svizzera',
        },
        roh: {
          official: 'Confederaziun svizra',
          common: 'Svizra',
        },
      },
    },
    tld: ['.ch'],
    cca2: 'CH',
    ccn3: '756',
    cca3: 'CHE',
    cioc: 'SUI',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      CHF: {
        name: 'Swiss franc',
        symbol: 'Fr.',
      },
    },
    idd: {
      root: '+4',
      suffixes: ['1'],
    },
    capital: ['Bern'],
    altSpellings: ['CH', 'Swiss Confederation', 'Schweiz', 'Suisse', 'Svizzera', 'Svizra'],
    region: 'Europe',
    subregion: 'Western Europe',
    languages: {
      fra: 'French',
      gsw: 'Swiss German',
      ita: 'Italian',
      roh: 'Romansh',
    },
    translations: {
      ara: {
        official: 'الاتحاد السويسري',
        common: 'سويسرا',
      },
      ces: {
        official: 'Švýcarská konfederace',
        common: 'Švýcarsko',
      },
      cym: {
        official: 'Swiss Confederation',
        common: 'Switzerland',
      },
      deu: {
        official: 'Schweizerische Eidgenossenschaft',
        common: 'Schweiz',
      },
      est: {
        official: 'Šveitsi Konföderatsioon',
        common: 'Šveits',
      },
      fin: {
        official: 'Sveitsin valaliitto',
        common: 'Sveitsi',
      },
      fra: {
        official: 'Confédération suisse',
        common: 'Suisse',
      },
      hrv: {
        official: 'švicarska Konfederacija',
        common: 'Švicarska',
      },
      hun: {
        official: 'Svájc',
        common: 'Svájc',
      },
      ita: {
        official: 'Confederazione svizzera',
        common: 'Svizzera',
      },
      jpn: {
        official: 'スイス連邦',
        common: 'スイス',
      },
      kor: {
        official: '스위스 연방',
        common: '스위스',
      },
      nld: {
        official: 'Zwitserse Confederatie',
        common: 'Zwitserland',
      },
      per: {
        official: 'کنفدراسیون سوئیس',
        common: 'سوئیس',
      },
      pol: {
        official: 'Konfederacja Szwajcarska',
        common: 'Szwajcaria',
      },
      por: {
        official: 'Confederação Suíça',
        common: 'Suíça',
      },
      rus: {
        official: 'Швейцарская Конфедерация',
        common: 'Швейцария',
      },
      slk: {
        official: 'Švajčiarska konfederácia',
        common: 'Švajčiarsko',
      },
      spa: {
        official: 'Confederación Suiza',
        common: 'Suiza',
      },
      swe: {
        official: 'Schweiziska edsförbundet',
        common: 'Schweiz',
      },
      urd: {
        official: 'سوئیس  متحدہ',
        common: 'سویٹذرلینڈ',
      },
      zho: {
        official: '瑞士联邦',
        common: '瑞士',
      },
    },
    latlng: [47.0, 8.0],
    landlocked: true,
    borders: ['AUT', 'FRA', 'ITA', 'LIE', 'DEU'],
    area: 41284.0,
    demonyms: {
      eng: {
        f: 'Swiss',
        m: 'Swiss',
      },
      fra: {
        f: 'Suisse',
        m: 'Suisse',
      },
    },
    flag: '\uD83C\uDDE8\uD83C\uDDED',
    maps: {
      googleMaps: 'https://goo.gl/maps/uVuZcXaxSx5jLyEC9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/51701',
    },
    population: 17500657,
    gini: {
      '2018': 33.1,
    },
    fifa: 'SUI',
    car: {
      signs: ['CH'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/ch.png',
      svg: 'https://flagcdn.com/ch.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ch.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ch.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [46.92, 7.47],
    },
    postalCode: {
      format: '####',
      regex: '^(\\d{4})$',
    },
  },
  {
    name: {
      common: 'Gabon',
      official: 'Gabonese Republic',
      nativeName: {
        fra: {
          official: 'République gabonaise',
          common: 'Gabon',
        },
      },
    },
    tld: ['.ga'],
    cca2: 'GA',
    ccn3: '266',
    cca3: 'GAB',
    cioc: 'GAB',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      XAF: {
        name: 'Central African CFA franc',
        symbol: 'Fr',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['41'],
    },
    capital: ['Libreville'],
    altSpellings: ['GA', 'Gabonese Republic', 'République Gabonaise'],
    region: 'Africa',
    subregion: 'Middle Africa',
    languages: {
      fra: 'French',
    },
    translations: {
      ara: {
        official: 'جمهورية الغابون',
        common: 'الغابون',
      },
      ces: {
        official: 'Gabonská republika',
        common: 'Gabon',
      },
      cym: {
        official: 'Gabonese Republic',
        common: 'Gabon',
      },
      deu: {
        official: 'Gabunische Republik',
        common: 'Gabun',
      },
      est: {
        official: 'Gaboni Vabariik',
        common: 'Gabon',
      },
      fin: {
        official: 'Gabonin tasavalta',
        common: 'Gabon',
      },
      fra: {
        official: 'République gabonaise',
        common: 'Gabon',
      },
      hrv: {
        official: 'Gabon Republika',
        common: 'Gabon',
      },
      hun: {
        official: 'Gaboni Köztársaság',
        common: 'Gabon',
      },
      ita: {
        official: 'Repubblica gabonese',
        common: 'Gabon',
      },
      jpn: {
        official: 'ガボン共和国',
        common: 'ガボン',
      },
      kor: {
        official: '가봉 공화국',
        common: '가봉',
      },
      nld: {
        official: 'Republiek Gabon',
        common: 'Gabon',
      },
      per: {
        official: 'جمهوری گابُن',
        common: 'گابن',
      },
      pol: {
        official: 'Republika Gabońska',
        common: 'Gabon',
      },
      por: {
        official: 'República do Gabão',
        common: 'Gabão',
      },
      rus: {
        official: 'Габона Республика',
        common: 'Габон',
      },
      slk: {
        official: 'Gabonská republika',
        common: 'Gabon',
      },
      spa: {
        official: 'República de Gabón',
        common: 'Gabón',
      },
      swe: {
        official: 'Republiken Gabon',
        common: 'Gabon',
      },
      urd: {
        official: 'جمہوریہ گیبون',
        common: 'گیبون',
      },
      zho: {
        official: '加蓬共和国',
        common: '加蓬',
      },
    },
    latlng: [-1.0, 11.75],
    landlocked: false,
    borders: ['CMR', 'COG', 'GNQ'],
    area: 267668.0,
    demonyms: {
      eng: {
        f: 'Gabonese',
        m: 'Gabonese',
      },
      fra: {
        f: 'Gabonaise',
        m: 'Gabonais',
      },
    },
    flag: '\uD83C\uDDEC\uD83C\uDDE6',
    maps: {
      googleMaps: 'https://www.openstreetmap.org/relation/192793',
      openStreetMaps: 'https://goo.gl/maps/vyRSkqw1H1fnq4ry6',
    },
    population: 2225728,
    gini: {
      '2017': 38.0,
    },
    fifa: 'GAB',
    car: {
      signs: ['G'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/ga.png',
      svg: 'https://flagcdn.com/ga.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ga.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ga.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [0.38, 9.45],
    },
  },
  {
    name: {
      common: 'Libya',
      official: 'State of Libya',
      nativeName: {
        ara: {
          official: 'الدولة ليبيا',
          common: '‏ليبيا',
        },
      },
    },
    tld: ['.ly'],
    cca2: 'LY',
    ccn3: '434',
    cca3: 'LBY',
    cioc: 'LBA',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      LYD: {
        name: 'Libyan dinar',
        symbol: 'ل.د',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['18'],
    },
    capital: ['Tripoli'],
    altSpellings: ['LY', 'State of Libya', 'Dawlat Libya'],
    region: 'Africa',
    subregion: 'Northern Africa',
    languages: {
      ara: 'Arabic',
    },
    translations: {
      ara: {
        official: 'دولة ليبيا',
        common: '‏ليبيا',
      },
      ces: {
        official: 'Stát Libye',
        common: 'Libye',
      },
      cym: {
        official: 'State of Libya',
        common: 'Libya',
      },
      deu: {
        official: 'Staat Libyen',
        common: 'Libyen',
      },
      est: {
        official: 'Liibüa',
        common: 'Liibüa',
      },
      fin: {
        official: 'Libyan valtio',
        common: 'Libya',
      },
      fra: {
        official: 'Grande République arabe libyenne populaire et socialiste',
        common: 'Libye',
      },
      hrv: {
        official: 'Država Libiji',
        common: 'Libija',
      },
      hun: {
        official: 'Líbia Állam',
        common: 'Líbia',
      },
      ita: {
        official: 'Stato della Libia',
        common: 'Libia',
      },
      jpn: {
        official: 'リビアの国家',
        common: 'リビア',
      },
      kor: {
        official: '리비아',
        common: '리비아',
      },
      nld: {
        official: 'Staat van Libië',
        common: 'Libië',
      },
      per: {
        official: 'دولت لیبی',
        common: 'لیبی',
      },
      pol: {
        official: 'Państwo Libia',
        common: 'Libia',
      },
      por: {
        official: 'Estado da Líbia',
        common: 'Líbia',
      },
      rus: {
        official: 'Государство Ливии',
        common: 'Ливия',
      },
      slk: {
        official: 'Líbya',
        common: 'Líbya',
      },
      spa: {
        official: 'Estado de Libia',
        common: 'Libia',
      },
      swe: {
        official: 'Staten Libyen',
        common: 'Libyen',
      },
      urd: {
        official: 'ریاستِ لیبیا',
        common: 'لیبیا',
      },
      zho: {
        official: '利比亚国',
        common: '利比亚',
      },
    },
    latlng: [25.0, 17.0],
    landlocked: false,
    borders: ['DZA', 'TCD', 'EGY', 'NER', 'SDN', 'TUN'],
    area: 1759540.0,
    demonyms: {
      eng: {
        f: 'Libyan',
        m: 'Libyan',
      },
      fra: {
        f: 'Libyenne',
        m: 'Libyen',
      },
    },
    flag: '\uD83C\uDDF1\uD83C\uDDFE',
    maps: {
      googleMaps: 'https://goo.gl/maps/eLgGnaQWcJEdYRMy5',
      openStreetMaps: 'openstreetmap.org/relation/192758',
    },
    population: 6871287,
    fifa: 'LBY',
    car: {
      signs: ['LAR'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/ly.png',
      svg: 'https://flagcdn.com/ly.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ly.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ly.svg',
    },
    startOfWeek: 'sunday',
    capitalInfo: {
      latlng: [32.88, 13.17],
    },
  },
  {
    name: {
      common: 'Monaco',
      official: 'Principality of Monaco',
      nativeName: {
        fra: {
          official: 'Principauté de Monaco',
          common: 'Monaco',
        },
      },
    },
    tld: ['.mc'],
    cca2: 'MC',
    ccn3: '492',
    cca3: 'MCO',
    cioc: 'MON',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['77'],
    },
    capital: ['Monaco'],
    altSpellings: ['MC', 'Principality of Monaco', 'Principauté de Monaco'],
    region: 'Europe',
    subregion: 'Western Europe',
    languages: {
      fra: 'French',
    },
    translations: {
      ara: {
        official: 'إمارة موناكو',
        common: 'موناكو',
      },
      ces: {
        official: 'Monacké knížectví',
        common: 'Monako',
      },
      cym: {
        official: 'Principality of Monaco',
        common: 'Monaco',
      },
      deu: {
        official: 'Fürstentum Monaco',
        common: 'Monaco',
      },
      est: {
        official: 'Monaco Vürstiriik',
        common: 'Monaco',
      },
      fin: {
        official: 'Monacon ruhtinaskunta',
        common: 'Monaco',
      },
      fra: {
        official: 'Principauté de Monaco',
        common: 'Monaco',
      },
      hrv: {
        official: 'Kneževina Monako',
        common: 'Monako',
      },
      hun: {
        official: 'Monacói Hercegség',
        common: 'Monaco',
      },
      ita: {
        official: 'Principato di Monaco',
        common: 'Principato di Monaco',
      },
      jpn: {
        official: 'モナコ公国',
        common: 'モナコ',
      },
      kor: {
        official: '모나코 공국',
        common: '모나코',
      },
      nld: {
        official: 'Vorstendom Monaco',
        common: 'Monaco',
      },
      per: {
        official: 'شاهزاده‌نشین موناکو',
        common: 'موناکو',
      },
      pol: {
        official: 'Księstwo Monako',
        common: 'Monako',
      },
      por: {
        official: 'Principado do Mónaco',
        common: 'Mónaco',
      },
      rus: {
        official: 'Княжество Монако',
        common: 'Монако',
      },
      slk: {
        official: 'Monacké kniežatstvo',
        common: 'Monako',
      },
      spa: {
        official: 'Principado de Mónaco',
        common: 'Mónaco',
      },
      swe: {
        official: 'Furstendömet Monaco',
        common: 'Monaco',
      },
      urd: {
        official: 'جمہوریہ مناکو',
        common: 'موناکو',
      },
      zho: {
        official: '摩纳哥公国',
        common: '摩纳哥',
      },
    },
    latlng: [43.73333333, 7.4],
    landlocked: false,
    borders: ['FRA'],
    area: 2.02,
    demonyms: {
      eng: {
        f: 'Monegasque',
        m: 'Monegasque',
      },
      fra: {
        f: 'Monégasque',
        m: 'Monégasque',
      },
    },
    flag: '\uD83C\uDDF2\uD83C\uDDE8',
    maps: {
      googleMaps: 'https://goo.gl/maps/DGpndDot28bYdXYn7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/1124039',
    },
    population: 39244,
    car: {
      signs: ['MC'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/mc.png',
      svg: 'https://flagcdn.com/mc.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/mc.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/mc.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [43.73, 7.42],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'United Kingdom',
      official: 'United Kingdom of Great Britain and Northern Ireland',
      nativeName: {
        eng: {
          official: 'United Kingdom of Great Britain and Northern Ireland',
          common: 'United Kingdom',
        },
      },
    },
    tld: ['.uk'],
    cca2: 'GB',
    ccn3: '826',
    cca3: 'GBR',
    cioc: 'GBR',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      GBP: {
        name: 'British pound',
        symbol: '£',
      },
    },
    idd: {
      root: '+4',
      suffixes: ['4'],
    },
    capital: ['London'],
    altSpellings: ['GB', 'UK', 'Great Britain'],
    region: 'Europe',
    subregion: 'Northern Europe',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'المملكة المتحدة لبريطانيا العظمى وايرلندا الشمالية',
        common: 'المملكة المتحدة',
      },
      ces: {
        official: 'Spojené království Velké Británie a Severního Irska',
        common: 'Spojené království',
      },
      cym: {
        official: 'United Kingdom of Great Britain and Northern Ireland',
        common: 'United Kingdom',
      },
      deu: {
        official: 'Vereinigtes Königreich Großbritannien und Nordirland',
        common: 'Vereinigtes Königreich',
      },
      est: {
        official: 'Suurbritannia ja Põhja-Iiri Ühendkuningriik',
        common: 'Suurbritannia',
      },
      fin: {
        official: 'Ison-Britannian ja Pohjois-Irlannin yhdistynyt kuningaskunta',
        common: 'Yhdistynyt kuningaskunta',
      },
      fra: {
        official: "Royaume-Uni de Grande-Bretagne et d'Irlande du Nord",
        common: 'Royaume-Uni',
      },
      hrv: {
        official: 'Ujedinjeno Kraljevstvo Velike Britanije i Sjeverne Irske',
        common: 'Ujedinjeno Kraljevstvo',
      },
      hun: {
        official: 'Nagy-Britannia és Észak-Írország Egyesült Királysága',
        common: 'Egyesült Királyság',
      },
      ita: {
        official: 'Regno Unito di Gran Bretagna e Irlanda del Nord',
        common: 'Regno Unito',
      },
      jpn: {
        official: 'グレート·ブリテンおよび北アイルランド連合王国',
        common: 'イギリス',
      },
      kor: {
        official: '그레이트브리튼 북아일랜드 연합 왕국',
        common: '영국',
      },
      nld: {
        official: 'Verenigd Koninkrijk van Groot-Brittannië en Noord-Ierland',
        common: 'Verenigd Koninkrijk',
      },
      per: {
        official: 'پادشاهی متحد بریتانیای کبیر و ایرلند شمالی',
        common: 'انگلیس',
      },
      pol: {
        official: 'Zjednoczone Królestwo Wielkiej Brytanii i Irlandii Północnej',
        common: 'Zjednoczone Krłlestwo',
      },
      por: {
        official: 'Reino Unido da Grã-Bretanha e Irlanda do Norte',
        common: 'Reino Unido',
      },
      rus: {
        official: 'Соединенное Королевство Великобритании и Северной Ирландии',
        common: 'Великобритания',
      },
      slk: {
        official: 'Spojené kráľovstvo Veľkej Británie a SevernéhoÌrska',
        common: 'Veľká Británia (Spojené kráľovstvo)',
      },
      spa: {
        official: 'Reino Unido de Gran Bretaña e Irlanda del Norte',
        common: 'Reino Unido',
      },
      swe: {
        official: 'Förenade konungariket Storbritannien och Nordirland',
        common: 'Storbritannien',
      },
      urd: {
        official: 'مملکتِ متحدہ برطانیہ عظمی و شمالی آئرلینڈ',
        common: 'مملکتِ متحدہ',
      },
      zho: {
        official: '大不列颠及北爱尔兰联合王国',
        common: '英国',
      },
    },
    latlng: [54.0, -2.0],
    landlocked: false,
    borders: ['IRL'],
    area: 242900.0,
    demonyms: {
      eng: {
        f: 'British',
        m: 'British',
      },
      fra: {
        f: 'Britannique',
        m: 'Britannique',
      },
    },
    flag: '\uD83C\uDDEC\uD83C\uDDE7',
    maps: {
      googleMaps: 'https://goo.gl/maps/FoDtc3UKMkFsXAjHA',
      openStreetMaps: 'https://www.openstreetmap.org/relation/62149',
    },
    population: 67215293,
    gini: {
      '2017': 35.1,
    },
    car: {
      signs: ['GB'],
      side: 'left',
    },
    timezones: [
      'UTC-08:00',
      'UTC-05:00',
      'UTC-04:00',
      'UTC-03:00',
      'UTC-02:00',
      'UTC',
      'UTC+01:00',
      'UTC+02:00',
      'UTC+06:00',
    ],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/gb.png',
      svg: 'https://flagcdn.com/gb.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/gb.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/gb.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [51.5, -0.08],
    },
    postalCode: {
      format: '@# #@@|@## #@@|@@# #@@|@@## #@@|@#@ #@@|@@#@ #@@|GIR0AA',
      regex:
        '^(([A-Z]\\d{2}[A-Z]{2})|([A-Z]\\d{3}[A-Z]{2})|([A-Z]{2}\\d{2}[A-Z]{2})|([A-Z]{2}\\d{3}[A-Z]{2})|([A-Z]\\d[A-Z]\\d[A-Z]{2})|([A-Z]{2}\\d[A-Z]\\d[A-Z]{2})|(GIR0AA))$',
    },
  },
  {
    name: {
      common: 'Rwanda',
      official: 'Republic of Rwanda',
      nativeName: {
        eng: {
          official: 'Republic of Rwanda',
          common: 'Rwanda',
        },
        fra: {
          official: 'République rwandaise',
          common: 'Rwanda',
        },
        kin: {
          official: "Repubulika y'u Rwanda",
          common: 'Rwanda',
        },
      },
    },
    tld: ['.rw'],
    cca2: 'RW',
    ccn3: '646',
    cca3: 'RWA',
    cioc: 'RWA',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      RWF: {
        name: 'Rwandan franc',
        symbol: 'Fr',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['50'],
    },
    capital: ['Kigali'],
    altSpellings: ['RW', 'Republic of Rwanda', "Repubulika y'u Rwanda", 'République du Rwanda'],
    region: 'Africa',
    subregion: 'Eastern Africa',
    languages: {
      eng: 'English',
      fra: 'French',
      kin: 'Kinyarwanda',
    },
    translations: {
      ara: {
        official: 'جمهورية رواندا',
        common: 'رواندا',
      },
      ces: {
        official: 'Rwandská republika',
        common: 'Rwanda',
      },
      cym: {
        official: 'Republic of Rwanda',
        common: 'Rwanda',
      },
      deu: {
        official: 'Republik Ruanda',
        common: 'Ruanda',
      },
      est: {
        official: 'Rwanda Vabariik',
        common: 'Rwanda',
      },
      fin: {
        official: 'Ruandan tasavalta',
        common: 'Ruanda',
      },
      fra: {
        official: 'République rwandaise',
        common: 'Rwanda',
      },
      hrv: {
        official: 'Republika Ruandi',
        common: 'Ruanda',
      },
      hun: {
        official: 'Ruandai Köztársaság',
        common: 'Ruanda',
      },
      ita: {
        official: 'Repubblica del Ruanda',
        common: 'Ruanda',
      },
      jpn: {
        official: 'ルワンダ共和国',
        common: 'ルワンダ',
      },
      kor: {
        official: '르완다 공화국',
        common: '르완다',
      },
      nld: {
        official: 'Republiek Rwanda',
        common: 'Rwanda',
      },
      per: {
        official: 'جمهوری رواندا',
        common: 'رواندا',
      },
      pol: {
        official: 'Republika Rwandy',
        common: 'Rwanda',
      },
      por: {
        official: 'República do Ruanda',
        common: 'Ruanda',
      },
      rus: {
        official: 'Республика Руанда',
        common: 'Руанда',
      },
      slk: {
        official: 'Rwandská republika',
        common: 'Rwanda',
      },
      spa: {
        official: 'República de Rwanda',
        common: 'Ruanda',
      },
      swe: {
        official: 'Republiken Rwanda',
        common: 'Rwanda',
      },
      urd: {
        official: 'جمہوریہ روانڈا',
        common: 'روانڈا',
      },
      zho: {
        official: '卢旺达共和国',
        common: '卢旺达',
      },
    },
    latlng: [-2.0, 30.0],
    landlocked: true,
    borders: ['BDI', 'COD', 'TZA', 'UGA'],
    area: 26338.0,
    demonyms: {
      eng: {
        f: 'Rwandan',
        m: 'Rwandan',
      },
      fra: {
        f: 'Rwandaise',
        m: 'Rwandais',
      },
    },
    flag: '\uD83C\uDDF7\uD83C\uDDFC',
    maps: {
      googleMaps: 'https://goo.gl/maps/j5xb5r7CLqjYbyP86',
      openStreetMaps: 'https://www.openstreetmap.org/relation/171496',
    },
    population: 12952209,
    gini: {
      '2016': 43.7,
    },
    fifa: 'RWA',
    car: {
      signs: ['RWA'],
      side: 'right',
    },
    timezones: ['UTC+02:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/rw.png',
      svg: 'https://flagcdn.com/rw.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/rw.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/rw.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-1.95, 30.05],
    },
  },
  {
    name: {
      common: 'Bhutan',
      official: 'Kingdom of Bhutan',
      nativeName: {
        dzo: {
          official: 'འབྲུག་རྒྱལ་ཁབ་',
          common: 'འབྲུག་ཡུལ་',
        },
      },
    },
    tld: ['.bt'],
    cca2: 'BT',
    ccn3: '064',
    cca3: 'BTN',
    cioc: 'BHU',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      BTN: {
        name: 'Bhutanese ngultrum',
        symbol: 'Nu.',
      },
      INR: {
        name: 'Indian rupee',
        symbol: '₹',
      },
    },
    idd: {
      root: '+9',
      suffixes: ['75'],
    },
    capital: ['Thimphu'],
    altSpellings: ['BT', 'Kingdom of Bhutan'],
    region: 'Asia',
    subregion: 'Southern Asia',
    languages: {
      dzo: 'Dzongkha',
    },
    translations: {
      ara: {
        official: 'مملكة بوتان',
        common: 'بوتان',
      },
      ces: {
        official: 'Bhútánské království',
        common: 'Bhútán',
      },
      cym: {
        official: 'Teyrnas Bhwtan',
        common: 'Bhwtan',
      },
      deu: {
        official: 'Königreich Bhutan',
        common: 'Bhutan',
      },
      est: {
        official: 'Bhutani Kuningriik',
        common: 'Bhutan',
      },
      fin: {
        official: 'Bhutanin kuningaskunta',
        common: 'Bhutan',
      },
      fra: {
        official: 'Royaume du Bhoutan',
        common: 'Bhoutan',
      },
      hrv: {
        official: 'Kraljevina Butan',
        common: 'Butan',
      },
      hun: {
        official: 'Bhutáni Királyság',
        common: 'Bhután',
      },
      ita: {
        official: 'Regno del Bhutan',
        common: 'Bhutan',
      },
      jpn: {
        official: 'ブータン王国',
        common: 'ブータン',
      },
      kor: {
        official: '부탄 왕국',
        common: '부탄',
      },
      nld: {
        official: 'Koninkrijk Bhutan',
        common: 'Bhutan',
      },
      per: {
        official: 'پادشاهی بوتان',
        common: 'بوتان',
      },
      pol: {
        official: 'Bhutan',
        common: 'Bhutan',
      },
      por: {
        official: 'Reino do Butão',
        common: 'Butão',
      },
      rus: {
        official: 'Королевство Бутан',
        common: 'Бутан',
      },
      slk: {
        official: 'Bhutánske krâľovstvo',
        common: 'Bhután',
      },
      spa: {
        official: 'Reino de Bután',
        common: 'Bután',
      },
      swe: {
        official: 'Konungariket Bhutan',
        common: 'Bhutan',
      },
      urd: {
        official: 'سلطنت بھوٹان',
        common: 'بھوٹان',
      },
      zho: {
        official: '不丹王国',
        common: '不丹',
      },
    },
    latlng: [27.5, 90.5],
    landlocked: true,
    borders: ['CHN', 'IND'],
    area: 38394.0,
    demonyms: {
      eng: {
        f: 'Bhutanese',
        m: 'Bhutanese',
      },
      fra: {
        f: 'Bhoutanaise',
        m: 'Bhoutanais',
      },
    },
    flag: '\uD83C\uDDE7\uD83C\uDDF9',
    maps: {
      googleMaps: 'https://goo.gl/maps/VEfXXBftTFLUpNgp8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/184629',
    },
    population: 771612,
    gini: {
      '2017': 37.4,
    },
    fifa: 'BHU',
    car: {
      signs: ['BHT'],
      side: 'left',
    },
    timezones: ['UTC+06:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/bt.png',
      svg: 'https://flagcdn.com/bt.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/bt.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/bt.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [27.47, 89.63],
    },
  },
  {
    name: {
      common: 'Saint Barthélemy',
      official: 'Collectivity of Saint Barthélemy',
      nativeName: {
        fra: {
          official: 'Collectivité de Saint-Barthélemy',
          common: 'Saint-Barthélemy',
        },
      },
    },
    tld: ['.bl'],
    cca2: 'BL',
    ccn3: '652',
    cca3: 'BLM',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    idd: {
      root: '+5',
      suffixes: ['90'],
    },
    capital: ['Gustavia'],
    altSpellings: ['BL', 'St. Barthelemy', 'Collectivity of Saint Barthélemy', 'Collectivité de Saint-Barthélemy'],
    region: 'Americas',
    subregion: 'Caribbean',
    languages: {
      fra: 'French',
    },
    translations: {
      ara: {
        official: 'التجمع الإقليمي لسانت بارتيليمي',
        common: 'سان بارتليمي',
      },
      ces: {
        official: 'Svatý Bartoloměj',
        common: 'Svatý Bartoloměj',
      },
      cym: {
        official: 'Collectivity of Saint Barthélemy',
        common: 'Saint Barthélemy',
      },
      deu: {
        official: 'Gebietskörperschaft Saint-Barthélemy',
        common: 'Saint-Barthélemy',
      },
      est: {
        official: 'Saint-Barthélemy territoriaalühendus',
        common: 'Saint-Barthélemy',
      },
      fin: {
        official: 'Saint-Barthélemyn yhteisö',
        common: 'Saint-Barthélemy',
      },
      fra: {
        official: 'Collectivité de Saint-Barthélemy',
        common: 'Saint-Barthélemy',
      },
      hrv: {
        official: 'Kolektivnost sv Barthélemy',
        common: 'Saint Barthélemy',
      },
      hun: {
        official: 'Saint-Barthélemy',
        common: 'Saint-Barthélemy',
      },
      ita: {
        official: 'Collettività di Saint Barthélemy',
        common: 'Antille Francesi',
      },
      jpn: {
        official: 'サン·バルテルミー島の集合体',
        common: 'サン・バルテルミー',
      },
      kor: {
        official: '생바르텔레미',
        common: '생바르텔레미',
      },
      nld: {
        official: 'Gemeenschap Saint Barthélemy',
        common: 'Saint Barthélemy',
      },
      per: {
        official: 'سن بارتلمی',
        common: 'سن بارتلمی',
      },
      pol: {
        official: 'Saint-Barthélemy',
        common: 'Saint-Barthélemy',
      },
      por: {
        official: 'Coletividade de Saint Barthélemy',
        common: 'São Bartolomeu',
      },
      rus: {
        official: 'Коллективность Санкт -Бартельми',
        common: 'Сен-Бартелеми',
      },
      slk: {
        official: 'Svätý Bartolomej',
        common: 'Svätý Bartolomej',
      },
      spa: {
        official: 'Colectividad de San Barthélemy',
        common: 'San Bartolomé',
      },
      swe: {
        official: 'Saint-Barthélemy',
        common: 'Saint-Barthélemy',
      },
      urd: {
        official: 'سینٹ بارتھیملے',
        common: 'سینٹ بارتھیملے',
      },
      zho: {
        official: '圣巴泰勒米集体',
        common: '圣巴泰勒米',
      },
    },
    latlng: [18.5, -63.41666666],
    landlocked: false,
    area: 21.0,
    demonyms: {
      eng: {
        f: 'Saint Barthélemy Islander',
        m: 'Saint Barthélemy Islander',
      },
      fra: {
        f: 'Barthéloméenne',
        m: 'Barthéloméen',
      },
    },
    flag: '\uD83C\uDDE7\uD83C\uDDF1',
    maps: {
      googleMaps: 'https://goo.gl/maps/Mc7GqH466S7AAk297',
      openStreetMaps: 'https://www.openstreetmap.org/relation/7552779',
    },
    population: 4255,
    car: {
      signs: ['F'],
      side: 'right',
    },
    timezones: ['UTC-04:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/bl.png',
      svg: 'https://flagcdn.com/bl.svg',
    },
    coatOfArms: {},
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [17.88, -62.85],
    },
    postalCode: {
      format: '### ###',
    },
  },
  {
    name: {
      common: 'Botswana',
      official: 'Republic of Botswana',
      nativeName: {
        eng: {
          official: 'Republic of Botswana',
          common: 'Botswana',
        },
        tsn: {
          official: 'Lefatshe la Botswana',
          common: 'Botswana',
        },
      },
    },
    tld: ['.bw'],
    cca2: 'BW',
    ccn3: '072',
    cca3: 'BWA',
    cioc: 'BOT',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      BWP: {
        name: 'Botswana pula',
        symbol: 'P',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['67'],
    },
    capital: ['Gaborone'],
    altSpellings: ['BW', 'Republic of Botswana', 'Lefatshe la Botswana'],
    region: 'Africa',
    subregion: 'Southern Africa',
    languages: {
      eng: 'English',
      tsn: 'Tswana',
    },
    translations: {
      ara: {
        official: 'جمهورية بوتسوانا',
        common: 'بوتسوانا',
      },
      ces: {
        official: 'Botswanská republika',
        common: 'Botswana',
      },
      cym: {
        official: 'Republic of Botswana',
        common: 'Botswana',
      },
      deu: {
        official: 'Republik Botsuana',
        common: 'Botswana',
      },
      est: {
        official: 'Botswana Vabariik',
        common: 'Botswana',
      },
      fin: {
        official: 'Botswanan tasavalta',
        common: 'Botswana',
      },
      fra: {
        official: 'République du Botswana',
        common: 'Botswana',
      },
      hrv: {
        official: 'Republika Bocvana',
        common: 'Bocvana',
      },
      hun: {
        official: 'Botswanai Köztársaság',
        common: 'Botswana',
      },
      ita: {
        official: 'Repubblica del Botswana',
        common: 'Botswana',
      },
      jpn: {
        official: 'ボツワナ共和国',
        common: 'ボツワナ',
      },
      kor: {
        official: '보츠와나 공화국',
        common: '보츠와나',
      },
      nld: {
        official: 'Republiek Botswana',
        common: 'Botswana',
      },
      per: {
        official: 'جمهوری بوتسوانا',
        common: 'بوتسوانا',
      },
      pol: {
        official: 'Republika Botswany',
        common: 'Botswana',
      },
      por: {
        official: 'República do Botswana',
        common: 'Botswana',
      },
      rus: {
        official: 'Республика Ботсвана',
        common: 'Ботсвана',
      },
      slk: {
        official: 'Botswanská republika',
        common: 'Botswana',
      },
      spa: {
        official: 'República de Botswana',
        common: 'Botswana',
      },
      swe: {
        official: 'Republiken Botswana',
        common: 'Botswana',
      },
      urd: {
        official: 'جمہوریہ بوٹسوانا',
        common: 'بوٹسوانا',
      },
      zho: {
        official: '博茨瓦纳共和国',
        common: '博茨瓦纳',
      },
    },
    latlng: [-22.0, 24.0],
    landlocked: true,
    borders: ['NAM', 'ZAF', 'ZMB', 'ZWE'],
    area: 582000.0,
    demonyms: {
      eng: {
        f: 'Motswana',
        m: 'Motswana',
      },
      fra: {
        f: 'Botswanaise',
        m: 'Botswanais',
      },
    },
    flag: '\uD83C\uDDE7\uD83C\uDDFC',
    maps: {
      googleMaps: 'https://goo.gl/maps/E364KeLy6N4JwxwQ8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/1889339',
    },
    population: 2351625,
    gini: {
      '2015': 53.3,
    },
    fifa: 'BOT',
    car: {
      signs: ['BW'],
      side: 'left',
    },
    timezones: ['UTC+02:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/bw.png',
      svg: 'https://flagcdn.com/bw.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/bw.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/bw.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-24.63, 25.9],
    },
  },
  {
    name: {
      common: 'India',
      official: 'Republic of India',
      nativeName: {
        eng: {
          official: 'Republic of India',
          common: 'India',
        },
        hin: {
          official: 'भारत गणराज्य',
          common: 'भारत',
        },
        tam: {
          official: 'இந்தியக் குடியரசு',
          common: 'இந்தியா',
        },
      },
    },
    tld: ['.in'],
    cca2: 'IN',
    ccn3: '356',
    cca3: 'IND',
    cioc: 'IND',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      INR: {
        name: 'Indian rupee',
        symbol: '₹',
      },
    },
    idd: {
      root: '+9',
      suffixes: ['1'],
    },
    capital: ['New Delhi'],
    altSpellings: ['IN', 'Bhārat', 'Republic of India', 'Bharat Ganrajya', 'இந்தியா'],
    region: 'Asia',
    subregion: 'Southern Asia',
    languages: {
      eng: 'English',
      hin: 'Hindi',
      tam: 'Tamil',
    },
    translations: {
      ara: {
        official: 'جمهورية الهند',
        common: 'الهند',
      },
      ces: {
        official: 'Indická republika',
        common: 'Indie',
      },
      cym: {
        official: 'Republic of India',
        common: 'India',
      },
      deu: {
        official: 'Republik Indien',
        common: 'Indien',
      },
      est: {
        official: 'India Vabariik',
        common: 'India',
      },
      fin: {
        official: 'Intian tasavalta',
        common: 'Intia',
      },
      fra: {
        official: "République de l'Inde",
        common: 'Inde',
      },
      hrv: {
        official: 'Republika Indija',
        common: 'Indija',
      },
      hun: {
        official: 'Indiai Köztársaság',
        common: 'India',
      },
      ita: {
        official: "Repubblica dell'India",
        common: 'India',
      },
      jpn: {
        official: 'インド共和国',
        common: 'インド',
      },
      kor: {
        official: '인도 공화국',
        common: '인도',
      },
      nld: {
        official: 'Republiek India',
        common: 'India',
      },
      per: {
        official: 'جمهوری هندوستان',
        common: 'هند',
      },
      pol: {
        official: 'Republika Indii',
        common: 'Indie',
      },
      por: {
        official: 'República da Índia',
        common: 'Índia',
      },
      rus: {
        official: 'Республика Индия',
        common: 'Индия',
      },
      slk: {
        official: 'Indická republika',
        common: 'India',
      },
      spa: {
        official: 'República de la India',
        common: 'India',
      },
      swe: {
        official: 'Republiken Indien',
        common: 'Indien',
      },
      urd: {
        official: 'جمہوریہ بھارت',
        common: 'بھارت',
      },
      zho: {
        official: '印度共和国',
        common: '印度',
      },
    },
    latlng: [20.0, 77.0],
    landlocked: false,
    borders: ['BGD', 'BTN', 'MMR', 'CHN', 'NPL', 'PAK'],
    area: 3287590.0,
    demonyms: {
      eng: {
        f: 'Indian',
        m: 'Indian',
      },
      fra: {
        f: 'Indienne',
        m: 'Indien',
      },
    },
    flag: '\uD83C\uDDEE\uD83C\uDDF3',
    maps: {
      googleMaps: 'https://goo.gl/maps/WSk3fLwG4vtPQetp7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/304716',
    },
    population: 1380004385,
    gini: {
      '2011': 35.7,
    },
    fifa: 'IND',
    car: {
      signs: ['IND'],
      side: 'left',
    },
    timezones: ['UTC+05:30'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/in.png',
      svg: 'https://flagcdn.com/in.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/in.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/in.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [28.6, 77.2],
    },
    postalCode: {
      format: '######',
      regex: '^(\\d{6})$',
    },
  },
  {
    name: {
      common: 'New Zealand',
      official: 'New Zealand',
      nativeName: {
        eng: {
          official: 'New Zealand',
          common: 'New Zealand',
        },
        mri: {
          official: 'Aotearoa',
          common: 'Aotearoa',
        },
        nzs: {
          official: 'New Zealand',
          common: 'New Zealand',
        },
      },
    },
    tld: ['.nz'],
    cca2: 'NZ',
    ccn3: '554',
    cca3: 'NZL',
    cioc: 'NZL',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      NZD: {
        name: 'New Zealand dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+6',
      suffixes: ['4'],
    },
    capital: ['Wellington'],
    altSpellings: ['NZ', 'Aotearoa'],
    region: 'Oceania',
    subregion: 'Australia and New Zealand',
    languages: {
      eng: 'English',
      mri: 'Māori',
      nzs: 'New Zealand Sign Language',
    },
    translations: {
      ara: {
        official: 'نيوزيلندا',
        common: 'نيوزيلندا',
      },
      ces: {
        official: 'Nový Zéland',
        common: 'Nový Zéland',
      },
      cym: {
        official: 'New Zealand',
        common: 'New Zealand',
      },
      deu: {
        official: 'Neuseeland',
        common: 'Neuseeland',
      },
      est: {
        official: 'Uus-Meremaa',
        common: 'Uus-Meremaa',
      },
      fin: {
        official: 'Uusi-Seelanti',
        common: 'Uusi-Seelanti',
      },
      fra: {
        official: 'Nouvelle-Zélande',
        common: 'Nouvelle-Zélande',
      },
      hrv: {
        official: 'Novi Zeland',
        common: 'Novi Zeland',
      },
      hun: {
        official: 'Új-Zéland',
        common: 'Új-Zéland',
      },
      ita: {
        official: 'Nuova Zelanda',
        common: 'Nuova Zelanda',
      },
      jpn: {
        official: 'ニュージーランド',
        common: 'ニュージーランド',
      },
      kor: {
        official: '뉴질랜드',
        common: '뉴질랜드',
      },
      nld: {
        official: 'Nieuw Zeeland',
        common: 'Nieuw-Zeeland',
      },
      per: {
        official: 'نیوزیلند',
        common: 'نیوزیلند',
      },
      pol: {
        official: 'Nowa Zelandia',
        common: 'Nowa Zelandia',
      },
      por: {
        official: 'nova Zelândia',
        common: 'Nova Zelândia',
      },
      rus: {
        official: 'Новая Зеландия',
        common: 'Новая Зеландия',
      },
      slk: {
        official: 'Nový Zéland',
        common: 'Nový Zéland',
      },
      spa: {
        official: 'nueva Zelanda',
        common: 'Nueva Zelanda',
      },
      swe: {
        official: 'Nya Zeeland',
        common: 'Nya Zeeland',
      },
      urd: {
        official: 'نیوزی لینڈ',
        common: 'نیوزی لینڈ',
      },
      zho: {
        official: '新西兰',
        common: '新西兰',
      },
    },
    latlng: [-41.0, 174.0],
    landlocked: false,
    area: 270467.0,
    demonyms: {
      eng: {
        f: 'New Zealander',
        m: 'New Zealander',
      },
      fra: {
        f: 'Neo-Zélandaise',
        m: 'Neo-Zélandais',
      },
    },
    flag: '\uD83C\uDDF3\uD83C\uDDFF',
    maps: {
      googleMaps: 'https://goo.gl/maps/xXiDQo65dwdpw9iu8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/556706#map=5/-46.710/172.046',
    },
    population: 5084300,
    fifa: 'NZL',
    car: {
      signs: ['NZ'],
      side: 'left',
    },
    timezones: ['UTC-11:00', 'UTC-10:00', 'UTC+12:00', 'UTC+12:45', 'UTC+13:00'],
    continents: ['Oceania'],
    flags: {
      png: 'https://flagcdn.com/w320/nz.png',
      svg: 'https://flagcdn.com/nz.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/nz.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/nz.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-41.3, 174.78],
    },
    postalCode: {
      format: '####',
      regex: '^(\\d{4})$',
    },
  },
  {
    name: {
      common: 'Ireland',
      official: 'Republic of Ireland',
      nativeName: {
        eng: {
          official: 'Republic of Ireland',
          common: 'Ireland',
        },
        gle: {
          official: 'Poblacht na hÉireann',
          common: 'Éire',
        },
      },
    },
    tld: ['.ie'],
    cca2: 'IE',
    ccn3: '372',
    cca3: 'IRL',
    cioc: 'IRL',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['53'],
    },
    capital: ['Dublin'],
    altSpellings: ['IE', 'Éire', 'Republic of Ireland', 'Poblacht na hÉireann'],
    region: 'Europe',
    subregion: 'Northern Europe',
    languages: {
      eng: 'English',
      gle: 'Irish',
    },
    translations: {
      ara: {
        official: 'جمهورية أيرلندا',
        common: 'أيرلندا',
      },
      ces: {
        official: 'Irsko',
        common: 'Irsko',
      },
      cym: {
        official: 'Republic of Ireland',
        common: 'Ireland',
      },
      deu: {
        official: 'Republik Irland',
        common: 'Irland',
      },
      est: {
        official: 'Iirimaa',
        common: 'Iirimaa',
      },
      fin: {
        official: 'Irlannin tasavalta',
        common: 'Irlanti',
      },
      fra: {
        official: "République d'Irlande",
        common: 'Irlande',
      },
      hrv: {
        official: 'Republika Irska',
        common: 'Irska',
      },
      hun: {
        official: 'Ír Köztársaság',
        common: 'Írország',
      },
      ita: {
        official: "Repubblica d'Irlanda",
        common: 'Irlanda',
      },
      jpn: {
        official: 'アイルランド共和国',
        common: 'アイルランド',
      },
      kor: {
        official: '아일랜드 공화국',
        common: '아일랜드',
      },
      nld: {
        official: 'Republic of Ireland',
        common: 'Ierland',
      },
      per: {
        official: 'ایرلند',
        common: 'ایرلند',
      },
      pol: {
        official: 'Republika Irlandii',
        common: 'Irlandia',
      },
      por: {
        official: 'República da Irlanda',
        common: 'Irlanda',
      },
      rus: {
        official: 'Ирландия',
        common: 'Ирландия',
      },
      slk: {
        official: 'Írska republika',
        common: 'Írsko',
      },
      spa: {
        official: 'República de Irlanda',
        common: 'Irlanda',
      },
      swe: {
        official: 'Irland',
        common: 'Irland',
      },
      urd: {
        official: 'جمہوریہ جزیرہ آئرلینڈ',
        common: 'جزیرہ آئرلینڈ',
      },
      zho: {
        official: '爱尔兰共和国',
        common: '爱尔兰',
      },
    },
    latlng: [53.0, -8.0],
    landlocked: false,
    borders: ['GBR'],
    area: 70273.0,
    demonyms: {
      eng: {
        f: 'Irish',
        m: 'Irish',
      },
      fra: {
        f: 'Irlandaise',
        m: 'Irlandais',
      },
    },
    flag: '\uD83C\uDDEE\uD83C\uDDEA',
    maps: {
      googleMaps: 'https://goo.gl/maps/hxd1BKxgpchStzQC6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/62273',
    },
    population: 4994724,
    gini: {
      '2017': 31.4,
    },
    fifa: 'IRL',
    car: {
      signs: ['IRL'],
      side: 'left',
    },
    timezones: ['UTC'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/ie.png',
      svg: 'https://flagcdn.com/ie.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ie.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ie.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [53.32, -6.23],
    },
  },
  {
    name: {
      common: 'Macau',
      official: "Macao Special Administrative Region of the People's Republic of China",
      nativeName: {
        por: {
          official: 'Região Administrativa Especial de Macau da República Popular da China',
          common: 'Macau',
        },
        zho: {
          official: '中华人民共和国澳门特别行政区',
          common: '澳门',
        },
      },
    },
    tld: ['.mo'],
    cca2: 'MO',
    ccn3: '446',
    cca3: 'MAC',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      MOP: {
        name: 'Macanese pataca',
        symbol: 'P',
      },
    },
    idd: {
      root: '+8',
      suffixes: ['53'],
    },
    altSpellings: [
      'MO',
      '澳门',
      'Macao',
      "Macao Special Administrative Region of the People's Republic of China",
      '中華人民共和國澳門特別行政區',
      'Região Administrativa Especial de Macau da República Popular da China',
    ],
    region: 'Asia',
    subregion: 'Eastern Asia',
    languages: {
      por: 'Portuguese',
      zho: 'Chinese',
    },
    translations: {
      ara: {
        official: 'منطقة ماكاو الإدارية التابعة لجمهورية الصين الشعبية',
        common: 'ماكاو',
      },
      ces: {
        official: 'Zvláštní správní oblast Čínské lidové republiky Macao',
        common: 'Macao',
      },
      cym: {
        official: "Macao Special Administrative Region of the People's Republic of China",
        common: 'Macau',
      },
      deu: {
        official: 'Sonderverwaltungsregion Macau der Volksrepublik China',
        common: 'Macao',
      },
      est: {
        official: 'Macau erihalduspiirkond',
        common: 'Macau',
      },
      fin: {
        official: 'Macaon Kiinan kansantasavallan erityishallintoalue',
        common: 'Macao',
      },
      fra: {
        official: 'Région administrative spéciale de Macao de la République populaire de Chine',
        common: 'Macao',
      },
      hrv: {
        official: 'Makao Posebnog upravnog područjaNarodne Republike Kine',
        common: 'Makao',
      },
      hun: {
        official: 'Makaó',
        common: 'Makaó',
      },
      ita: {
        official: 'Macao Regione amministrativa speciale della Repubblica Popolare Cinese',
        common: 'Macao',
      },
      jpn: {
        official: '中華人民共和国マカオ特別行政区',
        common: 'マカオ',
      },
      kor: {
        official: '중화인민공화국 마카오 특별행정구',
        common: '마카오',
      },
      nld: {
        official: 'Speciale Administratieve Regio Macau van de Volksrepubliek China',
        common: 'Macao',
      },
      per: {
        official: 'ماکائو',
        common: 'ماکائو',
      },
      pol: {
        official: 'Specjalny Region Administracyjny Chińskiej Republiki Ludowej Makau',
        common: 'Makau',
      },
      por: {
        official: 'Macau Região Administrativa Especial da República Popular da China',
        common: 'Macau',
      },
      rus: {
        official: 'Специальный административный район Макао Китайской Народной Республики Китай',
        common: 'Макао',
      },
      slk: {
        official: 'Macao, Špeciàlna administratívna oblasŦ',
        common: 'Macao',
      },
      spa: {
        official: 'Macao, Región Administrativa Especial de la República Popular China',
        common: 'Macao',
      },
      swe: {
        official: 'Macao',
        common: 'Macao',
      },
      urd: {
        official: 'مکاؤ عوامی جمہوریہ چین کا خصوصی انتظامی علاقہ',
        common: 'مکاؤ',
      },
    },
    latlng: [22.16666666, 113.55],
    landlocked: false,
    borders: ['CHN'],
    area: 30.0,
    demonyms: {
      eng: {
        f: 'Macanese',
        m: 'Macanese',
      },
      fra: {
        f: 'Macanaise',
        m: 'Macanais',
      },
    },
    flag: '\uD83C\uDDF2\uD83C\uDDF4',
    maps: {
      googleMaps: 'https://goo.gl/maps/whymRdk3dZFfAAs4A',
      openStreetMaps: 'https://www.openstreetmap.org/relation/1867188',
    },
    population: 649342,
    fifa: 'MAC',
    car: {
      signs: ['MO'],
      side: 'left',
    },
    timezones: ['UTC+08:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/mo.png',
      svg: 'https://flagcdn.com/mo.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/mo.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/mo.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {},
  },
  {
    name: {
      common: 'New Caledonia',
      official: 'New Caledonia',
      nativeName: {
        fra: {
          official: 'Nouvelle-Calédonie',
          common: 'Nouvelle-Calédonie',
        },
      },
    },
    tld: ['.nc'],
    cca2: 'NC',
    ccn3: '540',
    cca3: 'NCL',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      XPF: {
        name: 'CFP franc',
        symbol: '₣',
      },
    },
    idd: {
      root: '+6',
      suffixes: ['87'],
    },
    capital: ['Nouméa'],
    altSpellings: ['NC'],
    region: 'Oceania',
    subregion: 'Melanesia',
    languages: {
      fra: 'French',
    },
    translations: {
      ara: {
        official: 'كاليدونيا الجديدة',
        common: 'كاليدونيا الجديدة',
      },
      ces: {
        official: 'Nová Kaledonie',
        common: 'Nová Kaledonie',
      },
      cym: {
        official: 'New Caledonia',
        common: 'New Caledonia',
      },
      deu: {
        official: 'Neukaledonien',
        common: 'Neukaledonien',
      },
      est: {
        official: 'Uus-Kaledoonia',
        common: 'Uus-Kaledoonia',
      },
      fin: {
        official: 'Uusi-Kaledonia',
        common: 'Uusi-Kaledonia',
      },
      fra: {
        official: 'Nouvelle-Calédonie',
        common: 'Nouvelle-Calédonie',
      },
      hrv: {
        official: 'Nova Kaledonija',
        common: 'Nova Kaledonija',
      },
      hun: {
        official: 'Új-Kaledónia',
        common: 'Új-Kaledónia',
      },
      ita: {
        official: 'Nuova Caledonia',
        common: 'Nuova Caledonia',
      },
      jpn: {
        official: 'ニューカレドニア',
        common: 'ニューカレドニア',
      },
      kor: {
        official: '누벨칼레도니',
        common: '누벨칼레도니',
      },
      nld: {
        official: 'nieuw -Caledonië',
        common: 'Nieuw-Caledonië',
      },
      per: {
        official: 'کالدونیای جدید',
        common: 'کالدونیای جدید',
      },
      pol: {
        official: 'Nowa Kaledonia',
        common: 'Nowa Kaledonia',
      },
      por: {
        official: 'New Caledonia',
        common: 'Nova Caledónia',
      },
      rus: {
        official: 'Новая Каледония',
        common: 'Новая Каледония',
      },
      slk: {
        official: 'Nová Kaledónia',
        common: 'Nová Kaledónia',
      },
      spa: {
        official: 'nueva Caledonia',
        common: 'Nueva Caledonia',
      },
      swe: {
        official: 'Nya Kaledonien',
        common: 'Nya Kaledonien',
      },
      urd: {
        official: 'نیو کیلیڈونیا',
        common: 'نیو کیلیڈونیا',
      },
      zho: {
        official: '新喀里多尼亚',
        common: '新喀里多尼亚',
      },
    },
    latlng: [-21.5, 165.5],
    landlocked: false,
    area: 18575.0,
    demonyms: {
      eng: {
        f: 'New Caledonian',
        m: 'New Caledonian',
      },
      fra: {
        f: 'Néo-Calédonienne',
        m: 'Néo-Calédonien',
      },
    },
    flag: '\uD83C\uDDF3\uD83C\uDDE8',
    maps: {
      googleMaps: 'https://goo.gl/maps/cBhtCeMdob4U7FRU9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/3407643',
    },
    population: 271960,
    fifa: 'NCL',
    car: {
      signs: ['F'],
      side: 'right',
    },
    timezones: ['UTC+11:00'],
    continents: ['Oceania'],
    flags: {
      png: 'https://flagcdn.com/w320/nc.png',
      svg: 'https://flagcdn.com/nc.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/nc.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/nc.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-22.27, 166.45],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Bulgaria',
      official: 'Republic of Bulgaria',
      nativeName: {
        bul: {
          official: 'Република България',
          common: 'България',
        },
      },
    },
    tld: ['.bg'],
    cca2: 'BG',
    ccn3: '100',
    cca3: 'BGR',
    cioc: 'BUL',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      BGN: {
        name: 'Bulgarian lev',
        symbol: 'лв',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['59'],
    },
    capital: ['Sofia'],
    altSpellings: ['BG', 'Republic of Bulgaria', 'Република България'],
    region: 'Europe',
    subregion: 'Southeast Europe',
    languages: {
      bul: 'Bulgarian',
    },
    translations: {
      ara: {
        official: 'جمهورية بلغاريا',
        common: 'بلغاريا',
      },
      ces: {
        official: 'Bulharská republika',
        common: 'Bulharsko',
      },
      cym: {
        official: 'Gweriniaeth Bwlgaria',
        common: 'Bwlgaria',
      },
      deu: {
        official: 'Republik Bulgarien',
        common: 'Bulgarien',
      },
      est: {
        official: 'Bulgaaria Vabariik',
        common: 'Bulgaaria',
      },
      fin: {
        official: 'Bulgarian tasavalta',
        common: 'Bulgaria',
      },
      fra: {
        official: 'République de Bulgarie',
        common: 'Bulgarie',
      },
      hrv: {
        official: 'Republika Bugarska',
        common: 'Bugarska',
      },
      hun: {
        official: 'Bolgár Köztársaság',
        common: 'Bulgária',
      },
      ita: {
        official: 'Repubblica di Bulgaria',
        common: 'Bulgaria',
      },
      jpn: {
        official: 'ブルガリア共和国',
        common: 'ブルガリア',
      },
      kor: {
        official: '불가리아 공화국',
        common: '불가리아',
      },
      nld: {
        official: 'Republiek Bulgarije',
        common: 'Bulgarije',
      },
      per: {
        official: 'جمهوری بلغارستان',
        common: 'بلغارستان',
      },
      pol: {
        official: 'Republika Bułgarii',
        common: 'Bułgaria',
      },
      por: {
        official: 'República da Bulgária',
        common: 'Bulgária',
      },
      rus: {
        official: 'Республика Болгария',
        common: 'Болгария',
      },
      slk: {
        official: 'Bulharská republika',
        common: 'Bulharsko',
      },
      spa: {
        official: 'República de Bulgaria',
        common: 'Bulgaria',
      },
      swe: {
        official: 'Republiken Bulgarien',
        common: 'Bulgarien',
      },
      urd: {
        official: 'جمہوریہ بلغاریہ',
        common: 'بلغاریہ',
      },
      zho: {
        official: '保加利亚共和国',
        common: '保加利亚',
      },
    },
    latlng: [43.0, 25.0],
    landlocked: false,
    borders: ['GRC', 'MKD', 'ROU', 'SRB', 'TUR'],
    area: 110879.0,
    demonyms: {
      eng: {
        f: 'Bulgarian',
        m: 'Bulgarian',
      },
      fra: {
        f: 'Bulgare',
        m: 'Bulgare',
      },
    },
    flag: '\uD83C\uDDE7\uD83C\uDDEC',
    maps: {
      googleMaps: 'https://goo.gl/maps/F5uAhDGWzc3BrHfm9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/186382',
    },
    population: 6927288,
    gini: {
      '2018': 41.3,
    },
    fifa: 'BUL',
    car: {
      signs: ['BG'],
      side: 'right',
    },
    timezones: ['UTC+02:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/bg.png',
      svg: 'https://flagcdn.com/bg.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/bg.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/bg.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [42.68, 23.32],
    },
    postalCode: {
      format: '####',
      regex: '^(\\d{4})$',
    },
  },
  {
    name: {
      common: 'Eswatini',
      official: 'Kingdom of Eswatini',
      nativeName: {
        eng: {
          official: 'Kingdom of Eswatini',
          common: 'Eswatini',
        },
        ssw: {
          official: 'Umbuso weSwatini',
          common: 'eSwatini',
        },
      },
    },
    tld: ['.sz'],
    cca2: 'SZ',
    ccn3: '748',
    cca3: 'SWZ',
    cioc: 'SWZ',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      SZL: {
        name: 'Swazi lilangeni',
        symbol: 'L',
      },
      ZAR: {
        name: 'South African rand',
        symbol: 'R',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['68'],
    },
    capital: ['Mbabane'],
    altSpellings: ['SZ', 'Swaziland', 'weSwatini', 'Swatini', 'Ngwane', 'Kingdom of Eswatini', 'Umbuso weSwatini'],
    region: 'Africa',
    subregion: 'Southern Africa',
    languages: {
      eng: 'English',
      ssw: 'Swazi',
    },
    translations: {
      ara: {
        official: 'مملكة إسواتيني',
        common: 'إسواتيني',
      },
      ces: {
        official: 'Svazijské království',
        common: 'Svazijsko',
      },
      cym: {
        official: 'Kingdom of Eswatini',
        common: 'Eswatini',
      },
      deu: {
        official: 'Königreich Eswatini',
        common: 'Swasiland',
      },
      est: {
        official: 'eSwatini Kuningriik',
        common: 'Svaasimaa',
      },
      fin: {
        official: 'Swazimaan kuningaskunta',
        common: 'Swazimaa',
      },
      fra: {
        official: 'Royaume d’Eswatini',
        common: 'Swaziland',
      },
      hrv: {
        official: 'Kraljevina eSwatini',
        common: 'Svazi',
      },
      hun: {
        official: 'Szváziföldi Királyság',
        common: 'Szváziföld',
      },
      ita: {
        official: 'Regno di eSwatini',
        common: 'Swaziland',
      },
      jpn: {
        official: 'スワジランド王国',
        common: 'スワジランド',
      },
      kor: {
        official: '에스와티니 왕국',
        common: '에스와티니',
      },
      nld: {
        official: 'Koninkrijk eSwatini',
        common: 'Swaziland',
      },
      per: {
        official: 'پادشاهی سوازیلند',
        common: 'اسواتینی',
      },
      pol: {
        official: 'Królestwo Suazi',
        common: 'Suazi',
      },
      por: {
        official: 'Reino de eSwatini',
        common: 'Suazilândia',
      },
      rus: {
        official: 'Королевство Свазиленд',
        common: 'Свазиленд',
      },
      slk: {
        official: 'Svazijské kráľovstvo',
        common: 'Svazijsko',
      },
      spa: {
        official: 'Reino de eSwatini',
        common: 'Suazilandia',
      },
      swe: {
        official: 'Konungariket Eswatini',
        common: 'Swaziland',
      },
      urd: {
        official: 'مملکتِ سوازی لینڈ',
        common: 'سوازی لینڈ',
      },
      zho: {
        official: '斯威士兰王国',
        common: '斯威士兰',
      },
    },
    latlng: [-26.5, 31.5],
    landlocked: true,
    borders: ['MOZ', 'ZAF'],
    area: 17364.0,
    demonyms: {
      eng: {
        f: 'Swazi',
        m: 'Swazi',
      },
      fra: {
        f: 'Swazie',
        m: 'Swazie',
      },
    },
    flag: '\uD83C\uDDF8\uD83C\uDDFF',
    maps: {
      googleMaps: 'https://goo.gl/maps/cUY79eqQihFSE8hV6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/88210',
    },
    population: 1160164,
    gini: {
      '2016': 54.6,
    },
    fifa: 'SWZ',
    car: {
      signs: ['SD'],
      side: 'left',
    },
    timezones: ['UTC+02:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/sz.png',
      svg: 'https://flagcdn.com/sz.svg',
    },
    coatOfArms: {},
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-26.32, 31.13],
    },
    postalCode: {
      format: '@###',
      regex: '^([A-Z]\\d{3})$',
    },
  },
  {
    name: {
      common: 'Algeria',
      official: "People's Democratic Republic of Algeria",
      nativeName: {
        ara: {
          official: 'الجمهورية الديمقراطية الشعبية الجزائرية',
          common: 'الجزائر',
        },
      },
    },
    tld: ['.dz', 'الجزائر.'],
    cca2: 'DZ',
    ccn3: '012',
    cca3: 'DZA',
    cioc: 'ALG',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      DZD: {
        name: 'Algerian dinar',
        symbol: 'د.ج',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['13'],
    },
    capital: ['Algiers'],
    altSpellings: ['DZ', 'Dzayer', 'Algérie'],
    region: 'Africa',
    subregion: 'Northern Africa',
    languages: {
      ara: 'Arabic',
    },
    translations: {
      ara: {
        official: 'الجمهورية الديمقراطية الشعبية الجزائرية',
        common: 'الجزائر',
      },
      ces: {
        official: 'Alžírská demokratická a lidová republika',
        common: 'Alžírsko',
      },
      cym: {
        official: 'Gweriniaeth Ddemocrataidd Pobl Algeria',
        common: 'Algeria',
      },
      deu: {
        official: 'Demokratische Volksrepublik Algerien',
        common: 'Algerien',
      },
      est: {
        official: 'Alžeeria Demokraatlik Rahvavabariik',
        common: 'Alžeeria',
      },
      fin: {
        official: 'Algerian demokraattinen kansantasavalta',
        common: 'Algeria',
      },
      fra: {
        official: "République démocratique et populaire d'Algérie",
        common: 'Algérie',
      },
      hrv: {
        official: 'Narodna Demokratska Republika Alžir',
        common: 'Alžir',
      },
      hun: {
        official: 'Algériai Népi Demokratikus Köztársaság',
        common: 'Algéria',
      },
      ita: {
        official: 'Repubblica popolare democratica di Algeria',
        common: 'Algeria',
      },
      jpn: {
        official: 'アルジェリア人民民主共和国',
        common: 'アルジェリア',
      },
      kor: {
        official: '알제리 인민 민주 공화국',
        common: '알제리',
      },
      nld: {
        official: 'Democratische Volksrepubliek Algerije',
        common: 'Algerije',
      },
      per: {
        official: 'جمهوری دموکراتیک خلق الجزایر',
        common: 'الجزایر',
      },
      pol: {
        official: 'Algierska Republika Ludowo-Demokratyczna',
        common: 'Algieria',
      },
      por: {
        official: 'República Argelina Democrática e Popular',
        common: 'Argélia',
      },
      rus: {
        official: 'Народно-Демократическая Республика Алжир',
        common: 'Алжир',
      },
      slk: {
        official: 'Alžírska demokratická ľudová republika',
        common: 'Alžírsko',
      },
      spa: {
        official: 'República Argelina Democrática y Popular',
        common: 'Argelia',
      },
      swe: {
        official: 'Demokratiska folkrepubliken Algeriet',
        common: 'Algeriet',
      },
      urd: {
        official: 'عوامی جمہوری جمہوریہ الجزائر',
        common: 'الجزائر',
      },
      zho: {
        official: '阿尔及利亚人民民主共和国',
        common: '阿尔及利亚',
      },
    },
    latlng: [28.0, 3.0],
    landlocked: false,
    borders: ['TUN', 'LBY', 'NER', 'ESH', 'MRT', 'MLI', 'MAR'],
    area: 2381741.0,
    demonyms: {
      eng: {
        f: 'Algerian',
        m: 'Algerian',
      },
      fra: {
        f: 'Algérienne',
        m: 'Algérien',
      },
    },
    flag: '\uD83C\uDDE9\uD83C\uDDFF',
    maps: {
      googleMaps: 'https://goo.gl/maps/RsAyAfyaiNVb8DpW8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/192756',
    },
    population: 510713,
    gini: {
      '2011': 27.6,
    },
    fifa: 'ALG',
    car: {
      signs: ['DZ'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/dz.png',
      svg: 'https://flagcdn.com/dz.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/dz.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/dz.svg',
    },
    startOfWeek: 'sunday',
    capitalInfo: {
      latlng: [36.75, 3.05],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Kenya',
      official: 'Republic of Kenya',
      nativeName: {
        eng: {
          official: 'Republic of Kenya',
          common: 'Kenya',
        },
        swa: {
          official: 'Republic of Kenya',
          common: 'Kenya',
        },
      },
    },
    tld: ['.ke'],
    cca2: 'KE',
    ccn3: '404',
    cca3: 'KEN',
    cioc: 'KEN',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      KES: {
        name: 'Kenyan shilling',
        symbol: 'Sh',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['54'],
    },
    capital: ['Nairobi'],
    altSpellings: ['KE', 'Republic of Kenya', 'Jamhuri ya Kenya'],
    region: 'Africa',
    subregion: 'Eastern Africa',
    languages: {
      eng: 'English',
      swa: 'Swahili',
    },
    translations: {
      ara: {
        official: 'جمهورية كينيا',
        common: 'كينيا',
      },
      ces: {
        official: 'Keňská republika',
        common: 'Keňa',
      },
      cym: {
        official: 'Republic of Kenya',
        common: 'Kenya',
      },
      deu: {
        official: 'Republik Kenia',
        common: 'Kenia',
      },
      est: {
        official: 'Keenia Vabariik',
        common: 'Keenia',
      },
      fin: {
        official: 'Kenian tasavalta',
        common: 'Kenia',
      },
      fra: {
        official: 'République du Kenya',
        common: 'Kenya',
      },
      hrv: {
        official: 'Republika Kenija',
        common: 'Kenija',
      },
      hun: {
        official: 'Kenyai Köztársaság',
        common: 'Kenya',
      },
      ita: {
        official: 'Repubblica del Kenya',
        common: 'Kenya',
      },
      jpn: {
        official: 'ケニア共和国',
        common: 'ケニア',
      },
      kor: {
        official: '케냐 공화국',
        common: '케냐',
      },
      nld: {
        official: 'Republiek Kenia',
        common: 'Kenia',
      },
      per: {
        official: 'جمهوری کنیا',
        common: 'کنیا',
      },
      pol: {
        official: 'Republika Kenii',
        common: 'Kenia',
      },
      por: {
        official: 'República do Quénia',
        common: 'Quénia',
      },
      rus: {
        official: 'Республика Кения',
        common: 'Кения',
      },
      slk: {
        official: 'Kenská republika',
        common: 'Keňa',
      },
      spa: {
        official: 'República de Kenya',
        common: 'Kenia',
      },
      swe: {
        official: 'Republiken Kenya',
        common: 'Kenya',
      },
      urd: {
        official: 'جمہوریہ کینیا',
        common: 'کینیا',
      },
      zho: {
        official: '肯尼亚共和国',
        common: '肯尼亚',
      },
    },
    latlng: [1.0, 38.0],
    landlocked: false,
    borders: ['ETH', 'SOM', 'SSD', 'TZA', 'UGA'],
    area: 580367.0,
    demonyms: {
      eng: {
        f: 'Kenyan',
        m: 'Kenyan',
      },
      fra: {
        f: 'Kényane',
        m: 'Kényan',
      },
    },
    flag: '\uD83C\uDDF0\uD83C\uDDEA',
    maps: {
      googleMaps: 'https://goo.gl/maps/Ni9M7wcCxf8bJHLX8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/192798',
    },
    population: 53771300,
    gini: {
      '2015': 40.8,
    },
    fifa: 'KEN',
    car: {
      signs: ['EAK'],
      side: 'left',
    },
    timezones: ['UTC+03:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/ke.png',
      svg: 'https://flagcdn.com/ke.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ke.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ke.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-1.28, 36.82],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Mali',
      official: 'Republic of Mali',
      nativeName: {
        fra: {
          official: 'République du Mali',
          common: 'Mali',
        },
      },
    },
    tld: ['.ml'],
    cca2: 'ML',
    ccn3: '466',
    cca3: 'MLI',
    cioc: 'MLI',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      XOF: {
        name: 'West African CFA franc',
        symbol: 'Fr',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['23'],
    },
    capital: ['Bamako'],
    altSpellings: ['ML', 'Republic of Mali', 'République du Mali'],
    region: 'Africa',
    subregion: 'Western Africa',
    languages: {
      fra: 'French',
    },
    translations: {
      ara: {
        official: 'جمهورية مالي',
        common: 'مالي',
      },
      ces: {
        official: 'Republika Mali',
        common: 'Mali',
      },
      cym: {
        official: 'Republic of Mali',
        common: 'Mali',
      },
      deu: {
        official: 'Republik Mali',
        common: 'Mali',
      },
      est: {
        official: 'Mali Vabariik',
        common: 'Mali',
      },
      fin: {
        official: 'Malin tasavalta',
        common: 'Mali',
      },
      fra: {
        official: 'République du Mali',
        common: 'Mali',
      },
      hrv: {
        official: 'Republika Mali',
        common: 'Mali',
      },
      hun: {
        official: 'Mali Köztársaság',
        common: 'Mali',
      },
      ita: {
        official: 'Repubblica del Mali',
        common: 'Mali',
      },
      jpn: {
        official: 'マリ共和国',
        common: 'マリ',
      },
      kor: {
        official: '말리 공화국',
        common: '말리',
      },
      nld: {
        official: 'Republiek Mali',
        common: 'Mali',
      },
      per: {
        official: 'جمهوری مالی',
        common: 'مالی',
      },
      pol: {
        official: 'Republika Mali',
        common: 'Mali',
      },
      por: {
        official: 'República do Mali',
        common: 'Mali',
      },
      rus: {
        official: 'Республика Мали',
        common: 'Мали',
      },
      slk: {
        official: 'Malijská republika',
        common: 'Mali',
      },
      spa: {
        official: 'República de Malí',
        common: 'Mali',
      },
      swe: {
        official: 'Republiken Mali',
        common: 'Mali',
      },
      urd: {
        official: 'جمہوریہ مالی',
        common: 'مالی',
      },
      zho: {
        official: '马里共和国',
        common: '马里',
      },
    },
    latlng: [17.0, -4.0],
    landlocked: true,
    borders: ['DZA', 'BFA', 'GIN', 'CIV', 'MRT', 'NER', 'SEN'],
    area: 1240192.0,
    demonyms: {
      eng: {
        f: 'Malian',
        m: 'Malian',
      },
      fra: {
        f: 'Malienne',
        m: 'Malien',
      },
    },
    flag: '\uD83C\uDDF2\uD83C\uDDF1',
    maps: {
      googleMaps: 'https://goo.gl/maps/u9mYJkCB19wyuzh27',
      openStreetMaps: 'https://www.openstreetmap.org/relation/192785',
    },
    population: 20250834,
    gini: {
      '2009': 33.0,
    },
    fifa: 'MLI',
    car: {
      signs: ['RMM'],
      side: 'right',
    },
    timezones: ['UTC'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/ml.png',
      svg: 'https://flagcdn.com/ml.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ml.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ml.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [12.65, -8.0],
    },
  },
  {
    name: {
      common: 'Venezuela',
      official: 'Bolivarian Republic of Venezuela',
      nativeName: {
        spa: {
          official: 'República Bolivariana de Venezuela',
          common: 'Venezuela',
        },
      },
    },
    tld: ['.ve'],
    cca2: 'VE',
    ccn3: '862',
    cca3: 'VEN',
    cioc: 'VEN',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      VES: {
        name: 'Venezuelan bolívar soberano',
        symbol: 'Bs.S.',
      },
    },
    idd: {
      root: '+5',
      suffixes: ['8'],
    },
    capital: ['Caracas'],
    altSpellings: [
      'VE',
      'Bolivarian Republic of Venezuela',
      'Venezuela, Bolivarian Republic of',
      'República Bolivariana de Venezuela',
    ],
    region: 'Americas',
    subregion: 'South America',
    languages: {
      spa: 'Spanish',
    },
    translations: {
      ara: {
        official: 'جمهورية فنزويلا البوليفارية',
        common: 'فنزويلا',
      },
      ces: {
        official: 'Bolívarská republika Venezuela',
        common: 'Venezuela',
      },
      cym: {
        official: 'Bolivarian Republic of Venezuela',
        common: 'Venezuela',
      },
      deu: {
        official: 'Bolivarische Republik Venezuela',
        common: 'Venezuela',
      },
      est: {
        official: 'Venezuela Bolívari Vabariik',
        common: 'Venezuela',
      },
      fin: {
        official: 'Venezuelan bolivariaainen tasavalta',
        common: 'Venezuela',
      },
      fra: {
        official: 'République bolivarienne du Venezuela',
        common: 'Venezuela',
      },
      hrv: {
        official: 'BOLIVARIJANSKA Republika Venezuela',
        common: 'Venezuela',
      },
      hun: {
        official: 'Venezuelai Bolivári Köztársaság',
        common: 'Venezuela',
      },
      ita: {
        official: 'Repubblica Bolivariana del Venezuela',
        common: 'Venezuela',
      },
      jpn: {
        official: 'ベネズエラ·ボリバル共和国',
        common: 'ベネズエラ・ボリバル共和国',
      },
      kor: {
        official: '베네수엘라 볼리바르 공화국',
        common: '베네수엘라',
      },
      nld: {
        official: 'Bolivariaanse Republiek Venezuela',
        common: 'Venezuela',
      },
      per: {
        official: 'جمهوری بولیواری ونزوئلا',
        common: 'ونزوئلا',
      },
      pol: {
        official: 'Boliwariańska Republika Wenezueli',
        common: 'Wenezuela',
      },
      por: {
        official: 'República Bolivariana da Venezuela',
        common: 'Venezuela',
      },
      rus: {
        official: 'Боливарианская Республика Венесуэла',
        common: 'Венесуэла',
      },
      slk: {
        official: 'Venezuelská bolívarovská republika',
        common: 'Venezuela',
      },
      spa: {
        official: 'República Bolivariana de Venezuela',
        common: 'Venezuela',
      },
      swe: {
        official: 'Bolivarianska republiken Venezuela',
        common: 'Venezuela',
      },
      urd: {
        official: 'جمہوریہ وینیزویلا',
        common: 'وینیزویلا',
      },
      zho: {
        official: '委内瑞拉玻利瓦尔共和国',
        common: '委内瑞拉',
      },
    },
    latlng: [8.0, -66.0],
    landlocked: false,
    borders: ['BRA', 'COL', 'GUY'],
    area: 916445.0,
    demonyms: {
      eng: {
        f: 'Venezuelan',
        m: 'Venezuelan',
      },
      fra: {
        f: 'Vénézuélienne',
        m: 'Vénézuélien',
      },
    },
    flag: '\uD83C\uDDFB\uD83C\uDDEA',
    maps: {
      googleMaps: 'https://goo.gl/maps/KLCwDN8sec7z2kse9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/272644',
    },
    population: 28435943,
    gini: {
      '2006': 44.8,
    },
    fifa: 'VEN',
    car: {
      signs: ['YV'],
      side: 'right',
    },
    timezones: ['UTC-04:00'],
    continents: ['South America'],
    flags: {
      png: 'https://flagcdn.com/w320/ve.png',
      svg: 'https://flagcdn.com/ve.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ve.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ve.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [10.48, -66.87],
    },
    postalCode: {
      format: '####',
      regex: '^(\\d{4})$',
    },
  },
  {
    name: {
      common: 'Bosnia and Herzegovina',
      official: 'Bosnia and Herzegovina',
      nativeName: {
        bos: {
          official: 'Bosna i Hercegovina',
          common: 'Bosna i Hercegovina',
        },
        hrv: {
          official: 'Bosna i Hercegovina',
          common: 'Bosna i Hercegovina',
        },
        srp: {
          official: 'Боснa и Херцеговина',
          common: 'Боснa и Херцеговина',
        },
      },
    },
    tld: ['.ba'],
    cca2: 'BA',
    ccn3: '070',
    cca3: 'BIH',
    cioc: 'BIH',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      BAM: {
        name: 'Bosnia and Herzegovina convertible mark',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['87'],
    },
    capital: ['Sarajevo'],
    altSpellings: ['BA', 'Bosnia-Herzegovina', 'Босна и Херцеговина'],
    region: 'Europe',
    subregion: 'Southeast Europe',
    languages: {
      bos: 'Bosnian',
      hrv: 'Croatian',
      srp: 'Serbian',
    },
    translations: {
      ara: {
        official: 'جمهورية البوسنة والهرسك',
        common: 'البوسنة والهرسك',
      },
      ces: {
        official: 'Bosna a Hercegovina',
        common: 'Bosna a Hercegovina',
      },
      cym: {
        official: 'Bosnia a Hercegovina',
        common: 'Bosnia a Hercegovina',
      },
      deu: {
        official: 'Bosnien und Herzegowina',
        common: 'Bosnien und Herzegowina',
      },
      est: {
        official: 'Bosnia ja Hertsegoviina',
        common: 'Bosnia ja Hertsegoviina',
      },
      fin: {
        official: 'Bosnia ja Hertsegovina',
        common: 'Bosnia ja Hertsegovina',
      },
      fra: {
        official: 'Bosnie-et-Herzégovine',
        common: 'Bosnie-Herzégovine',
      },
      hrv: {
        official: 'Bosna i Hercegovina',
        common: 'Bosna i Hercegovina',
      },
      hun: {
        official: 'Bosznia-Hercegovina',
        common: 'Bosznia-Hercegovina',
      },
      ita: {
        official: 'Bosnia-Erzegovina',
        common: 'Bosnia ed Erzegovina',
      },
      jpn: {
        official: 'ボスニア·ヘルツェゴビナ',
        common: 'ボスニア・ヘルツェゴビナ',
      },
      kor: {
        official: '보스니아 헤르체고비나',
        common: '보스니아 헤르체고비나',
      },
      nld: {
        official: 'Bosnië-Herzegovina',
        common: 'Bosnië en Herzegovina',
      },
      per: {
        official: 'بوسنی و هرزگوین',
        common: 'بوسنی و هرزگوین',
      },
      pol: {
        official: 'Bośnia i Hercegowina',
        common: 'Bośnia i Hercegowina',
      },
      por: {
        official: 'Bósnia e Herzegovina',
        common: 'Bósnia e Herzegovina',
      },
      rus: {
        official: 'Босния и Герцеговина',
        common: 'Босния и Герцеговина',
      },
      slk: {
        official: 'Republika Bosny a Hercegoviny',
        common: 'Bosna a Hercegovina',
      },
      spa: {
        official: 'Bosnia y Herzegovina',
        common: 'Bosnia y Herzegovina',
      },
      swe: {
        official: 'Bosnien och Hercegovina',
        common: 'Bosnien och Hercegovina',
      },
      urd: {
        official: 'بوسنیا و ہرزیگووینا',
        common: 'بوسنیا و ہرزیگووینا',
      },
      zho: {
        official: '波斯尼亚和黑塞哥维那',
        common: '波斯尼亚和黑塞哥维那',
      },
    },
    latlng: [44.0, 18.0],
    landlocked: false,
    borders: ['HRV', 'MNE', 'SRB'],
    area: 51209.0,
    demonyms: {
      eng: {
        f: 'Bosnian, Herzegovinian',
        m: 'Bosnian, Herzegovinian',
      },
      fra: {
        f: 'Bosnienne',
        m: 'Bosnien',
      },
    },
    flag: '\uD83C\uDDE7\uD83C\uDDE6',
    maps: {
      googleMaps: 'https://www.google.com/maps/place/Bosnia+and+Herzegovina',
      openStreetMaps: 'https://www.openstreetmap.org/relation/2528142',
    },
    population: 3280815,
    gini: {
      '2011': 33.0,
    },
    fifa: 'BIH',
    car: {
      signs: ['BIH'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/ba.png',
      svg: 'https://flagcdn.com/ba.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ba.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ba.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [43.87, 18.42],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Somalia',
      official: 'Federal Republic of Somalia',
      nativeName: {
        ara: {
          official: 'جمهورية الصومال‎‎',
          common: 'الصومال‎‎',
        },
        som: {
          official: 'Jamhuuriyadda Federaalka Soomaaliya',
          common: 'Soomaaliya',
        },
      },
    },
    tld: ['.so'],
    cca2: 'SO',
    ccn3: '706',
    cca3: 'SOM',
    cioc: 'SOM',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      SOS: {
        name: 'Somali shilling',
        symbol: 'Sh',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['52'],
    },
    capital: ['Mogadishu'],
    altSpellings: [
      'SO',
      'aṣ-Ṣūmāl',
      'Federal Republic of Somalia',
      'Jamhuuriyadda Federaalka Soomaaliya',
      'Jumhūriyyat aṣ-Ṣūmāl al-Fiderāliyya',
    ],
    region: 'Africa',
    subregion: 'Eastern Africa',
    languages: {
      ara: 'Arabic',
      som: 'Somali',
    },
    translations: {
      ara: {
        official: 'جمهورية الصومال الفيدرالية',
        common: 'الصومال',
      },
      ces: {
        official: 'Somálská demokratická republika',
        common: 'Somálsko',
      },
      cym: {
        official: 'Federal Republic of Somalia',
        common: 'Somalia',
      },
      deu: {
        official: 'Bundesrepublik Somalia',
        common: 'Somalia',
      },
      est: {
        official: 'Somaalia Liitvabariik',
        common: 'Somaalia',
      },
      fin: {
        official: 'Somalian liittotasavalta',
        common: 'Somalia',
      },
      fra: {
        official: 'République fédérale de Somalie',
        common: 'Somalie',
      },
      hrv: {
        official: 'Savezna Republika Somaliji',
        common: 'Somalija',
      },
      hun: {
        official: 'Szomáli Szövetségi Köztársaság',
        common: 'Szomália',
      },
      ita: {
        official: 'Repubblica federale di Somalia',
        common: 'Somalia',
      },
      jpn: {
        official: 'ソマリア連邦共和国',
        common: 'ソマリア',
      },
      kor: {
        official: ' 소말리아 연방 공화국',
        common: '소말리아',
      },
      nld: {
        official: 'Federale Republiek Somalië',
        common: 'Somalië',
      },
      per: {
        official: 'جمهوری فدرال سومالی',
        common: 'سومالی',
      },
      pol: {
        official: 'Federalna Republika Somalii',
        common: 'Somalia',
      },
      por: {
        official: 'República Federal da Somália',
        common: 'Somália',
      },
      rus: {
        official: 'Федеративная Республика Сомали',
        common: 'Сомали',
      },
      slk: {
        official: 'Somálska federatívna republika',
        common: 'Somálsko',
      },
      spa: {
        official: 'República Federal de Somalia',
        common: 'Somalia',
      },
      swe: {
        official: 'Förbundsrepubliken Somalia',
        common: 'Somalia',
      },
      urd: {
        official: 'وفاقی جمہوریہ صومالیہ',
        common: 'صومالیہ',
      },
      zho: {
        official: '索马里共和国',
        common: '索马里',
      },
    },
    latlng: [10.0, 49.0],
    landlocked: false,
    borders: ['DJI', 'ETH', 'KEN'],
    area: 637657.0,
    demonyms: {
      eng: {
        f: 'Somali',
        m: 'Somali',
      },
      fra: {
        f: 'Somalienne',
        m: 'Somalien',
      },
    },
    flag: '\uD83C\uDDF8\uD83C\uDDF4',
    maps: {
      googleMaps: 'https://goo.gl/maps/8of8q7D1a8p7R6Fc9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/192799',
    },
    population: 15893219,
    gini: {
      '2017': 36.8,
    },
    fifa: 'SOM',
    car: {
      signs: ['SO'],
      side: 'right',
    },
    timezones: ['UTC+03:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/so.png',
      svg: 'https://flagcdn.com/so.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/so.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/so.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [2.07, 45.33],
    },
    postalCode: {
      format: '@@  #####',
      regex: '^([A-Z]{2}\\d{5})$',
    },
  },
  {
    name: {
      common: 'Norway',
      official: 'Kingdom of Norway',
      nativeName: {
        nno: {
          official: 'Kongeriket Noreg',
          common: 'Noreg',
        },
        nob: {
          official: 'Kongeriket Norge',
          common: 'Norge',
        },
        smi: {
          official: 'Norgga gonagasriika',
          common: 'Norgga',
        },
      },
    },
    tld: ['.no'],
    cca2: 'NO',
    ccn3: '578',
    cca3: 'NOR',
    cioc: 'NOR',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      NOK: {
        name: 'Norwegian krone',
        symbol: 'kr',
      },
    },
    idd: {
      root: '+4',
      suffixes: ['7'],
    },
    capital: ['Oslo'],
    altSpellings: ['NO', 'Norge', 'Noreg', 'Kingdom of Norway', 'Kongeriket Norge', 'Kongeriket Noreg'],
    region: 'Europe',
    subregion: 'Northern Europe',
    languages: {
      nno: 'Norwegian Nynorsk',
      nob: 'Norwegian Bokmål',
      smi: 'Sami',
    },
    translations: {
      ara: {
        official: 'مملكة النرويج',
        common: 'النرويج',
      },
      ces: {
        official: 'Norské království',
        common: 'Norsko',
      },
      cym: {
        official: 'Kingdom of Norway',
        common: 'Norway',
      },
      deu: {
        official: 'Königreich Norwegen',
        common: 'Norwegen',
      },
      est: {
        official: 'Norra Kuningriik',
        common: 'Norra',
      },
      fin: {
        official: 'Norjan kuningaskunta',
        common: 'Norja',
      },
      fra: {
        official: 'Royaume de Norvège',
        common: 'Norvège',
      },
      hrv: {
        official: 'Kraljevina Norveška',
        common: 'Norveška',
      },
      hun: {
        official: 'Norvég Királyság',
        common: 'Norvégia',
      },
      ita: {
        official: 'Regno di Norvegia',
        common: 'Norvegia',
      },
      jpn: {
        official: 'ノルウェー王国',
        common: 'ノルウェー',
      },
      kor: {
        official: '노르웨이 왕국',
        common: '노르웨이',
      },
      nld: {
        official: 'Koninkrijk Noorwegen',
        common: 'Noorwegen',
      },
      per: {
        official: 'پادشاهی نروژ',
        common: 'نروژ',
      },
      pol: {
        official: 'Królestwo Norwegii',
        common: 'Norwegia',
      },
      por: {
        official: 'Reino da Noruega',
        common: 'Noruega',
      },
      rus: {
        official: 'Королевство Норвегия',
        common: 'Норвегия',
      },
      slk: {
        official: 'Nórske kráľovstvo',
        common: 'Nórsko',
      },
      spa: {
        official: 'Reino de Noruega',
        common: 'Noruega',
      },
      swe: {
        official: 'Konungariket Norge',
        common: 'Norge',
      },
      urd: {
        official: 'مملکتِ ناروے',
        common: 'ناروے',
      },
      zho: {
        official: '挪威王国',
        common: '挪威',
      },
    },
    latlng: [62.0, 10.0],
    landlocked: false,
    borders: ['FIN', 'SWE', 'RUS'],
    area: 323802.0,
    demonyms: {
      eng: {
        f: 'Norwegian',
        m: 'Norwegian',
      },
      fra: {
        f: 'Norvégienne',
        m: 'Norvégien',
      },
    },
    flag: '\uD83C\uDDF3\uD83C\uDDF4',
    maps: {
      googleMaps: 'https://goo.gl/maps/htWRrphA7vNgQNdSA',
      openStreetMaps: 'https://www.openstreetmap.org/relation/2978650',
    },
    population: 5379475,
    gini: {
      '2018': 27.6,
    },
    fifa: 'NOR',
    car: {
      signs: ['N'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/no.png',
      svg: 'https://flagcdn.com/no.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/no.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/no.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [59.92, 10.75],
    },
    postalCode: {
      format: '####',
      regex: '^(\\d{4})$',
    },
  },
  {
    name: {
      common: 'Gambia',
      official: 'Republic of the Gambia',
      nativeName: {
        eng: {
          official: 'Republic of the Gambia',
          common: 'Gambia',
        },
      },
    },
    tld: ['.gm'],
    cca2: 'GM',
    ccn3: '270',
    cca3: 'GMB',
    cioc: 'GAM',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      GMD: {
        name: 'dalasi',
        symbol: 'D',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['20'],
    },
    capital: ['Banjul'],
    altSpellings: ['GM', 'Republic of the Gambia'],
    region: 'Africa',
    subregion: 'Western Africa',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'جمهورية غامبيا',
        common: 'غامبيا',
      },
      ces: {
        official: 'Gambijská republika',
        common: 'Gambie',
      },
      cym: {
        official: 'Republic of the Gambia',
        common: 'Gambia',
      },
      deu: {
        official: 'Republik Gambia',
        common: 'Gambia',
      },
      est: {
        official: 'Gambia Vabariik',
        common: 'Gambia',
      },
      fin: {
        official: 'Gambian tasavalta',
        common: 'Gambia',
      },
      fra: {
        official: 'République de Gambie',
        common: 'Gambie',
      },
      hrv: {
        official: 'Republika Gambija',
        common: 'Gambija',
      },
      hun: {
        official: 'Gambiai Köztársaság',
        common: 'Gambia',
      },
      ita: {
        official: 'Repubblica del Gambia',
        common: 'Gambia',
      },
      jpn: {
        official: 'ガンビア共和国',
        common: 'ガンビア',
      },
      kor: {
        official: '감비아 공화국',
        common: '감비아',
      },
      nld: {
        official: 'Republiek Gambia',
        common: 'Gambia',
      },
      per: {
        official: 'جمهوری گامبیا',
        common: 'گامبیا',
      },
      pol: {
        official: 'Republika Gambii',
        common: 'Gambia',
      },
      por: {
        official: 'República da Gâmbia',
        common: 'Gâmbia',
      },
      rus: {
        official: 'Республика Гамбия',
        common: 'Гамбия',
      },
      slk: {
        official: 'Gambijská republika',
        common: 'Gambia',
      },
      spa: {
        official: 'República de Gambia',
        common: 'Gambia',
      },
      swe: {
        official: 'Republiken Gambia',
        common: 'Gambia',
      },
      urd: {
        official: 'جمہوریہ گیمبیا',
        common: 'گیمبیا',
      },
      zho: {
        official: '冈比亚共和国',
        common: '冈比亚',
      },
    },
    latlng: [13.46666666, -16.56666666],
    landlocked: false,
    borders: ['SEN'],
    area: 10689.0,
    demonyms: {
      eng: {
        f: 'Gambian',
        m: 'Gambian',
      },
      fra: {
        f: 'Gambienne',
        m: 'Gambien',
      },
    },
    flag: '\uD83C\uDDEC\uD83C\uDDF2',
    maps: {
      googleMaps: 'https://goo.gl/maps/bbGBCxxtfD2A9Z4m6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/192774',
    },
    population: 2416664,
    gini: {
      '2015': 35.9,
    },
    fifa: 'GAM',
    car: {
      signs: ['WAG'],
      side: 'right',
    },
    timezones: ['UTC+00:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/gm.png',
      svg: 'https://flagcdn.com/gm.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/gm.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/gm.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [13.45, -16.57],
    },
  },
  {
    name: {
      common: 'Estonia',
      official: 'Republic of Estonia',
      nativeName: {
        est: {
          official: 'Eesti Vabariik',
          common: 'Eesti',
        },
      },
    },
    tld: ['.ee'],
    cca2: 'EE',
    ccn3: '233',
    cca3: 'EST',
    cioc: 'EST',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['72'],
    },
    capital: ['Tallinn'],
    altSpellings: ['EE', 'Eesti', 'Republic of Estonia', 'Eesti Vabariik'],
    region: 'Europe',
    subregion: 'Northern Europe',
    languages: {
      est: 'Estonian',
    },
    translations: {
      ara: {
        official: 'جمهورية إستونيا',
        common: 'إستونيا',
      },
      ces: {
        official: 'Estonská republika',
        common: 'Estonsko',
      },
      cym: {
        official: 'Gweriniaeth Estonia',
        common: 'Estonia',
      },
      deu: {
        official: 'Republik Estland',
        common: 'Estland',
      },
      est: {
        official: 'Eesti Vabariik',
        common: 'Eesti',
      },
      fin: {
        official: 'Viron tasavalta',
        common: 'Viro',
      },
      fra: {
        official: "République d'Estonie",
        common: 'Estonie',
      },
      hrv: {
        official: 'Republika Estonija',
        common: 'Estonija',
      },
      hun: {
        official: 'Észt Köztársaság',
        common: 'Észtország',
      },
      ita: {
        official: 'Repubblica di Estonia',
        common: 'Estonia',
      },
      jpn: {
        official: 'エストニア共和国',
        common: 'エストニア',
      },
      kor: {
        official: '에스토니아 공화국',
        common: '에스토니아',
      },
      nld: {
        official: 'Republiek Estland',
        common: 'Estland',
      },
      per: {
        official: 'جمهوری استونی',
        common: 'اِستونی',
      },
      pol: {
        official: 'Republika Estońska',
        common: 'Estonia',
      },
      por: {
        official: 'República da Estónia',
        common: 'Estónia',
      },
      rus: {
        official: 'Эстонская Республика',
        common: 'Эстония',
      },
      slk: {
        official: 'Estónska republika',
        common: 'Estónsko',
      },
      spa: {
        official: 'República de Estonia',
        common: 'Estonia',
      },
      swe: {
        official: 'Republiken Estland',
        common: 'Estland',
      },
      urd: {
        official: 'جمہوریہ اسٹونیا',
        common: 'اسٹونیا',
      },
      zho: {
        official: '爱沙尼亚共和国',
        common: '爱沙尼亚',
      },
    },
    latlng: [59.0, 26.0],
    landlocked: false,
    borders: ['LVA', 'RUS'],
    area: 45227.0,
    demonyms: {
      eng: {
        f: 'Estonian',
        m: 'Estonian',
      },
      fra: {
        f: 'Estonienne',
        m: 'Estonien',
      },
    },
    flag: '\uD83C\uDDEA\uD83C\uDDEA',
    maps: {
      googleMaps: 'https://goo.gl/maps/6SsynwGUodL1sDvq8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/79510',
    },
    population: 1331057,
    gini: {
      '2018': 30.3,
    },
    fifa: 'EST',
    car: {
      signs: ['EST'],
      side: 'right',
    },
    timezones: ['UTC+02:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/ee.png',
      svg: 'https://flagcdn.com/ee.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ee.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ee.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [59.43, 24.72],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Belize',
      official: 'Belize',
      nativeName: {
        bjz: {
          official: 'Belize',
          common: 'Belize',
        },
        eng: {
          official: 'Belize',
          common: 'Belize',
        },
        spa: {
          official: 'Belice',
          common: 'Belice',
        },
      },
    },
    tld: ['.bz'],
    cca2: 'BZ',
    ccn3: '084',
    cca3: 'BLZ',
    cioc: 'BIZ',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      BZD: {
        name: 'Belize dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+5',
      suffixes: ['01'],
    },
    capital: ['Belmopan'],
    altSpellings: ['BZ'],
    region: 'Americas',
    subregion: 'Central America',
    languages: {
      bjz: 'Belizean Creole',
      eng: 'English',
      spa: 'Spanish',
    },
    translations: {
      ara: {
        official: 'بليز',
        common: 'بليز',
      },
      ces: {
        official: 'Belize',
        common: 'Belize',
      },
      cym: {
        official: 'Belîs',
        common: 'Belîs',
      },
      deu: {
        official: 'Belize',
        common: 'Belize',
      },
      est: {
        official: 'Belize',
        common: 'Belize',
      },
      fin: {
        official: 'Belize',
        common: 'Belize',
      },
      fra: {
        official: 'Belize',
        common: 'Belize',
      },
      hrv: {
        official: 'Belize',
        common: 'Belize',
      },
      hun: {
        official: 'Belize',
        common: 'Belize',
      },
      ita: {
        official: 'Belize',
        common: 'Belize',
      },
      jpn: {
        official: 'ベリーズ',
        common: 'ベリーズ',
      },
      kor: {
        official: '벨리즈',
        common: '벨리즈',
      },
      nld: {
        official: 'Belize',
        common: 'Belize',
      },
      per: {
        official: 'بلیز',
        common: 'بلیز',
      },
      pol: {
        official: 'Belize',
        common: 'Belize',
      },
      por: {
        official: 'Belize',
        common: 'Belize',
      },
      rus: {
        official: 'Белиз',
        common: 'Белиз',
      },
      slk: {
        official: 'Belize',
        common: 'Belize',
      },
      spa: {
        official: 'Belice',
        common: 'Belice',
      },
      swe: {
        official: 'Belize',
        common: 'Belize',
      },
      urd: {
        official: 'بیلیز',
        common: 'بیلیز',
      },
      zho: {
        official: '伯利兹',
        common: '伯利兹',
      },
    },
    latlng: [17.25, -88.75],
    landlocked: false,
    borders: ['GTM', 'MEX'],
    area: 22966.0,
    demonyms: {
      eng: {
        f: 'Belizean',
        m: 'Belizean',
      },
      fra: {
        f: 'Bélizienne',
        m: 'Bélizien',
      },
    },
    flag: '\uD83C\uDDE7\uD83C\uDDFF',
    maps: {
      googleMaps: 'https://goo.gl/maps/jdCccpdLodm1uTmo9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/287827',
    },
    population: 397621,
    gini: {
      '1999': 53.3,
    },
    fifa: 'BLZ',
    car: {
      signs: ['BH'],
      side: 'right',
    },
    timezones: ['UTC-06:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/bz.png',
      svg: 'https://flagcdn.com/bz.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/bz.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/bz.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [17.25, -88.77],
    },
  },
  {
    name: {
      common: 'Paraguay',
      official: 'Republic of Paraguay',
      nativeName: {
        grn: {
          official: 'Tetã Paraguái',
          common: 'Paraguái',
        },
        spa: {
          official: 'República de Paraguay',
          common: 'Paraguay',
        },
      },
    },
    tld: ['.py'],
    cca2: 'PY',
    ccn3: '600',
    cca3: 'PRY',
    cioc: 'PAR',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      PYG: {
        name: 'Paraguayan guaraní',
        symbol: '₲',
      },
    },
    idd: {
      root: '+5',
      suffixes: ['95'],
    },
    capital: ['Asunción'],
    altSpellings: ['PY', 'Republic of Paraguay', 'República del Paraguay', 'Tetã Paraguái'],
    region: 'Americas',
    subregion: 'South America',
    languages: {
      grn: 'Guaraní',
      spa: 'Spanish',
    },
    translations: {
      ara: {
        official: 'جمهورية باراغواي',
        common: 'باراغواي',
      },
      ces: {
        official: 'Paraguayská republika',
        common: 'Paraguay',
      },
      cym: {
        official: 'Republic of Paraguay',
        common: 'Paraguay',
      },
      deu: {
        official: 'Republik Paraguay',
        common: 'Paraguay',
      },
      est: {
        official: 'Paraguay Vabariik',
        common: 'Paraguay',
      },
      fin: {
        official: 'Paraguayn tasavalta',
        common: 'Paraguay',
      },
      fra: {
        official: 'République du Paraguay',
        common: 'Paraguay',
      },
      hrv: {
        official: 'Republika Paragvaj',
        common: 'Paragvaj',
      },
      hun: {
        official: 'Paraguayi Köztársaság',
        common: 'Paraguay',
      },
      ita: {
        official: 'Repubblica del Paraguay',
        common: 'Paraguay',
      },
      jpn: {
        official: 'パラグアイ共和国',
        common: 'パラグアイ',
      },
      kor: {
        official: '파라과이 공화국',
        common: '파라과이',
      },
      nld: {
        official: 'Republiek Paraguay',
        common: 'Paraguay',
      },
      per: {
        official: 'جمهوری پاراگوئه',
        common: 'پاراگوئه',
      },
      pol: {
        official: 'Republika Paragwaju',
        common: 'Paragwaj',
      },
      por: {
        official: 'República do Paraguai',
        common: 'Paraguai',
      },
      rus: {
        official: 'Республика Парагвай',
        common: 'Парагвай',
      },
      slk: {
        official: 'Paraguajská republika',
        common: 'Paraguaj',
      },
      spa: {
        official: 'República de Paraguay',
        common: 'Paraguay',
      },
      swe: {
        official: 'Republiken Paraguay',
        common: 'Paraguay',
      },
      urd: {
        official: 'جمہوریہ پیراگوئے',
        common: 'پیراگوئے',
      },
      zho: {
        official: '巴拉圭共和国',
        common: '巴拉圭',
      },
    },
    latlng: [-23.0, -58.0],
    landlocked: true,
    borders: ['ARG', 'BOL', 'BRA'],
    area: 406752.0,
    demonyms: {
      eng: {
        f: 'Paraguayan',
        m: 'Paraguayan',
      },
      fra: {
        f: 'Paraguayenne',
        m: 'Paraguayen',
      },
    },
    flag: '\uD83C\uDDF5\uD83C\uDDFE',
    maps: {
      googleMaps: 'https://goo.gl/maps/JtnqG73WJn1Gx6mz6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/287077',
    },
    population: 7132530,
    gini: {
      '2019': 45.7,
    },
    fifa: 'PAR',
    car: {
      signs: ['PY'],
      side: 'right',
    },
    timezones: ['UTC-04:00'],
    continents: ['South America'],
    flags: {
      png: 'https://flagcdn.com/w320/py.png',
      svg: 'https://flagcdn.com/py.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/py.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/py.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-25.28, -57.57],
    },
    postalCode: {
      format: '####',
      regex: '^(\\d{4})$',
    },
  },
  {
    name: {
      common: 'Guinea',
      official: 'Republic of Guinea',
      nativeName: {
        fra: {
          official: 'République de Guinée',
          common: 'Guinée',
        },
      },
    },
    tld: ['.gn'],
    cca2: 'GN',
    ccn3: '324',
    cca3: 'GIN',
    cioc: 'GUI',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      GNF: {
        name: 'Guinean franc',
        symbol: 'Fr',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['24'],
    },
    capital: ['Conakry'],
    altSpellings: ['GN', 'Republic of Guinea', 'République de Guinée'],
    region: 'Africa',
    subregion: 'Western Africa',
    languages: {
      fra: 'French',
    },
    translations: {
      ara: {
        official: 'جمهورية غينيا',
        common: 'غينيا',
      },
      ces: {
        official: 'Guinejská republika',
        common: 'Guinea',
      },
      cym: {
        official: 'Republic of Guinea',
        common: 'Guinea',
      },
      deu: {
        official: 'Republik Guinea',
        common: 'Guinea',
      },
      est: {
        official: 'Guinea Vabariik',
        common: 'Guinea',
      },
      fin: {
        official: 'Guinean tasavalta',
        common: 'Guinea',
      },
      fra: {
        official: 'République de Guinée',
        common: 'Guinée',
      },
      hrv: {
        official: 'Republika Gvineja',
        common: 'Gvineja',
      },
      hun: {
        official: 'Guineai Köztársaság',
        common: 'Guinea',
      },
      ita: {
        official: 'Repubblica di Guinea',
        common: 'Guinea',
      },
      jpn: {
        official: 'ギニア共和国',
        common: 'ギニア',
      },
      kor: {
        official: '기니 공화국',
        common: '기니',
      },
      nld: {
        official: 'Republiek Guinee',
        common: 'Guinee',
      },
      per: {
        official: 'مملکت مستقل پاپوآ گینه نو',
        common: 'پاپوآ گینه نو',
      },
      pol: {
        official: 'Republika Gwinei',
        common: 'Gwinea',
      },
      por: {
        official: 'República da Guiné',
        common: 'Guiné',
      },
      rus: {
        official: 'Республика Гвинея',
        common: 'Гвинея',
      },
      slk: {
        official: 'Guinejská republika',
        common: 'Guinea',
      },
      spa: {
        official: 'República de Guinea',
        common: 'Guinea',
      },
      swe: {
        official: 'Republiken Guinea',
        common: 'Guinea',
      },
      urd: {
        official: 'جمہوریہ گنی',
        common: 'گنی',
      },
      zho: {
        official: '几内亚共和国',
        common: '几内亚',
      },
    },
    latlng: [11.0, -10.0],
    landlocked: false,
    borders: ['CIV', 'GNB', 'LBR', 'MLI', 'SEN', 'SLE'],
    area: 245857.0,
    demonyms: {
      eng: {
        f: 'Guinean',
        m: 'Guinean',
      },
      fra: {
        f: 'Guinéenne',
        m: 'Guinéen',
      },
    },
    flag: '\uD83C\uDDEC\uD83C\uDDF3',
    maps: {
      googleMaps: 'https://goo.gl/maps/8J5oM5sA4Ayr1ZYGA',
      openStreetMaps: 'https://www.openstreetmap.org/relation/192778',
    },
    population: 13132792,
    gini: {
      '2012': 33.7,
    },
    fifa: 'GUI',
    car: {
      signs: ['RG'],
      side: 'right',
    },
    timezones: ['UTC'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/gn.png',
      svg: 'https://flagcdn.com/gn.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/gn.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/gn.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [9.5, -13.7],
    },
  },
  {
    name: {
      common: 'Luxembourg',
      official: 'Grand Duchy of Luxembourg',
      nativeName: {
        deu: {
          official: 'Großherzogtum Luxemburg',
          common: 'Luxemburg',
        },
        fra: {
          official: 'Grand-Duché de Luxembourg',
          common: 'Luxembourg',
        },
        ltz: {
          official: 'Groussherzogtum Lëtzebuerg',
          common: 'Lëtzebuerg',
        },
      },
    },
    tld: ['.lu'],
    cca2: 'LU',
    ccn3: '442',
    cca3: 'LUX',
    cioc: 'LUX',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['52'],
    },
    capital: ['Luxembourg'],
    altSpellings: [
      'LU',
      'Grand Duchy of Luxembourg',
      'Grand-Duché de Luxembourg',
      'Großherzogtum Luxemburg',
      'Groussherzogtum Lëtzebuerg',
    ],
    region: 'Europe',
    subregion: 'Western Europe',
    languages: {
      deu: 'German',
      fra: 'French',
      ltz: 'Luxembourgish',
    },
    translations: {
      ara: {
        official: 'دوقية لوكسمبورغ',
        common: 'لوكسمبورغ',
      },
      ces: {
        official: 'Lucemburské velkovévodství',
        common: 'Lucembursko',
      },
      cym: {
        official: 'Grand Duchy of Luxembourg',
        common: 'Luxembourg',
      },
      deu: {
        official: 'Großherzogtum Luxemburg,',
        common: 'Luxemburg',
      },
      est: {
        official: 'Luksemburgi Suurhertsogiriik',
        common: 'Luksemburg',
      },
      fin: {
        official: 'Luxemburgin suurherttuakunta',
        common: 'Luxemburg',
      },
      fra: {
        official: 'Grand-Duché de Luxembourg',
        common: 'Luxembourg',
      },
      hrv: {
        official: 'Veliko Vojvodstvo Luksemburg',
        common: 'Luksemburg',
      },
      hun: {
        official: 'Luxemburgi Nagyhercegség',
        common: 'Luxemburg',
      },
      ita: {
        official: 'Granducato di Lussemburgo',
        common: 'Lussemburgo',
      },
      jpn: {
        official: 'ルクセンブルク大公国',
        common: 'ルクセンブルク',
      },
      kor: {
        official: '룩셈부르크 대공국',
        common: '룩셈부르크',
      },
      nld: {
        official: 'Groothertogdom Luxemburg',
        common: 'Luxemburg',
      },
      per: {
        official: 'دوک‌نشین لوکزامبورگ',
        common: 'لوکزامبورگ',
      },
      pol: {
        official: 'Wielkie Księstwo Luksemburga',
        common: 'Luksemburg',
      },
      por: {
        official: 'Grão-Ducado do Luxemburgo',
        common: 'Luxemburgo',
      },
      rus: {
        official: 'Великое Герцогство Люксембург',
        common: 'Люксембург',
      },
      slk: {
        official: 'Luxemburské veľkovojvodstvo',
        common: 'Luxembursko',
      },
      spa: {
        official: 'Gran Ducado de Luxemburgo',
        common: 'Luxemburgo',
      },
      swe: {
        official: 'Storhertigdömet Luxemburg',
        common: 'Luxemburg',
      },
      urd: {
        official: 'دوقیہ کبیرلکسمبرگ',
        common: 'لکسمبرگ',
      },
      zho: {
        official: '卢森堡大公国',
        common: '卢森堡',
      },
    },
    latlng: [49.75, 6.16666666],
    landlocked: true,
    borders: ['BEL', 'FRA', 'DEU'],
    area: 2586.0,
    demonyms: {
      eng: {
        f: 'Luxembourger',
        m: 'Luxembourger',
      },
      fra: {
        f: 'Luxembourgeoise',
        m: 'Luxembourgeois',
      },
    },
    flag: '\uD83C\uDDF1\uD83C\uDDFA',
    maps: {
      googleMaps: 'https://goo.gl/maps/L6b2AgndgHprt2Ko9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/2171347#map=10/49.8167/6.1335',
    },
    population: 632275,
    gini: {
      '2018': 35.4,
    },
    fifa: 'LUX',
    car: {
      signs: ['L'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/lu.png',
      svg: 'https://flagcdn.com/lu.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/lu.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/lu.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [49.6, 6.12],
    },
    postalCode: {
      format: '####',
      regex: '^(\\d{4})$',
    },
  },
  {
    name: {
      common: 'South Africa',
      official: 'Republic of South Africa',
      nativeName: {
        afr: {
          official: 'Republiek van Suid-Afrika',
          common: 'South Africa',
        },
        eng: {
          official: 'Republic of South Africa',
          common: 'South Africa',
        },
        nbl: {
          official: 'IRiphabliki yeSewula Afrika',
          common: 'Sewula Afrika',
        },
        nso: {
          official: 'Rephaboliki ya Afrika-Borwa ',
          common: 'Afrika-Borwa',
        },
        sot: {
          official: 'Rephaboliki ya Afrika Borwa',
          common: 'Afrika Borwa',
        },
        ssw: {
          official: 'IRiphabhulikhi yeNingizimu Afrika',
          common: 'Ningizimu Afrika',
        },
        tsn: {
          official: 'Rephaboliki ya Aforika Borwa',
          common: 'Aforika Borwa',
        },
        tso: {
          official: 'Riphabliki ra Afrika Dzonga',
          common: 'Afrika Dzonga',
        },
        ven: {
          official: 'Riphabuḽiki ya Afurika Tshipembe',
          common: 'Afurika Tshipembe',
        },
        xho: {
          official: 'IRiphabliki yaseMzantsi Afrika',
          common: 'Mzantsi Afrika',
        },
        zul: {
          official: 'IRiphabliki yaseNingizimu Afrika',
          common: 'Ningizimu Afrika',
        },
      },
    },
    tld: ['.za'],
    cca2: 'ZA',
    ccn3: '710',
    cca3: 'ZAF',
    cioc: 'RSA',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      ZAR: {
        name: 'South African rand',
        symbol: 'R',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['7'],
    },
    capital: ['Pretoria', 'Bloemfontein', 'Cape Town'],
    altSpellings: ['ZA', 'RSA', 'Suid-Afrika', 'Republic of South Africa'],
    region: 'Africa',
    subregion: 'Southern Africa',
    languages: {
      afr: 'Afrikaans',
      eng: 'English',
      nbl: 'Southern Ndebele',
      nso: 'Northern Sotho',
      sot: 'Southern Sotho',
      ssw: 'Swazi',
      tsn: 'Tswana',
      tso: 'Tsonga',
      ven: 'Venda',
      xho: 'Xhosa',
      zul: 'Zulu',
    },
    translations: {
      ara: {
        official: 'جمهورية جنوب أفريقيا',
        common: 'جنوب أفريقيا',
      },
      ces: {
        official: 'Jihoafrická republika',
        common: 'Jihoafrická republika',
      },
      cym: {
        official: 'Republic of South Africa',
        common: 'South Africa',
      },
      deu: {
        official: 'Republik Südafrika',
        common: 'Südafrika',
      },
      est: {
        official: 'Lõuna-Aafrika Vabariik',
        common: 'Lõuna-Aafrika Vabariik',
      },
      fin: {
        official: 'Etelä-Afrikan tasavalta',
        common: 'Etelä-Afrikka',
      },
      fra: {
        official: "République d'Afrique du Sud",
        common: 'Afrique du Sud',
      },
      hrv: {
        official: 'Južnoafrička Republika',
        common: 'Južnoafrička Republika',
      },
      hun: {
        official: 'Dél-afrikai Köztársaság',
        common: 'Dél-afrikai Köztársaság',
      },
      ita: {
        official: 'Repubblica del Sud Africa',
        common: 'Sud Africa',
      },
      jpn: {
        official: '南アフリカ共和国',
        common: '南アフリカ',
      },
      kor: {
        official: '남아프리카 공화국',
        common: '남아프리카',
      },
      nld: {
        official: 'Republiek Zuid-Afrika',
        common: 'Zuid-Afrika',
      },
      per: {
        official: 'جمهوری آفریقای جنوبی',
        common: 'آفریقای جنوبی',
      },
      pol: {
        official: 'Republika Południowej Afryki',
        common: 'Południowa Afryka',
      },
      por: {
        official: 'República da África do Sul',
        common: 'África do Sul',
      },
      rus: {
        official: 'Южно-Африканская Республика',
        common: 'Южно-Африканская Республика',
      },
      slk: {
        official: 'Juhoafrická republika',
        common: 'Juhoafrická republika',
      },
      spa: {
        official: 'República de Sudáfrica',
        common: 'República de Sudáfrica',
      },
      swe: {
        official: 'Republiken Sydafrika',
        common: 'Sydafrika',
      },
      urd: {
        official: 'جمہوریہ جنوبی افریقا',
        common: 'جنوبی افریقا',
      },
      zho: {
        official: '南非共和国',
        common: '南非',
      },
    },
    latlng: [-29.0, 24.0],
    landlocked: false,
    borders: ['BWA', 'LSO', 'MOZ', 'NAM', 'SWZ', 'ZWE'],
    area: 1221037.0,
    demonyms: {
      eng: {
        f: 'South African',
        m: 'South African',
      },
      fra: {
        f: 'Sud-africaine',
        m: 'Sud-africain',
      },
    },
    flag: '\uD83C\uDDFF\uD83C\uDDE6',
    maps: {
      googleMaps: 'https://goo.gl/maps/CLCZ1R8Uz1KpYhRv6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/87565',
    },
    population: 59308690,
    gini: {
      '2014': 63.0,
    },
    fifa: 'RSA',
    car: {
      signs: ['ZA'],
      side: 'left',
    },
    timezones: ['UTC+02:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/za.png',
      svg: 'https://flagcdn.com/za.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/za.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/za.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-25.7, 28.22],
    },
    postalCode: {
      format: '####',
      regex: '^(\\d{4})$',
    },
  },
  {
    name: {
      common: 'Jordan',
      official: 'Hashemite Kingdom of Jordan',
      nativeName: {
        ara: {
          official: 'المملكة الأردنية الهاشمية',
          common: 'الأردن',
        },
      },
    },
    tld: ['.jo', 'الاردن.'],
    cca2: 'JO',
    ccn3: '400',
    cca3: 'JOR',
    cioc: 'JOR',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      JOD: {
        name: 'Jordanian dinar',
        symbol: 'د.ا',
      },
    },
    idd: {
      root: '+9',
      suffixes: ['62'],
    },
    capital: ['Amman'],
    altSpellings: ['JO', 'Hashemite Kingdom of Jordan', 'al-Mamlakah al-Urdunīyah al-Hāshimīyah'],
    region: 'Asia',
    subregion: 'Western Asia',
    languages: {
      ara: 'Arabic',
    },
    translations: {
      ara: {
        official: 'المملكة الأردنية الهاشمية',
        common: 'الأردن',
      },
      ces: {
        official: 'Jordánské hášimovské království',
        common: 'Jordánsko',
      },
      cym: {
        official: 'Hashemite Kingdom of Jordan',
        common: 'Jordan',
      },
      deu: {
        official: 'Haschemitisches Königreich Jordanien',
        common: 'Jordanien',
      },
      est: {
        official: 'Jordaania Hašimiidi Kuningriik',
        common: 'Jordaania',
      },
      fin: {
        official: 'Jordanian hašemiittinen kunigaskunta',
        common: 'Jordania',
      },
      fra: {
        official: 'Royaume hachémite de Jordanie',
        common: 'Jordanie',
      },
      hrv: {
        official: 'Hašemitske Kraljevine Jordan',
        common: 'Jordan',
      },
      hun: {
        official: 'Jordánia',
        common: 'Jordánia',
      },
      ita: {
        official: 'Regno hascemita di Giordania',
        common: 'Giordania',
      },
      jpn: {
        official: 'ヨルダン·ハシミテ王国',
        common: 'ヨルダン',
      },
      kor: {
        official: '요르단 하심 왕국',
        common: '요르단',
      },
      nld: {
        official: 'Hasjemitisch Koninkrijk Jordanië',
        common: 'Jordanië',
      },
      per: {
        official: 'پادشاهی اُردُن هاشمی',
        common: 'اردن',
      },
      pol: {
        official: 'Jordańskie Królestwo Haszymidzkie',
        common: 'Jordania',
      },
      por: {
        official: 'Reino Hachemita da Jordânia',
        common: 'Jordânia',
      },
      rus: {
        official: 'Иорданского Хашимитского Королевства',
        common: 'Иордания',
      },
      slk: {
        official: 'Jordánske hášimovské kráľovstvo',
        common: 'Jordánsko',
      },
      spa: {
        official: 'Reino Hachemita de Jordania',
        common: 'Jordania',
      },
      swe: {
        official: 'Hashimitiska kungadömet Jordanien',
        common: 'Jordanien',
      },
      urd: {
        official: 'ھاشمی مملکتِ اردن',
        common: 'اردن',
      },
      zho: {
        official: '约旦哈希姆王国',
        common: '约旦',
      },
    },
    latlng: [31.0, 36.0],
    landlocked: false,
    borders: ['IRQ', 'ISR', 'PSE', 'SAU', 'SYR'],
    area: 89342.0,
    demonyms: {
      eng: {
        f: 'Jordanian',
        m: 'Jordanian',
      },
      fra: {
        f: 'Jordanienne',
        m: 'Jordanien',
      },
    },
    flag: '\uD83C\uDDEF\uD83C\uDDF4',
    maps: {
      googleMaps: 'https://goo.gl/maps/ko1dzSDKg8Gsi9A98',
      openStreetMaps: 'https://www.openstreetmap.org/relation/184818',
    },
    population: 10203140,
    gini: {
      '2010': 33.7,
    },
    fifa: 'JOR',
    car: {
      signs: ['HKJ'],
      side: 'right',
    },
    timezones: ['UTC+03:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/jo.png',
      svg: 'https://flagcdn.com/jo.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/jo.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/jo.svg',
    },
    startOfWeek: 'sunday',
    capitalInfo: {
      latlng: [31.95, 35.93],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Timor-Leste',
      official: 'Democratic Republic of Timor-Leste',
      nativeName: {
        por: {
          official: 'República Democrática de Timor-Leste',
          common: 'Timor-Leste',
        },
        tet: {
          official: 'Repúblika Demokrátika Timór-Leste',
          common: 'Timór-Leste',
        },
      },
    },
    tld: ['.tl'],
    cca2: 'TL',
    ccn3: '626',
    cca3: 'TLS',
    cioc: 'TLS',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      USD: {
        name: 'United States dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+6',
      suffixes: ['70'],
    },
    capital: ['Dili'],
    altSpellings: [
      'TL',
      'East Timor',
      'Democratic Republic of Timor-Leste',
      'República Democrática de Timor-Leste',
      'Repúblika Demokrátika Timór-Leste',
      "Timór Lorosa'e",
      'Timor Lorosae',
    ],
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    languages: {
      por: 'Portuguese',
      tet: 'Tetum',
    },
    translations: {
      ara: {
        official: 'جمهورية تيمور الشرقية الديمقراطية',
        common: 'تيمور الشرقية',
      },
      ces: {
        official: 'Demokratická republika Východní Timor',
        common: 'Východní Timor',
      },
      cym: {
        official: 'Democratic Republic of Timor-Leste',
        common: 'Timor-Leste',
      },
      deu: {
        official: 'Demokratische Republik Timor-Leste',
        common: 'Osttimor',
      },
      est: {
        official: 'Timor-Leste Demokraatlik Vabariik',
        common: 'Ida-Timor',
      },
      fin: {
        official: 'Itä-Timorin demokraattinen tasavalta',
        common: 'Itä-Timor',
      },
      fra: {
        official: 'République démocratique du Timor oriental',
        common: 'Timor oriental',
      },
      hrv: {
        official: 'Demokratska Republika Timor-Leste',
        common: 'Istočni Timor',
      },
      hun: {
        official: 'Kelet-timori Demokratikus Köztársaság',
        common: 'Kelet-Timor',
      },
      ita: {
        official: 'Repubblica Democratica di Timor Est',
        common: 'Timor Est',
      },
      jpn: {
        official: '東ティモール民主共和国',
        common: '東ティモール',
      },
      kor: {
        official: '동티모르 민주 공화국',
        common: '동티모르',
      },
      nld: {
        official: 'Democratische Republiek Oost-Timor',
        common: 'Oost-Timor',
      },
      per: {
        official: 'جمهوری دموکراتیک تیمور شرقی',
        common: 'تیمور شرقی',
      },
      pol: {
        official: 'Demokratyczna Republika Timoru Wschodniego',
        common: 'Timor Wschodni',
      },
      por: {
        official: 'República Democrática de Timor-Leste',
        common: 'Timor-Leste',
      },
      rus: {
        official: 'Демократическая Республика Тимор -Лешти',
        common: 'Восточный Тимор',
      },
      slk: {
        official: 'Východotimorská demokratická republika',
        common: 'Východný Timor',
      },
      spa: {
        official: 'República Democrática de Timor-Leste',
        common: 'Timor Oriental',
      },
      swe: {
        official: 'Demokratiska republiken Östtimor',
        common: 'Östtimor',
      },
      urd: {
        official: 'جمہوری جمہوریہ مشرقی تیمور',
        common: 'مشرقی تیمور',
      },
      zho: {
        official: '东帝汶民主共和国',
        common: '东帝汶',
      },
    },
    latlng: [-8.83333333, 125.91666666],
    landlocked: false,
    borders: ['IDN'],
    area: 14874.0,
    demonyms: {
      eng: {
        f: 'East Timorese',
        m: 'East Timorese',
      },
      fra: {
        f: 'Est-timoraise',
        m: 'Est-timorais',
      },
    },
    flag: '\uD83C\uDDF9\uD83C\uDDF1',
    maps: {
      googleMaps: 'https://goo.gl/maps/sFqBC9zjgUXPR1iTA',
      openStreetMaps: 'https://www.openstreetmap.org/relation/305142',
    },
    population: 1318442,
    gini: {
      '2014': 28.7,
    },
    fifa: 'TLS',
    car: {
      signs: ['TL'],
      side: 'left',
    },
    timezones: ['UTC+09:00'],
    continents: ['Oceania'],
    flags: {
      png: 'https://flagcdn.com/w320/tl.png',
      svg: 'https://flagcdn.com/tl.svg',
    },
    coatOfArms: {},
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-8.58, 125.6],
    },
  },
  {
    name: {
      common: 'Zimbabwe',
      official: 'Republic of Zimbabwe',
      nativeName: {
        bwg: {
          official: 'Republic of Zimbabwe',
          common: 'Zimbabwe',
        },
        eng: {
          official: 'Republic of Zimbabwe',
          common: 'Zimbabwe',
        },
        kck: {
          official: 'Republic of Zimbabwe',
          common: 'Zimbabwe',
        },
        khi: {
          official: 'Republic of Zimbabwe',
          common: 'Zimbabwe',
        },
        ndc: {
          official: 'Republic of Zimbabwe',
          common: 'Zimbabwe',
        },
        nde: {
          official: 'Republic of Zimbabwe',
          common: 'Zimbabwe',
        },
        nya: {
          official: 'Republic of Zimbabwe',
          common: 'Zimbabwe',
        },
        sna: {
          official: 'Republic of Zimbabwe',
          common: 'Zimbabwe',
        },
        sot: {
          official: 'Republic of Zimbabwe',
          common: 'Zimbabwe',
        },
        toi: {
          official: 'Republic of Zimbabwe',
          common: 'Zimbabwe',
        },
        tsn: {
          official: 'Republic of Zimbabwe',
          common: 'Zimbabwe',
        },
        tso: {
          official: 'Republic of Zimbabwe',
          common: 'Zimbabwe',
        },
        ven: {
          official: 'Republic of Zimbabwe',
          common: 'Zimbabwe',
        },
        xho: {
          official: 'Republic of Zimbabwe',
          common: 'Zimbabwe',
        },
        zib: {
          official: 'Republic of Zimbabwe',
          common: 'Zimbabwe',
        },
      },
    },
    tld: ['.zw'],
    cca2: 'ZW',
    ccn3: '716',
    cca3: 'ZWE',
    cioc: 'ZIM',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      ZWL: {
        name: 'Zimbabwean dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['63'],
    },
    capital: ['Harare'],
    altSpellings: ['ZW', 'Republic of Zimbabwe'],
    region: 'Africa',
    subregion: 'Eastern Africa',
    languages: {
      bwg: 'Chibarwe',
      eng: 'English',
      kck: 'Kalanga',
      khi: 'Khoisan',
      ndc: 'Ndau',
      nde: 'Northern Ndebele',
      nya: 'Chewa',
      sna: 'Shona',
      sot: 'Sotho',
      toi: 'Tonga',
      tsn: 'Tswana',
      tso: 'Tsonga',
      ven: 'Venda',
      xho: 'Xhosa',
      zib: 'Zimbabwean Sign Language',
    },
    translations: {
      ara: {
        official: 'جمهورية زيمبابوي',
        common: 'زيمبابوي',
      },
      ces: {
        official: 'Zimbabwská republika',
        common: 'Zimbabwe',
      },
      cym: {
        official: 'Republic of Zimbabwe',
        common: 'Zimbabwe',
      },
      deu: {
        official: 'Republik Simbabwe',
        common: 'Simbabwe',
      },
      est: {
        official: 'Zimbabwe Vabariik',
        common: 'Zimbabwe',
      },
      fin: {
        official: 'Zimbabwen tasavalta',
        common: 'Zimbabwe',
      },
      fra: {
        official: 'République du Zimbabwe',
        common: 'Zimbabwe',
      },
      hrv: {
        official: 'Republika Zimbabve',
        common: 'Zimbabve',
      },
      hun: {
        official: 'Zimbabwei Köztársaság',
        common: 'Zimbabwe',
      },
      ita: {
        official: 'Repubblica dello Zimbabwe',
        common: 'Zimbabwe',
      },
      jpn: {
        official: 'ジンバブエ共和国',
        common: 'ジンバブエ',
      },
      kor: {
        official: '짐바브웨 공화국',
        common: '짐바브웨',
      },
      nld: {
        official: 'Republiek Zimbabwe',
        common: 'Zimbabwe',
      },
      per: {
        official: 'جمهوری زیمبابوه',
        common: 'زیمبابوه',
      },
      pol: {
        official: 'Republika Zimbabwe',
        common: 'Zimbabwe',
      },
      por: {
        official: 'República do Zimbabwe',
        common: 'Zimbabwe',
      },
      rus: {
        official: 'Республика Зимбабве',
        common: 'Зимбабве',
      },
      slk: {
        official: 'Zimbabwianska republika',
        common: 'Zimbabwe',
      },
      spa: {
        official: 'República de Zimbabue',
        common: 'Zimbabue',
      },
      swe: {
        official: 'Republiken Zimbabwe',
        common: 'Zimbabwe',
      },
      urd: {
        official: 'جمہوریہ زمبابوے',
        common: 'زمبابوے',
      },
      zho: {
        official: '津巴布韦共和国',
        common: '津巴布韦',
      },
    },
    latlng: [-20.0, 30.0],
    landlocked: true,
    borders: ['BWA', 'MOZ', 'ZAF', 'ZMB'],
    area: 390757.0,
    demonyms: {
      eng: {
        f: 'Zimbabwean',
        m: 'Zimbabwean',
      },
      fra: {
        f: 'Zimbabwéenne',
        m: 'Zimbabwéen',
      },
    },
    flag: '\uD83C\uDDFF\uD83C\uDDFC',
    maps: {
      googleMaps: 'https://goo.gl/maps/M26BqdwQctqxXS65A',
      openStreetMaps: 'https://www.openstreetmap.org/relation/195272',
    },
    population: 14862927,
    gini: {
      '2019': 50.3,
    },
    fifa: 'ZIM',
    car: {
      signs: ['ZW'],
      side: 'left',
    },
    timezones: ['UTC+02:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/zw.png',
      svg: 'https://flagcdn.com/zw.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/zw.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/zw.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-17.82, 31.03],
    },
  },
  {
    name: {
      common: 'Mozambique',
      official: 'Republic of Mozambique',
      nativeName: {
        por: {
          official: 'República de Moçambique',
          common: 'Moçambique',
        },
      },
    },
    tld: ['.mz'],
    cca2: 'MZ',
    ccn3: '508',
    cca3: 'MOZ',
    cioc: 'MOZ',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      MZN: {
        name: 'Mozambican metical',
        symbol: 'MT',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['58'],
    },
    capital: ['Maputo'],
    altSpellings: ['MZ', 'Republic of Mozambique', 'República de Moçambique'],
    region: 'Africa',
    subregion: 'Eastern Africa',
    languages: {
      por: 'Portuguese',
    },
    translations: {
      ara: {
        official: 'جمهورية موزمبيق',
        common: 'موزمبيق',
      },
      ces: {
        official: 'Mosambická republika',
        common: 'Mosambik',
      },
      cym: {
        official: 'Republic of Mozambique',
        common: 'Mozambique',
      },
      deu: {
        official: 'Republik Mosambik',
        common: 'Mosambik',
      },
      est: {
        official: 'Mosambiigi Vabariik',
        common: 'Mosambiik',
      },
      fin: {
        official: 'Mosambikin tasavalta',
        common: 'Mosambik',
      },
      fra: {
        official: 'République du Mozambique',
        common: 'Mozambique',
      },
      hrv: {
        official: 'Republika Mozambiku',
        common: 'Mozambik',
      },
      hun: {
        official: 'Mozambiki Köztársaság',
        common: 'Mozambik',
      },
      ita: {
        official: 'Repubblica del Mozambico',
        common: 'Mozambico',
      },
      jpn: {
        official: 'モザンビーク共和国',
        common: 'モザンビーク',
      },
      kor: {
        official: '모잠비크 공화국',
        common: '모잠비크',
      },
      nld: {
        official: 'Republiek Mozambique',
        common: 'Mozambique',
      },
      per: {
        official: 'جمهوری موزامبیک',
        common: 'موزامبیک',
      },
      pol: {
        official: 'Republika Mozambiku',
        common: 'Mozambik',
      },
      por: {
        official: 'República de Moçambique',
        common: 'Moçambique',
      },
      rus: {
        official: 'Республика Мозамбик',
        common: 'Мозамбик',
      },
      slk: {
        official: 'Mozambická republika',
        common: 'Mozambik',
      },
      spa: {
        official: 'República de Mozambique',
        common: 'Mozambique',
      },
      swe: {
        official: 'Republiken Moçambique',
        common: 'Moçambique',
      },
      urd: {
        official: 'جمہوریہ موزمبیق',
        common: 'موزمبیق',
      },
      zho: {
        official: '莫桑比克共和国',
        common: '莫桑比克',
      },
    },
    latlng: [-18.25, 35.0],
    landlocked: false,
    borders: ['MWI', 'ZAF', 'SWZ', 'TZA', 'ZMB', 'ZWE'],
    area: 801590.0,
    demonyms: {
      eng: {
        f: 'Mozambican',
        m: 'Mozambican',
      },
      fra: {
        f: 'Mozambicaine',
        m: 'Mozambicain',
      },
    },
    flag: '\uD83C\uDDF2\uD83C\uDDFF',
    maps: {
      googleMaps: 'https://goo.gl/maps/xCLcY9fzU6x4Pueu5',
      openStreetMaps: 'https://www.openstreetmap.org/relation/195273',
    },
    population: 31255435,
    gini: {
      '2014': 54.0,
    },
    fifa: 'MOZ',
    car: {
      signs: ['MOC'],
      side: 'left',
    },
    timezones: ['UTC+02:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/mz.png',
      svg: 'https://flagcdn.com/mz.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/mz.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/mz.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-25.95, 32.58],
    },
    postalCode: {
      format: '####',
      regex: '^(\\d{4})$',
    },
  },
  {
    name: {
      common: 'Caribbean Netherlands',
      official: 'Bonaire, Sint Eustatius and Saba',
      nativeName: {
        nld: {
          official: 'Bonaire, Sint Eustatius en Saba',
          common: 'Caribisch Nederland',
        },
        pap: {
          official: 'Boneiru, Sint Eustatius y Saba',
          common: 'Boneiru, Sint Eustatius y Saba',
        },
      },
    },
    tld: ['.bq', '.nl'],
    cca2: 'BQ',
    ccn3: '535',
    cca3: 'BES',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      USD: {
        name: 'United States dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+5',
      suffixes: ['99'],
    },
    capital: ['Kralendijk'],
    altSpellings: ['BES islands'],
    region: 'Americas',
    subregion: 'Caribbean',
    languages: {
      eng: 'English',
      nld: 'Dutch',
      pap: 'Papiamento',
    },
    translations: {
      ara: {
        official: 'بونير وسينت أوستاتيوس وسابا',
        common: 'الجزر الكاريبية الهولندية',
      },
      ces: {
        official: 'Karibské Nizozemsko',
        common: 'Karibské Nizozemsko',
      },
      cym: {
        official: 'Bonaire, Sint Eustatius and Saba',
        common: 'Caribbean Netherlands',
      },
      deu: {
        official: 'Bonaire, Sint Eustatius und Saba',
        common: 'Karibische Niederlande',
      },
      est: {
        official: 'Bonaire, Sint Eustatius ja Saba',
        common: 'Bonaire, Sint Eustatius ja Saba',
      },
      fin: {
        official: 'Bonaire, Sint Eustatius ja Saba',
        common: 'Bonaire, Sint Eustatius ja Saba',
      },
      fra: {
        official: 'Bonaire, Saint-Eustache et Saba',
        common: 'Pays-Bas caribéens',
      },
      hrv: {
        official: 'Bonaire, Sint Eustatius i Saba',
        common: 'Bonaire, Sint Eustatius i Saba',
      },
      hun: {
        official: 'Bonaire',
        common: 'Bonaire',
      },
      ita: {
        official: 'Bonaire, Sint Eustatius e Saba',
        common: 'Paesi Bassi caraibici',
      },
      jpn: {
        official: 'ボネール、シント・ユースタティウスおよびサバ',
        common: 'ボネール、シント・ユースタティウスおよびサバ',
      },
      kor: {
        official: '보네르, 신트외스타티위스, 사바',
        common: '카리브 네덜란드',
      },
      nld: {
        official: 'Bonaire, Sint Eustatius en Saba',
        common: 'Caribisch Nederland',
      },
      per: {
        official: 'جزایر کارائیب هلند',
        common: 'جزایر کارائیب هلند',
      },
      pol: {
        official: 'Bonaire, Sint Eustatius i Saba',
        common: 'Antyle Holenderskie',
      },
      por: {
        official: 'Bonaire, Saba e Santo Eustáquio',
        common: 'Países Baixos Caribenhos',
      },
      rus: {
        official: 'Бонэйр, Синт-Эстатиус и Саба',
        common: 'Карибские Нидерланды',
      },
      slk: {
        official: 'Bonaire, Sint Eustatius a Saba',
        common: 'Bonaire, Sint Eustatius a Saba',
      },
      spa: {
        official: 'Bonaire, San Eustaquio y Saba',
        common: 'Caribe Neerlandés',
      },
      swe: {
        official: 'Bonaire, Sint Eustatius and Saba',
        common: 'Karibiska Nederländerna',
      },
      urd: {
        official: 'بونایر، سینٹ ایوسٹائیس اور سابا',
        common: 'کیریبین نیدرلینڈز',
      },
      zho: {
        official: '荷蘭加勒比區',
        common: '荷蘭加勒比區',
      },
    },
    latlng: [12.18, -68.25],
    landlocked: false,
    area: 328.0,
    demonyms: {
      eng: {
        f: 'Dutch',
        m: 'Dutch',
      },
      fra: {
        f: 'Néerlandaise',
        m: 'Néerlandais',
      },
    },
    maps: {
      googleMaps: 'https://goo.gl/maps/4XVes1P6uEDTz77WA',
      openStreetMaps: 'https://www.openstreetmap.org/relation/1216720',
    },
    population: 25987,
    car: {
      signs: [''],
      side: 'right',
    },
    timezones: ['UTC-04:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/bq.png',
      svg: 'https://flagcdn.com/bq.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/bq.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/bq.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [12.14, -68.27],
    },
  },
  {
    name: {
      common: 'Chile',
      official: 'Republic of Chile',
      nativeName: {
        spa: {
          official: 'República de Chile',
          common: 'Chile',
        },
      },
    },
    tld: ['.cl'],
    cca2: 'CL',
    ccn3: '152',
    cca3: 'CHL',
    cioc: 'CHI',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      CLP: {
        name: 'Chilean peso',
        symbol: '$',
      },
    },
    idd: {
      root: '+5',
      suffixes: ['6'],
    },
    capital: ['Santiago'],
    altSpellings: ['CL', 'Republic of Chile', 'República de Chile'],
    region: 'Americas',
    subregion: 'South America',
    languages: {
      spa: 'Spanish',
    },
    translations: {
      ara: {
        official: 'جمهورية تشيلي',
        common: 'تشيلي',
      },
      ces: {
        official: 'Chilská republika',
        common: 'Chile',
      },
      cym: {
        official: 'Gweriniaeth Chile',
        common: 'Chile',
      },
      deu: {
        official: 'Republik Chile',
        common: 'Chile',
      },
      est: {
        official: 'Tšiili Vabariik',
        common: 'Tšiili',
      },
      fin: {
        official: 'Chilen tasavalta',
        common: 'Chile',
      },
      fra: {
        official: 'République du Chili',
        common: 'Chili',
      },
      hrv: {
        official: 'Republika Čile',
        common: 'Čile',
      },
      hun: {
        official: 'Chilei Köztársaság',
        common: 'Chile',
      },
      ita: {
        official: 'Repubblica del Cile',
        common: 'Cile',
      },
      jpn: {
        official: 'チリ共和国',
        common: 'チリ',
      },
      kor: {
        official: '칠레 공화국',
        common: '칠레',
      },
      nld: {
        official: 'Republiek Chili',
        common: 'Chili',
      },
      per: {
        official: 'جمهوری شیلی',
        common: 'شیلی',
      },
      pol: {
        official: 'Republika Chile',
        common: 'Chile',
      },
      por: {
        official: 'República do Chile',
        common: 'Chile',
      },
      rus: {
        official: 'Республика Чили',
        common: 'Чили',
      },
      slk: {
        official: 'Čílska republika',
        common: 'Čile',
      },
      spa: {
        official: 'República de Chile',
        common: 'Chile',
      },
      swe: {
        official: 'Republiken Chile',
        common: 'Chile',
      },
      urd: {
        official: 'جمہوریہ چلی',
        common: 'چلی',
      },
      zho: {
        official: '智利共和国',
        common: '智利',
      },
    },
    latlng: [-30.0, -71.0],
    landlocked: false,
    borders: ['ARG', 'BOL', 'PER'],
    area: 756102.0,
    demonyms: {
      eng: {
        f: 'Chilean',
        m: 'Chilean',
      },
      fra: {
        f: 'Chilienne',
        m: 'Chilien',
      },
    },
    flag: '\uD83C\uDDE8\uD83C\uDDF1',
    maps: {
      googleMaps: 'https://goo.gl/maps/XboxyNHh2fAjCPNn9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/167454',
    },
    population: 19116209,
    gini: {
      '2017': 44.4,
    },
    fifa: 'CHI',
    car: {
      signs: ['RCH'],
      side: 'right',
    },
    timezones: ['UTC-06:00', 'UTC-04:00'],
    continents: ['South America'],
    flags: {
      png: 'https://flagcdn.com/w320/cl.png',
      svg: 'https://flagcdn.com/cl.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/cl.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/cl.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-33.45, -70.67],
    },
    postalCode: {
      format: '#######',
      regex: '^(\\d{7})$',
    },
  },
  {
    name: {
      common: 'Germany',
      official: 'Federal Republic of Germany',
      nativeName: {
        deu: {
          official: 'Bundesrepublik Deutschland',
          common: 'Deutschland',
        },
      },
    },
    tld: ['.de'],
    cca2: 'DE',
    ccn3: '276',
    cca3: 'DEU',
    cioc: 'GER',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    idd: {
      root: '+4',
      suffixes: ['9'],
    },
    capital: ['Berlin'],
    altSpellings: ['DE', 'Federal Republic of Germany', 'Bundesrepublik Deutschland'],
    region: 'Europe',
    subregion: 'Western Europe',
    languages: {
      deu: 'German',
    },
    translations: {
      ara: {
        official: 'جمهورية ألمانيا الاتحادية',
        common: 'ألمانيا',
      },
      ces: {
        official: 'Spolková republika Německo',
        common: 'Německo',
      },
      cym: {
        official: 'Federal Republic of Germany',
        common: 'Germany',
      },
      deu: {
        official: 'Bundesrepublik Deutschland',
        common: 'Deutschland',
      },
      est: {
        official: 'Saksamaa Liitvabariik',
        common: 'Saksamaa',
      },
      fin: {
        official: 'Saksan liittotasavalta',
        common: 'Saksa',
      },
      fra: {
        official: "République fédérale d'Allemagne",
        common: 'Allemagne',
      },
      hrv: {
        official: 'Njemačka Federativna Republika',
        common: 'Njemačka',
      },
      hun: {
        official: 'Német Szövetségi Köztársaság',
        common: 'Németország',
      },
      ita: {
        official: 'Repubblica federale di Germania',
        common: 'Germania',
      },
      jpn: {
        official: 'ドイツ連邦共和国',
        common: 'ドイツ',
      },
      kor: {
        official: '독일 연방 공화국',
        common: '독일',
      },
      nld: {
        official: 'Bondsrepubliek Duitsland',
        common: 'Duitsland',
      },
      per: {
        official: 'جمهوری فدرال آلمان',
        common: 'آلمان',
      },
      pol: {
        official: 'Republika Federalna Niemiec',
        common: 'Niemcy',
      },
      por: {
        official: 'República Federal da Alemanha',
        common: 'Alemanha',
      },
      rus: {
        official: 'Федеративная Республика Германия',
        common: 'Германия',
      },
      slk: {
        official: 'Nemecká spolková republika',
        common: 'Nemecko',
      },
      spa: {
        official: 'República Federal de Alemania',
        common: 'Alemania',
      },
      swe: {
        official: 'Förbundsrepubliken Tyskland',
        common: 'Tyskland',
      },
      urd: {
        official: 'وفاقی جمہوریہ جرمنی',
        common: 'جرمنی',
      },
      zho: {
        official: '德意志联邦共和国',
        common: '德国',
      },
    },
    latlng: [51.0, 9.0],
    landlocked: false,
    borders: ['AUT', 'BEL', 'CZE', 'DNK', 'FRA', 'LUX', 'NLD', 'POL', 'CHE'],
    area: 357114.0,
    demonyms: {
      eng: {
        f: 'German',
        m: 'German',
      },
      fra: {
        f: 'Allemande',
        m: 'Allemand',
      },
    },
    flag: '\uD83C\uDDE9\uD83C\uDDEA',
    maps: {
      googleMaps: 'https://goo.gl/maps/mD9FBMq1nvXUBrkv6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/51477',
    },
    population: 83240525,
    gini: {
      '2016': 31.9,
    },
    fifa: 'GER',
    car: {
      signs: ['DY'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/de.png',
      svg: 'https://flagcdn.com/de.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/de.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/de.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [52.52, 13.4],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'El Salvador',
      official: 'Republic of El Salvador',
      nativeName: {
        spa: {
          official: 'República de El Salvador',
          common: 'El Salvador',
        },
      },
    },
    tld: ['.sv'],
    cca2: 'SV',
    ccn3: '222',
    cca3: 'SLV',
    cioc: 'ESA',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      USD: {
        name: 'United States dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+5',
      suffixes: ['03'],
    },
    capital: ['San Salvador'],
    altSpellings: ['SV', 'Republic of El Salvador', 'República de El Salvador'],
    region: 'Americas',
    subregion: 'Central America',
    languages: {
      spa: 'Spanish',
    },
    translations: {
      ara: {
        official: 'جمهورية السلفادور',
        common: 'السلفادور',
      },
      ces: {
        official: 'Salvadorská republika',
        common: 'Salvador',
      },
      cym: {
        official: 'Gweriniaeth El Salfador',
        common: 'El Salfador',
      },
      deu: {
        official: 'Republik El Salvador',
        common: 'El Salvador',
      },
      est: {
        official: 'El Salvadori Vabariik',
        common: 'El Salvador',
      },
      fin: {
        official: 'El Salvadorin tasavalta',
        common: 'El Salvador',
      },
      fra: {
        official: 'République du Salvador',
        common: 'Salvador',
      },
      hrv: {
        official: 'Republika El Salvador',
        common: 'Salvador',
      },
      hun: {
        official: 'Salvadori Köztársaság',
        common: 'Salvador',
      },
      ita: {
        official: 'Repubblica di El Salvador',
        common: 'El Salvador',
      },
      jpn: {
        official: 'エルサルバドル共和国',
        common: 'エルサルバドル',
      },
      kor: {
        official: '엘살바도르 공화국',
        common: '엘살바도르',
      },
      nld: {
        official: 'Republiek El Salvador',
        common: 'El Salvador',
      },
      per: {
        official: 'جمهوری السالوادور',
        common: 'السالوادور',
      },
      pol: {
        official: 'Republika Salwadoru',
        common: 'Salwador',
      },
      por: {
        official: 'República de El Salvador',
        common: 'El Salvador',
      },
      rus: {
        official: 'Республика Эль-Сальвадор',
        common: 'Сальвадор',
      },
      slk: {
        official: 'Salvádorská republika',
        common: 'Salvádor',
      },
      spa: {
        official: 'República de El Salvador',
        common: 'El Salvador',
      },
      swe: {
        official: 'Republiken El Salvador',
        common: 'El Salvador',
      },
      urd: {
        official: 'جمہوریہ ایل سیلواڈور',
        common: 'ایل سیلواڈور',
      },
      zho: {
        official: '萨尔瓦多共和国',
        common: '萨尔瓦多',
      },
    },
    latlng: [13.83333333, -88.91666666],
    landlocked: false,
    borders: ['GTM', 'HND'],
    area: 21041.0,
    demonyms: {
      eng: {
        f: 'Salvadoran',
        m: 'Salvadoran',
      },
      fra: {
        f: 'Salvadorienne',
        m: 'Salvadorien',
      },
    },
    flag: '\uD83C\uDDF8\uD83C\uDDFB',
    maps: {
      googleMaps: 'https://goo.gl/maps/cZnCEi5sEMQtKKcB7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/1520612',
    },
    population: 6486201,
    gini: {
      '2019': 38.8,
    },
    fifa: 'SLV',
    car: {
      signs: ['ES'],
      side: 'right',
    },
    timezones: ['UTC-06:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/sv.png',
      svg: 'https://flagcdn.com/sv.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/sv.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/sv.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [13.7, -89.2],
    },
    postalCode: {
      format: 'CP ####',
      regex: '^(?:CP)*(\\d{4})$',
    },
  },
  {
    name: {
      common: 'Guatemala',
      official: 'Republic of Guatemala',
      nativeName: {
        spa: {
          official: 'República de Guatemala',
          common: 'Guatemala',
        },
      },
    },
    tld: ['.gt'],
    cca2: 'GT',
    ccn3: '320',
    cca3: 'GTM',
    cioc: 'GUA',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      GTQ: {
        name: 'Guatemalan quetzal',
        symbol: 'Q',
      },
    },
    idd: {
      root: '+5',
      suffixes: ['02'],
    },
    capital: ['Guatemala City'],
    altSpellings: ['GT'],
    region: 'Americas',
    subregion: 'Central America',
    languages: {
      spa: 'Spanish',
    },
    translations: {
      ara: {
        official: 'جمهورية غواتيمالا',
        common: 'غواتيمالا',
      },
      ces: {
        official: 'Republika Guatemala',
        common: 'Guatemala',
      },
      cym: {
        official: 'Republic of Guatemala',
        common: 'Guatemala',
      },
      deu: {
        official: 'Republik Guatemala',
        common: 'Guatemala',
      },
      est: {
        official: 'Guatemala Vabariik',
        common: 'Guatemala',
      },
      fin: {
        official: 'Guatemalan tasavalta',
        common: 'Guatemala',
      },
      fra: {
        official: 'République du Guatemala',
        common: 'Guatemala',
      },
      hrv: {
        official: 'Republika Gvatemala',
        common: 'Gvatemala',
      },
      hun: {
        official: 'Guatemalai Köztársaság',
        common: 'Guatemala',
      },
      ita: {
        official: 'Repubblica del Guatemala',
        common: 'Guatemala',
      },
      jpn: {
        official: 'グアテマラ共和国',
        common: 'グアテマラ',
      },
      kor: {
        official: '과테말라 공화국',
        common: '과테말라',
      },
      nld: {
        official: 'Republiek Guatemala',
        common: 'Guatemala',
      },
      per: {
        official: 'جمهوری گواتِمالا',
        common: 'گواتِمالا',
      },
      pol: {
        official: 'Republika Gwatemali',
        common: 'Gwatemala',
      },
      por: {
        official: 'República da Guatemala',
        common: 'Guatemala',
      },
      rus: {
        official: 'Республика Гватемала',
        common: 'Гватемала',
      },
      slk: {
        official: 'Guatemalská republika',
        common: 'Guatemala',
      },
      spa: {
        official: 'República de Guatemala',
        common: 'Guatemala',
      },
      swe: {
        official: 'Republiken Guatemala',
        common: 'Guatemala',
      },
      urd: {
        official: 'جمہوریہ گواتیمالا',
        common: 'گواتیمالا',
      },
      zho: {
        official: '危地马拉共和国',
        common: '危地马拉',
      },
    },
    latlng: [15.5, -90.25],
    landlocked: false,
    borders: ['BLZ', 'SLV', 'HND', 'MEX'],
    area: 108889.0,
    demonyms: {
      eng: {
        f: 'Guatemalan',
        m: 'Guatemalan',
      },
      fra: {
        f: 'Guatémaltèque',
        m: 'Guatémaltèque',
      },
    },
    flag: '\uD83C\uDDEC\uD83C\uDDF9',
    maps: {
      googleMaps: 'https://goo.gl/maps/JoRAbem4Hxb9FYbVA',
      openStreetMaps: 'https://www.openstreetmap.org/relation/1521463',
    },
    population: 16858333,
    gini: {
      '2014': 48.3,
    },
    fifa: 'GUA',
    car: {
      signs: ['GCA'],
      side: 'right',
    },
    timezones: ['UTC-06:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/gt.png',
      svg: 'https://flagcdn.com/gt.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/gt.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/gt.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [14.62, -90.52],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Lesotho',
      official: 'Kingdom of Lesotho',
      nativeName: {
        eng: {
          official: 'Kingdom of Lesotho',
          common: 'Lesotho',
        },
        sot: {
          official: 'Kingdom of Lesotho',
          common: 'Lesotho',
        },
      },
    },
    tld: ['.ls'],
    cca2: 'LS',
    ccn3: '426',
    cca3: 'LSO',
    cioc: 'LES',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      LSL: {
        name: 'Lesotho loti',
        symbol: 'L',
      },
      ZAR: {
        name: 'South African rand',
        symbol: 'R',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['66'],
    },
    capital: ['Maseru'],
    altSpellings: ['LS', 'Kingdom of Lesotho', 'Muso oa Lesotho'],
    region: 'Africa',
    subregion: 'Southern Africa',
    languages: {
      eng: 'English',
      sot: 'Sotho',
    },
    translations: {
      ara: {
        official: 'مملكة ليسوتو',
        common: 'ليسوتو',
      },
      ces: {
        official: 'Lesothské království',
        common: 'Lesotho',
      },
      cym: {
        official: 'Kingdom of Lesotho',
        common: 'Lesotho',
      },
      deu: {
        official: 'Königreich Lesotho',
        common: 'Lesotho',
      },
      est: {
        official: 'Lesotho Kuningriik',
        common: 'Lesotho',
      },
      fin: {
        official: 'Lesothon kuningaskunta',
        common: 'Lesotho',
      },
      fra: {
        official: 'Royaume du Lesotho',
        common: 'Lesotho',
      },
      hrv: {
        official: 'Kraljevina Lesoto',
        common: 'Lesoto',
      },
      hun: {
        official: 'Lesothói Királyság',
        common: 'Lesotho',
      },
      ita: {
        official: 'Regno del Lesotho',
        common: 'Lesotho',
      },
      jpn: {
        official: 'レソト王国',
        common: 'レソト',
      },
      kor: {
        official: '레소토 왕국',
        common: '레소토',
      },
      nld: {
        official: 'Koninkrijk Lesotho',
        common: 'Lesotho',
      },
      per: {
        official: 'پادشاهی لسوتو',
        common: 'لسوتو',
      },
      pol: {
        official: 'Królestwo Lesotho',
        common: 'Lesotho',
      },
      por: {
        official: 'Reino do Lesoto',
        common: 'Lesoto',
      },
      rus: {
        official: 'Королевство Лесото',
        common: 'Лесото',
      },
      slk: {
        official: 'Lesothské kráľovstvo',
        common: 'Lesotho',
      },
      spa: {
        official: 'Reino de Lesotho',
        common: 'Lesotho',
      },
      swe: {
        official: 'Konungariket Lesotho',
        common: 'Lesotho',
      },
      urd: {
        official: 'مملکتِ لیسوتھو',
        common: 'لیسوتھو',
      },
      zho: {
        official: '莱索托王国',
        common: '莱索托',
      },
    },
    latlng: [-29.5, 28.5],
    landlocked: true,
    borders: ['ZAF'],
    area: 30355.0,
    demonyms: {
      eng: {
        f: 'Mosotho',
        m: 'Mosotho',
      },
      fra: {
        f: 'Lésothienne',
        m: 'Lésothien',
      },
    },
    flag: '\uD83C\uDDF1\uD83C\uDDF8',
    maps: {
      googleMaps: 'https://goo.gl/maps/H8gJi5mL4Cmd1SF28',
      openStreetMaps: 'https://www.openstreetmap.org/relation/2093234',
    },
    population: 2142252,
    gini: {
      '2017': 44.9,
    },
    fifa: 'LES',
    car: {
      signs: ['LS'],
      side: 'left',
    },
    timezones: ['UTC+02:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/ls.png',
      svg: 'https://flagcdn.com/ls.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ls.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ls.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-29.32, 27.48],
    },
    postalCode: {
      format: '###',
      regex: '^(\\d{3})$',
    },
  },
  {
    name: {
      common: 'Peru',
      official: 'Republic of Peru',
      nativeName: {
        aym: {
          official: 'Piruw Suyu',
          common: 'Piruw',
        },
        que: {
          official: 'Piruw Ripuwlika',
          common: 'Piruw',
        },
        spa: {
          official: 'República del Perú',
          common: 'Perú',
        },
      },
    },
    tld: ['.pe'],
    cca2: 'PE',
    ccn3: '604',
    cca3: 'PER',
    cioc: 'PER',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      PEN: {
        name: 'Peruvian sol',
        symbol: 'S/ ',
      },
    },
    idd: {
      root: '+5',
      suffixes: ['1'],
    },
    capital: ['Lima'],
    altSpellings: ['PE', 'Republic of Peru', 'República del Perú'],
    region: 'Americas',
    subregion: 'South America',
    languages: {
      aym: 'Aymara',
      que: 'Quechua',
      spa: 'Spanish',
    },
    translations: {
      ara: {
        official: 'جمهورية بيرو',
        common: 'بيرو',
      },
      ces: {
        official: 'Peruánská republika',
        common: 'Peru',
      },
      cym: {
        official: 'Republic of Peru',
        common: 'Peru',
      },
      deu: {
        official: 'Republik Peru',
        common: 'Peru',
      },
      est: {
        official: 'Peruu Vabariik',
        common: 'Peruu',
      },
      fin: {
        official: 'Perun tasavalta',
        common: 'Peru',
      },
      fra: {
        official: 'République du Pérou',
        common: 'Pérou',
      },
      hrv: {
        official: 'Republika Peru',
        common: 'Peru',
      },
      hun: {
        official: 'Perui Köztársaság',
        common: 'Peru',
      },
      ita: {
        official: 'Repubblica del Perù',
        common: 'Perù',
      },
      jpn: {
        official: 'ペルー共和国',
        common: 'ペルー',
      },
      kor: {
        official: '페루 공화국',
        common: '페루',
      },
      nld: {
        official: 'Republiek Peru',
        common: 'Peru',
      },
      per: {
        official: 'جمهوری پرو',
        common: 'پرو',
      },
      pol: {
        official: 'Republika Peru',
        common: 'Peru',
      },
      por: {
        official: 'República do Peru',
        common: 'Perú',
      },
      rus: {
        official: 'Республика Перу',
        common: 'Перу',
      },
      slk: {
        official: 'Peruánska republika',
        common: 'Peru',
      },
      spa: {
        official: 'República de Perú',
        common: 'Perú',
      },
      swe: {
        official: 'Republiken Peru',
        common: 'Peru',
      },
      urd: {
        official: 'جمہوریہ پیرو',
        common: 'پیرو',
      },
      zho: {
        official: '秘鲁共和国',
        common: '秘鲁',
      },
    },
    latlng: [-10.0, -76.0],
    landlocked: false,
    borders: ['BOL', 'BRA', 'CHL', 'COL', 'ECU'],
    area: 1285216.0,
    demonyms: {
      eng: {
        f: 'Peruvian',
        m: 'Peruvian',
      },
      fra: {
        f: 'Péruvienne',
        m: 'Péruvien',
      },
    },
    flag: '\uD83C\uDDF5\uD83C\uDDEA',
    maps: {
      googleMaps: 'https://goo.gl/maps/uDWEUaXNcZTng1fP6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/288247',
    },
    population: 32971846,
    gini: {
      '2019': 41.5,
    },
    fifa: 'PER',
    car: {
      signs: ['PE'],
      side: 'right',
    },
    timezones: ['UTC-05:00'],
    continents: ['South America'],
    flags: {
      png: 'https://flagcdn.com/w320/pe.png',
      svg: 'https://flagcdn.com/pe.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/pe.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/pe.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-12.05, -77.05],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Sint Maarten',
      official: 'Sint Maarten',
      nativeName: {
        eng: {
          official: 'Sint Maarten',
          common: 'Sint Maarten',
        },
        fra: {
          official: 'Saint-Martin',
          common: 'Saint-Martin',
        },
        nld: {
          official: 'Sint Maarten',
          common: 'Sint Maarten',
        },
      },
    },
    tld: ['.sx'],
    cca2: 'SX',
    ccn3: '534',
    cca3: 'SXM',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      ANG: {
        name: 'Netherlands Antillean guilder',
        symbol: 'ƒ',
      },
    },
    idd: {
      root: '+1',
      suffixes: ['721'],
    },
    capital: ['Philipsburg'],
    altSpellings: ['SX', 'Sint Maarten (Dutch part)'],
    region: 'Americas',
    subregion: 'Caribbean',
    languages: {
      eng: 'English',
      fra: 'French',
      nld: 'Dutch',
    },
    translations: {
      ara: {
        official: 'سينت مارتن',
        common: 'سينت مارتن',
      },
      ces: {
        official: 'Svatý Martin',
        common: 'Svatý Martin (Nizozemsko)',
      },
      cym: {
        official: 'Sint Maarten',
        common: 'Sint Maarten',
      },
      deu: {
        official: 'Sint Maarten',
        common: 'Sint Maarten',
      },
      est: {
        official: 'Sint Maarten',
        common: 'Sint Maarten',
      },
      fin: {
        official: 'Sint Maarten',
        common: 'Sint Maarten',
      },
      fra: {
        official: 'Sint Maarten',
        common: 'Saint-Martin',
      },
      hrv: {
        official: 'Sveti Martin',
        common: 'Sveti Martin',
      },
      hun: {
        official: 'Sint Maarten',
        common: 'Sint Maarten',
      },
      ita: {
        official: 'Sint Maarten',
        common: 'Sint Maarten',
      },
      jpn: {
        official: 'シントマールテン島',
        common: 'シント・マールテン',
      },
      kor: {
        official: '신트마르턴',
        common: '신트마르턴',
      },
      nld: {
        official: 'Sint Maarten',
        common: 'Sint Maarten',
      },
      per: {
        official: 'سن مارتن',
        common: 'سن مارتن',
      },
      pol: {
        official: 'Sint Maarten',
        common: 'Sint Maarten',
      },
      por: {
        official: 'Sint Maarten',
        common: 'São Martinho',
      },
      rus: {
        official: 'Синт-Маартен',
        common: 'Синт-Мартен',
      },
      slk: {
        official: 'Sint Maarten',
        common: 'Sint Maarten',
      },
      spa: {
        official: 'Sint Maarten',
        common: 'Sint Maarten',
      },
      swe: {
        official: 'Sint Maarten',
        common: 'Sint Maarten',
      },
      urd: {
        official: 'سنٹ مارٹن',
        common: 'سنٹ مارٹن',
      },
      zho: {
        official: '圣马丁岛',
        common: '圣马丁岛',
      },
    },
    latlng: [18.033333, -63.05],
    landlocked: false,
    borders: ['MAF'],
    area: 34.0,
    demonyms: {
      eng: {
        f: 'St. Maartener',
        m: 'St. Maartener',
      },
      fra: {
        f: 'Saint-Martinoise',
        m: 'Saint-Martinois',
      },
    },
    flag: '\uD83C\uDDF8\uD83C\uDDFD',
    maps: {
      googleMaps: 'https://goo.gl/maps/DjvcESy1a1oGEZuNA',
      openStreetMaps: 'https://www.openstreetmap.org/relation/1231790',
    },
    population: 40812,
    car: {
      signs: ['SX'],
      side: 'right',
    },
    timezones: ['UTC-04:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/sx.png',
      svg: 'https://flagcdn.com/sx.svg',
    },
    coatOfArms: {},
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [18.02, -63.03],
    },
  },
  {
    name: {
      common: 'Djibouti',
      official: 'Republic of Djibouti',
      nativeName: {
        ara: {
          official: 'جمهورية جيبوتي',
          common: 'جيبوتي‎',
        },
        fra: {
          official: 'République de Djibouti',
          common: 'Djibouti',
        },
      },
    },
    tld: ['.dj'],
    cca2: 'DJ',
    ccn3: '262',
    cca3: 'DJI',
    cioc: 'DJI',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      DJF: {
        name: 'Djiboutian franc',
        symbol: 'Fr',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['53'],
    },
    capital: ['Djibouti'],
    altSpellings: [
      'DJ',
      'Jabuuti',
      'Gabuuti',
      'Republic of Djibouti',
      'République de Djibouti',
      'Gabuutih Ummuuno',
      'Jamhuuriyadda Jabuuti',
    ],
    region: 'Africa',
    subregion: 'Eastern Africa',
    languages: {
      ara: 'Arabic',
      fra: 'French',
    },
    translations: {
      ara: {
        official: 'جمهورية جيبوتي',
        common: 'جيبوتي',
      },
      ces: {
        official: 'Džibutská republika',
        common: 'Džibutsko',
      },
      cym: {
        official: 'Gweriniaeth Jibwti',
        common: 'Jibwti',
      },
      deu: {
        official: 'Republik Dschibuti',
        common: 'Dschibuti',
      },
      est: {
        official: 'Djibouti Vabariik',
        common: 'Djibouti',
      },
      fin: {
        official: 'Dijiboutin tasavalta',
        common: 'Dijibouti',
      },
      fra: {
        official: 'République de Djibouti',
        common: 'Djibouti',
      },
      hrv: {
        official: 'Republika Džibuti',
        common: 'Džibuti',
      },
      hun: {
        official: 'Dzsibuti Köztársaság',
        common: 'Dzsibuti',
      },
      ita: {
        official: 'Repubblica di Gibuti',
        common: 'Gibuti',
      },
      jpn: {
        official: 'ジブチ共和国',
        common: 'ジブチ',
      },
      kor: {
        official: '지부티 공화국',
        common: '지부티',
      },
      nld: {
        official: 'Republiek Djibouti',
        common: 'Djibouti',
      },
      per: {
        official: 'جمهوری جیبوتی',
        common: 'جیبوتی',
      },
      pol: {
        official: 'Republika Dżibuti',
        common: 'Dżibuti',
      },
      por: {
        official: 'República do Djibouti',
        common: 'Djibouti',
      },
      rus: {
        official: 'Республика Джибути',
        common: 'Джибути',
      },
      slk: {
        official: 'ǅibutská republika',
        common: 'ǅibutsko',
      },
      spa: {
        official: 'República de Djibouti',
        common: 'Djibouti',
      },
      swe: {
        official: 'Republiken Djibouti',
        common: 'Djibouti',
      },
      urd: {
        official: 'جمہوریہ جبوتی',
        common: 'جبوتی',
      },
      zho: {
        official: '吉布提共和国',
        common: '吉布提',
      },
    },
    latlng: [11.5, 43.0],
    landlocked: false,
    borders: ['ERI', 'ETH', 'SOM'],
    area: 23200.0,
    demonyms: {
      eng: {
        f: 'Djibouti',
        m: 'Djibouti',
      },
      fra: {
        f: 'Djiboutienne',
        m: 'Djiboutien',
      },
    },
    flag: '\uD83C\uDDE9\uD83C\uDDEF',
    maps: {
      googleMaps: 'https://goo.gl/maps/V1HWfzN3bS1kwf4C6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/192801',
    },
    population: 988002,
    gini: {
      '2017': 41.6,
    },
    fifa: 'DJI',
    car: {
      signs: ['DJI'],
      side: 'right',
    },
    timezones: ['UTC+03:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/dj.png',
      svg: 'https://flagcdn.com/dj.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/dj.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/dj.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [11.58, 43.15],
    },
  },
  {
    name: {
      common: 'French Southern and Antarctic Lands',
      official: 'Territory of the French Southern and Antarctic Lands',
      nativeName: {
        fra: {
          official: 'Territoire des Terres australes et antarctiques françaises',
          common: 'Terres australes et antarctiques françaises',
        },
      },
    },
    tld: ['.tf'],
    cca2: 'TF',
    ccn3: '260',
    cca3: 'ATF',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['62'],
    },
    capital: ['Port-aux-Français'],
    altSpellings: ['TF', 'French Southern Territories'],
    region: 'Antarctic',
    languages: {
      fra: 'French',
    },
    translations: {
      ara: {
        official: 'مقاطعات وأقاليم ما وراء البحار الفرنسية',
        common: 'أراض فرنسية جنوبية وأنتارتيكية',
      },
      ces: {
        official: 'Teritorium Francouzská jižní a antarktická území',
        common: 'Francouzská jižní a antarktická území',
      },
      cym: {
        official: 'Territory of the French Southern and Antarctic Lands',
        common: 'French Southern and Antarctic Lands',
      },
      deu: {
        official: 'Gebiet der Französisch Süd- und Antarktisgebiete',
        common: 'Französische Süd- und Antarktisgebiete',
      },
      est: {
        official: 'Prantsuse Lõunaalad',
        common: 'Prantsuse Lõunaalad',
      },
      fin: {
        official: 'Ranskan eteläiset ja antarktiset alueet',
        common: 'Ranskan eteläiset ja antarktiset alueet',
      },
      fra: {
        official: 'Territoire des Terres australes et antarctiques françaises',
        common: 'Terres australes et antarctiques françaises',
      },
      hrv: {
        official: 'Teritoriju Francuski južni i antarktički teritoriji',
        common: 'Francuski južni i antarktički teritoriji',
      },
      hun: {
        official: 'Francia déli és antarktiszi területek',
        common: 'Francia déli és antarktiszi területek',
      },
      ita: {
        official: 'Territorio della australi e antartiche francesi Terre',
        common: 'Territori Francesi del Sud',
      },
      jpn: {
        official: 'フランス領南方·南極地域の領土',
        common: 'フランス領南方・南極地域',
      },
      kor: {
        official: '프랑스령 남부와 남극 지역',
        common: '프랑스령 남부와 남극 지역',
      },
      nld: {
        official: 'Grondgebied van de Franse Zuidelijke en Antarctische gebieden',
        common: 'Franse Gebieden in de zuidelijke Indische Oceaan',
      },
      per: {
        official: 'سرزمین‌های جنوبی و جنوبگانی فرانسه',
        common: 'سرزمین‌های جنوبی و جنوبگانی فرانسه',
      },
      pol: {
        official: 'Francuskie Terytoria Południowe i Antarktyczne',
        common: 'Francuskie Terytoria Południowe i Antarktyczne',
      },
      por: {
        official: 'Território do Sul e Antártica Francesa',
        common: 'Terras Austrais e Antárticas Francesas',
      },
      rus: {
        official: 'Территория Французские Южные и Антарктические земли',
        common: 'Французские Южные и Антарктические территории',
      },
      slk: {
        official: 'Francúzske južné a antarktické územia',
        common: 'Francúzske juŽné a antarktické územia',
      },
      spa: {
        official: 'Territorio del Francés Tierras australes y antárticas',
        common: 'Tierras Australes y Antárticas Francesas',
      },
      swe: {
        official: 'Franska syd- och Antarktisterritorierna',
        common: 'Franska södra territorierna',
      },
      urd: {
        official: 'سرزمینِ جنوبی فرانسیسیہ و انٹارکٹیکہ',
        common: 'سرزمین جنوبی فرانسیسیہ و انٹارکٹیکا',
      },
      zho: {
        official: '法国南部和南极土地',
        common: '法国南部和南极土地',
      },
    },
    latlng: [-49.25, 69.167],
    landlocked: false,
    area: 7747.0,
    demonyms: {
      eng: {
        f: 'French',
        m: 'French',
      },
      fra: {
        f: 'Française',
        m: 'Français',
      },
    },
    flag: '\uD83C\uDDF9\uD83C\uDDEB',
    maps: {
      googleMaps: 'https://goo.gl/maps/6ua6CX1m4w1xF2Em7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/2186658',
    },
    population: 400,
    car: {
      signs: [''],
      side: 'right',
    },
    timezones: ['UTC+05:00'],
    continents: ['Antarctica'],
    flags: {
      png: 'https://flagcdn.com/w320/tf.png',
      svg: 'https://flagcdn.com/tf.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/tf.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/tf.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [48.81, -1.4],
    },
  },
  {
    name: {
      common: 'Australia',
      official: 'Commonwealth of Australia',
      nativeName: {
        eng: {
          official: 'Commonwealth of Australia',
          common: 'Australia',
        },
      },
    },
    tld: ['.au'],
    cca2: 'AU',
    ccn3: '036',
    cca3: 'AUS',
    cioc: 'AUS',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      AUD: {
        name: 'Australian dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+6',
      suffixes: ['1'],
    },
    capital: ['Canberra'],
    altSpellings: ['AU'],
    region: 'Oceania',
    subregion: 'Australia and New Zealand',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'كومونولث أستراليا',
        common: 'أستراليا',
      },
      ces: {
        official: 'Australské společenství',
        common: 'Austrálie',
      },
      cym: {
        official: 'Cymanwlad Awstralia',
        common: 'Awstralia',
      },
      deu: {
        official: 'Commonwealth Australien',
        common: 'Australien',
      },
      est: {
        official: 'Austraalia Ühendus',
        common: 'Austraalia',
      },
      fin: {
        official: 'Australian liittovaltio',
        common: 'Australia',
      },
      fra: {
        official: 'Australie',
        common: 'Australie',
      },
      hrv: {
        official: 'Commonwealth of Australia',
        common: 'Australija',
      },
      hun: {
        official: 'Ausztrál Államszövetség',
        common: 'Ausztrália',
      },
      ita: {
        official: "Commonwealth dell'Australia",
        common: 'Australia',
      },
      jpn: {
        official: 'オーストラリア連邦',
        common: 'オーストラリア',
      },
      kor: {
        official: '오스트레일리아 연방',
        common: '호주',
      },
      nld: {
        official: 'Gemenebest van Australië',
        common: 'Australië',
      },
      per: {
        official: 'قلمرو همسود استرالیا',
        common: 'استرالیا',
      },
      pol: {
        official: 'Związek Australijski',
        common: 'Australia',
      },
      por: {
        official: 'Comunidade da Austrália',
        common: 'Austrália',
      },
      rus: {
        official: 'Содружество Австралии',
        common: 'Австралия',
      },
      slk: {
        official: 'Austrálsky zväz',
        common: 'Austrália',
      },
      spa: {
        official: 'Mancomunidad de Australia',
        common: 'Australia',
      },
      swe: {
        official: 'Australiska statsförbundet',
        common: 'Australien',
      },
      urd: {
        official: 'دولتِ مشترکہ آسٹریلیا',
        common: 'آسٹریلیا',
      },
      zho: {
        official: '澳大利亚联邦',
        common: '澳大利亚',
      },
    },
    latlng: [-27.0, 133.0],
    landlocked: false,
    area: 7692024.0,
    demonyms: {
      eng: {
        f: 'Australian',
        m: 'Australian',
      },
      fra: {
        f: 'Australienne',
        m: 'Australien',
      },
    },
    flag: '\uD83C\uDDE6\uD83C\uDDFA',
    maps: {
      googleMaps: 'https://goo.gl/maps/DcjaDa7UbhnZTndH6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/80500',
    },
    population: 25687041,
    gini: {
      '2014': 34.4,
    },
    fifa: 'AUS',
    car: {
      signs: ['AUS'],
      side: 'left',
    },
    timezones: ['UTC+05:00', 'UTC+06:30', 'UTC+07:00', 'UTC+08:00', 'UTC+09:30', 'UTC+10:00', 'UTC+10:30', 'UTC+11:30'],
    continents: ['Oceania'],
    flags: {
      png: 'https://flagcdn.com/w320/au.png',
      svg: 'https://flagcdn.com/au.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/au.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/au.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-35.27, 149.13],
    },
    postalCode: {
      format: '####',
      regex: '^(\\d{4})$',
    },
  },
  {
    name: {
      common: 'Chad',
      official: 'Republic of Chad',
      nativeName: {
        ara: {
          official: 'جمهورية تشاد',
          common: 'تشاد‎',
        },
        fra: {
          official: 'République du Tchad',
          common: 'Tchad',
        },
      },
    },
    tld: ['.td'],
    cca2: 'TD',
    ccn3: '148',
    cca3: 'TCD',
    cioc: 'CHA',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      XAF: {
        name: 'Central African CFA franc',
        symbol: 'Fr',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['35'],
    },
    capital: ["N'Djamena"],
    altSpellings: ['TD', 'Tchad', 'Republic of Chad', 'République du Tchad'],
    region: 'Africa',
    subregion: 'Middle Africa',
    languages: {
      ara: 'Arabic',
      fra: 'French',
    },
    translations: {
      ara: {
        official: 'جمهورية تشاد',
        common: 'تشاد',
      },
      ces: {
        official: 'Čadská republika',
        common: 'Čad',
      },
      cym: {
        official: 'Gweriniaeth Tsiad',
        common: 'Tsiad',
      },
      deu: {
        official: 'Republik Tschad',
        common: 'Tschad',
      },
      est: {
        official: 'Tšaadi Vabariik',
        common: 'Tšaad',
      },
      fin: {
        official: 'Tšadin tasavalta',
        common: 'Tšad',
      },
      fra: {
        official: 'République du Tchad',
        common: 'Tchad',
      },
      hrv: {
        official: 'Čadu',
        common: 'Čad',
      },
      hun: {
        official: 'Csád Köztársaság',
        common: 'Csád',
      },
      ita: {
        official: 'Repubblica del Ciad',
        common: 'Ciad',
      },
      jpn: {
        official: 'チャド共和国',
        common: 'チャド',
      },
      kor: {
        official: '차드 공화국',
        common: '차드',
      },
      nld: {
        official: 'Republiek Tsjaad',
        common: 'Tsjaad',
      },
      per: {
        official: 'جمهوری چاد',
        common: 'چاد',
      },
      pol: {
        official: 'Republika Czadu',
        common: 'Czad',
      },
      por: {
        official: 'República do Chade',
        common: 'Chade',
      },
      rus: {
        official: 'Республика Чад',
        common: 'Чад',
      },
      slk: {
        official: 'Čadská republika',
        common: 'Čad',
      },
      spa: {
        official: 'República de Chad',
        common: 'Chad',
      },
      swe: {
        official: 'Republiken Tchad',
        common: 'Tchad',
      },
      urd: {
        official: 'جمہوریہ چاڈ',
        common: 'چاڈ',
      },
      zho: {
        official: '乍得共和国',
        common: '乍得',
      },
    },
    latlng: [15.0, 19.0],
    landlocked: true,
    borders: ['CMR', 'CAF', 'LBY', 'NER', 'NGA', 'SDN'],
    area: 1284000.0,
    demonyms: {
      eng: {
        f: 'Chadian',
        m: 'Chadian',
      },
      fra: {
        f: 'Tchadienne',
        m: 'Tchadien',
      },
    },
    flag: '\uD83C\uDDF9\uD83C\uDDE9',
    maps: {
      googleMaps: 'https://goo.gl/maps/ziUdAZ8skuNfx5Hx7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/2361304',
    },
    population: 16425859,
    gini: {
      '2011': 43.3,
    },
    fifa: 'CHA',
    car: {
      signs: ['TCH', 'TD'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/td.png',
      svg: 'https://flagcdn.com/td.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/td.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/td.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [12.1, 15.03],
    },
  },
  {
    name: {
      common: 'São Tomé and Príncipe',
      official: 'Democratic Republic of São Tomé and Príncipe',
      nativeName: {
        por: {
          official: 'República Democrática do São Tomé e Príncipe',
          common: 'São Tomé e Príncipe',
        },
      },
    },
    tld: ['.st'],
    cca2: 'ST',
    ccn3: '678',
    cca3: 'STP',
    cioc: 'STP',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      STN: {
        name: 'São Tomé and Príncipe dobra',
        symbol: 'Db',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['39'],
    },
    capital: ['São Tomé'],
    altSpellings: [
      'ST',
      'Democratic Republic of São Tomé and Príncipe',
      'Sao Tome and Principe',
      'República Democrática de São Tomé e Príncipe',
    ],
    region: 'Africa',
    subregion: 'Middle Africa',
    languages: {
      por: 'Portuguese',
    },
    translations: {
      ara: {
        official: 'جمهورية ساو تومي وبرينسيب الديمقراطية',
        common: 'ساو تومي وبرينسيب',
      },
      ces: {
        official: 'Demokratická republika Svatý Tomáš a Princův ostrov',
        common: 'Svatý Tomáš a Princův ostrov',
      },
      cym: {
        official: 'Democratic Republic of São Tomé and Príncipe',
        common: 'São Tomé and Príncipe',
      },
      deu: {
        official: 'Demokratische Republik São Tomé und Príncipe',
        common: 'São Tomé und Príncipe',
      },
      est: {
        official: 'São Tomé ja Príncipe Demokraatlik Vabariik',
        common: 'São Tomé ja Príncipe',
      },
      fin: {
        official: 'São Tomé ja Príncipen demokraattinen tasavalta',
        common: 'São Téme ja Príncipe',
      },
      fra: {
        official: 'République démocratique de São Tomé et Príncipe',
        common: 'São Tomé et Príncipe',
      },
      hrv: {
        official: 'Demokratska Republika São Tome i Principe',
        common: 'Sveti Toma i Princip',
      },
      hun: {
        official: 'São Tomé és Príncipe Demokratikus Köztársaság',
        common: 'São Tomé és Príncipe',
      },
      ita: {
        official: 'Repubblica democratica di São Tomé e Príncipe',
        common: 'São Tomé e Príncipe',
      },
      jpn: {
        official: 'サントメ·プリンシペ民主共和国',
        common: 'サントメ・プリンシペ',
      },
      kor: {
        official: '상투메 프린시페 민주 공화국',
        common: '상투메 프린시페',
      },
      nld: {
        official: 'Democratische Republiek Sao Tomé en Principe',
        common: 'Sao Tomé en Principe',
      },
      per: {
        official: 'جمهوری دموکراتیک سائوتومه و پرنسیپ',
        common: 'سائوتومه و پرنسیپ',
      },
      pol: {
        official: 'Demokratyczna Republika Wysp Świętego Tomasza i Książęcej',
        common: 'Wyspy Świętego Tomasza i Książęca',
      },
      por: {
        official: 'República Democrática de São Tomé e Príncipe',
        common: 'São Tomé e Príncipe',
      },
      rus: {
        official: 'Демократическая Республика Сан-Томе и Принсипи',
        common: 'Сан-Томе и Принсипи',
      },
      slk: {
        official: 'Demokratická republika Svätého Tomáša A princovho ostrova',
        common: 'Svätý Tomáš a Princov ostrov',
      },
      spa: {
        official: 'República Democrática de Santo Tomé y Príncipe',
        common: 'Santo Tomé y Príncipe',
      },
      swe: {
        official: 'Demokratiska republiken São Tomé och Príncipe',
        common: 'São Tomé och Príncipe',
      },
      urd: {
        official: 'جمہوریہ ساؤ ٹومے و پرنسپے',
        common: 'ساؤ ٹومے و پرنسپے',
      },
      zho: {
        official: '圣多美和普林西比民主共和国',
        common: '圣多美和普林西比',
      },
    },
    latlng: [1.0, 7.0],
    landlocked: false,
    area: 964.0,
    demonyms: {
      eng: {
        f: 'Sao Tomean',
        m: 'Sao Tomean',
      },
      fra: {
        f: 'Santoméenne',
        m: 'Santoméen',
      },
    },
    flag: '\uD83C\uDDF8\uD83C\uDDF9',
    maps: {
      googleMaps: 'https://goo.gl/maps/9EUppm13RtPX9oF46',
      openStreetMaps: 'https://www.openstreetmap.org/relation/535880',
    },
    population: 219161,
    gini: {
      '2017': 56.3,
    },
    fifa: 'STP',
    car: {
      signs: ['STP'],
      side: 'right',
    },
    timezones: ['UTC'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/st.png',
      svg: 'https://flagcdn.com/st.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/st.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/st.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [0.34, 6.73],
    },
  },
  {
    name: {
      common: 'United States',
      official: 'United States of America',
      nativeName: {
        eng: {
          official: 'United States of America',
          common: 'United States',
        },
      },
    },
    tld: ['.us'],
    cca2: 'US',
    ccn3: '840',
    cca3: 'USA',
    cioc: 'USA',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      USD: {
        name: 'United States dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+1',
      suffixes: [
        '201',
        '202',
        '203',
        '205',
        '206',
        '207',
        '208',
        '209',
        '210',
        '212',
        '213',
        '214',
        '215',
        '216',
        '217',
        '218',
        '219',
        '220',
        '224',
        '225',
        '227',
        '228',
        '229',
        '231',
        '234',
        '239',
        '240',
        '248',
        '251',
        '252',
        '253',
        '254',
        '256',
        '260',
        '262',
        '267',
        '269',
        '270',
        '272',
        '274',
        '276',
        '281',
        '283',
        '301',
        '302',
        '303',
        '304',
        '305',
        '307',
        '308',
        '309',
        '310',
        '312',
        '313',
        '314',
        '315',
        '316',
        '317',
        '318',
        '319',
        '320',
        '321',
        '323',
        '325',
        '327',
        '330',
        '331',
        '334',
        '336',
        '337',
        '339',
        '346',
        '347',
        '351',
        '352',
        '360',
        '361',
        '364',
        '380',
        '385',
        '386',
        '401',
        '402',
        '404',
        '405',
        '406',
        '407',
        '408',
        '409',
        '410',
        '412',
        '413',
        '414',
        '415',
        '417',
        '419',
        '423',
        '424',
        '425',
        '430',
        '432',
        '434',
        '435',
        '440',
        '442',
        '443',
        '447',
        '458',
        '463',
        '464',
        '469',
        '470',
        '475',
        '478',
        '479',
        '480',
        '484',
        '501',
        '502',
        '503',
        '504',
        '505',
        '507',
        '508',
        '509',
        '510',
        '512',
        '513',
        '515',
        '516',
        '517',
        '518',
        '520',
        '530',
        '531',
        '534',
        '539',
        '540',
        '541',
        '551',
        '559',
        '561',
        '562',
        '563',
        '564',
        '567',
        '570',
        '571',
        '573',
        '574',
        '575',
        '580',
        '585',
        '586',
        '601',
        '602',
        '603',
        '605',
        '606',
        '607',
        '608',
        '609',
        '610',
        '612',
        '614',
        '615',
        '616',
        '617',
        '618',
        '619',
        '620',
        '623',
        '626',
        '628',
        '629',
        '630',
        '631',
        '636',
        '641',
        '646',
        '650',
        '651',
        '657',
        '660',
        '661',
        '662',
        '667',
        '669',
        '678',
        '681',
        '682',
        '701',
        '702',
        '703',
        '704',
        '706',
        '707',
        '708',
        '712',
        '713',
        '714',
        '715',
        '716',
        '717',
        '718',
        '719',
        '720',
        '724',
        '725',
        '727',
        '730',
        '731',
        '732',
        '734',
        '737',
        '740',
        '743',
        '747',
        '754',
        '757',
        '760',
        '762',
        '763',
        '765',
        '769',
        '770',
        '772',
        '773',
        '774',
        '775',
        '779',
        '781',
        '785',
        '786',
        '801',
        '802',
        '803',
        '804',
        '805',
        '806',
        '808',
        '810',
        '812',
        '813',
        '814',
        '815',
        '816',
        '817',
        '818',
        '828',
        '830',
        '831',
        '832',
        '843',
        '845',
        '847',
        '848',
        '850',
        '854',
        '856',
        '857',
        '858',
        '859',
        '860',
        '862',
        '863',
        '864',
        '865',
        '870',
        '872',
        '878',
        '901',
        '903',
        '904',
        '906',
        '907',
        '908',
        '909',
        '910',
        '912',
        '913',
        '914',
        '915',
        '916',
        '917',
        '918',
        '919',
        '920',
        '925',
        '928',
        '929',
        '930',
        '931',
        '934',
        '936',
        '937',
        '938',
        '940',
        '941',
        '947',
        '949',
        '951',
        '952',
        '954',
        '956',
        '959',
        '970',
        '971',
        '972',
        '973',
        '975',
        '978',
        '979',
        '980',
        '984',
        '985',
        '989',
      ],
    },
    capital: ['Washington, D.C.'],
    altSpellings: ['US', 'USA', 'United States of America'],
    region: 'Americas',
    subregion: 'North America',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'الولايات المتحدة الامريكية',
        common: 'الولايات المتحدة',
      },
      ces: {
        official: 'Spojené státy americké',
        common: 'Spojené státy',
      },
      cym: {
        official: 'United States of America',
        common: 'United States',
      },
      deu: {
        official: 'Vereinigte Staaten von Amerika',
        common: 'Vereinigte Staaten',
      },
      est: {
        official: 'Ameerika Ühendriigid',
        common: 'Ameerika Ühendriigid',
      },
      fin: {
        official: 'Amerikan yhdysvallat',
        common: 'Yhdysvallat',
      },
      fra: {
        official: "Les états-unis d'Amérique",
        common: 'États-Unis',
      },
      hrv: {
        official: 'Sjedinjene Države Amerike',
        common: 'Sjedinjene Američke Države',
      },
      hun: {
        official: 'Amerikai Egyesült Államok',
        common: 'Amerikai Egyesült Államok',
      },
      ita: {
        official: "Stati Uniti d'America",
        common: "Stati Uniti d'America",
      },
      jpn: {
        official: 'アメリカ合衆国',
        common: 'アメリカ合衆国',
      },
      kor: {
        official: '아메리카 합중국',
        common: '미국',
      },
      nld: {
        official: 'Verenigde Staten van Amerika',
        common: 'Verenigde Staten',
      },
      per: {
        official: 'ایالات متحده آمریکا',
        common: 'ایالات متحده آمریکا',
      },
      pol: {
        official: 'Stany Zjednoczone Ameryki',
        common: 'Stany Zjednoczone',
      },
      por: {
        official: 'Estados Unidos da América',
        common: 'Estados Unidos',
      },
      rus: {
        official: 'Соединенные Штаты Америки',
        common: 'Соединённые Штаты Америки',
      },
      slk: {
        official: 'Spojené štáty Americké',
        common: 'Spojené štáty americké',
      },
      spa: {
        official: 'Estados Unidos de América',
        common: 'Estados Unidos',
      },
      swe: {
        official: 'Amerikas förenta stater',
        common: 'USA',
      },
      urd: {
        official: 'ریاستہائے متحدہ امریکا',
        common: 'ریاستہائے متحدہ',
      },
      zho: {
        official: '美利坚合众国',
        common: '美国',
      },
    },
    latlng: [38.0, -97.0],
    landlocked: false,
    borders: ['CAN', 'MEX'],
    area: 9372610.0,
    demonyms: {
      eng: {
        f: 'American',
        m: 'American',
      },
      fra: {
        f: 'Américaine',
        m: 'Américain',
      },
    },
    flag: '\uD83C\uDDFA\uD83C\uDDF8',
    maps: {
      googleMaps: 'https://goo.gl/maps/e8M246zY4BSjkjAv6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/148838#map=2/20.6/-85.8',
    },
    population: 329484123,
    gini: {
      '2018': 41.4,
    },
    fifa: 'USA',
    car: {
      signs: ['USA'],
      side: 'right',
    },
    timezones: [
      'UTC-12:00',
      'UTC-11:00',
      'UTC-10:00',
      'UTC-09:00',
      'UTC-08:00',
      'UTC-07:00',
      'UTC-06:00',
      'UTC-05:00',
      'UTC-04:00',
      'UTC+10:00',
      'UTC+12:00',
    ],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/us.png',
      svg: 'https://flagcdn.com/us.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/us.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/us.svg',
    },
    startOfWeek: 'sunday',
    capitalInfo: {
      latlng: [38.89, -77.05],
    },
    postalCode: {
      format: '#####-####',
      regex: '^\\d{5}(-\\d{4})?$',
    },
  },
  {
    name: {
      common: 'Spain',
      official: 'Kingdom of Spain',
      nativeName: {
        spa: {
          official: 'Reino de España',
          common: 'España',
        },
      },
    },
    tld: ['.es'],
    cca2: 'ES',
    ccn3: '724',
    cca3: 'ESP',
    cioc: 'ESP',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['4'],
    },
    capital: ['Madrid'],
    altSpellings: ['ES', 'Kingdom of Spain', 'Reino de España'],
    region: 'Europe',
    subregion: 'Southern Europe',
    languages: {
      spa: 'Spanish',
    },
    translations: {
      ara: {
        official: 'مملكة إسبانيا',
        common: 'إسبانيا',
      },
      ces: {
        official: 'Španělské království',
        common: 'Španělsko',
      },
      cym: {
        official: 'Kingdom of Spain',
        common: 'Spain',
      },
      deu: {
        official: 'Königreich Spanien',
        common: 'Spanien',
      },
      est: {
        official: 'Hispaania Kuningriik',
        common: 'Hispaania',
      },
      fin: {
        official: 'Espanjan kuningaskunta',
        common: 'Espanja',
      },
      fra: {
        official: "Royaume d'Espagne",
        common: 'Espagne',
      },
      hrv: {
        official: 'Kraljevina Španjolska',
        common: 'Španjolska',
      },
      hun: {
        official: 'Spanyol Királyság',
        common: 'Spanyolország',
      },
      ita: {
        official: 'Regno di Spagna',
        common: 'Spagna',
      },
      jpn: {
        official: 'スペイン王国',
        common: 'スペイン',
      },
      kor: {
        official: '에스파냐 왕국',
        common: '스페인',
      },
      nld: {
        official: 'Koninkrijk Spanje',
        common: 'Spanje',
      },
      per: {
        official: 'پادشاهی اسپانیا',
        common: 'اسپانیا',
      },
      pol: {
        official: 'Królestwo Hiszpanii ',
        common: 'Hiszpania',
      },
      por: {
        official: 'Reino de Espanha',
        common: 'Espanha',
      },
      rus: {
        official: 'Королевство Испания',
        common: 'Испания',
      },
      slk: {
        official: 'Španielske kráľovstvo',
        common: 'Španielsko',
      },
      spa: {
        official: 'Reino de España',
        common: 'España',
      },
      swe: {
        official: 'Konungariket Spanien',
        common: 'Spanien',
      },
      urd: {
        official: 'مملکتِ ہسپانیہ',
        common: 'ہسپانیہ',
      },
      zho: {
        official: '西班牙王国',
        common: '西班牙',
      },
    },
    latlng: [40.0, -4.0],
    landlocked: false,
    borders: ['AND', 'FRA', 'GIB', 'PRT', 'MAR'],
    area: 505992.0,
    demonyms: {
      eng: {
        f: 'Spanish',
        m: 'Spanish',
      },
      fra: {
        f: 'Espagnole',
        m: 'Espagnol',
      },
    },
    flag: '\uD83C\uDDEA\uD83C\uDDF8',
    maps: {
      googleMaps: 'https://goo.gl/maps/138JaXW8EZzRVitY9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/1311341',
    },
    population: 47351567,
    gini: {
      '2018': 34.7,
    },
    fifa: 'ESP',
    car: {
      signs: ['E'],
      side: 'right',
    },
    timezones: ['UTC', 'UTC+01:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/es.png',
      svg: 'https://flagcdn.com/es.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/es.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/es.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [40.4, -3.68],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Azerbaijan',
      official: 'Republic of Azerbaijan',
      nativeName: {
        aze: {
          official: 'Azərbaycan Respublikası',
          common: 'Azərbaycan',
        },
        rus: {
          official: 'Азербайджанская Республика',
          common: 'Азербайджан',
        },
      },
    },
    tld: ['.az'],
    cca2: 'AZ',
    ccn3: '031',
    cca3: 'AZE',
    cioc: 'AZE',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      AZN: {
        name: 'Azerbaijani manat',
        symbol: '₼',
      },
    },
    idd: {
      root: '+9',
      suffixes: ['94'],
    },
    capital: ['Baku'],
    altSpellings: ['AZ', 'Republic of Azerbaijan', 'Azərbaycan Respublikası'],
    region: 'Asia',
    subregion: 'Western Asia',
    languages: {
      aze: 'Azerbaijani',
      rus: 'Russian',
    },
    translations: {
      ara: {
        official: 'جمهورية أذربيجان',
        common: 'أذربيجان',
      },
      ces: {
        official: 'Ázerbájdžánská republika',
        common: 'Ázerbájdžán',
      },
      cym: {
        official: 'Gweriniaeth Aserbaijan',
        common: 'Aserbaijan',
      },
      deu: {
        official: 'Republik Aserbaidschan',
        common: 'Aserbaidschan',
      },
      est: {
        official: 'Aserbaidžaani Vabariik',
        common: 'Aserbaidžaan',
      },
      fin: {
        official: 'Azerbaidzanin tasavalta',
        common: 'Azerbaidzan',
      },
      fra: {
        official: "République d'Azerbaïdjan",
        common: 'Azerbaïdjan',
      },
      hrv: {
        official: 'Republika Azerbajdžan',
        common: 'Azerbajdžan',
      },
      hun: {
        official: 'Azerbajdzsán',
        common: 'Azerbajdzsán',
      },
      ita: {
        official: "Repubblica dell'Azerbaigian",
        common: 'Azerbaijan',
      },
      jpn: {
        official: 'アゼルバイジャン共和国',
        common: 'アゼルバイジャン',
      },
      kor: {
        official: '아제르바이잔 공화국',
        common: '아제르바이잔',
      },
      nld: {
        official: 'Republiek Azerbeidzjan',
        common: 'Azerbeidzjan',
      },
      per: {
        official: 'جمهوری آذربایجان',
        common: 'جمهوری آذربایجان',
      },
      pol: {
        official: 'Republika Azerbejdżanu',
        common: 'Azerbejdżan',
      },
      por: {
        official: 'República do Azerbaijão',
        common: 'Azerbeijão',
      },
      rus: {
        official: 'Азербайджанская Республика',
        common: 'Азербайджан',
      },
      slk: {
        official: 'Azerbajǆanská republika',
        common: 'AzerbajǇan',
      },
      spa: {
        official: 'República de Azerbaiyán',
        common: 'Azerbaiyán',
      },
      swe: {
        official: 'Republiken Azerbajdzjan',
        common: 'Azerbajdzjan',
      },
      urd: {
        official: 'جمہوریہ آذربائیجان',
        common: 'آذربائیجان',
      },
      zho: {
        official: '阿塞拜疆共和国',
        common: '阿塞拜疆',
      },
    },
    latlng: [40.5, 47.5],
    landlocked: true,
    borders: ['ARM', 'GEO', 'IRN', 'RUS', 'TUR'],
    area: 86600.0,
    demonyms: {
      eng: {
        f: 'Azerbaijani',
        m: 'Azerbaijani',
      },
      fra: {
        f: 'Azerbaïdjanaise',
        m: 'Azerbaïdjanais',
      },
    },
    flag: '\uD83C\uDDE6\uD83C\uDDFF',
    maps: {
      googleMaps: 'https://goo.gl/maps/az3Zz7ar2aoB9AUc6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/364110',
    },
    population: 10110116,
    gini: {
      '2005': 26.6,
    },
    fifa: 'AZE',
    car: {
      signs: ['AZ'],
      side: 'right',
    },
    timezones: ['UTC+04:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/az.png',
      svg: 'https://flagcdn.com/az.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/az.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/az.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [40.38, 49.87],
    },
    postalCode: {
      format: 'AZ ####',
      regex: '^(?:AZ)*(\\d{4})$',
    },
  },
  {
    name: {
      common: 'Denmark',
      official: 'Kingdom of Denmark',
      nativeName: {
        dan: {
          official: 'Kongeriget Danmark',
          common: 'Danmark',
        },
      },
    },
    tld: ['.dk'],
    cca2: 'DK',
    ccn3: '208',
    cca3: 'DNK',
    cioc: 'DEN',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      DKK: {
        name: 'Danish krone',
        symbol: 'kr',
      },
    },
    idd: {
      root: '+4',
      suffixes: ['5'],
    },
    capital: ['Copenhagen'],
    altSpellings: ['DK', 'Danmark', 'Kingdom of Denmark', 'Kongeriget Danmark'],
    region: 'Europe',
    subregion: 'Northern Europe',
    languages: {
      dan: 'Danish',
    },
    translations: {
      ara: {
        official: 'مملكة الدنمارك',
        common: 'الدنمارك',
      },
      ces: {
        official: 'Dánské království',
        common: 'Dánsko',
      },
      cym: {
        official: 'Teyrnas Denmarc',
        common: 'Denmarc',
      },
      deu: {
        official: 'Königreich Dänemark',
        common: 'Dänemark',
      },
      est: {
        official: 'Taani Kuningriik',
        common: 'Taani',
      },
      fin: {
        official: 'Tanskan kuningaskunta',
        common: 'Tanska',
      },
      fra: {
        official: 'Royaume du Danemark',
        common: 'Danemark',
      },
      hrv: {
        official: 'Kraljevina Danska',
        common: 'Danska',
      },
      hun: {
        official: 'Dán Királyság',
        common: 'Dánia',
      },
      ita: {
        official: 'Regno di Danimarca',
        common: 'Danimarca',
      },
      jpn: {
        official: 'デンマーク王国',
        common: 'デンマーク',
      },
      kor: {
        official: '덴마크 왕국',
        common: '덴마크',
      },
      nld: {
        official: 'Koninkrijk Denemarken',
        common: 'Denemarken',
      },
      per: {
        official: 'پادشاهی دانمارک',
        common: 'دانمارک',
      },
      pol: {
        official: 'Królestwo Danii',
        common: 'Dania',
      },
      por: {
        official: 'Reino da Dinamarca',
        common: 'Dinamarca',
      },
      rus: {
        official: 'Королевство Дания',
        common: 'Дания',
      },
      slk: {
        official: 'Dánske kráľovstvo',
        common: 'Dánsko',
      },
      spa: {
        official: 'Reino de Dinamarca',
        common: 'Dinamarca',
      },
      swe: {
        official: 'Konungariket Danmark',
        common: 'Danmark',
      },
      urd: {
        official: 'مملکتِ ڈنمارک',
        common: 'ڈنمارک',
      },
      zho: {
        official: '丹麦王国',
        common: '丹麦',
      },
    },
    latlng: [56.0, 10.0],
    landlocked: false,
    borders: ['DEU'],
    area: 43094.0,
    demonyms: {
      eng: {
        f: 'Danish',
        m: 'Danish',
      },
      fra: {
        f: 'Danoise',
        m: 'Danois',
      },
    },
    flag: '\uD83C\uDDE9\uD83C\uDDF0',
    maps: {
      googleMaps: 'https://goo.gl/maps/UddGPN7hAyrtpFiT6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/50046',
    },
    population: 5831404,
    gini: {
      '2018': 28.2,
    },
    fifa: 'DEN',
    car: {
      signs: ['DK'],
      side: 'right',
    },
    timezones: ['UTC-04:00', 'UTC-03:00', 'UTC-01:00', 'UTC', 'UTC+01:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/dk.png',
      svg: 'https://flagcdn.com/dk.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/dk.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/dk.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [55.67, 12.58],
    },
    postalCode: {
      format: '####',
      regex: '^(\\d{4})$',
    },
  },
  {
    name: {
      common: 'Fiji',
      official: 'Republic of Fiji',
      nativeName: {
        eng: {
          official: 'Republic of Fiji',
          common: 'Fiji',
        },
        fij: {
          official: 'Matanitu Tugalala o Viti',
          common: 'Viti',
        },
        hif: {
          official: 'रिपब्लिक ऑफ फीजी',
          common: 'फिजी',
        },
      },
    },
    tld: ['.fj'],
    cca2: 'FJ',
    ccn3: '242',
    cca3: 'FJI',
    cioc: 'FIJ',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      FJD: {
        name: 'Fijian dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+6',
      suffixes: ['79'],
    },
    capital: ['Suva'],
    altSpellings: ['FJ', 'Viti', 'Republic of Fiji', 'Matanitu ko Viti', 'Fijī Gaṇarājya'],
    region: 'Oceania',
    subregion: 'Melanesia',
    languages: {
      eng: 'English',
      fij: 'Fijian',
      hif: 'Fiji Hindi',
    },
    translations: {
      ara: {
        official: 'جمهورية جزر فيجي',
        common: 'فيجي',
      },
      ces: {
        official: 'Republika Fidžijských ostrovů',
        common: 'Fidži',
      },
      cym: {
        official: 'Republic of Fiji',
        common: 'Fiji',
      },
      deu: {
        official: 'Republik Fidschi',
        common: 'Fidschi',
      },
      est: {
        official: 'Fidži Vabariik',
        common: 'Fidži',
      },
      fin: {
        official: 'Fidžin tasavalta',
        common: 'Fidži',
      },
      fra: {
        official: 'République des Fidji',
        common: 'Fidji',
      },
      hrv: {
        official: 'Republika Fidži',
        common: 'Fiđi',
      },
      hun: {
        official: 'Fidzsi-szigeteki Köztársaság',
        common: 'Fidzsi-szigetek',
      },
      ita: {
        official: 'Repubblica di Figi',
        common: 'Figi',
      },
      jpn: {
        official: 'フィジー共和国',
        common: 'フィジー',
      },
      kor: {
        official: '피지 공화국',
        common: '피지',
      },
      nld: {
        official: 'Republiek Fiji',
        common: 'Fiji',
      },
      per: {
        official: 'جمهوری جزایر فیجی',
        common: 'فیجی',
      },
      pol: {
        official: 'Republika Fidżi',
        common: 'Fidżi',
      },
      por: {
        official: 'República de Fiji',
        common: 'Fiji',
      },
      rus: {
        official: 'Республика Фиджи',
        common: 'Фиджи',
      },
      slk: {
        official: 'Fiǆijská republika',
        common: 'Fiǆi',
      },
      spa: {
        official: 'República de Fiji',
        common: 'Fiyi',
      },
      swe: {
        official: 'Republiken Fiji',
        common: 'Fiji',
      },
      urd: {
        official: 'جمہوریہ فجی',
        common: 'فجی',
      },
      zho: {
        official: '斐济共和国',
        common: '斐济',
      },
    },
    latlng: [-18.0, 175.0],
    landlocked: false,
    area: 18272.0,
    demonyms: {
      eng: {
        f: 'Fijian',
        m: 'Fijian',
      },
      fra: {
        f: 'Fidjienne',
        m: 'Fidjien',
      },
    },
    flag: '\uD83C\uDDEB\uD83C\uDDEF',
    maps: {
      googleMaps: 'https://goo.gl/maps/r9fhDqoLZdg1zmE99',
      openStreetMaps: 'https://www.openstreetmap.org/relation/571747',
    },
    population: 896444,
    gini: {
      '2013': 36.7,
    },
    fifa: 'FIJ',
    car: {
      signs: ['FJI'],
      side: 'left',
    },
    timezones: ['UTC+12:00'],
    continents: ['Oceania'],
    flags: {
      png: 'https://flagcdn.com/w320/fj.png',
      svg: 'https://flagcdn.com/fj.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/fj.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/fj.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-18.13, 178.42],
    },
  },
  {
    name: {
      common: 'Poland',
      official: 'Republic of Poland',
      nativeName: {
        pol: {
          official: 'Rzeczpospolita Polska',
          common: 'Polska',
        },
      },
    },
    tld: ['.pl'],
    cca2: 'PL',
    ccn3: '616',
    cca3: 'POL',
    cioc: 'POL',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      PLN: {
        name: 'Polish złoty',
        symbol: 'zł',
      },
    },
    idd: {
      root: '+4',
      suffixes: ['8'],
    },
    capital: ['Warsaw'],
    altSpellings: ['PL', 'Republic of Poland', 'Rzeczpospolita Polska'],
    region: 'Europe',
    subregion: 'Central Europe',
    languages: {
      pol: 'Polish',
    },
    translations: {
      ara: {
        official: 'الجمهورية البولندية',
        common: 'بولندا',
      },
      ces: {
        official: 'Polská republika',
        common: 'Polsko',
      },
      cym: {
        official: 'Republic of Poland',
        common: 'Poland',
      },
      deu: {
        official: 'Republik Polen',
        common: 'Polen',
      },
      est: {
        official: 'Poola Vabariik',
        common: 'Poola',
      },
      fin: {
        official: 'Puolan tasavalta',
        common: 'Puola',
      },
      fra: {
        official: 'République de Pologne',
        common: 'Pologne',
      },
      hrv: {
        official: 'Republika Poljska',
        common: 'Poljska',
      },
      hun: {
        official: 'Lengyel Köztársaság',
        common: 'Lengyelország',
      },
      ita: {
        official: 'Repubblica di Polonia',
        common: 'Polonia',
      },
      jpn: {
        official: 'ポーランド共和国',
        common: 'ポーランド',
      },
      kor: {
        official: '폴란드 공화국',
        common: '폴란드',
      },
      nld: {
        official: 'Republiek Polen',
        common: 'Polen',
      },
      per: {
        official: 'جمهوری لهستان',
        common: 'لهستان',
      },
      pol: {
        official: 'Rzeczpospolita Polska',
        common: 'Polska',
      },
      por: {
        official: 'República da Polónia',
        common: 'Polónia',
      },
      rus: {
        official: 'Республика Польша',
        common: 'Польша',
      },
      slk: {
        official: 'Poľská republika',
        common: 'Poľsko',
      },
      spa: {
        official: 'República de Polonia',
        common: 'Polonia',
      },
      swe: {
        official: 'Republiken Polen',
        common: 'Polen',
      },
      urd: {
        official: 'جمہوریہ پولینڈ',
        common: 'پولینڈ',
      },
      zho: {
        official: '波兰共和国',
        common: '波兰',
      },
    },
    latlng: [52.0, 20.0],
    landlocked: false,
    borders: ['BLR', 'CZE', 'DEU', 'LTU', 'RUS', 'SVK', 'UKR'],
    area: 312679.0,
    demonyms: {
      eng: {
        f: 'Polish',
        m: 'Polish',
      },
      fra: {
        f: 'Polonaise',
        m: 'Polonais',
      },
    },
    flag: '\uD83C\uDDF5\uD83C\uDDF1',
    maps: {
      googleMaps: 'https://goo.gl/maps/gY9Xw4Sf4415P4949',
      openStreetMaps: 'https://www.openstreetmap.org/relation/49715',
    },
    population: 37950802,
    gini: {
      '2018': 30.2,
    },
    fifa: 'POL',
    car: {
      signs: ['PL'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/pl.png',
      svg: 'https://flagcdn.com/pl.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/pl.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/pl.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [52.25, 21.0],
    },
    postalCode: {
      format: '##-###',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Sierra Leone',
      official: 'Republic of Sierra Leone',
      nativeName: {
        eng: {
          official: 'Republic of Sierra Leone',
          common: 'Sierra Leone',
        },
      },
    },
    tld: ['.sl'],
    cca2: 'SL',
    ccn3: '694',
    cca3: 'SLE',
    cioc: 'SLE',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      SLL: {
        name: 'Sierra Leonean leone',
        symbol: 'Le',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['32'],
    },
    capital: ['Freetown'],
    altSpellings: ['SL', 'Republic of Sierra Leone'],
    region: 'Africa',
    subregion: 'Western Africa',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'جمهورية سيراليون',
        common: 'سيراليون',
      },
      ces: {
        official: 'Republika Sierra Leone',
        common: 'Sierra Leone',
      },
      cym: {
        official: 'Republic of Sierra Leone',
        common: 'Sierra Leone',
      },
      deu: {
        official: 'Republik Sierra Leone',
        common: 'Sierra Leone',
      },
      est: {
        official: 'Sierra Leone Vabariik',
        common: 'Sierra Leone',
      },
      fin: {
        official: 'Sierra Leonen tasavalta',
        common: 'Sierra Leone',
      },
      fra: {
        official: 'République de Sierra Leone',
        common: 'Sierra Leone',
      },
      hrv: {
        official: 'Republika Sijera Leone',
        common: 'Sijera Leone',
      },
      hun: {
        official: 'Sierra Leone Köztársaság',
        common: 'Sierra Leone',
      },
      ita: {
        official: 'Repubblica della Sierra Leone',
        common: 'Sierra Leone',
      },
      jpn: {
        official: 'シエラレオネ共和国',
        common: 'シエラレオネ',
      },
      kor: {
        official: '시에라리온 공화국',
        common: '시에라리온',
      },
      nld: {
        official: 'Republiek Sierra Leone',
        common: 'Sierra Leone',
      },
      per: {
        official: 'جمهوری سیرالئون',
        common: 'سیرالئون',
      },
      pol: {
        official: 'Sierra Leone',
        common: 'Sierra Leone',
      },
      por: {
        official: 'República da Serra Leoa',
        common: 'Serra Leoa',
      },
      rus: {
        official: 'Республика Сьерра-Леоне',
        common: 'Сьерра-Леоне',
      },
      slk: {
        official: 'Sierraleonská republika',
        common: 'Sierra Leone',
      },
      spa: {
        official: 'República de Sierra Leona',
        common: 'Sierra Leone',
      },
      swe: {
        official: 'Republiken Sierra Leone',
        common: 'Sierra Leone',
      },
      urd: {
        official: 'جمہوریہ سیرالیون',
        common: 'سیرالیون',
      },
      zho: {
        official: '塞拉利昂共和国',
        common: '塞拉利昂',
      },
    },
    latlng: [8.5, -11.5],
    landlocked: false,
    borders: ['GIN', 'LBR'],
    area: 71740.0,
    demonyms: {
      eng: {
        f: 'Sierra Leonean',
        m: 'Sierra Leonean',
      },
      fra: {
        f: 'Sierra-leonaise',
        m: 'Sierra-leonais',
      },
    },
    flag: '\uD83C\uDDF8\uD83C\uDDF1',
    maps: {
      googleMaps: 'https://goo.gl/maps/jhacar85oq9QaeKB7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/192777',
    },
    population: 7976985,
    gini: {
      '2018': 35.7,
    },
    fifa: 'SLE',
    car: {
      signs: ['WAL'],
      side: 'right',
    },
    timezones: ['UTC'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/sl.png',
      svg: 'https://flagcdn.com/sl.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/sl.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/sl.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [8.48, -13.23],
    },
  },
  {
    name: {
      common: 'Palestine',
      official: 'State of Palestine',
      nativeName: {
        ara: {
          official: 'دولة فلسطين',
          common: 'فلسطين',
        },
      },
    },
    tld: ['.ps', 'فلسطين.'],
    cca2: 'PS',
    ccn3: '275',
    cca3: 'PSE',
    cioc: 'PLE',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      EGP: {
        name: 'Egyptian pound',
        symbol: 'E£',
      },
      ILS: {
        name: 'Israeli new shekel',
        symbol: '₪',
      },
      JOD: {
        name: 'Jordanian dinar',
        symbol: 'JD',
      },
    },
    idd: {
      root: '+9',
      suffixes: ['70'],
    },
    capital: ['Ramallah'],
    altSpellings: ['PS', 'Palestine, State of', 'State of Palestine', 'Dawlat Filasṭin'],
    region: 'Asia',
    subregion: 'Western Asia',
    languages: {
      ara: 'Arabic',
    },
    translations: {
      ara: {
        official: 'دولة فلسطين',
        common: 'فلسطين',
      },
      ces: {
        official: 'Stát Palestina',
        common: 'Palestina',
      },
      cym: {
        official: 'State of Palestine',
        common: 'Palestine',
      },
      deu: {
        official: 'Staat Palästina',
        common: 'Palästina',
      },
      est: {
        official: 'Palestiina Riik',
        common: 'Palestiina',
      },
      fin: {
        official: 'Palestiinan valtio',
        common: 'Palestiina',
      },
      fra: {
        official: 'État de Palestine',
        common: 'Palestine',
      },
      hrv: {
        official: 'State of Palestine',
        common: 'Palestina',
      },
      hun: {
        official: 'Palesztin Autonómia',
        common: 'Palesztina',
      },
      ita: {
        official: 'Stato di Palestina',
        common: 'Palestina',
      },
      jpn: {
        official: 'パレスチナ自治政府',
        common: 'パレスチナ',
      },
      kor: {
        official: '팔레스타인국',
        common: '팔레스타인',
      },
      nld: {
        official: 'Staat Palestina',
        common: 'Palestijnse gebieden',
      },
      per: {
        official: 'دولت فلسطین',
        common: 'فلسطین',
      },
      pol: {
        official: 'Państwo Palestyna',
        common: 'Palestyna',
      },
      por: {
        official: 'Estado da Palestina',
        common: 'Palestina',
      },
      rus: {
        official: 'Государство Палестина',
        common: 'Палестина',
      },
      slk: {
        official: 'Palestínsky štát',
        common: 'Palestína',
      },
      spa: {
        official: 'Estado de Palestina',
        common: 'Palestina',
      },
      swe: {
        official: 'Palestina',
        common: 'Palestina',
      },
      urd: {
        official: 'ریاستِ فلسطین',
        common: 'فلسطین',
      },
      zho: {
        official: '巴勒斯坦国',
        common: '巴勒斯坦',
      },
    },
    latlng: [31.9, 35.2],
    landlocked: false,
    borders: ['ISR', 'EGY', 'JOR'],
    area: 6220.0,
    demonyms: {
      eng: {
        f: 'Palestinian',
        m: 'Palestinian',
      },
      fra: {
        f: 'Palestinienne',
        m: 'Palestinien',
      },
    },
    flag: '\uD83C\uDDF5\uD83C\uDDF8',
    maps: {
      googleMaps: 'https://goo.gl/maps/QvTbkRdmdWEoYAmt5',
      openStreetMaps: 'https://www.openstreetmap.org/relation/1703814',
    },
    population: 4803269,
    gini: {
      '2016': 33.7,
    },
    fifa: 'PLE',
    car: {
      signs: ['PS'],
      side: 'right',
    },
    timezones: ['UTC+02:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/ps.png',
      svg: 'https://flagcdn.com/ps.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ps.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ps.svg',
    },
    startOfWeek: 'sunday',
    capitalInfo: {
      latlng: [31.9, 35.2],
    },
  },
  {
    name: {
      common: 'Mauritania',
      official: 'Islamic Republic of Mauritania',
      nativeName: {
        ara: {
          official: 'الجمهورية الإسلامية الموريتانية',
          common: 'موريتانيا',
        },
      },
    },
    tld: ['.mr'],
    cca2: 'MR',
    ccn3: '478',
    cca3: 'MRT',
    cioc: 'MTN',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      MRU: {
        name: 'Mauritanian ouguiya',
        symbol: 'UM',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['22'],
    },
    capital: ['Nouakchott'],
    altSpellings: ['MR', 'Islamic Republic of Mauritania', 'al-Jumhūriyyah al-ʾIslāmiyyah al-Mūrītāniyyah'],
    region: 'Africa',
    subregion: 'Western Africa',
    languages: {
      ara: 'Arabic',
    },
    translations: {
      ara: {
        official: 'الجمهورية الإسلامية الموريتانية',
        common: 'موريتانيا',
      },
      ces: {
        official: 'Mauritánská islámská republika',
        common: 'Mauritánie',
      },
      cym: {
        official: 'Islamic Republic of Mauritania',
        common: 'Mauritania',
      },
      deu: {
        official: 'Islamische Republik Mauretanien',
        common: 'Mauretanien',
      },
      est: {
        official: 'Mauritaania Islamivabariik',
        common: 'Mauritaania',
      },
      fin: {
        official: 'Mauritanian islamilainen tasavalta',
        common: 'Mauritania',
      },
      fra: {
        official: 'République islamique de Mauritanie',
        common: 'Mauritanie',
      },
      hrv: {
        official: 'Islamska Republika Mauritanija',
        common: 'Mauritanija',
      },
      hun: {
        official: 'Mauritániai Iszlám Köztársaság',
        common: 'Mauritánia',
      },
      ita: {
        official: 'Repubblica islamica di Mauritania',
        common: 'Mauritania',
      },
      jpn: {
        official: 'モーリタニア·イスラム共和国',
        common: 'モーリタニア',
      },
      kor: {
        official: '모리타니 이슬람 공화국',
        common: '모리타니',
      },
      nld: {
        official: 'Islamitische Republiek Mauritanië',
        common: 'Mauritanië',
      },
      per: {
        official: 'جمهوری اسلامی موریتانی',
        common: 'موریتانی',
      },
      pol: {
        official: 'Islamska Republika Mauretańska',
        common: 'Mauretania',
      },
      por: {
        official: 'República Islâmica da Mauritânia',
        common: 'Mauritânia',
      },
      rus: {
        official: 'Исламская Республика Мавритания',
        common: 'Мавритания',
      },
      slk: {
        official: 'Mauritánska islamská republika',
        common: 'Mauritánia',
      },
      spa: {
        official: 'República Islámica de Mauritania',
        common: 'Mauritania',
      },
      swe: {
        official: 'Islamiska republiken Mauretanien',
        common: 'Mauretanien',
      },
      urd: {
        official: 'اسلامی جمہوریہ موریتانیہ',
        common: 'موریتانیہ',
      },
      zho: {
        official: '毛里塔尼亚伊斯兰共和国',
        common: '毛里塔尼亚',
      },
    },
    latlng: [20.0, -12.0],
    landlocked: false,
    borders: ['DZA', 'MLI', 'SEN', 'ESH'],
    area: 1030700.0,
    demonyms: {
      eng: {
        f: 'Mauritanian',
        m: 'Mauritanian',
      },
      fra: {
        f: 'Mauritanienne',
        m: 'Mauritanien',
      },
    },
    flag: '\uD83C\uDDF2\uD83C\uDDF7',
    maps: {
      googleMaps: 'https://goo.gl/maps/im2MmQ5jFjzxWBks5',
      openStreetMaps: 'https://www.openstreetmap.org/relation/192763',
    },
    population: 4649660,
    gini: {
      '2014': 32.6,
    },
    fifa: 'MTN',
    car: {
      signs: ['RIM'],
      side: 'right',
    },
    timezones: ['UTC'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/mr.png',
      svg: 'https://flagcdn.com/mr.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/mr.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/mr.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [18.07, -15.97],
    },
  },
  {
    name: {
      common: 'Russia',
      official: 'Russian Federation',
      nativeName: {
        rus: {
          official: 'Российская Федерация',
          common: 'Россия',
        },
      },
    },
    tld: ['.ru', '.su', '.рф'],
    cca2: 'RU',
    ccn3: '643',
    cca3: 'RUS',
    cioc: 'RUS',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      RUB: {
        name: 'Russian ruble',
        symbol: '₽',
      },
    },
    idd: {
      root: '+7',
      suffixes: ['3', '4', '5', '8', '9'],
    },
    capital: ['Moscow'],
    altSpellings: ['RU', 'Russian Federation', 'Российская Федерация'],
    region: 'Europe',
    subregion: 'Eastern Europe',
    languages: {
      rus: 'Russian',
    },
    translations: {
      ara: {
        official: 'روسيا الاتحادية',
        common: 'روسيا',
      },
      ces: {
        official: 'Ruská federace',
        common: 'Rusko',
      },
      cym: {
        official: 'Russian Federation',
        common: 'Russia',
      },
      deu: {
        official: 'Russische Föderation',
        common: 'Russland',
      },
      est: {
        official: 'Venemaa Föderatsioon',
        common: 'Venemaa',
      },
      fin: {
        official: 'Venäjän federaatio',
        common: 'Venäjä',
      },
      fra: {
        official: 'Fédération de Russie',
        common: 'Russie',
      },
      hrv: {
        official: 'Ruska Federacija',
        common: 'Rusija',
      },
      hun: {
        official: 'Oroszországi Föderáció',
        common: 'Oroszország',
      },
      ita: {
        official: 'Federazione russa',
        common: 'Russia',
      },
      jpn: {
        official: 'ロシア連邦',
        common: 'ロシア連邦',
      },
      kor: {
        official: '러시아 연방',
        common: '러시아',
      },
      nld: {
        official: 'Russische Federatie',
        common: 'Rusland',
      },
      per: {
        official: 'فدراسیون روسیه',
        common: 'روسیه',
      },
      pol: {
        official: 'Federacja Rosyjska',
        common: 'Rosja',
      },
      por: {
        official: 'Federação Russa',
        common: 'Rússia',
      },
      rus: {
        official: 'Российская Федерация',
        common: 'Россия',
      },
      slk: {
        official: 'Ruská federácia',
        common: 'Rusko',
      },
      spa: {
        official: 'Federación de Rusia',
        common: 'Rusia',
      },
      swe: {
        official: 'Ryska federationen',
        common: 'Ryssland',
      },
      urd: {
        official: 'روسی وفاق',
        common: 'روس',
      },
      zho: {
        official: '俄罗斯联邦',
        common: '俄罗斯',
      },
    },
    latlng: [60.0, 100.0],
    landlocked: false,
    borders: ['AZE', 'BLR', 'CHN', 'EST', 'FIN', 'GEO', 'KAZ', 'PRK', 'LVA', 'LTU', 'MNG', 'NOR', 'POL', 'UKR'],
    area: 1.7098242e7,
    demonyms: {
      eng: {
        f: 'Russian',
        m: 'Russian',
      },
      fra: {
        f: 'Russe',
        m: 'Russe',
      },
    },
    flag: '\uD83C\uDDF7\uD83C\uDDFA',
    maps: {
      googleMaps: 'https://goo.gl/maps/4F4PpDhGJgVvLby57',
      openStreetMaps: 'https://www.openstreetmap.org/relation/60189#map=3/65.15/105.29',
    },
    population: 144104080,
    gini: {
      '2018': 37.5,
    },
    fifa: 'RUS',
    car: {
      signs: ['RUS'],
      side: 'right',
    },
    timezones: [
      'UTC+03:00',
      'UTC+04:00',
      'UTC+06:00',
      'UTC+07:00',
      'UTC+08:00',
      'UTC+09:00',
      'UTC+10:00',
      'UTC+11:00',
      'UTC+12:00',
    ],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/ru.png',
      svg: 'https://flagcdn.com/ru.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ru.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ru.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [55.75, 37.6],
    },
    postalCode: {
      format: '######',
      regex: '^(\\d{6})$',
    },
  },
  {
    name: {
      common: 'Malta',
      official: 'Republic of Malta',
      nativeName: {
        eng: {
          official: 'Republic of Malta',
          common: 'Malta',
        },
        mlt: {
          official: "Repubblika ta ' Malta",
          common: 'Malta',
        },
      },
    },
    tld: ['.mt'],
    cca2: 'MT',
    ccn3: '470',
    cca3: 'MLT',
    cioc: 'MLT',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['56'],
    },
    capital: ['Valletta'],
    altSpellings: ['MT', 'Republic of Malta', "Repubblika ta' Malta"],
    region: 'Europe',
    subregion: 'Southern Europe',
    languages: {
      eng: 'English',
      mlt: 'Maltese',
    },
    translations: {
      ara: {
        official: 'جمهورية مالطا',
        common: 'مالطا',
      },
      ces: {
        official: 'Maltská republika',
        common: 'Malta',
      },
      cym: {
        official: 'Republic of Malta',
        common: 'Malta',
      },
      deu: {
        official: 'Republik Malta',
        common: 'Malta',
      },
      est: {
        official: 'Malta Vabariik',
        common: 'Malta',
      },
      fin: {
        official: 'Maltan tasavalta',
        common: 'Malta',
      },
      fra: {
        official: 'République de Malte',
        common: 'Malte',
      },
      hrv: {
        official: 'Republika Malta',
        common: 'Malta',
      },
      hun: {
        official: 'Máltai Köztársaság',
        common: 'Málta',
      },
      ita: {
        official: 'Repubblica di Malta',
        common: 'Malta',
      },
      jpn: {
        official: 'マルタ共和国',
        common: 'マルタ',
      },
      kor: {
        official: '몰타 공화국',
        common: '몰타',
      },
      nld: {
        official: 'Republiek Malta',
        common: 'Malta',
      },
      per: {
        official: 'جمهوری مالت',
        common: 'مالت',
      },
      pol: {
        official: 'Republika Malty',
        common: 'Malta',
      },
      por: {
        official: 'República de Malta',
        common: 'Malta',
      },
      rus: {
        official: 'Республика Мальта',
        common: 'Мальта',
      },
      slk: {
        official: 'Maltská republika',
        common: 'Malta',
      },
      spa: {
        official: 'República de Malta',
        common: 'Malta',
      },
      swe: {
        official: 'Republiken Malta',
        common: 'Malta',
      },
      urd: {
        official: 'جمہوریہ مالٹا',
        common: 'مالٹا',
      },
      zho: {
        official: '马耳他共和国',
        common: '马耳他',
      },
    },
    latlng: [35.83333333, 14.58333333],
    landlocked: false,
    area: 316.0,
    demonyms: {
      eng: {
        f: 'Maltese',
        m: 'Maltese',
      },
      fra: {
        f: 'Maltaise',
        m: 'Maltais',
      },
    },
    flag: '\uD83C\uDDF2\uD83C\uDDF9',
    maps: {
      googleMaps: 'https://goo.gl/maps/skXCqguxDxxEKVk47',
      openStreetMaps: 'https://www.openstreetmap.org/relation/365307',
    },
    population: 525285,
    gini: {
      '2018': 28.7,
    },
    fifa: 'MLT',
    car: {
      signs: ['M'],
      side: 'left',
    },
    timezones: ['UTC+01:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/mt.png',
      svg: 'https://flagcdn.com/mt.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/mt.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/mt.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [35.88, 14.5],
    },
    postalCode: {
      format: '@@@ ###|@@@ ##',
      regex: '^([A-Z]{3}\\d{2}\\d?)$',
    },
  },
  {
    name: {
      common: 'Nicaragua',
      official: 'Republic of Nicaragua',
      nativeName: {
        spa: {
          official: 'República de Nicaragua',
          common: 'Nicaragua',
        },
      },
    },
    tld: ['.ni'],
    cca2: 'NI',
    ccn3: '558',
    cca3: 'NIC',
    cioc: 'NCA',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      NIO: {
        name: 'Nicaraguan córdoba',
        symbol: 'C$',
      },
    },
    idd: {
      root: '+5',
      suffixes: ['05'],
    },
    capital: ['Managua'],
    altSpellings: ['NI', 'Republic of Nicaragua', 'República de Nicaragua'],
    region: 'Americas',
    subregion: 'Central America',
    languages: {
      spa: 'Spanish',
    },
    translations: {
      ara: {
        official: 'جمهورية نيكاراغوا',
        common: 'نيكاراغوا',
      },
      ces: {
        official: 'Republika Nikaragua',
        common: 'Nikaragua',
      },
      cym: {
        official: 'Republic of Nicaragua',
        common: 'Nicaragua',
      },
      deu: {
        official: 'Republik Nicaragua',
        common: 'Nicaragua',
      },
      est: {
        official: 'Nicaragua Vabariik',
        common: 'Nicaragua',
      },
      fin: {
        official: 'Nicaraguan tasavalta',
        common: 'Nicaragua',
      },
      fra: {
        official: 'République du Nicaragua',
        common: 'Nicaragua',
      },
      hrv: {
        official: 'Republika Nikaragva',
        common: 'Nikaragva',
      },
      hun: {
        official: 'Nicaraguai Köztársaság',
        common: 'Nicaragua',
      },
      ita: {
        official: 'Repubblica del Nicaragua',
        common: 'Nicaragua',
      },
      jpn: {
        official: 'ニカラグア共和国',
        common: 'ニカラグア',
      },
      kor: {
        official: '니카라과 공화국',
        common: '니카라과',
      },
      nld: {
        official: 'Republiek Nicaragua',
        common: 'Nicaragua',
      },
      per: {
        official: 'جمهوری نیکاراگوئه',
        common: 'نیکاراگوئه',
      },
      pol: {
        official: 'Republika Nikaragui',
        common: 'Nikaragua',
      },
      por: {
        official: 'República da Nicarágua',
        common: 'Nicarágua',
      },
      rus: {
        official: 'Республика Никарагуа',
        common: 'Никарагуа',
      },
      slk: {
        official: 'Nikaragujská republika',
        common: 'Nikaragua',
      },
      spa: {
        official: 'República de Nicaragua',
        common: 'Nicaragua',
      },
      swe: {
        official: 'Republiken Nicaragua',
        common: 'Nicaragua',
      },
      urd: {
        official: 'جمہوریہ نکاراگوا',
        common: 'نکاراگوا',
      },
      zho: {
        official: '尼加拉瓜共和国',
        common: '尼加拉瓜',
      },
    },
    latlng: [13.0, -85.0],
    landlocked: false,
    borders: ['CRI', 'HND'],
    area: 130373.0,
    demonyms: {
      eng: {
        f: 'Nicaraguan',
        m: 'Nicaraguan',
      },
      fra: {
        f: 'Nicaraguayenne',
        m: 'Nicaraguayen',
      },
    },
    flag: '\uD83C\uDDF3\uD83C\uDDEE',
    maps: {
      googleMaps: 'https://goo.gl/maps/P77LaEVkKJKXneRC6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/287666',
    },
    population: 6624554,
    gini: {
      '2014': 46.2,
    },
    fifa: 'NCA',
    car: {
      signs: ['NIC'],
      side: 'right',
    },
    timezones: ['UTC-06:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/ni.png',
      svg: 'https://flagcdn.com/ni.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ni.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ni.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [12.13, -86.25],
    },
    postalCode: {
      format: '###-###-#',
      regex: '^(\\d{7})$',
    },
  },
  {
    name: {
      common: 'Svalbard and Jan Mayen',
      official: 'Svalbard og Jan Mayen',
      nativeName: {
        nor: {
          official: 'Svalbard og Jan Mayen',
          common: 'Svalbard og Jan Mayen',
        },
      },
    },
    tld: ['.sj'],
    cca2: 'SJ',
    ccn3: '744',
    cca3: 'SJM',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      NOK: {
        name: 'krone',
        symbol: 'kr',
      },
    },
    idd: {
      root: '+4',
      suffixes: ['779'],
    },
    capital: ['Longyearbyen'],
    altSpellings: ['SJ', 'Svalbard and Jan Mayen Islands'],
    region: 'Europe',
    subregion: 'Northern Europe',
    languages: {
      nor: 'Norwegian',
    },
    translations: {
      ara: {
        official: 'سفالبارد ويان ماين',
        common: 'سفالبارد ويان ماين',
      },
      ces: {
        official: 'Špicberky a Jan Mayen',
        common: 'Špicberky a Jan Mayen',
      },
      cym: {
        official: 'Svalbard og Jan Mayen',
        common: 'Svalbard and Jan Mayen',
      },
      deu: {
        official: 'Spitzbergen und Jan Mayen',
        common: 'Spitzbergen und Jan Mayen',
      },
      est: {
        official: 'Svalbard',
        common: 'Svalbard',
      },
      fin: {
        official: 'Huippuvuoret',
        common: 'Huippuvuoret',
      },
      fra: {
        official: 'Jan Mayen Svalbard',
        common: 'Svalbard et Jan Mayen',
      },
      hrv: {
        official: 'Svalbard og Jan Mayen',
        common: 'Svalbard i Jan Mayen',
      },
      hun: {
        official: 'Svalbard és Jan Mayen',
        common: 'Svalbard és Jan Mayen',
      },
      ita: {
        official: 'Svalbard og Jan Mayen',
        common: 'Svalbard e Jan Mayen',
      },
      jpn: {
        official: 'スバールバル諸島OGヤンマイエン',
        common: 'スヴァールバル諸島およびヤンマイエン島',
      },
      kor: {
        official: '스발바르 얀마옌 제도',
        common: '스발바르 얀마옌 제도',
      },
      nld: {
        official: 'Svalbard og Jan Mayen',
        common: 'Svalbard en Jan Mayen',
      },
      per: {
        official: 'سوالبارد و یان ماین',
        common: 'سوالبارد و یان ماین',
      },
      pol: {
        official: 'Svalbard i Jan Mayen',
        common: 'Svalbard i Jan Mayen',
      },
      por: {
        official: 'Svalbard og Jan Mayen',
        common: 'Ilhas Svalbard e Jan Mayen',
      },
      rus: {
        official: 'Свальбарда ог Ян-Майен',
        common: 'Шпицберген и Ян-Майен',
      },
      slk: {
        official: 'Svalbard a Jan Mayen',
        common: 'Svalbard a Jan Mayen',
      },
      spa: {
        official: 'Svalbard og Jan Mayen',
        common: 'Islas Svalbard y Jan Mayen',
      },
      swe: {
        official: 'Svalbard och Jan Mayen',
        common: 'Svalbard och Jan Mayen',
      },
      urd: {
        official: 'سوالبارڈ اور جان میئن',
        common: 'سوالبارڈ اور جان میئن',
      },
      zho: {
        official: '斯瓦尔巴特',
        common: '斯瓦尔巴特',
      },
    },
    latlng: [78.0, 20.0],
    landlocked: false,
    area: -1.0,
    demonyms: {
      eng: {
        f: 'Norwegian',
        m: 'Norwegian',
      },
    },
    flag: '\uD83C\uDDF8\uD83C\uDDEF',
    maps: {
      googleMaps: 'https://goo.gl/maps/L2wyyn3cQ16PzQ5J8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/1337397',
    },
    population: 2562,
    car: {
      signs: ['N'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/sj.png',
      svg: 'https://flagcdn.com/sj.svg',
    },
    coatOfArms: {},
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [78.22, 15.63],
    },
  },
  {
    name: {
      common: 'San Marino',
      official: 'Republic of San Marino',
      nativeName: {
        ita: {
          official: 'Repubblica di San Marino',
          common: 'San Marino',
        },
      },
    },
    tld: ['.sm'],
    cca2: 'SM',
    ccn3: '674',
    cca3: 'SMR',
    cioc: 'SMR',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['78'],
    },
    capital: ['City of San Marino'],
    altSpellings: ['SM', 'Republic of San Marino', 'Repubblica di San Marino'],
    region: 'Europe',
    subregion: 'Southern Europe',
    languages: {
      ita: 'Italian',
    },
    translations: {
      ara: {
        official: 'جمهورية سان مارينو',
        common: 'سان مارينو',
      },
      ces: {
        official: 'Republika San Marino',
        common: 'San Marino',
      },
      cym: {
        official: 'Republic of San Marino',
        common: 'San Marino',
      },
      deu: {
        official: 'Republik San Marino',
        common: 'San Marino',
      },
      est: {
        official: 'San Marino Vabariik',
        common: 'San Marino',
      },
      fin: {
        official: 'San Marinon seesteinen tasavalta',
        common: 'San Marino',
      },
      fra: {
        official: 'République de Saint-Marin',
        common: 'Saint-Marin',
      },
      hrv: {
        official: 'Većina Serene Republika San Marino',
        common: 'San Marino',
      },
      hun: {
        official: 'San Marino Köztársaság',
        common: 'San Marino',
      },
      ita: {
        official: 'Serenissima Repubblica di San Marino',
        common: 'San Marino',
      },
      jpn: {
        official: 'サンマリノのほとんどセリーヌ共和国',
        common: 'サンマリノ',
      },
      kor: {
        official: '산마리노 공화국',
        common: '산마리노',
      },
      nld: {
        official: 'Meest Serene Republiek San Marino',
        common: 'San Marino',
      },
      per: {
        official: 'جمهوری سان مارینو',
        common: 'سان مارینو',
      },
      pol: {
        official: 'Republika San Marino',
        common: 'San Marino',
      },
      por: {
        official: 'Sereníssima República de San Marino',
        common: 'San Marino',
      },
      rus: {
        official: 'Большинство Serene Республика Сан-Марино',
        common: 'Сан-Марино',
      },
      slk: {
        official: 'Sanmarínska republika',
        common: 'San Maríno',
      },
      spa: {
        official: 'Serenísima República de San Marino',
        common: 'San Marino',
      },
      swe: {
        official: 'Republiken San Marino',
        common: 'San Marino',
      },
      urd: {
        official: 'جمہوریہ سان مارینو',
        common: 'سان مارینو',
      },
      zho: {
        official: '圣马力诺共和国',
        common: '圣马力诺',
      },
    },
    latlng: [43.76666666, 12.41666666],
    landlocked: true,
    borders: ['ITA'],
    area: 61.0,
    demonyms: {
      eng: {
        f: 'Sammarinese',
        m: 'Sammarinese',
      },
      fra: {
        f: 'Saint-Marinaise',
        m: 'Saint-Marinais',
      },
    },
    flag: '\uD83C\uDDF8\uD83C\uDDF2',
    maps: {
      googleMaps: 'https://goo.gl/maps/rxCVJjm8dVY93RPY8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/54624',
    },
    population: 33938,
    fifa: 'SMR',
    car: {
      signs: ['RSM'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/sm.png',
      svg: 'https://flagcdn.com/sm.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/sm.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/sm.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [43.94, 12.45],
    },
    postalCode: {
      format: '4789#',
      regex: '^(4789\\d)$',
    },
  },
  {
    name: {
      common: 'Ghana',
      official: 'Republic of Ghana',
      nativeName: {
        eng: {
          official: 'Republic of Ghana',
          common: 'Ghana',
        },
      },
    },
    tld: ['.gh'],
    cca2: 'GH',
    ccn3: '288',
    cca3: 'GHA',
    cioc: 'GHA',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      GHS: {
        name: 'Ghanaian cedi',
        symbol: '₵',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['33'],
    },
    capital: ['Accra'],
    altSpellings: ['GH'],
    region: 'Africa',
    subregion: 'Western Africa',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'جمهورية غانا',
        common: 'غانا',
      },
      ces: {
        official: 'Ghanská republika',
        common: 'Ghana',
      },
      cym: {
        official: 'Republic of Ghana',
        common: 'Ghana',
      },
      deu: {
        official: 'Republik Ghana',
        common: 'Ghana',
      },
      est: {
        official: 'Ghana Vabariik',
        common: 'Ghana',
      },
      fin: {
        official: 'Ghanan tasavalta',
        common: 'Ghana',
      },
      fra: {
        official: 'République du Ghana',
        common: 'Ghana',
      },
      hrv: {
        official: 'Republika Gana',
        common: 'Gana',
      },
      hun: {
        official: 'Ghánai Köztársaság',
        common: 'Ghána',
      },
      ita: {
        official: 'Repubblica del Ghana',
        common: 'Ghana',
      },
      jpn: {
        official: 'ガーナ共和国',
        common: 'ガーナ',
      },
      kor: {
        official: '가나 공화국',
        common: '가나',
      },
      nld: {
        official: 'Republiek Ghana',
        common: 'Ghana',
      },
      per: {
        official: 'جمهوری غنا',
        common: 'غنا',
      },
      pol: {
        official: 'Republika Ghany',
        common: 'Ghana',
      },
      por: {
        official: 'República do Gana',
        common: 'Gana',
      },
      rus: {
        official: 'Республика Гана',
        common: 'Гана',
      },
      slk: {
        official: 'Ghanská republika',
        common: 'Ghana',
      },
      spa: {
        official: 'República de Ghana',
        common: 'Ghana',
      },
      swe: {
        official: 'Republiken Ghana',
        common: 'Ghana',
      },
      urd: {
        official: 'جمہوریہ گھانا',
        common: 'گھانا',
      },
      zho: {
        official: '加纳共和国',
        common: '加纳',
      },
    },
    latlng: [8.0, -2.0],
    landlocked: false,
    borders: ['BFA', 'CIV', 'TGO'],
    area: 238533.0,
    demonyms: {
      eng: {
        f: 'Ghanaian',
        m: 'Ghanaian',
      },
      fra: {
        f: 'Ghanéenne',
        m: 'Ghanéen',
      },
    },
    flag: '\uD83C\uDDEC\uD83C\uDDED',
    maps: {
      googleMaps: 'https://goo.gl/maps/Avy5RSmdsXFBaiXq8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/192781',
    },
    population: 31072945,
    gini: {
      '2016': 43.5,
    },
    fifa: 'GHA',
    car: {
      signs: ['GH'],
      side: 'right',
    },
    timezones: ['UTC'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/gh.png',
      svg: 'https://flagcdn.com/gh.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/gh.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/gh.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [5.55, -0.22],
    },
  },
  {
    name: {
      common: 'Honduras',
      official: 'Republic of Honduras',
      nativeName: {
        spa: {
          official: 'República de Honduras',
          common: 'Honduras',
        },
      },
    },
    tld: ['.hn'],
    cca2: 'HN',
    ccn3: '340',
    cca3: 'HND',
    cioc: 'HON',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      HNL: {
        name: 'Honduran lempira',
        symbol: 'L',
      },
    },
    idd: {
      root: '+5',
      suffixes: ['04'],
    },
    capital: ['Tegucigalpa'],
    altSpellings: ['HN', 'Republic of Honduras', 'República de Honduras'],
    region: 'Americas',
    subregion: 'Central America',
    languages: {
      spa: 'Spanish',
    },
    translations: {
      ara: {
        official: 'جمهورية هندوراس',
        common: 'هندوراس',
      },
      ces: {
        official: 'Honduraská republika',
        common: 'Honduras',
      },
      cym: {
        official: 'Republic of Honduras',
        common: 'Honduras',
      },
      deu: {
        official: 'Republik Honduras',
        common: 'Honduras',
      },
      est: {
        official: 'Hondurase Vabariik',
        common: 'Honduras',
      },
      fin: {
        official: 'Hondurasin tasavalta',
        common: 'Honduras',
      },
      fra: {
        official: 'République du Honduras',
        common: 'Honduras',
      },
      hrv: {
        official: 'Republika Honduras',
        common: 'Honduras',
      },
      hun: {
        official: 'Hondurasi Köztársaság',
        common: 'Honduras',
      },
      ita: {
        official: 'Repubblica di Honduras',
        common: 'Honduras',
      },
      jpn: {
        official: 'ホンジュラス共和国',
        common: 'ホンジュラス',
      },
      kor: {
        official: '온두라스 공화국',
        common: '온두라스',
      },
      nld: {
        official: 'Republiek Honduras',
        common: 'Honduras',
      },
      per: {
        official: 'جمهوری هندوراس',
        common: 'هُندوراس',
      },
      pol: {
        official: 'Republika Hondurasu',
        common: 'Honduras',
      },
      por: {
        official: 'República de Honduras',
        common: 'Honduras',
      },
      rus: {
        official: 'Республика Гондурас',
        common: 'Гондурас',
      },
      slk: {
        official: 'Honduraská republika',
        common: 'Honduras',
      },
      spa: {
        official: 'República de Honduras',
        common: 'Honduras',
      },
      swe: {
        official: 'Republiken Honduras',
        common: 'Honduras',
      },
      urd: {
        official: 'جمہوریہ ہونڈوراس',
        common: 'ہونڈوراس',
      },
      zho: {
        official: '洪都拉斯共和国',
        common: '洪都拉斯',
      },
    },
    latlng: [15.0, -86.5],
    landlocked: false,
    borders: ['GTM', 'SLV', 'NIC'],
    area: 112492.0,
    demonyms: {
      eng: {
        f: 'Honduran',
        m: 'Honduran',
      },
      fra: {
        f: 'Hondurienne',
        m: 'Hondurien',
      },
    },
    flag: '\uD83C\uDDED\uD83C\uDDF3',
    maps: {
      googleMaps: 'https://goo.gl/maps/BbeJK8Sk2VkMHbdF8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/287670',
    },
    population: 9904608,
    gini: {
      '2019': 48.2,
    },
    fifa: 'HON',
    car: {
      signs: ['HN'],
      side: 'right',
    },
    timezones: ['UTC-06:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/hn.png',
      svg: 'https://flagcdn.com/hn.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/hn.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/hn.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [14.1, -87.22],
    },
    postalCode: {
      format: '@@####',
      regex: '^([A-Z]{2}\\d{4})$',
    },
  },
  {
    name: {
      common: 'Maldives',
      official: 'Republic of the Maldives',
      nativeName: {
        div: {
          official: 'ދިވެހިރާއްޖޭގެ ޖުމްހޫރިއްޔާ',
          common: 'ދިވެހިރާއްޖޭގެ',
        },
      },
    },
    tld: ['.mv'],
    cca2: 'MV',
    ccn3: '462',
    cca3: 'MDV',
    cioc: 'MDV',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      MVR: {
        name: 'Maldivian rufiyaa',
        symbol: '.ރ',
      },
    },
    idd: {
      root: '+9',
      suffixes: ['60'],
    },
    capital: ['Malé'],
    altSpellings: ['MV', 'Maldive Islands', 'Republic of the Maldives', 'Dhivehi Raajjeyge Jumhooriyya'],
    region: 'Asia',
    subregion: 'Southern Asia',
    languages: {
      div: 'Maldivian',
    },
    translations: {
      ara: {
        official: 'جمهورية المالديف',
        common: 'المالديف',
      },
      ces: {
        official: 'Maledivská republika',
        common: 'Maledivy',
      },
      cym: {
        official: 'Republic of the Maldives',
        common: 'Maldives',
      },
      deu: {
        official: 'Republik Malediven',
        common: 'Malediven',
      },
      est: {
        official: 'Maldiivi Vabariik',
        common: 'Maldiivid',
      },
      fin: {
        official: 'Malediivien tasavalta',
        common: 'Malediivit',
      },
      fra: {
        official: 'République des Maldives',
        common: 'Maldives',
      },
      hrv: {
        official: 'Republika Maldivi',
        common: 'Maldivi',
      },
      hun: {
        official: 'Maldív-szigetek',
        common: 'Maldív-szigetek',
      },
      ita: {
        official: 'Repubblica delle Maldive',
        common: 'Maldive',
      },
      jpn: {
        official: 'モルディブ共和国',
        common: 'モルディブ',
      },
      kor: {
        official: '몰디브 공화국',
        common: '몰디브',
      },
      nld: {
        official: 'Republiek van de Malediven',
        common: 'Maldiven',
      },
      per: {
        official: 'جمهوری مالدیو',
        common: 'مالدیو',
      },
      pol: {
        official: 'Republika Malediwów',
        common: 'Malediwy',
      },
      por: {
        official: 'República das Maldivas',
        common: 'Maldivas',
      },
      rus: {
        official: 'Республика Мальдивы',
        common: 'Мальдивы',
      },
      slk: {
        official: 'Maldivská republika',
        common: 'Maldivy',
      },
      spa: {
        official: 'República de las Maldivas',
        common: 'Maldivas',
      },
      swe: {
        official: 'Republiken Maldiverna',
        common: 'Maldiverna',
      },
      urd: {
        official: 'جمہوریہ مالدیپ',
        common: 'مالدیپ',
      },
      zho: {
        official: '马尔代夫共和国',
        common: '马尔代夫',
      },
    },
    latlng: [3.25, 73.0],
    landlocked: false,
    area: 300.0,
    demonyms: {
      eng: {
        f: 'Maldivan',
        m: 'Maldivan',
      },
      fra: {
        f: 'Maldivienne',
        m: 'Maldivien',
      },
    },
    flag: '\uD83C\uDDF2\uD83C\uDDFB',
    maps: {
      googleMaps: 'https://goo.gl/maps/MNAWGq9vEdbZ9vUV7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/536773',
    },
    population: 540542,
    gini: {
      '2016': 31.3,
    },
    fifa: 'MDV',
    car: {
      signs: ['MV'],
      side: 'left',
    },
    timezones: ['UTC+05:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/mv.png',
      svg: 'https://flagcdn.com/mv.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/mv.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/mv.svg',
    },
    startOfWeek: 'sunday',
    capitalInfo: {
      latlng: [4.17, 73.51],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Nepal',
      official: 'Federal Democratic Republic of Nepal',
      nativeName: {
        nep: {
          official: 'नेपाल संघीय लोकतान्त्रिक गणतन्त्र',
          common: 'नेपाल',
        },
      },
    },
    tld: ['.np'],
    cca2: 'NP',
    ccn3: '524',
    cca3: 'NPL',
    cioc: 'NEP',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      NPR: {
        name: 'Nepalese rupee',
        symbol: '₨',
      },
    },
    idd: {
      root: '+9',
      suffixes: ['77'],
    },
    capital: ['Kathmandu'],
    altSpellings: ['NP', 'Federal Democratic Republic of Nepal', 'Loktāntrik Ganatantra Nepāl'],
    region: 'Asia',
    subregion: 'Southern Asia',
    languages: {
      nep: 'Nepali',
    },
    translations: {
      ara: {
        official: 'جمهورية نيبال الديمقراطية الاتحادية',
        common: 'نيبال',
      },
      ces: {
        official: 'Federativní demokratická republika Nepál',
        common: 'Nepál',
      },
      cym: {
        official: 'Federal Democratic Republic of Nepal',
        common: 'Nepal',
      },
      deu: {
        official: 'Demokratische Bundesrepublik Nepal',
        common: 'Nepal',
      },
      est: {
        official: 'Nepali Demokraatlik Liitvabariik',
        common: 'Nepal',
      },
      fin: {
        official: 'Nepalin demokraattinen liittotasavalta',
        common: 'Nepal',
      },
      fra: {
        official: 'République du Népal',
        common: 'Népal',
      },
      hrv: {
        official: 'Savezna Demokratska Republika Nepal',
        common: 'Nepal',
      },
      hun: {
        official: 'Nepáli Szövetségi Demokratikus Köztársaság',
        common: 'Nepál',
      },
      ita: {
        official: 'Repubblica federale democratica del Nepal',
        common: 'Nepal',
      },
      jpn: {
        official: 'ネパール連邦民主共和国',
        common: 'ネパール',
      },
      kor: {
        official: '네팔 연방 민주 공화국',
        common: '네팔',
      },
      nld: {
        official: 'Federale Democratische Republiek Nepal',
        common: 'Nepal',
      },
      per: {
        official: 'جمهوری فدرال دموکراتیک نپال',
        common: 'نپال',
      },
      pol: {
        official: 'Federalna Demokratyczna Republika Nepalu',
        common: 'Nepal',
      },
      por: {
        official: 'República Democrática Federal do Nepal',
        common: 'Nepal',
      },
      rus: {
        official: 'Федеративная Демократическая Республика Непал',
        common: 'Непал',
      },
      slk: {
        official: 'Nepálska federatívna demokratická republika',
        common: 'Nepál',
      },
      spa: {
        official: 'República Democrática Federal de Nepal',
        common: 'Nepal',
      },
      swe: {
        official: 'Demokratiska förbundsrepubliken Nepal',
        common: 'Nepal',
      },
      urd: {
        official: 'وفاقی جمہوری جمہوریہ نیپال',
        common: 'نیپال',
      },
      zho: {
        official: '尼泊尔联邦民主共和国',
        common: '尼泊尔',
      },
    },
    latlng: [28.0, 84.0],
    landlocked: true,
    borders: ['CHN', 'IND'],
    area: 147181.0,
    demonyms: {
      eng: {
        f: 'Nepalese',
        m: 'Nepalese',
      },
      fra: {
        f: 'Népalaise',
        m: 'Népalais',
      },
    },
    flag: '\uD83C\uDDF3\uD83C\uDDF5',
    maps: {
      googleMaps: 'https://goo.gl/maps/UMj2zpbQp7B5c3yT7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/184633',
    },
    population: 29136808,
    gini: {
      '2010': 32.8,
    },
    fifa: 'NEP',
    car: {
      signs: ['NEP'],
      side: 'left',
    },
    timezones: ['UTC+05:45'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/np.png',
      svg: 'https://flagcdn.com/np.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/np.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/np.svg',
    },
    startOfWeek: 'sunday',
    capitalInfo: {
      latlng: [27.72, 85.32],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Taiwan',
      official: 'Republic of China (Taiwan)',
      nativeName: {
        zho: {
          official: '中華民國',
          common: '台灣',
        },
      },
    },
    tld: ['.tw', '.台灣', '.台湾'],
    cca2: 'TW',
    ccn3: '158',
    cca3: 'TWN',
    cioc: 'TPE',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      TWD: {
        name: 'New Taiwan dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+8',
      suffixes: ['86'],
    },
    capital: ['Taipei'],
    altSpellings: ['TW', 'Táiwān', 'Republic of China', '中華民國', 'Zhōnghuá Mínguó', 'Chinese Taipei'],
    region: 'Asia',
    subregion: 'Eastern Asia',
    languages: {
      zho: 'Chinese',
    },
    translations: {
      ara: {
        official: 'جمهورية الصين (تايوان)',
        common: 'تايوان',
      },
      ces: {
        official: 'Čínská republika',
        common: 'Tchaj-wan',
      },
      cym: {
        official: 'Republic of China (Taiwan)',
        common: 'Taiwan',
      },
      deu: {
        official: 'Republik China (Taiwan)',
        common: 'Taiwan',
      },
      est: {
        official: 'Taiwani',
        common: 'Taiwan',
      },
      fin: {
        official: 'Kiinan tasavalta',
        common: 'Taiwan',
      },
      fra: {
        official: 'République de Chine (Taïwan)',
        common: 'Taïwan',
      },
      hrv: {
        official: 'Republika Kina',
        common: 'Tajvan',
      },
      hun: {
        official: 'Kínai Köztársaság',
        common: 'Tajvan',
      },
      ita: {
        official: 'Repubblica cinese (Taiwan)',
        common: 'Taiwan',
      },
      jpn: {
        official: '中華民国',
        common: '台湾',
      },
      kor: {
        official: '중화민국',
        common: '대만',
      },
      nld: {
        official: 'Republiek China (Taiwan)',
        common: 'Taiwan',
      },
      per: {
        official: 'جمهوری چین',
        common: 'تایوان',
      },
      pol: {
        official: 'Republika Chińska (Tajwan)',
        common: 'Tajwan',
      },
      por: {
        official: 'República da China',
        common: 'Ilha Formosa',
      },
      rus: {
        official: 'Китайская Республика',
        common: 'Тайвань',
      },
      slk: {
        official: 'Čínska republika',
        common: 'Taiwan',
      },
      spa: {
        official: 'República de China en Taiwán',
        common: 'Taiwán',
      },
      swe: {
        official: 'Republiken Kina',
        common: 'Taiwan',
      },
      urd: {
        official: 'جمہوریہ چین (تائیوان)',
        common: 'تائیوان',
      },
    },
    latlng: [23.5, 121.0],
    landlocked: false,
    area: 36193.0,
    demonyms: {
      eng: {
        f: 'Taiwanese',
        m: 'Taiwanese',
      },
      fra: {
        f: 'Taïwanaise',
        m: 'Taïwanais',
      },
    },
    flag: '\uD83C\uDDF9\uD83C\uDDFC',
    maps: {
      googleMaps: 'https://goo.gl/maps/HgMKFQjNadF3Wa6B6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/449220',
    },
    population: 23503349,
    fifa: 'TPE',
    car: {
      signs: ['RC'],
      side: 'right',
    },
    timezones: ['UTC+08:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/tw.png',
      svg: 'https://flagcdn.com/tw.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/tw.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/tw.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [25.03, 121.52],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Niger',
      official: 'Republic of Niger',
      nativeName: {
        fra: {
          official: 'République du Niger',
          common: 'Niger',
        },
      },
    },
    tld: ['.ne'],
    cca2: 'NE',
    ccn3: '562',
    cca3: 'NER',
    cioc: 'NIG',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      XOF: {
        name: 'West African CFA franc',
        symbol: 'Fr',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['27'],
    },
    capital: ['Niamey'],
    altSpellings: ['NE', 'Nijar'],
    region: 'Africa',
    subregion: 'Western Africa',
    languages: {
      fra: 'French',
    },
    translations: {
      ara: {
        official: 'جمهورية النيجر',
        common: 'النيجر',
      },
      ces: {
        official: 'Nigerská republika',
        common: 'Niger',
      },
      cym: {
        official: 'Republic of Niger',
        common: 'Niger',
      },
      deu: {
        official: 'Republik Niger',
        common: 'Niger',
      },
      est: {
        official: 'Nigeri Vabariik',
        common: 'Niger',
      },
      fin: {
        official: 'Nigerin tasavalta',
        common: 'Niger',
      },
      fra: {
        official: 'République du Niger',
        common: 'Niger',
      },
      hrv: {
        official: 'Republika Niger',
        common: 'Niger',
      },
      hun: {
        official: 'Nigeri Köztársaság',
        common: 'Niger',
      },
      ita: {
        official: 'Repubblica del Niger',
        common: 'Niger',
      },
      jpn: {
        official: 'ニジェール共和国',
        common: 'ニジェール',
      },
      kor: {
        official: '니제르 공화국',
        common: '니제르',
      },
      nld: {
        official: 'Republiek Niger',
        common: 'Niger',
      },
      per: {
        official: 'جمهوری نیجر',
        common: 'نیجر',
      },
      pol: {
        official: 'Republika Nigru',
        common: 'Niger',
      },
      por: {
        official: 'República do Níger',
        common: 'Níger',
      },
      rus: {
        official: 'Республика Нигер',
        common: 'Нигер',
      },
      slk: {
        official: 'Nigérská republika',
        common: 'Niger',
      },
      spa: {
        official: 'República de Níger',
        common: 'Níger',
      },
      swe: {
        official: 'Republiken Niger',
        common: 'Niger',
      },
      urd: {
        official: 'جمہوریہ نائجر',
        common: 'نائجر',
      },
      zho: {
        official: '尼日尔共和国',
        common: '尼日尔',
      },
    },
    latlng: [16.0, 8.0],
    landlocked: true,
    borders: ['DZA', 'BEN', 'BFA', 'TCD', 'LBY', 'MLI', 'NGA'],
    area: 1267000.0,
    demonyms: {
      eng: {
        f: 'Nigerien',
        m: 'Nigerien',
      },
      fra: {
        f: 'Nigérienne',
        m: 'Nigérien',
      },
    },
    flag: '\uD83C\uDDF3\uD83C\uDDEA',
    maps: {
      googleMaps: 'https://goo.gl/maps/VKNU2TLsZcgxM49c8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/192786',
    },
    population: 24206636,
    gini: {
      '2014': 34.3,
    },
    fifa: 'NIG',
    car: {
      signs: ['RN'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/ne.png',
      svg: 'https://flagcdn.com/ne.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ne.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ne.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [13.52, 2.12],
    },
    postalCode: {
      format: '####',
      regex: '^(\\d{4})$',
    },
  },
  {
    name: {
      common: 'Slovakia',
      official: 'Slovak Republic',
      nativeName: {
        slk: {
          official: 'Slovenská republika',
          common: 'Slovensko',
        },
      },
    },
    tld: ['.sk'],
    cca2: 'SK',
    ccn3: '703',
    cca3: 'SVK',
    cioc: 'SVK',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    idd: {
      root: '+4',
      suffixes: ['21'],
    },
    capital: ['Bratislava'],
    altSpellings: ['SK', 'Slovak Republic', 'Slovenská republika'],
    region: 'Europe',
    subregion: 'Central Europe',
    languages: {
      slk: 'Slovak',
    },
    translations: {
      ara: {
        official: 'جمهورية سلوفاكيا',
        common: 'سلوفاكيا',
      },
      ces: {
        official: 'Slovenská republika',
        common: 'Slovensko',
      },
      cym: {
        official: 'Slovak Republic',
        common: 'Slovakia',
      },
      deu: {
        official: 'Slowakische Republik',
        common: 'Slowakei',
      },
      est: {
        official: 'Slovaki Vabariik',
        common: 'Slovakkia',
      },
      fin: {
        official: 'Slovakian tasavalta',
        common: 'Slovakia',
      },
      fra: {
        official: 'République slovaque',
        common: 'Slovaquie',
      },
      hrv: {
        official: 'slovačka',
        common: 'Slovačka',
      },
      hun: {
        official: 'Szlovák Köztársaság',
        common: 'Szlovákia',
      },
      ita: {
        official: 'Repubblica slovacca',
        common: 'Slovacchia',
      },
      jpn: {
        official: 'スロバキア共和国',
        common: 'スロバキア',
      },
      kor: {
        official: '슬로바키아 공화국',
        common: '슬로바키아',
      },
      nld: {
        official: 'Slowaakse Republiek',
        common: 'Slowakije',
      },
      per: {
        official: 'جمهوری اسلواکی',
        common: 'اِسلُواکی',
      },
      pol: {
        official: 'Republika Słowacka',
        common: 'Słowacja',
      },
      por: {
        official: 'República Eslovaca',
        common: 'Eslováquia',
      },
      rus: {
        official: 'Словацкая Республика',
        common: 'Словакия',
      },
      slk: {
        official: 'Slovenská republika',
        common: 'Slovensko',
      },
      spa: {
        official: 'República Eslovaca',
        common: 'República Eslovaca',
      },
      swe: {
        official: 'Republiken Slovakien',
        common: 'Slovakien',
      },
      urd: {
        official: 'جمہوریہ سلوواکیہ',
        common: 'سلوواکیہ',
      },
      zho: {
        official: '斯洛伐克共和国',
        common: '斯洛伐克',
      },
    },
    latlng: [48.66666666, 19.5],
    landlocked: true,
    borders: ['AUT', 'CZE', 'HUN', 'POL', 'UKR'],
    area: 49037.0,
    demonyms: {
      eng: {
        f: 'Slovak',
        m: 'Slovak',
      },
      fra: {
        f: 'Slovaque',
        m: 'Slovaque',
      },
    },
    flag: '\uD83C\uDDF8\uD83C\uDDF0',
    maps: {
      googleMaps: 'https://goo.gl/maps/uNSH2wW4bLoZVYJj7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/14296',
    },
    population: 5458827,
    gini: {
      '2018': 25.0,
    },
    fifa: 'SVK',
    car: {
      signs: ['SK'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/sk.png',
      svg: 'https://flagcdn.com/sk.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/sk.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/sk.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [48.15, 17.12],
    },
    postalCode: {
      format: '###  ##',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Lebanon',
      official: 'Lebanese Republic',
      nativeName: {
        ara: {
          official: 'الجمهورية اللبنانية',
          common: 'لبنان',
        },
        fra: {
          official: 'République libanaise',
          common: 'Liban',
        },
      },
    },
    tld: ['.lb'],
    cca2: 'LB',
    ccn3: '422',
    cca3: 'LBN',
    cioc: 'LBN',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      LBP: {
        name: 'Lebanese pound',
        symbol: 'ل.ل',
      },
    },
    idd: {
      root: '+9',
      suffixes: ['61'],
    },
    capital: ['Beirut'],
    altSpellings: ['LB', 'Lebanese Republic', 'Al-Jumhūrīyah Al-Libnānīyah'],
    region: 'Asia',
    subregion: 'Western Asia',
    languages: {
      ara: 'Arabic',
      fra: 'French',
    },
    translations: {
      ara: {
        official: 'الجمهورية اللبنانية',
        common: 'لبنان',
      },
      ces: {
        official: 'Libanonská republika',
        common: 'Libanon',
      },
      cym: {
        official: 'Lebanese Republic',
        common: 'Lebanon',
      },
      deu: {
        official: 'Libanesische Republik',
        common: 'Libanon',
      },
      est: {
        official: 'Liibanoni Vabariik',
        common: 'Liibanon',
      },
      fin: {
        official: 'Libanonin tasavalta',
        common: 'Libanon',
      },
      fra: {
        official: 'République libanaise',
        common: 'Liban',
      },
      hrv: {
        official: 'Libanonska Republika',
        common: 'Libanon',
      },
      hun: {
        official: 'Libanoni Köztársaság',
        common: 'Libanon',
      },
      ita: {
        official: 'Repubblica libanese',
        common: 'Libano',
      },
      jpn: {
        official: 'レバノン共和国',
        common: 'レバノン',
      },
      kor: {
        official: '레바논 공화국',
        common: '레바논',
      },
      nld: {
        official: 'Libanese Republiek',
        common: 'Libanon',
      },
      per: {
        official: 'جمهوری لبنان',
        common: 'لبنان',
      },
      pol: {
        official: 'Republika Libańska',
        common: 'Liban',
      },
      por: {
        official: 'República Libanesa',
        common: 'Líbano',
      },
      rus: {
        official: 'Ливанская Республика',
        common: 'Ливан',
      },
      slk: {
        official: 'Libanonská republika',
        common: 'Libanon',
      },
      spa: {
        official: 'República Libanesa',
        common: 'Líbano',
      },
      swe: {
        official: 'Republiken Libanon',
        common: 'Libanon',
      },
      urd: {
        official: 'جمہوریہ لبنان',
        common: 'لبنان',
      },
      zho: {
        official: '黎巴嫩共和国',
        common: '黎巴嫩',
      },
    },
    latlng: [33.83333333, 35.83333333],
    landlocked: false,
    borders: ['ISR', 'SYR'],
    area: 10452.0,
    demonyms: {
      eng: {
        f: 'Lebanese',
        m: 'Lebanese',
      },
      fra: {
        f: 'Libanaise',
        m: 'Libanais',
      },
    },
    flag: '\uD83C\uDDF1\uD83C\uDDE7',
    maps: {
      googleMaps: 'https://goo.gl/maps/Sz5VCU8UFBqMyTdc9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/184843',
    },
    population: 6825442,
    gini: {
      '2011': 31.8,
    },
    fifa: 'LBN',
    car: {
      signs: ['RL'],
      side: 'right',
    },
    timezones: ['UTC+02:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/lb.png',
      svg: 'https://flagcdn.com/lb.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/lb.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/lb.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [33.87, 35.5],
    },
    postalCode: {
      format: '#### ####|####',
      regex: '^(\\d{4}(\\d{4})?)$',
    },
  },
  {
    name: {
      common: 'Oman',
      official: 'Sultanate of Oman',
      nativeName: {
        ara: {
          official: 'سلطنة عمان',
          common: 'عمان',
        },
      },
    },
    tld: ['.om'],
    cca2: 'OM',
    ccn3: '512',
    cca3: 'OMN',
    cioc: 'OMA',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      OMR: {
        name: 'Omani rial',
        symbol: 'ر.ع.',
      },
    },
    idd: {
      root: '+9',
      suffixes: ['68'],
    },
    capital: ['Muscat'],
    altSpellings: ['OM', 'Sultanate of Oman', 'Salṭanat ʻUmān'],
    region: 'Asia',
    subregion: 'Western Asia',
    languages: {
      ara: 'Arabic',
    },
    translations: {
      ara: {
        official: 'سلطنة عمان',
        common: 'عمان',
      },
      ces: {
        official: 'Sultanát Omán',
        common: 'Omán',
      },
      cym: {
        official: 'Sultanate of Oman',
        common: 'Oman',
      },
      deu: {
        official: 'Sultanat Oman',
        common: 'Oman',
      },
      est: {
        official: 'Omaani Sultaniriik',
        common: 'Omaan',
      },
      fin: {
        official: 'Omanin sulttaanikunta',
        common: 'Oman',
      },
      fra: {
        official: "Sultanat d'Oman",
        common: 'Oman',
      },
      hrv: {
        official: 'Sultanat Oman',
        common: 'Oman',
      },
      hun: {
        official: 'Ománi Szultanátus',
        common: 'Omán',
      },
      ita: {
        official: "Sultanato dell'Oman",
        common: 'oman',
      },
      jpn: {
        official: 'オマーン·スルタン国',
        common: 'オマーン',
      },
      kor: {
        official: '오만 술탄국',
        common: '오만',
      },
      nld: {
        official: 'Sultanaat van Oman',
        common: 'Oman',
      },
      per: {
        official: 'سلطان‌نشین عُمان',
        common: 'عمان',
      },
      pol: {
        official: 'Sułtanat Omanu',
        common: 'Oman',
      },
      por: {
        official: 'Sultanato de Omã',
        common: 'Omã',
      },
      rus: {
        official: 'Султанат Оман',
        common: 'Оман',
      },
      slk: {
        official: 'Ománsky sultanát',
        common: 'Omán',
      },
      spa: {
        official: 'Sultanato de Omán',
        common: 'Omán',
      },
      swe: {
        official: 'Sultanatet Oman',
        common: 'Oman',
      },
      urd: {
        official: 'سلطنت عمان',
        common: 'عمان',
      },
      zho: {
        official: '阿曼苏丹国',
        common: '阿曼',
      },
    },
    latlng: [21.0, 57.0],
    landlocked: false,
    borders: ['SAU', 'ARE', 'YEM'],
    area: 309500.0,
    demonyms: {
      eng: {
        f: 'Omani',
        m: 'Omani',
      },
      fra: {
        f: 'Omanaise',
        m: 'Omanais',
      },
    },
    flag: '\uD83C\uDDF4\uD83C\uDDF2',
    maps: {
      googleMaps: 'https://goo.gl/maps/L2BoXoAwDDwWecnw5',
      openStreetMaps: 'https://www.openstreetmap.org/relation/305138',
    },
    population: 5106622,
    fifa: 'OMA',
    car: {
      signs: ['OM'],
      side: 'right',
    },
    timezones: ['UTC+04:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/om.png',
      svg: 'https://flagcdn.com/om.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/om.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/om.svg',
    },
    startOfWeek: 'sunday',
    capitalInfo: {
      latlng: [23.62, 58.58],
    },
    postalCode: {
      format: '###',
      regex: '^(\\d{3})$',
    },
  },
  {
    name: {
      common: 'Niue',
      official: 'Niue',
      nativeName: {
        eng: {
          official: 'Niue',
          common: 'Niue',
        },
        niu: {
          official: 'Niuē',
          common: 'Niuē',
        },
      },
    },
    tld: ['.nu'],
    cca2: 'NU',
    ccn3: '570',
    cca3: 'NIU',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      NZD: {
        name: 'New Zealand dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+6',
      suffixes: ['83'],
    },
    capital: ['Alofi'],
    altSpellings: ['NU'],
    region: 'Oceania',
    subregion: 'Polynesia',
    languages: {
      eng: 'English',
      niu: 'Niuean',
    },
    translations: {
      ara: {
        official: 'نييوي',
        common: 'نييوي',
      },
      ces: {
        official: 'Niue',
        common: 'Niue',
      },
      cym: {
        official: 'Niue',
        common: 'Niue',
      },
      deu: {
        official: 'Niue',
        common: 'Niue',
      },
      est: {
        official: 'Niue',
        common: 'Niue',
      },
      fin: {
        official: 'Niue',
        common: 'Niue',
      },
      fra: {
        official: 'Niue',
        common: 'Niue',
      },
      hrv: {
        official: 'Niue',
        common: 'Niue',
      },
      hun: {
        official: 'Niue',
        common: 'Niue',
      },
      ita: {
        official: 'Niue',
        common: 'Niue',
      },
      jpn: {
        official: 'ニウエ',
        common: 'ニウエ',
      },
      kor: {
        official: '니우에',
        common: '니우에',
      },
      nld: {
        official: 'Niue',
        common: 'Niue',
      },
      per: {
        official: 'نیووی',
        common: 'نیووی',
      },
      pol: {
        official: 'Niue',
        common: 'Niue',
      },
      por: {
        official: 'Niue',
        common: 'Niue',
      },
      rus: {
        official: 'Ниуэ',
        common: 'Ниуэ',
      },
      slk: {
        official: 'Niue',
        common: 'Niue',
      },
      spa: {
        official: 'Niue',
        common: 'Niue',
      },
      swe: {
        official: 'Niue',
        common: 'Niue',
      },
      urd: {
        official: 'نیووے',
        common: 'نیووے',
      },
      zho: {
        official: '纽埃',
        common: '纽埃',
      },
    },
    latlng: [-19.03333333, -169.86666666],
    landlocked: false,
    area: 260.0,
    demonyms: {
      eng: {
        f: 'Niuean',
        m: 'Niuean',
      },
      fra: {
        f: 'Niuéenne',
        m: 'Niuéen',
      },
    },
    flag: '\uD83C\uDDF3\uD83C\uDDFA',
    maps: {
      googleMaps: 'https://goo.gl/maps/xFgdzs3E55Rk1y8P9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/1558556',
    },
    population: 1470,
    car: {
      signs: ['NZ'],
      side: 'left',
    },
    timezones: ['UTC-11:00'],
    continents: ['Oceania'],
    flags: {
      png: 'https://flagcdn.com/w320/nu.png',
      svg: 'https://flagcdn.com/nu.svg',
    },
    coatOfArms: {},
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-19.02, -169.92],
    },
  },
  {
    name: {
      common: 'Anguilla',
      official: 'Anguilla',
      nativeName: {
        eng: {
          official: 'Anguilla',
          common: 'Anguilla',
        },
      },
    },
    tld: ['.ai'],
    cca2: 'AI',
    ccn3: '660',
    cca3: 'AIA',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      XCD: {
        name: 'Eastern Caribbean dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+1',
      suffixes: ['264'],
    },
    capital: ['The Valley'],
    altSpellings: ['AI'],
    region: 'Americas',
    subregion: 'Caribbean',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'أنغويلا',
        common: 'أنغويلا',
      },
      ces: {
        official: 'Anguilla',
        common: 'Anguilla',
      },
      cym: {
        official: 'Anguilla',
        common: 'Anguilla',
      },
      deu: {
        official: 'Anguilla',
        common: 'Anguilla',
      },
      est: {
        official: 'Anguilla',
        common: 'Anguilla',
      },
      fin: {
        official: 'Anguilla',
        common: 'Anguilla',
      },
      fra: {
        official: 'Anguilla',
        common: 'Anguilla',
      },
      hrv: {
        official: 'Anguilla',
        common: 'Angvila',
      },
      hun: {
        official: 'Anguilla',
        common: 'Anguilla',
      },
      ita: {
        official: 'Anguilla',
        common: 'Anguilla',
      },
      jpn: {
        official: 'アングィラ',
        common: 'アンギラ',
      },
      kor: {
        official: '앵귈라',
        common: '앵귈라',
      },
      nld: {
        official: 'Anguilla',
        common: 'Anguilla',
      },
      per: {
        official: 'آنگویلا',
        common: 'آنگویلا',
      },
      pol: {
        official: 'Anguilla',
        common: 'Anguilla',
      },
      por: {
        official: 'Anguilla',
        common: 'Anguilla',
      },
      rus: {
        official: 'Ангилья',
        common: 'Ангилья',
      },
      slk: {
        official: 'Anguilla',
        common: 'Anguilla',
      },
      spa: {
        official: 'Anguila',
        common: 'Anguilla',
      },
      swe: {
        official: 'Anguilla',
        common: 'Anguilla',
      },
      urd: {
        official: 'اینگویلا',
        common: 'اینگویلا',
      },
      zho: {
        official: '安圭拉',
        common: '安圭拉',
      },
    },
    latlng: [18.25, -63.16666666],
    landlocked: false,
    area: 91.0,
    demonyms: {
      eng: {
        f: 'Anguillian',
        m: 'Anguillian',
      },
      fra: {
        f: 'Anguillane',
        m: 'Anguillan',
      },
    },
    flag: '\uD83C\uDDE6\uD83C\uDDEE',
    maps: {
      googleMaps: 'https://goo.gl/maps/3KgLnEyN7amdno2p9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/2177161',
    },
    population: 13452,
    fifa: 'AIA',
    car: {
      signs: ['GB'],
      side: 'left',
    },
    timezones: ['UTC-04:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/ai.png',
      svg: 'https://flagcdn.com/ai.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ai.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ai.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [18.22, -63.05],
    },
  },
  {
    name: {
      common: 'Singapore',
      official: 'Republic of Singapore',
      nativeName: {
        zho: {
          official: '新加坡共和国',
          common: '新加坡',
        },
        eng: {
          official: 'Republic of Singapore',
          common: 'Singapore',
        },
        msa: {
          official: 'Republik Singapura',
          common: 'Singapura',
        },
        tam: {
          official: 'சிங்கப்பூர் குடியரசு',
          common: 'சிங்கப்பூர்',
        },
      },
    },
    tld: ['.sg', '.新加坡', '.சிங்கப்பூர்'],
    cca2: 'SG',
    ccn3: '702',
    cca3: 'SGP',
    cioc: 'SGP',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      SGD: {
        name: 'Singapore dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+6',
      suffixes: ['5'],
    },
    capital: ['Singapore'],
    altSpellings: ['SG', 'Singapura', 'Republik Singapura', '新加坡共和国'],
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    languages: {
      zho: 'Chinese',
      eng: 'English',
      msa: 'Malay',
      tam: 'Tamil',
    },
    translations: {
      ara: {
        official: 'جمهورية سنغافورة',
        common: 'سنغافورة',
      },
      ces: {
        official: 'Singapurská republika',
        common: 'Singapur',
      },
      cym: {
        official: 'Republic of Singapore',
        common: 'Singapore',
      },
      deu: {
        official: 'Republik Singapur',
        common: 'Singapur',
      },
      est: {
        official: 'Singapuri Vabariik',
        common: 'Singapur',
      },
      fin: {
        official: 'Singaporen tasavalta',
        common: 'Singapore',
      },
      fra: {
        official: 'République de Singapour',
        common: 'Singapour',
      },
      hrv: {
        official: 'Republika Singapur',
        common: 'Singapur',
      },
      hun: {
        official: 'Szingapúri Köztársaság',
        common: 'Szingapúr',
      },
      ita: {
        official: 'Repubblica di Singapore',
        common: 'Singapore',
      },
      jpn: {
        official: 'シンガポール共和国',
        common: 'シンガポール',
      },
      kor: {
        official: '싱가포르 공화국',
        common: '싱가포르',
      },
      nld: {
        official: 'Republiek Singapore',
        common: 'Singapore',
      },
      per: {
        official: 'جمهوری سنگاپور',
        common: 'سنگاپور',
      },
      pol: {
        official: 'Republika Singapuru',
        common: 'Singapur',
      },
      por: {
        official: 'República de Singapura',
        common: 'Singapura',
      },
      rus: {
        official: 'Республика Сингапур',
        common: 'Сингапур',
      },
      slk: {
        official: 'Singapurská republika',
        common: 'Singapur',
      },
      spa: {
        official: 'República de Singapur',
        common: 'Singapur',
      },
      swe: {
        official: 'Republiken Singapore',
        common: 'Singapore',
      },
      urd: {
        official: 'جمہوریہ سنگاپور',
        common: 'سنگاپور',
      },
    },
    latlng: [1.36666666, 103.8],
    landlocked: false,
    area: 710.0,
    demonyms: {
      eng: {
        f: 'Singaporean',
        m: 'Singaporean',
      },
      fra: {
        f: 'Singapourienne',
        m: 'Singapourien',
      },
    },
    flag: '\uD83C\uDDF8\uD83C\uDDEC',
    maps: {
      googleMaps: 'https://goo.gl/maps/QbQt9Y9b5KFzsahV6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/536780',
    },
    population: 5685807,
    fifa: 'SIN',
    car: {
      signs: ['SGP'],
      side: 'left',
    },
    timezones: ['UTC+08:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/sg.png',
      svg: 'https://flagcdn.com/sg.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/sg.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/sg.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [1.28, 103.85],
    },
    postalCode: {
      format: '######',
      regex: '^(\\d{6})$',
    },
  },
  {
    name: {
      common: 'Ivory Coast',
      official: "Republic of Côte d'Ivoire",
      nativeName: {
        fra: {
          official: "République de Côte d'Ivoire",
          common: "Côte d'Ivoire",
        },
      },
    },
    tld: ['.ci'],
    cca2: 'CI',
    ccn3: '384',
    cca3: 'CIV',
    cioc: 'CIV',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      XOF: {
        name: 'West African CFA franc',
        symbol: 'Fr',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['25'],
    },
    capital: ['Yamoussoukro'],
    altSpellings: ['CI', "Côte d'Ivoire", 'Ivory Coast', "Republic of Côte d'Ivoire", "République de Côte d'Ivoire"],
    region: 'Africa',
    subregion: 'Western Africa',
    languages: {
      fra: 'French',
    },
    translations: {
      ara: {
        official: 'جمهورية ساحل العاج',
        common: 'ساحل العاج',
      },
      ces: {
        official: 'Republika Pobřeží slonoviny',
        common: 'Pobřeží slonoviny',
      },
      cym: {
        official: "Republic of Côte d'Ivoire",
        common: 'Ivory Coast',
      },
      deu: {
        official: "Republik Côte d'Ivoire",
        common: 'Elfenbeinküste',
      },
      est: {
        official: 'Côte d’Ivoire’i Vabariik',
        common: 'Elevandiluurannik',
      },
      fin: {
        official: 'Norsunluurannikon tasavalta',
        common: 'Norsunluurannikko',
      },
      fra: {
        official: "République de Côte d' Ivoire",
        common: "Côte d'Ivoire",
      },
      hrv: {
        official: "Republika Côte d'Ivoire",
        common: 'Obala Bjelokosti',
      },
      hun: {
        official: 'Elefántcsontparti Köztársaság',
        common: 'Elefántcsontpart',
      },
      ita: {
        official: "Repubblica della Costa d'Avorio",
        common: "Costa d'Avorio",
      },
      jpn: {
        official: 'コートジボワール共和国',
        common: 'コートジボワール',
      },
      kor: {
        official: '코트디부아르 공화국',
        common: '코트디부아르',
      },
      nld: {
        official: 'Republiek Ivoorkust',
        common: 'Ivoorkust',
      },
      per: {
        official: 'جمهوری ساحل عاج',
        common: 'ساحل عاج',
      },
      pol: {
        official: 'Republika WybrzeŻa Kości Słoniowej',
        common: 'WybrzeŻe Kości Słoniowej',
      },
      por: {
        official: "República da Côte d'Ivoire",
        common: 'Costa do Marfim',
      },
      rus: {
        official: "Республика Кот-д'Ивуаре",
        common: 'Кот-д’Ивуар',
      },
      slk: {
        official: 'Republika Pobrežie Slonoviny',
        common: 'Pobržie Slonoviny',
      },
      spa: {
        official: "República de Côte d'Ivoire",
        common: 'Costa de Marfil',
      },
      swe: {
        official: 'Republiken Elfenbenskusten',
        common: 'Elfenbenskusten',
      },
      urd: {
        official: 'جمہوریہ کوت دیواغ',
        common: 'آئیوری کوسٹ',
      },
      zho: {
        official: '科特迪瓦共和国',
        common: '科特迪瓦',
      },
    },
    latlng: [8.0, -5.0],
    landlocked: false,
    borders: ['BFA', 'GHA', 'GIN', 'LBR', 'MLI'],
    area: 322463.0,
    demonyms: {
      eng: {
        f: 'Ivorian',
        m: 'Ivorian',
      },
      fra: {
        f: 'Ivoirienne',
        m: 'Ivoirien',
      },
    },
    flag: '\uD83C\uDDE8\uD83C\uDDEE',
    maps: {
      googleMaps: 'https://goo.gl/maps/wKsmN7f5qAeNtGjP6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/192779',
    },
    population: 26378275,
    gini: {
      '2015': 41.5,
    },
    fifa: 'CIV',
    car: {
      signs: ['CI'],
      side: 'right',
    },
    timezones: ['UTC'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/ci.png',
      svg: 'https://flagcdn.com/ci.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ci.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ci.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [6.82, -5.27],
    },
  },
  {
    name: {
      common: 'Kosovo',
      official: 'Republic of Kosovo',
      nativeName: {
        sqi: {
          official: 'Republika e Kosovës',
          common: 'Kosova',
        },
        srp: {
          official: 'Република Косово',
          common: 'Косово',
        },
      },
    },
    cca2: 'XK',
    cca3: 'UNK',
    cioc: 'KOS',
    status: 'user-assigned',
    unMember: false,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['83'],
    },
    capital: ['Pristina'],
    altSpellings: ['XK', 'Република Косово'],
    region: 'Europe',
    subregion: 'Southeast Europe',
    languages: {
      sqi: 'Albanian',
      srp: 'Serbian',
    },
    translations: {
      ara: {
        official: 'جمهورية كوسوفو',
        common: 'كوسوفو',
      },
      ces: {
        official: 'Kosovská republika',
        common: 'Kosovo',
      },
      cym: {
        official: 'Republic of Kosovo',
        common: 'Kosovo',
      },
      deu: {
        official: 'Republik Kosovo',
        common: 'Kosovo',
      },
      est: {
        official: 'Kosovo Vabariik',
        common: 'Kosovo',
      },
      fin: {
        official: 'Kosovon tasavalta',
        common: 'Kosovo',
      },
      fra: {
        official: 'République du Kosovo',
        common: 'Kosovo',
      },
      hrv: {
        official: 'Republika Kosovo',
        common: 'Kosovo',
      },
      hun: {
        official: 'Koszovó',
        common: 'Koszovó',
      },
      ita: {
        official: 'Repubblica del Kosovo',
        common: 'Kosovo',
      },
      kor: {
        official: '코소보 공화국',
        common: '코소보',
      },
      nld: {
        official: 'Republiek Kosovo',
        common: 'Kosovo',
      },
      per: {
        official: 'جمهوری کوزوو',
        common: 'کوزوو',
      },
      pol: {
        official: 'Republika Kosowa',
        common: 'Kosowo',
      },
      por: {
        official: 'República do Kosovo',
        common: 'Kosovo',
      },
      rus: {
        official: 'Республика Косово',
        common: 'Республика Косово',
      },
      slk: {
        official: 'Republika Kosovo',
        common: 'Kosovo',
      },
      spa: {
        official: 'República de Kosovo',
        common: 'Kosovo',
      },
      swe: {
        official: 'Republiken Kosovo',
        common: 'Kosovo',
      },
      urd: {
        official: 'جمہوریہ کوسووہ',
        common: 'کوسووہ',
      },
      zho: {
        official: '科索沃共和国',
        common: '科索沃',
      },
    },
    latlng: [42.666667, 21.166667],
    landlocked: true,
    borders: ['ALB', 'MKD', 'MNE', 'SRB'],
    area: 10908.0,
    demonyms: {
      eng: {
        f: 'Kosovar',
        m: 'Kosovar',
      },
      fra: {
        f: 'Kosovare',
        m: 'Kosovar',
      },
    },
    flag: '\uD83C\uDDFD\uD83C\uDDF0',
    maps: {
      googleMaps: 'https://goo.gl/maps/CSC4Yc8SWPgburuD9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/2088990',
    },
    population: 1775378,
    gini: {
      '2017': 29.0,
    },
    fifa: 'KVX',
    car: {
      signs: ['CS'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/xk.png',
      svg: 'https://flagcdn.com/xk.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/xk.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/xk.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [42.67, 21.17],
    },
  },
  {
    name: {
      common: 'Jersey',
      official: 'Bailiwick of Jersey',
      nativeName: {
        eng: {
          official: 'Bailiwick of Jersey',
          common: 'Jersey',
        },
        fra: {
          official: 'Bailliage de Jersey',
          common: 'Jersey',
        },
        nrf: {
          official: 'Bailliage dé Jèrri',
          common: 'Jèrri',
        },
      },
    },
    tld: ['.je'],
    cca2: 'JE',
    ccn3: '832',
    cca3: 'JEY',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      GBP: {
        name: 'British pound',
        symbol: '£',
      },
      JEP: {
        name: 'Jersey pound',
        symbol: '£',
      },
    },
    idd: {
      root: '+4',
      suffixes: ['4'],
    },
    capital: ['Saint Helier'],
    altSpellings: ['JE', 'Bailiwick of Jersey', 'Bailliage de Jersey', 'Bailliage dé Jèrri'],
    region: 'Europe',
    subregion: 'Northern Europe',
    languages: {
      eng: 'English',
      fra: 'French',
      nrf: 'Jèrriais',
    },
    translations: {
      ara: {
        official: 'جيرزي',
        common: 'جيرزي',
      },
      ces: {
        official: 'Rychtářství Jersey',
        common: 'Jersey',
      },
      cym: {
        official: 'Bailiwick of Jersey',
        common: 'Jersey',
      },
      deu: {
        official: 'Vogtei Jersey',
        common: 'Jersey',
      },
      est: {
        official: 'Jersey foogtkond',
        common: 'Jersey',
      },
      fin: {
        official: 'Jersey',
        common: 'Jersey',
      },
      fra: {
        official: 'Bailliage de Jersey',
        common: 'Jersey',
      },
      hrv: {
        official: 'Struka od Jersey',
        common: 'Jersey',
      },
      hun: {
        official: 'Jersey',
        common: 'Jersey',
      },
      ita: {
        official: 'Baliato di Jersey',
        common: 'Isola di Jersey',
      },
      jpn: {
        official: 'ジャージの得意分野',
        common: 'ジャージー',
      },
      kor: {
        official: '저지 섬',
        common: '저지 섬',
      },
      nld: {
        official: 'Baljuwschap Jersey',
        common: 'Jersey',
      },
      per: {
        official: 'جرزی',
        common: 'جرزی',
      },
      pol: {
        official: 'Jersey',
        common: 'Jersey',
      },
      por: {
        official: 'Bailiado de Jersey',
        common: 'Jersey',
      },
      rus: {
        official: 'Коронное владение Джерси',
        common: 'Джерси',
      },
      slk: {
        official: 'Bailiwick Jersey',
        common: 'Jersey',
      },
      spa: {
        official: 'Bailía de Jersey',
        common: 'Jersey',
      },
      swe: {
        official: 'Jersey',
        common: 'Jersey',
      },
      urd: {
        official: 'جرزی',
        common: 'جرزی',
      },
      zho: {
        official: '泽西岛',
        common: '泽西岛',
      },
    },
    latlng: [49.25, -2.16666666],
    landlocked: false,
    area: 116.0,
    demonyms: {
      eng: {
        f: 'Channel Islander',
        m: 'Channel Islander',
      },
      fra: {
        f: 'Jersiaise',
        m: 'Jersiais',
      },
    },
    flag: '\uD83C\uDDEF\uD83C\uDDEA',
    maps: {
      googleMaps: 'https://goo.gl/maps/rXG8GZZtsqK92kTCA',
      openStreetMaps: 'https://www.openstreetmap.org/relation/367988',
    },
    population: 100800,
    car: {
      signs: ['GBJ'],
      side: 'left',
    },
    timezones: ['UTC+01:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/je.png',
      svg: 'https://flagcdn.com/je.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/je.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/je.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [49.18, -2.1],
    },
    postalCode: {
      format: '@# #@@|@## #@@|@@# #@@|@@## #@@|@#@ #@@|@@#@ #@@|GIR0AA',
      regex:
        '^(([A-Z]\\d{2}[A-Z]{2})|([A-Z]\\d{3}[A-Z]{2})|([A-Z]{2}\\d{2}[A-Z]{2})|([A-Z]{2}\\d{3}[A-Z]{2})|([A-Z]\\d[A-Z]\\d[A-Z]{2})|([A-Z]{2}\\d[A-Z]\\d[A-Z]{2})|(GIR0AA))$',
    },
  },
  {
    name: {
      common: 'Romania',
      official: 'Romania',
      nativeName: {
        ron: {
          official: 'România',
          common: 'România',
        },
      },
    },
    tld: ['.ro'],
    cca2: 'RO',
    ccn3: '642',
    cca3: 'ROU',
    cioc: 'ROU',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      RON: {
        name: 'Romanian leu',
        symbol: 'lei',
      },
    },
    idd: {
      root: '+4',
      suffixes: ['0'],
    },
    capital: ['Bucharest'],
    altSpellings: ['RO', 'Rumania', 'Roumania', 'România'],
    region: 'Europe',
    subregion: 'Southeast Europe',
    languages: {
      ron: 'Romanian',
    },
    translations: {
      ara: {
        official: 'رومانيا',
        common: 'رومانيا',
      },
      ces: {
        official: 'Rumunsko',
        common: 'Rumunsko',
      },
      cym: {
        official: 'Romania',
        common: 'Romania',
      },
      deu: {
        official: 'Rumänien',
        common: 'Rumänien',
      },
      est: {
        official: 'Rumeenia',
        common: 'Rumeenia',
      },
      fin: {
        official: 'Romania',
        common: 'Romania',
      },
      fra: {
        official: 'Roumanie',
        common: 'Roumanie',
      },
      hrv: {
        official: 'Rumunija',
        common: 'Rumunjska',
      },
      hun: {
        official: 'Románia',
        common: 'Románia',
      },
      ita: {
        official: 'Romania',
        common: 'Romania',
      },
      jpn: {
        official: 'ルーマニア',
        common: 'ルーマニア',
      },
      kor: {
        official: '루마니아',
        common: '루마니아',
      },
      nld: {
        official: 'Roemenië',
        common: 'Roemenië',
      },
      per: {
        official: 'رومانی',
        common: 'رومانی',
      },
      pol: {
        official: 'Rumunia',
        common: 'Rumunia',
      },
      por: {
        official: 'Romênia',
        common: 'Roménia',
      },
      rus: {
        official: 'Румыния',
        common: 'Румыния',
      },
      slk: {
        official: 'Rumunsko',
        common: 'Rumunsko',
      },
      spa: {
        official: 'Rumania',
        common: 'Rumania',
      },
      swe: {
        official: 'Rumänien',
        common: 'Rumänien',
      },
      urd: {
        official: 'رومانیہ',
        common: 'رومانیہ',
      },
      zho: {
        official: '罗马尼亚',
        common: '罗马尼亚',
      },
    },
    latlng: [46.0, 25.0],
    landlocked: false,
    borders: ['BGR', 'HUN', 'MDA', 'SRB', 'UKR'],
    area: 238391.0,
    demonyms: {
      eng: {
        f: 'Romanian',
        m: 'Romanian',
      },
      fra: {
        f: 'Roumaine',
        m: 'Roumain',
      },
    },
    flag: '\uD83C\uDDF7\uD83C\uDDF4',
    maps: {
      googleMaps: 'https://goo.gl/maps/845hAgCf1mDkN3vr7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/90689',
    },
    population: 19286123,
    gini: {
      '2018': 35.8,
    },
    fifa: 'ROU',
    car: {
      signs: ['RO'],
      side: 'right',
    },
    timezones: ['UTC+02:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/ro.png',
      svg: 'https://flagcdn.com/ro.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ro.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ro.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [44.43, 26.1],
    },
    postalCode: {
      format: '######',
      regex: '^(\\d{6})$',
    },
  },
  {
    name: {
      common: 'Slovenia',
      official: 'Republic of Slovenia',
      nativeName: {
        slv: {
          official: 'Republika Slovenija',
          common: 'Slovenija',
        },
      },
    },
    tld: ['.si'],
    cca2: 'SI',
    ccn3: '705',
    cca3: 'SVN',
    cioc: 'SLO',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['86'],
    },
    capital: ['Ljubljana'],
    altSpellings: ['SI', 'Republic of Slovenia', 'Republika Slovenija'],
    region: 'Europe',
    subregion: 'Central Europe',
    languages: {
      slv: 'Slovene',
    },
    translations: {
      ara: {
        official: 'جمهورية سلوفينيا',
        common: 'سلوفينيا',
      },
      ces: {
        official: 'Slovinská republika',
        common: 'Slovinsko',
      },
      cym: {
        official: 'Republic of Slovenia',
        common: 'Slovenia',
      },
      deu: {
        official: 'Republik Slowenien',
        common: 'Slowenien',
      },
      est: {
        official: 'Sloveenia Vabariik',
        common: 'Sloveenia',
      },
      fin: {
        official: 'Slovenian tasavalta',
        common: 'Slovenia',
      },
      fra: {
        official: 'République de Slovénie',
        common: 'Slovénie',
      },
      hrv: {
        official: 'Republika Slovenija',
        common: 'Slovenija',
      },
      hun: {
        official: 'Szlovén Köztársaság',
        common: 'Szlovénia',
      },
      ita: {
        official: 'Repubblica di Slovenia',
        common: 'Slovenia',
      },
      jpn: {
        official: 'スロベニア共和国',
        common: 'スロベニア',
      },
      kor: {
        official: '슬로베니아 공화국',
        common: '슬로베니아',
      },
      nld: {
        official: 'Republiek Slovenië',
        common: 'Slovenië',
      },
      per: {
        official: 'جمهوری اسلوونی',
        common: 'اسلوونی',
      },
      pol: {
        official: 'Republika Słowenii',
        common: 'Słowenia',
      },
      por: {
        official: 'República da Eslovénia',
        common: 'Eslovénia',
      },
      rus: {
        official: 'Республика Словения',
        common: 'Словения',
      },
      slk: {
        official: 'Slovinská republika',
        common: 'Slovinsko',
      },
      spa: {
        official: 'República de Eslovenia',
        common: 'Eslovenia',
      },
      swe: {
        official: 'Republiken Slovenien',
        common: 'Slovenien',
      },
      urd: {
        official: 'جمہوریہ سلووینیا',
        common: 'سلووینیا',
      },
      zho: {
        official: '斯洛文尼亚共和国',
        common: '斯洛文尼亚',
      },
    },
    latlng: [46.11666666, 14.81666666],
    landlocked: false,
    borders: ['AUT', 'HRV', 'ITA', 'HUN'],
    area: 20273.0,
    demonyms: {
      eng: {
        f: 'Slovene',
        m: 'Slovene',
      },
      fra: {
        f: 'Slovène',
        m: 'Slovène',
      },
    },
    flag: '\uD83C\uDDF8\uD83C\uDDEE',
    maps: {
      googleMaps: 'https://goo.gl/maps/7zgFmswcCJh5L5D49',
      openStreetMaps: 'https://www.openstreetmap.org/relation/218657',
    },
    population: 2100126,
    gini: {
      '2018': 24.6,
    },
    fifa: 'SVN',
    car: {
      signs: ['SLO'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/si.png',
      svg: 'https://flagcdn.com/si.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/si.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/si.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [46.05, 14.52],
    },
    postalCode: {
      format: 'SI- ####',
      regex: '^(?:SI)*(\\d{4})$',
    },
  },
  {
    name: {
      common: 'Isle of Man',
      official: 'Isle of Man',
      nativeName: {
        eng: {
          official: 'Isle of Man',
          common: 'Isle of Man',
        },
        glv: {
          official: 'Ellan Vannin or Mannin',
          common: 'Mannin',
        },
      },
    },
    tld: ['.im'],
    cca2: 'IM',
    ccn3: '833',
    cca3: 'IMN',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      GBP: {
        name: 'British pound',
        symbol: '£',
      },
      IMP: {
        name: 'Manx pound',
        symbol: '£',
      },
    },
    idd: {
      root: '+4',
      suffixes: ['4'],
    },
    capital: ['Douglas'],
    altSpellings: ['IM', 'Ellan Vannin', 'Mann', 'Mannin'],
    region: 'Europe',
    subregion: 'Northern Europe',
    languages: {
      eng: 'English',
      glv: 'Manx',
    },
    translations: {
      ara: {
        official: 'جزيرة مان',
        common: 'جزيرة مان',
      },
      ces: {
        official: 'Ostrov Man',
        common: 'Ostrov Man',
      },
      cym: {
        official: 'Isle of Man',
        common: 'Isle of Man',
      },
      deu: {
        official: 'Isle of Man',
        common: 'Insel Man',
      },
      est: {
        official: 'Mani saar',
        common: 'Mani saar',
      },
      fin: {
        official: 'Mansaari',
        common: 'Mansaari',
      },
      fra: {
        official: 'Isle of Man',
        common: 'Île de Man',
      },
      hrv: {
        official: 'Mana ostrvo',
        common: 'Otok Man',
      },
      hun: {
        official: 'Man',
        common: 'Man',
      },
      ita: {
        official: 'Isola di Man',
        common: 'Isola di Man',
      },
      jpn: {
        official: 'マン島',
        common: 'マン島',
      },
      kor: {
        official: '맨섬',
        common: '맨섬',
      },
      nld: {
        official: 'Isle of Man',
        common: 'Isle of Man',
      },
      per: {
        official: 'جزیرهٔ مَن',
        common: 'جزیرهٔ مَن',
      },
      pol: {
        official: 'Wyspa Man',
        common: 'Wyspa Man',
      },
      por: {
        official: 'Isle of Man',
        common: 'Ilha de Man',
      },
      rus: {
        official: 'Остров Мэн',
        common: 'Остров Мэн',
      },
      slk: {
        official: 'Ostrov Man',
        common: 'Man',
      },
      spa: {
        official: 'Isla de Man',
        common: 'Isla de Man',
      },
      swe: {
        official: 'Isle of Man',
        common: 'Isle of Man',
      },
      urd: {
        official: 'آئل آف مین',
        common: 'آئل آف مین',
      },
      zho: {
        official: '马恩岛',
        common: '马恩岛',
      },
    },
    latlng: [54.25, -4.5],
    landlocked: false,
    area: 572.0,
    demonyms: {
      eng: {
        f: 'Manx',
        m: 'Manx',
      },
    },
    flag: '\uD83C\uDDEE\uD83C\uDDF2',
    maps: {
      googleMaps: 'https://goo.gl/maps/4DqVHDgVaFgnh8ZV8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/62269',
    },
    population: 85032,
    car: {
      signs: ['GBM'],
      side: 'left',
    },
    timezones: ['UTC+00:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/im.png',
      svg: 'https://flagcdn.com/im.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/im.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/im.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [54.15, -4.48],
    },
    postalCode: {
      format: '@# #@@|@## #@@|@@# #@@|@@## #@@|@#@ #@@|@@#@ #@@|GIR0AA',
      regex:
        '^(([A-Z]\\d{2}[A-Z]{2})|([A-Z]\\d{3}[A-Z]{2})|([A-Z]{2}\\d{2}[A-Z]{2})|([A-Z]{2}\\d{3}[A-Z]{2})|([A-Z]\\d[A-Z]\\d[A-Z]{2})|([A-Z]{2}\\d[A-Z]\\d[A-Z]{2})|(GIR0AA))$',
    },
  },
  {
    name: {
      common: 'Belarus',
      official: 'Republic of Belarus',
      nativeName: {
        bel: {
          official: 'Рэспубліка Беларусь',
          common: 'Белару́сь',
        },
        rus: {
          official: 'Республика Беларусь',
          common: 'Беларусь',
        },
      },
    },
    tld: ['.by'],
    cca2: 'BY',
    ccn3: '112',
    cca3: 'BLR',
    cioc: 'BLR',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      BYN: {
        name: 'Belarusian ruble',
        symbol: 'Br',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['75'],
    },
    capital: ['Minsk'],
    altSpellings: ['BY', 'Bielaruś', 'Republic of Belarus', 'Белоруссия', 'Республика Белоруссия'],
    region: 'Europe',
    subregion: 'Eastern Europe',
    languages: {
      bel: 'Belarusian',
      rus: 'Russian',
    },
    translations: {
      ara: {
        official: 'جمهورية بيلاروسيا',
        common: 'بيلاروسيا',
      },
      ces: {
        official: 'Běloruská republika',
        common: 'Bělorusko',
      },
      cym: {
        official: 'Gweriniaeth Belarws',
        common: 'Belarws',
      },
      deu: {
        official: 'Republik Belarus',
        common: 'Weißrussland',
      },
      est: {
        official: 'Valgevene Vabariik',
        common: 'Valgevene',
      },
      fin: {
        official: 'Valko-Venäjän tasavalta',
        common: 'Valko-Venäjä',
      },
      fra: {
        official: 'République de Biélorussie',
        common: 'Biélorussie',
      },
      hrv: {
        official: 'Republika Bjelorusija',
        common: 'Bjelorusija',
      },
      hun: {
        official: 'Fehérorosz Köztársaság',
        common: 'Fehéroroszország',
      },
      ita: {
        official: 'Repubblica di Belarus',
        common: 'Bielorussia',
      },
      jpn: {
        official: 'ベラルーシ共和国',
        common: 'ベラルーシ',
      },
      kor: {
        official: '벨라루스 공화국',
        common: '벨라루스',
      },
      nld: {
        official: 'Republiek Belarus',
        common: 'Wit-Rusland',
      },
      per: {
        official: 'جمهوری بلاروس',
        common: 'بلاروس',
      },
      pol: {
        official: 'Republika Białorusi',
        common: 'Białoruś',
      },
      por: {
        official: 'República da Bielorrússia',
        common: 'Bielorússia',
      },
      rus: {
        official: 'Республика Беларусь',
        common: 'Беларусь',
      },
      slk: {
        official: 'Bieloruská republika',
        common: 'Bielorusko',
      },
      spa: {
        official: 'República de Belarús',
        common: 'Bielorrusia',
      },
      swe: {
        official: 'Republiken Vitryssland',
        common: 'Belarus',
      },
      urd: {
        official: 'جمہوریہ بیلاروس',
        common: 'بیلاروس',
      },
      zho: {
        official: '白俄罗斯共和国',
        common: '白俄罗斯',
      },
    },
    latlng: [53.0, 28.0],
    landlocked: true,
    borders: ['LVA', 'LTU', 'POL', 'RUS', 'UKR'],
    area: 207600.0,
    demonyms: {
      eng: {
        f: 'Belarusian',
        m: 'Belarusian',
      },
      fra: {
        f: 'Biélorusse',
        m: 'Biélorusse',
      },
    },
    flag: '\uD83C\uDDE7\uD83C\uDDFE',
    maps: {
      googleMaps: 'https://goo.gl/maps/PJUDU3EBPSszCQcu6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/59065',
    },
    population: 9398861,
    gini: {
      '2019': 25.3,
    },
    fifa: 'BLR',
    car: {
      signs: ['BY'],
      side: 'right',
    },
    timezones: ['UTC+03:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/by.png',
      svg: 'https://flagcdn.com/by.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/by.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/by.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [53.9, 27.57],
    },
    postalCode: {
      format: '######',
      regex: '^(\\d{6})$',
    },
  },
  {
    name: {
      common: 'Cuba',
      official: 'Republic of Cuba',
      nativeName: {
        spa: {
          official: 'República de Cuba',
          common: 'Cuba',
        },
      },
    },
    tld: ['.cu'],
    cca2: 'CU',
    ccn3: '192',
    cca3: 'CUB',
    cioc: 'CUB',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      CUC: {
        name: 'Cuban convertible peso',
        symbol: '$',
      },
      CUP: {
        name: 'Cuban peso',
        symbol: '$',
      },
    },
    idd: {
      root: '+5',
      suffixes: ['3'],
    },
    capital: ['Havana'],
    altSpellings: ['CU', 'Republic of Cuba', 'República de Cuba'],
    region: 'Americas',
    subregion: 'Caribbean',
    languages: {
      spa: 'Spanish',
    },
    translations: {
      ara: {
        official: 'جمهورية كوبا',
        common: 'كوبا',
      },
      ces: {
        official: 'Kubánská republika',
        common: 'Kuba',
      },
      cym: {
        official: 'Gweriniaeth Ciwba',
        common: 'Ciwba',
      },
      deu: {
        official: 'Republik Kuba',
        common: 'Kuba',
      },
      est: {
        official: 'Kuuba Vabariik',
        common: 'Kuuba',
      },
      fin: {
        official: 'Kuuban tasavalta',
        common: 'Kuuba',
      },
      fra: {
        official: 'République de Cuba',
        common: 'Cuba',
      },
      hrv: {
        official: 'Republika Kuba',
        common: 'Kuba',
      },
      hun: {
        official: 'Kubai Köztársaság',
        common: 'Kuba',
      },
      ita: {
        official: 'Repubblica di Cuba',
        common: 'Cuba',
      },
      jpn: {
        official: 'キューバ共和国',
        common: 'キューバ',
      },
      kor: {
        official: '쿠바 공화국',
        common: '쿠바',
      },
      nld: {
        official: 'Republiek Cuba',
        common: 'Cuba',
      },
      per: {
        official: 'جمهوری کوبا',
        common: 'کوبا',
      },
      pol: {
        official: 'Republika Kuby',
        common: 'Kuba',
      },
      por: {
        official: 'República de Cuba',
        common: 'Cuba',
      },
      rus: {
        official: 'Республика Куба',
        common: 'Куба',
      },
      slk: {
        official: 'Kubánska republika',
        common: 'Kuba',
      },
      spa: {
        official: 'República de Cuba',
        common: 'Cuba',
      },
      swe: {
        official: 'Republiken Kuba',
        common: 'Kuba',
      },
      urd: {
        official: 'جمہوریہ کیوبا',
        common: 'کیوبا',
      },
      zho: {
        official: '古巴共和国',
        common: '古巴',
      },
    },
    latlng: [21.5, -80.0],
    landlocked: false,
    area: 109884.0,
    demonyms: {
      eng: {
        f: 'Cuban',
        m: 'Cuban',
      },
      fra: {
        f: 'Cubaine',
        m: 'Cubain',
      },
    },
    flag: '\uD83C\uDDE8\uD83C\uDDFA',
    maps: {
      googleMaps: 'https://goo.gl/maps/1dDw1QfZspfMUTm99',
      openStreetMaps: 'https://www.openstreetmap.org/relation/307833',
    },
    population: 11326616,
    fifa: 'CUB',
    car: {
      signs: ['C'],
      side: 'right',
    },
    timezones: ['UTC-05:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/cu.png',
      svg: 'https://flagcdn.com/cu.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/cu.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/cu.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [23.12, -82.35],
    },
    postalCode: {
      format: 'CP #####',
      regex: '^(?:CP)*(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Montserrat',
      official: 'Montserrat',
      nativeName: {
        eng: {
          official: 'Montserrat',
          common: 'Montserrat',
        },
      },
    },
    tld: ['.ms'],
    cca2: 'MS',
    ccn3: '500',
    cca3: 'MSR',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      XCD: {
        name: 'Eastern Caribbean dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+1',
      suffixes: ['664'],
    },
    capital: ['Plymouth'],
    altSpellings: ['MS'],
    region: 'Americas',
    subregion: 'Caribbean',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'مونتسرات',
        common: 'مونتسرات',
      },
      ces: {
        official: 'Montserrat',
        common: 'Montserrat',
      },
      cym: {
        official: 'Montserrat',
        common: 'Montserrat',
      },
      deu: {
        official: 'Montserrat',
        common: 'Montserrat',
      },
      est: {
        official: 'Montserrat',
        common: 'Montserrat',
      },
      fin: {
        official: 'Montserrat',
        common: 'Montserrat',
      },
      fra: {
        official: 'Montserrat',
        common: 'Montserrat',
      },
      hrv: {
        official: 'Montserrat',
        common: 'Montserrat',
      },
      hun: {
        official: 'Montserrat',
        common: 'Montserrat',
      },
      ita: {
        official: 'Montserrat',
        common: 'Montserrat',
      },
      jpn: {
        official: 'モントセラト',
        common: 'モントセラト',
      },
      kor: {
        official: '몬트세랫',
        common: '몬트세랫',
      },
      nld: {
        official: 'Montserrat',
        common: 'Montserrat',
      },
      per: {
        official: 'مونتسرات',
        common: 'مونتسرات',
      },
      pol: {
        official: 'Montserrat',
        common: 'Montserrat',
      },
      por: {
        official: 'Montserrat',
        common: 'Montserrat',
      },
      rus: {
        official: 'Монтсеррат',
        common: 'Монтсеррат',
      },
      slk: {
        official: 'Montserrat',
        common: 'Montserrat',
      },
      spa: {
        official: 'Montserrat',
        common: 'Montserrat',
      },
      swe: {
        official: 'Montserrat',
        common: 'Montserrat',
      },
      urd: {
        official: 'مانٹسریٹ',
        common: 'مانٹسریٹ',
      },
      zho: {
        official: '蒙特塞拉特',
        common: '蒙特塞拉特',
      },
    },
    latlng: [16.75, -62.2],
    landlocked: false,
    area: 102.0,
    demonyms: {
      eng: {
        f: 'Montserratian',
        m: 'Montserratian',
      },
      fra: {
        f: 'Montserratienne',
        m: 'Montserratien',
      },
    },
    flag: '\uD83C\uDDF2\uD83C\uDDF8',
    maps: {
      googleMaps: 'https://goo.gl/maps/CSbe7UmxPmiwQB7GA',
      openStreetMaps: 'https://www.openstreetmap.org/relation/537257',
    },
    population: 4922,
    fifa: 'MSR',
    car: {
      signs: ['GB'],
      side: 'left',
    },
    timezones: ['UTC-04:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/ms.png',
      svg: 'https://flagcdn.com/ms.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ms.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ms.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [16.7, -62.22],
    },
  },
  {
    name: {
      common: 'Montenegro',
      official: 'Montenegro',
      nativeName: {
        cnr: {
          official: 'Црна Гора',
          common: 'Црна Гора',
        },
      },
    },
    tld: ['.me'],
    cca2: 'ME',
    ccn3: '499',
    cca3: 'MNE',
    cioc: 'MNE',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['82'],
    },
    capital: ['Podgorica'],
    altSpellings: ['ME', 'Crna Gora'],
    region: 'Europe',
    subregion: 'Southeast Europe',
    languages: {
      cnr: 'Montenegrin',
    },
    translations: {
      ara: {
        official: 'الجبل الاسود',
        common: 'الجبل الاسود',
      },
      ces: {
        official: 'Černá Hora',
        common: 'Černá Hora',
      },
      cym: {
        official: 'Montenegro',
        common: 'Montenegro',
      },
      deu: {
        official: 'Montenegro',
        common: 'Montenegro',
      },
      est: {
        official: 'Montenegro',
        common: 'Montenegro',
      },
      fin: {
        official: 'Montenegro',
        common: 'Montenegro',
      },
      fra: {
        official: 'Monténégro',
        common: 'Monténégro',
      },
      hrv: {
        official: 'Crna Gora',
        common: 'Crna Gora',
      },
      hun: {
        official: 'Montenegró',
        common: 'Montenegró',
      },
      ita: {
        official: 'Montenegro',
        common: 'Montenegro',
      },
      jpn: {
        official: 'モンテネグロ',
        common: 'モンテネグロ',
      },
      kor: {
        official: '몬테네그로',
        common: '몬테네그로',
      },
      nld: {
        official: 'Montenegro',
        common: 'Montenegro',
      },
      per: {
        official: 'مونته‌نگرو',
        common: 'مونته‌نگرو',
      },
      pol: {
        official: 'Czarnogóra',
        common: 'Czarnogóra',
      },
      por: {
        official: 'Montenegro',
        common: 'Montenegro',
      },
      rus: {
        official: 'Черногория',
        common: 'Черногория',
      },
      slk: {
        official: 'Čierna Hora',
        common: 'Čierna Hora',
      },
      spa: {
        official: 'Montenegro',
        common: 'Montenegro',
      },
      swe: {
        official: 'Montenegro',
        common: 'Montenegro',
      },
      urd: {
        official: 'مونٹینیگرو',
        common: 'مونٹینیگرو',
      },
      zho: {
        official: '黑山',
        common: '黑山',
      },
    },
    latlng: [42.5, 19.3],
    landlocked: false,
    borders: ['ALB', 'BIH', 'HRV', 'UNK', 'SRB'],
    area: 13812.0,
    demonyms: {
      eng: {
        f: 'Montenegrin',
        m: 'Montenegrin',
      },
      fra: {
        f: 'Monténégrine',
        m: 'Monténégrin',
      },
    },
    flag: '\uD83C\uDDF2\uD83C\uDDEA',
    maps: {
      googleMaps: 'https://goo.gl/maps/4THX1fM7WqANuPbB8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/53296',
    },
    population: 621718,
    gini: {
      '2016': 38.5,
    },
    fifa: 'MNE',
    car: {
      signs: ['SCG'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/me.png',
      svg: 'https://flagcdn.com/me.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/me.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/me.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [42.43, 19.27],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Kiribati',
      official: 'Independent and Sovereign Republic of Kiribati',
      nativeName: {
        eng: {
          official: 'Independent and Sovereign Republic of Kiribati',
          common: 'Kiribati',
        },
        gil: {
          official: 'Ribaberiki Kiribati',
          common: 'Kiribati',
        },
      },
    },
    tld: ['.ki'],
    cca2: 'KI',
    ccn3: '296',
    cca3: 'KIR',
    cioc: 'KIR',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      AUD: {
        name: 'Australian dollar',
        symbol: '$',
      },
      KID: {
        name: 'Kiribati dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+6',
      suffixes: ['86'],
    },
    capital: ['South Tarawa'],
    altSpellings: ['KI', 'Republic of Kiribati', 'Ribaberiki Kiribati'],
    region: 'Oceania',
    subregion: 'Micronesia',
    languages: {
      eng: 'English',
      gil: 'Gilbertese',
    },
    translations: {
      ara: {
        official: 'جمهورية كيريباتي',
        common: 'كيريباتي',
      },
      ces: {
        official: 'Republika Kiribati',
        common: 'Kiribati',
      },
      cym: {
        official: 'Independent and Sovereign Republic of Kiribati',
        common: 'Kiribati',
      },
      deu: {
        official: 'Republik Kiribati',
        common: 'Kiribati',
      },
      est: {
        official: 'Kiribati Vabariik',
        common: 'Kiribati',
      },
      fin: {
        official: 'Kiribatin tasavalta',
        common: 'Kiribati',
      },
      fra: {
        official: 'République de Kiribati',
        common: 'Kiribati',
      },
      hrv: {
        official: 'Samostalne i suverene Republike Kiribati',
        common: 'Kiribati',
      },
      hun: {
        official: 'Kiribati Köztársaság',
        common: 'Kiribati',
      },
      ita: {
        official: 'Repubblica indipendente e sovrano di Kiribati',
        common: 'Kiribati',
      },
      jpn: {
        official: 'キリバスの独立と主権共和国',
        common: 'キリバス',
      },
      kor: {
        official: '키리바시 공화국',
        common: '키리바시',
      },
      nld: {
        official: 'Onafhankelijke en soevereine republiek Kiribati',
        common: 'Kiribati',
      },
      per: {
        official: 'جمهوری کیریباتی',
        common: 'کیریباتی',
      },
      pol: {
        official: 'Republika Kiribati',
        common: 'Kiribati',
      },
      por: {
        official: 'Independente e soberano República de Kiribati',
        common: 'Kiribati',
      },
      rus: {
        official: 'Независимой и суверенной Республики Кирибати',
        common: 'Кирибати',
      },
      slk: {
        official: 'Kiribatská republika',
        common: 'Kiribati',
      },
      spa: {
        official: 'República Independiente y Soberano de Kiribati',
        common: 'Kiribati',
      },
      swe: {
        official: 'Republiken Kiribati',
        common: 'Kiribati',
      },
      urd: {
        official: 'سلطنت آزاد جمہوریہ کیریباتی',
        common: 'کیریباتی',
      },
      zho: {
        official: '基里巴斯共和国',
        common: '基里巴斯',
      },
    },
    latlng: [1.41666666, 173.0],
    landlocked: false,
    area: 811.0,
    demonyms: {
      eng: {
        f: 'I-Kiribati',
        m: 'I-Kiribati',
      },
      fra: {
        f: 'Kiribatienne',
        m: 'Kiribatien',
      },
    },
    flag: '\uD83C\uDDF0\uD83C\uDDEE',
    maps: {
      googleMaps: 'https://goo.gl/maps/NBfYvrndW4skAimw9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/571178',
    },
    population: 119446,
    gini: {
      '2006': 37.0,
    },
    car: {
      signs: ['KIR'],
      side: 'left',
    },
    timezones: ['UTC+12:00', 'UTC+13:00', 'UTC+14:00'],
    continents: ['Oceania'],
    flags: {
      png: 'https://flagcdn.com/w320/ki.png',
      svg: 'https://flagcdn.com/ki.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ki.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ki.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [1.33, 172.98],
    },
  },
  {
    name: {
      common: 'Liechtenstein',
      official: 'Principality of Liechtenstein',
      nativeName: {
        deu: {
          official: 'Fürstentum Liechtenstein',
          common: 'Liechtenstein',
        },
      },
    },
    tld: ['.li'],
    cca2: 'LI',
    ccn3: '438',
    cca3: 'LIE',
    cioc: 'LIE',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      CHF: {
        name: 'Swiss franc',
        symbol: 'Fr',
      },
    },
    idd: {
      root: '+4',
      suffixes: ['23'],
    },
    capital: ['Vaduz'],
    altSpellings: ['LI', 'Principality of Liechtenstein', 'Fürstentum Liechtenstein'],
    region: 'Europe',
    subregion: 'Western Europe',
    languages: {
      deu: 'German',
    },
    translations: {
      ara: {
        official: 'إمارة ليختنشتاين',
        common: 'ليختنشتاين',
      },
      ces: {
        official: 'Knížectví Lichtenštejnské',
        common: 'Lichtenštejnsko',
      },
      cym: {
        official: 'Principality of Liechtenstein',
        common: 'Liechtenstein',
      },
      deu: {
        official: 'Fürstentum Liechtenstein',
        common: 'Liechtenstein',
      },
      est: {
        official: 'Liechtensteini Vürstiriik',
        common: 'Liechtenstein',
      },
      fin: {
        official: 'Liechensteinin ruhtinaskunta',
        common: 'Liechenstein',
      },
      fra: {
        official: 'Principauté du Liechtenstein',
        common: 'Liechtenstein',
      },
      hrv: {
        official: 'Kneževina Lihtenštajn',
        common: 'Lihtenštajn',
      },
      hun: {
        official: 'Liechtensteini Hercegség',
        common: 'Liechtenstein',
      },
      ita: {
        official: 'Principato del Liechtenstein',
        common: 'Liechtenstein',
      },
      jpn: {
        official: 'リヒテンシュタイン公国',
        common: 'リヒテンシュタイン',
      },
      kor: {
        official: '리히텐슈타인 공국',
        common: '리히텐슈타인',
      },
      nld: {
        official: 'Vorstendom Liechtenstein',
        common: 'Liechtenstein',
      },
      per: {
        official: 'شاهزاده‌نشین لیختن‌اشتاین',
        common: 'لیختن‌اشتاین',
      },
      pol: {
        official: 'Księstwo Liechtensteinu',
        common: 'Liechtenstein',
      },
      por: {
        official: 'Principado de Liechtenstein',
        common: 'Liechtenstein',
      },
      rus: {
        official: 'Княжество Лихтенштейн',
        common: 'Лихтенштейн',
      },
      slk: {
        official: 'Lichtenštajnské kniežatstvo',
        common: 'Lichtenštajnsko',
      },
      spa: {
        official: 'Principado de Liechtenstein',
        common: 'Liechtenstein',
      },
      swe: {
        official: 'Furstendömet Liechtenstein',
        common: 'Liechtenstein',
      },
      urd: {
        official: 'امارات لیختینستائن',
        common: 'لیختینستائن',
      },
      zho: {
        official: '列支敦士登公国',
        common: '列支敦士登',
      },
    },
    latlng: [47.26666666, 9.53333333],
    landlocked: true,
    borders: ['AUT', 'CHE'],
    area: 160.0,
    demonyms: {
      eng: {
        f: 'Liechtensteiner',
        m: 'Liechtensteiner',
      },
      fra: {
        f: 'Liechtensteinoise',
        m: 'Liechtensteinois',
      },
    },
    flag: '\uD83C\uDDF1\uD83C\uDDEE',
    maps: {
      googleMaps: 'https://goo.gl/maps/KNuHeiJzAPodwM7y6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/1155955',
    },
    population: 38137,
    fifa: 'LIE',
    car: {
      signs: ['FL'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/li.png',
      svg: 'https://flagcdn.com/li.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/li.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/li.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [47.13, 9.52],
    },
    postalCode: {
      format: '####',
      regex: '^(\\d{4})$',
    },
  },
  {
    name: {
      common: 'Palau',
      official: 'Republic of Palau',
      nativeName: {
        eng: {
          official: 'Republic of Palau',
          common: 'Palau',
        },
        pau: {
          official: 'Beluu er a Belau',
          common: 'Belau',
        },
      },
    },
    tld: ['.pw'],
    cca2: 'PW',
    ccn3: '585',
    cca3: 'PLW',
    cioc: 'PLW',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      USD: {
        name: 'United States dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+6',
      suffixes: ['80'],
    },
    capital: ['Ngerulmud'],
    altSpellings: ['PW', 'Republic of Palau', 'Beluu er a Belau'],
    region: 'Oceania',
    subregion: 'Micronesia',
    languages: {
      eng: 'English',
      pau: 'Palauan',
    },
    translations: {
      ara: {
        official: 'جمهورية بالاو',
        common: 'بالاو',
      },
      ces: {
        official: 'Republika Palau',
        common: 'Palau',
      },
      cym: {
        official: 'Republic of Palau',
        common: 'Palau',
      },
      deu: {
        official: 'Republik Palau',
        common: 'Palau',
      },
      est: {
        official: 'Belau Vabariik',
        common: 'Belau',
      },
      fin: {
        official: 'Palaun tasavalta',
        common: 'Palau',
      },
      fra: {
        official: 'République des Palaos (Palau)',
        common: 'Palaos (Palau)',
      },
      hrv: {
        official: 'Republika Palau',
        common: 'Palau',
      },
      hun: {
        official: 'Palaui Köztársaság',
        common: 'Palau',
      },
      ita: {
        official: 'Repubblica di Palau',
        common: 'Palau',
      },
      jpn: {
        official: 'パラオ共和国',
        common: 'パラオ',
      },
      kor: {
        official: '팔라우 공화국',
        common: '팔라우',
      },
      nld: {
        official: 'Republiek van Palau',
        common: 'Palau',
      },
      per: {
        official: 'جمهوری پالائو',
        common: 'پالائو',
      },
      pol: {
        official: 'Republika Palau',
        common: 'Palau',
      },
      por: {
        official: 'República de Palau',
        common: 'Palau',
      },
      rus: {
        official: 'Республика Палау',
        common: 'Палау',
      },
      slk: {
        official: 'Palauská republika',
        common: 'Palau',
      },
      spa: {
        official: 'República de Palau',
        common: 'Palau',
      },
      swe: {
        official: 'Republiken Palau',
        common: 'Palau',
      },
      urd: {
        official: 'جمہوریہ پلاؤ',
        common: 'پلاؤ',
      },
      zho: {
        official: '帕劳共和国',
        common: '帕劳',
      },
    },
    latlng: [7.5, 134.5],
    landlocked: false,
    area: 459.0,
    demonyms: {
      eng: {
        f: 'Palauan',
        m: 'Palauan',
      },
      fra: {
        f: 'Paluane',
        m: 'Paluan',
      },
    },
    flag: '\uD83C\uDDF5\uD83C\uDDFC',
    maps: {
      googleMaps: 'https://goo.gl/maps/MVasQBbUkQP7qQDR9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/571805',
    },
    population: 18092,
    car: {
      signs: ['PAL'],
      side: 'right',
    },
    timezones: ['UTC+09:00'],
    continents: ['Oceania'],
    flags: {
      png: 'https://flagcdn.com/w320/pw.png',
      svg: 'https://flagcdn.com/pw.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/pw.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/pw.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [7.5, 134.62],
    },
    postalCode: {
      format: '96940',
      regex: '^(96940)$',
    },
  },
  {
    name: {
      common: 'Réunion',
      official: 'Réunion Island',
      nativeName: {
        fra: {
          official: 'Ile de la Réunion',
          common: 'La Réunion',
        },
      },
    },
    tld: ['.re'],
    cca2: 'RE',
    ccn3: '638',
    cca3: 'REU',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['62'],
    },
    capital: ['Saint-Denis'],
    altSpellings: ['RE', 'Reunion'],
    region: 'Africa',
    subregion: 'Eastern Africa',
    languages: {
      fra: 'French',
    },
    translations: {
      ara: {
        official: 'جزيرة لا ريونيون',
        common: 'لا ريونيون',
      },
      ces: {
        official: 'Réunion',
        common: 'Réunion',
      },
      cym: {
        official: 'Réunion Island',
        common: 'Réunion',
      },
      deu: {
        official: 'Réunion',
        common: 'Réunion',
      },
      est: {
        official: 'Réunioni departemang',
        common: 'Réunion',
      },
      fin: {
        official: 'Réunion',
        common: 'Réunion',
      },
      fra: {
        official: 'Ile de la Réunion',
        common: 'Réunion',
      },
      hrv: {
        official: 'Réunion Island',
        common: 'Réunion',
      },
      hun: {
        official: 'Réunion',
        common: 'Réunion',
      },
      ita: {
        official: 'Réunion',
        common: 'Riunione',
      },
      jpn: {
        official: 'レユニオン島',
        common: 'レユニオン',
      },
      kor: {
        official: '레위니옹',
        common: '레위니옹',
      },
      nld: {
        official: 'Réunion',
        common: 'Réunion',
      },
      per: {
        official: 'رئونیون',
        common: 'رئونیون',
      },
      pol: {
        official: 'Reunion',
        common: 'Reunion',
      },
      por: {
        official: 'Ilha da Reunião',
        common: 'Reunião',
      },
      rus: {
        official: 'Реюньон',
        common: 'Реюньон',
      },
      slk: {
        official: 'Réunionský zámorský departmán',
        common: 'Réunion',
      },
      spa: {
        official: 'Isla de la Reunión',
        common: 'Reunión',
      },
      swe: {
        official: 'Réunion',
        common: 'Réunion',
      },
      urd: {
        official: 'رے یونیوں جزیرہ',
        common: 'رے یونیوں',
      },
      zho: {
        official: '留尼旺岛',
        common: '留尼旺岛',
      },
    },
    latlng: [-21.15, 55.5],
    landlocked: false,
    area: 2511.0,
    demonyms: {
      eng: {
        f: 'Réunionese',
        m: 'Réunionese',
      },
      fra: {
        f: 'Réunionnaise',
        m: 'Réunionnais',
      },
    },
    flag: '\uD83C\uDDF7\uD83C\uDDEA',
    maps: {
      googleMaps: 'https://goo.gl/maps/wWpBrXsp8UHVbah29',
      openStreetMaps: 'https://www.openstreetmap.org/relation/1785276',
    },
    population: 840974,
    car: {
      signs: ['F'],
      side: 'right',
    },
    timezones: ['UTC+04:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/re.png',
      svg: 'https://flagcdn.com/re.svg',
    },
    coatOfArms: {},
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-20.88, 55.45],
    },
    postalCode: {
      format: '#####',
      regex: '^((97|98)(4|7|8)\\d{2})$',
    },
  },
  {
    name: {
      common: 'Saint Martin',
      official: 'Saint Martin',
      nativeName: {
        fra: {
          official: 'Saint-Martin',
          common: 'Saint-Martin',
        },
      },
    },
    tld: ['.fr', '.gp'],
    cca2: 'MF',
    ccn3: '663',
    cca3: 'MAF',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    idd: {
      root: '+5',
      suffixes: ['90'],
    },
    capital: ['Marigot'],
    altSpellings: ['MF', 'Collectivity of Saint Martin', 'Collectivité de Saint-Martin', 'Saint Martin (French part)'],
    region: 'Americas',
    subregion: 'Caribbean',
    languages: {
      fra: 'French',
    },
    translations: {
      ara: {
        official: 'سانت مارتن',
        common: 'سانت مارتن',
      },
      ces: {
        official: 'Svatý Martin',
        common: 'Svatý Martin (Francie)',
      },
      cym: {
        official: 'Saint Martin',
        common: 'Saint Martin',
      },
      deu: {
        official: 'Saint-Martin',
        common: 'Saint-Martin',
      },
      est: {
        official: 'Saint-Martini ühendus',
        common: 'Saint-Martin',
      },
      fin: {
        official: 'Saint-Martin',
        common: 'Saint-Martin',
      },
      fra: {
        official: 'Saint-Martin',
        common: 'Saint-Martin',
      },
      hrv: {
        official: 'Saint Martin',
        common: 'Sveti Martin',
      },
      hun: {
        official: 'Saint-Martin Közösség',
        common: 'Saint-Martin',
      },
      ita: {
        official: 'saint Martin',
        common: 'Saint Martin',
      },
      jpn: {
        official: 'サンマルタン島',
        common: 'サン・マルタン（フランス領）',
      },
      kor: {
        official: '생마르탱',
        common: '생마르탱',
      },
      nld: {
        official: 'Saint Martin',
        common: 'Saint-Martin',
      },
      per: {
        official: 'سن مارتن',
        common: 'سن مارتن',
      },
      pol: {
        official: 'Wspólnota Saint-Martin',
        common: 'Saint-Martin',
      },
      por: {
        official: 'saint Martin',
        common: 'São Martinho',
      },
      rus: {
        official: 'Сен-Мартен',
        common: 'Сен-Мартен',
      },
      slk: {
        official: 'Saint-Martin',
        common: 'Saint-Martin',
      },
      spa: {
        official: 'Saint Martin',
        common: 'Saint Martin',
      },
      swe: {
        official: 'Förvaltningsområdet Saint-Martin',
        common: 'Saint-Martin',
      },
      urd: {
        official: 'سینٹ مارٹن',
        common: 'سینٹ مارٹن',
      },
      zho: {
        official: '圣马丁',
        common: '圣马丁',
      },
    },
    latlng: [18.08333333, -63.95],
    landlocked: false,
    borders: ['SXM'],
    area: 53.0,
    demonyms: {
      eng: {
        f: 'Saint Martin Islander',
        m: 'Saint Martin Islander',
      },
      fra: {
        f: 'Saint-Martinoise',
        m: 'Saint-Martinois',
      },
    },
    flag: '\uD83C\uDDF2\uD83C\uDDEB',
    maps: {
      googleMaps: 'https://goo.gl/maps/P9ho9QuJ9EAR28JEA',
      openStreetMaps: 'https://www.openstreetmap.org/relation/63064',
    },
    population: 38659,
    car: {
      signs: ['F'],
      side: 'right',
    },
    timezones: ['UTC-04:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/mf.png',
      svg: 'https://flagcdn.com/mf.svg',
    },
    coatOfArms: {},
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [18.07, -63.08],
    },
    postalCode: {
      format: '### ###',
    },
  },
  {
    name: {
      common: 'Pitcairn Islands',
      official: 'Pitcairn Group of Islands',
      nativeName: {
        eng: {
          official: 'Pitcairn Group of Islands',
          common: 'Pitcairn Islands',
        },
      },
    },
    tld: ['.pn'],
    cca2: 'PN',
    ccn3: '612',
    cca3: 'PCN',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      NZD: {
        name: 'New Zealand dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+6',
      suffixes: ['4'],
    },
    capital: ['Adamstown'],
    altSpellings: ['PN', 'Pitcairn', 'Pitcairn Henderson Ducie and Oeno Islands'],
    region: 'Oceania',
    subregion: 'Polynesia',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'جزر بيتكيرن',
        common: 'جزر بيتكيرن',
      },
      ces: {
        official: 'Pitcairnovy ostrovy',
        common: 'Pitcairnovy ostrovy',
      },
      cym: {
        official: 'Pitcairn Group of Islands',
        common: 'Pitcairn Islands',
      },
      deu: {
        official: 'Pitcairninseln',
        common: 'Pitcairninseln',
      },
      est: {
        official: 'Pitcairni, Hendersoni, Ducie ja Oeno saar',
        common: 'Pitcairn',
      },
      fin: {
        official: 'Pitcairn',
        common: 'Pitcairn',
      },
      fra: {
        official: "Groupe d'îles Pitcairn",
        common: 'Îles Pitcairn',
      },
      hrv: {
        official: 'Pitcairn skupine otoka',
        common: 'Pitcairnovo otočje',
      },
      hun: {
        official: 'Pitcairn-szigetek',
        common: 'Pitcairn-szigetek',
      },
      ita: {
        official: 'Pitcairn gruppo di isole',
        common: 'Isole Pitcairn',
      },
      jpn: {
        official: '島のピトケアングループ',
        common: 'ピトケアン',
      },
      kor: {
        official: '핏케언 제도',
        common: '핏케언 제도',
      },
      nld: {
        official: 'Pitcairn groep eilanden',
        common: 'Pitcairneilanden',
      },
      per: {
        official: 'جزایر پیت‌کرن',
        common: 'جزایر پیت‌کرن',
      },
      pol: {
        official: 'Wyspy Pitcairn, Henderson, Ducie i Oeno',
        common: 'Pitcairn',
      },
      por: {
        official: 'Pitcairn grupo de ilhas',
        common: 'Ilhas Pitcairn',
      },
      rus: {
        official: 'Питкэрн группа островов',
        common: 'Острова Питкэрн',
      },
      slk: {
        official: 'Pitcairnove ostrovy',
        common: 'Pitcairnove ostrovy',
      },
      spa: {
        official: 'Grupo de Islas Pitcairn',
        common: 'Islas Pitcairn',
      },
      swe: {
        official: 'Pitcairnöarna',
        common: 'Pitcairnöarna',
      },
      urd: {
        official: 'پٹکیرن جزائر',
        common: 'جزائر پٹکیرن',
      },
      zho: {
        official: '皮特凯恩群岛',
        common: '皮特凯恩群岛',
      },
    },
    latlng: [-25.06666666, -130.1],
    landlocked: false,
    area: 47.0,
    demonyms: {
      eng: {
        f: 'Pitcairn Islander',
        m: 'Pitcairn Islander',
      },
      fra: {
        f: 'Pitcairnaise',
        m: 'Pitcairnais',
      },
    },
    flag: '\uD83C\uDDF5\uD83C\uDDF3',
    maps: {
      googleMaps: 'https://goo.gl/maps/XGJMnMAigXjXcxSa7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/2185375',
    },
    population: 56,
    car: {
      signs: ['GB'],
      side: 'left',
    },
    timezones: ['UTC-08:00'],
    continents: ['Oceania'],
    flags: {
      png: 'https://flagcdn.com/w320/pn.png',
      svg: 'https://flagcdn.com/pn.svg',
    },
    coatOfArms: {},
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-25.07, -130.08],
    },
  },
  {
    name: {
      common: 'Falkland Islands',
      official: 'Falkland Islands',
      nativeName: {
        eng: {
          official: 'Falkland Islands',
          common: 'Falkland Islands',
        },
      },
    },
    tld: ['.fk'],
    cca2: 'FK',
    ccn3: '238',
    cca3: 'FLK',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      FKP: {
        name: 'Falkland Islands pound',
        symbol: '£',
      },
    },
    idd: {
      root: '+5',
      suffixes: ['00'],
    },
    capital: ['Stanley'],
    altSpellings: ['FK', 'Islas Malvinas', 'Falkland Islands (Malvinas)'],
    region: 'Americas',
    subregion: 'South America',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'جزر فوكلاند',
        common: 'جزر فوكلاند',
      },
      ces: {
        official: 'Falklandské ostrovy',
        common: 'Falklandy',
      },
      cym: {
        official: 'Falkland Islands',
        common: 'Falkland Islands',
      },
      deu: {
        official: 'Falklandinseln',
        common: 'Falklandinseln',
      },
      est: {
        official: 'Falklandi saared',
        common: 'Falklandi saared',
      },
      fin: {
        official: 'Falkandinsaaret',
        common: 'Falkandinsaaret',
      },
      fra: {
        official: 'Îles Malouines',
        common: 'Îles Malouines',
      },
      hrv: {
        official: 'Falklandski otoci',
        common: 'Falklandski Otoci',
      },
      hun: {
        official: 'Falkland-szigetek',
        common: 'Falkland-szigetek',
      },
      ita: {
        official: 'Isole Falkland',
        common: 'Isole Falkland o Isole Malvine',
      },
      jpn: {
        official: 'フォークランド',
        common: 'フォークランド（マルビナス）諸島',
      },
      kor: {
        official: '포클랜드 제도',
        common: '포클랜드 제도',
      },
      nld: {
        official: 'Falkland eilanden',
        common: 'Falklandeilanden',
      },
      per: {
        official: 'جزایر فالکلند',
        common: 'جزایر فالکلند',
      },
      pol: {
        official: 'Falklandy',
        common: 'Falklandy',
      },
      por: {
        official: 'Ilhas Malvinas',
        common: 'Ilhas Malvinas',
      },
      rus: {
        official: 'Фолклендские острова',
        common: 'Фолклендские острова',
      },
      slk: {
        official: 'Falklandské ostrovy',
        common: 'Falklandy',
      },
      spa: {
        official: 'islas Malvinas',
        common: 'Islas Malvinas',
      },
      swe: {
        official: 'Falklandsöarna',
        common: 'Falklandsöarna',
      },
      urd: {
        official: 'جزائر فاکلینڈ',
        common: 'جزائر فاکلینڈ',
      },
      zho: {
        official: '福克兰群岛',
        common: '福克兰群岛',
      },
    },
    latlng: [-51.75, -59.0],
    landlocked: false,
    area: 12173.0,
    demonyms: {
      eng: {
        f: 'Falkland Islander',
        m: 'Falkland Islander',
      },
      fra: {
        f: 'Malouinne',
        m: 'Malouin',
      },
    },
    flag: '\uD83C\uDDEB\uD83C\uDDF0',
    maps: {
      googleMaps: 'https://goo.gl/maps/TZH1x7AGanQKifNk7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/2185374',
    },
    population: 2563,
    car: {
      signs: ['GB'],
      side: 'left',
    },
    timezones: ['UTC-04:00'],
    continents: ['South America'],
    flags: {
      png: 'https://flagcdn.com/w320/fk.png',
      svg: 'https://flagcdn.com/fk.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/fk.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/fk.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-51.7, -57.85],
    },
  },
  {
    name: {
      common: 'Sweden',
      official: 'Kingdom of Sweden',
      nativeName: {
        swe: {
          official: 'Konungariket Sverige',
          common: 'Sverige',
        },
      },
    },
    tld: ['.se'],
    cca2: 'SE',
    ccn3: '752',
    cca3: 'SWE',
    cioc: 'SWE',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      SEK: {
        name: 'Swedish krona',
        symbol: 'kr',
      },
    },
    idd: {
      root: '+4',
      suffixes: ['6'],
    },
    capital: ['Stockholm'],
    altSpellings: ['SE', 'Kingdom of Sweden', 'Konungariket Sverige'],
    region: 'Europe',
    subregion: 'Northern Europe',
    languages: {
      swe: 'Swedish',
    },
    translations: {
      ara: {
        official: 'مملكة السويد',
        common: 'السويد',
      },
      ces: {
        official: 'Švédské království',
        common: 'Švédsko',
      },
      cym: {
        official: 'Kingdom of Sweden',
        common: 'Sweden',
      },
      deu: {
        official: 'Königreich Schweden',
        common: 'Schweden',
      },
      est: {
        official: 'Rootsi Kuningriik',
        common: 'Rootsi',
      },
      fin: {
        official: 'Ruotsin kuningaskunta',
        common: 'Ruotsi',
      },
      fra: {
        official: 'Royaume de Suède',
        common: 'Suède',
      },
      hrv: {
        official: 'Kraljevina Švedska',
        common: 'Švedska',
      },
      hun: {
        official: 'Svéd Királyság',
        common: 'Svédország',
      },
      ita: {
        official: 'Regno di Svezia',
        common: 'Svezia',
      },
      jpn: {
        official: 'スウェーデン王国',
        common: 'スウェーデン',
      },
      kor: {
        official: '스웨덴 왕국',
        common: '스웨덴',
      },
      nld: {
        official: 'Koninkrijk Zweden',
        common: 'Zweden',
      },
      per: {
        official: 'پادشاهی سوئد',
        common: 'سوئد',
      },
      pol: {
        official: 'Królestwo Szwecji',
        common: 'Szwecja',
      },
      por: {
        official: 'Reino da Suécia',
        common: 'Suécia',
      },
      rus: {
        official: 'Королевство Швеция',
        common: 'Швеция',
      },
      slk: {
        official: 'Švédske kráľovstvo',
        common: 'Švédsko',
      },
      spa: {
        official: 'Reino de Suecia',
        common: 'Suecia',
      },
      swe: {
        official: 'Konungariket Sverige',
        common: 'Sverige',
      },
      urd: {
        official: 'مملکتِ سویڈن',
        common: 'سویڈن',
      },
      zho: {
        official: '瑞典王国',
        common: '瑞典',
      },
    },
    latlng: [62.0, 15.0],
    landlocked: false,
    borders: ['FIN', 'NOR'],
    area: 450295.0,
    demonyms: {
      eng: {
        f: 'Swedish',
        m: 'Swedish',
      },
      fra: {
        f: 'Suédoise',
        m: 'Suédois',
      },
    },
    flag: '\uD83C\uDDF8\uD83C\uDDEA',
    maps: {
      googleMaps: 'https://goo.gl/maps/iqygE491ADVgnBW39',
      openStreetMaps: 'https://www.openstreetmap.org/relation/52822',
    },
    population: 10353442,
    gini: {
      '2018': 30.0,
    },
    fifa: 'SWE',
    car: {
      signs: ['S'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/se.png',
      svg: 'https://flagcdn.com/se.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/se.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/se.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [59.33, 18.05],
    },
    postalCode: {
      format: 'SE-### ##',
      regex: '^(?:SE)*(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Hungary',
      official: 'Hungary',
      nativeName: {
        hun: {
          official: 'Magyarország',
          common: 'Magyarország',
        },
      },
    },
    tld: ['.hu'],
    cca2: 'HU',
    ccn3: '348',
    cca3: 'HUN',
    cioc: 'HUN',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      HUF: {
        name: 'Hungarian forint',
        symbol: 'Ft',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['6'],
    },
    capital: ['Budapest'],
    altSpellings: ['HU'],
    region: 'Europe',
    subregion: 'Central Europe',
    languages: {
      hun: 'Hungarian',
    },
    translations: {
      ara: {
        official: 'الجمهورية المجرية',
        common: 'المجر',
      },
      ces: {
        official: 'Maďarsko',
        common: 'Maďarsko',
      },
      cym: {
        official: 'Hungary',
        common: 'Hungary',
      },
      deu: {
        official: 'Ungarn',
        common: 'Ungarn',
      },
      est: {
        official: 'Ungari',
        common: 'Ungari',
      },
      fin: {
        official: 'Unkari',
        common: 'Unkari',
      },
      fra: {
        official: 'Hongrie',
        common: 'Hongrie',
      },
      hrv: {
        official: 'Madžarska',
        common: 'Mađarska',
      },
      hun: {
        official: 'Magyarország',
        common: 'Magyarország',
      },
      ita: {
        official: 'Ungheria',
        common: 'Ungheria',
      },
      jpn: {
        official: 'ハンガリー',
        common: 'ハンガリー',
      },
      kor: {
        official: '헝가리',
        common: '헝가리',
      },
      nld: {
        official: 'Hongarije',
        common: 'Hongarije',
      },
      per: {
        official: 'مجارستان',
        common: 'مجارستان',
      },
      pol: {
        official: 'Węgry',
        common: 'Węgry',
      },
      por: {
        official: 'Hungria',
        common: 'Hungria',
      },
      rus: {
        official: 'Венгрия',
        common: 'Венгрия',
      },
      slk: {
        official: 'Maďarsko',
        common: 'Maďarsko',
      },
      spa: {
        official: 'Hungría',
        common: 'Hungría',
      },
      swe: {
        official: 'Ungern',
        common: 'Ungern',
      },
      urd: {
        official: 'مجارستان',
        common: 'مجارستان',
      },
      zho: {
        official: '匈牙利',
        common: '匈牙利',
      },
    },
    latlng: [47.0, 20.0],
    landlocked: true,
    borders: ['AUT', 'HRV', 'ROU', 'SRB', 'SVK', 'SVN', 'UKR'],
    area: 93028.0,
    demonyms: {
      eng: {
        f: 'Hungarian',
        m: 'Hungarian',
      },
      fra: {
        f: 'Hongroise',
        m: 'Hongrois',
      },
    },
    flag: '\uD83C\uDDED\uD83C\uDDFA',
    maps: {
      googleMaps: 'https://goo.gl/maps/9gfPupm5bffixiFJ6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/21335',
    },
    population: 9749763,
    gini: {
      '2018': 29.6,
    },
    fifa: 'HUN',
    car: {
      signs: ['H'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/hu.png',
      svg: 'https://flagcdn.com/hu.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/hu.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/hu.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [47.5, 19.08],
    },
    postalCode: {
      format: '####',
      regex: '^(\\d{4})$',
    },
  },
  {
    name: {
      common: 'Morocco',
      official: 'Kingdom of Morocco',
      nativeName: {
        ara: {
          official: 'المملكة المغربية',
          common: 'المغرب',
        },
        ber: {
          official: 'ⵜⴰⴳⵍⴷⵉⵜ ⵏ ⵍⵎⵖⵔⵉⴱ',
          common: 'ⵍⵎⴰⵖⵔⵉⴱ',
        },
      },
    },
    tld: ['.ma', 'المغرب.'],
    cca2: 'MA',
    ccn3: '504',
    cca3: 'MAR',
    cioc: 'MAR',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      MAD: {
        name: 'Moroccan dirham',
        symbol: 'د.م.',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['12'],
    },
    capital: ['Rabat'],
    altSpellings: ['MA', 'Kingdom of Morocco', 'Al-Mamlakah al-Maġribiyah'],
    region: 'Africa',
    subregion: 'Northern Africa',
    languages: {
      ara: 'Arabic',
      ber: 'Berber',
    },
    translations: {
      ara: {
        official: 'المملكة المغربية',
        common: 'المغرب',
      },
      ces: {
        official: 'Marocké království',
        common: 'Maroko',
      },
      cym: {
        official: 'Kingdom of Morocco',
        common: 'Morocco',
      },
      deu: {
        official: 'Königreich Marokko',
        common: 'Marokko',
      },
      est: {
        official: 'Maroko Kuningriik',
        common: 'Maroko',
      },
      fin: {
        official: 'Marokon kuningaskunta',
        common: 'Marokko',
      },
      fra: {
        official: 'Royaume du Maroc',
        common: 'Maroc',
      },
      hrv: {
        official: 'Kraljevina Maroko',
        common: 'Maroko',
      },
      hun: {
        official: 'Marokkói Királyság',
        common: 'Marokkó',
      },
      ita: {
        official: 'Regno del Marocco',
        common: 'Marocco',
      },
      jpn: {
        official: 'モロッコ王国',
        common: 'モロッコ',
      },
      kor: {
        official: '모로코 왕국',
        common: '모로코',
      },
      nld: {
        official: 'Koninkrijk Marokko',
        common: 'Marokko',
      },
      per: {
        official: 'پادشاهی مراکش',
        common: 'مراکش',
      },
      pol: {
        official: 'Królestwo Marokańskie',
        common: 'Maroko',
      },
      por: {
        official: 'Reino de Marrocos',
        common: 'Marrocos',
      },
      rus: {
        official: 'Королевство Марокко',
        common: 'Марокко',
      },
      slk: {
        official: 'Marocké kniežatstvo',
        common: 'Maroko',
      },
      spa: {
        official: 'Reino de Marruecos',
        common: 'Marruecos',
      },
      swe: {
        official: 'Konungariket Marocko',
        common: 'Marocko',
      },
      urd: {
        official: 'مملکتِ مراکش',
        common: 'مراکش',
      },
      zho: {
        official: '摩洛哥王国',
        common: '摩洛哥',
      },
    },
    latlng: [32.0, -5.0],
    landlocked: false,
    borders: ['DZA', 'ESH', 'ESP'],
    area: 446550.0,
    demonyms: {
      eng: {
        f: 'Moroccan',
        m: 'Moroccan',
      },
      fra: {
        f: 'Marocaine',
        m: 'Marocain',
      },
    },
    flag: '\uD83C\uDDF2\uD83C\uDDE6',
    maps: {
      googleMaps: 'https://goo.gl/maps/6oMv3dyBZg3iaXQ5A',
      openStreetMaps: 'https://www.openstreetmap.org/relation/3630439',
    },
    population: 36910558,
    gini: {
      '2013': 39.5,
    },
    fifa: 'MAR',
    car: {
      signs: ['MA'],
      side: 'right',
    },
    timezones: ['UTC'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/ma.png',
      svg: 'https://flagcdn.com/ma.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ma.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ma.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [34.02, -6.82],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Colombia',
      official: 'Republic of Colombia',
      nativeName: {
        spa: {
          official: 'República de Colombia',
          common: 'Colombia',
        },
      },
    },
    tld: ['.co'],
    cca2: 'CO',
    ccn3: '170',
    cca3: 'COL',
    cioc: 'COL',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      COP: {
        name: 'Colombian peso',
        symbol: '$',
      },
    },
    idd: {
      root: '+5',
      suffixes: ['7'],
    },
    capital: ['Bogotá'],
    altSpellings: ['CO', 'Republic of Colombia', 'República de Colombia'],
    region: 'Americas',
    subregion: 'South America',
    languages: {
      spa: 'Spanish',
    },
    translations: {
      ara: {
        official: 'جمهورية كولومبيا',
        common: 'كولومبيا',
      },
      ces: {
        official: 'Kolumbijská republika',
        common: 'Kolumbie',
      },
      cym: {
        official: 'Gweriniaeth Colombia',
        common: 'Colombia',
      },
      deu: {
        official: 'Republik Kolumbien',
        common: 'Kolumbien',
      },
      est: {
        official: 'Colombia Vabariik',
        common: 'Colombia',
      },
      fin: {
        official: 'Kolumbian tasavalta',
        common: 'Kolumbia',
      },
      fra: {
        official: 'République de Colombie',
        common: 'Colombie',
      },
      hrv: {
        official: 'Republika Kolumbija',
        common: 'Kolumbija',
      },
      hun: {
        official: 'Kolumbiai Köztársaság',
        common: 'Kolumbia',
      },
      ita: {
        official: 'Repubblica di Colombia',
        common: 'Colombia',
      },
      jpn: {
        official: 'コロンビア共和国',
        common: 'コロンビア',
      },
      kor: {
        official: '콜롬비아 공화국',
        common: '콜롬비아',
      },
      nld: {
        official: 'Republiek Colombia',
        common: 'Colombia',
      },
      per: {
        official: 'جمهوری کلمبیا',
        common: 'کلمبیا',
      },
      pol: {
        official: 'Republika Kolumbii',
        common: 'Kolumbia',
      },
      por: {
        official: 'República da Colômbia',
        common: 'Colômbia',
      },
      rus: {
        official: 'Республика Колумбия',
        common: 'Колумбия',
      },
      slk: {
        official: 'Kolumbijská republika',
        common: 'Kolumbia',
      },
      spa: {
        official: 'República de Colombia',
        common: 'Colombia',
      },
      swe: {
        official: 'Republiken Colombia',
        common: 'Colombia',
      },
      urd: {
        official: 'جمہوریہ کولمبیا',
        common: 'کولمبیا',
      },
      zho: {
        official: '哥伦比亚共和国',
        common: '哥伦比亚',
      },
    },
    latlng: [4.0, -72.0],
    landlocked: false,
    borders: ['BRA', 'ECU', 'PAN', 'PER', 'VEN'],
    area: 1141748.0,
    demonyms: {
      eng: {
        f: 'Colombian',
        m: 'Colombian',
      },
      fra: {
        f: 'Colombienne',
        m: 'Colombien',
      },
    },
    flag: '\uD83C\uDDE8\uD83C\uDDF4',
    maps: {
      googleMaps: 'https://goo.gl/maps/RdwTG8e7gPwS62oR6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/120027',
    },
    population: 50882884,
    gini: {
      '2019': 51.3,
    },
    fifa: 'COL',
    car: {
      signs: ['CO'],
      side: 'right',
    },
    timezones: ['UTC-05:00'],
    continents: ['South America'],
    flags: {
      png: 'https://flagcdn.com/w320/co.png',
      svg: 'https://flagcdn.com/co.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/co.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/co.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [4.71, -74.07],
    },
  },
  {
    name: {
      common: 'Sudan',
      official: 'Republic of the Sudan',
      nativeName: {
        ara: {
          official: 'جمهورية السودان',
          common: 'السودان',
        },
        eng: {
          official: 'Republic of the Sudan',
          common: 'Sudan',
        },
      },
    },
    tld: ['.sd'],
    cca2: 'SD',
    ccn3: '729',
    cca3: 'SDN',
    cioc: 'SUD',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      SDG: {
        name: 'Sudanese pound',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['49'],
    },
    capital: ['Khartoum'],
    altSpellings: ['SD', 'Republic of the Sudan', 'Jumhūrīyat as-Sūdān'],
    region: 'Africa',
    subregion: 'Northern Africa',
    languages: {
      ara: 'Arabic',
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'جمهورية السودان',
        common: 'السودان',
      },
      ces: {
        official: 'Súdánská republika',
        common: 'Súdán',
      },
      cym: {
        official: 'Republic of the Sudan',
        common: 'Sudan',
      },
      deu: {
        official: 'Republik Sudan',
        common: 'Sudan',
      },
      est: {
        official: 'Sudaani Vabariik',
        common: 'Sudaan',
      },
      fin: {
        official: 'Sudanin tasavalta',
        common: 'Sudan',
      },
      fra: {
        official: 'République du Soudan',
        common: 'Soudan',
      },
      hrv: {
        official: 'Republika Sudan',
        common: 'Sudan',
      },
      hun: {
        official: 'Szudáni Köztársaság',
        common: 'Szudán',
      },
      ita: {
        official: 'Repubblica del Sudan',
        common: 'Sudan',
      },
      jpn: {
        official: 'スーダン共和国',
        common: 'スーダン',
      },
      kor: {
        official: '수단 공화국',
        common: '수단',
      },
      nld: {
        official: 'Republiek Soedan',
        common: 'Soedan',
      },
      per: {
        official: 'جمهوری سودان',
        common: 'سودان',
      },
      pol: {
        official: 'Republika Sudanu',
        common: 'Sudan',
      },
      por: {
        official: 'República do Sudão',
        common: 'Sudão',
      },
      rus: {
        official: 'Республика Судан',
        common: 'Судан',
      },
      slk: {
        official: 'Sudánska republika',
        common: 'Sudán',
      },
      spa: {
        official: 'República de Sudán',
        common: 'Sudán',
      },
      swe: {
        official: 'Republiken Sudan',
        common: 'Sudan',
      },
      urd: {
        official: 'جمہوریہ سودان',
        common: 'سودان',
      },
      zho: {
        official: '苏丹共和国',
        common: '苏丹',
      },
    },
    latlng: [15.0, 30.0],
    landlocked: false,
    borders: ['CAF', 'TCD', 'EGY', 'ERI', 'ETH', 'LBY', 'SSD'],
    area: 1886068.0,
    demonyms: {
      eng: {
        f: 'Sudanese',
        m: 'Sudanese',
      },
      fra: {
        f: 'Soudanaise',
        m: 'Soudanais',
      },
    },
    flag: '\uD83C\uDDF8\uD83C\uDDE9',
    maps: {
      googleMaps: 'https://goo.gl/maps/bNW7YUJCaqR8zcXn7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/192789',
    },
    population: 43849269,
    gini: {
      '2014': 34.2,
    },
    fifa: 'SDN',
    car: {
      signs: ['SUD'],
      side: 'right',
    },
    timezones: ['UTC+03:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/sd.png',
      svg: 'https://flagcdn.com/sd.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/sd.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/sd.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [15.6, 32.53],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Hong Kong',
      official: "Hong Kong Special Administrative Region of the People's Republic of China",
      nativeName: {
        eng: {
          official: "Hong Kong Special Administrative Region of the People's Republic of China",
          common: 'Hong Kong',
        },
        zho: {
          official: '中华人民共和国香港特别行政区',
          common: '香港',
        },
      },
    },
    tld: ['.hk', '.香港'],
    cca2: 'HK',
    ccn3: '344',
    cca3: 'HKG',
    cioc: 'HKG',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      HKD: {
        name: 'Hong Kong dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+8',
      suffixes: ['52'],
    },
    capital: ['City of Victoria'],
    altSpellings: ['HK'],
    region: 'Asia',
    subregion: 'Eastern Asia',
    languages: {
      eng: 'English',
      zho: 'Chinese',
    },
    translations: {
      ara: {
        official: 'منطقة هونغ كونغ الادارية التابعة لجمهورية الصين الشعبية',
        common: 'هونغ كونغ',
      },
      ces: {
        official: 'Zvláštní administrativní oblast Čínské lidové republiky Hongkong',
        common: 'Hongkong',
      },
      cym: {
        official: "Hong Kong Special Administrative Region of the People's Republic of China",
        common: 'Hong Kong',
      },
      deu: {
        official: 'Sonderverwaltungszone Hongkong der Volksrepublik China',
        common: 'Hongkong',
      },
      est: {
        official: 'Hongkongi erihalduspiirkond',
        common: 'Hongkong',
      },
      fin: {
        official: 'Hong Kongin erityishallintoalue',
        common: 'Hongkong',
      },
      fra: {
        official: 'Région administrative spéciale de Hong Kong de la République populaire de Chine',
        common: 'Hong Kong',
      },
      hrv: {
        official: 'Hong Kong Posebnog upravnog područjaNarodne Republike Kine',
        common: 'Hong Kong',
      },
      hun: {
        official: 'Hongkong',
        common: 'Hongkong',
      },
      ita: {
        official: 'Hong Kong Regione amministrativa speciale della Repubblica Popolare Cinese',
        common: 'Hong Kong',
      },
      jpn: {
        official: '中華人民共和国香港特別行政区',
        common: '香港',
      },
      kor: {
        official: '중화인민공화국 홍콩 특별행정구',
        common: '홍콩',
      },
      nld: {
        official: 'Hong Kong Speciale Administratieve Regio van de Volksrepubliek China',
        common: 'Hongkong',
      },
      per: {
        official: 'هُنگ کُنگ',
        common: 'هُنگ کُنگ',
      },
      pol: {
        official: 'Specjalny Region Administracyjny Chińskiej Republiki Ludowej Hongkong',
        common: 'Hongkong',
      },
      por: {
        official: 'Hong Kong Região Administrativa Especial da República Popular da China',
        common: 'Hong Kong',
      },
      rus: {
        official: 'Hong Kong Специальный административный район Китайской Народной Республики Китая',
        common: 'Гонконг',
      },
      slk: {
        official: 'Špeciálna administratívna oblasťČínskej ľudovej republiky Hongkong',
        common: 'Hongkong',
      },
      spa: {
        official: 'Hong Kong Región Administrativa Especial de la República Popular China',
        common: 'Hong Kong',
      },
      swe: {
        official: 'Hongkong',
        common: 'Hongkong',
      },
      urd: {
        official: 'ہانگ کانگ عوامی جمہوریہ چین کا خصوصی انتظامی علاقہ',
        common: 'ہانگ کانگ',
      },
    },
    latlng: [22.267, 114.188],
    landlocked: false,
    borders: ['CHN'],
    area: 1104.0,
    demonyms: {
      eng: {
        f: 'Hong Konger',
        m: 'Hong Konger',
      },
      fra: {
        f: 'Hongkongaise',
        m: 'Hongkongais',
      },
    },
    flag: '\uD83C\uDDED\uD83C\uDDF0',
    maps: {
      googleMaps: 'https://goo.gl/maps/1sEnNmT47ffrC8MU8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/913110',
    },
    population: 7500700,
    fifa: 'HKG',
    car: {
      signs: ['HK'],
      side: 'left',
    },
    timezones: ['UTC+08:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/hk.png',
      svg: 'https://flagcdn.com/hk.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/hk.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/hk.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [48.41, -123.33],
    },
  },
  {
    name: {
      common: 'Saint Helena, Ascension and Tristan da Cunha',
      official: 'Saint Helena, Ascension and Tristan da Cunha',
      nativeName: {
        eng: {
          official: 'Saint Helena, Ascension and Tristan da Cunha',
          common: 'Saint Helena, Ascension and Tristan da Cunha',
        },
      },
    },
    tld: ['.sh', '.ac'],
    cca2: 'SH',
    ccn3: '654',
    cca3: 'SHN',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      GBP: {
        name: 'Pound sterling',
        symbol: '£',
      },
      SHP: {
        name: 'Saint Helena pound',
        symbol: '£',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['90', '47'],
    },
    capital: ['Jamestown'],
    altSpellings: ['Saint Helena', 'St. Helena, Ascension and Tristan da Cunha'],
    region: 'Africa',
    subregion: 'Western Africa',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'سانت هيلينا وأسينشين وتريستان دا كونا',
        common: 'سانت هيلينا وأسينشين وتريستان دا كونا',
      },
      ces: {
        official: 'Svatá Helena, Ascension a Tristan da Cunha',
        common: 'Svatá Helena, Ascension a Tristan da Cunha',
      },
      cym: {
        official: 'Saint Helena, Ascension and Tristan da Cunha',
        common: 'Saint Helena, Ascension and Tristan da Cunha',
      },
      deu: {
        official: 'Sankt Helena, Ascension und Tristan da Cunha',
        common: 'St. Helena, Ascension und Tristan da Cunha',
      },
      est: {
        official: 'Saint Helena, Ascension ja Tristan da Cunha',
        common: 'Saint Helena, Ascension ja Tristan da Cunha',
      },
      fin: {
        official: 'Saint Helena, Ascension ja Tristan da Cunha',
        common: 'Saint Helena, Ascension ja Tristan da Cunha',
      },
      fra: {
        official: 'Sainte-Hélène, Ascension et Tristan da Cunha',
        common: 'Sainte-Hélène, Ascension et Tristan da Cunha',
      },
      hrv: {
        official: 'Sveta Helena',
        common: 'Sveta Helena',
      },
      hun: {
        official: 'Szent Ilona',
        common: 'Szent Ilona-sziget',
      },
      ita: {
        official: "Sant'Elena, Ascensione e Tristan da Cunha",
        common: "Sant'Elena, Ascensione e Tristan da Cunha",
      },
      jpn: {
        official: 'セントヘレナ・アセンションおよびトリスタンダクーニャ',
        common: 'セントヘレナ・アセンションおよびトリスタンダクーニャ',
      },
      kor: {
        official: '세인트헬레나',
        common: '세인트헬레나',
      },
      nld: {
        official: 'Sint-Helena, Ascension en Tristan da Cunha',
        common: 'Sint-Helena, Ascension en Tristan da Cunha',
      },
      per: {
        official: 'سنت هلن',
        common: 'سنت هلن',
      },
      pol: {
        official: 'Wyspa Świętej Heleny, Wyspa Wniebowstąpienia i Tristan da Cunha',
        common: 'Wyspa Świętej Heleny, Wyspa Wniebowstąpienia i Tristan da Cunha',
      },
      por: {
        official: 'Santa Helena, Ascensão e Tristão da Cunha',
        common: 'Santa Helena, Ascensão e Tristão da Cunha',
      },
      rus: {
        official: 'Острова Святой Елены, Вознесения и Тристан-да-Кунья',
        common: 'Острова Святой Елены, Вознесения и Тристан-да-Кунья',
      },
      slk: {
        official: 'Svätá Helena (zámorské územie)',
        common: 'Svätá Helena (zámorské územie)',
      },
      spa: {
        official: 'Santa Elena, Ascensión y Tristán de Acuña',
        common: 'Santa Elena, Ascensión y Tristán de Acuña',
      },
      swe: {
        official: 'Sankta Helena',
        common: 'Sankta Helena',
      },
      urd: {
        official: 'سینٹ ہلینا، اسینشن و ترسٹان دا کونیا',
        common: 'سینٹ ہلینا، اسینشن و ترسٹان دا کونیا',
      },
      zho: {
        official: '圣赫勒拿、阿森松和特里斯坦-达库尼亚',
        common: '圣赫勒拿、阿森松和特里斯坦-达库尼亚',
      },
    },
    latlng: [-15.95, -5.72],
    landlocked: false,
    area: 394.0,
    demonyms: {
      eng: {
        f: 'Saint Helenian',
        m: 'Saint Helenian',
      },
      fra: {
        f: 'Sainte-Hélénoise',
        m: 'Sainte-Hélènois',
      },
    },
    flag: '\uD83C\uDDF8\uD83C\uDDED',
    maps: {
      googleMaps: 'https://goo.gl/maps/iv4VxnPzHkjLCJuc6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/4868269#map=13/-15.9657/-5.7120',
    },
    population: 53192,
    car: {
      signs: ['GB'],
      side: 'left',
    },
    timezones: ['UTC+00:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/sh.png',
      svg: 'https://flagcdn.com/sh.svg',
    },
    coatOfArms: {},
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-15.93, -5.72],
    },
    postalCode: {
      format: 'STHL 1ZZ',
      regex: '^(STHL1ZZ)$',
    },
  },
  {
    name: {
      common: 'Turkmenistan',
      official: 'Turkmenistan',
      nativeName: {
        rus: {
          official: 'Туркменистан',
          common: 'Туркмения',
        },
        tuk: {
          official: 'Türkmenistan',
          common: 'Türkmenistan',
        },
      },
    },
    tld: ['.tm'],
    cca2: 'TM',
    ccn3: '795',
    cca3: 'TKM',
    cioc: 'TKM',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      TMT: {
        name: 'Turkmenistan manat',
        symbol: 'm',
      },
    },
    idd: {
      root: '+9',
      suffixes: ['93'],
    },
    capital: ['Ashgabat'],
    altSpellings: ['TM'],
    region: 'Asia',
    subregion: 'Central Asia',
    languages: {
      rus: 'Russian',
      tuk: 'Turkmen',
    },
    translations: {
      ara: {
        official: 'تركمانستان',
        common: 'تركمانستان',
      },
      ces: {
        official: 'Turkmenistán',
        common: 'Turkmenistán',
      },
      cym: {
        official: 'Turkmenistan',
        common: 'Turkmenistan',
      },
      deu: {
        official: 'Turkmenistan',
        common: 'Turkmenistan',
      },
      est: {
        official: 'Türkmenistan',
        common: 'Türkmenistan',
      },
      fin: {
        official: 'Turkmenistan',
        common: 'Turkmenistan',
      },
      fra: {
        official: 'Turkménistan',
        common: 'Turkménistan',
      },
      hrv: {
        official: 'Turkmenistan',
        common: 'Turkmenistan',
      },
      hun: {
        official: 'Türkmén Köztársaság',
        common: 'Türkmenisztán',
      },
      ita: {
        official: 'Turkmenistan',
        common: 'Turkmenistan',
      },
      jpn: {
        official: 'トルクメニスタン',
        common: 'トルクメニスタン',
      },
      kor: {
        official: '투르크메니스탄',
        common: '투르크메니스탄',
      },
      nld: {
        official: 'Turkmenistan',
        common: 'Turkmenistan',
      },
      per: {
        official: 'جمهوری خلق ترکمنستان',
        common: 'ترکمنستان',
      },
      pol: {
        official: 'Republika Turkmenistanu',
        common: 'Turkmenistan',
      },
      por: {
        official: 'Turcomenistão',
        common: 'Turquemenistão',
      },
      rus: {
        official: 'Туркменистан',
        common: 'Туркмения',
      },
      slk: {
        official: 'Turkménsko',
        common: 'Turkménsko',
      },
      spa: {
        official: 'Turkmenistán',
        common: 'Turkmenistán',
      },
      swe: {
        official: 'Turkmenistan',
        common: 'Turkmenistan',
      },
      urd: {
        official: 'ترکمانستان',
        common: 'ترکمانستان',
      },
      zho: {
        official: '土库曼斯坦',
        common: '土库曼斯坦',
      },
    },
    latlng: [40.0, 60.0],
    landlocked: true,
    borders: ['AFG', 'IRN', 'KAZ', 'UZB'],
    area: 488100.0,
    demonyms: {
      eng: {
        f: 'Turkmen',
        m: 'Turkmen',
      },
      fra: {
        f: 'Turkmène',
        m: 'Turkmène',
      },
    },
    flag: '\uD83C\uDDF9\uD83C\uDDF2',
    maps: {
      googleMaps: 'https://goo.gl/maps/cgfUcaQHSWKuqeKk9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/223026',
    },
    population: 6031187,
    gini: {
      '1998': 40.8,
    },
    fifa: 'TKM',
    car: {
      signs: ['TM'],
      side: 'right',
    },
    timezones: ['UTC+05:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/tm.png',
      svg: 'https://flagcdn.com/tm.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/tm.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/tm.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [37.95, 58.38],
    },
    postalCode: {
      format: '######',
      regex: '^(\\d{6})$',
    },
  },
  {
    name: {
      common: 'Togo',
      official: 'Togolese Republic',
      nativeName: {
        fra: {
          official: 'République togolaise',
          common: 'Togo',
        },
      },
    },
    tld: ['.tg'],
    cca2: 'TG',
    ccn3: '768',
    cca3: 'TGO',
    cioc: 'TOG',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      XOF: {
        name: 'West African CFA franc',
        symbol: 'Fr',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['28'],
    },
    capital: ['Lomé'],
    altSpellings: ['TG', 'Togolese', 'Togolese Republic', 'République Togolaise'],
    region: 'Africa',
    subregion: 'Western Africa',
    languages: {
      fra: 'French',
    },
    translations: {
      ara: {
        official: 'جمهورية توغو',
        common: 'توغو',
      },
      ces: {
        official: 'Republika Togo',
        common: 'Togo',
      },
      cym: {
        official: 'Togolese Republic',
        common: 'Togo',
      },
      deu: {
        official: 'Republik Togo',
        common: 'Togo',
      },
      est: {
        official: 'Togo Vabariik',
        common: 'Togo',
      },
      fin: {
        official: 'Togon tasavalta',
        common: 'Togo',
      },
      fra: {
        official: 'République togolaise',
        common: 'Togo',
      },
      hrv: {
        official: 'Togolese Republika',
        common: 'Togo',
      },
      hun: {
        official: 'Togói Köztársaság',
        common: 'Togo',
      },
      ita: {
        official: 'Repubblica del Togo',
        common: 'Togo',
      },
      jpn: {
        official: 'トーゴ共和国',
        common: 'トーゴ',
      },
      kor: {
        official: '토고 공화국',
        common: '토고',
      },
      nld: {
        official: 'Republiek Togo',
        common: 'Togo',
      },
      per: {
        official: 'جمهوری توگو',
        common: 'توگو',
      },
      pol: {
        official: 'Republika Togijska',
        common: 'Togo',
      },
      por: {
        official: 'República do Togo',
        common: 'Togo',
      },
      rus: {
        official: 'Того Республика',
        common: 'Того',
      },
      slk: {
        official: 'Togská republika',
        common: 'Togo',
      },
      spa: {
        official: 'República de Togo',
        common: 'Togo',
      },
      swe: {
        official: 'Republiken Togo',
        common: 'Togo',
      },
      urd: {
        official: 'جمہوریہ ٹوگو',
        common: 'ٹوگو',
      },
      zho: {
        official: '多哥共和国',
        common: '多哥',
      },
    },
    latlng: [8.0, 1.16666666],
    landlocked: false,
    borders: ['BEN', 'BFA', 'GHA'],
    area: 56785.0,
    demonyms: {
      eng: {
        f: 'Togolese',
        m: 'Togolese',
      },
      fra: {
        f: 'Togolaise',
        m: 'Togolais',
      },
    },
    flag: '\uD83C\uDDF9\uD83C\uDDEC',
    maps: {
      googleMaps: 'https://goo.gl/maps/jzAa9feXuXPrKVb89',
      openStreetMaps: 'https://www.openstreetmap.org/relation/192782',
    },
    population: 8278737,
    gini: {
      '2015': 43.1,
    },
    fifa: 'TOG',
    car: {
      signs: ['TG'],
      side: 'right',
    },
    timezones: ['UTC'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/tg.png',
      svg: 'https://flagcdn.com/tg.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/tg.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/tg.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [6.14, 1.21],
    },
  },
  {
    name: {
      common: 'Argentina',
      official: 'Argentine Republic',
      nativeName: {
        grn: {
          official: 'Argentine Republic',
          common: 'Argentina',
        },
        spa: {
          official: 'República Argentina',
          common: 'Argentina',
        },
      },
    },
    tld: ['.ar'],
    cca2: 'AR',
    ccn3: '032',
    cca3: 'ARG',
    cioc: 'ARG',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      ARS: {
        name: 'Argentine peso',
        symbol: '$',
      },
    },
    idd: {
      root: '+5',
      suffixes: ['4'],
    },
    capital: ['Buenos Aires'],
    altSpellings: ['AR', 'Argentine Republic', 'República Argentina'],
    region: 'Americas',
    subregion: 'South America',
    languages: {
      grn: 'Guaraní',
      spa: 'Spanish',
    },
    translations: {
      ara: {
        official: 'جمهورية الأرجنتين',
        common: 'الأرجنتين',
      },
      ces: {
        official: 'Argentinská republika',
        common: 'Argentina',
      },
      cym: {
        official: 'Gweriniaeth yr Ariannin',
        common: 'Ariannin',
      },
      deu: {
        official: 'Argentinische Republik',
        common: 'Argentinien',
      },
      est: {
        official: 'Argentina Vabariik',
        common: 'Argentina',
      },
      fin: {
        official: 'Argentiinan tasavalta',
        common: 'Argentiina',
      },
      fra: {
        official: 'République argentine',
        common: 'Argentine',
      },
      hrv: {
        official: 'Argentinski Republika',
        common: 'Argentina',
      },
      hun: {
        official: 'Argentin Köztársaság',
        common: 'Argentína',
      },
      ita: {
        official: 'Repubblica Argentina',
        common: 'Argentina',
      },
      jpn: {
        official: 'アルゼンチン共和国',
        common: 'アルゼンチン',
      },
      kor: {
        official: '아르헨티나 공화국',
        common: '아르헨티나',
      },
      nld: {
        official: 'Argentijnse Republiek',
        common: 'Argentinië',
      },
      per: {
        official: 'جمهوری آرژانتین',
        common: 'آرژانتین',
      },
      pol: {
        official: 'Republika Argentyńska',
        common: 'Argentyna',
      },
      por: {
        official: 'República Argentina',
        common: 'Argentina',
      },
      rus: {
        official: 'Аргентинская Республика',
        common: 'Аргентина',
      },
      slk: {
        official: 'Argentínska republika',
        common: 'Argentína',
      },
      spa: {
        official: 'República Argentina',
        common: 'Argentina',
      },
      swe: {
        official: 'Republiken Argentina',
        common: 'Argentina',
      },
      urd: {
        official: 'جمہوریہ ارجنٹائن',
        common: 'ارجنٹائن',
      },
      zho: {
        official: '阿根廷共和国',
        common: '阿根廷',
      },
    },
    latlng: [-34.0, -64.0],
    landlocked: false,
    borders: ['BOL', 'BRA', 'CHL', 'PRY', 'URY'],
    area: 2780400.0,
    demonyms: {
      eng: {
        f: 'Argentine',
        m: 'Argentine',
      },
      fra: {
        f: 'Argentine',
        m: 'Argentin',
      },
    },
    flag: '\uD83C\uDDE6\uD83C\uDDF7',
    maps: {
      googleMaps: 'https://goo.gl/maps/Z9DXNxhf2o93kvyc6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/286393',
    },
    population: 45376763,
    gini: {
      '2019': 42.9,
    },
    fifa: 'ARG',
    car: {
      signs: ['RA'],
      side: 'right',
    },
    timezones: ['UTC-03:00'],
    continents: ['South America'],
    flags: {
      png: 'https://flagcdn.com/w320/ar.png',
      svg: 'https://flagcdn.com/ar.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ar.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ar.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-34.58, -58.67],
    },
    postalCode: {
      format: '@####@@@',
      regex: '^([A-Z]\\d{4}[A-Z]{3})$',
    },
  },
  {
    name: {
      common: 'Saudi Arabia',
      official: 'Kingdom of Saudi Arabia',
      nativeName: {
        ara: {
          official: 'المملكة العربية السعودية',
          common: 'العربية السعودية',
        },
      },
    },
    tld: ['.sa', '.السعودية'],
    cca2: 'SA',
    ccn3: '682',
    cca3: 'SAU',
    cioc: 'KSA',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      SAR: {
        name: 'Saudi riyal',
        symbol: 'ر.س',
      },
    },
    idd: {
      root: '+9',
      suffixes: ['66'],
    },
    capital: ['Riyadh'],
    altSpellings: ['Saudi', 'SA', 'Kingdom of Saudi Arabia', 'Al-Mamlakah al-‘Arabiyyah as-Su‘ūdiyyah'],
    region: 'Asia',
    subregion: 'Western Asia',
    languages: {
      ara: 'Arabic',
    },
    translations: {
      ara: {
        official: 'المملكة العربية السعودية',
        common: 'السعودية',
      },
      ces: {
        official: 'Saúdskoarabské království',
        common: 'Saúdská Arábie',
      },
      cym: {
        official: 'Kingdom of Saudi Arabia',
        common: 'Saudi Arabia',
      },
      deu: {
        official: 'Königreich Saudi-Arabien',
        common: 'Saudi-Arabien',
      },
      est: {
        official: 'Saudi Araabia Kuningriik',
        common: 'Saudi Araabia',
      },
      fin: {
        official: 'Saudi-Arabian kuningaskunta',
        common: 'Saudi-Arabia',
      },
      fra: {
        official: "Royaume d'Arabie Saoudite",
        common: 'Arabie Saoudite',
      },
      hrv: {
        official: 'Kraljevina Saudijska Arabija',
        common: 'Saudijska Arabija',
      },
      hun: {
        official: 'Szaúd-Arábia',
        common: 'Szaúd-Arábia',
      },
      ita: {
        official: 'Arabia Saudita',
        common: 'Arabia Saudita',
      },
      jpn: {
        official: 'サウジアラビア王国',
        common: 'サウジアラビア',
      },
      kor: {
        official: '사우디아라비아 왕국',
        common: '사우디아라비아',
      },
      nld: {
        official: 'Koninkrijk van Saoedi-Arabië',
        common: 'Saoedi-Arabië',
      },
      per: {
        official: 'پادشاهی عربی سَعودی',
        common: 'عربستان سعودی',
      },
      pol: {
        official: 'Królestwo Arabii Saudyjskiej',
        common: 'Arabia Saudyjska',
      },
      por: {
        official: 'Reino da Arábia Saudita',
        common: 'Arábia Saudita',
      },
      rus: {
        official: 'Королевство Саудовская Аравия',
        common: 'Саудовская Аравия',
      },
      slk: {
        official: 'Saudskoarabské kráľovstvo',
        common: 'Saudská Arábia',
      },
      spa: {
        official: 'Reino de Arabia Saudita',
        common: 'Arabia Saudí',
      },
      swe: {
        official: 'Kungadömet Saudiarabien',
        common: 'Saudiarabien',
      },
      urd: {
        official: 'مملکتِ سعودی عرب',
        common: 'سعودی عرب',
      },
      zho: {
        official: '沙特阿拉伯王国',
        common: '沙特阿拉伯',
      },
    },
    latlng: [25.0, 45.0],
    landlocked: false,
    borders: ['IRQ', 'JOR', 'KWT', 'OMN', 'QAT', 'ARE', 'YEM'],
    area: 2149690.0,
    demonyms: {
      eng: {
        f: 'Saudi Arabian',
        m: 'Saudi Arabian',
      },
      fra: {
        f: 'Saoudienne',
        m: 'Saoudien',
      },
    },
    flag: '\uD83C\uDDF8\uD83C\uDDE6',
    maps: {
      googleMaps: 'https://goo.gl/maps/5PSjvdJ1AyaLFRrG9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/307584',
    },
    population: 34813867,
    fifa: 'KSA',
    car: {
      signs: ['SA'],
      side: 'right',
    },
    timezones: ['UTC+03:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/sa.png',
      svg: 'https://flagcdn.com/sa.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/sa.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/sa.svg',
    },
    startOfWeek: 'sunday',
    capitalInfo: {
      latlng: [24.65, 46.7],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Bermuda',
      official: 'Bermuda',
      nativeName: {
        eng: {
          official: 'Bermuda',
          common: 'Bermuda',
        },
      },
    },
    tld: ['.bm'],
    cca2: 'BM',
    ccn3: '060',
    cca3: 'BMU',
    cioc: 'BER',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      BMD: {
        name: 'Bermudian dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+1',
      suffixes: ['441'],
    },
    capital: ['Hamilton'],
    altSpellings: ['BM', 'The Islands of Bermuda', 'The Bermudas', 'Somers Isles'],
    region: 'Americas',
    subregion: 'North America',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'برمودا',
        common: 'برمودا',
      },
      ces: {
        official: 'Bermudské ostrovy',
        common: 'Bermudy',
      },
      cym: {
        official: 'Bermiwda',
        common: 'Bermiwda',
      },
      deu: {
        official: 'Bermuda',
        common: 'Bermuda',
      },
      est: {
        official: 'Bermuda',
        common: 'Bermuda',
      },
      fin: {
        official: 'Bermuda',
        common: 'Bermuda',
      },
      fra: {
        official: 'Bermudes',
        common: 'Bermudes',
      },
      hrv: {
        official: 'Bermuda',
        common: 'Bermudi',
      },
      hun: {
        official: 'Bermuda',
        common: 'Bermuda',
      },
      ita: {
        official: 'Bermuda',
        common: 'Bermuda',
      },
      jpn: {
        official: 'バミューダ',
        common: 'バミューダ',
      },
      kor: {
        official: '버뮤다',
        common: '버뮤다',
      },
      nld: {
        official: 'Bermuda',
        common: 'Bermuda',
      },
      per: {
        official: 'جزایر برمودا',
        common: 'برمودا',
      },
      pol: {
        official: 'Bermudy',
        common: 'Bermudy',
      },
      por: {
        official: 'Bermudas',
        common: 'Bermudas',
      },
      rus: {
        official: 'Бермудские острова',
        common: 'Бермудские Острова',
      },
      slk: {
        official: 'Bermudy',
        common: 'Bermudy',
      },
      spa: {
        official: 'Bermuda',
        common: 'Bermudas',
      },
      swe: {
        official: 'Bermuda',
        common: 'Bermuda',
      },
      urd: {
        official: 'برمودا',
        common: 'برمودا',
      },
      zho: {
        official: '百慕大',
        common: '百慕大',
      },
    },
    latlng: [32.33333333, -64.75],
    landlocked: false,
    area: 54.0,
    demonyms: {
      eng: {
        f: 'Bermudian',
        m: 'Bermudian',
      },
      fra: {
        f: 'Bermudienne',
        m: 'Bermudien',
      },
    },
    flag: '\uD83C\uDDE7\uD83C\uDDF2',
    maps: {
      googleMaps: 'https://goo.gl/maps/NLsRGNjTzDghTtAJA',
      openStreetMaps: 'https://www.openstreetmap.org/relation/1993208',
    },
    population: 63903,
    fifa: 'BER',
    car: {
      signs: ['GB'],
      side: 'left',
    },
    timezones: ['UTC-04:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/bm.png',
      svg: 'https://flagcdn.com/bm.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/bm.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/bm.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [32.28, -64.78],
    },
    postalCode: {
      format: '@@ ##',
      regex: '^([A-Z]{2}\\d{2})$',
    },
  },
  {
    name: {
      common: 'Ecuador',
      official: 'Republic of Ecuador',
      nativeName: {
        spa: {
          official: 'República del Ecuador',
          common: 'Ecuador',
        },
      },
    },
    tld: ['.ec'],
    cca2: 'EC',
    ccn3: '218',
    cca3: 'ECU',
    cioc: 'ECU',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      USD: {
        name: 'United States dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+5',
      suffixes: ['93'],
    },
    capital: ['Quito'],
    altSpellings: ['EC', 'Republic of Ecuador', 'República del Ecuador'],
    region: 'Americas',
    subregion: 'South America',
    languages: {
      spa: 'Spanish',
    },
    translations: {
      ara: {
        official: 'جمهورية الإكوادور',
        common: 'الإكوادور',
      },
      ces: {
        official: 'Ekvádorská republika',
        common: 'Ekvádor',
      },
      cym: {
        official: 'Gweriniaeth Ecwador',
        common: 'Ecwador',
      },
      deu: {
        official: 'Republik Ecuador',
        common: 'Ecuador',
      },
      est: {
        official: 'Ecuadori Vabariik',
        common: 'Ecuador',
      },
      fin: {
        official: 'Ecuadorin tasavalta',
        common: 'Ecuador',
      },
      fra: {
        official: "République de l'Équateur",
        common: 'Équateur',
      },
      hrv: {
        official: 'Republika Ekvador',
        common: 'Ekvador',
      },
      hun: {
        official: 'Ecuadori Köztársaság',
        common: 'Ecuador',
      },
      ita: {
        official: "Repubblica dell'Ecuador",
        common: 'Ecuador',
      },
      jpn: {
        official: 'エクアドル共和国',
        common: 'エクアドル',
      },
      kor: {
        official: '에콰도르 공화국',
        common: '에콰도르',
      },
      nld: {
        official: 'Republiek Ecuador',
        common: 'Ecuador',
      },
      per: {
        official: 'جمهوری اکوادور',
        common: 'اکوادور',
      },
      pol: {
        official: 'Ekwador',
        common: 'Ekwador',
      },
      por: {
        official: 'República do Equador',
        common: 'Equador',
      },
      rus: {
        official: 'Республика Эквадор',
        common: 'Эквадор',
      },
      slk: {
        official: 'Ekvádorská republika',
        common: 'Ekvádor',
      },
      spa: {
        official: 'República del Ecuador',
        common: 'Ecuador',
      },
      swe: {
        official: 'Republiken Ecuador',
        common: 'Ecuador',
      },
      urd: {
        official: 'جمہوریہ ایکوڈور',
        common: 'ایکواڈور',
      },
      zho: {
        official: '厄瓜多尔共和国',
        common: '厄瓜多尔',
      },
    },
    latlng: [-2.0, -77.5],
    landlocked: false,
    borders: ['COL', 'PER'],
    area: 276841.0,
    demonyms: {
      eng: {
        f: 'Ecuadorean',
        m: 'Ecuadorean',
      },
      fra: {
        f: 'Équatorienne',
        m: 'Équatorien',
      },
    },
    flag: '\uD83C\uDDEA\uD83C\uDDE8',
    maps: {
      googleMaps: 'https://goo.gl/maps/TbX8hUW4gcbRPZiK7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/108089',
    },
    population: 17643060,
    gini: {
      '2019': 45.7,
    },
    fifa: 'ECU',
    car: {
      signs: ['EC'],
      side: 'right',
    },
    timezones: ['UTC-06:00', 'UTC-05:00'],
    continents: ['South America'],
    flags: {
      png: 'https://flagcdn.com/w320/ec.png',
      svg: 'https://flagcdn.com/ec.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ec.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ec.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-0.22, -78.5],
    },
    postalCode: {
      format: '@####@',
      regex: '^([a-zA-Z]\\d{4}[a-zA-Z])$',
    },
  },
  {
    name: {
      common: 'Ethiopia',
      official: 'Federal Democratic Republic of Ethiopia',
      nativeName: {
        amh: {
          official: 'የኢትዮጵያ ፌዴራላዊ ዲሞክራሲያዊ ሪፐብሊክ',
          common: 'ኢትዮጵያ',
        },
      },
    },
    tld: ['.et'],
    cca2: 'ET',
    ccn3: '231',
    cca3: 'ETH',
    cioc: 'ETH',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      ETB: {
        name: 'Ethiopian birr',
        symbol: 'Br',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['51'],
    },
    capital: ['Addis Ababa'],
    altSpellings: ['ET', 'ʾĪtyōṗṗyā', 'Federal Democratic Republic of Ethiopia', 'የኢትዮጵያ ፌዴራላዊ ዲሞክራሲያዊ ሪፐብሊክ'],
    region: 'Africa',
    subregion: 'Eastern Africa',
    languages: {
      amh: 'Amharic',
    },
    translations: {
      ara: {
        official: 'جمهورية إثيوبيا الفدرالية الديموقراطية',
        common: 'إثيوبيا',
      },
      ces: {
        official: 'Etiopská federativní demokratická republika',
        common: 'Etiopie',
      },
      cym: {
        official: 'Gweriniaeth Ddemocrataidd Ffederal Ethiopia',
        common: 'Ethiopia',
      },
      deu: {
        official: 'Demokratische Bundesrepublik Äthiopien',
        common: 'Äthiopien',
      },
      est: {
        official: 'Etioopia Demokraatlik Liitvabariik',
        common: 'Etioopia',
      },
      fin: {
        official: 'Etiopian demokraattinen liittotasavalta',
        common: 'Etiopia',
      },
      fra: {
        official: "République fédérale démocratique d'Éthiopie",
        common: 'Éthiopie',
      },
      hrv: {
        official: 'Savezna Demokratska Republika Etiopija',
        common: 'Etiopija',
      },
      hun: {
        official: 'Etióp Szövetségi Demokratikus Köztársaság',
        common: 'Etiópia',
      },
      ita: {
        official: 'Repubblica federale democratica di Etiopia',
        common: 'Etiopia',
      },
      jpn: {
        official: 'エチオピア連邦民主共和国',
        common: 'エチオピア',
      },
      kor: {
        official: '에티오피아 연방 민주 공화국',
        common: '에티오피아',
      },
      nld: {
        official: 'Federale Democratische Republiek Ethiopië',
        common: 'Ethiopië',
      },
      per: {
        official: 'جمهوری فدرال دموکراتیک اتیوپی',
        common: 'اِتیوپی',
      },
      pol: {
        official: 'Federalna Demokratyczna Republika Etiopii',
        common: 'Etiopia',
      },
      por: {
        official: 'República Federal Democrática da Etiópia',
        common: 'Etiópia',
      },
      rus: {
        official: 'Федеративная Демократическая Республика Эфиопия',
        common: 'Эфиопия',
      },
      slk: {
        official: 'Etiópska federatívna demokratická republika',
        common: 'Etiópia',
      },
      spa: {
        official: 'República Democrática Federal de Etiopía',
        common: 'Etiopía',
      },
      swe: {
        official: 'Demokratiska förbundsrepubliken Etiopien',
        common: 'Etiopien',
      },
      urd: {
        official: 'وفاقی جمہوری جمہوریہ ایتھوپیا',
        common: 'ایتھوپیا',
      },
      zho: {
        official: '埃塞俄比亚联邦民主共和国',
        common: '埃塞俄比亚',
      },
    },
    latlng: [8.0, 38.0],
    landlocked: true,
    borders: ['DJI', 'ERI', 'KEN', 'SOM', 'SSD', 'SDN'],
    area: 1104300.0,
    demonyms: {
      eng: {
        f: 'Ethiopian',
        m: 'Ethiopian',
      },
      fra: {
        f: 'Éthiopienne',
        m: 'Éthiopien',
      },
    },
    flag: '\uD83C\uDDEA\uD83C\uDDF9',
    maps: {
      googleMaps: 'https://goo.gl/maps/2Q4hQWCbhuZLj3fG6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/192800',
    },
    population: 114963583,
    gini: {
      '2015': 35.0,
    },
    fifa: 'ETH',
    car: {
      signs: ['ETH'],
      side: 'right',
    },
    timezones: ['UTC+03:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/et.png',
      svg: 'https://flagcdn.com/et.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/et.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/et.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [9.03, 38.7],
    },
    postalCode: {
      format: '####',
      regex: '^(\\d{4})$',
    },
  },
  {
    name: {
      common: 'Saint Kitts and Nevis',
      official: 'Federation of Saint Christopher and Nevis',
      nativeName: {
        eng: {
          official: 'Federation of Saint Christopher and Nevis',
          common: 'Saint Kitts and Nevis',
        },
      },
    },
    tld: ['.kn'],
    cca2: 'KN',
    ccn3: '659',
    cca3: 'KNA',
    cioc: 'SKN',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      XCD: {
        name: 'Eastern Caribbean dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+1',
      suffixes: ['869'],
    },
    capital: ['Basseterre'],
    altSpellings: ['KN', 'Federation of Saint Christopher and Nevis'],
    region: 'Americas',
    subregion: 'Caribbean',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'اتحاد القديس كريستوفر ونيفيس',
        common: 'سانت كيتس ونيفيس',
      },
      ces: {
        official: 'Federace Sv. Kryštof a Nevis',
        common: 'Svatý Kryštof a Nevis',
      },
      cym: {
        official: 'Federation of Saint Christopher and Nevis',
        common: 'Saint Kitts and Nevis',
      },
      deu: {
        official: 'Föderation von St. Kitts und Nevis',
        common: 'St. Kitts und Nevis',
      },
      est: {
        official: 'Saint Kittsi ja Nevise Föderatsioon',
        common: 'Saint Kitts ja Nevis',
      },
      fin: {
        official: 'Saint Christopherin ja Nevisin federaatio',
        common: 'Saint Kitts ja Nevis',
      },
      fra: {
        official: 'Fédération de Saint-Christophe-et-Niévès',
        common: 'Saint-Christophe-et-Niévès',
      },
      hrv: {
        official: 'Federacija Sv.Kristofora i Nevisa',
        common: 'Sveti Kristof i Nevis',
      },
      hun: {
        official: 'Saint Christopher és Nevis Államszövetség',
        common: 'Saint Kitts és Nevis',
      },
      ita: {
        official: 'Federazione di Saint Christopher e Nevis',
        common: 'Saint Kitts e Nevis',
      },
      jpn: {
        official: 'セントクリストファーNevis連盟',
        common: 'セントクリストファー・ネイビス',
      },
      kor: {
        official: '세인트키츠 네비스 연방',
        common: '세인트키츠 네비스',
      },
      nld: {
        official: 'Federatie van Saint Kitts en Nevis',
        common: 'Saint Kitts en Nevis',
      },
      per: {
        official: 'فدراسیون سنت کیتس و نویس',
        common: 'سنت کیتس و نویس',
      },
      pol: {
        official: 'Federacja Saint Kitts i Nevis',
        common: 'Saint Kitts i Nevis',
      },
      por: {
        official: 'Federação de São Cristóvão e Nevis',
        common: 'São Cristóvão e Nevis',
      },
      rus: {
        official: 'Федерация Сент-Кристофер и Н е в и с',
        common: 'Сент-Китс и Невис',
      },
      slk: {
        official: 'Feder໡cia Svätého Krištofa a Nevisu',
        common: 'Svätý Krištof a Nevis',
      },
      spa: {
        official: 'Federación de San Cristóbal y Nevis',
        common: 'San Cristóbal y Nieves',
      },
      swe: {
        official: 'Federationen Saint Kitts och Nevis',
        common: 'Saint Kitts och Nevis',
      },
      urd: {
        official: 'وفاقِ سینٹ کیٹز و ناویس',
        common: 'سینٹ کیٹز و ناویس',
      },
      zho: {
        official: '圣克里斯托弗和尼维斯联邦',
        common: '圣基茨和尼维斯',
      },
    },
    latlng: [17.33333333, -62.75],
    landlocked: false,
    area: 261.0,
    demonyms: {
      eng: {
        f: 'Kittitian or Nevisian',
        m: 'Kittitian or Nevisian',
      },
      fra: {
        f: 'Kittitienne-et-nevicienne',
        m: 'Kittitien-et-nevicien',
      },
    },
    flag: '\uD83C\uDDF0\uD83C\uDDF3',
    maps: {
      googleMaps: 'https://goo.gl/maps/qiaVwcLVTXX3eoTNA',
      openStreetMaps: 'https://www.openstreetmap.org/relation/536899',
    },
    population: 53192,
    fifa: 'SKN',
    car: {
      signs: ['KN'],
      side: 'left',
    },
    timezones: ['UTC-04:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/kn.png',
      svg: 'https://flagcdn.com/kn.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/kn.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/kn.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [17.3, -62.72],
    },
  },
  {
    name: {
      common: 'Mauritius',
      official: 'Republic of Mauritius',
      nativeName: {
        eng: {
          official: 'Republic of Mauritius',
          common: 'Mauritius',
        },
        fra: {
          official: 'République de Maurice',
          common: 'Maurice',
        },
        mfe: {
          official: 'Republik Moris',
          common: 'Moris',
        },
      },
    },
    tld: ['.mu'],
    cca2: 'MU',
    ccn3: '480',
    cca3: 'MUS',
    cioc: 'MRI',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      MUR: {
        name: 'Mauritian rupee',
        symbol: '₨',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['30'],
    },
    capital: ['Port Louis'],
    altSpellings: ['MU', 'Republic of Mauritius', 'République de Maurice'],
    region: 'Africa',
    subregion: 'Eastern Africa',
    languages: {
      eng: 'English',
      fra: 'French',
      mfe: 'Mauritian Creole',
    },
    translations: {
      ara: {
        official: 'جمهورية موريشيوس',
        common: 'موريشيوس',
      },
      ces: {
        official: 'Mauricijská republika',
        common: 'Mauricius',
      },
      cym: {
        official: 'Republic of Mauritius',
        common: 'Mauritius',
      },
      deu: {
        official: 'Republik Mauritius',
        common: 'Mauritius',
      },
      est: {
        official: 'Mauritiuse Vabariik',
        common: 'Mauritius',
      },
      fin: {
        official: 'Mauritiuksen tasavalta',
        common: 'Mauritius',
      },
      fra: {
        official: 'République de Maurice',
        common: 'Île Maurice',
      },
      hrv: {
        official: 'Republika Mauricijus',
        common: 'Mauricijus',
      },
      hun: {
        official: 'Mauritiusi Köztársaság',
        common: 'Mauritius',
      },
      ita: {
        official: 'Repubblica di Mauritius',
        common: 'Mauritius',
      },
      jpn: {
        official: 'モーリシャス共和国',
        common: 'モーリシャス',
      },
      kor: {
        official: '모리셔스 공화국',
        common: '모리셔스',
      },
      nld: {
        official: 'Republiek Mauritius',
        common: 'Mauritius',
      },
      per: {
        official: 'جمهوری موریس',
        common: 'موریس',
      },
      pol: {
        official: 'Republika Mauritiusu',
        common: 'Mauritius',
      },
      por: {
        official: 'República das Maurícias',
        common: 'Maurício',
      },
      rus: {
        official: 'Республика Маврикий',
        common: 'Маврикий',
      },
      slk: {
        official: 'Maurícijská republika',
        common: 'Maurícius',
      },
      spa: {
        official: 'República de Mauricio',
        common: 'Mauricio',
      },
      swe: {
        official: 'Republiken Mauritius',
        common: 'Mauritius',
      },
      urd: {
        official: 'جمہوریہ موریشس',
        common: 'موریشس',
      },
      zho: {
        official: '毛里求斯共和国',
        common: '毛里求斯',
      },
    },
    latlng: [-20.28333333, 57.55],
    landlocked: false,
    area: 2040.0,
    demonyms: {
      eng: {
        f: 'Mauritian',
        m: 'Mauritian',
      },
      fra: {
        f: 'Mauricienne',
        m: 'Mauricien',
      },
    },
    flag: '\uD83C\uDDF2\uD83C\uDDFA',
    maps: {
      googleMaps: 'https://goo.gl/maps/PpKtZ4W3tir5iGrz7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/535828',
    },
    population: 1265740,
    gini: {
      '2017': 36.8,
    },
    fifa: 'MRI',
    car: {
      signs: ['MS'],
      side: 'left',
    },
    timezones: ['UTC+04:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/mu.png',
      svg: 'https://flagcdn.com/mu.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/mu.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/mu.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-20.15, 57.48],
    },
  },
  {
    name: {
      common: 'Netherlands',
      official: 'Kingdom of the Netherlands',
      nativeName: {
        nld: {
          official: 'Koninkrijk der Nederlanden',
          common: 'Nederland',
        },
      },
    },
    tld: ['.nl'],
    cca2: 'NL',
    ccn3: '528',
    cca3: 'NLD',
    cioc: 'NED',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['1'],
    },
    capital: ['Amsterdam'],
    altSpellings: ['NL', 'Holland', 'Nederland', 'The Netherlands'],
    region: 'Europe',
    subregion: 'Western Europe',
    languages: {
      nld: 'Dutch',
    },
    translations: {
      ara: {
        official: 'مملكة هولندا',
        common: 'هولندا',
      },
      ces: {
        official: 'Nizozemské království',
        common: 'Nizozemsko',
      },
      cym: {
        official: 'Kingdom of the Netherlands',
        common: 'Netherlands',
      },
      deu: {
        official: 'Niederlande',
        common: 'Niederlande',
      },
      est: {
        official: 'Madalmaade Kuningriik',
        common: 'Holland',
      },
      fin: {
        official: 'Alankomaat',
        common: 'Alankomaat',
      },
      fra: {
        official: 'Pays-Bas',
        common: 'Pays-Bas',
      },
      hrv: {
        official: 'Holandija',
        common: 'Nizozemska',
      },
      hun: {
        official: 'Holland Királyság',
        common: 'Hollandia',
      },
      ita: {
        official: 'Paesi Bassi',
        common: 'Paesi Bassi',
      },
      jpn: {
        official: 'オランダ',
        common: 'オランダ',
      },
      kor: {
        official: '네덜란드 왕국',
        common: '네덜란드',
      },
      nld: {
        official: 'Nederland',
        common: 'Nederland',
      },
      per: {
        official: 'هلند',
        common: 'هلند',
      },
      pol: {
        official: 'Królestwo Niderlandów',
        common: 'Holandia',
      },
      por: {
        official: 'Holanda',
        common: 'Holanda',
      },
      rus: {
        official: 'Нидерланды',
        common: 'Нидерланды',
      },
      slk: {
        official: 'Holandské kráľovstvo',
        common: 'Holansko',
      },
      spa: {
        official: 'Países Bajos',
        common: 'Países Bajos',
      },
      swe: {
        official: 'Nederländerna',
        common: 'Nederländerna',
      },
      urd: {
        official: 'مملکتِ نیدرلینڈز',
        common: 'نیدرلینڈز',
      },
      zho: {
        official: '荷兰',
        common: '荷兰',
      },
    },
    latlng: [52.5, 5.75],
    landlocked: false,
    borders: ['BEL', 'DEU'],
    area: 41850.0,
    demonyms: {
      eng: {
        f: 'Dutch',
        m: 'Dutch',
      },
      fra: {
        f: 'Néerlandaise',
        m: 'Néerlandais',
      },
    },
    flag: '\uD83C\uDDF3\uD83C\uDDF1',
    maps: {
      googleMaps: 'https://goo.gl/maps/Hv6zQswGhFxoVVBm6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/47796',
    },
    population: 16655799,
    gini: {
      '2018': 28.1,
    },
    fifa: 'NED',
    car: {
      signs: ['NL'],
      side: 'right',
    },
    timezones: ['UTC-04:00', 'UTC+01:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/nl.png',
      svg: 'https://flagcdn.com/nl.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/nl.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/nl.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [52.35, 4.92],
    },
    postalCode: {
      format: '#### @@',
      regex: '^(\\d{4}[A-Z]{2})$',
    },
  },
  {
    name: {
      common: 'Myanmar',
      official: 'Republic of the Union of Myanmar',
      nativeName: {
        mya: {
          official: 'ပြည်ထောင်စု သမ္မတ မြန်မာနိုင်ငံတော်',
          common: 'မြန်မာ',
        },
      },
    },
    tld: ['.mm'],
    cca2: 'MM',
    ccn3: '104',
    cca3: 'MMR',
    cioc: 'MYA',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      MMK: {
        name: 'Burmese kyat',
        symbol: 'Ks',
      },
    },
    idd: {
      root: '+9',
      suffixes: ['5'],
    },
    capital: ['Naypyidaw'],
    altSpellings: ['MM', 'Burma', 'Republic of the Union of Myanmar', 'Pyidaunzu Thanmăda Myăma Nainngandaw'],
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    languages: {
      mya: 'Burmese',
    },
    translations: {
      ara: {
        official: 'جمهورية اتحاد ميانمار',
        common: 'ميانمار',
      },
      ces: {
        official: 'Republika Myanmarský svaz',
        common: 'Myanmar',
      },
      cym: {
        official: 'Republic of the Union of Myanmar',
        common: 'Myanmar',
      },
      deu: {
        official: 'Republik der Union Myanmar',
        common: 'Myanmar',
      },
      est: {
        official: 'Myanmari Liidu Vabariik',
        common: 'Myanmar',
      },
      fin: {
        official: 'Myanmarin liiton tasavalta',
        common: 'Myanmar',
      },
      fra: {
        official: "République de l'Union du Myanmar",
        common: 'Birmanie',
      },
      hrv: {
        official: 'Republika Unije Mijanmar',
        common: 'Mijanmar',
      },
      hun: {
        official: 'Mianmari Államszövetség Köztársasága',
        common: 'Mianmar',
      },
      ita: {
        official: "Repubblica dell'Unione di Myanmar",
        common: 'Birmania',
      },
      jpn: {
        official: 'ミャンマー連邦共和国',
        common: 'ミャンマー',
      },
      kor: {
        official: '미얀마 연방 공화국',
        common: '미얀마',
      },
      nld: {
        official: 'Republiek van de Unie van Myanmar',
        common: 'Myanmar',
      },
      per: {
        official: 'اتحادیه جمهوری میانمار',
        common: 'میانمار',
      },
      pol: {
        official: 'Republika Związku Mjanmy',
        common: 'Mjanma',
      },
      por: {
        official: 'República da União de Myanmar',
        common: 'Myanmar',
      },
      rus: {
        official: 'Республика Союза Мьянма',
        common: 'Мьянма',
      },
      slk: {
        official: 'Mjanmarská zväzová republika',
        common: 'Mjanmarsko',
      },
      spa: {
        official: 'República de la Unión de Myanmar',
        common: 'Myanmar',
      },
      swe: {
        official: 'Republiken Unionen Myanmar',
        common: 'Myanmar',
      },
      urd: {
        official: 'متحدہ جمہوریہ میانمار',
        common: 'میانمار',
      },
      zho: {
        official: '缅甸联邦共和国',
        common: '缅甸',
      },
    },
    latlng: [22.0, 98.0],
    landlocked: false,
    borders: ['BGD', 'CHN', 'IND', 'LAO', 'THA'],
    area: 676578.0,
    demonyms: {
      eng: {
        f: 'Burmese',
        m: 'Burmese',
      },
      fra: {
        f: 'Birmane',
        m: 'Birman',
      },
    },
    flag: '\uD83C\uDDF2\uD83C\uDDF2',
    maps: {
      googleMaps: 'https://goo.gl/maps/4jrZyJkDERUfHyp26',
      openStreetMaps: 'https://www.openstreetmap.org/relation/50371',
    },
    population: 54409794,
    gini: {
      '2017': 30.7,
    },
    fifa: 'MYA',
    car: {
      signs: ['BUR'],
      side: 'right',
    },
    timezones: ['UTC+06:30'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/mm.png',
      svg: 'https://flagcdn.com/mm.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/mm.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/mm.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [19.76, 96.07],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Cocos (Keeling) Islands',
      official: 'Territory of the Cocos (Keeling) Islands',
      nativeName: {
        eng: {
          official: 'Territory of the Cocos (Keeling) Islands',
          common: 'Cocos (Keeling) Islands',
        },
      },
    },
    tld: ['.cc'],
    cca2: 'CC',
    ccn3: '166',
    cca3: 'CCK',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      AUD: {
        name: 'Australian dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+6',
      suffixes: ['1'],
    },
    capital: ['West Island'],
    altSpellings: ['CC', 'Keeling Islands', 'Cocos Islands'],
    region: 'Oceania',
    subregion: 'Australia and New Zealand',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'إقليم جزر كوكوس',
        common: 'جزر كوكوس',
      },
      ces: {
        official: 'Kokosové ostrovy',
        common: 'Kokosové ostrovy',
      },
      cym: {
        official: 'Tiriogaeth yr Ynysoedd Cocos (Keeling)',
        common: 'Ynysoedd Cocos',
      },
      deu: {
        official: 'Gebiet der Kokos- (Keeling-) Inseln',
        common: 'Kokosinseln',
      },
      est: {
        official: 'Kookossaarte ala',
        common: 'Kookossaared',
      },
      fin: {
        official: 'Kookossaaret',
        common: 'Kookossaaret',
      },
      fra: {
        official: 'Territoire des îles Cocos (Keeling)',
        common: 'Îles Cocos',
      },
      hrv: {
        official: 'Teritoriju Kokosovi (Keeling) Islands',
        common: 'Kokosovi Otoci',
      },
      hun: {
        official: 'Kókusz-szigetek',
        common: 'Kókusz-szigetek',
      },
      ita: {
        official: 'Territorio della (Keeling) Isole Cocos',
        common: 'Isole Cocos e Keeling',
      },
      jpn: {
        official: 'ココス諸島の領土',
        common: 'ココス（キーリング）諸島',
      },
      kor: {
        official: '코코스 제도',
        common: '코코스 제도',
      },
      nld: {
        official: 'Grondgebied van de Eilanden Cocos (Keeling )',
        common: 'Cocoseilanden',
      },
      per: {
        official: 'جزایر کوکوس',
        common: 'جزایر کوکوس',
      },
      pol: {
        official: 'Wyspy Kokosowe',
        common: 'Wyspy Kokosowe',
      },
      por: {
        official: 'Território dos Cocos (Keeling)',
        common: 'Ilhas Cocos (Keeling)',
      },
      rus: {
        official: 'Территория Кокосовые (Килинг) острова',
        common: 'Кокосовые острова',
      },
      slk: {
        official: 'Kokosové ostrovy',
        common: 'Kokosové ostrovy',
      },
      spa: {
        official: 'Territorio de los (Keeling) Islas Cocos',
        common: 'Islas Cocos o Islas Keeling',
      },
      swe: {
        official: 'Kokosöarna',
        common: 'Kokosöarna',
      },
      urd: {
        official: 'جزائر (کیلنگ) کوکوس',
        common: 'جزائر کوکوس',
      },
      zho: {
        official: '科科斯',
        common: '科科斯',
      },
    },
    latlng: [-12.5, 96.83333333],
    landlocked: false,
    area: 14.0,
    demonyms: {
      eng: {
        f: 'Cocos Islander',
        m: 'Cocos Islander',
      },
    },
    flag: '\uD83C\uDDE8\uD83C\uDDE8',
    maps: {
      googleMaps: 'https://goo.gl/maps/3eCdKVpVfMcZyKcK6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/82636',
    },
    population: 544,
    car: {
      signs: ['AUS'],
      side: 'left',
    },
    timezones: ['UTC+06:30'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/cc.png',
      svg: 'https://flagcdn.com/cc.svg',
    },
    coatOfArms: {},
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-12.17, 96.83],
    },
  },
  {
    name: {
      common: 'Liberia',
      official: 'Republic of Liberia',
      nativeName: {
        eng: {
          official: 'Republic of Liberia',
          common: 'Liberia',
        },
      },
    },
    tld: ['.lr'],
    cca2: 'LR',
    ccn3: '430',
    cca3: 'LBR',
    cioc: 'LBR',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      LRD: {
        name: 'Liberian dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['31'],
    },
    capital: ['Monrovia'],
    altSpellings: ['LR', 'Republic of Liberia'],
    region: 'Africa',
    subregion: 'Western Africa',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'جمهورية ليبيريا',
        common: 'ليبيريا',
      },
      ces: {
        official: 'Liberijská republika',
        common: 'Libérie',
      },
      cym: {
        official: 'Republic of Liberia',
        common: 'Liberia',
      },
      deu: {
        official: 'Republik Liberia',
        common: 'Liberia',
      },
      est: {
        official: 'Libeeria Vabariik',
        common: 'Libeeria',
      },
      fin: {
        official: 'Liberian tasavalta',
        common: 'Liberia',
      },
      fra: {
        official: 'République du Libéria',
        common: 'Liberia',
      },
      hrv: {
        official: 'Republika Liberija',
        common: 'Liberija',
      },
      hun: {
        official: 'Libériai Köztársaság',
        common: 'Libéria',
      },
      ita: {
        official: 'Repubblica di Liberia',
        common: 'Liberia',
      },
      jpn: {
        official: 'リベリア共和国',
        common: 'リベリア',
      },
      kor: {
        official: '라이베리아 공화국',
        common: '라이베리아',
      },
      nld: {
        official: 'Republiek Liberia',
        common: 'Liberia',
      },
      per: {
        official: 'جمهوری لیبریا',
        common: 'لیبـِریا',
      },
      pol: {
        official: 'Republika Liberii',
        common: 'Liberia',
      },
      por: {
        official: 'República da Libéria',
        common: 'Libéria',
      },
      rus: {
        official: 'Республика Либерия',
        common: 'Либерия',
      },
      slk: {
        official: 'Libérijská republika',
        common: 'Libéria',
      },
      spa: {
        official: 'República de Liberia',
        common: 'Liberia',
      },
      swe: {
        official: 'Republiken Liberia',
        common: 'Liberia',
      },
      urd: {
        official: 'جمہوریہ لائبیریا',
        common: 'لائبیریا',
      },
      zho: {
        official: '利比里亚共和国',
        common: '利比里亚',
      },
    },
    latlng: [6.5, -9.5],
    landlocked: false,
    borders: ['GIN', 'CIV', 'SLE'],
    area: 111369.0,
    demonyms: {
      eng: {
        f: 'Liberian',
        m: 'Liberian',
      },
      fra: {
        f: 'Libérienne',
        m: 'Libérien',
      },
    },
    flag: '\uD83C\uDDF1\uD83C\uDDF7',
    maps: {
      googleMaps: 'https://goo.gl/maps/4VsHsc2oeGeRL3wg6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/192780',
    },
    population: 5057677,
    gini: {
      '2016': 35.3,
    },
    fifa: 'LBR',
    car: {
      signs: ['LB'],
      side: 'right',
    },
    timezones: ['UTC'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/lr.png',
      svg: 'https://flagcdn.com/lr.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/lr.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/lr.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [6.3, -10.8],
    },
    postalCode: {
      format: '####',
      regex: '^(\\d{4})$',
    },
  },
  {
    name: {
      common: 'Turks and Caicos Islands',
      official: 'Turks and Caicos Islands',
      nativeName: {
        eng: {
          official: 'Turks and Caicos Islands',
          common: 'Turks and Caicos Islands',
        },
      },
    },
    tld: ['.tc'],
    cca2: 'TC',
    ccn3: '796',
    cca3: 'TCA',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      USD: {
        name: 'United States dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+1',
      suffixes: ['649'],
    },
    capital: ['Cockburn Town'],
    altSpellings: ['TC'],
    region: 'Americas',
    subregion: 'Caribbean',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'جزر توركس وكايكوس',
        common: 'جزر توركس وكايكوس',
      },
      ces: {
        official: 'Turks a Caicos',
        common: 'Turks a Caicos',
      },
      cym: {
        official: 'Turks and Caicos Islands',
        common: 'Turks and Caicos Islands',
      },
      deu: {
        official: 'Turks und Caicos Inseln',
        common: 'Turks-und Caicosinseln',
      },
      est: {
        official: 'Turksi ja Caicose saared',
        common: 'Turks ja Caicos',
      },
      fin: {
        official: 'Turks-ja Caicossaaret',
        common: 'Turks-ja Caicossaaret',
      },
      fra: {
        official: 'Îles Turques et Caïques',
        common: 'Îles Turques-et-Caïques',
      },
      hrv: {
        official: 'Otoci Turks i Caicos',
        common: 'Otoci Turks i Caicos',
      },
      hun: {
        official: 'Turks- és Caicos-szigetek',
        common: 'Turks- és Caicos-szigetek',
      },
      ita: {
        official: 'Turks e Caicos',
        common: 'Isole Turks e Caicos',
      },
      jpn: {
        official: 'タークス·カイコス諸島',
        common: 'タークス・カイコス諸島',
      },
      kor: {
        official: '터크스 케이커스 제도',
        common: '터크스 케이커스 제도',
      },
      nld: {
        official: 'Turks-en Caicoseilanden',
        common: 'Turks-en Caicoseilanden',
      },
      per: {
        official: 'جزایر تورکس و کایکوس',
        common: 'جزایر تورکس و کایکوس',
      },
      pol: {
        official: 'Turks i Caicos',
        common: 'Turks i Caicos',
      },
      por: {
        official: 'Ilhas Turks e Caicos',
        common: 'Ilhas Turks e Caicos',
      },
      rus: {
        official: 'Теркс и Кайкос острова',
        common: 'Теркс и Кайкос',
      },
      slk: {
        official: 'Ostrovy Turks a Caicos',
        common: 'Turks a Caicos',
      },
      spa: {
        official: 'Islas Turcas y Caicos',
        common: 'Islas Turks y Caicos',
      },
      swe: {
        official: 'Turks- och Caicosöarna',
        common: 'Turks- och Caicosöarna',
      },
      urd: {
        official: 'جزائر کیکس و ترکیہ',
        common: 'جزائر کیکس و ترکیہ',
      },
      zho: {
        official: '特克斯和凯科斯群岛',
        common: '特克斯和凯科斯群岛',
      },
    },
    latlng: [21.75, -71.58333333],
    landlocked: false,
    area: 948.0,
    demonyms: {
      eng: {
        f: 'Turks and Caicos Islander',
        m: 'Turks and Caicos Islander',
      },
    },
    flag: '\uD83C\uDDF9\uD83C\uDDE8',
    maps: {
      googleMaps: 'https://goo.gl/maps/R8VUDQfwZiFtvmyn8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/547479',
    },
    population: 38718,
    fifa: 'TCA',
    car: {
      signs: ['GB'],
      side: 'left',
    },
    timezones: ['UTC-04:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/tc.png',
      svg: 'https://flagcdn.com/tc.svg',
    },
    coatOfArms: {},
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [21.46, -71.14],
    },
    postalCode: {
      format: 'TKCA 1ZZ',
      regex: '^(TKCA 1ZZ)$',
    },
  },
  {
    name: {
      common: 'Tunisia',
      official: 'Tunisian Republic',
      nativeName: {
        ara: {
          official: 'الجمهورية التونسية',
          common: 'تونس',
        },
      },
    },
    tld: ['.tn'],
    cca2: 'TN',
    ccn3: '788',
    cca3: 'TUN',
    cioc: 'TUN',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      TND: {
        name: 'Tunisian dinar',
        symbol: 'د.ت',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['16'],
    },
    capital: ['Tunis'],
    altSpellings: ['TN', 'Republic of Tunisia', 'al-Jumhūriyyah at-Tūnisiyyah'],
    region: 'Africa',
    subregion: 'Northern Africa',
    languages: {
      ara: 'Arabic',
    },
    translations: {
      ara: {
        official: 'الجمهورية التونسية',
        common: 'تونس',
      },
      ces: {
        official: 'Tuniská republika',
        common: 'Tunisko',
      },
      cym: {
        official: 'Tunisian Republic',
        common: 'Tunisia',
      },
      deu: {
        official: 'Tunesische Republik',
        common: 'Tunesien',
      },
      est: {
        official: 'Tuneesia Vabariik',
        common: 'Tuneesia',
      },
      fin: {
        official: 'Tunisian tasavalta',
        common: 'Tunisia',
      },
      fra: {
        official: 'République tunisienne',
        common: 'Tunisie',
      },
      hrv: {
        official: 'Tuniski Republika',
        common: 'Tunis',
      },
      hun: {
        official: 'Tunéziai Köztársaság',
        common: 'Tunézia',
      },
      ita: {
        official: 'Repubblica tunisina',
        common: 'Tunisia',
      },
      jpn: {
        official: 'チュニジア共和国',
        common: 'チュニジア',
      },
      kor: {
        official: '튀니지 공화국',
        common: '튀니지',
      },
      nld: {
        official: 'Republiek Tunesië',
        common: 'Tunesië',
      },
      per: {
        official: 'جمهوری تونس',
        common: 'تونس',
      },
      pol: {
        official: 'Republika Tunezyjska',
        common: 'Tunezja',
      },
      por: {
        official: 'República da Tunísia',
        common: 'Tunísia',
      },
      rus: {
        official: 'Тунисской Республики',
        common: 'Тунис',
      },
      slk: {
        official: 'Tuniská republika',
        common: 'Tunisko',
      },
      spa: {
        official: 'República de Túnez',
        common: 'Túnez',
      },
      swe: {
        official: 'Republiken Tunisien',
        common: 'Tunisien',
      },
      urd: {
        official: 'جمہوریہ تونس',
        common: 'تونس',
      },
      zho: {
        official: '突尼斯共和国',
        common: '突尼斯',
      },
    },
    latlng: [34.0, 9.0],
    landlocked: false,
    borders: ['DZA', 'LBY'],
    area: 163610.0,
    demonyms: {
      eng: {
        f: 'Tunisian',
        m: 'Tunisian',
      },
      fra: {
        f: 'Tunisienne',
        m: 'Tunisien',
      },
    },
    flag: '\uD83C\uDDF9\uD83C\uDDF3',
    maps: {
      googleMaps: 'https://goo.gl/maps/KgUmpZdUuNRaougs8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/192757',
    },
    population: 11818618,
    gini: {
      '2015': 32.8,
    },
    fifa: 'TUN',
    car: {
      signs: ['TN'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/tn.png',
      svg: 'https://flagcdn.com/tn.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/tn.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/tn.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [36.8, 10.18],
    },
    postalCode: {
      format: '####',
      regex: '^(\\d{4})$',
    },
  },
  {
    name: {
      common: 'Western Sahara',
      official: 'Sahrawi Arab Democratic Republic',
      nativeName: {
        ber: {
          official: 'Sahrawi Arab Democratic Republic',
          common: 'Western Sahara',
        },
        mey: {
          official: 'الجمهورية العربية الصحراوية الديمقراطية',
          common: 'الصحراء الغربية',
        },
        spa: {
          official: 'República Árabe Saharaui Democrática',
          common: 'Sahara Occidental',
        },
      },
    },
    tld: ['.eh'],
    cca2: 'EH',
    ccn3: '732',
    cca3: 'ESH',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      DZD: {
        name: 'Algerian dinar',
        symbol: 'دج',
      },
      MAD: {
        name: 'Moroccan dirham',
        symbol: 'DH',
      },
      MRU: {
        name: 'Mauritanian ouguiya',
        symbol: 'UM',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['125288', '125289'],
    },
    capital: ['El Aaiún'],
    altSpellings: ['EH', 'Taneẓroft Tutrimt'],
    region: 'Africa',
    subregion: 'Northern Africa',
    languages: {
      ber: 'Berber',
      mey: 'Hassaniya',
      spa: 'Spanish',
    },
    translations: {
      ara: {
        official: 'الجمهورية العربية الصحراوية الديمقراطية',
        common: 'الصحراء الغربية',
      },
      ces: {
        official: 'Západní Sahara',
        common: 'Západní Sahara',
      },
      cym: {
        official: 'Sahrawi Arab Democratic Republic',
        common: 'Western Sahara',
      },
      deu: {
        official: 'Demokratische Arabische Republik Sahara',
        common: 'Westsahara',
      },
      est: {
        official: 'Lääne-Sahara',
        common: 'Lääne-Sahara',
      },
      fin: {
        official: 'Länsi-Sahara',
        common: 'Länsi-Sahara',
      },
      fra: {
        official: 'République arabe sahraouie démocratique',
        common: 'Sahara Occidental',
      },
      hrv: {
        official: 'Sahrawi Arab Demokratska Republika',
        common: 'Zapadna Sahara',
      },
      hun: {
        official: 'Nyugat-Szahara',
        common: 'Nyugat-Szahara',
      },
      ita: {
        official: 'Repubblica Araba Saharawi Democratica',
        common: 'Sahara Occidentale',
      },
      jpn: {
        official: 'サハラアラブ民主共和国',
        common: '西サハラ',
      },
      kor: {
        official: '사하라 아랍 민주 공화국',
        common: '서사하라',
      },
      nld: {
        official: 'Sahrawi Arabische Democratische Republiek',
        common: 'Westelijke Sahara',
      },
      per: {
        official: 'صحرای غربی',
        common: 'صحرای غربی',
      },
      pol: {
        official: 'Saharyjska Arabska Republika Demokratyczna',
        common: 'Sahara Zachodnia',
      },
      por: {
        official: 'República Árabe Saharaui Democrática',
        common: 'Saara Ocidental',
      },
      rus: {
        official: 'Sahrawi Арабская Демократическая Республика',
        common: 'Западная Сахара',
      },
      slk: {
        official: 'Západná Sahara',
        common: 'Západná Sahara',
      },
      spa: {
        official: 'República Árabe Saharaui Democrática',
        common: 'Sahara Occidental',
      },
      swe: {
        official: 'Västsahara',
        common: 'Västsahara',
      },
      urd: {
        official: 'صحراوی عرب عوامی جمہوریہ',
        common: 'مغربی صحارا',
      },
      zho: {
        official: '阿拉伯撒哈拉民主共和国',
        common: '西撒哈拉',
      },
    },
    latlng: [24.5, -13.0],
    landlocked: false,
    borders: ['DZA', 'MRT', 'MAR'],
    area: 266000.0,
    demonyms: {
      eng: {
        f: 'Sahrawi',
        m: 'Sahrawi',
      },
    },
    flag: '\uD83C\uDDEA\uD83C\uDDED',
    maps: {
      googleMaps: 'https://goo.gl/maps/7nU3mB69vP6zQp7A8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/5441968',
    },
    population: 510713,
    car: {
      signs: [''],
      side: 'right',
    },
    timezones: ['UTC+00:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/eh.png',
      svg: 'https://flagcdn.com/eh.svg',
    },
    coatOfArms: {},
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-13.28, 27.14],
    },
  },
  {
    name: {
      common: 'Finland',
      official: 'Republic of Finland',
      nativeName: {
        fin: {
          official: 'Suomen tasavalta',
          common: 'Suomi',
        },
        swe: {
          official: 'Republiken Finland',
          common: 'Finland',
        },
      },
    },
    tld: ['.fi'],
    cca2: 'FI',
    ccn3: '246',
    cca3: 'FIN',
    cioc: 'FIN',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['58'],
    },
    capital: ['Helsinki'],
    altSpellings: ['FI', 'Suomi', 'Republic of Finland', 'Suomen tasavalta', 'Republiken Finland'],
    region: 'Europe',
    subregion: 'Northern Europe',
    languages: {
      fin: 'Finnish',
      swe: 'Swedish',
    },
    translations: {
      ara: {
        official: 'جمهورية فنلندا',
        common: 'فنلندا',
      },
      ces: {
        official: 'Finská republika',
        common: 'Finsko',
      },
      cym: {
        official: 'Republic of Finland',
        common: 'Finland',
      },
      deu: {
        official: 'Republik Finnland',
        common: 'Finnland',
      },
      est: {
        official: 'Soome Vabariik',
        common: 'Soome',
      },
      fin: {
        official: 'Suomen tasavalta',
        common: 'Suomi',
      },
      fra: {
        official: 'République de Finlande',
        common: 'Finlande',
      },
      hrv: {
        official: 'Republika Finska',
        common: 'Finska',
      },
      hun: {
        official: 'Finn Köztársaság',
        common: 'Finnország',
      },
      ita: {
        official: 'Repubblica di Finlandia',
        common: 'Finlandia',
      },
      jpn: {
        official: 'フィンランド共和国',
        common: 'フィンランド',
      },
      kor: {
        official: '핀란드 공화국',
        common: '핀란드',
      },
      nld: {
        official: 'Republiek Finland',
        common: 'Finland',
      },
      per: {
        official: 'جمهوری فنلاند',
        common: 'فنلاند',
      },
      pol: {
        official: 'Republika Finlandii',
        common: 'Finlandia',
      },
      por: {
        official: 'República da Finlândia',
        common: 'Finlândia',
      },
      rus: {
        official: 'Финляндская Республика',
        common: 'Финляндия',
      },
      slk: {
        official: 'Fínska republika',
        common: 'Fínsko',
      },
      spa: {
        official: 'República de Finlandia',
        common: 'Finlandia',
      },
      swe: {
        official: 'Republiken Finland',
        common: 'Finland',
      },
      urd: {
        official: 'جمہوریہ فن لینڈ',
        common: 'فن لینڈ',
      },
      zho: {
        official: '芬兰共和国',
        common: '芬兰',
      },
    },
    latlng: [64.0, 26.0],
    landlocked: false,
    borders: ['NOR', 'SWE', 'RUS'],
    area: 338424.0,
    demonyms: {
      eng: {
        f: 'Finnish',
        m: 'Finnish',
      },
      fra: {
        f: 'Finlandaise',
        m: 'Finlandais',
      },
    },
    flag: '\uD83C\uDDEB\uD83C\uDDEE',
    maps: {
      googleMaps: 'https://goo.gl/maps/HjgWDCNKRAYHrkMn8',
      openStreetMaps: 'openstreetmap.org/relation/54224',
    },
    population: 5530719,
    gini: {
      '2018': 27.3,
    },
    fifa: 'FIN',
    car: {
      signs: ['FIN'],
      side: 'right',
    },
    timezones: ['UTC+02:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/fi.png',
      svg: 'https://flagcdn.com/fi.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/fi.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/fi.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [60.17, 24.93],
    },
    postalCode: {
      format: '#####',
      regex: '^(?:FI)*(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Iceland',
      official: 'Iceland',
      nativeName: {
        isl: {
          official: 'Ísland',
          common: 'Ísland',
        },
      },
    },
    tld: ['.is'],
    cca2: 'IS',
    ccn3: '352',
    cca3: 'ISL',
    cioc: 'ISL',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      ISK: {
        name: 'Icelandic króna',
        symbol: 'kr',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['54'],
    },
    capital: ['Reykjavik'],
    altSpellings: ['IS', 'Island', 'Republic of Iceland', 'Lýðveldið Ísland'],
    region: 'Europe',
    subregion: 'Northern Europe',
    languages: {
      isl: 'Icelandic',
    },
    translations: {
      ara: {
        official: 'آيسلندا',
        common: 'آيسلندا',
      },
      ces: {
        official: 'Island',
        common: 'Island',
      },
      cym: {
        official: 'Iceland',
        common: 'Iceland',
      },
      deu: {
        official: 'Island',
        common: 'Island',
      },
      est: {
        official: 'Islandi Vabariik',
        common: 'Island',
      },
      fin: {
        official: 'Islanti',
        common: 'Islanti',
      },
      fra: {
        official: "République d'Islande",
        common: 'Islande',
      },
      hrv: {
        official: 'Island',
        common: 'Island',
      },
      hun: {
        official: 'Izland',
        common: 'Izland',
      },
      ita: {
        official: 'Islanda',
        common: 'Islanda',
      },
      jpn: {
        official: 'アイスランド',
        common: 'アイスランド',
      },
      kor: {
        official: '아이슬란드 공화국',
        common: '아이슬란드',
      },
      nld: {
        official: 'IJsland',
        common: 'IJsland',
      },
      per: {
        official: 'جمهوری ایسلند',
        common: 'ایسلند',
      },
      pol: {
        official: 'Republika Islandii',
        common: 'Islandia',
      },
      por: {
        official: 'Islândia',
        common: 'Islândia',
      },
      rus: {
        official: 'Исландия',
        common: 'Исландия',
      },
      slk: {
        official: 'Islandská republika',
        common: 'Island',
      },
      spa: {
        official: 'Islandia',
        common: 'Islandia',
      },
      swe: {
        official: 'Island',
        common: 'Island',
      },
      urd: {
        official: 'آئس لینڈ',
        common: 'آئس لینڈ',
      },
      zho: {
        official: '冰岛',
        common: '冰岛',
      },
    },
    latlng: [65.0, -18.0],
    landlocked: false,
    area: 103000.0,
    demonyms: {
      eng: {
        f: 'Icelander',
        m: 'Icelander',
      },
      fra: {
        f: 'Islandaise',
        m: 'Islandais',
      },
    },
    flag: '\uD83C\uDDEE\uD83C\uDDF8',
    maps: {
      googleMaps: 'https://goo.gl/maps/WxFWSQuc3oamNxoE6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/299133',
    },
    population: 366425,
    gini: {
      '2017': 26.1,
    },
    fifa: 'ISL',
    car: {
      signs: ['IS'],
      side: 'right',
    },
    timezones: ['UTC'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/is.png',
      svg: 'https://flagcdn.com/is.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/is.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/is.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [64.15, -21.95],
    },
    postalCode: {
      format: '###',
      regex: '^(\\d{3})$',
    },
  },
  {
    name: {
      common: 'Northern Mariana Islands',
      official: 'Commonwealth of the Northern Mariana Islands',
      nativeName: {
        cal: {
          official: 'Commonwealth of the Northern Mariana Islands',
          common: 'Northern Mariana Islands',
        },
        cha: {
          official: 'Sankattan Siha Na Islas Mariånas',
          common: 'Na Islas Mariånas',
        },
        eng: {
          official: 'Commonwealth of the Northern Mariana Islands',
          common: 'Northern Mariana Islands',
        },
      },
    },
    tld: ['.mp'],
    cca2: 'MP',
    ccn3: '580',
    cca3: 'MNP',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      USD: {
        name: 'United States dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+1',
      suffixes: ['670'],
    },
    capital: ['Saipan'],
    altSpellings: ['MP', 'Commonwealth of the Northern Mariana Islands', 'Sankattan Siha Na Islas Mariånas'],
    region: 'Oceania',
    subregion: 'Micronesia',
    languages: {
      cal: 'Carolinian',
      cha: 'Chamorro',
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'كومونولث جزر ماريانا الشمالية',
        common: 'جزر ماريانا الشمالية',
      },
      ces: {
        official: 'Společenství Severních Marian',
        common: 'Severní Mariany',
      },
      cym: {
        official: 'Commonwealth of the Northern Mariana Islands',
        common: 'Northern Mariana Islands',
      },
      deu: {
        official: 'Commonwealth der Nördlichen Marianen',
        common: 'Nördliche Marianen',
      },
      est: {
        official: 'Põhja-Mariaani Ühendus',
        common: 'Põhja-Mariaanid',
      },
      fin: {
        official: 'Pohjois-Mariaanit',
        common: 'Pohjois-Mariaanit',
      },
      fra: {
        official: 'Commonwealth des îles Mariannes du Nord',
        common: 'Îles Mariannes du Nord',
      },
      hrv: {
        official: 'Zajednica je Sjeverni Marijanski otoci',
        common: 'Sjevernomarijanski otoci',
      },
      hun: {
        official: 'Északi-Mariana-szigetek',
        common: 'Északi-Mariana-szigetek',
      },
      ita: {
        official: 'Commonwealth delle Isole Marianne Settentrionali',
        common: 'Isole Marianne Settentrionali',
      },
      jpn: {
        official: '北マリアナ諸島',
        common: '北マリアナ諸島',
      },
      kor: {
        official: '북마리아나 제도',
        common: '북마리아나 제도',
      },
      nld: {
        official: 'Commonwealth van de Noordelijke Marianen',
        common: 'Noordelijke Marianeneilanden',
      },
      per: {
        official: 'جزایر ماریانای شمالی',
        common: 'جزایر ماریانای شمالی',
      },
      pol: {
        official: 'Wspólnota Marianów Północnych',
        common: 'Mariany Północne',
      },
      por: {
        official: 'Comunidade das Ilhas Marianas do Norte',
        common: 'Marianas Setentrionais',
      },
      rus: {
        official: 'Содружество Северных Марианских островов',
        common: 'Северные Марианские острова',
      },
      slk: {
        official: 'Spoločenstvo ostrovov Severné Mariány',
        common: 'Severné Mariány',
      },
      spa: {
        official: 'Mancomunidad de las Islas Marianas del Norte',
        common: 'Islas Marianas del Norte',
      },
      swe: {
        official: 'Nordmarianerna',
        common: 'Nordmarianerna',
      },
      urd: {
        official: 'دولتِ مشترکہ جزائر شمالی ماریانا',
        common: 'جزائر شمالی ماریانا',
      },
      zho: {
        official: '北马里亚纳群岛',
        common: '北马里亚纳群岛',
      },
    },
    latlng: [15.2, 145.75],
    landlocked: false,
    area: 464.0,
    demonyms: {
      eng: {
        f: 'American',
        m: 'American',
      },
      fra: {
        f: 'Américaine',
        m: 'Américan',
      },
    },
    flag: '\uD83C\uDDF2\uD83C\uDDF5',
    maps: {
      googleMaps: 'https://goo.gl/maps/cpZ67knoRAcfu1417',
      openStreetMaps: 'https://www.openstreetmap.org/relation/306004',
    },
    population: 57557,
    car: {
      signs: ['USA'],
      side: 'right',
    },
    timezones: ['UTC+10:00'],
    continents: ['Oceania'],
    flags: {
      png: 'https://flagcdn.com/w320/mp.png',
      svg: 'https://flagcdn.com/mp.svg',
    },
    coatOfArms: {},
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [15.2, 145.75],
    },
  },
  {
    name: {
      common: 'Guam',
      official: 'Guam',
      nativeName: {
        cha: {
          official: 'Guåhån',
          common: 'Guåhån',
        },
        eng: {
          official: 'Guam',
          common: 'Guam',
        },
        spa: {
          official: 'Guam',
          common: 'Guam',
        },
      },
    },
    tld: ['.gu'],
    cca2: 'GU',
    ccn3: '316',
    cca3: 'GUM',
    cioc: 'GUM',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      USD: {
        name: 'United States dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+1',
      suffixes: ['671'],
    },
    capital: ['Hagåtña'],
    altSpellings: ['GU', 'Guåhån'],
    region: 'Oceania',
    subregion: 'Micronesia',
    languages: {
      cha: 'Chamorro',
      eng: 'English',
      spa: 'Spanish',
    },
    translations: {
      ara: {
        official: 'غوام',
        common: 'غوام',
      },
      ces: {
        official: 'Guam',
        common: 'Guam',
      },
      cym: {
        official: 'Guam',
        common: 'Guam',
      },
      deu: {
        official: 'Guam',
        common: 'Guam',
      },
      est: {
        official: 'Guami ala',
        common: 'Guam',
      },
      fin: {
        official: 'Guam',
        common: 'Guam',
      },
      fra: {
        official: 'Guam',
        common: 'Guam',
      },
      hrv: {
        official: 'Guam',
        common: 'Guam',
      },
      hun: {
        official: 'Guam',
        common: 'Guam',
      },
      ita: {
        official: 'Guam',
        common: 'Guam',
      },
      jpn: {
        official: 'グアム',
        common: 'グアム',
      },
      kor: {
        official: '괌',
        common: '괌',
      },
      nld: {
        official: 'Guam',
        common: 'Guam',
      },
      per: {
        official: 'گوآم',
        common: 'گوآم',
      },
      pol: {
        official: 'Terytorium Guamu',
        common: 'Guam',
      },
      por: {
        official: 'Guam',
        common: 'Guam',
      },
      rus: {
        official: 'Гуам',
        common: 'Гуам',
      },
      slk: {
        official: 'Guam',
        common: 'Guam',
      },
      spa: {
        official: 'Guam',
        common: 'Guam',
      },
      swe: {
        official: 'Guam',
        common: 'Guam',
      },
      urd: {
        official: 'گوام',
        common: 'گوام',
      },
      zho: {
        official: '关岛',
        common: '关岛',
      },
    },
    latlng: [13.46666666, 144.78333333],
    landlocked: false,
    area: 549.0,
    demonyms: {
      eng: {
        f: 'Guamanian',
        m: 'Guamanian',
      },
    },
    flag: '\uD83C\uDDEC\uD83C\uDDFA',
    maps: {
      googleMaps: 'https://goo.gl/maps/Xfnq2i279b18cH3C9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/306001',
    },
    population: 168783,
    fifa: 'GUM',
    car: {
      signs: ['USA'],
      side: 'right',
    },
    timezones: ['UTC+10:00'],
    continents: ['Oceania'],
    flags: {
      png: 'https://flagcdn.com/w320/gu.png',
      svg: 'https://flagcdn.com/gu.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/gu.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/gu.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [13.48, 144.75],
    },
    postalCode: {
      format: '969##',
      regex: '^(969\\d{2})$',
    },
  },
  {
    name: {
      common: 'Jamaica',
      official: 'Jamaica',
      nativeName: {
        eng: {
          official: 'Jamaica',
          common: 'Jamaica',
        },
        jam: {
          official: 'Jamaica',
          common: 'Jamaica',
        },
      },
    },
    tld: ['.jm'],
    cca2: 'JM',
    ccn3: '388',
    cca3: 'JAM',
    cioc: 'JAM',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      JMD: {
        name: 'Jamaican dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+1',
      suffixes: ['876'],
    },
    capital: ['Kingston'],
    altSpellings: ['JM'],
    region: 'Americas',
    subregion: 'Caribbean',
    languages: {
      eng: 'English',
      jam: 'Jamaican Patois',
    },
    translations: {
      ara: {
        official: 'جامايكا',
        common: 'جامايكا',
      },
      ces: {
        official: 'Jamajka',
        common: 'Jamajka',
      },
      cym: {
        official: 'Jamaica',
        common: 'Jamaica',
      },
      deu: {
        official: 'Jamaika',
        common: 'Jamaika',
      },
      est: {
        official: 'Jamaica',
        common: 'Jamaica',
      },
      fin: {
        official: 'Jamaika',
        common: 'Jamaika',
      },
      fra: {
        official: 'Jamaïque',
        common: 'Jamaïque',
      },
      hrv: {
        official: 'Jamajka',
        common: 'Jamajka',
      },
      hun: {
        official: 'Jamaica',
        common: 'Jamaica',
      },
      ita: {
        official: 'Giamaica',
        common: 'Giamaica',
      },
      jpn: {
        official: 'ジャマイカ',
        common: 'ジャマイカ',
      },
      kor: {
        official: '자메이카',
        common: '자메이카',
      },
      nld: {
        official: 'Jamaica',
        common: 'Jamaica',
      },
      per: {
        official: 'جامائیکا',
        common: 'جامائیکا',
      },
      pol: {
        official: 'Jamajka',
        common: 'Jamajka',
      },
      por: {
        official: 'Jamaica',
        common: 'Jamaica',
      },
      rus: {
        official: 'Ямайка',
        common: 'Ямайка',
      },
      slk: {
        official: 'Jamajka',
        common: 'Jamajka',
      },
      spa: {
        official: 'Jamaica',
        common: 'Jamaica',
      },
      swe: {
        official: 'Jamaica',
        common: 'Jamaica',
      },
      urd: {
        official: 'جمیکا',
        common: 'جمیکا',
      },
      zho: {
        official: '牙买加',
        common: '牙买加',
      },
    },
    latlng: [18.25, -77.5],
    landlocked: false,
    area: 10991.0,
    demonyms: {
      eng: {
        f: 'Jamaican',
        m: 'Jamaican',
      },
      fra: {
        f: 'Jamaïcaine',
        m: 'Jamaïcain',
      },
    },
    flag: '\uD83C\uDDEF\uD83C\uDDF2',
    maps: {
      googleMaps: 'https://goo.gl/maps/Z8mQ6jxnRQKFwJy9A',
      openStreetMaps: 'https://www.openstreetmap.org/relation/555017',
    },
    population: 2961161,
    gini: {
      '2004': 45.5,
    },
    fifa: 'JAM',
    car: {
      signs: ['JA'],
      side: 'left',
    },
    timezones: ['UTC-05:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/jm.png',
      svg: 'https://flagcdn.com/jm.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/jm.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/jm.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-29.05, 167.97],
    },
  },
  {
    name: {
      common: 'Burkina Faso',
      official: 'Burkina Faso',
      nativeName: {
        fra: {
          official: 'République du Burkina',
          common: 'Burkina Faso',
        },
      },
    },
    tld: ['.bf'],
    cca2: 'BF',
    ccn3: '854',
    cca3: 'BFA',
    cioc: 'BUR',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      XOF: {
        name: 'West African CFA franc',
        symbol: 'Fr',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['26'],
    },
    capital: ['Ouagadougou'],
    altSpellings: ['BF'],
    region: 'Africa',
    subregion: 'Western Africa',
    languages: {
      fra: 'French',
    },
    translations: {
      ara: {
        official: 'بوركينا فاسو',
        common: 'بوركينا فاسو',
      },
      ces: {
        official: 'Burkina Faso',
        common: 'Burkina Faso',
      },
      cym: {
        official: 'Bwrcina Ffaso',
        common: 'Bwrcina Ffaso',
      },
      deu: {
        official: 'Burkina Faso',
        common: 'Burkina Faso',
      },
      est: {
        official: 'Burkina Faso',
        common: 'Burkina Faso',
      },
      fin: {
        official: 'Burkina Faso',
        common: 'Burkina Faso',
      },
      fra: {
        official: 'République du Burkina',
        common: 'Burkina Faso',
      },
      hrv: {
        official: 'Burkina Faso',
        common: 'Burkina Faso',
      },
      hun: {
        official: 'Burkina Faso',
        common: 'Burkina',
      },
      ita: {
        official: 'Burkina Faso',
        common: 'Burkina Faso',
      },
      jpn: {
        official: 'ブルキナファソ',
        common: 'ブルキナファソ',
      },
      kor: {
        official: '부르키나파소',
        common: '부르키나파소',
      },
      nld: {
        official: 'Burkina Faso',
        common: 'Burkina Faso',
      },
      per: {
        official: 'بورکینافاسو',
        common: 'بورکینافاسو',
      },
      pol: {
        official: 'Burkina Faso',
        common: 'Burkina Faso',
      },
      por: {
        official: 'Burkina Faso',
        common: 'Burkina Faso',
      },
      rus: {
        official: 'Буркина -Фасо',
        common: 'Буркина-Фасо',
      },
      slk: {
        official: 'Burkina Faso',
        common: 'Burkina Faso',
      },
      spa: {
        official: 'Burkina Faso',
        common: 'Burkina Faso',
      },
      swe: {
        official: 'Burkina Faso',
        common: 'Burkina Faso',
      },
      urd: {
        official: 'برکینا فاسو',
        common: 'برکینا فاسو',
      },
      zho: {
        official: '布基纳法索',
        common: '布基纳法索',
      },
    },
    latlng: [13.0, -2.0],
    landlocked: true,
    borders: ['BEN', 'CIV', 'GHA', 'MLI', 'NER', 'TGO'],
    area: 272967.0,
    demonyms: {
      eng: {
        f: 'Burkinabe',
        m: 'Burkinabe',
      },
      fra: {
        f: 'Burkinabée',
        m: 'Burkinabé',
      },
    },
    flag: '\uD83C\uDDE7\uD83C\uDDEB',
    maps: {
      googleMaps: 'https://goo.gl/maps/rKRmpcMbFher2ozb7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/192783',
    },
    population: 20903278,
    gini: {
      '2014': 35.3,
    },
    fifa: 'BFA',
    car: {
      signs: ['BF'],
      side: 'right',
    },
    timezones: ['UTC'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/bf.png',
      svg: 'https://flagcdn.com/bf.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/bf.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/bf.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [12.37, -1.52],
    },
  },
  {
    name: {
      common: 'Antigua and Barbuda',
      official: 'Antigua and Barbuda',
      nativeName: {
        eng: {
          official: 'Antigua and Barbuda',
          common: 'Antigua and Barbuda',
        },
      },
    },
    tld: ['.ag'],
    cca2: 'AG',
    ccn3: '028',
    cca3: 'ATG',
    cioc: 'ANT',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      XCD: {
        name: 'Eastern Caribbean dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+1',
      suffixes: ['268'],
    },
    capital: ["Saint John's"],
    altSpellings: ['AG'],
    region: 'Americas',
    subregion: 'Caribbean',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'أنتيغوا وباربودا',
        common: 'أنتيغوا وباربودا',
      },
      ces: {
        official: 'Antigua a Barbuda',
        common: 'Antigua a Barbuda',
      },
      cym: {
        official: 'Antigwa a Barbiwda',
        common: 'Antigwa a Barbiwda',
      },
      deu: {
        official: 'Antigua und Barbuda',
        common: 'Antigua und Barbuda',
      },
      est: {
        official: 'Antigua ja Barbuda',
        common: 'Antigua ja Barbuda',
      },
      fin: {
        official: 'Antigua ja Barbuda',
        common: 'Antigua ja Barbuda',
      },
      fra: {
        official: 'Antigua -et-Barbuda',
        common: 'Antigua-et-Barbuda',
      },
      hrv: {
        official: 'Antigva i Barbuda',
        common: 'Antigva i Barbuda',
      },
      hun: {
        official: 'Antigua és Barbuda',
        common: 'Antigua és Barbuda',
      },
      ita: {
        official: 'Antigua e Barbuda',
        common: 'Antigua e Barbuda',
      },
      jpn: {
        official: 'アンチグアバーブーダ',
        common: 'アンティグア・バーブーダ',
      },
      kor: {
        official: '앤티가 바부다',
        common: '앤티가 바부다',
      },
      nld: {
        official: 'Antigua en Barbuda',
        common: 'Antigua en Barbuda',
      },
      per: {
        official: 'آنتیگوا و باربودا',
        common: 'آنتیگوا و باربودا',
      },
      pol: {
        official: 'Antigua i Barbuda',
        common: 'Antigua i Barbuda',
      },
      por: {
        official: 'Antigua e Barbuda',
        common: 'Antígua e Barbuda',
      },
      rus: {
        official: 'Антигуа и Барбуда',
        common: 'Антигуа и Барбуда',
      },
      slk: {
        official: 'Antigua a Barbuda',
        common: 'Antigua a Barbuda',
      },
      spa: {
        official: 'Antigua y Barbuda',
        common: 'Antigua y Barbuda',
      },
      swe: {
        official: 'Antigua och Barbuda',
        common: 'Antigua och Barbuda',
      },
      urd: {
        official: 'اینٹیگوا و باربوڈا',
        common: 'اینٹیگوا و باربوڈا',
      },
      zho: {
        official: '安提瓜和巴布达',
        common: '安提瓜和巴布达',
      },
    },
    latlng: [17.05, -61.8],
    landlocked: false,
    area: 442.0,
    demonyms: {
      eng: {
        f: 'Antiguan, Barbudan',
        m: 'Antiguan, Barbudan',
      },
      fra: {
        f: 'Antiguaise et barbudienne',
        m: 'Antiguaise et barbudien',
      },
    },
    flag: '\uD83C\uDDE6\uD83C\uDDEC',
    maps: {
      googleMaps: 'https://goo.gl/maps/fnye4wGJ1RzC9jpX9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/536900',
    },
    population: 97928,
    fifa: 'ATG',
    car: {
      signs: ['AG'],
      side: 'left',
    },
    timezones: ['UTC-04:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/ag.png',
      svg: 'https://flagcdn.com/ag.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ag.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ag.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [17.12, -61.85],
    },
  },
  {
    name: {
      common: 'Mongolia',
      official: 'Mongolia',
      nativeName: {
        mon: {
          official: 'Монгол улс',
          common: 'Монгол улс',
        },
      },
    },
    tld: ['.mn'],
    cca2: 'MN',
    ccn3: '496',
    cca3: 'MNG',
    cioc: 'MGL',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      MNT: {
        name: 'Mongolian tögrög',
        symbol: '₮',
      },
    },
    idd: {
      root: '+9',
      suffixes: ['76'],
    },
    capital: ['Ulan Bator'],
    altSpellings: ['MN'],
    region: 'Asia',
    subregion: 'Eastern Asia',
    languages: {
      mon: 'Mongolian',
    },
    translations: {
      ara: {
        official: 'جمهورية منغوليا',
        common: 'منغوليا',
      },
      ces: {
        official: 'Stát Mongolsko',
        common: 'Mongolsko',
      },
      cym: {
        official: 'Mongolia',
        common: 'Mongolia',
      },
      deu: {
        official: 'Mongolei',
        common: 'Mongolei',
      },
      est: {
        official: 'Mongoolia',
        common: 'Mongoolia',
      },
      fin: {
        official: 'Mongolian tasavalta',
        common: 'Mongolia',
      },
      fra: {
        official: 'Mongolie',
        common: 'Mongolie',
      },
      hrv: {
        official: 'Mongolija',
        common: 'Mongolija',
      },
      hun: {
        official: 'Mongólia',
        common: 'Mongólia',
      },
      ita: {
        official: 'Mongolia',
        common: 'Mongolia',
      },
      jpn: {
        official: 'モンゴル',
        common: 'モンゴル',
      },
      kor: {
        official: '몽골',
        common: '몽골국',
      },
      nld: {
        official: 'Mongolië',
        common: 'Mongolië',
      },
      per: {
        official: 'مغولستان',
        common: 'مغولستان',
      },
      pol: {
        official: 'Mongolia',
        common: 'Mongolia',
      },
      por: {
        official: 'Mongólia',
        common: 'Mongólia',
      },
      rus: {
        official: 'Монголия',
        common: 'Монголия',
      },
      slk: {
        official: 'Mongolsko',
        common: 'Mongolsko',
      },
      spa: {
        official: 'Mongolia',
        common: 'Mongolia',
      },
      swe: {
        official: 'Mongoliet',
        common: 'Mongoliet',
      },
      urd: {
        official: 'منگولیا',
        common: 'منگولیا',
      },
      zho: {
        official: '蒙古',
        common: '蒙古',
      },
    },
    latlng: [46.0, 105.0],
    landlocked: true,
    borders: ['CHN', 'RUS'],
    area: 1564110.0,
    demonyms: {
      eng: {
        f: 'Mongolian',
        m: 'Mongolian',
      },
      fra: {
        f: 'Mongole',
        m: 'Mongol',
      },
    },
    flag: '\uD83C\uDDF2\uD83C\uDDF3',
    maps: {
      googleMaps: 'https://goo.gl/maps/A1X7bMCKThBDNjzH6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/161033',
    },
    population: 3278292,
    gini: {
      '2018': 32.7,
    },
    fifa: 'MNG',
    car: {
      signs: ['MGL'],
      side: 'right',
    },
    timezones: ['UTC+07:00', 'UTC+08:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/mn.png',
      svg: 'https://flagcdn.com/mn.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/mn.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/mn.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [47.92, 106.91],
    },
    postalCode: {
      format: '######',
      regex: '^(\\d{6})$',
    },
  },
  {
    name: {
      common: 'Benin',
      official: 'Republic of Benin',
      nativeName: {
        fra: {
          official: 'République du Bénin',
          common: 'Bénin',
        },
      },
    },
    tld: ['.bj'],
    cca2: 'BJ',
    ccn3: '204',
    cca3: 'BEN',
    cioc: 'BEN',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      XOF: {
        name: 'West African CFA franc',
        symbol: 'Fr',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['29'],
    },
    capital: ['Porto-Novo'],
    altSpellings: ['BJ', 'Republic of Benin', 'République du Bénin'],
    region: 'Africa',
    subregion: 'Western Africa',
    languages: {
      fra: 'French',
    },
    translations: {
      ara: {
        official: 'جمهورية بنين',
        common: 'بنين',
      },
      ces: {
        official: 'Beninská republika',
        common: 'Benin',
      },
      cym: {
        official: 'Gweriniaeth Benin',
        common: 'Benin',
      },
      deu: {
        official: 'Republik Benin',
        common: 'Benin',
      },
      est: {
        official: 'Benini Vabariik',
        common: 'Benin',
      },
      fin: {
        official: 'Beninin tasavalta',
        common: 'Benin',
      },
      fra: {
        official: 'République du Bénin',
        common: 'Bénin',
      },
      hrv: {
        official: 'Republika Benin',
        common: 'Benin',
      },
      hun: {
        official: 'Benini Köztársaság',
        common: 'Benin',
      },
      ita: {
        official: 'Repubblica del Benin',
        common: 'Benin',
      },
      jpn: {
        official: 'ベナン共和国',
        common: 'ベナン',
      },
      kor: {
        official: '베냉 공화국',
        common: '베냉',
      },
      nld: {
        official: 'Republiek Benin',
        common: 'Benin',
      },
      per: {
        official: 'جمهوری بنین',
        common: 'بنین',
      },
      pol: {
        official: 'Benin',
        common: 'Benin',
      },
      por: {
        official: 'República do Benin',
        common: 'Benin',
      },
      rus: {
        official: 'Республика Бенин',
        common: 'Бенин',
      },
      slk: {
        official: 'Beninská republika',
        common: 'Benin',
      },
      spa: {
        official: 'República de Benin',
        common: 'Benín',
      },
      swe: {
        official: 'Republiken Benin',
        common: 'Benin',
      },
      urd: {
        official: 'جمہوریہ بینن',
        common: 'بینن',
      },
      zho: {
        official: '贝宁共和国',
        common: '贝宁',
      },
    },
    latlng: [9.5, 2.25],
    landlocked: false,
    borders: ['BFA', 'NER', 'NGA', 'TGO'],
    area: 112622.0,
    demonyms: {
      eng: {
        f: 'Beninese',
        m: 'Beninese',
      },
      fra: {
        f: 'Béninoise',
        m: 'Béninois',
      },
    },
    flag: '\uD83C\uDDE7\uD83C\uDDEF',
    maps: {
      googleMaps: 'https://goo.gl/maps/uMw1BsHEXQYgVFFu6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/192784',
    },
    population: 12123198,
    gini: {
      '2015': 47.8,
    },
    fifa: 'BEN',
    car: {
      signs: ['DY'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/bj.png',
      svg: 'https://flagcdn.com/bj.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/bj.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/bj.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [6.48, 2.62],
    },
  },
  {
    name: {
      common: 'Indonesia',
      official: 'Republic of Indonesia',
      nativeName: {
        ind: {
          official: 'Republik Indonesia',
          common: 'Indonesia',
        },
      },
    },
    tld: ['.id'],
    cca2: 'ID',
    ccn3: '360',
    cca3: 'IDN',
    cioc: 'INA',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      IDR: {
        name: 'Indonesian rupiah',
        symbol: 'Rp',
      },
    },
    idd: {
      root: '+6',
      suffixes: ['2'],
    },
    capital: ['Jakarta'],
    altSpellings: ['ID', 'Republic of Indonesia', 'Republik Indonesia'],
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    languages: {
      ind: 'Indonesian',
    },
    translations: {
      ara: {
        official: 'جمهورية إندونيسيا',
        common: 'إندونيسيا',
      },
      ces: {
        official: 'Indonéská republika',
        common: 'Indonésie',
      },
      cym: {
        official: 'Republic of Indonesia',
        common: 'Indonesia',
      },
      deu: {
        official: 'Republik Indonesien',
        common: 'Indonesien',
      },
      est: {
        official: 'Indoneesia Vabariik',
        common: 'Indoneesia',
      },
      fin: {
        official: 'Indonesian tasavalta',
        common: 'Indonesia',
      },
      fra: {
        official: "République d'Indonésie",
        common: 'Indonésie',
      },
      hrv: {
        official: 'Republika Indonezija',
        common: 'Indonezija',
      },
      hun: {
        official: 'Indonéz Köztársaság',
        common: 'Indonézia',
      },
      ita: {
        official: 'Repubblica di Indonesia',
        common: 'Indonesia',
      },
      jpn: {
        official: 'インドネシア共和国',
        common: 'インドネシア',
      },
      kor: {
        official: '인도네시아 공화국',
        common: '인도네시아',
      },
      nld: {
        official: 'Republiek Indonesië',
        common: 'Indonesië',
      },
      per: {
        official: 'جمهوری اندونزی',
        common: 'اندونزی',
      },
      pol: {
        official: 'Republika Indonezji',
        common: 'Indonezja',
      },
      por: {
        official: 'República da Indonésia',
        common: 'Indonésia',
      },
      rus: {
        official: 'Республика Индонезия',
        common: 'Индонезия',
      },
      slk: {
        official: 'Indonézska republika',
        common: 'Indonézia',
      },
      spa: {
        official: 'República de Indonesia',
        common: 'Indonesia',
      },
      swe: {
        official: 'Republiken Indonesien',
        common: 'Indonesien',
      },
      urd: {
        official: 'جمہوریہ انڈونیشیا',
        common: 'انڈونیشیا',
      },
      zho: {
        official: '印度尼西亚共和国',
        common: '印度尼西亚',
      },
    },
    latlng: [-5.0, 120.0],
    landlocked: false,
    borders: ['TLS', 'MYS', 'PNG'],
    area: 1904569.0,
    demonyms: {
      eng: {
        f: 'Indonesian',
        m: 'Indonesian',
      },
      fra: {
        f: 'Indonésienne',
        m: 'Indonésien',
      },
    },
    flag: '\uD83C\uDDEE\uD83C\uDDE9',
    maps: {
      googleMaps: 'https://goo.gl/maps/9gfPupm5bffixiFJ6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/21335',
    },
    population: 273523621,
    gini: {
      '2019': 38.2,
    },
    fifa: 'IDN',
    car: {
      signs: ['RI'],
      side: 'left',
    },
    timezones: ['UTC+07:00', 'UTC+08:00', 'UTC+09:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/id.png',
      svg: 'https://flagcdn.com/id.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/id.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/id.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-6.17, 106.82],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Georgia',
      official: 'Georgia',
      nativeName: {
        kat: {
          official: 'საქართველო',
          common: 'საქართველო',
        },
      },
    },
    tld: ['.ge'],
    cca2: 'GE',
    ccn3: '268',
    cca3: 'GEO',
    cioc: 'GEO',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      GEL: {
        name: 'lari',
        symbol: '₾',
      },
    },
    idd: {
      root: '+9',
      suffixes: ['95'],
    },
    capital: ['Tbilisi'],
    altSpellings: ['GE', 'Sakartvelo'],
    region: 'Asia',
    subregion: 'Western Asia',
    languages: {
      kat: 'Georgian',
    },
    translations: {
      ara: {
        official: 'جورجيا',
        common: 'جورجيا',
      },
      ces: {
        official: 'Gruzie',
        common: 'Gruzie',
      },
      cym: {
        official: 'Georgia',
        common: 'Georgia',
      },
      deu: {
        official: 'Georgien',
        common: 'Georgien',
      },
      est: {
        official: 'Gruusia',
        common: 'Gruusia',
      },
      fin: {
        official: 'Georgia',
        common: 'Georgia',
      },
      fra: {
        official: 'République de Géorgie',
        common: 'Géorgie',
      },
      hrv: {
        official: 'Gruzija',
        common: 'Gruzija',
      },
      hun: {
        official: 'Grúzia',
        common: 'Grúzia',
      },
      ita: {
        official: 'Georgia',
        common: 'Georgia',
      },
      jpn: {
        official: 'グルジア',
        common: 'グルジア',
      },
      kor: {
        official: '조지아',
        common: '조지아',
      },
      nld: {
        official: 'Georgia',
        common: 'Georgië',
      },
      per: {
        official: 'گرجستان',
        common: 'گرجستان',
      },
      pol: {
        official: 'Gruzja',
        common: 'Gruzja',
      },
      por: {
        official: 'Georgia',
        common: 'Geórgia',
      },
      rus: {
        official: 'Грузия',
        common: 'Грузия',
      },
      slk: {
        official: 'Gruzínsko',
        common: 'Gruzínsko',
      },
      spa: {
        official: 'Georgia',
        common: 'Georgia',
      },
      swe: {
        official: 'Georgien',
        common: 'Georgien',
      },
      urd: {
        official: 'جارجیا',
        common: 'جارجیا',
      },
      zho: {
        official: '格鲁吉亚',
        common: '格鲁吉亚',
      },
    },
    latlng: [42.0, 43.5],
    landlocked: false,
    borders: ['ARM', 'AZE', 'RUS', 'TUR'],
    area: 69700.0,
    demonyms: {
      eng: {
        f: 'Georgian',
        m: 'Georgian',
      },
      fra: {
        f: 'Géorgienne',
        m: 'Géorgien',
      },
    },
    flag: '\uD83C\uDDEC\uD83C\uDDEA',
    maps: {
      googleMaps: 'https://goo.gl/maps/bvCaGBePR1ZEDK5cA',
      openStreetMaps: 'https://www.openstreetmap.org/relation/28699',
    },
    population: 3714000,
    gini: {
      '2019': 35.9,
    },
    fifa: 'GEO',
    car: {
      signs: ['GE'],
      side: 'right',
    },
    timezones: ['UTC-04:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/ge.png',
      svg: 'https://flagcdn.com/ge.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ge.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ge.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [41.68, 44.83],
    },
    postalCode: {
      format: '####',
      regex: '^(\\d{4})$',
    },
  },
  {
    name: {
      common: 'Albania',
      official: 'Republic of Albania',
      nativeName: {
        sqi: {
          official: 'Republika e Shqipërisë',
          common: 'Shqipëria',
        },
      },
    },
    tld: ['.al'],
    cca2: 'AL',
    ccn3: '008',
    cca3: 'ALB',
    cioc: 'ALB',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      ALL: {
        name: 'Albanian lek',
        symbol: 'L',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['55'],
    },
    capital: ['Tirana'],
    altSpellings: ['AL', 'Shqipëri', 'Shqipëria', 'Shqipnia'],
    region: 'Europe',
    subregion: 'Southeast Europe',
    languages: {
      sqi: 'Albanian',
    },
    translations: {
      ara: {
        official: 'جمهورية ألبانيا',
        common: 'ألبانيا',
      },
      ces: {
        official: 'Albánská republika',
        common: 'Albánie',
      },
      cym: {
        official: 'Gweriniaeth Albania',
        common: 'Albania',
      },
      deu: {
        official: 'Republik Albanien',
        common: 'Albanien',
      },
      est: {
        official: 'Albaania Vabariik',
        common: 'Albaania',
      },
      fin: {
        official: 'Albanian tasavalta',
        common: 'Albania',
      },
      fra: {
        official: "République d'Albanie",
        common: 'Albanie',
      },
      hrv: {
        official: 'Republika Albanija',
        common: 'Albanija',
      },
      hun: {
        official: 'Albán Köztársaság',
        common: 'Albánia',
      },
      ita: {
        official: "Repubblica d'Albania",
        common: 'Albania',
      },
      jpn: {
        official: 'アルバニア共和国',
        common: 'アルバニア',
      },
      kor: {
        official: '알바니아 공화국',
        common: '알바니아',
      },
      nld: {
        official: 'Republiek Albanië',
        common: 'Albanië',
      },
      per: {
        official: 'جمهوری آلبانی',
        common: 'آلبانی',
      },
      pol: {
        official: 'Republika Albanii',
        common: 'Albania',
      },
      por: {
        official: 'República da Albânia',
        common: 'Albânia',
      },
      rus: {
        official: 'Республика Албания',
        common: 'Албания',
      },
      slk: {
        official: 'Albánska republika',
        common: 'Albánsko',
      },
      spa: {
        official: 'República de Albania',
        common: 'Albania',
      },
      swe: {
        official: 'Republiken Albanien',
        common: 'Albanien',
      },
      urd: {
        official: 'جمہوریہ البانیا',
        common: 'البانیا',
      },
      zho: {
        official: '阿尔巴尼亚共和国',
        common: '阿尔巴尼亚',
      },
    },
    latlng: [41.0, 20.0],
    landlocked: false,
    borders: ['MNE', 'GRC', 'MKD', 'UNK'],
    area: 28748.0,
    demonyms: {
      eng: {
        f: 'Albanian',
        m: 'Albanian',
      },
      fra: {
        f: 'Albanaise',
        m: 'Albanais',
      },
    },
    flag: '\uD83C\uDDE6\uD83C\uDDF1',
    maps: {
      googleMaps: 'https://goo.gl/maps/BzN9cTuj68ZA8SyZ8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/53292',
    },
    population: 2837743,
    gini: {
      '2017': 33.2,
    },
    fifa: 'ALB',
    car: {
      signs: ['AL'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/al.png',
      svg: 'https://flagcdn.com/al.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/al.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/al.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [41.32, 19.82],
    },
  },
  {
    name: {
      common: 'Brazil',
      official: 'Federative Republic of Brazil',
      nativeName: {
        por: {
          official: 'República Federativa do Brasil',
          common: 'Brasil',
        },
      },
    },
    tld: ['.br'],
    cca2: 'BR',
    ccn3: '076',
    cca3: 'BRA',
    cioc: 'BRA',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      BRL: {
        name: 'Brazilian real',
        symbol: 'R$',
      },
    },
    idd: {
      root: '+5',
      suffixes: ['5'],
    },
    capital: ['Brasília'],
    altSpellings: ['BR', 'Brasil', 'Federative Republic of Brazil', 'República Federativa do Brasil'],
    region: 'Americas',
    subregion: 'South America',
    languages: {
      por: 'Portuguese',
    },
    translations: {
      ara: {
        official: 'جمهورية البرازيل الاتحادية',
        common: 'البرازيل',
      },
      ces: {
        official: 'Brazilská federativní republika',
        common: 'Brazílie',
      },
      cym: {
        official: 'Gweriniaeth Ffederal Brasil',
        common: 'Brasil',
      },
      deu: {
        official: 'Föderative Republik Brasilien',
        common: 'Brasilien',
      },
      est: {
        official: 'Brasiilia Liitvabariik',
        common: 'Brasiilia',
      },
      fin: {
        official: 'Brasilian liittotasavalta',
        common: 'Brasilia',
      },
      fra: {
        official: 'République fédérative du Brésil',
        common: 'Brésil',
      },
      hrv: {
        official: 'Savezne Republike Brazil',
        common: 'Brazil',
      },
      hun: {
        official: 'Brazil Szövetségi Köztársaság',
        common: 'Brazília',
      },
      ita: {
        official: 'Repubblica federativa del Brasile',
        common: 'Brasile',
      },
      jpn: {
        official: 'ブラジル連邦共和国',
        common: 'ブラジル',
      },
      kor: {
        official: '브라질 연방 공화국',
        common: '브라질',
      },
      nld: {
        official: 'Federale Republiek Brazilië',
        common: 'Brazilië',
      },
      per: {
        official: 'جمهوری فدراتیو برزیل',
        common: 'برزیل',
      },
      pol: {
        official: 'Federacyjna Republika Brazylii',
        common: 'Brazylia',
      },
      por: {
        official: 'República Federativa do Brasil',
        common: 'Brasil',
      },
      rus: {
        official: 'Федеративная Республика Бразилия',
        common: 'Бразилия',
      },
      slk: {
        official: 'Brazílska federatívna republika',
        common: 'Brazília',
      },
      spa: {
        official: 'República Federativa del Brasil',
        common: 'Brasil',
      },
      swe: {
        official: 'Förbundsrepubliken Brasilien',
        common: 'Brasilien',
      },
      urd: {
        official: 'وفاقی جمہوریہ برازیل',
        common: 'برازیل',
      },
      zho: {
        official: '巴西联邦共和国',
        common: '巴西',
      },
    },
    latlng: [-10.0, -55.0],
    landlocked: false,
    borders: ['ARG', 'BOL', 'COL', 'GUF', 'GUY', 'PRY', 'PER', 'SUR', 'URY', 'VEN'],
    area: 8515767.0,
    demonyms: {
      eng: {
        f: 'Brazilian',
        m: 'Brazilian',
      },
      fra: {
        f: 'Brésilienne',
        m: 'Brésilien',
      },
    },
    flag: '\uD83C\uDDE7\uD83C\uDDF7',
    maps: {
      googleMaps: 'https://goo.gl/maps/waCKk21HeeqFzkNC9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/59470',
    },
    population: 212559409,
    gini: {
      '2019': 53.4,
    },
    fifa: 'BRA',
    car: {
      signs: ['BR'],
      side: 'right',
    },
    timezones: ['UTC-05:00', 'UTC-04:00', 'UTC-03:00', 'UTC-02:00'],
    continents: ['South America'],
    flags: {
      png: 'https://flagcdn.com/w320/br.png',
      svg: 'https://flagcdn.com/br.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/br.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/br.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-15.79, -47.88],
    },
    postalCode: {
      format: '#####-###',
      regex: '^(\\d{8})$',
    },
  },
  {
    name: {
      common: 'Gibraltar',
      official: 'Gibraltar',
      nativeName: {
        eng: {
          official: 'Gibraltar',
          common: 'Gibraltar',
        },
      },
    },
    tld: ['.gi'],
    cca2: 'GI',
    ccn3: '292',
    cca3: 'GIB',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      GIP: {
        name: 'Gibraltar pound',
        symbol: '£',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['50'],
    },
    capital: ['Gibraltar'],
    altSpellings: ['GI'],
    region: 'Europe',
    subregion: 'Southern Europe',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'جبل طارق',
        common: 'جبل طارق',
      },
      ces: {
        official: 'Gibraltar',
        common: 'Gibraltar',
      },
      cym: {
        official: 'Gibraltar',
        common: 'Gibraltar',
      },
      deu: {
        official: 'Gibraltar',
        common: 'Gibraltar',
      },
      est: {
        official: 'Gibraltar',
        common: 'Gibraltar',
      },
      fin: {
        official: 'Gibraltar',
        common: 'Gibraltar',
      },
      fra: {
        official: 'Gibraltar',
        common: 'Gibraltar',
      },
      hrv: {
        official: 'Gibraltar',
        common: 'Gibraltar',
      },
      hun: {
        official: 'Gibraltár',
        common: 'Gibraltár',
      },
      ita: {
        official: 'Gibilterra',
        common: 'Gibilterra',
      },
      jpn: {
        official: 'ジブラルタル',
        common: 'ジブラルタル',
      },
      kor: {
        official: '지브롤터',
        common: '지브롤터',
      },
      nld: {
        official: 'Gibraltar',
        common: 'Gibraltar',
      },
      per: {
        official: 'جبل طارق',
        common: 'جبل طارق',
      },
      pol: {
        official: 'Gibraltar',
        common: 'Gibraltar',
      },
      por: {
        official: 'Gibraltar',
        common: 'Gibraltar',
      },
      rus: {
        official: 'Гибралтар',
        common: 'Гибралтар',
      },
      slk: {
        official: 'Gibraltár',
        common: 'Gibraltár',
      },
      spa: {
        official: 'Gibraltar',
        common: 'Gibraltar',
      },
      swe: {
        official: 'Gibraltar',
        common: 'Gibraltar',
      },
      urd: {
        official: 'جبل الطارق',
        common: 'جبل الطارق',
      },
      zho: {
        official: '直布罗陀',
        common: '直布罗陀',
      },
    },
    latlng: [36.13333333, -5.35],
    landlocked: false,
    borders: ['ESP'],
    area: 6.0,
    demonyms: {
      eng: {
        f: 'Gibraltar',
        m: 'Gibraltar',
      },
      fra: {
        f: 'Gibraltarienne',
        m: 'Gibraltarien',
      },
    },
    flag: '\uD83C\uDDEC\uD83C\uDDEE',
    maps: {
      googleMaps: 'https://goo.gl/maps/CEoHAs1t6byCBhHFA',
      openStreetMaps: 'https://www.openstreetmap.org/relation/1278736',
    },
    population: 33691,
    fifa: 'GIB',
    car: {
      signs: ['GBZ'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/gi.png',
      svg: 'https://flagcdn.com/gi.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/gi.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/gi.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [36.13, -5.35],
    },
  },
  {
    name: {
      common: 'Saint Vincent and the Grenadines',
      official: 'Saint Vincent and the Grenadines',
      nativeName: {
        eng: {
          official: 'Saint Vincent and the Grenadines',
          common: 'Saint Vincent and the Grenadines',
        },
      },
    },
    tld: ['.vc'],
    cca2: 'VC',
    ccn3: '670',
    cca3: 'VCT',
    cioc: 'VIN',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      XCD: {
        name: 'Eastern Caribbean dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+1',
      suffixes: ['784'],
    },
    capital: ['Kingstown'],
    altSpellings: ['VC'],
    region: 'Americas',
    subregion: 'Caribbean',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'سانت فينسنت والغرينادين',
        common: 'سانت فينسنت والغرينادين',
      },
      ces: {
        official: 'Svatý Vincenc a Grenadiny',
        common: 'Svatý Vincenc a Grenadiny',
      },
      cym: {
        official: 'Saint Vincent and the Grenadines',
        common: 'Saint Vincent and the Grenadines',
      },
      deu: {
        official: 'St. Vincent und die Grenadinen',
        common: 'St. Vincent und die Grenadinen',
      },
      est: {
        official: 'Saint Vincent ja Grenadiinid',
        common: 'Saint Vincent',
      },
      fin: {
        official: 'Saint Vincent ja Grenadiinit',
        common: 'Saint Vincent ja Grenadiinit',
      },
      fra: {
        official: 'Saint-Vincent-et-les Grenadines',
        common: 'Saint-Vincent-et-les-Grenadines',
      },
      hrv: {
        official: 'Sveti Vincent i Grenadini',
        common: 'Sveti Vincent i Grenadini',
      },
      hun: {
        official: 'Saint Vincent és a Grenadine-szigetek',
        common: 'Saint Vincent és a Grenadine-szigetek',
      },
      ita: {
        official: 'Saint Vincent e Grenadine',
        common: 'Saint Vincent e Grenadine',
      },
      jpn: {
        official: 'セントビンセントおよびグレナディーン諸島',
        common: 'セントビンセントおよびグレナディーン諸島',
      },
      kor: {
        official: '세인트빈센트 그레나딘',
        common: '세인트빈센트 그레나딘',
      },
      nld: {
        official: 'Saint Vincent en de Grenadines',
        common: 'Saint Vincent en de Grenadines',
      },
      per: {
        official: 'سنت وینسنت و گرنادین‌ها',
        common: 'سنت وینسنت و گرنادین‌ها',
      },
      pol: {
        official: 'Saint Vincent i Grenadyny',
        common: 'Saint Vincent i Grenadyny',
      },
      por: {
        official: 'São Vicente e Granadinas',
        common: 'São Vincente e Granadinas',
      },
      rus: {
        official: 'Сент-Винсент и Гренадины',
        common: 'Сент-Винсент и Гренадины',
      },
      slk: {
        official: 'Svätý Vincent a Grenadíny',
        common: 'Svätý Vincent a Grenadíny',
      },
      spa: {
        official: 'San Vicente y las Granadinas',
        common: 'San Vicente y Granadinas',
      },
      swe: {
        official: 'Saint Vincent och Grenadinerna',
        common: 'Saint Vincent och Grenadinerna',
      },
      urd: {
        official: 'سینٹ وینسینٹ و گریناڈائنز',
        common: 'سینٹ وینسینٹ و گریناڈائنز',
      },
      zho: {
        official: '圣文森特和格林纳丁斯',
        common: '圣文森特和格林纳丁斯',
      },
    },
    latlng: [13.25, -61.2],
    landlocked: false,
    area: 389.0,
    demonyms: {
      eng: {
        f: 'Saint Vincentian',
        m: 'Saint Vincentian',
      },
      fra: {
        f: 'Vincentaise',
        m: 'Vincentais',
      },
    },
    flag: '\uD83C\uDDFB\uD83C\uDDE8',
    maps: {
      googleMaps: 'https://goo.gl/maps/wMbnMqjG37FMnrwf7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/550725',
    },
    population: 110947,
    fifa: 'VIN',
    car: {
      signs: ['WV'],
      side: 'left',
    },
    timezones: ['UTC-04:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/vc.png',
      svg: 'https://flagcdn.com/vc.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/vc.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/vc.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [13.13, -61.22],
    },
  },
  {
    name: {
      common: 'Iran',
      official: 'Islamic Republic of Iran',
      nativeName: {
        fas: {
          official: 'جمهوری اسلامی ایران',
          common: 'ایران',
        },
      },
    },
    tld: ['.ir', 'ایران.'],
    cca2: 'IR',
    ccn3: '364',
    cca3: 'IRN',
    cioc: 'IRI',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      IRR: {
        name: 'Iranian rial',
        symbol: '﷼',
      },
    },
    idd: {
      root: '+9',
      suffixes: ['8'],
    },
    capital: ['Tehran'],
    altSpellings: ['IR', 'Islamic Republic of Iran', 'Iran, Islamic Republic of', 'Jomhuri-ye Eslāmi-ye Irān'],
    region: 'Asia',
    subregion: 'Southern Asia',
    languages: {
      fas: 'Persian (Farsi)',
    },
    translations: {
      ara: {
        official: 'جمهورية إيران الإسلامية',
        common: 'إيران',
      },
      ces: {
        official: 'Islámská republika Írán',
        common: 'Írán',
      },
      cym: {
        official: 'Islamic Republic of Iran',
        common: 'Iran',
      },
      deu: {
        official: 'Islamische Republik Iran',
        common: 'Iran',
      },
      est: {
        official: 'Iraani Islamivabariik',
        common: 'Iraan',
      },
      fin: {
        official: 'Iranin islamilainen tasavalta',
        common: 'Iran',
      },
      fra: {
        official: "République islamique d'Iran",
        common: 'Iran',
      },
      hrv: {
        official: 'Islamska Republika Iran',
        common: 'Iran',
      },
      hun: {
        official: 'Iráni Iszlám Köztársaság',
        common: 'Irán',
      },
      ita: {
        official: "Repubblica islamica dell'Iran",
        common: 'Iran',
      },
      jpn: {
        official: 'イラン·イスラム共和国',
        common: 'イラン・イスラム共和国',
      },
      kor: {
        official: '이란 이슬람 공화국',
        common: '이란',
      },
      nld: {
        official: 'Islamitische Republiek Iran',
        common: 'Iran',
      },
      pol: {
        official: 'Islamska Republika Iranu',
        common: 'Iran',
      },
      por: {
        official: 'República Islâmica do Irã',
        common: 'Irão',
      },
      rus: {
        official: 'Исламская Республика Иран',
        common: 'Иран',
      },
      slk: {
        official: 'Iránska islamská republika',
        common: 'Irán',
      },
      spa: {
        official: 'República Islámica de Irán',
        common: 'Iran',
      },
      swe: {
        official: 'Islamiska republiken Iran',
        common: 'Iran',
      },
      urd: {
        official: 'جمہوریہ ایران',
        common: 'ایران',
      },
      zho: {
        official: '伊朗伊斯兰共和国',
        common: '伊朗',
      },
    },
    latlng: [32.0, 53.0],
    landlocked: false,
    borders: ['AFG', 'ARM', 'AZE', 'IRQ', 'PAK', 'TUR', 'TKM'],
    area: 1648195.0,
    demonyms: {
      eng: {
        f: 'Iranian',
        m: 'Iranian',
      },
      fra: {
        f: 'Iranienne',
        m: 'Iranien',
      },
    },
    flag: '\uD83C\uDDEE\uD83C\uDDF7',
    maps: {
      googleMaps: 'https://goo.gl/maps/dMgEGuacBPGYQnjY7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/304938',
    },
    population: 83992953,
    gini: {
      '2018': 42.0,
    },
    fifa: 'IRN',
    car: {
      signs: ['IR'],
      side: 'right',
    },
    timezones: ['UTC+03:30'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/ir.png',
      svg: 'https://flagcdn.com/ir.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ir.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ir.svg',
    },
    startOfWeek: 'turday',
    capitalInfo: {
      latlng: [35.7, 51.42],
    },
    postalCode: {
      format: '##########',
      regex: '^(\\d{10})$',
    },
  },
  {
    name: {
      common: 'Portugal',
      official: 'Portuguese Republic',
      nativeName: {
        por: {
          official: 'República português',
          common: 'Portugal',
        },
      },
    },
    tld: ['.pt'],
    cca2: 'PT',
    ccn3: '620',
    cca3: 'PRT',
    cioc: 'POR',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['51'],
    },
    capital: ['Lisbon'],
    altSpellings: ['PT', 'Portuguesa', 'Portuguese Republic', 'República Portuguesa'],
    region: 'Europe',
    subregion: 'Southern Europe',
    languages: {
      por: 'Portuguese',
    },
    translations: {
      ara: {
        official: 'الجمهورية البرتغالية',
        common: 'البرتغال',
      },
      ces: {
        official: 'Portugalská republika',
        common: 'Portugalsko',
      },
      cym: {
        official: 'Portuguese Republic',
        common: 'Portugal',
      },
      deu: {
        official: 'Portugiesische Republik',
        common: 'Portugal',
      },
      est: {
        official: 'Portugali Vabariik',
        common: 'Portugal',
      },
      fin: {
        official: 'Portugalin tasavalta',
        common: 'Portugali',
      },
      fra: {
        official: 'République portugaise',
        common: 'Portugal',
      },
      hrv: {
        official: 'Portugalska Republika',
        common: 'Portugal',
      },
      hun: {
        official: 'Portugál Köztársaság',
        common: 'Portugália',
      },
      ita: {
        official: 'Repubblica portoghese',
        common: 'Portogallo',
      },
      jpn: {
        official: 'ポルトガル共和国',
        common: 'ポルトガル',
      },
      kor: {
        official: '포르투갈 공화국',
        common: '포르투갈',
      },
      nld: {
        official: 'Portugese Republiek',
        common: 'Portugal',
      },
      per: {
        official: 'جمهوری پرتغال',
        common: 'پرتغال',
      },
      pol: {
        official: 'Republika Portugalska',
        common: 'Portugalia',
      },
      por: {
        official: 'República português',
        common: 'Portugal',
      },
      rus: {
        official: 'Португальская Республика',
        common: 'Португалия',
      },
      slk: {
        official: 'Portugalská republika',
        common: 'Portugalsko',
      },
      spa: {
        official: 'República Portuguesa',
        common: 'Portugal',
      },
      swe: {
        official: 'Republiken Portugal',
        common: 'Portugal',
      },
      urd: {
        official: 'جمہوریہ پرتگال',
        common: 'پرتگال',
      },
      zho: {
        official: '葡萄牙共和国',
        common: '葡萄牙',
      },
    },
    latlng: [39.5, -8.0],
    landlocked: false,
    borders: ['ESP'],
    area: 92090.0,
    demonyms: {
      eng: {
        f: 'Portuguese',
        m: 'Portuguese',
      },
      fra: {
        f: 'Portugaise',
        m: 'Portugais',
      },
    },
    flag: '\uD83C\uDDF5\uD83C\uDDF9',
    maps: {
      googleMaps: 'https://goo.gl/maps/BaTBSyc4GWMmbAKB8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/295480',
    },
    population: 10305564,
    gini: {
      '2018': 33.5,
    },
    fifa: 'POR',
    car: {
      signs: ['P'],
      side: 'right',
    },
    timezones: ['UTC-01:00', 'UTC'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/pt.png',
      svg: 'https://flagcdn.com/pt.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/pt.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/pt.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [38.72, -9.13],
    },
    postalCode: {
      format: '####-###',
      regex: '^(\\d{7})$',
    },
  },
  {
    name: {
      common: 'Cameroon',
      official: 'Republic of Cameroon',
      nativeName: {
        eng: {
          official: 'Republic of Cameroon',
          common: 'Cameroon',
        },
        fra: {
          official: 'République du Cameroun',
          common: 'Cameroun',
        },
      },
    },
    tld: ['.cm'],
    cca2: 'CM',
    ccn3: '120',
    cca3: 'CMR',
    cioc: 'CMR',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      XAF: {
        name: 'Central African CFA franc',
        symbol: 'Fr',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['37'],
    },
    capital: ['Yaoundé'],
    altSpellings: ['CM', 'Republic of Cameroon', 'République du Cameroun'],
    region: 'Africa',
    subregion: 'Middle Africa',
    languages: {
      eng: 'English',
      fra: 'French',
    },
    translations: {
      ara: {
        official: 'جمهورية الكاميرون',
        common: 'الكاميرون',
      },
      ces: {
        official: 'Kamerunská republika',
        common: 'Kamerun',
      },
      cym: {
        official: 'Gweriniaeth Camerŵn',
        common: 'Camerŵn',
      },
      deu: {
        official: 'Republik Kamerun',
        common: 'Kamerun',
      },
      est: {
        official: 'Kameruni Vabariik',
        common: 'Kamerun',
      },
      fin: {
        official: 'Kamerunin tasavalta',
        common: 'Kamerun',
      },
      fra: {
        official: 'République du Cameroun',
        common: 'Cameroun',
      },
      hrv: {
        official: 'Republika Kamerun',
        common: 'Kamerun',
      },
      hun: {
        official: 'Kameruni Köztársaság',
        common: 'Kamerun',
      },
      ita: {
        official: 'Repubblica del Camerun',
        common: 'Camerun',
      },
      jpn: {
        official: 'カメルーン共和国',
        common: 'カメルーン',
      },
      kor: {
        official: '카메룬 공화국',
        common: '카메룬',
      },
      nld: {
        official: 'Republiek Kameroen',
        common: 'Kameroen',
      },
      per: {
        official: 'جمهوری کامِرون',
        common: 'کامِرون',
      },
      pol: {
        official: 'Republika WybrzeŻa Kości Słoniowej',
        common: 'WybrzeŻe Kości Słoniowej',
      },
      por: {
        official: 'República dos Camarões',
        common: 'Camarões',
      },
      rus: {
        official: 'Республика Камерун',
        common: 'Камерун',
      },
      slk: {
        official: 'Kamerunská republika',
        common: 'Kamerun',
      },
      spa: {
        official: 'República de Camerún',
        common: 'Camerún',
      },
      swe: {
        official: 'Republiken Kamerun',
        common: 'Kamerun',
      },
      urd: {
        official: 'جمہوریہ کیمرون',
        common: 'کیمرون',
      },
      zho: {
        official: '喀麦隆共和国',
        common: '喀麦隆',
      },
    },
    latlng: [6.0, 12.0],
    landlocked: false,
    borders: ['CAF', 'TCD', 'COG', 'GNQ', 'GAB', 'NGA'],
    area: 475442.0,
    demonyms: {
      eng: {
        f: 'Cameroonian',
        m: 'Cameroonian',
      },
      fra: {
        f: 'Camerounaise',
        m: 'Camerounais',
      },
    },
    flag: '\uD83C\uDDE8\uD83C\uDDF2',
    maps: {
      googleMaps: 'https://goo.gl/maps/JqiipHgFboG3rBJh9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/192830',
    },
    population: 26545864,
    gini: {
      '2014': 46.6,
    },
    fifa: 'CMR',
    car: {
      signs: ['CAM'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/cm.png',
      svg: 'https://flagcdn.com/cm.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/cm.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/cm.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [3.85, 11.5],
    },
  },
  {
    name: {
      common: 'Dominica',
      official: 'Commonwealth of Dominica',
      nativeName: {
        eng: {
          official: 'Commonwealth of Dominica',
          common: 'Dominica',
        },
      },
    },
    tld: ['.dm'],
    cca2: 'DM',
    ccn3: '212',
    cca3: 'DMA',
    cioc: 'DMA',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      XCD: {
        name: 'Eastern Caribbean dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+1',
      suffixes: ['767'],
    },
    capital: ['Roseau'],
    altSpellings: ['DM', 'Dominique', 'Wai‘tu kubuli', 'Commonwealth of Dominica'],
    region: 'Americas',
    subregion: 'Caribbean',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'كومونولث دومينيكا',
        common: 'دومينيكا',
      },
      ces: {
        official: 'Dominikánské společenství',
        common: 'Dominika',
      },
      cym: {
        official: 'Cymanwlad Dominica',
        common: 'Dominica',
      },
      deu: {
        official: 'Commonwealth von Dominica',
        common: 'Dominica',
      },
      est: {
        official: 'Dominica Ühendus',
        common: 'Dominica',
      },
      fin: {
        official: 'Dominican liittovaltio',
        common: 'Dominica',
      },
      fra: {
        official: 'Commonwealth de la Dominique',
        common: 'Dominique',
      },
      hrv: {
        official: 'Zajednica Dominika',
        common: 'Dominika',
      },
      hun: {
        official: 'Dominikai Közösség',
        common: 'Dominikai Közösség',
      },
      ita: {
        official: 'Commonwealth di Dominica',
        common: 'Dominica',
      },
      jpn: {
        official: 'ドミニカ国',
        common: 'ドミニカ国',
      },
      kor: {
        official: '도미니카 공화국',
        common: '도미니카 공화국',
      },
      nld: {
        official: 'Gemenebest Dominica',
        common: 'Dominica',
      },
      per: {
        official: 'قلمرو همسود دومینیکا',
        common: 'دومینیکا',
      },
      pol: {
        official: 'Wspólnota Dominiki',
        common: 'Dominika',
      },
      por: {
        official: 'Comunidade da Dominica',
        common: 'Dominica',
      },
      rus: {
        official: 'Содружество Доминики',
        common: 'Доминика',
      },
      slk: {
        official: 'Dominické spoločenstvo',
        common: 'Dominika',
      },
      spa: {
        official: 'Mancomunidad de Dominica',
        common: 'Dominica',
      },
      swe: {
        official: 'Samväldet Dominica',
        common: 'Dominica',
      },
      urd: {
        official: 'دولتِ مشترکہ ڈومینیکا',
        common: 'ڈومینیکا',
      },
      zho: {
        official: '多米尼加共和国',
        common: '多米尼加',
      },
    },
    latlng: [15.41666666, -61.33333333],
    landlocked: false,
    area: 751.0,
    demonyms: {
      eng: {
        f: 'Dominican',
        m: 'Dominican',
      },
      fra: {
        f: 'Dominiquaise',
        m: 'Dominiquais',
      },
    },
    flag: '\uD83C\uDDE9\uD83C\uDDF2',
    maps: {
      googleMaps: 'https://goo.gl/maps/HSKdHYpFC8oHHuyV7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/307823',
    },
    population: 71991,
    fifa: 'DMA',
    car: {
      signs: ['WD'],
      side: 'left',
    },
    timezones: ['UTC-04:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/dm.png',
      svg: 'https://flagcdn.com/dm.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/dm.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/dm.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [15.3, -61.4],
    },
  },
  {
    name: {
      common: 'Nigeria',
      official: 'Federal Republic of Nigeria',
      nativeName: {
        eng: {
          official: 'Federal Republic of Nigeria',
          common: 'Nigeria',
        },
      },
    },
    tld: ['.ng'],
    cca2: 'NG',
    ccn3: '566',
    cca3: 'NGA',
    cioc: 'NGR',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      NGN: {
        name: 'Nigerian naira',
        symbol: '₦',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['34'],
    },
    capital: ['Abuja'],
    altSpellings: ['NG', 'Nijeriya', 'Naíjíríà', 'Federal Republic of Nigeria'],
    region: 'Africa',
    subregion: 'Western Africa',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'جمهورية نيجيريا الاتحادية',
        common: 'نيجيريا',
      },
      ces: {
        official: 'Nigerijská federativní republika',
        common: 'Nigérie',
      },
      cym: {
        official: 'Federal Republic of Nigeria',
        common: 'Nigeria',
      },
      deu: {
        official: 'Bundesrepublik Nigeria',
        common: 'Nigeria',
      },
      est: {
        official: 'Nigeeria Liitvabariik',
        common: 'Nigeeria',
      },
      fin: {
        official: 'Nigerian liittotasavalta',
        common: 'Nigeria',
      },
      fra: {
        official: 'République fédérale du Nigeria',
        common: 'Nigéria',
      },
      hrv: {
        official: 'Savezna Republika Nigerija',
        common: 'Nigerija',
      },
      hun: {
        official: 'Nigéria',
        common: 'Nigéria',
      },
      ita: {
        official: 'Repubblica federale di Nigeria',
        common: 'Nigeria',
      },
      jpn: {
        official: 'ナイジェリア連邦共和国',
        common: 'ナイジェリア',
      },
      kor: {
        official: '나이지리아 연방 공화국',
        common: '나이지리아',
      },
      nld: {
        official: 'Federale Republiek Nigeria',
        common: 'Nigeria',
      },
      per: {
        official: 'جمهوری فدرال نیجریه',
        common: 'نیجریه',
      },
      pol: {
        official: 'Federalna Republika Nigerii',
        common: 'Nigeria',
      },
      por: {
        official: 'República Federal da Nigéria',
        common: 'Nigéria',
      },
      rus: {
        official: 'Федеративная Республика Нигерия',
        common: 'Нигерия',
      },
      slk: {
        official: 'Nigérijská federatívna republika',
        common: 'Nigéria',
      },
      spa: {
        official: 'República Federal de Nigeria',
        common: 'Nigeria',
      },
      swe: {
        official: 'Förbundsrepubliken Nigeria',
        common: 'Nigeria',
      },
      urd: {
        official: 'وفاقی جمہوریہ نائجیریا',
        common: 'نائجیریا',
      },
      zho: {
        official: '尼日利亚联邦共和国',
        common: '尼日利亚',
      },
    },
    latlng: [10.0, 8.0],
    landlocked: false,
    borders: ['BEN', 'CMR', 'TCD', 'NER'],
    area: 923768.0,
    demonyms: {
      eng: {
        f: 'Nigerian',
        m: 'Nigerian',
      },
      fra: {
        f: 'Nigériane',
        m: 'Nigérian',
      },
    },
    flag: '\uD83C\uDDF3\uD83C\uDDEC',
    maps: {
      googleMaps: 'https://goo.gl/maps/LTn417qWwBPFszuV9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/192787',
    },
    population: 206139587,
    gini: {
      '2018': 35.1,
    },
    fifa: 'NGA',
    car: {
      signs: ['WAN'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/ng.png',
      svg: 'https://flagcdn.com/ng.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ng.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ng.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [9.08, 7.53],
    },
    postalCode: {
      format: '######',
      regex: '^(\\d{6})$',
    },
  },
  {
    name: {
      common: 'South Korea',
      official: 'Republic of Korea',
      nativeName: {
        kor: {
          official: '대한민국',
          common: '한국',
        },
      },
    },
    tld: ['.kr', '.한국'],
    cca2: 'KR',
    ccn3: '410',
    cca3: 'KOR',
    cioc: 'KOR',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      KRW: {
        name: 'South Korean won',
        symbol: '₩',
      },
    },
    idd: {
      root: '+8',
      suffixes: ['2'],
    },
    capital: ['Seoul'],
    altSpellings: ['KR', 'Korea, Republic of', 'Republic of Korea', '남한', '남조선'],
    region: 'Asia',
    subregion: 'Eastern Asia',
    languages: {
      kor: 'Korean',
    },
    translations: {
      ara: {
        official: 'جمهورية كوريا',
        common: 'كوريا الجنوبية',
      },
      ces: {
        official: 'Korejská republika',
        common: 'Jižní Korea',
      },
      cym: {
        official: 'Republic of Korea',
        common: 'South Korea',
      },
      deu: {
        official: 'Republik Korea',
        common: 'Südkorea',
      },
      est: {
        official: 'Korea Vabariik',
        common: 'Lõuna-Korea',
      },
      fin: {
        official: 'Korean tasavalta',
        common: 'Etelä-Korea',
      },
      fra: {
        official: 'République de Corée',
        common: 'Corée du Sud',
      },
      hrv: {
        official: 'Republika Koreja',
        common: 'Južna Koreja',
      },
      hun: {
        official: 'Koreai Köztársaság',
        common: 'Dél-Korea',
      },
      ita: {
        official: 'Repubblica di Corea',
        common: 'Corea del Sud',
      },
      jpn: {
        official: '大韓民国',
        common: '韓国',
      },
      kor: {
        official: '대한민국',
        common: '한국',
      },
      nld: {
        official: 'Republiek Korea',
        common: 'Zuid-Korea',
      },
      per: {
        official: 'جمهوری کره',
        common: 'کرهٔ جنوبی',
      },
      pol: {
        official: 'Republika Korei',
        common: 'Korea Południowa',
      },
      por: {
        official: 'República da Coreia',
        common: 'Coreia do Sul',
      },
      rus: {
        official: 'Республика Корея',
        common: 'Южная Корея',
      },
      slk: {
        official: 'Kórejská republika',
        common: 'Južná Kórea',
      },
      spa: {
        official: 'República de Corea',
        common: 'Corea del Sur',
      },
      swe: {
        official: 'Republiken Korea',
        common: 'Sydkorea',
      },
      urd: {
        official: 'جمہوریہ کوریا ',
        common: 'جنوبی کوریا',
      },
      zho: {
        official: '大韩民国',
        common: '韩国',
      },
    },
    latlng: [37.0, 127.5],
    landlocked: false,
    borders: ['PRK'],
    area: 100210.0,
    demonyms: {
      eng: {
        f: 'South Korean',
        m: 'South Korean',
      },
      fra: {
        f: 'Sud-coréenne',
        m: 'Sud-coréen',
      },
    },
    flag: '\uD83C\uDDF0\uD83C\uDDF7',
    maps: {
      googleMaps: 'https://goo.gl/maps/7ecjaJXefjAQhxjGA',
      openStreetMaps: 'https://www.openstreetmap.org/relation/307756',
    },
    population: 51780579,
    gini: {
      '2016': 31.4,
    },
    fifa: 'KOR',
    car: {
      signs: ['ROK'],
      side: 'right',
    },
    timezones: ['UTC+09:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/kr.png',
      svg: 'https://flagcdn.com/kr.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/kr.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/kr.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [37.55, 126.98],
    },
    postalCode: {
      format: 'SEOUL ###-###',
      regex: '^(?:SEOUL)*(\\d{6})$',
    },
  },
  {
    name: {
      common: 'Angola',
      official: 'Republic of Angola',
      nativeName: {
        por: {
          official: 'República de Angola',
          common: 'Angola',
        },
      },
    },
    tld: ['.ao'],
    cca2: 'AO',
    ccn3: '024',
    cca3: 'AGO',
    cioc: 'ANG',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      AOA: {
        name: 'Angolan kwanza',
        symbol: 'Kz',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['44'],
    },
    capital: ['Luanda'],
    altSpellings: ['AO', 'República de Angola', "ʁɛpublika de an'ɡɔla"],
    region: 'Africa',
    subregion: 'Middle Africa',
    languages: {
      por: 'Portuguese',
    },
    translations: {
      ara: {
        official: 'أنغولا',
        common: 'جمهورية أنغولا',
      },
      ces: {
        official: 'Angolská republika',
        common: 'Angola',
      },
      cym: {
        official: 'Gweriniaeth Angola',
        common: 'Angola',
      },
      deu: {
        official: 'Republik Angola',
        common: 'Angola',
      },
      est: {
        official: 'Angola Vabariik',
        common: 'Angola',
      },
      fin: {
        official: 'Angolan tasavalta',
        common: 'Angola',
      },
      fra: {
        official: "République d'Angola",
        common: 'Angola',
      },
      hrv: {
        official: 'Republika Angola',
        common: 'Angola',
      },
      hun: {
        official: 'Angola',
        common: 'Angola',
      },
      ita: {
        official: "Repubblica dell'Angola",
        common: 'Angola',
      },
      jpn: {
        official: 'アンゴラ共和国',
        common: 'アンゴラ',
      },
      kor: {
        official: '앙골라 공화국',
        common: '앙골라',
      },
      nld: {
        official: 'Republiek Angola',
        common: 'Angola',
      },
      per: {
        official: 'جمهوری آنگولا',
        common: 'آنگولا',
      },
      pol: {
        official: 'Republika Angoli',
        common: 'Angola',
      },
      por: {
        official: 'República de Angola',
        common: 'Angola',
      },
      rus: {
        official: 'Республика Ангола',
        common: 'Ангола',
      },
      slk: {
        official: 'Angolská republika',
        common: 'Angola',
      },
      spa: {
        official: 'República de Angola',
        common: 'Angola',
      },
      swe: {
        official: 'Republiken Angola',
        common: 'Angola',
      },
      urd: {
        official: 'جمہوریہ انگولہ',
        common: 'انگولہ',
      },
      zho: {
        official: '安哥拉共和国',
        common: '安哥拉',
      },
    },
    latlng: [-12.5, 18.5],
    landlocked: false,
    borders: ['COG', 'COD', 'ZMB', 'NAM'],
    area: 1246700.0,
    demonyms: {
      eng: {
        f: 'Angolan',
        m: 'Angolan',
      },
      fra: {
        f: 'Angolaise',
        m: 'Angolais',
      },
    },
    flag: '\uD83C\uDDE6\uD83C\uDDF4',
    maps: {
      googleMaps: 'https://goo.gl/maps/q42Qbf1BmQL3fuZg9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/195267',
    },
    population: 32866268,
    gini: {
      '2018': 51.3,
    },
    fifa: 'ANG',
    car: {
      signs: ['ANG'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/ao.png',
      svg: 'https://flagcdn.com/ao.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ao.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ao.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-8.83, 13.22],
    },
  },
  {
    name: {
      common: 'Comoros',
      official: 'Union of the Comoros',
      nativeName: {
        ara: {
          official: 'الاتحاد القمري',
          common: 'القمر‎',
        },
        fra: {
          official: 'Union des Comores',
          common: 'Comores',
        },
        zdj: {
          official: 'Udzima wa Komori',
          common: 'Komori',
        },
      },
    },
    tld: ['.km'],
    cca2: 'KM',
    ccn3: '174',
    cca3: 'COM',
    cioc: 'COM',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      KMF: {
        name: 'Comorian franc',
        symbol: 'Fr',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['69'],
    },
    capital: ['Moroni'],
    altSpellings: ['KM', 'Union of the Comoros', 'Union des Comores', 'Udzima wa Komori', 'al-Ittiḥād al-Qumurī'],
    region: 'Africa',
    subregion: 'Eastern Africa',
    languages: {
      ara: 'Arabic',
      fra: 'French',
      zdj: 'Comorian',
    },
    translations: {
      ara: {
        official: 'الإتحاد القمري',
        common: 'جزر القمر',
      },
      ces: {
        official: 'Komorský svaz',
        common: 'Komory',
      },
      cym: {
        official: 'Undeb y Comoros',
        common: 'Y Comoros',
      },
      deu: {
        official: 'Union der Komoren',
        common: 'Komoren',
      },
      est: {
        official: 'Komoori Liit',
        common: 'Komoorid',
      },
      fin: {
        official: 'Komorien liitto',
        common: 'Komorit',
      },
      fra: {
        official: 'Union des Comores',
        common: 'Comores',
      },
      hrv: {
        official: 'Savez Komori',
        common: 'Komori',
      },
      hun: {
        official: 'Comore-szigeteki Unió',
        common: 'Comore-szigetek',
      },
      ita: {
        official: 'Unione delle Comore',
        common: 'Comore',
      },
      jpn: {
        official: 'コモロ連合',
        common: 'コモロ',
      },
      kor: {
        official: '코모로 연방',
        common: '코모로',
      },
      nld: {
        official: 'Unie van de Comoren',
        common: 'Comoren',
      },
      per: {
        official: 'مجمع‌الجزایر قمر',
        common: 'اتحاد قُمُر',
      },
      pol: {
        official: 'Związek Komorów',
        common: 'Komory',
      },
      por: {
        official: 'União das Comores',
        common: 'Comores',
      },
      rus: {
        official: 'Союз Коморских Островов',
        common: 'Коморы',
      },
      slk: {
        official: 'Komorská únia',
        common: 'Komory',
      },
      spa: {
        official: 'Unión de las Comoras',
        common: 'Comoras',
      },
      swe: {
        official: 'Unionen Komorerna',
        common: 'Komorerna',
      },
      urd: {
        official: 'اتحاد القمری',
        common: 'القمری',
      },
      zho: {
        official: '科摩罗联盟',
        common: '科摩罗',
      },
    },
    latlng: [-12.16666666, 44.25],
    landlocked: false,
    area: 1862.0,
    demonyms: {
      eng: {
        f: 'Comoran',
        m: 'Comoran',
      },
      fra: {
        f: 'Comorienne',
        m: 'Comorien',
      },
    },
    flag: '\uD83C\uDDF0\uD83C\uDDF2',
    maps: {
      googleMaps: 'https://goo.gl/maps/eas4GP28C1GyStnu6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/535790',
    },
    population: 869595,
    gini: {
      '2014': 45.3,
    },
    fifa: 'COM',
    car: {
      signs: ['COM'],
      side: 'right',
    },
    timezones: ['UTC+03:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/km.png',
      svg: 'https://flagcdn.com/km.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/km.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/km.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-11.7, 43.23],
    },
  },
  {
    name: {
      common: 'Greece',
      official: 'Hellenic Republic',
      nativeName: {
        ell: {
          official: 'Ελληνική Δημοκρατία',
          common: 'Ελλάδα',
        },
      },
    },
    tld: ['.gr'],
    cca2: 'GR',
    ccn3: '300',
    cca3: 'GRC',
    cioc: 'GRE',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['0'],
    },
    capital: ['Athens'],
    altSpellings: ['GR', 'Elláda', 'Hellenic Republic', 'Ελληνική Δημοκρατία'],
    region: 'Europe',
    subregion: 'Southern Europe',
    languages: {
      ell: 'Greek',
    },
    translations: {
      ara: {
        official: 'الجمهورية الهيلينية',
        common: 'اليونان',
      },
      ces: {
        official: 'Řecká republika',
        common: 'Řecko',
      },
      cym: {
        official: 'Hellenic Republic',
        common: 'Greece',
      },
      deu: {
        official: 'Hellenische Republik',
        common: 'Griechenland',
      },
      est: {
        official: 'Kreeka Vabariik',
        common: 'Kreeka',
      },
      fin: {
        official: 'Helleenien tasavalta',
        common: 'Kreikka',
      },
      fra: {
        official: 'République hellénique',
        common: 'Grèce',
      },
      hrv: {
        official: 'Helenska Republika',
        common: 'Grčka',
      },
      hun: {
        official: 'Görög Köztársaság',
        common: 'Görögország',
      },
      ita: {
        official: 'Repubblica ellenica',
        common: 'Grecia',
      },
      jpn: {
        official: 'ギリシャ共和国',
        common: 'ギリシャ',
      },
      kor: {
        official: '그리스 공화국',
        common: '그리스',
      },
      nld: {
        official: 'Helleense Republiek',
        common: 'Griekenland',
      },
      per: {
        official: 'جمهوری یونان',
        common: 'یونان',
      },
      pol: {
        official: 'Republika Grecka',
        common: 'Grecja',
      },
      por: {
        official: 'República Helénica',
        common: 'Grécia',
      },
      rus: {
        official: 'Греческая Республика',
        common: 'Греция',
      },
      slk: {
        official: 'Grécka republika',
        common: 'Greécko',
      },
      spa: {
        official: 'República Helénica',
        common: 'Grecia',
      },
      swe: {
        official: 'Republiken Grekland',
        common: 'Grekland',
      },
      urd: {
        official: 'جمہوریہ ہیلینیہ',
        common: 'یونان',
      },
      zho: {
        official: '希腊共和国',
        common: '希腊',
      },
    },
    latlng: [39.0, 22.0],
    landlocked: false,
    borders: ['ALB', 'BGR', 'TUR', 'MKD'],
    area: 131990.0,
    demonyms: {
      eng: {
        f: 'Greek',
        m: 'Greek',
      },
      fra: {
        f: 'Grecque',
        m: 'Grec',
      },
    },
    flag: '\uD83C\uDDEC\uD83C\uDDF7',
    maps: {
      googleMaps: 'https://goo.gl/maps/LHGcAvuRyD2iKECC6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/192307',
    },
    population: 10715549,
    gini: {
      '2018': 32.9,
    },
    fifa: 'GRE',
    car: {
      signs: ['GR'],
      side: 'right',
    },
    timezones: ['UTC+02:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/gr.png',
      svg: 'https://flagcdn.com/gr.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/gr.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/gr.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [37.98, 23.73],
    },
    postalCode: {
      format: '### ##',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Belgium',
      official: 'Kingdom of Belgium',
      nativeName: {
        deu: {
          official: 'Königreich Belgien',
          common: 'Belgien',
        },
        fra: {
          official: 'Royaume de Belgique',
          common: 'Belgique',
        },
        nld: {
          official: 'Koninkrijk België',
          common: 'België',
        },
      },
    },
    tld: ['.be'],
    cca2: 'BE',
    ccn3: '056',
    cca3: 'BEL',
    cioc: 'BEL',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['2'],
    },
    capital: ['Brussels'],
    altSpellings: [
      'BE',
      'België',
      'Belgie',
      'Belgien',
      'Belgique',
      'Kingdom of Belgium',
      'Koninkrijk België',
      'Royaume de Belgique',
      'Königreich Belgien',
    ],
    region: 'Europe',
    subregion: 'Western Europe',
    languages: {
      deu: 'German',
      fra: 'French',
      nld: 'Dutch',
    },
    translations: {
      ara: {
        official: 'مملكة بلجيكا',
        common: 'بلجيكا',
      },
      ces: {
        official: 'Belgické království',
        common: 'Belgie',
      },
      cym: {
        official: 'Teyrnas Gwlad Belg',
        common: 'Gwlad Belg',
      },
      deu: {
        official: 'Königreich Belgien',
        common: 'Belgien',
      },
      est: {
        official: 'Belgia Kuningriik',
        common: 'Belgia',
      },
      fin: {
        official: 'Belgian kuningaskunta',
        common: 'Belgia',
      },
      fra: {
        official: 'Royaume de Belgique',
        common: 'Belgique',
      },
      hrv: {
        official: 'Kraljevina Belgija',
        common: 'Belgija',
      },
      hun: {
        official: 'Belga Királyság',
        common: 'Belgium',
      },
      ita: {
        official: 'Regno del Belgio',
        common: 'Belgio',
      },
      jpn: {
        official: 'ベルギー王国',
        common: 'ベルギー',
      },
      kor: {
        official: '벨기에 왕국',
        common: '벨기에',
      },
      nld: {
        official: 'Koninkrijk België',
        common: 'België',
      },
      per: {
        official: 'پادشاهی بلژیک',
        common: 'بلژیک',
      },
      pol: {
        official: 'Królestwo Belgii',
        common: 'Belgia',
      },
      por: {
        official: 'Reino da Bélgica',
        common: 'Bélgica',
      },
      rus: {
        official: 'Королевство Бельгия',
        common: 'Бельгия',
      },
      slk: {
        official: 'Belgické kráľovstvo',
        common: 'Belgicko',
      },
      spa: {
        official: 'Reino de Bélgica',
        common: 'Bélgica',
      },
      swe: {
        official: 'Konungariket Belgien',
        common: 'Belgien',
      },
      urd: {
        official: 'مملکتِ بلجئیم',
        common: 'بلجئیم',
      },
      zho: {
        official: '比利时王国',
        common: '比利时',
      },
    },
    latlng: [50.83333333, 4.0],
    landlocked: false,
    borders: ['FRA', 'DEU', 'LUX', 'NLD'],
    area: 30528.0,
    demonyms: {
      eng: {
        f: 'Belgian',
        m: 'Belgian',
      },
      fra: {
        f: 'Belge',
        m: 'Belge',
      },
    },
    flag: '\uD83C\uDDE7\uD83C\uDDEA',
    maps: {
      googleMaps: 'https://goo.gl/maps/UQQzat85TCtPRXAL8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/52411',
    },
    population: 11555997,
    gini: {
      '2018': 27.2,
    },
    fifa: 'BEL',
    car: {
      signs: ['B'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/be.png',
      svg: 'https://flagcdn.com/be.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/be.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/be.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [50.83, 4.33],
    },
    postalCode: {
      format: '####',
      regex: '^(\\d{4})$',
    },
  },
  {
    name: {
      common: 'Puerto Rico',
      official: 'Commonwealth of Puerto Rico',
      nativeName: {
        eng: {
          official: 'Commonwealth of Puerto Rico',
          common: 'Puerto Rico',
        },
        spa: {
          official: 'Estado Libre Asociado de Puerto Rico',
          common: 'Puerto Rico',
        },
      },
    },
    tld: ['.pr'],
    cca2: 'PR',
    ccn3: '630',
    cca3: 'PRI',
    cioc: 'PUR',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      USD: {
        name: 'United States dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+1',
      suffixes: ['787', '939'],
    },
    capital: ['San Juan'],
    altSpellings: ['PR', 'Commonwealth of Puerto Rico', 'Estado Libre Asociado de Puerto Rico'],
    region: 'Americas',
    subregion: 'Caribbean',
    languages: {
      eng: 'English',
      spa: 'Spanish',
    },
    translations: {
      ara: {
        official: 'كومنولث بويرتوريكو',
        common: 'بويرتوريكو',
      },
      ces: {
        official: 'Portoriko',
        common: 'Portoriko',
      },
      cym: {
        official: 'Commonwealth of Puerto Rico',
        common: 'Puerto Rico',
      },
      deu: {
        official: 'Freistaat Puerto Rico',
        common: 'Puerto Rico',
      },
      est: {
        official: 'Puerto Rico Ühendus',
        common: 'Puerto Rico',
      },
      fin: {
        official: 'Puerto Rico',
        common: 'Puerto Rico',
      },
      fra: {
        official: 'Porto Rico',
        common: 'Porto Rico',
      },
      hrv: {
        official: 'Zajednica Puerto Rico',
        common: 'Portoriko',
      },
      hun: {
        official: 'Puerto Rico',
        common: 'Puerto Rico',
      },
      ita: {
        official: 'Commonwealth di Porto Rico',
        common: 'Porto Rico',
      },
      jpn: {
        official: 'プエルトリコのコモンウェルス',
        common: 'プエルトリコ',
      },
      kor: {
        official: '푸에르토리코',
        common: '푸에르토리코',
      },
      nld: {
        official: 'Gemenebest van Puerto Rico',
        common: 'Puerto Rico',
      },
      per: {
        official: 'قلمرو همسود پورتوریکو',
        common: 'پورتوریکو',
      },
      pol: {
        official: 'Wolne Stowarzyszone Państwo Portoryko',
        common: 'Portoryko',
      },
      por: {
        official: 'Commonwealth of Puerto Rico',
        common: 'Porto Rico',
      },
      rus: {
        official: 'Содружество Пуэрто-Рико',
        common: 'Пуэрто-Рико',
      },
      slk: {
        official: 'Portorické spoločenstvo',
        common: 'Portoriko',
      },
      spa: {
        official: 'Asociado de Puerto Rico',
        common: 'Puerto Rico',
      },
      swe: {
        official: 'Puerto Rico',
        common: 'Puerto Rico',
      },
      urd: {
        official: ' دولتِ مشترکہ پورٹو ریکو',
        common: 'پورٹو ریکو',
      },
      zho: {
        official: '波多黎各联邦',
        common: '波多黎各',
      },
    },
    latlng: [18.25, -66.5],
    landlocked: false,
    area: 8870.0,
    demonyms: {
      eng: {
        f: 'Puerto Rican',
        m: 'Puerto Rican',
      },
      fra: {
        f: 'Portoricaine',
        m: 'Portoricain',
      },
    },
    flag: '\uD83C\uDDF5\uD83C\uDDF7',
    maps: {
      googleMaps: 'https://goo.gl/maps/sygfDbtwn389wu8x5',
      openStreetMaps: 'https://www.openstreetmap.org/relation/4422604',
    },
    population: 3194034,
    fifa: 'PUR',
    car: {
      signs: ['USA'],
      side: 'right',
    },
    timezones: ['UTC-04:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/pr.png',
      svg: 'https://flagcdn.com/pr.svg',
    },
    coatOfArms: {},
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [18.47, -66.12],
    },
    postalCode: {
      format: '#####-####',
      regex: '^(\\d{9})$',
    },
  },
  {
    name: {
      common: 'Republic of the Congo',
      official: 'Republic of the Congo',
      nativeName: {
        fra: {
          official: 'République du Congo',
          common: 'République du Congo',
        },
        kon: {
          official: 'Repubilika ya Kongo',
          common: 'Repubilika ya Kongo',
        },
        lin: {
          official: 'Republíki ya Kongó',
          common: 'Republíki ya Kongó',
        },
      },
    },
    tld: ['.cg'],
    cca2: 'CG',
    ccn3: '178',
    cca3: 'COG',
    cioc: 'CGO',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      XAF: {
        name: 'Central African CFA franc',
        symbol: 'Fr',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['42'],
    },
    capital: ['Brazzaville'],
    altSpellings: ['CG', 'Congo', 'Congo-Brazzaville'],
    region: 'Africa',
    subregion: 'Middle Africa',
    languages: {
      fra: 'French',
      kon: 'Kikongo',
      lin: 'Lingala',
    },
    translations: {
      ara: {
        official: 'جمهورية الكونغو',
        common: 'جمهورية الكونفو',
      },
      ces: {
        official: 'Konžská republika',
        common: 'Kongo',
      },
      cym: {
        official: 'Gweriniaeth y Congo',
        common: 'Gweriniaeth y Congo',
      },
      deu: {
        official: 'Republik Kongo',
        common: 'Kongo',
      },
      est: {
        official: 'Kongo Vabariik',
        common: 'Kongo Vabariik',
      },
      fin: {
        official: 'Kongon tasavalta',
        common: 'Kongo-Brazzaville',
      },
      fra: {
        official: 'République du Congo',
        common: 'Congo',
      },
      hrv: {
        official: 'Republika Kongo',
        common: 'Kongo',
      },
      hun: {
        official: 'Kongói Köztársaság',
        common: 'Kongói Köztársaság',
      },
      ita: {
        official: 'Repubblica del Congo',
        common: 'Congo',
      },
      jpn: {
        official: 'コンゴ共和国',
        common: 'コンゴ共和国',
      },
      kor: {
        official: '콩고',
        common: '콩고',
      },
      nld: {
        official: 'Republiek Congo',
        common: 'Congo',
      },
      per: {
        official: 'جمهوری برازاویل کُنگو',
        common: 'جمهوری کُنگو',
      },
      pol: {
        official: 'Republika Konga',
        common: 'Kongo',
      },
      por: {
        official: 'República do Congo',
        common: 'Congo',
      },
      rus: {
        official: 'Республика Конго',
        common: 'Республика Конго',
      },
      slk: {
        official: 'Konžská republika',
        common: 'Kongo',
      },
      spa: {
        official: 'República del Congo',
        common: 'Congo',
      },
      swe: {
        official: 'Republiken Kongo',
        common: 'Kongo-Brazzaville',
      },
      urd: {
        official: 'جمہوریہ کانگو',
        common: 'جمہوریہ کانگو',
      },
      zho: {
        official: '刚果共和国',
        common: '刚果',
      },
    },
    latlng: [-1.0, 15.0],
    landlocked: false,
    borders: ['AGO', 'CMR', 'CAF', 'COD', 'GAB'],
    area: 342000.0,
    demonyms: {
      eng: {
        f: 'Congolese',
        m: 'Congolese',
      },
      fra: {
        f: 'Congolaise',
        m: 'Congolais',
      },
    },
    flag: '\uD83C\uDDE8\uD83C\uDDEC',
    maps: {
      googleMaps: 'https://goo.gl/maps/Phf5dDDKdfCtuBTb6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/192794',
    },
    population: 89561404,
    gini: {
      '2011': 48.9,
    },
    fifa: 'CGO',
    car: {
      signs: ['RCB'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/cg.png',
      svg: 'https://flagcdn.com/cg.svg',
    },
    coatOfArms: {},
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-4.25, 15.28],
    },
  },
  {
    name: {
      common: 'Barbados',
      official: 'Barbados',
      nativeName: {
        eng: {
          official: 'Barbados',
          common: 'Barbados',
        },
      },
    },
    tld: ['.bb'],
    cca2: 'BB',
    ccn3: '052',
    cca3: 'BRB',
    cioc: 'BAR',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      BBD: {
        name: 'Barbadian dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+1',
      suffixes: ['246'],
    },
    capital: ['Bridgetown'],
    altSpellings: ['BB'],
    region: 'Americas',
    subregion: 'Caribbean',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'باربادوس',
        common: 'باربادوس',
      },
      ces: {
        official: 'Barbados',
        common: 'Barbados',
      },
      cym: {
        official: 'Barbados',
        common: 'Barbados',
      },
      deu: {
        official: 'Barbados',
        common: 'Barbados',
      },
      est: {
        official: 'Barbados',
        common: 'Barbados',
      },
      fin: {
        official: 'Barbados',
        common: 'Barbados',
      },
      fra: {
        official: 'Barbade',
        common: 'Barbade',
      },
      hrv: {
        official: 'Barbados',
        common: 'Barbados',
      },
      hun: {
        official: 'Barbados',
        common: 'Barbados',
      },
      ita: {
        official: 'Barbados',
        common: 'Barbados',
      },
      jpn: {
        official: 'バルバドス',
        common: 'バルバドス',
      },
      kor: {
        official: '바베이도스',
        common: '바베이도스',
      },
      nld: {
        official: 'Barbados',
        common: 'Barbados',
      },
      per: {
        official: 'باربادوس',
        common: 'باربادوس',
      },
      pol: {
        official: 'Barbados',
        common: 'Barbados',
      },
      por: {
        official: 'Barbados',
        common: 'Barbados',
      },
      rus: {
        official: 'Барбадос',
        common: 'Барбадос',
      },
      slk: {
        official: 'Barbados',
        common: 'Barbados',
      },
      spa: {
        official: 'Barbados',
        common: 'Barbados',
      },
      swe: {
        official: 'Barbados',
        common: 'Barbados',
      },
      urd: {
        official: 'بارباڈوس',
        common: 'بارباڈوس',
      },
      zho: {
        official: '巴巴多斯',
        common: '巴巴多斯',
      },
    },
    latlng: [13.16666666, -59.53333333],
    landlocked: false,
    area: 430.0,
    demonyms: {
      eng: {
        f: 'Barbadian',
        m: 'Barbadian',
      },
      fra: {
        f: 'Barbadienne',
        m: 'Barbadien',
      },
    },
    flag: '\uD83C\uDDE7\uD83C\uDDE7',
    maps: {
      googleMaps: 'https://goo.gl/maps/2m36v8STvbGAWd9c7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/547511',
    },
    population: 287371,
    fifa: 'BRB',
    car: {
      signs: ['BDS'],
      side: 'left',
    },
    timezones: ['UTC-04:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/bb.png',
      svg: 'https://flagcdn.com/bb.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/bb.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/bb.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [13.1, -59.62],
    },
    postalCode: {
      format: 'BB#####',
      regex: '^(?:BB)*(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Antarctica',
      official: 'Antarctica',
    },
    tld: ['.aq'],
    cca2: 'AQ',
    ccn3: '010',
    cca3: 'ATA',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    idd: {},
    altSpellings: ['AQ'],
    region: 'Antarctic',
    translations: {
      ara: {
        official: 'أنتارتيكا',
        common: 'أنتارتيكا',
      },
      ces: {
        official: 'Antarktida',
        common: 'Antarktida',
      },
      cym: {
        official: 'Yr Antarctig',
        common: 'Yr Antarctig',
      },
      deu: {
        official: 'Antarktika',
        common: 'Antarktis',
      },
      est: {
        official: 'Antarktika',
        common: 'Antarktika',
      },
      fin: {
        official: 'Etelämanner',
        common: 'Etelämanner',
      },
      fra: {
        official: 'Antarctique',
        common: 'Antarctique',
      },
      hrv: {
        official: 'Antarktika',
        common: 'Antarktika',
      },
      hun: {
        official: 'Antarktisz',
        common: 'Antarktisz',
      },
      ita: {
        official: 'Antartide',
        common: 'Antartide',
      },
      jpn: {
        official: '南極大陸',
        common: '南極',
      },
      kor: {
        official: '남극',
        common: '남극',
      },
      nld: {
        official: 'Antarctica',
        common: 'Antarctica',
      },
      per: {
        official: 'جنوبگان',
        common: 'جنوبگان',
      },
      pol: {
        official: 'Antarktyka',
        common: 'Antarktyka',
      },
      por: {
        official: 'Antártica',
        common: 'Antártida',
      },
      rus: {
        official: 'Антарктида',
        common: 'Антарктида',
      },
      slk: {
        official: 'Antarktída',
        common: 'Antarktída',
      },
      spa: {
        official: 'Antártida',
        common: 'Antártida',
      },
      swe: {
        official: 'Antarktis',
        common: 'Antarktis',
      },
      urd: {
        official: 'انٹارکٹکا',
        common: 'انٹارکٹکا',
      },
      zho: {
        official: '南极洲',
        common: '南极洲',
      },
    },
    latlng: [-90.0, 0.0],
    landlocked: false,
    area: 1.4e7,
    demonyms: {
      eng: {
        f: 'Antarctican',
        m: 'Antarctican',
      },
      fra: {
        f: 'Antarcticaine',
        m: 'Antarcticain',
      },
    },
    flag: '\uD83C\uDDE6\uD83C\uDDF6',
    maps: {
      googleMaps: 'https://goo.gl/maps/kyBuJriu4itiXank7',
      openStreetMaps: 'https://www.openstreetmap.org/node/36966060',
    },
    population: 1000,
    car: {
      signs: [''],
      side: 'right',
    },
    timezones: ['UTC-03:00', 'UTC+03:00', 'UTC+05:00', 'UTC+06:00', 'UTC+07:00', 'UTC+08:00', 'UTC+10:00', 'UTC+12:00'],
    continents: ['Antarctica'],
    flags: {
      png: 'https://flagcdn.com/w320/aq.png',
      svg: 'https://flagcdn.com/aq.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/aq.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/aq.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {},
  },
  {
    name: {
      common: 'Equatorial Guinea',
      official: 'Republic of Equatorial Guinea',
      nativeName: {
        fra: {
          official: 'République de la Guinée Équatoriale',
          common: 'Guinée équatoriale',
        },
        por: {
          official: 'República da Guiné Equatorial',
          common: 'Guiné Equatorial',
        },
        spa: {
          official: 'República de Guinea Ecuatorial',
          common: 'Guinea Ecuatorial',
        },
      },
    },
    tld: ['.gq'],
    cca2: 'GQ',
    ccn3: '226',
    cca3: 'GNQ',
    cioc: 'GEQ',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      XAF: {
        name: 'Central African CFA franc',
        symbol: 'Fr',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['40'],
    },
    capital: ['Malabo'],
    altSpellings: [
      'GQ',
      'Republic of Equatorial Guinea',
      'República de Guinea Ecuatorial',
      'République de Guinée équatoriale',
      'República da Guiné Equatorial',
    ],
    region: 'Africa',
    subregion: 'Middle Africa',
    languages: {
      fra: 'French',
      por: 'Portuguese',
      spa: 'Spanish',
    },
    translations: {
      ara: {
        official: 'جمهورية غينيا الاستوائية',
        common: 'غينيا الاستوائية',
      },
      ces: {
        official: 'Republika Rovníková Guinea',
        common: 'Rovníková Guinea',
      },
      cym: {
        official: 'Gweriniaeth Gini Gyhydeddol',
        common: 'Gini Gyhydeddol',
      },
      deu: {
        official: 'Republik Äquatorialguinea',
        common: 'Äquatorialguinea',
      },
      est: {
        official: 'Ekvatoriaal-Guinea Vabariik',
        common: 'Ekvatoriaal-Guinea',
      },
      fin: {
        official: 'Päiväntasaajan Guinean tasavalta',
        common: 'Päiväntasaajan Guinea',
      },
      fra: {
        official: 'République de Guinée équatoriale',
        common: 'Guinée équatoriale',
      },
      hrv: {
        official: 'Republika Ekvatorska Gvineja',
        common: 'Ekvatorijalna Gvineja',
      },
      hun: {
        official: 'Egyenlítői-Guinea-i Köztársaság',
        common: 'Egyenlítői-Guinea',
      },
      ita: {
        official: 'Repubblica della Guinea Equatoriale',
        common: 'Guinea Equatoriale',
      },
      jpn: {
        official: '赤道ギニア共和国',
        common: '赤道ギニア',
      },
      kor: {
        official: '적도 기니 공화국',
        common: '적도 기니',
      },
      nld: {
        official: 'Republiek Equatoriaal-Guinea',
        common: 'Equatoriaal-Guinea',
      },
      per: {
        official: 'جمهوری گینه استوایی',
        common: 'گینه استوایی',
      },
      pol: {
        official: 'Republika Gwinei Równikowej',
        common: 'Gwinea Równikowa',
      },
      por: {
        official: 'República da Guiné Equatorial',
        common: 'Guiné Equatorial',
      },
      rus: {
        official: 'Республика Экваториальная Гвинея',
        common: 'Экваториальная Гвинея',
      },
      slk: {
        official: 'Republika rovníkovej Guiney',
        common: 'Rovníková Guinea',
      },
      spa: {
        official: 'República de Guinea Ecuatorial',
        common: 'Guinea Ecuatorial',
      },
      swe: {
        official: 'Republiken Ekvatorialguinea',
        common: 'Ekvatorialguinea',
      },
      urd: {
        official: 'جمہوریہ استوائی گنی',
        common: 'استوائی گنی',
      },
      zho: {
        official: '赤道几内亚共和国',
        common: '赤道几内亚',
      },
    },
    latlng: [2.0, 10.0],
    landlocked: false,
    borders: ['CMR', 'GAB'],
    area: 28051.0,
    demonyms: {
      eng: {
        f: 'Equatorial Guinean',
        m: 'Equatorial Guinean',
      },
      fra: {
        f: 'Équato-guinéenne',
        m: 'Équato-guinéen',
      },
    },
    flag: '\uD83C\uDDEC\uD83C\uDDF6',
    maps: {
      googleMaps: 'https://goo.gl/maps/ucWfFd8aW1FbGMva9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/192791',
    },
    population: 1402985,
    fifa: 'EQG',
    car: {
      signs: ['GQ'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/gq.png',
      svg: 'https://flagcdn.com/gq.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/gq.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/gq.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [3.75, 8.78],
    },
  },
  {
    name: {
      common: 'Thailand',
      official: 'Kingdom of Thailand',
      nativeName: {
        tha: {
          official: 'ราชอาณาจักรไทย',
          common: 'ประเทศไทย',
        },
      },
    },
    tld: ['.th', '.ไทย'],
    cca2: 'TH',
    ccn3: '764',
    cca3: 'THA',
    cioc: 'THA',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      THB: {
        name: 'Thai baht',
        symbol: '฿',
      },
    },
    idd: {
      root: '+6',
      suffixes: ['6'],
    },
    capital: ['Bangkok'],
    altSpellings: ['TH', 'Prathet', 'Thai', 'Kingdom of Thailand', 'ราชอาณาจักรไทย', 'Ratcha Anachak Thai'],
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    languages: {
      tha: 'Thai',
    },
    translations: {
      ara: {
        official: 'مملكة تايلند',
        common: 'تايلند',
      },
      ces: {
        official: 'Thajské království',
        common: 'Thajsko',
      },
      cym: {
        official: 'Kingdom of Thailand',
        common: 'Thailand',
      },
      deu: {
        official: 'Königreich Thailand',
        common: 'Thailand',
      },
      est: {
        official: 'Tai Kuningriik',
        common: 'Tai',
      },
      fin: {
        official: 'Thaimaan kuningaskunta',
        common: 'Thaimaa',
      },
      fra: {
        official: 'Royaume de Thaïlande',
        common: 'Thaïlande',
      },
      hrv: {
        official: 'Kraljevina Tajland',
        common: 'Tajland',
      },
      hun: {
        official: 'Thaiföldi Királyság',
        common: 'Thaiföld',
      },
      ita: {
        official: 'Regno di Thailandia',
        common: 'Tailandia',
      },
      jpn: {
        official: 'タイ王国',
        common: 'タイ',
      },
      kor: {
        official: '타이 왕국',
        common: '태국',
      },
      nld: {
        official: 'Koninkrijk Thailand',
        common: 'Thailand',
      },
      per: {
        official: 'پادشاهی تایلند',
        common: 'تایلند',
      },
      pol: {
        official: 'Królestwo Tajlandii',
        common: 'Tajlandia',
      },
      por: {
        official: 'Reino da Tailândia',
        common: 'Tailândia',
      },
      rus: {
        official: 'Королевство Таиланд',
        common: 'Таиланд',
      },
      slk: {
        official: 'Thajské kráľovstvo',
        common: 'Thajsko',
      },
      spa: {
        official: 'Reino de Tailandia',
        common: 'Tailandia',
      },
      swe: {
        official: 'Konungariket Thailand',
        common: 'Thailand',
      },
      urd: {
        official: 'مملکتِ تھائی لینڈ',
        common: 'تھائی لینڈ',
      },
      zho: {
        official: '泰王国',
        common: '泰国',
      },
    },
    latlng: [15.0, 100.0],
    landlocked: false,
    borders: ['MMR', 'KHM', 'LAO', 'MYS'],
    area: 513120.0,
    demonyms: {
      eng: {
        f: 'Thai',
        m: 'Thai',
      },
      fra: {
        f: 'Thaïlandaise',
        m: 'Thaïlandais',
      },
    },
    flag: '\uD83C\uDDF9\uD83C\uDDED',
    maps: {
      googleMaps: 'https://goo.gl/maps/qeU6uqsfW4nCCwzw9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/2067731',
    },
    population: 69799978,
    gini: {
      '2019': 34.9,
    },
    fifa: 'THA',
    car: {
      signs: ['T'],
      side: 'left',
    },
    timezones: ['UTC+07:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/th.png',
      svg: 'https://flagcdn.com/th.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/th.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/th.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [13.75, 100.52],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Christmas Island',
      official: 'Territory of Christmas Island',
      nativeName: {
        eng: {
          official: 'Territory of Christmas Island',
          common: 'Christmas Island',
        },
      },
    },
    tld: ['.cx'],
    cca2: 'CX',
    ccn3: '162',
    cca3: 'CXR',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      AUD: {
        name: 'Australian dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+6',
      suffixes: ['1'],
    },
    capital: ['Flying Fish Cove'],
    altSpellings: ['CX', 'Territory of Christmas Island'],
    region: 'Oceania',
    subregion: 'Australia and New Zealand',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'جزيرة كريسماس',
        common: 'جزيرة كريسماس',
      },
      ces: {
        official: 'Teritorium Vánočního ostrova',
        common: 'Vánoční ostrov',
      },
      cym: {
        official: 'Tiriogaeth yr Ynys y Nadolig',
        common: 'Ynys y Nadolig',
      },
      deu: {
        official: 'Gebiet der Weihnachtsinsel',
        common: 'Weihnachtsinsel',
      },
      est: {
        official: 'Jõulusaare ala',
        common: 'Jõulusaar',
      },
      fin: {
        official: 'Joulusaaren alue',
        common: 'Joulusaari',
      },
      fra: {
        official: "Territoire de l'île Christmas",
        common: 'Île Christmas',
      },
      hrv: {
        official: 'Teritorij Božićni otok',
        common: 'Božićni otok',
      },
      hun: {
        official: 'Karácsony-sziget',
        common: 'Karácsony-sziget',
      },
      ita: {
        official: 'Territorio di Christmas Island',
        common: 'Isola di Natale',
      },
      jpn: {
        official: 'クリスマス島の領土',
        common: 'クリスマス島',
      },
      kor: {
        official: '크리스마스 섬',
        common: '크리스마스 섬',
      },
      nld: {
        official: 'Grondgebied van Christmas Island',
        common: 'Christmaseiland',
      },
      per: {
        official: 'جزیرهٔ کریسمس',
        common: 'جزیرهٔ کریسمس',
      },
      pol: {
        official: 'Wyspa Bożego Narodzenia',
        common: 'Wyspa Bożego Narodzenia',
      },
      por: {
        official: 'Território da Ilha Christmas',
        common: 'Ilha do Natal',
      },
      rus: {
        official: 'Территория острова Рождества',
        common: 'Остров Рождества',
      },
      slk: {
        official: 'Teritórium Vianočného ostrova',
        common: 'Vianočnú ostrov',
      },
      spa: {
        official: 'Territorio de la Isla de Navidad',
        common: 'Isla de Navidad',
      },
      swe: {
        official: 'Julön',
        common: 'Julön',
      },
      urd: {
        official: 'ریاستِ جزیرہ کرسمس',
        common: 'جزیرہ کرسمس',
      },
      zho: {
        official: '圣诞岛',
        common: '圣诞岛',
      },
    },
    latlng: [-10.5, 105.66666666],
    landlocked: false,
    area: 135.0,
    demonyms: {
      eng: {
        f: 'Christmas Islander',
        m: 'Christmas Islander',
      },
    },
    flag: '\uD83C\uDDE8\uD83C\uDDFD',
    maps: {
      googleMaps: 'https://goo.gl/maps/ZC17hHsQZpShN5wk9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/6365444',
    },
    population: 2072,
    car: {
      signs: ['AUS'],
      side: 'left',
    },
    timezones: ['UTC+07:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/cx.png',
      svg: 'https://flagcdn.com/cx.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/cx.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/cx.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-10.42, 105.68],
    },
    postalCode: {
      format: '####',
      regex: '^(\\d{4})$',
    },
  },
  {
    name: {
      common: 'Guinea-Bissau',
      official: 'Republic of Guinea-Bissau',
      nativeName: {
        por: {
          official: 'República da Guiné-Bissau',
          common: 'Guiné-Bissau',
        },
        pov: {
          official: 'República da Guiné-Bissau',
          common: 'Guiné-Bissau',
        },
      },
    },
    tld: ['.gw'],
    cca2: 'GW',
    ccn3: '624',
    cca3: 'GNB',
    cioc: 'GBS',
    independent: true,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      XOF: {
        name: 'West African CFA franc',
        symbol: 'Fr',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['45'],
    },
    capital: ['Bissau'],
    altSpellings: ['GW', 'Republic of Guinea-Bissau', 'República da Guiné-Bissau'],
    region: 'Africa',
    subregion: 'Western Africa',
    languages: {
      por: 'Portuguese',
      pov: 'Upper Guinea Creole',
    },
    translations: {
      ara: {
        official: 'جمهورية غينيا بيساو',
        common: 'غينيا بيساو',
      },
      ces: {
        official: 'Republika Guinea-Bissau',
        common: 'Guinea-Bissau',
      },
      cym: {
        official: 'Republic of Guinea-Bissau',
        common: 'Guinea-Bissau',
      },
      deu: {
        official: 'Republik Guinea-Bissau',
        common: 'Guinea-Bissau',
      },
      est: {
        official: 'Guinea-Bissau Vabariik',
        common: 'Guinea-Bissau',
      },
      fin: {
        official: 'Guinea-Bissaun tasavalta',
        common: 'Guinea-Bissau',
      },
      fra: {
        official: 'République de Guinée-Bissau',
        common: 'Guinée-Bissau',
      },
      hrv: {
        official: 'Republika Gvineja Bisau',
        common: 'Gvineja Bisau',
      },
      hun: {
        official: 'Bissau-Guineai Köztársaság',
        common: 'Bissau-Guinea',
      },
      ita: {
        official: 'Repubblica di Guinea-Bissau',
        common: 'Guinea-Bissau',
      },
      jpn: {
        official: 'ギニアビサウ共和国',
        common: 'ギニアビサウ',
      },
      kor: {
        official: '기니비사우 공화국',
        common: '기니비사우',
      },
      nld: {
        official: 'Republiek Guinee-Bissau',
        common: 'Guinee-Bissau',
      },
      per: {
        official: 'جمهوری گینه بیسائو',
        common: 'گینه بیسائو',
      },
      pol: {
        official: 'Republika Gwinei Bissau',
        common: 'Gwinea Bissau',
      },
      por: {
        official: 'República da Guiné-Bissau',
        common: 'Guiné-Bissau',
      },
      rus: {
        official: 'Республика Гвинея -Бисау',
        common: 'Гвинея-Бисау',
      },
      slk: {
        official: 'Guinejsko-bissauská republika',
        common: 'Guinea-Bissau',
      },
      spa: {
        official: 'República de Guinea-Bissau',
        common: 'Guinea-Bisáu',
      },
      swe: {
        official: 'Republiken Guinea-Bissau',
        common: 'Guinea-Bissau',
      },
      urd: {
        official: 'جمہوریہ گنی بساؤ',
        common: 'گنی بساؤ',
      },
      zho: {
        official: '几内亚比绍共和国',
        common: '几内亚比绍',
      },
    },
    latlng: [12.0, -15.0],
    landlocked: false,
    borders: ['GIN', 'SEN'],
    area: 36125.0,
    demonyms: {
      eng: {
        f: 'Guinea-Bissauan',
        m: 'Guinea-Bissauan',
      },
      fra: {
        f: 'Bissau-Guinéenne',
        m: 'Bissau-Guinéen',
      },
    },
    flag: '\uD83C\uDDEC\uD83C\uDDFC',
    maps: {
      googleMaps: 'https://goo.gl/maps/5Wyaz17miUc1zLc67',
      openStreetMaps: 'https://www.openstreetmap.org/relation/192776',
    },
    population: 1967998,
    gini: {
      '2010': 50.7,
    },
    fifa: 'GNB',
    car: {
      signs: ['RGB'],
      side: 'right',
    },
    timezones: ['UTC'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/gw.png',
      svg: 'https://flagcdn.com/gw.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/gw.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/gw.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [11.85, -15.58],
    },
    postalCode: {
      format: '####',
      regex: '^(\\d{4})$',
    },
  },
  {
    name: {
      common: 'Panama',
      official: 'Republic of Panama',
      nativeName: {
        spa: {
          official: 'República de Panamá',
          common: 'Panamá',
        },
      },
    },
    tld: ['.pa'],
    cca2: 'PA',
    ccn3: '591',
    cca3: 'PAN',
    cioc: 'PAN',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      PAB: {
        name: 'Panamanian balboa',
        symbol: 'B/.',
      },
      USD: {
        name: 'United States dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+5',
      suffixes: ['07'],
    },
    capital: ['Panama City'],
    altSpellings: ['PA', 'Republic of Panama', 'República de Panamá'],
    region: 'Americas',
    subregion: 'Central America',
    languages: {
      spa: 'Spanish',
    },
    translations: {
      ara: {
        official: 'جمهورية بنما',
        common: 'بنما',
      },
      ces: {
        official: 'Panamská republika',
        common: 'Panama',
      },
      cym: {
        official: 'Republic of Panama',
        common: 'Panama',
      },
      deu: {
        official: 'Republik Panama',
        common: 'Panama',
      },
      est: {
        official: 'Panama Vabariik',
        common: 'Panama',
      },
      fin: {
        official: 'Panaman tasavalta',
        common: 'Panama',
      },
      fra: {
        official: 'République du Panama',
        common: 'Panama',
      },
      hrv: {
        official: 'Republika Panama',
        common: 'Panama',
      },
      hun: {
        official: 'Panamai Köztársaság',
        common: 'Panama',
      },
      ita: {
        official: 'Repubblica di Panama',
        common: 'Panama',
      },
      jpn: {
        official: 'パナマ共和国',
        common: 'パナマ',
      },
      kor: {
        official: '파나마 공화국',
        common: '파나마',
      },
      nld: {
        official: 'Republiek Panama',
        common: 'Panama',
      },
      per: {
        official: 'جمهوری پاناما',
        common: 'پاناما',
      },
      pol: {
        official: 'Republika Panamy',
        common: 'Panama',
      },
      por: {
        official: 'República do Panamá',
        common: 'Panamá',
      },
      rus: {
        official: 'Республика Панама',
        common: 'Панама',
      },
      slk: {
        official: 'Panamská republika',
        common: 'Panama',
      },
      spa: {
        official: 'República de Panamá',
        common: 'Panamá',
      },
      swe: {
        official: 'Republiken Panama',
        common: 'Panama',
      },
      urd: {
        official: 'جمہوریہ پاناما',
        common: 'پاناما',
      },
      zho: {
        official: '巴拿马共和国',
        common: '巴拿马',
      },
    },
    latlng: [9.0, -80.0],
    landlocked: false,
    borders: ['COL', 'CRI'],
    area: 75417.0,
    demonyms: {
      eng: {
        f: 'Panamanian',
        m: 'Panamanian',
      },
      fra: {
        f: 'Panaméenne',
        m: 'Panaméen',
      },
    },
    flag: '\uD83C\uDDF5\uD83C\uDDE6',
    maps: {
      googleMaps: 'https://goo.gl/maps/sEN7sKqeawa5oPNLA',
      openStreetMaps: 'https://www.openstreetmap.org/relation/287668',
    },
    population: 4314768,
    gini: {
      '2019': 49.8,
    },
    fifa: 'PAN',
    car: {
      signs: ['PA'],
      side: 'right',
    },
    timezones: ['UTC-05:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/pa.png',
      svg: 'https://flagcdn.com/pa.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/pa.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/pa.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [8.97, -79.53],
    },
  },
  {
    name: {
      common: 'Latvia',
      official: 'Republic of Latvia',
      nativeName: {
        lav: {
          official: 'Latvijas Republikas',
          common: 'Latvija',
        },
      },
    },
    tld: ['.lv'],
    cca2: 'LV',
    ccn3: '428',
    cca3: 'LVA',
    cioc: 'LAT',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['71'],
    },
    capital: ['Riga'],
    altSpellings: ['LV', 'Republic of Latvia', 'Latvijas Republika'],
    region: 'Europe',
    subregion: 'Northern Europe',
    languages: {
      lav: 'Latvian',
    },
    translations: {
      ara: {
        official: 'جمهورية لاتفيا',
        common: 'لاتفيا',
      },
      ces: {
        official: 'Lotyšská republika',
        common: 'Lotyšsko',
      },
      cym: {
        official: 'Republic of Latvia',
        common: 'Latvia',
      },
      deu: {
        official: 'Republik Lettland',
        common: 'Lettland',
      },
      est: {
        official: 'Läti Vabariik',
        common: 'Läti',
      },
      fin: {
        official: 'Latvian tasavalta',
        common: 'Latvia',
      },
      fra: {
        official: 'République de Lettonie',
        common: 'Lettonie',
      },
      hrv: {
        official: 'Republika Latvija',
        common: 'Latvija',
      },
      hun: {
        official: 'Lett Köztársaság',
        common: 'Lettország',
      },
      ita: {
        official: 'Repubblica di Lettonia',
        common: 'Lettonia',
      },
      jpn: {
        official: 'ラトビア共和国',
        common: 'ラトビア',
      },
      kor: {
        official: '라트비아 공화국',
        common: '라트비아',
      },
      nld: {
        official: 'Republiek Letland',
        common: 'Letland',
      },
      per: {
        official: 'جمهوری لتونی',
        common: 'لتونی',
      },
      pol: {
        official: 'Republika Łotewska',
        common: 'Łotwa',
      },
      por: {
        official: 'República da Letónia',
        common: 'Letónia',
      },
      rus: {
        official: 'Латвийская Республика',
        common: 'Латвия',
      },
      slk: {
        official: 'Lotyšská republika',
        common: 'Lotyšsko',
      },
      spa: {
        official: 'República de Letonia',
        common: 'Letonia',
      },
      swe: {
        official: 'Republiken Lettland',
        common: 'Lettland',
      },
      urd: {
        official: 'جمہوریہ لٹویا',
        common: 'لٹویا',
      },
      zho: {
        official: '拉脱维亚共和国',
        common: '拉脱维亚',
      },
    },
    latlng: [57.0, 25.0],
    landlocked: false,
    borders: ['BLR', 'EST', 'LTU', 'RUS'],
    area: 64559.0,
    demonyms: {
      eng: {
        f: 'Latvian',
        m: 'Latvian',
      },
      fra: {
        f: 'Lettone',
        m: 'Letton',
      },
    },
    flag: '\uD83C\uDDF1\uD83C\uDDFB',
    maps: {
      googleMaps: 'https://goo.gl/maps/iQpUkH7ghq31ZtXe9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/72594',
    },
    population: 1901548,
    gini: {
      '2018': 35.1,
    },
    fifa: 'LVA',
    car: {
      signs: ['LV'],
      side: 'right',
    },
    timezones: ['UTC+02:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/lv.png',
      svg: 'https://flagcdn.com/lv.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/lv.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/lv.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [56.95, 24.1],
    },
    postalCode: {
      format: 'LV-####',
      regex: '^(?:LV)*(\\d{4})$',
    },
  },
  {
    name: {
      common: 'Guyana',
      official: 'Co-operative Republic of Guyana',
      nativeName: {
        eng: {
          official: 'Co-operative Republic of Guyana',
          common: 'Guyana',
        },
      },
    },
    tld: ['.gy'],
    cca2: 'GY',
    ccn3: '328',
    cca3: 'GUY',
    cioc: 'GUY',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      GYD: {
        name: 'Guyanese dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+5',
      suffixes: ['92'],
    },
    capital: ['Georgetown'],
    altSpellings: ['GY', 'Co-operative Republic of Guyana'],
    region: 'Americas',
    subregion: 'South America',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'جمهورية غيانا التعاونية',
        common: 'غيانا',
      },
      ces: {
        official: 'Kooperativní republika Guyana',
        common: 'Guyana',
      },
      cym: {
        official: 'Co-operative Republic of Guyana',
        common: 'Guyana',
      },
      deu: {
        official: 'Kooperative Republik Guyana',
        common: 'Guyana',
      },
      est: {
        official: 'Guyana Vabariik',
        common: 'Guyana',
      },
      fin: {
        official: 'Guayanan osuustoiminnallinen tasavalta',
        common: 'Guayana',
      },
      fra: {
        official: 'République coopérative de Guyana',
        common: 'Guyana',
      },
      hrv: {
        official: 'Zadruga Republika Gvajana',
        common: 'Gvajana',
      },
      hun: {
        official: 'Guyanai Szövetkezeti Köztársaság',
        common: 'Guyana',
      },
      ita: {
        official: 'Co -operative Republic of Guyana',
        common: 'Guyana',
      },
      jpn: {
        official: 'ガイアナの協同共和国',
        common: 'ガイアナ',
      },
      kor: {
        official: '가이아나 협동 공화국',
        common: '가이아나',
      },
      nld: {
        official: 'Coöperatieve Republiek Guyana',
        common: 'Guyana',
      },
      per: {
        official: 'جمهوری تعاونی گویان',
        common: 'گویان',
      },
      pol: {
        official: 'Kooperacyjna Republika Gujany',
        common: 'Gujana',
      },
      por: {
        official: 'Co -operative República da Guiana',
        common: 'Guiana',
      },
      rus: {
        official: 'Кооперативная Республика Гайана',
        common: 'Гайана',
      },
      slk: {
        official: 'Guyanská kooperatívna republika',
        common: 'Guyana',
      },
      spa: {
        official: 'República Cooperativa de Guyana',
        common: 'Guyana',
      },
      swe: {
        official: 'Kooperativa republiken Guyana',
        common: 'Guyana',
      },
      urd: {
        official: 'تعاونی جمہوریہ گیانا',
        common: 'گیانا',
      },
      zho: {
        official: '圭亚那共和国',
        common: '圭亚那',
      },
    },
    latlng: [5.0, -59.0],
    landlocked: false,
    borders: ['BRA', 'SUR', 'VEN'],
    area: 214969.0,
    demonyms: {
      eng: {
        f: 'Guyanese',
        m: 'Guyanese',
      },
      fra: {
        f: 'Guyanienne',
        m: 'Guyanien',
      },
    },
    flag: '\uD83C\uDDEC\uD83C\uDDFE',
    maps: {
      googleMaps: 'https://goo.gl/maps/DFsme2xEeugUAsCx5',
      openStreetMaps: 'https://www.openstreetmap.org/relation/287083',
    },
    population: 786559,
    gini: {
      '1998': 45.1,
    },
    fifa: 'GUY',
    car: {
      signs: ['GUY'],
      side: 'left',
    },
    timezones: ['UTC-04:00'],
    continents: ['South America'],
    flags: {
      png: 'https://flagcdn.com/w320/gy.png',
      svg: 'https://flagcdn.com/gy.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/gy.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/gy.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [6.8, -58.15],
    },
  },
  {
    name: {
      common: 'Lithuania',
      official: 'Republic of Lithuania',
      nativeName: {
        lit: {
          official: 'Lietuvos Respublikos',
          common: 'Lietuva',
        },
      },
    },
    tld: ['.lt'],
    cca2: 'LT',
    ccn3: '440',
    cca3: 'LTU',
    cioc: 'LTU',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['70'],
    },
    capital: ['Vilnius'],
    altSpellings: ['LT', 'Republic of Lithuania', 'Lietuvos Respublika'],
    region: 'Europe',
    subregion: 'Northern Europe',
    languages: {
      lit: 'Lithuanian',
    },
    translations: {
      ara: {
        official: 'جمهورية ليتوانيا',
        common: 'ليتوانيا',
      },
      ces: {
        official: 'Litevská republika',
        common: 'Litva',
      },
      cym: {
        official: 'Republic of Lithuania',
        common: 'Lithuania',
      },
      deu: {
        official: 'Republik Litauen',
        common: 'Litauen',
      },
      est: {
        official: 'Leedu Vabariik',
        common: 'Leedu',
      },
      fin: {
        official: 'Liettuan tasavalta',
        common: 'Liettua',
      },
      fra: {
        official: 'République de Lituanie',
        common: 'Lituanie',
      },
      hrv: {
        official: 'Republika Litva',
        common: 'Litva',
      },
      hun: {
        official: 'Litván Köztársaság',
        common: 'Litvánia',
      },
      ita: {
        official: 'Repubblica di Lituania',
        common: 'Lituania',
      },
      jpn: {
        official: 'リトアニア共和国',
        common: 'リトアニア',
      },
      kor: {
        official: '리투아니아 공화국',
        common: '리투아니아',
      },
      nld: {
        official: 'Republiek Litouwen',
        common: 'Litouwen',
      },
      per: {
        official: 'لیتوانیایی‌ها',
        common: 'لیتوانیایی‌ها',
      },
      pol: {
        official: 'Republika Litewska',
        common: 'Litwa',
      },
      por: {
        official: 'República da Lituânia',
        common: 'Lituânia',
      },
      rus: {
        official: 'Литовская Республика',
        common: 'Литва',
      },
      slk: {
        official: 'Litovská republika',
        common: 'Litva',
      },
      spa: {
        official: 'República de Lituania',
        common: 'Lituania',
      },
      swe: {
        official: 'Republiken Litauen',
        common: 'Litauen',
      },
      urd: {
        official: 'جمہوریہ لتھووینیا',
        common: 'لتھووینیا',
      },
      zho: {
        official: '立陶宛共和国',
        common: '立陶宛',
      },
    },
    latlng: [56.0, 24.0],
    landlocked: false,
    borders: ['BLR', 'LVA', 'POL', 'RUS'],
    area: 65300.0,
    demonyms: {
      eng: {
        f: 'Lithuanian',
        m: 'Lithuanian',
      },
      fra: {
        f: 'Lituanienne',
        m: 'Lituanien',
      },
    },
    flag: '\uD83C\uDDF1\uD83C\uDDF9',
    maps: {
      googleMaps: 'https://goo.gl/maps/dd1s9rrLjrK2G8yY6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/72596',
    },
    population: 2794700,
    gini: {
      '2018': 35.7,
    },
    fifa: 'LTU',
    car: {
      signs: ['LT'],
      side: 'right',
    },
    timezones: ['UTC+02:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/lt.png',
      svg: 'https://flagcdn.com/lt.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/lt.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/lt.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [54.68, 25.32],
    },
    postalCode: {
      format: 'LT-#####',
      regex: '^(?:LT)*(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Yemen',
      official: 'Republic of Yemen',
      nativeName: {
        ara: {
          official: 'الجمهورية اليمنية',
          common: 'اليَمَن',
        },
      },
    },
    tld: ['.ye'],
    cca2: 'YE',
    ccn3: '887',
    cca3: 'YEM',
    cioc: 'YEM',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      YER: {
        name: 'Yemeni rial',
        symbol: '﷼',
      },
    },
    idd: {
      root: '+9',
      suffixes: ['67'],
    },
    capital: ["Sana'a"],
    altSpellings: ['YE', 'Yemeni Republic', 'al-Jumhūriyyah al-Yamaniyyah'],
    region: 'Asia',
    subregion: 'Western Asia',
    languages: {
      ara: 'Arabic',
    },
    translations: {
      ara: {
        official: 'الجمهورية اليمنية',
        common: 'اليمن',
      },
      ces: {
        official: 'Jemenská republika',
        common: 'Jemen',
      },
      cym: {
        official: 'Republic of Yemen',
        common: 'Yemen',
      },
      deu: {
        official: 'Republik Jemen',
        common: 'Jemen',
      },
      est: {
        official: 'Jeemeni Vabariik',
        common: 'Jeemen',
      },
      fin: {
        official: 'Jemenin tasavalta',
        common: 'Jemen',
      },
      fra: {
        official: 'République du Yémen',
        common: 'Yémen',
      },
      hrv: {
        official: 'Republika Jemen',
        common: 'Jemen',
      },
      hun: {
        official: 'Jemeni Köztársaság',
        common: 'Jemen',
      },
      ita: {
        official: 'Repubblica dello Yemen',
        common: 'Yemen',
      },
      jpn: {
        official: 'イエメン共和国',
        common: 'イエメン',
      },
      kor: {
        official: '예멘 공화국',
        common: '예멘',
      },
      nld: {
        official: 'Republiek Jemen',
        common: 'Jemen',
      },
      per: {
        official: 'جمهوری یمن',
        common: 'یمن',
      },
      pol: {
        official: 'Republika Jemeńska',
        common: 'Jemen',
      },
      por: {
        official: 'República do Iêmen',
        common: 'Iémen',
      },
      rus: {
        official: 'Йеменская Республика',
        common: 'Йемен',
      },
      slk: {
        official: 'Jemenská republika',
        common: 'Jemen',
      },
      spa: {
        official: 'República de Yemen',
        common: 'Yemen',
      },
      swe: {
        official: 'Republiken Jemen',
        common: 'Jemen',
      },
      urd: {
        official: 'جمہوریہ یمن',
        common: 'یمن',
      },
      zho: {
        official: '也门共和国',
        common: '也门',
      },
    },
    latlng: [15.0, 48.0],
    landlocked: false,
    borders: ['OMN', 'SAU'],
    area: 527968.0,
    demonyms: {
      eng: {
        f: 'Yemeni',
        m: 'Yemeni',
      },
      fra: {
        f: 'Yéménite',
        m: 'Yéménite',
      },
    },
    flag: '\uD83C\uDDFE\uD83C\uDDEA',
    maps: {
      googleMaps: 'https://goo.gl/maps/WCmE76HKcLideQQw7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/305092',
    },
    population: 29825968,
    gini: {
      '2014': 36.7,
    },
    fifa: 'YEM',
    car: {
      signs: ['YAR'],
      side: 'right',
    },
    timezones: ['UTC+03:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/ye.png',
      svg: 'https://flagcdn.com/ye.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ye.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ye.svg',
    },
    startOfWeek: 'sunday',
    capitalInfo: {
      latlng: [15.37, 44.19],
    },
  },
  {
    name: {
      common: 'Martinique',
      official: 'Martinique',
      nativeName: {
        fra: {
          official: 'Martinique',
          common: 'Martinique',
        },
      },
    },
    tld: ['.mq'],
    cca2: 'MQ',
    ccn3: '474',
    cca3: 'MTQ',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    idd: {
      root: '+5',
      suffixes: ['96'],
    },
    capital: ['Fort-de-France'],
    altSpellings: ['MQ'],
    region: 'Americas',
    subregion: 'Caribbean',
    languages: {
      fra: 'French',
    },
    translations: {
      ara: {
        official: 'مارتينيك',
        common: 'مارتينيك',
      },
      ces: {
        official: 'Martinik',
        common: 'Martinik',
      },
      cym: {
        official: 'Martinique',
        common: 'Martinique',
      },
      deu: {
        official: 'Martinique',
        common: 'Martinique',
      },
      est: {
        official: 'Martinique’i departemang',
        common: 'Martinique',
      },
      fin: {
        official: 'Martinique',
        common: 'Martinique',
      },
      fra: {
        official: 'Martinique',
        common: 'Martinique',
      },
      hrv: {
        official: 'Martinique',
        common: 'Martinique',
      },
      hun: {
        official: 'Martinique',
        common: 'Martinique',
      },
      ita: {
        official: 'Martinique',
        common: 'Martinica',
      },
      jpn: {
        official: 'マルティニーク島',
        common: 'マルティニーク',
      },
      kor: {
        official: '마르티니크',
        common: '마르티니크',
      },
      nld: {
        official: 'Martinique',
        common: 'Martinique',
      },
      per: {
        official: 'مارتینیک',
        common: 'مارتینیک',
      },
      pol: {
        official: 'Martynika',
        common: 'Martynika',
      },
      por: {
        official: 'Martinique',
        common: 'Martinica',
      },
      rus: {
        official: 'Мартиника',
        common: 'Мартиника',
      },
      slk: {
        official: 'Martinique',
        common: 'Martinique',
      },
      spa: {
        official: 'Martinica',
        common: 'Martinica',
      },
      swe: {
        official: 'Martinique',
        common: 'Martinique',
      },
      urd: {
        official: 'مارٹینیک',
        common: 'مارٹینیک',
      },
      zho: {
        official: '马提尼克',
        common: '马提尼克',
      },
    },
    latlng: [14.666667, -61.0],
    landlocked: false,
    area: 1128.0,
    demonyms: {
      eng: {
        f: 'Martinican',
        m: 'Martinican',
      },
      fra: {
        f: 'Martiniquaise',
        m: 'Martiniquais',
      },
    },
    flag: '\uD83C\uDDF2\uD83C\uDDF6',
    maps: {
      googleMaps: 'https://goo.gl/maps/87ER7sDAFU7JjcvR6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/2473088',
    },
    population: 378243,
    car: {
      signs: ['F'],
      side: 'right',
    },
    timezones: ['UTC-04:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/mq.png',
      svg: 'https://flagcdn.com/mq.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/mq.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/mq.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [14.6, -61.08],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'French Guiana',
      official: 'Guiana',
      nativeName: {
        fra: {
          official: 'Guyane',
          common: 'Guyane française',
        },
      },
    },
    tld: ['.gf'],
    cca2: 'GF',
    ccn3: '254',
    cca3: 'GUF',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    idd: {
      root: '+5',
      suffixes: ['94'],
    },
    capital: ['Cayenne'],
    altSpellings: ['GF', 'Guiana', 'Guyane'],
    region: 'Americas',
    subregion: 'South America',
    languages: {
      fra: 'French',
    },
    translations: {
      ara: {
        official: 'غويانا الفرنسية',
        common: 'غويانا',
      },
      ces: {
        official: 'Francouzská Guyana',
        common: 'Francouzská Guyana',
      },
      cym: {
        official: 'Guiana',
        common: 'French Guiana',
      },
      deu: {
        official: 'Französisch-Guayana',
        common: 'Französisch-Guayana',
      },
      est: {
        official: 'Guajaana departemang',
        common: 'Prantsuse Guajaana',
      },
      fin: {
        official: 'Ranskan Guayana',
        common: 'Ranskan Guayana',
      },
      fra: {
        official: 'Guyane',
        common: 'Guyane',
      },
      hrv: {
        official: 'Gijana',
        common: 'Francuska Gvajana',
      },
      hun: {
        official: 'Francia Guyana',
        common: 'Francia Guyana',
      },
      ita: {
        official: 'Guiana',
        common: 'Guyana francese',
      },
      jpn: {
        official: 'ギアナ',
        common: 'フランス領ギアナ',
      },
      kor: {
        official: '프랑스령 기아나',
        common: '프랑스령 기아나',
      },
      nld: {
        official: 'Guyana',
        common: 'Frans-Guyana',
      },
      per: {
        official: 'گویان فرانسه',
        common: 'گویان فرانسه',
      },
      pol: {
        official: 'Gujana Francuska',
        common: 'Gujana Francuska',
      },
      por: {
        official: 'Guiana',
        common: 'Guiana Francesa',
      },
      rus: {
        official: 'Гвиана',
        common: 'Французская Гвиана',
      },
      slk: {
        official: 'Francúzska Guyana',
        common: 'Guyana',
      },
      spa: {
        official: 'Guayana',
        common: 'Guayana Francesa',
      },
      swe: {
        official: 'Franska Guyana',
        common: 'Franska Guyana',
      },
      urd: {
        official: 'گیانا',
        common: 'فرانسیسی گیانا',
      },
      zho: {
        official: '法属圭亚那',
        common: '法属圭亚那',
      },
    },
    latlng: [4.0, -53.0],
    landlocked: false,
    borders: ['BRA', 'SUR'],
    area: 83534.0,
    demonyms: {
      eng: {
        f: 'Guianan',
        m: 'Guianan',
      },
      fra: {
        f: 'Guyanaise',
        m: 'Guyanais',
      },
    },
    flag: '\uD83C\uDDEC\uD83C\uDDEB',
    maps: {
      googleMaps: 'https://goo.gl/maps/NJawFwMzG7YtCrVP7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/2502058',
    },
    population: 254541,
    car: {
      signs: ['F'],
      side: 'right',
    },
    timezones: ['UTC-03:00'],
    continents: ['South America'],
    flags: {
      png: 'https://flagcdn.com/w320/gf.png',
      svg: 'https://flagcdn.com/gf.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/gf.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/gf.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [4.94, -52.33],
    },
    postalCode: {
      format: '#####',
      regex: '^((97|98)3\\d{2})$',
    },
  },
  {
    name: {
      common: 'Suriname',
      official: 'Republic of Suriname',
      nativeName: {
        nld: {
          official: 'Republiek Suriname',
          common: 'Suriname',
        },
      },
    },
    tld: ['.sr'],
    cca2: 'SR',
    ccn3: '740',
    cca3: 'SUR',
    cioc: 'SUR',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      SRD: {
        name: 'Surinamese dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+5',
      suffixes: ['97'],
    },
    capital: ['Paramaribo'],
    altSpellings: ['SR', 'Sarnam', 'Sranangron', 'Republic of Suriname', 'Republiek Suriname'],
    region: 'Americas',
    subregion: 'South America',
    languages: {
      nld: 'Dutch',
    },
    translations: {
      ara: {
        official: 'جمهورية سورينام',
        common: 'سورينام',
      },
      ces: {
        official: 'Republika Surinam',
        common: 'Surinam',
      },
      cym: {
        official: 'Republic of Suriname',
        common: 'Suriname',
      },
      deu: {
        official: 'Republik Suriname',
        common: 'Suriname',
      },
      est: {
        official: 'Suriname Vabariik',
        common: 'Suriname',
      },
      fin: {
        official: 'Surinamen tasavalta',
        common: 'Suriname',
      },
      fra: {
        official: 'République du Suriname',
        common: 'Surinam',
      },
      hrv: {
        official: 'Republika Surinam',
        common: 'Surinam',
      },
      hun: {
        official: 'Suriname Köztársaság',
        common: 'Suriname',
      },
      ita: {
        official: 'Repubblica del Suriname',
        common: 'Suriname',
      },
      jpn: {
        official: 'スリナム共和国',
        common: 'スリナム',
      },
      kor: {
        official: '수리남 공화국',
        common: '수리남',
      },
      nld: {
        official: 'Republiek Suriname',
        common: 'Suriname',
      },
      per: {
        official: 'جمهوری سورینام',
        common: 'سورینام',
      },
      pol: {
        official: 'Republika Surinamu',
        common: 'Surinam',
      },
      por: {
        official: 'República do Suriname',
        common: 'Suriname',
      },
      rus: {
        official: 'Республика Суринам',
        common: 'Суринам',
      },
      slk: {
        official: 'Surinamská republika',
        common: 'Surinam',
      },
      spa: {
        official: 'República de Suriname',
        common: 'Surinam',
      },
      swe: {
        official: 'Republiken Surinam',
        common: 'Surinam',
      },
      urd: {
        official: 'جمہوریہ سرینام',
        common: 'سرینام',
      },
      zho: {
        official: '苏里南共和国',
        common: '苏里南',
      },
    },
    latlng: [4.0, -56.0],
    landlocked: false,
    borders: ['BRA', 'GUF', 'GUY'],
    area: 163820.0,
    demonyms: {
      eng: {
        f: 'Surinamer',
        m: 'Surinamer',
      },
      fra: {
        f: 'Surinamaise',
        m: 'Surinamais',
      },
    },
    flag: '\uD83C\uDDF8\uD83C\uDDF7',
    maps: {
      googleMaps: 'https://goo.gl/maps/iy7TuQLSi4qgoBoG7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/287082',
    },
    population: 586634,
    gini: {
      '1999': 57.9,
    },
    fifa: 'SUR',
    car: {
      signs: ['SME'],
      side: 'left',
    },
    timezones: ['UTC-03:00'],
    continents: ['South America'],
    flags: {
      png: 'https://flagcdn.com/w320/sr.png',
      svg: 'https://flagcdn.com/sr.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/sr.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/sr.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [5.83, -55.17],
    },
  },
  {
    name: {
      common: 'United States Minor Outlying Islands',
      official: 'United States Minor Outlying Islands',
      nativeName: {
        eng: {
          official: 'United States Minor Outlying Islands',
          common: 'United States Minor Outlying Islands',
        },
      },
    },
    tld: ['.us'],
    cca2: 'UM',
    ccn3: '581',
    cca3: 'UMI',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      USD: {
        name: 'United States dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['68'],
    },
    altSpellings: ['UM'],
    region: 'Americas',
    subregion: 'North America',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'جزر الولايات المتحدة الصغيرة النائية',
        common: 'جزر الولايات المتحدة الصغيرة النائية',
      },
      ces: {
        official: 'Menší odlehlé ostrovy Spojených států amerických',
        common: 'Menší odlehlé ostrovy USA',
      },
      cym: {
        official: 'United States Minor Outlying Islands',
        common: 'United States Minor Outlying Islands',
      },
      deu: {
        official: 'USA, kleinere ausgelagerte Inseln',
        common: 'Kleinere Inselbesitzungen der Vereinigten Staaten',
      },
      est: {
        official: 'Ühendriikide väikesed hajasaared',
        common: 'Ühendriikide hajasaared',
      },
      fin: {
        official: 'Yhdysvaltain asumattomat saaret',
        common: 'Yhdysvaltain asumattomat saaret',
      },
      fra: {
        official: 'Îles mineures éloignées des États-Unis',
        common: 'Îles mineures éloignées des États-Unis',
      },
      hrv: {
        official: 'Mali udaljeni otoci SAD-a',
        common: 'Mali udaljeni otoci SAD-a',
      },
      hun: {
        official: 'Az Amerikai Egyesült Államok lakatlan külbirtokai',
        common: 'Az Amerikai Egyesült Államok lakatlan külbirtokai',
      },
      ita: {
        official: 'Stati Uniti Isole Minori',
        common: "Isole minori esterne degli Stati Uniti d'America",
      },
      jpn: {
        official: 'アメリカ合衆国外諸島',
        common: '合衆国領有小離島',
      },
      kor: {
        official: '미국령 군소 제도',
        common: '미국령 군소 제도',
      },
      nld: {
        official: 'Kleine afgelegen eilanden van de Verenigde Staten',
        common: 'Kleine afgelegen eilanden van de Verenigde Staten',
      },
      per: {
        official: 'جزایر کوچک حاشیه‌ای ایالات متحده آمریکا',
        common: 'جزایر کوچک حاشیه‌ای ایالات متحده آمریکا',
      },
      pol: {
        official: 'Dalekie Wyspy Mniejsze Stanów Zjednoczonych',
        common: 'Dalekie Wyspy Mniejsze Stanów Zjednoczonych',
      },
      por: {
        official: 'Estados Unidos Ilhas Menores Distantes',
        common: 'Ilhas Menores Distantes dos Estados Unidos',
      },
      rus: {
        official: 'Внешние малые острова США',
        common: 'Внешние малые острова США',
      },
      slk: {
        official: 'Menšie odľahlé ostrovy Spjoených štátov',
        common: 'Menšie odľahlé ostrovy USA',
      },
      spa: {
        official: 'Estados Unidos Islas menores alejadas de',
        common: 'Islas Ultramarinas Menores de Estados Unidos',
      },
      swe: {
        official: 'Förenta staternas mindre öar i Oceanien och Västindien',
        common: 'Förenta staternas mindre öar i Oceanien och Västindien',
      },
      urd: {
        official: 'امریکی چھوٹے بیرونی جزائر',
        common: 'امریکی چھوٹے بیرونی جزائر',
      },
      zho: {
        official: '美国本土外小岛屿',
        common: '美国本土外小岛屿',
      },
    },
    latlng: [19.3, 166.633333],
    landlocked: false,
    area: 34.2,
    demonyms: {
      eng: {
        f: 'American Islander',
        m: 'American Islander',
      },
    },
    flag: '\uD83C\uDDFA\uD83C\uDDF2',
    maps: {
      googleMaps: 'https://goo.gl/maps/hZKnrzgeK69dDyPF8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/6430384',
    },
    population: 300,
    car: {
      signs: [''],
      side: 'right',
    },
    timezones: ['UTC-11:00', 'UTC-10:00', 'UTC+12:00'],
    continents: ['Oceania'],
    flags: {
      png: 'https://flagcdn.com/w320/um.png',
      svg: 'https://flagcdn.com/um.svg',
    },
    coatOfArms: {},
    startOfWeek: 'monday',
    capitalInfo: {},
  },
  {
    name: {
      common: 'Cyprus',
      official: 'Republic of Cyprus',
      nativeName: {
        ell: {
          official: 'Δημοκρατία της Κύπρος',
          common: 'Κύπρος',
        },
        tur: {
          official: 'Kıbrıs Cumhuriyeti',
          common: 'Kıbrıs',
        },
      },
    },
    tld: ['.cy'],
    cca2: 'CY',
    ccn3: '196',
    cca3: 'CYP',
    cioc: 'CYP',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['57'],
    },
    capital: ['Nicosia'],
    altSpellings: ['CY', 'Kýpros', 'Kıbrıs', 'Republic of Cyprus', 'Κυπριακή Δημοκρατία', 'Kıbrıs Cumhuriyeti'],
    region: 'Europe',
    subregion: 'Southern Europe',
    languages: {
      ell: 'Greek',
      tur: 'Turkish',
    },
    translations: {
      ara: {
        official: 'جمهورية قبرص',
        common: 'قبرص',
      },
      ces: {
        official: 'Kyperská republika',
        common: 'Kypr',
      },
      cym: {
        official: 'Gweriniaeth Cyprus',
        common: 'Cyprus',
      },
      deu: {
        official: 'Republik Zypern',
        common: 'Zypern',
      },
      est: {
        official: 'Küprose Vabariik',
        common: 'Küpros',
      },
      fin: {
        official: 'Kyproksen tasavalta',
        common: 'Kypros',
      },
      fra: {
        official: 'République de Chypre',
        common: 'Chypre',
      },
      hrv: {
        official: 'Republika Cipar',
        common: 'Cipar',
      },
      hun: {
        official: 'Ciprusi Köztársaság',
        common: 'Ciprus',
      },
      ita: {
        official: 'Repubblica di Cipro',
        common: 'Cipro',
      },
      jpn: {
        official: 'キプロス共和国',
        common: 'キプロス',
      },
      kor: {
        official: '키프로스 공화국',
        common: '키프로스',
      },
      nld: {
        official: 'Republiek Cyprus',
        common: 'Cyprus',
      },
      per: {
        official: 'جمهوری قبرس',
        common: 'قِبرِس',
      },
      pol: {
        official: 'Republika Cypryjska',
        common: 'Cypr',
      },
      por: {
        official: 'República de Chipre',
        common: 'Chipre',
      },
      rus: {
        official: 'Республика Кипр',
        common: 'Кипр',
      },
      slk: {
        official: 'Cyperská republika',
        common: 'Cyprus',
      },
      spa: {
        official: 'República de Chipre',
        common: 'Chipre',
      },
      swe: {
        official: 'Republiken Cypern',
        common: 'Cypern',
      },
      urd: {
        official: 'جمہوریہ قبرص',
        common: 'قبرص',
      },
      zho: {
        official: '塞浦路斯共和国',
        common: '塞浦路斯',
      },
    },
    latlng: [35.0, 33.0],
    landlocked: false,
    area: 9251.0,
    demonyms: {
      eng: {
        f: 'Cypriot',
        m: 'Cypriot',
      },
      fra: {
        f: 'Chypriote',
        m: 'Chypriote',
      },
    },
    flag: '\uD83C\uDDE8\uD83C\uDDFE',
    maps: {
      googleMaps: 'https://goo.gl/maps/77hPBRdLid8yD5Bm7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/307787',
    },
    population: 1207361,
    gini: {
      '2018': 32.7,
    },
    fifa: 'CYP',
    car: {
      signs: ['CY'],
      side: 'left',
    },
    timezones: ['UTC+02:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/cy.png',
      svg: 'https://flagcdn.com/cy.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/cy.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/cy.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [35.17, 33.37],
    },
    postalCode: {
      format: '####',
      regex: '^(\\d{4})$',
    },
  },
  {
    name: {
      common: 'Cape Verde',
      official: 'Republic of Cabo Verde',
      nativeName: {
        por: {
          official: 'República de Cabo Verde',
          common: 'Cabo Verde',
        },
      },
    },
    tld: ['.cv'],
    cca2: 'CV',
    ccn3: '132',
    cca3: 'CPV',
    cioc: 'CPV',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      CVE: {
        name: 'Cape Verdean escudo',
        symbol: 'Esc',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['38'],
    },
    capital: ['Praia'],
    altSpellings: ['CV', 'Republic of Cabo Verde', 'República de Cabo Verde'],
    region: 'Africa',
    subregion: 'Western Africa',
    languages: {
      por: 'Portuguese',
    },
    translations: {
      ara: {
        official: 'جمهورية كابو فيردي',
        common: 'كابو فيردي',
      },
      ces: {
        official: 'Kapverdská republika',
        common: 'Kapverdy',
      },
      cym: {
        official: 'Gweriniaeth Cabo Verde',
        common: 'Penrhyn Verde',
      },
      deu: {
        official: 'Republik Cabo Verde',
        common: 'Kap Verde',
      },
      est: {
        official: 'Cabo Verde Vabariik',
        common: 'Roheneemesaared',
      },
      fin: {
        official: 'Kap Verden tasavalta',
        common: 'Kap Verde',
      },
      fra: {
        official: 'République du Cap-Vert',
        common: 'Îles du Cap-Vert',
      },
      hrv: {
        official: 'Republika Cabo Verde',
        common: 'Zelenortska Republika',
      },
      hun: {
        official: 'Zöld-foki Köztársaság',
        common: 'Zöld-foki Köztársaság',
      },
      ita: {
        official: 'Repubblica di Capo Verde',
        common: 'Capo Verde',
      },
      jpn: {
        official: 'カーボベルデ共和国',
        common: 'カーボベルデ',
      },
      kor: {
        official: '카보베르데 공화국',
        common: '카보베르데',
      },
      nld: {
        official: 'Republiek van Cabo Verde',
        common: 'Kaapverdië',
      },
      per: {
        official: 'جمهوری کبو ورد',
        common: 'دماغهٔ سبز',
      },
      pol: {
        official: 'Republika Zielonego Przylądka',
        common: 'Republika Zielonego Przylądka',
      },
      por: {
        official: 'República de Cabo Verde',
        common: 'Cabo Verde',
      },
      rus: {
        official: 'Республика Кабо -Верде',
        common: 'Кабо-Верде',
      },
      slk: {
        official: 'Kapverdská republika',
        common: 'Kapverdy',
      },
      spa: {
        official: 'República de Cabo Verde',
        common: 'Cabo Verde',
      },
      swe: {
        official: 'Republiken Kap Verde',
        common: 'Kap Verde',
      },
      urd: {
        official: 'جمہوریہ کیپ ورڈی',
        common: 'کیپ ورڈی',
      },
      zho: {
        official: '佛得角共和国',
        common: '佛得角',
      },
    },
    latlng: [16.0, -24.0],
    landlocked: false,
    area: 4033.0,
    demonyms: {
      eng: {
        f: 'Cape Verdian',
        m: 'Cape Verdian',
      },
      fra: {
        f: 'Cap-verdienne',
        m: 'Cap-verdien',
      },
    },
    flag: '\uD83C\uDDE8\uD83C\uDDFB',
    maps: {
      googleMaps: 'https://goo.gl/maps/Kc9vy5ChjuiAgMfXA',
      openStreetMaps: 'https://www.openstreetmap.org/relation/535774',
    },
    population: 555988,
    gini: {
      '2015': 42.4,
    },
    fifa: 'CPV',
    car: {
      signs: ['CV'],
      side: 'right',
    },
    timezones: ['UTC-01:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/cv.png',
      svg: 'https://flagcdn.com/cv.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/cv.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/cv.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [14.92, -23.52],
    },
    postalCode: {
      format: '####',
      regex: '^(\\d{4})$',
    },
  },
  {
    name: {
      common: 'Wallis and Futuna',
      official: 'Territory of the Wallis and Futuna Islands',
      nativeName: {
        fra: {
          official: 'Territoire des îles Wallis et Futuna',
          common: 'Wallis et Futuna',
        },
      },
    },
    tld: ['.wf'],
    cca2: 'WF',
    ccn3: '876',
    cca3: 'WLF',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      XPF: {
        name: 'CFP franc',
        symbol: '₣',
      },
    },
    idd: {
      root: '+6',
      suffixes: ['81'],
    },
    capital: ['Mata-Utu'],
    altSpellings: ['WF', 'Territory of the Wallis and Futuna Islands', 'Territoire des îles Wallis et Futuna'],
    region: 'Oceania',
    subregion: 'Polynesia',
    languages: {
      fra: 'French',
    },
    translations: {
      ara: {
        official: 'إقليم جزر واليس وفوتونا',
        common: 'واليس وفوتونا',
      },
      ces: {
        official: 'Teritorium ostrovů Wallis a Futuna',
        common: 'Wallis a Futuna',
      },
      cym: {
        official: 'Territory of the Wallis and Futuna Islands',
        common: 'Wallis and Futuna',
      },
      deu: {
        official: 'Gebiet der Wallis und Futuna',
        common: 'Wallis und Futuna',
      },
      est: {
        official: 'Wallise ja Futuna ala',
        common: 'Wallis ja Futuna',
      },
      fin: {
        official: 'Wallisin ja Futunan yhteisö',
        common: 'Wallis ja Futuna',
      },
      fra: {
        official: 'Territoire des îles Wallis et Futuna',
        common: 'Wallis-et-Futuna',
      },
      hrv: {
        official: 'Teritoriju Wallis i Futuna',
        common: 'Wallis i Fortuna',
      },
      hun: {
        official: 'Wallis és Futuna',
        common: 'Wallis és Futuna',
      },
      ita: {
        official: 'Territorio delle Isole Wallis e Futuna',
        common: 'Wallis e Futuna',
      },
      jpn: {
        official: 'ウォリス·フツナ諸島の領土',
        common: 'ウォリス・フツナ',
      },
      kor: {
        official: '왈리스 퓌튀나',
        common: '왈리스 퓌튀나',
      },
      nld: {
        official: 'Grondgebied van de Wallis en Futuna',
        common: 'Wallis en Futuna',
      },
      per: {
        official: 'جزایر والیس و فوتونا',
        common: 'والیس و فوتونا',
      },
      pol: {
        official: 'Terytorium Wysp Wallis i Futuna',
        common: 'Wallis i Futuna',
      },
      por: {
        official: 'Território das Ilhas Wallis e Futuna',
        common: 'Wallis e Futuna',
      },
      rus: {
        official: 'Территория Уоллис и Футуна острова',
        common: 'Уоллис и Футуна',
      },
      slk: {
        official: 'Teritórium ostrovov Wallis a Futuna',
        common: 'Wallis a Futuna',
      },
      spa: {
        official: 'Territorio de las Islas Wallis y Futuna',
        common: 'Wallis y Futuna',
      },
      swe: {
        official: 'Territoriet Wallis- och Futunaöarna',
        common: 'Wallis- och Futunaöarna',
      },
      urd: {
        official: 'سر زمینِ والس و فتونہ جزائر',
        common: 'والس و فتونہ',
      },
      zho: {
        official: '瓦利斯和富图纳群岛',
        common: '瓦利斯和富图纳群岛',
      },
    },
    latlng: [-13.3, -176.2],
    landlocked: false,
    area: 142.0,
    demonyms: {
      eng: {
        f: 'Wallis and Futuna Islander',
        m: 'Wallis and Futuna Islander',
      },
    },
    flag: '\uD83C\uDDFC\uD83C\uDDEB',
    maps: {
      googleMaps: 'https://goo.gl/maps/CzVqK74QYtbHv65r5',
      openStreetMaps: 'https://www.openstreetmap.org/relation/3412448',
    },
    population: 11750,
    car: {
      signs: ['F'],
      side: 'right',
    },
    timezones: ['UTC+12:00'],
    continents: ['Oceania'],
    flags: {
      png: 'https://flagcdn.com/w320/wf.png',
      svg: 'https://flagcdn.com/wf.svg',
    },
    coatOfArms: {},
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-13.95, -171.93],
    },
    postalCode: {
      format: '#####',
      regex: '^(986\\d{2})$',
    },
  },
  {
    name: {
      common: 'Mayotte',
      official: 'Department of Mayotte',
      nativeName: {
        fra: {
          official: 'Département de Mayotte',
          common: 'Mayotte',
        },
      },
    },
    tld: ['.yt'],
    cca2: 'YT',
    ccn3: '175',
    cca3: 'MYT',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['62'],
    },
    capital: ['Mamoudzou'],
    altSpellings: ['YT', 'Department of Mayotte', 'Département de Mayotte'],
    region: 'Africa',
    subregion: 'Eastern Africa',
    languages: {
      fra: 'French',
    },
    translations: {
      ara: {
        official: 'مايوت',
        common: 'مايوت',
      },
      ces: {
        official: 'Mayotte',
        common: 'Mayotte',
      },
      cym: {
        official: 'Department of Mayotte',
        common: 'Mayotte',
      },
      deu: {
        official: 'Übersee-Département Mayotte',
        common: 'Mayotte',
      },
      est: {
        official: 'Mayotte',
        common: 'Mayotte',
      },
      fin: {
        official: 'Mayotte',
        common: 'Mayotte',
      },
      fra: {
        official: 'Département de Mayotte',
        common: 'Mayotte',
      },
      hrv: {
        official: 'Odjel Mayotte',
        common: 'Mayotte',
      },
      hun: {
        official: 'Mayotte',
        common: 'Mayotte',
      },
      ita: {
        official: 'Dipartimento di Mayotte',
        common: 'Mayotte',
      },
      jpn: {
        official: 'マヨット科',
        common: 'マヨット',
      },
      kor: {
        official: '마요트',
        common: '마요트',
      },
      nld: {
        official: 'Afdeling Mayotte',
        common: 'Mayotte',
      },
      per: {
        official: 'مجموعه شهرستانی مایوت',
        common: 'مایوت',
      },
      pol: {
        official: 'Majotta',
        common: 'Majotta',
      },
      por: {
        official: 'Departamento de Mayotte',
        common: 'Mayotte',
      },
      rus: {
        official: 'Департамент Майотта',
        common: 'Майотта',
      },
      slk: {
        official: 'Department Mayotte',
        common: 'Mayotte',
      },
      spa: {
        official: 'Departamento de Mayotte',
        common: 'Mayotte',
      },
      swe: {
        official: 'Departementsområdet Mayotte',
        common: 'Mayotte',
      },
      urd: {
        official: 'مایوٹ',
        common: 'مایوٹ',
      },
      zho: {
        official: '马约特',
        common: '马约特',
      },
    },
    latlng: [-12.83333333, 45.16666666],
    landlocked: false,
    area: 374.0,
    demonyms: {
      eng: {
        f: 'Mahoran',
        m: 'Mahoran',
      },
      fra: {
        f: 'Mahoraise',
        m: 'Mahorais',
      },
    },
    flag: '\uD83C\uDDFE\uD83C\uDDF9',
    maps: {
      googleMaps: 'https://goo.gl/maps/1e7MXmfBwQv3TQGF7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/1259885',
    },
    population: 226915,
    car: {
      signs: ['F'],
      side: 'right',
    },
    timezones: ['UTC+03:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/yt.png',
      svg: 'https://flagcdn.com/yt.svg',
    },
    coatOfArms: {},
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-12.78, 45.22],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Vietnam',
      official: 'Socialist Republic of Vietnam',
      nativeName: {
        vie: {
          official: 'Cộng hòa xã hội chủ nghĩa Việt Nam',
          common: 'Việt Nam',
        },
      },
    },
    tld: ['.vn'],
    cca2: 'VN',
    ccn3: '704',
    cca3: 'VNM',
    cioc: 'VIE',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      VND: {
        name: 'Vietnamese đồng',
        symbol: '₫',
      },
    },
    idd: {
      root: '+8',
      suffixes: ['4'],
    },
    capital: ['Hanoi'],
    altSpellings: ['VN', 'Socialist Republic of Vietnam', 'Cộng hòa Xã hội chủ nghĩa Việt Nam', 'Viet Nam'],
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    languages: {
      vie: 'Vietnamese',
    },
    translations: {
      ara: {
        official: 'جمهورية فيتنام الاشتراكية',
        common: 'فيتنام',
      },
      ces: {
        official: 'Vietnamská socialistická republika',
        common: 'Vietnam',
      },
      cym: {
        official: 'Socialist Republic of Vietnam',
        common: 'Vietnam',
      },
      deu: {
        official: 'Sozialistische Republik Vietnam',
        common: 'Vietnam',
      },
      est: {
        official: 'Vietnami Sotsialistlik Vabariik',
        common: 'Vietnam',
      },
      fin: {
        official: 'Vietnamin sosialistinen tasavalta',
        common: 'Vietnam',
      },
      fra: {
        official: 'République socialiste du Viêt Nam',
        common: 'Viêt Nam',
      },
      hrv: {
        official: 'Socijalistička Republika Vijetnam',
        common: 'Vijetnam',
      },
      hun: {
        official: 'Vietnámi Szocialista Köztársaság',
        common: 'Vietnám',
      },
      ita: {
        official: 'Repubblica socialista del Vietnam',
        common: 'Vietnam',
      },
      jpn: {
        official: 'ベトナム社会主義共和国',
        common: 'ベトナム',
      },
      kor: {
        official: '베트남 사회주의 공화국',
        common: '베트남',
      },
      nld: {
        official: 'Socialistische Republiek Vietnam',
        common: 'Vietnam',
      },
      per: {
        official: 'جمهوری سوسیالیستی ویتنام',
        common: 'ویتنام',
      },
      pol: {
        official: 'Socjalistyczna Republika Wietnamu',
        common: 'Wietnam',
      },
      por: {
        official: 'República Socialista do Vietname',
        common: 'Vietname',
      },
      rus: {
        official: 'Социалистическая Республика Вьетнам',
        common: 'Вьетнам',
      },
      slk: {
        official: 'Vietnamská socialistická republika',
        common: 'Vietnam',
      },
      spa: {
        official: 'República Socialista de Vietnam',
        common: 'Vietnam',
      },
      swe: {
        official: 'Socialistiska republiken Vietnam',
        common: 'Vietnam',
      },
      urd: {
        official: 'اشتراکی جمہوریہ ویتنام',
        common: 'ویتنام',
      },
      zho: {
        official: '越南社会主义共和国',
        common: '越南',
      },
    },
    latlng: [16.16666666, 107.83333333],
    landlocked: false,
    borders: ['KHM', 'CHN', 'LAO'],
    area: 331212.0,
    demonyms: {
      eng: {
        f: 'Vietnamese',
        m: 'Vietnamese',
      },
      fra: {
        f: 'Vietnamienne',
        m: 'Vietnamien',
      },
    },
    flag: '\uD83C\uDDFB\uD83C\uDDF3',
    maps: {
      googleMaps: 'https://goo.gl/maps/PCpVt9WzdJ9A9nEZ9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/49915',
    },
    population: 97338583,
    gini: {
      '2018': 35.7,
    },
    fifa: 'VIE',
    car: {
      signs: ['VN'],
      side: 'right',
    },
    timezones: ['UTC+07:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/vn.png',
      svg: 'https://flagcdn.com/vn.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/vn.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/vn.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [21.03, 105.85],
    },
    postalCode: {
      format: '######',
      regex: '^(\\d{6})$',
    },
  },
  {
    name: {
      common: 'French Polynesia',
      official: 'French Polynesia',
      nativeName: {
        fra: {
          official: 'Polynésie française',
          common: 'Polynésie française',
        },
      },
    },
    tld: ['.pf'],
    cca2: 'PF',
    ccn3: '258',
    cca3: 'PYF',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      XPF: {
        name: 'CFP franc',
        symbol: '₣',
      },
    },
    idd: {
      root: '+6',
      suffixes: ['89'],
    },
    capital: ['Papeetē'],
    altSpellings: ['PF', 'Polynésie française', 'French Polynesia', 'Pōrīnetia Farāni'],
    region: 'Oceania',
    subregion: 'Polynesia',
    languages: {
      fra: 'French',
    },
    translations: {
      ara: {
        official: 'بولينزيا الفرنسية',
        common: 'بولينزيا الفرنسية',
      },
      ces: {
        official: 'Francouzská Polynésie',
        common: 'Francouzská Polynésie',
      },
      cym: {
        official: 'French Polynesia',
        common: 'French Polynesia',
      },
      deu: {
        official: 'Französisch-Polynesien',
        common: 'Französisch-Polynesien',
      },
      est: {
        official: 'Prantsuse Polüneesia',
        common: 'Prantsuse Polüneesia',
      },
      fin: {
        official: 'Ranskan Polynesia',
        common: 'Ranskan Polynesia',
      },
      fra: {
        official: 'Polynésie française',
        common: 'Polynésie française',
      },
      hrv: {
        official: 'Francuska Polinezija',
        common: 'Francuska Polinezija',
      },
      hun: {
        official: 'Francia Polinézia',
        common: 'Francia Polinézia',
      },
      ita: {
        official: 'Polinesia Francese',
        common: 'Polinesia Francese',
      },
      jpn: {
        official: 'フランス領ポリネシア',
        common: 'フランス領ポリネシア',
      },
      kor: {
        official: '프랑스령 폴리네시아',
        common: '프랑스령 폴리네시아',
      },
      nld: {
        official: 'Frans-Polynesië',
        common: 'Frans-Polynesië',
      },
      per: {
        official: 'پُلی‌نِزی فرانسه',
        common: 'پُلی‌نِزی فرانسه',
      },
      pol: {
        official: 'Polinezja Francuska',
        common: 'Polinezja Francuska',
      },
      por: {
        official: 'Polinésia Francesa',
        common: 'Polinésia Francesa',
      },
      rus: {
        official: 'Французская Полинезия',
        common: 'Французская Полинезия',
      },
      slk: {
        official: 'Francúzska Polynézia',
        common: 'Francúzska Polynézia',
      },
      spa: {
        official: 'Polinesia francés',
        common: 'Polinesia Francesa',
      },
      swe: {
        official: 'Franska Polynesien',
        common: 'Franska Polynesien',
      },
      urd: {
        official: 'فرانسیسی پولینیشیا',
        common: 'فرانسیسی پولینیشیا',
      },
      zho: {
        official: '法属波利尼西亚',
        common: '法属波利尼西亚',
      },
    },
    latlng: [-15.0, -140.0],
    landlocked: false,
    area: 4167.0,
    demonyms: {
      eng: {
        f: 'French Polynesian',
        m: 'French Polynesian',
      },
      fra: {
        f: 'Polynésienne',
        m: 'Polynésien',
      },
    },
    flag: '\uD83C\uDDF5\uD83C\uDDEB',
    maps: {
      googleMaps: 'https://goo.gl/maps/xgg6BQTRyeQg4e1m6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/3412620',
    },
    population: 280904,
    car: {
      signs: ['F'],
      side: 'right',
    },
    timezones: ['UTC-10:00', 'UTC-09:30', 'UTC-09:00'],
    continents: ['Oceania'],
    flags: {
      png: 'https://flagcdn.com/w320/pf.png',
      svg: 'https://flagcdn.com/pf.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/pf.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/pf.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-17.53, -149.56],
    },
    postalCode: {
      format: '#####',
      regex: '^((97|98)7\\d{2})$',
    },
  },
  {
    name: {
      common: 'Trinidad and Tobago',
      official: 'Republic of Trinidad and Tobago',
      nativeName: {
        eng: {
          official: 'Republic of Trinidad and Tobago',
          common: 'Trinidad and Tobago',
        },
      },
    },
    tld: ['.tt'],
    cca2: 'TT',
    ccn3: '780',
    cca3: 'TTO',
    cioc: 'TTO',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      TTD: {
        name: 'Trinidad and Tobago dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+1',
      suffixes: ['868'],
    },
    capital: ['Port of Spain'],
    altSpellings: ['TT', 'Republic of Trinidad and Tobago'],
    region: 'Americas',
    subregion: 'Caribbean',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'جمهورية ترينيداد وتوباغو',
        common: 'ترينيداد وتوباغو',
      },
      ces: {
        official: 'Republika Trinidad a Tobago',
        common: 'Trinidad a Tobago',
      },
      cym: {
        official: 'Republic of Trinidad and Tobago',
        common: 'Trinidad and Tobago',
      },
      deu: {
        official: 'Republik Trinidad und Tobago',
        common: 'Trinidad und Tobago',
      },
      est: {
        official: 'Trinidadi ja Tobago Vabariik',
        common: 'Trinidad ja Tobago',
      },
      fin: {
        official: 'Trinidadin ja Tobagon tasavalta',
        common: 'Trinidad ja Tobago',
      },
      fra: {
        official: 'République de Trinité-et-Tobago',
        common: 'Trinité-et-Tobago',
      },
      hrv: {
        official: 'Republika Trinidad i Tobago',
        common: 'Trinidad i Tobago',
      },
      hun: {
        official: 'Trinidad és Tobago Köztársaság',
        common: 'Trinidad és Tobago',
      },
      ita: {
        official: 'Repubblica di Trinidad e Tobago',
        common: 'Trinidad e Tobago',
      },
      jpn: {
        official: 'トリニダード·トバゴ共和国',
        common: 'トリニダード・トバゴ',
      },
      kor: {
        official: '트리니다드 토바고 공화국',
        common: '트리니다드 토바고',
      },
      nld: {
        official: 'Republiek Trinidad en Tobago',
        common: 'Trinidad en Tobago',
      },
      per: {
        official: 'جمهوری ترینیداد و توباگو',
        common: 'ترینیداد و توباگو',
      },
      pol: {
        official: 'Trynidad i Tobago',
        common: 'Trynidad i Tobago',
      },
      por: {
        official: 'República de Trinidad e Tobago',
        common: 'Trinidade e Tobago',
      },
      rus: {
        official: 'Республика Тринидад и Тобаго',
        common: 'Тринидад и Тобаго',
      },
      slk: {
        official: 'Republika Trinidad a Tobaga',
        common: 'Trinidad a Tobago',
      },
      spa: {
        official: 'República de Trinidad y Tobago',
        common: 'Trinidad y Tobago',
      },
      swe: {
        official: 'Republiken Trinidad och Tobago',
        common: 'Trinidad och Tobago',
      },
      urd: {
        official: 'جمہوریہ ٹرینیڈاڈ و ٹوباگو',
        common: 'ٹرینیڈاڈ و ٹوباگو',
      },
      zho: {
        official: '特立尼达和多巴哥共和国',
        common: '特立尼达和多巴哥',
      },
    },
    latlng: [11.0, -61.0],
    landlocked: false,
    area: 5130.0,
    demonyms: {
      eng: {
        f: 'Trinidadian',
        m: 'Trinidadian',
      },
      fra: {
        f: 'Trinidadienne',
        m: 'Trinidadien',
      },
    },
    flag: '\uD83C\uDDF9\uD83C\uDDF9',
    maps: {
      googleMaps: 'https://goo.gl/maps/NrRfDEWoG8FGZqWY7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/555717',
    },
    population: 1399491,
    gini: {
      '1992': 40.3,
    },
    fifa: 'TRI',
    car: {
      signs: ['TT'],
      side: 'left',
    },
    timezones: ['UTC-04:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/tt.png',
      svg: 'https://flagcdn.com/tt.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/tt.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/tt.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [10.65, -61.52],
    },
  },
  {
    name: {
      common: 'Malawi',
      official: 'Republic of Malawi',
      nativeName: {
        eng: {
          official: 'Republic of Malawi',
          common: 'Malawi',
        },
        nya: {
          official: 'Chalo cha Malawi, Dziko la Malaŵi',
          common: 'Malaŵi',
        },
      },
    },
    tld: ['.mw'],
    cca2: 'MW',
    ccn3: '454',
    cca3: 'MWI',
    cioc: 'MAW',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      MWK: {
        name: 'Malawian kwacha',
        symbol: 'MK',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['65'],
    },
    capital: ['Lilongwe'],
    altSpellings: ['MW', 'Republic of Malawi'],
    region: 'Africa',
    subregion: 'Eastern Africa',
    languages: {
      eng: 'English',
      nya: 'Chewa',
    },
    translations: {
      ara: {
        official: 'جمهورية مالاوي',
        common: 'مالاوي',
      },
      ces: {
        official: 'Malawiská republika',
        common: 'Malawi',
      },
      cym: {
        official: 'Republic of Malawi',
        common: 'Malawi',
      },
      deu: {
        official: 'Republik Malawi',
        common: 'Malawi',
      },
      est: {
        official: 'Malawi Vabariik',
        common: 'Malawi',
      },
      fin: {
        official: 'Malawin tasavalta',
        common: 'Malawi',
      },
      fra: {
        official: 'République du Malawi',
        common: 'Malawi',
      },
      hrv: {
        official: 'Republika Malavi',
        common: 'Malavi',
      },
      hun: {
        official: 'Malawi Köztársaság',
        common: 'Malawi',
      },
      ita: {
        official: 'Repubblica del Malawi',
        common: 'Malawi',
      },
      jpn: {
        official: 'マラウイ共和国',
        common: 'マラウイ',
      },
      kor: {
        official: '말라위 공화국',
        common: '말라위',
      },
      nld: {
        official: 'Republiek Malawi',
        common: 'Malawi',
      },
      per: {
        official: 'جمهوری مالاوی',
        common: 'مالاوی',
      },
      pol: {
        official: 'Republika Malawi',
        common: 'Malawi',
      },
      por: {
        official: 'República do Malawi',
        common: 'Malawi',
      },
      rus: {
        official: 'Республика Малави',
        common: 'Малави',
      },
      slk: {
        official: 'Malawijská republika',
        common: 'Malawi',
      },
      spa: {
        official: 'República de Malawi',
        common: 'Malawi',
      },
      swe: {
        official: 'Republiken Malawi',
        common: 'Malawi',
      },
      urd: {
        official: 'جمہوریہ ملاوی',
        common: 'ملاوی',
      },
      zho: {
        official: '马拉维共和国',
        common: '马拉维',
      },
    },
    latlng: [-13.5, 34.0],
    landlocked: true,
    borders: ['MOZ', 'TZA', 'ZMB'],
    area: 118484.0,
    demonyms: {
      eng: {
        f: 'Malawian',
        m: 'Malawian',
      },
      fra: {
        f: 'Malawienne',
        m: 'Malawien',
      },
    },
    flag: '\uD83C\uDDF2\uD83C\uDDFC',
    maps: {
      googleMaps: 'https://goo.gl/maps/mc6z83pW9m98X2Ef6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/195290',
    },
    population: 19129955,
    gini: {
      '2016': 44.7,
    },
    fifa: 'MWI',
    car: {
      signs: ['MW'],
      side: 'left',
    },
    timezones: ['UTC+02:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/mw.png',
      svg: 'https://flagcdn.com/mw.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/mw.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/mw.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-13.97, 33.78],
    },
  },
  {
    name: {
      common: 'Croatia',
      official: 'Republic of Croatia',
      nativeName: {
        hrv: {
          official: 'Republika Hrvatska',
          common: 'Hrvatska',
        },
      },
    },
    tld: ['.hr'],
    cca2: 'HR',
    ccn3: '191',
    cca3: 'HRV',
    cioc: 'CRO',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      HRK: {
        name: 'Croatian kuna',
        symbol: 'kn',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['85'],
    },
    capital: ['Zagreb'],
    altSpellings: ['HR', 'Hrvatska', 'Republic of Croatia', 'Republika Hrvatska'],
    region: 'Europe',
    subregion: 'Southeast Europe',
    languages: {
      hrv: 'Croatian',
    },
    translations: {
      ara: {
        official: 'جمهورية كرواتيا',
        common: 'كرواتيا',
      },
      ces: {
        official: 'Chorvatská republika',
        common: 'Chorvatsko',
      },
      cym: {
        official: 'Gweriniaeth Croatia',
        common: 'Croatia',
      },
      deu: {
        official: 'Republik Kroatien',
        common: 'Kroatien',
      },
      est: {
        official: 'Horvaatia Vabariik',
        common: 'Horvaatia',
      },
      fin: {
        official: 'Kroatian tasavalta',
        common: 'Kroatia',
      },
      fra: {
        official: 'République de Croatie',
        common: 'Croatie',
      },
      hrv: {
        official: 'Republika Hrvatska',
        common: 'Hrvatska',
      },
      hun: {
        official: 'Horvát Köztársaság',
        common: 'Horvátország',
      },
      ita: {
        official: 'Repubblica di Croazia',
        common: 'Croazia',
      },
      jpn: {
        official: 'クロアチア共和国',
        common: 'クロアチア',
      },
      kor: {
        official: '크로아티아 공화국',
        common: '크로아티아',
      },
      nld: {
        official: 'Republiek Kroatië',
        common: 'Kroatië',
      },
      per: {
        official: 'جمهوری کرواسی',
        common: 'کرُواسی',
      },
      pol: {
        official: 'Republika Chorwacji',
        common: 'Chorwacja',
      },
      por: {
        official: 'República da Croácia',
        common: 'Croácia',
      },
      rus: {
        official: 'Республика Хорватия',
        common: 'Хорватия',
      },
      slk: {
        official: 'Chorvátska republika',
        common: 'Chorvátsko',
      },
      spa: {
        official: 'República de Croacia',
        common: 'Croacia',
      },
      swe: {
        official: 'Republiken Kroatien',
        common: 'Kroatien',
      },
      urd: {
        official: 'جمہوریہ کرویئشا',
        common: 'کرویئشا',
      },
      zho: {
        official: '克罗地亚共和国',
        common: '克罗地亚',
      },
    },
    latlng: [45.16666666, 15.5],
    landlocked: false,
    borders: ['BIH', 'HUN', 'MNE', 'SRB', 'SVN'],
    area: 56594.0,
    demonyms: {
      eng: {
        f: 'Croatian',
        m: 'Croatian',
      },
      fra: {
        f: 'Croate',
        m: 'Croate',
      },
    },
    flag: '\uD83C\uDDED\uD83C\uDDF7',
    maps: {
      googleMaps: 'https://goo.gl/maps/qSG6xTKUmrYpwmGQ6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/214885',
    },
    population: 4047200,
    gini: {
      '2018': 29.7,
    },
    fifa: 'CRO',
    car: {
      signs: ['HR'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/hr.png',
      svg: 'https://flagcdn.com/hr.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/hr.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/hr.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [45.8, 16.0],
    },
    postalCode: {
      format: 'HR-#####',
      regex: '^(?:HR)*(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Madagascar',
      official: 'Republic of Madagascar',
      nativeName: {
        fra: {
          official: 'République de Madagascar',
          common: 'Madagascar',
        },
        mlg: {
          official: "Repoblikan'i Madagasikara",
          common: 'Madagasikara',
        },
      },
    },
    tld: ['.mg'],
    cca2: 'MG',
    ccn3: '450',
    cca3: 'MDG',
    cioc: 'MAD',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      MGA: {
        name: 'Malagasy ariary',
        symbol: 'Ar',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['61'],
    },
    capital: ['Antananarivo'],
    altSpellings: ['MG', 'Republic of Madagascar', "Repoblikan'i Madagasikara", 'République de Madagascar'],
    region: 'Africa',
    subregion: 'Eastern Africa',
    languages: {
      fra: 'French',
      mlg: 'Malagasy',
    },
    translations: {
      ara: {
        official: 'جمهورية مدغشقر',
        common: 'مدغشقر',
      },
      ces: {
        official: 'Madagaskarská republika',
        common: 'Madagaskar',
      },
      cym: {
        official: 'Republic of Madagascar',
        common: 'Madagascar',
      },
      deu: {
        official: 'Republik Madagaskar',
        common: 'Madagaskar',
      },
      est: {
        official: 'Madagaskari Vabariik',
        common: 'Madagaskar',
      },
      fin: {
        official: 'Madagaskarin tasavalta',
        common: 'Madagaskar',
      },
      fra: {
        official: 'République de Madagascar',
        common: 'Madagascar',
      },
      hrv: {
        official: 'Republika Madagaskar',
        common: 'Madagaskar',
      },
      hun: {
        official: 'Madagaszkári Köztársaság',
        common: 'Madagaszkár',
      },
      ita: {
        official: 'Repubblica del Madagascar',
        common: 'Madagascar',
      },
      jpn: {
        official: 'マダガスカル共和国',
        common: 'マダガスカル',
      },
      kor: {
        official: '마다가스카르 공화국',
        common: '마다가스카르',
      },
      nld: {
        official: 'Republiek Madagaskar',
        common: 'Madagaskar',
      },
      per: {
        official: 'جمهوری ماداگاسکار',
        common: 'ماداگاسکار',
      },
      pol: {
        official: 'Republika Madagaskaru',
        common: 'Madagaskar',
      },
      por: {
        official: 'República de Madagáscar',
        common: 'Madagáscar',
      },
      rus: {
        official: 'Республика Мадагаскар',
        common: 'Мадагаскар',
      },
      slk: {
        official: 'Madagaskarská republika',
        common: 'Madagaskar',
      },
      spa: {
        official: 'República de Madagascar',
        common: 'Madagascar',
      },
      swe: {
        official: 'Republiken Madagaskar',
        common: 'Madagaskar',
      },
      urd: {
        official: 'جمہوریہ مڈغاسکر',
        common: 'مڈغاسکر',
      },
      zho: {
        official: '马达加斯加共和国',
        common: '马达加斯加',
      },
    },
    latlng: [-20.0, 47.0],
    landlocked: false,
    area: 587041.0,
    demonyms: {
      eng: {
        f: 'Malagasy',
        m: 'Malagasy',
      },
      fra: {
        f: 'Malgache',
        m: 'Malgache',
      },
    },
    flag: '\uD83C\uDDF2\uD83C\uDDEC',
    maps: {
      googleMaps: 'https://goo.gl/maps/AHQh2ABBaFW6Ngj26',
      openStreetMaps: 'https://www.openstreetmap.org/relation/447325',
    },
    population: 27691019,
    gini: {
      '2012': 42.6,
    },
    fifa: 'MAD',
    car: {
      signs: ['RM'],
      side: 'right',
    },
    timezones: ['UTC+03:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/mg.png',
      svg: 'https://flagcdn.com/mg.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/mg.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/mg.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-18.92, 47.52],
    },
    postalCode: {
      format: '###',
      regex: '^(\\d{3})$',
    },
  },
  {
    name: {
      common: 'Armenia',
      official: 'Republic of Armenia',
      nativeName: {
        hye: {
          official: 'Հայաստանի Հանրապետություն',
          common: 'Հայաստան',
        },
      },
    },
    tld: ['.am'],
    cca2: 'AM',
    ccn3: '051',
    cca3: 'ARM',
    cioc: 'ARM',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      AMD: {
        name: 'Armenian dram',
        symbol: '֏',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['74'],
    },
    capital: ['Yerevan'],
    altSpellings: ['AM', 'Hayastan', 'Republic of Armenia', 'Հայաստանի Հանրապետություն'],
    region: 'Asia',
    subregion: 'Western Asia',
    languages: {
      hye: 'Armenian',
    },
    translations: {
      ara: {
        official: 'جمهورية أرمينيا',
        common: 'أرمينيا',
      },
      ces: {
        official: 'Arménská republika',
        common: 'Arménie',
      },
      cym: {
        official: 'Gweriniaeth Armenia',
        common: 'Armenia',
      },
      deu: {
        official: 'Republik Armenien',
        common: 'Armenien',
      },
      est: {
        official: 'Armeenia Vabariik',
        common: 'Armeenia',
      },
      fin: {
        official: 'Armenian tasavalta',
        common: 'Armenia',
      },
      fra: {
        official: "République d'Arménie",
        common: 'Arménie',
      },
      hrv: {
        official: 'Republika Armenija',
        common: 'Armenija',
      },
      hun: {
        official: 'Örményország',
        common: 'Örményország',
      },
      ita: {
        official: 'Repubblica di Armenia',
        common: 'Armenia',
      },
      jpn: {
        official: 'アルメニア共和国',
        common: 'アルメニア',
      },
      kor: {
        official: '아르메니아 공화국',
        common: '아르메니아',
      },
      nld: {
        official: 'Republiek Armenië',
        common: 'Armenië',
      },
      per: {
        official: 'جمهوری ارمنستان',
        common: 'ارمنستان',
      },
      pol: {
        official: 'Republika Armenii',
        common: 'Armenia',
      },
      por: {
        official: 'República da Arménia',
        common: 'Arménia',
      },
      rus: {
        official: 'Республика Армения',
        common: 'Армения',
      },
      slk: {
        official: 'Arménska republika',
        common: 'Arménsko',
      },
      spa: {
        official: 'República de Armenia',
        common: 'Armenia',
      },
      swe: {
        official: 'Republiken Armenien',
        common: 'Armenien',
      },
      urd: {
        official: 'جمہوریہ آرمینیا',
        common: 'آرمینیا',
      },
      zho: {
        official: '亚美尼亚共和国',
        common: '亚美尼亚',
      },
    },
    latlng: [40.0, 45.0],
    landlocked: true,
    borders: ['AZE', 'GEO', 'IRN', 'TUR'],
    area: 29743.0,
    demonyms: {
      eng: {
        f: 'Armenian',
        m: 'Armenian',
      },
      fra: {
        f: 'Arménienne',
        m: 'Arménien',
      },
    },
    flag: '\uD83C\uDDE6\uD83C\uDDF2',
    maps: {
      googleMaps: 'https://goo.gl/maps/azWUtK9bUQYEyccbA',
      openStreetMaps: 'https://www.openstreetmap.org/relation/364066',
    },
    population: 2963234,
    gini: {
      '2019': 29.9,
    },
    fifa: 'ARM',
    car: {
      signs: ['AM'],
      side: 'right',
    },
    timezones: ['UTC+04:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/am.png',
      svg: 'https://flagcdn.com/am.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/am.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/am.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [40.17, 44.5],
    },
    postalCode: {
      format: '######',
      regex: '^(\\d{6})$',
    },
  },
  {
    name: {
      common: 'Austria',
      official: 'Republic of Austria',
      nativeName: {
        bar: {
          official: 'Republik Österreich',
          common: 'Österreich',
        },
      },
    },
    tld: ['.at'],
    cca2: 'AT',
    ccn3: '040',
    cca3: 'AUT',
    cioc: 'AUT',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    idd: {
      root: '+4',
      suffixes: ['3'],
    },
    capital: ['Vienna'],
    altSpellings: ['AT', 'Osterreich', 'Oesterreich'],
    region: 'Europe',
    subregion: 'Central Europe',
    languages: {
      bar: 'Austro-Bavarian German',
    },
    translations: {
      ara: {
        official: 'جمهورية النمسا',
        common: 'النمسا',
      },
      ces: {
        official: 'Rakouská republika',
        common: 'Rakousko',
      },
      cym: {
        official: 'Gweriniaeth Awstria',
        common: 'Awstria',
      },
      deu: {
        official: 'Republik Österreich',
        common: 'Österreich',
      },
      est: {
        official: 'Austria Vabariik',
        common: 'Austria',
      },
      fin: {
        official: 'Itävallan tasavalta',
        common: 'Itävalta',
      },
      fra: {
        official: "République d'Autriche",
        common: 'Autriche',
      },
      hrv: {
        official: 'Republika Austrija',
        common: 'Austrija',
      },
      hun: {
        official: 'Ausztria',
        common: 'Ausztria',
      },
      ita: {
        official: "Repubblica d'Austria",
        common: 'Austria',
      },
      jpn: {
        official: 'オーストリア共和国',
        common: 'オーストリア',
      },
      kor: {
        official: '오스트리아 공화국',
        common: '오스트리아',
      },
      nld: {
        official: 'Republiek Oostenrijk',
        common: 'Oostenrijk',
      },
      per: {
        official: 'جمهوری اتریش',
        common: 'اتریش',
      },
      pol: {
        official: 'Republika Austrii',
        common: 'Austria',
      },
      por: {
        official: 'República da Áustria',
        common: 'Áustria',
      },
      rus: {
        official: 'Австрийская Республика',
        common: 'Австрия',
      },
      slk: {
        official: 'Rakúska republika',
        common: 'Rakúsko',
      },
      spa: {
        official: 'República de Austria',
        common: 'Austria',
      },
      swe: {
        official: 'Republiken Österrike',
        common: 'Österrike',
      },
      urd: {
        official: 'جمہوریہ آسٹریا',
        common: 'آسٹریا',
      },
      zho: {
        official: '奥地利共和国',
        common: '奥地利',
      },
    },
    latlng: [47.33333333, 13.33333333],
    landlocked: true,
    borders: ['CZE', 'DEU', 'HUN', 'ITA', 'LIE', 'SVK', 'SVN', 'CHE'],
    area: 83871.0,
    demonyms: {
      eng: {
        f: 'Austrian',
        m: 'Austrian',
      },
      fra: {
        f: 'Autrichienne',
        m: 'Autrichien',
      },
    },
    flag: '\uD83C\uDDE6\uD83C\uDDF9',
    maps: {
      googleMaps: 'https://goo.gl/maps/pCWpWQhznHyRzQcu9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/16239',
    },
    population: 8917205,
    gini: {
      '2018': 30.8,
    },
    fifa: 'AUT',
    car: {
      signs: ['A'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/at.png',
      svg: 'https://flagcdn.com/at.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/at.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/at.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [48.2, 16.37],
    },
    postalCode: {
      format: '####',
      regex: '^(\\d{4})$',
    },
  },
  {
    name: {
      common: 'Saint Pierre and Miquelon',
      official: 'Saint Pierre and Miquelon',
      nativeName: {
        fra: {
          official: 'Collectivité territoriale de Saint-Pierre-et-Miquelon',
          common: 'Saint-Pierre-et-Miquelon',
        },
      },
    },
    tld: ['.pm'],
    cca2: 'PM',
    ccn3: '666',
    cca3: 'SPM',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    idd: {
      root: '+5',
      suffixes: ['08'],
    },
    capital: ['Saint-Pierre'],
    altSpellings: ['PM', 'Collectivité territoriale de Saint-Pierre-et-Miquelon'],
    region: 'Americas',
    subregion: 'North America',
    languages: {
      fra: 'French',
    },
    translations: {
      ara: {
        official: 'سان بيير وميكلون',
        common: 'سان بيير وميكلون',
      },
      ces: {
        official: 'Saint-Pierre a Miquelon',
        common: 'Saint-Pierre a Miquelon',
      },
      cym: {
        official: 'Saint Pierre and Miquelon',
        common: 'Saint Pierre and Miquelon',
      },
      deu: {
        official: 'St. Pierre und Miquelon',
        common: 'St. Pierre und Miquelon',
      },
      est: {
        official: 'Saint-Pierre’i ja Miqueloni territoriaalühendus',
        common: 'Saint-Pierre ja Miquelon',
      },
      fin: {
        official: 'Saint-Pierre ja Miquelon',
        common: 'Saint-Pierre ja Miquelon',
      },
      fra: {
        official: 'Saint-Pierre-et-Miquelon',
        common: 'Saint-Pierre-et-Miquelon',
      },
      hrv: {
        official: 'Saint Pierre i Miquelon',
        common: 'Sveti Petar i Mikelon',
      },
      hun: {
        official: 'Saint-Pierre és Miquelon',
        common: 'Saint-Pierre és Miquelon',
      },
      ita: {
        official: 'Saint Pierre e Miquelon',
        common: 'Saint-Pierre e Miquelon',
      },
      jpn: {
        official: 'サンピエール島·ミクロン島',
        common: 'サンピエール島・ミクロン島',
      },
      kor: {
        official: '생피에르 미클롱',
        common: '생피에르 미클롱',
      },
      nld: {
        official: 'Saint-Pierre en Miquelon',
        common: 'Saint Pierre en Miquelon',
      },
      per: {
        official: 'سن-پیر-ا-میکلون',
        common: 'سن-پیِر و میکلُن',
      },
      pol: {
        official: 'Saint-Pierre i Miquelon',
        common: 'Saint-Pierre i Miquelon',
      },
      por: {
        official: 'Saint Pierre e Miquelon',
        common: 'Saint-Pierre e Miquelon',
      },
      rus: {
        official: 'Сен-Пьер и Микелон',
        common: 'Сен-Пьер и Микелон',
      },
      slk: {
        official: 'Ostrovy Saint Pierre a Miquelon',
        common: 'Saint Pierre a Miquelon',
      },
      spa: {
        official: 'San Pedro y Miquelón',
        common: 'San Pedro y Miquelón',
      },
      swe: {
        official: 'Saint-Pierre och Miquelon',
        common: 'Saint-Pierre och Miquelon',
      },
      urd: {
        official: 'سینٹ پیئر و میکیلون',
        common: 'سینٹ پیئر و میکیلون',
      },
      zho: {
        official: '圣皮埃尔和密克隆',
        common: '圣皮埃尔和密克隆',
      },
    },
    latlng: [46.83333333, -56.33333333],
    landlocked: false,
    area: 242.0,
    demonyms: {
      eng: {
        f: 'Saint-Pierrais, Miquelonnais',
        m: 'Saint-Pierrais, Miquelonnais',
      },
      fra: {
        f: 'Saint-Pierraise, Miquelonaise',
        m: 'Saint-Pierrais, Miquelonais',
      },
    },
    flag: '\uD83C\uDDF5\uD83C\uDDF2',
    maps: {
      googleMaps: 'https://goo.gl/maps/bUM8Yc8pA8ghyhmt6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/3406826',
    },
    population: 6069,
    car: {
      signs: ['F'],
      side: 'right',
    },
    timezones: ['UTC-03:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/pm.png',
      svg: 'https://flagcdn.com/pm.svg',
    },
    coatOfArms: {},
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [46.77, -56.18],
    },
    postalCode: {
      format: '#####',
      regex: '^(97500)$',
    },
  },
  {
    name: {
      common: 'Afghanistan',
      official: 'Islamic Republic of Afghanistan',
      nativeName: {
        prs: {
          official: 'جمهوری اسلامی افغانستان',
          common: 'افغانستان',
        },
        pus: {
          official: 'د افغانستان اسلامي جمهوریت',
          common: 'افغانستان',
        },
        tuk: {
          official: 'Owganystan Yslam Respublikasy',
          common: 'Owganystan',
        },
      },
    },
    tld: ['.af'],
    cca2: 'AF',
    ccn3: '004',
    cca3: 'AFG',
    cioc: 'AFG',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      AFN: {
        name: 'Afghan afghani',
        symbol: '؋',
      },
    },
    idd: {
      root: '+9',
      suffixes: ['3'],
    },
    capital: ['Kabul'],
    altSpellings: ['AF', 'Afġānistān'],
    region: 'Asia',
    subregion: 'Southern Asia',
    languages: {
      prs: 'Dari',
      pus: 'Pashto',
      tuk: 'Turkmen',
    },
    translations: {
      ara: {
        official: 'جمهورية أففانستان الإسلامية',
        common: 'أفغانستان',
      },
      ces: {
        official: 'Afghánská islámská republika',
        common: 'Afghánistán',
      },
      cym: {
        official: 'Gweriniaeth Islamaidd Affganistan',
        common: 'Affganistan',
      },
      deu: {
        official: 'Islamische Republik Afghanistan',
        common: 'Afghanistan',
      },
      est: {
        official: 'Afganistani Islamivabariik',
        common: 'Afganistan',
      },
      fin: {
        official: 'Afganistanin islamilainen tasavalta',
        common: 'Afganistan',
      },
      fra: {
        official: "République islamique d'Afghanistan",
        common: 'Afghanistan',
      },
      hrv: {
        official: 'Islamska Republika Afganistan',
        common: 'Afganistan',
      },
      hun: {
        official: 'Afganisztáni Iszlám Köztársaság',
        common: 'Afganisztán',
      },
      ita: {
        official: "Repubblica islamica dell'Afghanistan",
        common: 'Afghanistan',
      },
      jpn: {
        official: 'アフガニスタン·イスラム共和国',
        common: 'アフガニスタン',
      },
      kor: {
        official: '아프가니스탄 이슬람 공화국',
        common: '아프가니스탄',
      },
      nld: {
        official: 'Islamitische Republiek Afghanistan',
        common: 'Afghanistan',
      },
      per: {
        official: 'جمهوری اسلامی افغانستان',
        common: 'افغانستان',
      },
      pol: {
        official: 'Islamska Republika Afganistanu',
        common: 'Afganistan',
      },
      por: {
        official: 'República Islâmica do Afeganistão',
        common: 'Afeganistão',
      },
      rus: {
        official: 'Исламская Республика Афганистан',
        common: 'Афганистан',
      },
      slk: {
        official: 'Afgánsky islamský štát',
        common: 'Afganistan',
      },
      spa: {
        official: 'República Islámica de Afganistán',
        common: 'Afganistán',
      },
      swe: {
        official: 'Islamiska republiken Afghanistan',
        common: 'Afghanistan',
      },
      urd: {
        official: 'اسلامی جمہوریہ افغانستان',
        common: 'افغانستان',
      },
      zho: {
        official: '阿富汗伊斯兰共和国',
        common: '阿富汗',
      },
    },
    latlng: [33.0, 65.0],
    landlocked: true,
    borders: ['IRN', 'PAK', 'TKM', 'UZB', 'TJK', 'CHN'],
    area: 652230.0,
    demonyms: {
      eng: {
        f: 'Afghan',
        m: 'Afghan',
      },
      fra: {
        f: 'Afghane',
        m: 'Afghan',
      },
    },
    flag: '\uD83C\uDDE6\uD83C\uDDEB',
    maps: {
      googleMaps: 'https://goo.gl/maps/BXBGw7yUUFknCfva9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/303427',
    },
    population: 2837743,
    fifa: 'AFG',
    car: {
      signs: ['AFG'],
      side: 'right',
    },
    timezones: ['UTC+04:30'],
    continents: ['Asia'],
    flags: {
      png: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png',
      svg: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/af.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/af.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [34.52, 69.18],
    },
  },
  {
    name: {
      common: 'Central African Republic',
      official: 'Central African Republic',
      nativeName: {
        fra: {
          official: 'République centrafricaine',
          common: 'République centrafricaine',
        },
        sag: {
          official: 'Ködörösêse tî Bêafrîka',
          common: 'Bêafrîka',
        },
      },
    },
    tld: ['.cf'],
    cca2: 'CF',
    ccn3: '140',
    cca3: 'CAF',
    cioc: 'CAF',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      XAF: {
        name: 'Central African CFA franc',
        symbol: 'Fr',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['36'],
    },
    capital: ['Bangui'],
    altSpellings: ['CF', 'Central African Republic', 'République centrafricaine'],
    region: 'Africa',
    subregion: 'Middle Africa',
    languages: {
      fra: 'French',
      sag: 'Sango',
    },
    translations: {
      ara: {
        official: 'جمهورية أفريقيا الوسطى',
        common: 'جمهورية أفريقيا الوسطى',
      },
      ces: {
        official: 'Středoafrická republika',
        common: 'Středoafrická republika',
      },
      cym: {
        official: 'Gweriniaeth Canolbarth Affrica',
        common: 'Gweriniaeth Canolbarth Affrica',
      },
      deu: {
        official: 'Zentralafrikanische Republik',
        common: 'Zentralafrikanische Republik',
      },
      est: {
        official: 'Kesk-Aafrika Vabariik',
        common: 'Kesk-Aafrika Vabariik',
      },
      fin: {
        official: 'Keski-Afrikan tasavalta',
        common: 'Keski-Afrikan tasavalta',
      },
      fra: {
        official: 'République centrafricaine',
        common: 'République centrafricaine',
      },
      hrv: {
        official: 'Centralna Afrička Republika',
        common: 'Srednjoafrička Republika',
      },
      hun: {
        official: 'Közép-afrikai Köztársaság',
        common: 'Közép-afrikai Köztársaság',
      },
      ita: {
        official: 'Repubblica Centrafricana',
        common: 'Repubblica Centrafricana',
      },
      jpn: {
        official: '中央アフリカ共和国',
        common: '中央アフリカ共和国',
      },
      kor: {
        official: '중앙아프리카 공화국',
        common: '중앙아프리카 공화국',
      },
      nld: {
        official: 'Centraal-Afrikaanse Republiek',
        common: 'Centraal-Afrikaanse Republiek',
      },
      per: {
        official: 'جمهوری آفریقای مرکزی',
        common: 'جمهوری آفریقای مرکزی',
      },
      pol: {
        official: 'Republika Środkowoafrykańska',
        common: 'Republika Środkowoafrykańska',
      },
      por: {
        official: 'República Centro-Africano',
        common: 'República Centro-Africana',
      },
      rus: {
        official: 'Центрально-Африканская Республика',
        common: 'Центральноафриканская Республика',
      },
      slk: {
        official: 'Stredoafrická republika',
        common: 'Stredoafrická republika',
      },
      spa: {
        official: 'República Centroafricana',
        common: 'República Centroafricana',
      },
      swe: {
        official: 'Centralafrikanska republiken',
        common: 'Centralafrikanska republiken',
      },
      urd: {
        official: 'وسطی افریقی جمہوریہ',
        common: 'وسطی افریقی جمہوریہ',
      },
      zho: {
        official: '中非共和国',
        common: '中非共和国',
      },
    },
    latlng: [7.0, 21.0],
    landlocked: true,
    borders: ['CMR', 'TCD', 'COD', 'COG', 'SSD', 'SDN'],
    area: 622984.0,
    demonyms: {
      eng: {
        f: 'Central African',
        m: 'Central African',
      },
      fra: {
        f: 'Centrafricaine',
        m: 'Centrafricain',
      },
    },
    flag: '\uD83C\uDDE8\uD83C\uDDEB',
    maps: {
      googleMaps: 'https://goo.gl/maps/51V8dsi2rGYC9n3c9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/192790',
    },
    population: 4829764,
    gini: {
      '2008': 56.2,
    },
    fifa: 'CTA',
    car: {
      signs: ['RCA'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/cf.png',
      svg: 'https://flagcdn.com/cf.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/cf.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/cf.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [4.37, 18.58],
    },
  },
  {
    name: {
      common: 'Zambia',
      official: 'Republic of Zambia',
      nativeName: {
        eng: {
          official: 'Republic of Zambia',
          common: 'Zambia',
        },
      },
    },
    tld: ['.zm'],
    cca2: 'ZM',
    ccn3: '894',
    cca3: 'ZMB',
    cioc: 'ZAM',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      ZMW: {
        name: 'Zambian kwacha',
        symbol: 'ZK',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['60'],
    },
    capital: ['Lusaka'],
    altSpellings: ['ZM', 'Republic of Zambia'],
    region: 'Africa',
    subregion: 'Eastern Africa',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'جمهورية زامبيا',
        common: 'زامبيا',
      },
      ces: {
        official: 'Zambijská republika',
        common: 'Zambie',
      },
      cym: {
        official: 'Republic of Zambia',
        common: 'Zambia',
      },
      deu: {
        official: 'Republik Sambia',
        common: 'Sambia',
      },
      est: {
        official: 'Sambia Vabariik',
        common: 'Sambia',
      },
      fin: {
        official: 'Sambian tasavalta',
        common: 'Sambia',
      },
      fra: {
        official: 'République de Zambie',
        common: 'Zambie',
      },
      hrv: {
        official: 'Republika Zambija',
        common: 'Zambija',
      },
      hun: {
        official: 'Zambiai Köztársaság',
        common: 'Zambia',
      },
      ita: {
        official: 'Repubblica di Zambia',
        common: 'Zambia',
      },
      jpn: {
        official: 'ザンビア共和国',
        common: 'ザンビア',
      },
      kor: {
        official: '잠비아 공화국',
        common: '잠비아',
      },
      nld: {
        official: 'Republiek Zambia',
        common: 'Zambia',
      },
      per: {
        official: 'جمهوری زامبیا',
        common: 'زامبیا',
      },
      pol: {
        official: 'Republika Zambii',
        common: 'Zambia',
      },
      por: {
        official: 'República da Zâmbia',
        common: 'Zâmbia',
      },
      rus: {
        official: 'Республика Замбия',
        common: 'Замбия',
      },
      slk: {
        official: 'Zambijská republika',
        common: 'Zambia',
      },
      spa: {
        official: 'República de Zambia',
        common: 'Zambia',
      },
      swe: {
        official: 'Republiken Zambia',
        common: 'Zambia',
      },
      urd: {
        official: 'جمہوریہ زیمبیا',
        common: 'زیمبیا',
      },
      zho: {
        official: '赞比亚共和国',
        common: '赞比亚',
      },
    },
    latlng: [-15.0, 30.0],
    landlocked: true,
    borders: ['AGO', 'BWA', 'COD', 'MWI', 'MOZ', 'NAM', 'TZA', 'ZWE'],
    area: 752612.0,
    demonyms: {
      eng: {
        f: 'Zambian',
        m: 'Zambian',
      },
      fra: {
        f: 'Zambienne',
        m: 'Zambien',
      },
    },
    flag: '\uD83C\uDDFF\uD83C\uDDF2',
    maps: {
      googleMaps: 'https://goo.gl/maps/mweBcqvW8TppZW6q9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/195271',
    },
    population: 18383956,
    gini: {
      '2015': 57.1,
    },
    fifa: 'ZAM',
    car: {
      signs: ['RNR'],
      side: 'left',
    },
    timezones: ['UTC+02:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/zm.png',
      svg: 'https://flagcdn.com/zm.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/zm.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/zm.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-15.42, 28.28],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Bangladesh',
      official: "People's Republic of Bangladesh",
      nativeName: {
        ben: {
          official: 'বাংলাদেশ গণপ্রজাতন্ত্রী',
          common: 'বাংলাদেশ',
        },
      },
    },
    tld: ['.bd'],
    cca2: 'BD',
    ccn3: '050',
    cca3: 'BGD',
    cioc: 'BAN',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      BDT: {
        name: 'Bangladeshi taka',
        symbol: '৳',
      },
    },
    idd: {
      root: '+8',
      suffixes: ['80'],
    },
    capital: ['Dhaka'],
    altSpellings: ['BD', "People's Republic of Bangladesh", 'Gônôprôjatôntri Bangladesh'],
    region: 'Asia',
    subregion: 'Southern Asia',
    languages: {
      ben: 'Bengali',
    },
    translations: {
      ara: {
        official: 'جمهورية بنغلاديش الشعبية',
        common: 'بنغلاديش',
      },
      ces: {
        official: 'Bangladéšská lidová republika',
        common: 'Bangladéš',
      },
      cym: {
        official: 'Gweriniaeth Pobl Bangladesh',
        common: 'Bangladesh',
      },
      deu: {
        official: 'Volksrepublik Bangladesch',
        common: 'Bangladesch',
      },
      est: {
        official: 'Bangladeshi Rahvavabariik',
        common: 'Bangladesh',
      },
      fin: {
        official: 'Bangladeshin kansantasavalta',
        common: 'Bangladesh',
      },
      fra: {
        official: 'La République populaire du Bangladesh',
        common: 'Bangladesh',
      },
      hrv: {
        official: 'Narodna Republika Bangladeš',
        common: 'Bangladeš',
      },
      hun: {
        official: 'Banglades',
        common: 'Banglades',
      },
      ita: {
        official: 'Repubblica popolare del Bangladesh',
        common: 'Bangladesh',
      },
      jpn: {
        official: 'バングラデシュ人民共和国',
        common: 'バングラデシュ',
      },
      kor: {
        official: '방글라데시 인민 공화국',
        common: '방글라데시',
      },
      nld: {
        official: 'Volksrepubliek Bangladesh',
        common: 'Bangladesh',
      },
      per: {
        official: 'جمهوری خلق بنگلادش',
        common: 'بنگلادش',
      },
      pol: {
        official: 'Ludowa Republika Bangladeszu',
        common: 'Bangladesz',
      },
      por: {
        official: 'República Popular do Bangladesh',
        common: 'Bangladesh',
      },
      rus: {
        official: 'Народная Республика Бангладеш',
        common: 'Бангладеш',
      },
      slk: {
        official: 'Bangladéšska ľudová republika',
        common: 'Bangladéš',
      },
      spa: {
        official: 'República Popular de Bangladesh',
        common: 'Bangladesh',
      },
      swe: {
        official: 'Folkrepubliken Bangladesh',
        common: 'Bangladesh',
      },
      urd: {
        official: 'عوامی جمہوریہ بنگلہ دیش',
        common: 'بنگلہ دیش',
      },
      zho: {
        official: '孟加拉人民共和国',
        common: '孟加拉国',
      },
    },
    latlng: [24.0, 90.0],
    landlocked: false,
    borders: ['MMR', 'IND'],
    area: 147570.0,
    demonyms: {
      eng: {
        f: 'Bangladeshi',
        m: 'Bangladeshi',
      },
      fra: {
        f: 'Bangladaise',
        m: 'Bangladais',
      },
    },
    flag: '\uD83C\uDDE7\uD83C\uDDE9',
    maps: {
      googleMaps: 'https://goo.gl/maps/op6gmLbHcvv6rLhH6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/184640',
    },
    population: 164689383,
    gini: {
      '2016': 32.4,
    },
    fifa: 'BAN',
    car: {
      signs: ['BD'],
      side: 'left',
    },
    timezones: ['UTC+06:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/bd.png',
      svg: 'https://flagcdn.com/bd.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/bd.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/bd.svg',
    },
    startOfWeek: 'sunday',
    capitalInfo: {
      latlng: [23.72, 90.4],
    },
    postalCode: {
      format: '####',
      regex: '^(\\d{4})$',
    },
  },
  {
    name: {
      common: 'Costa Rica',
      official: 'Republic of Costa Rica',
      nativeName: {
        spa: {
          official: 'República de Costa Rica',
          common: 'Costa Rica',
        },
      },
    },
    tld: ['.cr'],
    cca2: 'CR',
    ccn3: '188',
    cca3: 'CRI',
    cioc: 'CRC',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      CRC: {
        name: 'Costa Rican colón',
        symbol: '₡',
      },
    },
    idd: {
      root: '+5',
      suffixes: ['06'],
    },
    capital: ['San José'],
    altSpellings: ['CR', 'Republic of Costa Rica', 'República de Costa Rica'],
    region: 'Americas',
    subregion: 'Central America',
    languages: {
      spa: 'Spanish',
    },
    translations: {
      ara: {
        official: 'جمهورية كوستاريكا',
        common: 'كوستاريكا',
      },
      ces: {
        official: 'Kostarická republika',
        common: 'Kostarika',
      },
      cym: {
        official: 'Gweriniaeth Costa Rica',
        common: 'Costa Rica',
      },
      deu: {
        official: 'Republik Costa Rica',
        common: 'Costa Rica',
      },
      est: {
        official: 'Costa Rica Vabariik',
        common: 'Costa Rica',
      },
      fin: {
        official: 'Costa Rican tasavalta',
        common: 'Costa Rica',
      },
      fra: {
        official: 'République du Costa Rica',
        common: 'Costa Rica',
      },
      hrv: {
        official: 'Republika Kostarika',
        common: 'Kostarika',
      },
      hun: {
        official: 'Costa Rica-i Köztársaság',
        common: 'Costa Rica',
      },
      ita: {
        official: 'Repubblica di Costa Rica',
        common: 'Costa Rica',
      },
      jpn: {
        official: 'コスタリカ共和国',
        common: 'コスタリカ',
      },
      kor: {
        official: '코스타리카 공화국',
        common: '코스타리카',
      },
      nld: {
        official: 'Republiek Costa Rica',
        common: 'Costa Rica',
      },
      per: {
        official: 'جمهوری کاستاریکا',
        common: 'کاستاریکا',
      },
      pol: {
        official: 'Republika Kostaryki',
        common: 'Kostaryka',
      },
      por: {
        official: 'República da Costa Rica',
        common: 'Costa Rica',
      },
      rus: {
        official: 'Республика Коста-Рика',
        common: 'Коста-Рика',
      },
      slk: {
        official: 'Kostarická republika',
        common: 'Kostarika',
      },
      spa: {
        official: 'República de Costa Rica',
        common: 'Costa Rica',
      },
      swe: {
        official: 'Republiken Costa Rica',
        common: 'Costa Rica',
      },
      urd: {
        official: 'جمہوریہ کوسٹاریکا',
        common: 'کوسٹاریکا',
      },
      zho: {
        official: '哥斯达黎加共和国',
        common: '哥斯达黎加',
      },
    },
    latlng: [10.0, -84.0],
    landlocked: false,
    borders: ['NIC', 'PAN'],
    area: 51100.0,
    demonyms: {
      eng: {
        f: 'Costa Rican',
        m: 'Costa Rican',
      },
      fra: {
        f: 'Costaricaine',
        m: 'Costaricain',
      },
    },
    flag: '\uD83C\uDDE8\uD83C\uDDF7',
    maps: {
      googleMaps: 'https://goo.gl/maps/RFiwytjvNrpfKN7k6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/287667',
    },
    population: 5094114,
    gini: {
      '2019': 48.2,
    },
    fifa: 'CRC',
    car: {
      signs: ['CR'],
      side: 'right',
    },
    timezones: ['UTC-06:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/cr.png',
      svg: 'https://flagcdn.com/cr.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/cr.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/cr.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [9.93, -84.09],
    },
    postalCode: {
      format: '####',
      regex: '^(\\d{4})$',
    },
  },
  {
    name: {
      common: 'Faroe Islands',
      official: 'Faroe Islands',
      nativeName: {
        dan: {
          official: 'Færøerne',
          common: 'Færøerne',
        },
        fao: {
          official: 'Føroyar',
          common: 'Føroyar',
        },
      },
    },
    tld: ['.fo'],
    cca2: 'FO',
    ccn3: '234',
    cca3: 'FRO',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      DKK: {
        name: 'Danish krone',
        symbol: 'kr',
      },
      FOK: {
        name: 'Faroese króna',
        symbol: 'kr',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['98'],
    },
    capital: ['Tórshavn'],
    altSpellings: ['FO', 'Føroyar', 'Færøerne'],
    region: 'Europe',
    subregion: 'Northern Europe',
    languages: {
      dan: 'Danish',
      fao: 'Faroese',
    },
    translations: {
      ara: {
        official: 'جزر فارو',
        common: 'جزر فارو',
      },
      ces: {
        official: 'Faerské ostrovy',
        common: 'Faerské ostrovy',
      },
      cym: {
        official: 'Faroe Islands',
        common: 'Faroe Islands',
      },
      deu: {
        official: 'Färöer',
        common: 'Färöer-Inseln',
      },
      est: {
        official: 'Fääri saared',
        common: 'Fääri saared',
      },
      fin: {
        official: 'Färsaaret',
        common: 'Färsaaret',
      },
      fra: {
        official: 'Îles Féroé',
        common: 'Îles Féroé',
      },
      hrv: {
        official: 'Farski Otoci',
        common: 'Farski Otoci',
      },
      hun: {
        official: 'Feröer',
        common: 'Feröer',
      },
      ita: {
        official: 'Isole Faroe',
        common: 'Isole Far Oer',
      },
      jpn: {
        official: 'フェロー諸島',
        common: 'フェロー諸島',
      },
      kor: {
        official: '페로 제도',
        common: '페로 제도',
      },
      nld: {
        official: 'Faeröer',
        common: 'Faeröer',
      },
      per: {
        official: 'جزایر فاروئه',
        common: 'جزایر فاروئه',
      },
      pol: {
        official: 'Wyspy Owcze',
        common: 'Wyspy Owcze',
      },
      por: {
        official: 'Ilhas Faroe',
        common: 'Ilhas Faroé',
      },
      rus: {
        official: 'Фарерские острова',
        common: 'Фарерские острова',
      },
      slk: {
        official: 'Faerské ostrovy',
        common: 'Faerské ostrovy',
      },
      spa: {
        official: 'Islas Feroe',
        common: 'Islas Faroe',
      },
      swe: {
        official: 'Färöarna',
        common: 'Färöarna',
      },
      urd: {
        official: 'جزائر فارو',
        common: 'جزائر فارو',
      },
      zho: {
        official: '法罗群岛',
        common: '法罗群岛',
      },
    },
    latlng: [62.0, -7.0],
    landlocked: false,
    area: 1393.0,
    demonyms: {
      eng: {
        f: 'Faroese',
        m: 'Faroese',
      },
      fra: {
        f: 'Féroïenne',
        m: 'Féroïen',
      },
    },
    flag: '\uD83C\uDDEB\uD83C\uDDF4',
    maps: {
      googleMaps: 'https://goo.gl/maps/6sTru4SmHdEVcNkM6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/52939',
    },
    population: 48865,
    fifa: 'FRO',
    car: {
      signs: ['FO'],
      side: 'right',
    },
    timezones: ['UTC+00:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/fo.png',
      svg: 'https://flagcdn.com/fo.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/fo.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/fo.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [62.01, -6.77],
    },
    postalCode: {
      format: 'FO-###',
      regex: '^(?:FO)*(\\d{3})$',
    },
  },
  {
    name: {
      common: 'Uganda',
      official: 'Republic of Uganda',
      nativeName: {
        eng: {
          official: 'Republic of Uganda',
          common: 'Uganda',
        },
        swa: {
          official: 'Republic of Uganda',
          common: 'Uganda',
        },
      },
    },
    tld: ['.ug'],
    cca2: 'UG',
    ccn3: '800',
    cca3: 'UGA',
    cioc: 'UGA',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      UGX: {
        name: 'Ugandan shilling',
        symbol: 'Sh',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['56'],
    },
    capital: ['Kampala'],
    altSpellings: ['UG', 'Republic of Uganda', 'Jamhuri ya Uganda'],
    region: 'Africa',
    subregion: 'Eastern Africa',
    languages: {
      eng: 'English',
      swa: 'Swahili',
    },
    translations: {
      ara: {
        official: 'جمهورية أوغندا',
        common: 'أوغندا',
      },
      ces: {
        official: 'Ugandská republika',
        common: 'Uganda',
      },
      cym: {
        official: 'Republic of Uganda',
        common: 'Uganda',
      },
      deu: {
        official: 'Republik Uganda',
        common: 'Uganda',
      },
      est: {
        official: 'Uganda Vabariik',
        common: 'Uganda',
      },
      fin: {
        official: 'Ugandan tasavalta',
        common: 'Uganda',
      },
      fra: {
        official: "République de l'Ouganda",
        common: 'Ouganda',
      },
      hrv: {
        official: 'Republika Uganda',
        common: 'Uganda',
      },
      hun: {
        official: 'Ugandai Köztársaság',
        common: 'Uganda',
      },
      ita: {
        official: 'Repubblica di Uganda',
        common: 'Uganda',
      },
      jpn: {
        official: 'ウガンダ共和国',
        common: 'ウガンダ',
      },
      kor: {
        official: '우간다 공화국',
        common: '우간다',
      },
      nld: {
        official: 'Republiek Uganda',
        common: 'Oeganda',
      },
      per: {
        official: 'جمهوری اوگاندا',
        common: 'اوگاندا',
      },
      pol: {
        official: 'Republika Ugandy',
        common: 'Uganda',
      },
      por: {
        official: 'República do Uganda',
        common: 'Uganda',
      },
      rus: {
        official: 'Республика Уганда',
        common: 'Уганда',
      },
      slk: {
        official: 'Ugandská republika',
        common: 'Uganda',
      },
      spa: {
        official: 'República de Uganda',
        common: 'Uganda',
      },
      swe: {
        official: 'Republiken Uganda',
        common: 'Uganda',
      },
      urd: {
        official: 'جمہوریہ یوگنڈا',
        common: 'یوگنڈا',
      },
      zho: {
        official: '乌干达共和国',
        common: '乌干达',
      },
    },
    latlng: [1.0, 32.0],
    landlocked: true,
    borders: ['COD', 'KEN', 'RWA', 'SSD', 'TZA'],
    area: 241550.0,
    demonyms: {
      eng: {
        f: 'Ugandan',
        m: 'Ugandan',
      },
      fra: {
        f: 'Ougandaise',
        m: 'Ougandais',
      },
    },
    flag: '\uD83C\uDDFA\uD83C\uDDEC',
    maps: {
      googleMaps: 'https://goo.gl/maps/Y7812hFiGa8LD9N68',
      openStreetMaps: 'https://www.openstreetmap.org/relation/192796',
    },
    population: 45741000,
    gini: {
      '2016': 42.8,
    },
    fifa: 'UGA',
    car: {
      signs: ['EAU'],
      side: 'left',
    },
    timezones: ['UTC+03:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/ug.png',
      svg: 'https://flagcdn.com/ug.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ug.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ug.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [0.32, 32.55],
    },
  },
  {
    name: {
      common: 'Kazakhstan',
      official: 'Republic of Kazakhstan',
      nativeName: {
        kaz: {
          official: 'Қазақстан Республикасы',
          common: 'Қазақстан',
        },
        rus: {
          official: 'Республика Казахстан',
          common: 'Казахстан',
        },
      },
    },
    tld: ['.kz', '.қаз'],
    cca2: 'KZ',
    ccn3: '398',
    cca3: 'KAZ',
    cioc: 'KAZ',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      KZT: {
        name: 'Kazakhstani tenge',
        symbol: '₸',
      },
    },
    idd: {
      root: '+7',
      suffixes: ['6', '7'],
    },
    capital: ['Nur-Sultan'],
    altSpellings: [
      'KZ',
      'Qazaqstan',
      'Казахстан',
      'Republic of Kazakhstan',
      'Қазақстан Республикасы',
      'Qazaqstan Respublïkası',
      'Республика Казахстан',
      'Respublika Kazakhstan',
    ],
    region: 'Asia',
    subregion: 'Central Asia',
    languages: {
      kaz: 'Kazakh',
      rus: 'Russian',
    },
    translations: {
      ara: {
        official: 'جمهورية كازاخستان',
        common: 'كازاخستان',
      },
      ces: {
        official: 'Republika Kazachstán',
        common: 'Kazachstán',
      },
      cym: {
        official: 'Republic of Kazakhstan',
        common: 'Kazakhstan',
      },
      deu: {
        official: 'Republik Kasachstan',
        common: 'Kasachstan',
      },
      est: {
        official: 'Kasahstani Vabariik',
        common: 'Kasahstan',
      },
      fin: {
        official: 'Kazakstanin tasavalta',
        common: 'Kazakstan',
      },
      fra: {
        official: 'République du Kazakhstan',
        common: 'Kazakhstan',
      },
      hrv: {
        official: 'Republika Kazahstan',
        common: 'Kazahstan',
      },
      hun: {
        official: 'Kazah Köztársaság',
        common: 'Kazahsztán',
      },
      ita: {
        official: 'Repubblica del Kazakhstan',
        common: 'Kazakistan',
      },
      jpn: {
        official: 'カザフスタン共和国',
        common: 'カザフスタン',
      },
      kor: {
        official: '카자흐스탄 공화국',
        common: '카자흐스탄',
      },
      nld: {
        official: 'Republiek Kazachstan',
        common: 'Kazachstan',
      },
      per: {
        official: 'جمهوری قزاقستان',
        common: 'قزاقستان',
      },
      pol: {
        official: 'Republika Kazachstanu',
        common: 'Kazachstan',
      },
      por: {
        official: 'República do Cazaquistão',
        common: 'Cazaquistão',
      },
      rus: {
        official: 'Республика Казахстан',
        common: 'Казахстан',
      },
      slk: {
        official: 'Kazašská republika',
        common: 'Kazachstan',
      },
      spa: {
        official: 'República de Kazajstán',
        common: 'Kazajistán',
      },
      swe: {
        official: 'Republiken Kazakstan',
        common: 'Kazakstan',
      },
      urd: {
        official: 'جمہوریہ قازقستان',
        common: 'قازقستان',
      },
      zho: {
        official: '哈萨克斯坦共和国',
        common: '哈萨克斯坦',
      },
    },
    latlng: [48.0, 68.0],
    landlocked: true,
    borders: ['CHN', 'KGZ', 'RUS', 'TKM', 'UZB'],
    area: 2724900.0,
    demonyms: {
      eng: {
        f: 'Kazakhstani',
        m: 'Kazakhstani',
      },
      fra: {
        f: 'Kazakhstanaise',
        m: 'Kazakhstanais',
      },
    },
    flag: '\uD83C\uDDF0\uD83C\uDDFF',
    maps: {
      googleMaps: 'https://goo.gl/maps/8VohJGu7ShuzZYyeA',
      openStreetMaps: 'https://www.openstreetmap.org/relation/214665',
    },
    population: 18754440,
    gini: {
      '2018': 27.8,
    },
    fifa: 'KAZ',
    car: {
      signs: ['KZ'],
      side: 'right',
    },
    timezones: ['UTC+05:00', 'UTC+06:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/kz.png',
      svg: 'https://flagcdn.com/kz.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/kz.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/kz.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [51.16, 71.45],
    },
    postalCode: {
      format: '######',
      regex: '^(\\d{6})$',
    },
  },
  {
    name: {
      common: 'Bouvet Island',
      official: 'Bouvet Island',
      nativeName: {
        nor: {
          official: 'Bouvetøya',
          common: 'Bouvetøya',
        },
      },
    },
    tld: ['.bv'],
    cca2: 'BV',
    ccn3: '074',
    cca3: 'BVT',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    idd: {
      root: '+4',
      suffixes: ['7'],
    },
    altSpellings: ['BV', 'Bouvetøya', 'Bouvet-øya'],
    region: 'Antarctic',
    languages: {
      nor: 'Norwegian',
    },
    translations: {
      ara: {
        official: 'جزر بوفيه',
        common: 'جزر بوفيه',
      },
      ces: {
        official: 'Bouvetův ostrov',
        common: 'Bouvetův ostrov',
      },
      cym: {
        official: 'Bouvet Island',
        common: 'Bouvet Island',
      },
      deu: {
        official: 'Bouvetinsel',
        common: 'Bouvetinsel',
      },
      est: {
        official: 'Bouvet’ saar',
        common: 'Bouvet’ saar',
      },
      fin: {
        official: "Bouvet'nsaari",
        common: "Bouvet'nsaari",
      },
      fra: {
        official: 'Île Bouvet',
        common: 'Île Bouvet',
      },
      hrv: {
        official: 'Bouvet Island',
        common: 'Otok Bouvet',
      },
      hun: {
        official: 'Bouvet-sziget',
        common: 'Bouvet-sziget',
      },
      ita: {
        official: 'Isola Bouvet',
        common: 'Isola Bouvet',
      },
      jpn: {
        official: 'ブーヴェ島',
        common: 'ブーベ島',
      },
      kor: {
        official: '부베 섬',
        common: '부베 섬',
      },
      nld: {
        official: 'Bouvet Island',
        common: 'Bouveteiland',
      },
      per: {
        official: 'جزیرهٔ بووه',
        common: 'جزیرهٔ بووه',
      },
      pol: {
        official: 'Wyspa Bouveta',
        common: 'Wyspa Bouveta',
      },
      por: {
        official: 'Ilha Bouvet',
        common: 'Ilha Bouvet',
      },
      rus: {
        official: 'Остров Буве',
        common: 'Остров Буве',
      },
      slk: {
        official: 'Bouvetov ostrov',
        common: 'Bouvetov ostrov',
      },
      spa: {
        official: 'Isla Bouvet',
        common: 'Isla Bouvet',
      },
      swe: {
        official: 'Bouvetön',
        common: 'Bouvetön',
      },
      urd: {
        official: 'جزیرہ بووہ',
        common: 'جزیرہ بووہ',
      },
      zho: {
        official: '布维岛',
        common: '布维岛',
      },
    },
    latlng: [-54.43333333, 3.4],
    landlocked: false,
    area: 49.0,
    flag: '\uD83C\uDDE7\uD83C\uDDFB',
    maps: {
      googleMaps: 'https://goo.gl/maps/7WRQAEKZb4uK36yi9',
      openStreetMaps: 'https://www.openstreetmap.org/way/174996681',
    },
    population: 0,
    car: {
      signs: [''],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Antarctica'],
    flags: {
      png: 'https://flagcdn.com/w320/bv.png',
      svg: 'https://flagcdn.com/bv.svg',
    },
    coatOfArms: {},
    startOfWeek: 'monday',
    capitalInfo: {},
  },
  {
    name: {
      common: 'South Georgia',
      official: 'South Georgia and the South Sandwich Islands',
      nativeName: {
        eng: {
          official: 'South Georgia and the South Sandwich Islands',
          common: 'South Georgia',
        },
      },
    },
    tld: ['.gs'],
    cca2: 'GS',
    ccn3: '239',
    cca3: 'SGS',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      SHP: {
        name: 'Saint Helena pound',
        symbol: '£',
      },
    },
    idd: {
      root: '+5',
      suffixes: ['00'],
    },
    capital: ['King Edward Point'],
    altSpellings: ['GS', 'South Georgia and the South Sandwich Islands'],
    region: 'Antarctic',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'جورجيا الجنوبية وجزر ساندوتش الجنوبية',
        common: 'جورجيا الجنوبية',
      },
      ces: {
        official: 'Jižní Georgie a Jižní Sandwichovy ostrovy',
        common: 'Jižní Georgie a Jižní Sandwichovy ostrovy',
      },
      cym: {
        official: 'South Georgia and the South Sandwich Islands',
        common: 'South Georgia',
      },
      deu: {
        official: 'Südgeorgien und die Südlichen Sandwichinseln',
        common: 'Südgeorgien und die Südlichen Sandwichinseln',
      },
      est: {
        official: 'Lõuna-Georgia ja Lõuna-Sandwichi saared',
        common: 'Lõuna-Georgia ja Lõuna-Sandwichi saared',
      },
      fin: {
        official: 'Etelä-Georgia ja Eteläiset Sandwichsaaret',
        common: 'Etelä-Georgia ja Eteläiset Sandwichsaaret',
      },
      fra: {
        official: 'Géorgie du Sud et les îles Sandwich du Sud',
        common: 'Géorgie du Sud-et-les Îles Sandwich du Sud',
      },
      hrv: {
        official: 'Južna Džordžija i Otoci Južni Sendvič',
        common: 'Južna Georgija i otočje Južni Sandwich',
      },
      hun: {
        official: 'Déli-Georgia és Déli-Sandwich-szigetek',
        common: 'Déli-Georgia és Déli-Sandwich-szigetek',
      },
      ita: {
        official: 'Georgia del Sud e isole Sandwich del Sud',
        common: 'Georgia del Sud e Isole Sandwich Meridionali',
      },
      jpn: {
        official: 'サウスジョージア·サウスサンドウィッチ諸島',
        common: 'サウスジョージア・サウスサンドウィッチ諸島',
      },
      kor: {
        official: '조지아',
        common: '조지아',
      },
      nld: {
        official: 'Zuid-Georgië en de Zuidelijke Sandwich-eilanden',
        common: 'Zuid-Georgia en Zuidelijke Sandwicheilanden',
      },
      per: {
        official: 'جزایر جورجیای جنوبی و ساندویچ جنوبی',
        common: 'جزایر جورجیای جنوبی و ساندویچ جنوبی',
      },
      pol: {
        official: 'Georgia Południowa i Sandwich Południowy',
        common: 'Georgia Południowa i Sandwich Południowy',
      },
      por: {
        official: 'Geórgia do Sul e Sandwich do Sul',
        common: 'Ilhas Geórgia do Sul e Sandwich do Sul',
      },
      rus: {
        official: 'Южная Георгия и Южные Сандвичевы острова',
        common: 'Южная Георгия и Южные Сандвичевы острова',
      },
      slk: {
        official: 'Južná Georgia a Južné Sandwichove ostrovy',
        common: 'Južná Georgia a Južné Sandwichove ostrovy',
      },
      spa: {
        official: 'Georgia del Sur y las Islas Sandwich del Sur',
        common: 'Islas Georgias del Sur y Sandwich del Sur',
      },
      swe: {
        official: 'Sydgeorgien',
        common: 'Sydgeorgien',
      },
      urd: {
        official: 'جنوبی جارجیا و جزائر جنوبی سینڈوچ',
        common: 'جنوبی جارجیا',
      },
      zho: {
        official: '南乔治亚岛和南桑威奇群岛',
        common: '南乔治亚',
      },
    },
    latlng: [-54.5, -37.0],
    landlocked: false,
    area: 3903.0,
    demonyms: {
      eng: {
        f: 'South Georgian South Sandwich Islander',
        m: 'South Georgian South Sandwich Islander',
      },
    },
    flag: '\uD83C\uDDEC\uD83C\uDDF8',
    maps: {
      googleMaps: 'https://goo.gl/maps/mJzdaBwKBbm2B81q9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/1983629',
    },
    population: 30,
    car: {
      signs: [''],
      side: 'right',
    },
    timezones: ['UTC-02:00'],
    continents: ['Antarctica'],
    flags: {
      png: 'https://flagcdn.com/w320/gs.png',
      svg: 'https://flagcdn.com/gs.svg',
    },
    coatOfArms: {},
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-54.28, -36.5],
    },
  },
  {
    name: {
      common: 'Tonga',
      official: 'Kingdom of Tonga',
      nativeName: {
        eng: {
          official: 'Kingdom of Tonga',
          common: 'Tonga',
        },
        ton: {
          official: 'Kingdom of Tonga',
          common: 'Tonga',
        },
      },
    },
    tld: ['.to'],
    cca2: 'TO',
    ccn3: '776',
    cca3: 'TON',
    cioc: 'TGA',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      TOP: {
        name: 'Tongan paʻanga',
        symbol: 'T$',
      },
    },
    idd: {
      root: '+6',
      suffixes: ['76'],
    },
    capital: ["Nuku'alofa"],
    altSpellings: ['TO'],
    region: 'Oceania',
    subregion: 'Polynesia',
    languages: {
      eng: 'English',
      ton: 'Tongan',
    },
    translations: {
      ara: {
        official: 'مملكة تونغا',
        common: 'تونغا',
      },
      ces: {
        official: 'Království Tonga',
        common: 'Tonga',
      },
      cym: {
        official: 'Kingdom of Tonga',
        common: 'Tonga',
      },
      deu: {
        official: 'Königreich Tonga',
        common: 'Tonga',
      },
      est: {
        official: 'Tonga Kuningriik',
        common: 'Tonga',
      },
      fin: {
        official: 'Tongan kuningaskunta',
        common: 'Tonga',
      },
      fra: {
        official: 'Royaume des Tonga',
        common: 'Tonga',
      },
      hrv: {
        official: 'Kraljevina Tonga',
        common: 'Tonga',
      },
      hun: {
        official: 'Tongai Királyság',
        common: 'Tonga',
      },
      ita: {
        official: 'Regno di Tonga',
        common: 'Tonga',
      },
      jpn: {
        official: 'トンガ王国',
        common: 'トンガ',
      },
      kor: {
        official: '통가 왕국',
        common: '통가',
      },
      nld: {
        official: 'Koninkrijk Tonga',
        common: 'Tonga',
      },
      per: {
        official: 'پادشاهی تونگا',
        common: 'تونگا',
      },
      pol: {
        official: 'Królestwo Tonga',
        common: 'Tonga',
      },
      por: {
        official: 'Reino de Tonga',
        common: 'Tonga',
      },
      rus: {
        official: 'Королевство Тонга',
        common: 'Тонга',
      },
      slk: {
        official: 'Tongské kráľovstvo',
        common: 'Tonga',
      },
      spa: {
        official: 'Reino de Tonga',
        common: 'Tonga',
      },
      swe: {
        official: 'Konungariket Tonga',
        common: 'Tonga',
      },
      urd: {
        official: 'مملکتِ ٹونگا',
        common: 'ٹونگا',
      },
      zho: {
        official: '汤加王国',
        common: '汤加',
      },
    },
    latlng: [-20.0, -175.0],
    landlocked: false,
    area: 747.0,
    demonyms: {
      eng: {
        f: 'Tongan',
        m: 'Tongan',
      },
      fra: {
        f: 'Tonguienne',
        m: 'Tonguien',
      },
    },
    flag: '\uD83C\uDDF9\uD83C\uDDF4',
    maps: {
      googleMaps: 'https://goo.gl/maps/p5YALBY2QdEzswRo7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/2186665',
    },
    population: 105697,
    gini: {
      '2015': 37.6,
    },
    fifa: 'TGA',
    car: {
      signs: ['TO'],
      side: 'left',
    },
    timezones: ['UTC+13:00'],
    continents: ['Oceania'],
    flags: {
      png: 'https://flagcdn.com/w320/to.png',
      svg: 'https://flagcdn.com/to.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/to.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/to.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-21.13, -175.2],
    },
  },
  {
    name: {
      common: 'Ukraine',
      official: 'Ukraine',
      nativeName: {
        ukr: {
          official: 'Україна',
          common: 'Україна',
        },
      },
    },
    tld: ['.ua', '.укр'],
    cca2: 'UA',
    ccn3: '804',
    cca3: 'UKR',
    cioc: 'UKR',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      UAH: {
        name: 'Ukrainian hryvnia',
        symbol: '₴',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['80'],
    },
    capital: ['Kyiv'],
    altSpellings: ['UA', 'Ukrayina'],
    region: 'Europe',
    subregion: 'Eastern Europe',
    languages: {
      ukr: 'Ukrainian',
    },
    translations: {
      ara: {
        official: 'أوكرانيا',
        common: 'أوكرانيا',
      },
      ces: {
        official: 'Ukrajina',
        common: 'Ukrajina',
      },
      cym: {
        official: 'Ukraine',
        common: 'Ukraine',
      },
      deu: {
        official: 'Ukraine',
        common: 'Ukraine',
      },
      est: {
        official: 'Ukraina',
        common: 'Ukraina',
      },
      fin: {
        official: 'Ukraina',
        common: 'Ukraina',
      },
      fra: {
        official: 'Ukraine',
        common: 'Ukraine',
      },
      hrv: {
        official: 'Ukrajina',
        common: 'Ukrajina',
      },
      hun: {
        official: 'Ukrajna',
        common: 'Ukrajna',
      },
      ita: {
        official: 'Ucraina',
        common: 'Ucraina',
      },
      jpn: {
        official: 'ウクライナ',
        common: 'ウクライナ',
      },
      kor: {
        official: '우크라이나',
        common: '우크라이나',
      },
      nld: {
        official: 'Oekraïne',
        common: 'Oekraïne',
      },
      per: {
        official: 'اوکراین',
        common: 'اوکراین',
      },
      pol: {
        official: 'Ukraina',
        common: 'Ukraina',
      },
      por: {
        official: 'Ucrânia',
        common: 'Ucrânia',
      },
      rus: {
        official: 'Украина',
        common: 'Украина',
      },
      slk: {
        official: 'Ukrajina',
        common: 'Ukrajina',
      },
      spa: {
        official: 'Ucrania',
        common: 'Ucrania',
      },
      swe: {
        official: 'Ukraina',
        common: 'Ukraina',
      },
      urd: {
        official: 'یوکرین',
        common: 'یوکرین',
      },
      zho: {
        official: '乌克兰',
        common: '乌克兰',
      },
    },
    latlng: [49.0, 32.0],
    landlocked: false,
    borders: ['BLR', 'HUN', 'MDA', 'POL', 'ROU', 'RUS', 'SVK'],
    area: 603500.0,
    demonyms: {
      eng: {
        f: 'Ukrainian',
        m: 'Ukrainian',
      },
      fra: {
        f: 'Ukrainienne',
        m: 'Ukrainien',
      },
    },
    flag: '\uD83C\uDDFA\uD83C\uDDE6',
    maps: {
      googleMaps: 'https://goo.gl/maps/DvgJMiPJ7aozKFZv7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/60199',
    },
    population: 44134693,
    gini: {
      '2019': 26.6,
    },
    fifa: 'UKR',
    car: {
      signs: ['UA'],
      side: 'right',
    },
    timezones: ['UTC+02:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/ua.png',
      svg: 'https://flagcdn.com/ua.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ua.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ua.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [50.43, 30.52],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Qatar',
      official: 'State of Qatar',
      nativeName: {
        ara: {
          official: 'دولة قطر',
          common: 'قطر',
        },
      },
    },
    tld: ['.qa', 'قطر.'],
    cca2: 'QA',
    ccn3: '634',
    cca3: 'QAT',
    cioc: 'QAT',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      QAR: {
        name: 'Qatari riyal',
        symbol: 'ر.ق',
      },
    },
    idd: {
      root: '+9',
      suffixes: ['74'],
    },
    capital: ['Doha'],
    altSpellings: ['QA', 'State of Qatar', 'Dawlat Qaṭar'],
    region: 'Asia',
    subregion: 'Western Asia',
    languages: {
      ara: 'Arabic',
    },
    translations: {
      ara: {
        official: 'دولة قطر',
        common: 'قطر',
      },
      ces: {
        official: 'Stát Katar',
        common: 'Katar',
      },
      cym: {
        official: 'State of Qatar',
        common: 'Qatar',
      },
      deu: {
        official: 'Staat Katar',
        common: 'Katar',
      },
      est: {
        official: 'Katari Riik',
        common: 'Katar',
      },
      fin: {
        official: 'Qatarin valtio',
        common: 'Qatar',
      },
      fra: {
        official: 'État du Qatar',
        common: 'Qatar',
      },
      hrv: {
        official: 'Država Katar',
        common: 'Katar',
      },
      hun: {
        official: 'Katari Állam',
        common: 'Katar',
      },
      ita: {
        official: 'Stato del Qatar',
        common: 'Qatar',
      },
      jpn: {
        official: 'カタール国',
        common: 'カタール',
      },
      kor: {
        official: '카타르국',
        common: '카타르',
      },
      nld: {
        official: 'Staat Qatar',
        common: 'Qatar',
      },
      per: {
        official: 'دولت قطر',
        common: 'قطر',
      },
      pol: {
        official: 'Państwo Katar',
        common: 'Katar',
      },
      por: {
        official: 'Estado do Qatar',
        common: 'Catar',
      },
      rus: {
        official: 'Государство Катар',
        common: 'Катар',
      },
      slk: {
        official: 'Katarský štát',
        common: 'Katar',
      },
      spa: {
        official: 'Estado de Qatar',
        common: 'Catar',
      },
      swe: {
        official: 'Staten Qatar',
        common: 'Qatar',
      },
      urd: {
        official: 'ریاستِ قطر',
        common: 'قطر',
      },
      zho: {
        official: '卡塔尔国',
        common: '卡塔尔',
      },
    },
    latlng: [25.5, 51.25],
    landlocked: false,
    borders: ['SAU'],
    area: 11586.0,
    demonyms: {
      eng: {
        f: 'Qatari',
        m: 'Qatari',
      },
      fra: {
        f: 'Qatarienne',
        m: 'Qatarien',
      },
    },
    flag: '\uD83C\uDDF6\uD83C\uDDE6',
    maps: {
      googleMaps: 'https://goo.gl/maps/ZV76Y49z7LLUZ2KQ6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/305095',
    },
    population: 2881060,
    fifa: 'QAT',
    car: {
      signs: ['Q'],
      side: 'right',
    },
    timezones: ['UTC+03:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/qa.png',
      svg: 'https://flagcdn.com/qa.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/qa.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/qa.svg',
    },
    startOfWeek: 'sunday',
    capitalInfo: {
      latlng: [25.28, 51.53],
    },
  },
  {
    name: {
      common: 'Andorra',
      official: 'Principality of Andorra',
      nativeName: {
        cat: {
          official: "Principat d'Andorra",
          common: 'Andorra',
        },
      },
    },
    tld: ['.ad'],
    cca2: 'AD',
    ccn3: '020',
    cca3: 'AND',
    cioc: 'AND',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    idd: {
      root: '+3',
      suffixes: ['76'],
    },
    capital: ['Andorra la Vella'],
    altSpellings: ['AD', 'Principality of Andorra', "Principat d'Andorra"],
    region: 'Europe',
    subregion: 'Southern Europe',
    languages: {
      cat: 'Catalan',
    },
    translations: {
      ara: {
        official: 'إمارة أندورا',
        common: 'أندورا',
      },
      ces: {
        official: 'Andorrské knížectví',
        common: 'Andorra',
      },
      cym: {
        official: 'Tywysogaeth Andorra',
        common: 'Andorra',
      },
      deu: {
        official: 'Fürstentum Andorra',
        common: 'Andorra',
      },
      est: {
        official: 'Andorra Vürstiriik',
        common: 'Andorra',
      },
      fin: {
        official: 'Andorran ruhtinaskunta',
        common: 'Andorra',
      },
      fra: {
        official: "Principauté d'Andorre",
        common: 'Andorre',
      },
      hrv: {
        official: 'Kneževina Andora',
        common: 'Andora',
      },
      hun: {
        official: 'Andorra',
        common: 'Andorra',
      },
      ita: {
        official: 'Principato di Andorra',
        common: 'Andorra',
      },
      jpn: {
        official: 'アンドラ公国',
        common: 'アンドラ',
      },
      kor: {
        official: '안도라 공국',
        common: '안도라',
      },
      nld: {
        official: 'Prinsdom Andorra',
        common: 'Andorra',
      },
      per: {
        official: 'شاهزاده‌نشین آندورا',
        common: 'آندورا',
      },
      pol: {
        official: 'Księstwo Andory',
        common: 'Andora',
      },
      por: {
        official: 'Principado de Andorra',
        common: 'Andorra',
      },
      rus: {
        official: 'Княжество Андорра',
        common: 'Андорра',
      },
      slk: {
        official: 'Andorrské kniežatstvo',
        common: 'Andorra',
      },
      spa: {
        official: 'Principado de Andorra',
        common: 'Andorra',
      },
      swe: {
        official: 'Furstendömet Andorra',
        common: 'Andorra',
      },
      urd: {
        official: 'اماراتِ انڈورا',
        common: 'انڈورا',
      },
      zho: {
        official: '安道尔公国',
        common: '安道尔',
      },
    },
    latlng: [42.5, 1.5],
    landlocked: true,
    borders: ['FRA', 'ESP'],
    area: 468.0,
    demonyms: {
      eng: {
        f: 'Andorran',
        m: 'Andorran',
      },
      fra: {
        f: 'Andorrane',
        m: 'Andorran',
      },
    },
    flag: '\uD83C\uDDE6\uD83C\uDDE9',
    maps: {
      googleMaps: 'https://goo.gl/maps/JqAnacWE2qEznKgw7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/9407',
    },
    population: 77265,
    fifa: 'AND',
    car: {
      signs: ['AND'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Europe'],
    flags: {
      png: 'https://flagcdn.com/w320/ad.png',
      svg: 'https://flagcdn.com/ad.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ad.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ad.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [42.5, 1.52],
    },
    postalCode: {
      format: 'AD###',
      regex: '^(?:AD)*(\\d{3})$',
    },
  },
  {
    name: {
      common: 'Iraq',
      official: 'Republic of Iraq',
      nativeName: {
        ara: {
          official: 'جمهورية العراق',
          common: 'العراق',
        },
        arc: {
          official: 'ܩܘܼܛܢܵܐ ܐܝܼܪܲܩ',
          common: 'ܩܘܼܛܢܵܐ',
        },
        ckb: {
          official: 'کۆماری عێراق',
          common: 'کۆماری',
        },
      },
    },
    tld: ['.iq'],
    cca2: 'IQ',
    ccn3: '368',
    cca3: 'IRQ',
    cioc: 'IRQ',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      IQD: {
        name: 'Iraqi dinar',
        symbol: 'ع.د',
      },
    },
    idd: {
      root: '+9',
      suffixes: ['64'],
    },
    capital: ['Baghdad'],
    altSpellings: ['IQ', 'Republic of Iraq', 'Jumhūriyyat al-‘Irāq'],
    region: 'Asia',
    subregion: 'Western Asia',
    languages: {
      ara: 'Arabic',
      arc: 'Aramaic',
      ckb: 'Sorani',
    },
    translations: {
      ara: {
        official: 'جمهورية العراق',
        common: 'العراق',
      },
      ces: {
        official: 'Irácká republika',
        common: 'Irák',
      },
      cym: {
        official: 'Republic of Iraq',
        common: 'Iraq',
      },
      deu: {
        official: 'Republik Irak',
        common: 'Irak',
      },
      est: {
        official: 'Iraagi Vabariik',
        common: 'Iraak',
      },
      fin: {
        official: 'Irakin tasavalta',
        common: 'Irak',
      },
      fra: {
        official: "République d'Irak",
        common: 'Irak',
      },
      hrv: {
        official: 'Republika Irak',
        common: 'Irak',
      },
      hun: {
        official: 'Iraki Köztársaság',
        common: 'Irak',
      },
      ita: {
        official: "Repubblica dell'Iraq",
        common: 'Iraq',
      },
      jpn: {
        official: 'イラク共和国',
        common: 'イラク',
      },
      kor: {
        official: '이라크 공화국',
        common: '이라크',
      },
      nld: {
        official: 'Republiek Irak',
        common: 'Irak',
      },
      per: {
        official: 'جمهوری عراق',
        common: 'عراق',
      },
      pol: {
        official: 'Republika Iraku',
        common: 'Irak',
      },
      por: {
        official: 'República do Iraque',
        common: 'Iraque',
      },
      rus: {
        official: 'Республика Ирак',
        common: 'Ирак',
      },
      slk: {
        official: 'Iracká republika',
        common: 'Irak',
      },
      spa: {
        official: 'República de Irak',
        common: 'Irak',
      },
      swe: {
        official: 'Republiken Irak',
        common: 'Irak',
      },
      urd: {
        official: 'جمہوریہ عراق',
        common: 'عراق',
      },
      zho: {
        official: '伊拉克共和国',
        common: '伊拉克',
      },
    },
    latlng: [33.0, 44.0],
    landlocked: false,
    borders: ['IRN', 'JOR', 'KWT', 'SAU', 'SYR', 'TUR'],
    area: 438317.0,
    demonyms: {
      eng: {
        f: 'Iraqi',
        m: 'Iraqi',
      },
      fra: {
        f: 'Irakienne',
        m: 'Irakien',
      },
    },
    flag: '\uD83C\uDDEE\uD83C\uDDF6',
    maps: {
      googleMaps: 'https://goo.gl/maps/iL8Bmy1sUCW9fUk18',
      openStreetMaps: 'https://www.openstreetmap.org/relation/304934',
    },
    population: 40222503,
    gini: {
      '2012': 29.5,
    },
    fifa: 'IRQ',
    car: {
      signs: ['IRQ'],
      side: 'right',
    },
    timezones: ['UTC+03:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/iq.png',
      svg: 'https://flagcdn.com/iq.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/iq.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/iq.svg',
    },
    startOfWeek: 'sunday',
    capitalInfo: {
      latlng: [33.33, 44.4],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Sri Lanka',
      official: 'Democratic Socialist Republic of Sri Lanka',
      nativeName: {
        sin: {
          official: 'ශ්‍රී ලංකා ප්‍රජාතාන්ත්‍රික සමාජවාදී ජනරජය',
          common: 'ශ්‍රී ලංකාව',
        },
        tam: {
          official: 'இலங்கை சனநாயக சோசலிசக் குடியரசு',
          common: 'இலங்கை',
        },
      },
    },
    tld: ['.lk', '.இலங்கை', '.ලංකා'],
    cca2: 'LK',
    ccn3: '144',
    cca3: 'LKA',
    cioc: 'SRI',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      LKR: {
        name: 'Sri Lankan rupee',
        symbol: 'Rs  රු',
      },
    },
    idd: {
      root: '+9',
      suffixes: ['4'],
    },
    capital: ['Sri Jayawardenepura Kotte'],
    altSpellings: ['LK', 'ilaṅkai', 'Democratic Socialist Republic of Sri Lanka'],
    region: 'Asia',
    subregion: 'Southern Asia',
    languages: {
      sin: 'Sinhala',
      tam: 'Tamil',
    },
    translations: {
      ara: {
        official: 'جمهورية سريلانكا الديمقراطية الشعبية',
        common: 'سريلانكا',
      },
      ces: {
        official: 'Srílanská demokratická socialistická republika',
        common: 'Srí Lanka',
      },
      cym: {
        official: 'Democratic Socialist Republic of Sri Lanka',
        common: 'Sri Lanka',
      },
      deu: {
        official: 'Demokratische Sozialistische Republik Sri Lanka',
        common: 'Sri Lanka',
      },
      est: {
        official: 'Sri Lanka Demokraatlik Sotsialistlik Vabariik',
        common: 'Sri Lanka',
      },
      fin: {
        official: 'Sri Lankan demokraattinen sosialistinen tasavalta',
        common: 'Sri Lanka',
      },
      fra: {
        official: 'République démocratique socialiste du Sri Lanka',
        common: 'Sri Lanka',
      },
      hrv: {
        official: 'Demokratska Socijalističke Republike Šri Lanke',
        common: 'Šri Lanka',
      },
      hun: {
        official: 'Srí Lanka-i Demokratikus Szocialista Köztársaság',
        common: 'Srí Lanka',
      },
      ita: {
        official: 'Repubblica democratica socialista dello Sri Lanka',
        common: 'Sri Lanka',
      },
      jpn: {
        official: 'スリランカ民主社会主義共和国',
        common: 'スリランカ',
      },
      kor: {
        official: '스리랑카 민주 사회주의 공화국',
        common: '스리랑카',
      },
      nld: {
        official: 'Democratische Socialistische Republiek Sri Lanka',
        common: 'Sri Lanka',
      },
      per: {
        official: 'جمهوری دموکراتیک سوسیالیستی سری‌لانکا',
        common: 'سری‌لانکا',
      },
      pol: {
        official: 'Demokratyczno-Socjalistyczna Republika Sri Lanki',
        common: 'Sri Lanka',
      },
      por: {
        official: 'República Democrática Socialista do Sri Lanka',
        common: 'Sri Lanka',
      },
      rus: {
        official: 'Демократическая Социалистическая Республика Шри-Ланка',
        common: 'Шри-Ланка',
      },
      slk: {
        official: 'Srílanská demokratická socialistická republika',
        common: 'Srí Lanka',
      },
      spa: {
        official: 'República Democrática Socialista de Sri Lanka',
        common: 'Sri Lanka',
      },
      swe: {
        official: 'Demokratiska socialistiska republiken Sri Lanka',
        common: 'Sri Lanka',
      },
      urd: {
        official: 'جمہوری و اشتراکی جمہوریہ سری لنکا',
        common: 'سری لنکا',
      },
      zho: {
        official: '斯里兰卡民主社会主义共和国',
        common: '斯里兰卡',
      },
    },
    latlng: [7.0, 81.0],
    landlocked: false,
    borders: ['IND'],
    area: 65610.0,
    demonyms: {
      eng: {
        f: 'Sri Lankan',
        m: 'Sri Lankan',
      },
      fra: {
        f: 'Sri-lankaise',
        m: 'Sri-lankais',
      },
    },
    flag: '\uD83C\uDDF1\uD83C\uDDF0',
    maps: {
      googleMaps: 'https://goo.gl/maps/VkPHoeFSfgzRQCDv8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/536807',
    },
    population: 21919000,
    gini: {
      '2016': 39.3,
    },
    fifa: 'SRI',
    car: {
      signs: ['CL'],
      side: 'left',
    },
    timezones: ['UTC+05:30'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/lk.png',
      svg: 'https://flagcdn.com/lk.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/lk.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/lk.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [6.89, 79.9],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'Japan',
      official: 'Japan',
      nativeName: {
        jpn: {
          official: '日本',
          common: '日本',
        },
      },
    },
    tld: ['.jp', '.みんな'],
    cca2: 'JP',
    ccn3: '392',
    cca3: 'JPN',
    cioc: 'JPN',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      JPY: {
        name: 'Japanese yen',
        symbol: '¥',
      },
    },
    idd: {
      root: '+8',
      suffixes: ['1'],
    },
    capital: ['Tokyo'],
    altSpellings: ['JP', 'Nippon', 'Nihon'],
    region: 'Asia',
    subregion: 'Eastern Asia',
    languages: {
      jpn: 'Japanese',
    },
    translations: {
      ara: {
        official: 'اليابان',
        common: 'اليابان',
      },
      ces: {
        official: 'Japonsko',
        common: 'Japonsko',
      },
      cym: {
        official: 'Japan',
        common: 'Japan',
      },
      deu: {
        official: 'Japan',
        common: 'Japan',
      },
      est: {
        official: 'Jaapan',
        common: 'Jaapan',
      },
      fin: {
        official: 'Japani',
        common: 'Japani',
      },
      fra: {
        official: 'Japon',
        common: 'Japon',
      },
      hrv: {
        official: 'Japan',
        common: 'Japan',
      },
      hun: {
        official: 'Japán',
        common: 'Japán',
      },
      ita: {
        official: 'Giappone',
        common: 'Giappone',
      },
      jpn: {
        official: '日本',
        common: '日本',
      },
      kor: {
        official: '일본국',
        common: '일본',
      },
      nld: {
        official: 'Japan',
        common: 'Japan',
      },
      per: {
        official: 'ژاپن',
        common: 'ژاپن',
      },
      pol: {
        official: 'Japonia',
        common: 'Japonia',
      },
      por: {
        official: 'Japão',
        common: 'Japão',
      },
      rus: {
        official: 'Япония',
        common: 'Япония',
      },
      slk: {
        official: 'Japonsko',
        common: 'Japonsko',
      },
      spa: {
        official: 'Japón',
        common: 'Japón',
      },
      swe: {
        official: 'Japan',
        common: 'Japan',
      },
      urd: {
        official: 'جاپان',
        common: 'جاپان',
      },
      zho: {
        official: '日本国',
        common: '日本',
      },
    },
    latlng: [36.0, 138.0],
    landlocked: false,
    area: 377930.0,
    demonyms: {
      eng: {
        f: 'Japanese',
        m: 'Japanese',
      },
      fra: {
        f: 'Japonaise',
        m: 'Japonais',
      },
    },
    flag: '\uD83C\uDDEF\uD83C\uDDF5',
    maps: {
      googleMaps: 'https://goo.gl/maps/NGTLSCSrA8bMrvnX9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/382313',
    },
    population: 125836021,
    gini: {
      '2013': 32.9,
    },
    fifa: 'JPN',
    car: {
      signs: ['J'],
      side: 'left',
    },
    timezones: ['UTC+09:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/jp.png',
      svg: 'https://flagcdn.com/jp.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/jp.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/jp.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [35.68, 139.75],
    },
    postalCode: {
      format: '###-####',
      regex: '^(\\d{7})$',
    },
  },
  {
    name: {
      common: 'Kyrgyzstan',
      official: 'Kyrgyz Republic',
      nativeName: {
        kir: {
          official: 'Кыргыз Республикасы',
          common: 'Кыргызстан',
        },
        rus: {
          official: 'Кыргызская Республика',
          common: 'Киргизия',
        },
      },
    },
    tld: ['.kg'],
    cca2: 'KG',
    ccn3: '417',
    cca3: 'KGZ',
    cioc: 'KGZ',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      KGS: {
        name: 'Kyrgyzstani som',
        symbol: 'с',
      },
    },
    idd: {
      root: '+9',
      suffixes: ['96'],
    },
    capital: ['Bishkek'],
    altSpellings: ['KG', 'Киргизия', 'Kyrgyz Republic', 'Кыргыз Республикасы', 'Kyrgyz Respublikasy'],
    region: 'Asia',
    subregion: 'Central Asia',
    languages: {
      kir: 'Kyrgyz',
      rus: 'Russian',
    },
    translations: {
      ara: {
        official: 'الجمهورية القيرغيزية',
        common: 'قيرغيزستان',
      },
      ces: {
        official: 'Kyrgyzská republika',
        common: 'Kyrgyzstán',
      },
      cym: {
        official: 'Kyrgyz Republic',
        common: 'Kyrgyzstan',
      },
      deu: {
        official: 'Kirgisische Republik',
        common: 'Kirgisistan',
      },
      est: {
        official: 'Kirgiisi Vabariik',
        common: 'Kõrgõzstan',
      },
      fin: {
        official: 'Kirgisian tasavalta',
        common: 'Kirgisia',
      },
      fra: {
        official: 'République kirghize',
        common: 'Kirghizistan',
      },
      hrv: {
        official: 'Kirgistanu',
        common: 'Kirgistan',
      },
      hun: {
        official: 'Kirgiz Köztársaság',
        common: 'Kirgizisztán',
      },
      ita: {
        official: 'Kirghizistan',
        common: 'Kirghizistan',
      },
      jpn: {
        official: 'キルギス共和国',
        common: 'キルギス',
      },
      kor: {
        official: '키르기스 공화국',
        common: '키르기스스탄',
      },
      nld: {
        official: 'Kirgizische Republiek',
        common: 'Kirgizië',
      },
      per: {
        official: 'جمهوری قِرقیزستان',
        common: 'قرقیزستان',
      },
      pol: {
        official: 'Republika Kirgiska',
        common: 'Kirgistan',
      },
      por: {
        official: 'República do Quirguistão',
        common: 'Quirguistão',
      },
      rus: {
        official: 'Кыргызская Республика',
        common: 'Киргизия',
      },
      slk: {
        official: 'Kirgizská republika',
        common: 'Kirgizsko',
      },
      spa: {
        official: 'República Kirguisa',
        common: 'Kirguizistán',
      },
      swe: {
        official: 'Republiken Kirgizistan',
        common: 'Kirgizistan',
      },
      urd: {
        official: 'جمہوریہ کرغیزستان',
        common: 'کرغیزستان',
      },
      zho: {
        official: '吉尔吉斯斯坦共和国',
        common: '吉尔吉斯斯坦',
      },
    },
    latlng: [41.0, 75.0],
    landlocked: true,
    borders: ['CHN', 'KAZ', 'TJK', 'UZB'],
    area: 199951.0,
    demonyms: {
      eng: {
        f: 'Kirghiz',
        m: 'Kirghiz',
      },
      fra: {
        f: 'Kirghize',
        m: 'Kirghize',
      },
    },
    flag: '\uD83C\uDDF0\uD83C\uDDEC',
    maps: {
      googleMaps: 'https://goo.gl/maps/SKG8BSMMQVvxkRkB7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/178009',
    },
    population: 6591600,
    gini: {
      '2019': 29.7,
    },
    fifa: 'KGZ',
    car: {
      signs: ['KS'],
      side: 'right',
    },
    timezones: ['UTC+06:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/kg.png',
      svg: 'https://flagcdn.com/kg.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/kg.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/kg.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [42.87, 74.6],
    },
    postalCode: {
      format: '######',
      regex: '^(\\d{6})$',
    },
  },
  {
    name: {
      common: 'Philippines',
      official: 'Republic of the Philippines',
      nativeName: {
        eng: {
          official: 'Republic of the Philippines',
          common: 'Philippines',
        },
        fil: {
          official: 'Republic of the Philippines',
          common: 'Pilipinas',
        },
      },
    },
    tld: ['.ph'],
    cca2: 'PH',
    ccn3: '608',
    cca3: 'PHL',
    cioc: 'PHI',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      PHP: {
        name: 'Philippine peso',
        symbol: '₱',
      },
    },
    idd: {
      root: '+6',
      suffixes: ['3'],
    },
    capital: ['Manila'],
    altSpellings: ['PH', 'Republic of the Philippines', 'Repúblika ng Pilipinas'],
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    languages: {
      eng: 'English',
      fil: 'Filipino',
    },
    translations: {
      ara: {
        official: 'جمهورية الفلبين',
        common: 'الفلبين',
      },
      ces: {
        official: 'Filipínská republika',
        common: 'Filipíny',
      },
      cym: {
        official: 'Republic of the Philippines',
        common: 'Philippines',
      },
      deu: {
        official: 'Republik der Philippinen',
        common: 'Philippinen',
      },
      est: {
        official: 'Filipiini Vabariik',
        common: 'Filipiinid',
      },
      fin: {
        official: 'Filippiinien tasavalta',
        common: 'Filippiinit',
      },
      fra: {
        official: 'République des Philippines',
        common: 'Philippines',
      },
      hrv: {
        official: 'Republika Filipini',
        common: 'Filipini',
      },
      hun: {
        official: 'Fülöp-szigeteki Köztársaság',
        common: 'Fülöp-szigetek',
      },
      ita: {
        official: 'Repubblica delle Filippine',
        common: 'Filippine',
      },
      jpn: {
        official: 'フィリピン共和国',
        common: 'フィリピン',
      },
      kor: {
        official: '필리핀 공화국',
        common: '필리핀',
      },
      nld: {
        official: 'Republiek der Filipijnen',
        common: 'Filipijnen',
      },
      per: {
        official: 'جمهوری فیلیپین',
        common: 'فیلیپین',
      },
      pol: {
        official: 'Republika Filipin',
        common: 'Filipiny',
      },
      por: {
        official: 'República das Filipinas',
        common: 'Filipinas',
      },
      rus: {
        official: 'Республика Филиппины',
        common: 'Филиппины',
      },
      slk: {
        official: 'Filipínska republika',
        common: 'Filipíny',
      },
      spa: {
        official: 'República de las Filipinas',
        common: 'Filipinas',
      },
      swe: {
        official: 'Republiken Filippinerna',
        common: 'Filippinerna',
      },
      urd: {
        official: 'جمہوریہ فلپائن',
        common: 'فلپائن',
      },
      zho: {
        official: '菲律宾共和国',
        common: '菲律宾',
      },
    },
    latlng: [13.0, 122.0],
    landlocked: false,
    area: 342353.0,
    demonyms: {
      eng: {
        f: 'Filipino',
        m: 'Filipino',
      },
      fra: {
        f: 'Philippine',
        m: 'Philippin',
      },
    },
    flag: '\uD83C\uDDF5\uD83C\uDDED',
    maps: {
      googleMaps: 'https://goo.gl/maps/k8T2fb5VMUfsWFX6A',
      openStreetMaps: 'https://www.openstreetmap.org/relation/443174',
    },
    population: 109581085,
    gini: {
      '2018': 42.3,
    },
    fifa: 'PHI',
    car: {
      signs: ['RP'],
      side: 'right',
    },
    timezones: ['UTC+08:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/ph.png',
      svg: 'https://flagcdn.com/ph.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ph.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ph.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [14.6, 120.97],
    },
    postalCode: {
      format: '####',
      regex: '^(\\d{4})$',
    },
  },
  {
    name: {
      common: 'Pakistan',
      official: 'Islamic Republic of Pakistan',
      nativeName: {
        eng: {
          official: 'Islamic Republic of Pakistan',
          common: 'Pakistan',
        },
        urd: {
          official: 'اسلامی جمہوریۂ پاكستان',
          common: 'پاكستان',
        },
      },
    },
    tld: ['.pk'],
    cca2: 'PK',
    ccn3: '586',
    cca3: 'PAK',
    cioc: 'PAK',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      PKR: {
        name: 'Pakistani rupee',
        symbol: '₨',
      },
    },
    idd: {
      root: '+9',
      suffixes: ['2'],
    },
    capital: ['Islamabad'],
    altSpellings: ['PK', 'Pākistān', 'Islamic Republic of Pakistan', "Islāmī Jumhūriya'eh Pākistān"],
    region: 'Asia',
    subregion: 'Southern Asia',
    languages: {
      eng: 'English',
      urd: 'Urdu',
    },
    translations: {
      ara: {
        official: 'جمهورية باكستان الإسلامية',
        common: 'باكستان',
      },
      ces: {
        official: 'Pákistánská islámská republika',
        common: 'Pákistán',
      },
      cym: {
        official: 'Islamic Republic of Pakistan',
        common: 'Pakistan',
      },
      deu: {
        official: 'Islamische Republik Pakistan',
        common: 'Pakistan',
      },
      est: {
        official: 'Pakistani Islamivabariik',
        common: 'Pakistan',
      },
      fin: {
        official: 'Pakistanin islamilainen tasavalta',
        common: 'Pakistan',
      },
      fra: {
        official: 'République islamique du Pakistan',
        common: 'Pakistan',
      },
      hrv: {
        official: 'Islamska Republika Pakistan',
        common: 'Pakistan',
      },
      hun: {
        official: 'Pakisztán',
        common: 'Pakisztán',
      },
      ita: {
        official: 'Repubblica islamica del Pakistan',
        common: 'Pakistan',
      },
      jpn: {
        official: 'パキスタン',
        common: 'パキスタン',
      },
      kor: {
        official: '파키스탄 이슬람 공화국',
        common: '파키스탄',
      },
      nld: {
        official: 'Islamitische Republiek Pakistan',
        common: 'Pakistan',
      },
      per: {
        official: 'جمهوری اسلامی پاکستان',
        common: 'پاکستان',
      },
      pol: {
        official: 'Islamska Republika Pakistanu',
        common: 'Pakistan',
      },
      por: {
        official: 'República Islâmica do Paquistão',
        common: 'Paquistão',
      },
      rus: {
        official: 'Исламская Республика Пакистан',
        common: 'Пакистан',
      },
      slk: {
        official: 'Pakistanská islamská republika',
        common: 'Pakistan',
      },
      spa: {
        official: 'República Islámica de Pakistán',
        common: 'Pakistán',
      },
      swe: {
        official: 'Islamiska republiken Pakistan',
        common: 'Pakistan',
      },
      urd: {
        official: 'اسلامی جمہوریہ پاکستان',
        common: 'پاکستان',
      },
      zho: {
        official: '巴基斯坦伊斯兰共和国',
        common: '巴基斯坦',
      },
    },
    latlng: [30.0, 70.0],
    landlocked: false,
    borders: ['AFG', 'CHN', 'IND', 'IRN'],
    area: 881912.0,
    demonyms: {
      eng: {
        f: 'Pakistani',
        m: 'Pakistani',
      },
      fra: {
        f: 'Pakistanaise',
        m: 'Pakistanais',
      },
    },
    flag: '\uD83C\uDDF5\uD83C\uDDF0',
    maps: {
      googleMaps: 'https://goo.gl/maps/5LYujdfR5yLUXoERA',
      openStreetMaps: 'https://www.openstreetmap.org/relation/307573',
    },
    population: 220892331,
    gini: {
      '2018': 31.6,
    },
    fifa: 'PAK',
    car: {
      signs: ['PK'],
      side: 'left',
    },
    timezones: ['UTC+05:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/pk.png',
      svg: 'https://flagcdn.com/pk.svg',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/pk.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/pk.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [33.68, 73.05],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
  {
    name: {
      common: 'British Indian Ocean Territory',
      official: 'British Indian Ocean Territory',
      nativeName: {
        eng: {
          official: 'British Indian Ocean Territory',
          common: 'British Indian Ocean Territory',
        },
      },
    },
    tld: ['.io'],
    cca2: 'IO',
    ccn3: '086',
    cca3: 'IOT',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      USD: {
        name: 'United States dollar',
        symbol: '$',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['46'],
    },
    capital: ['Diego Garcia'],
    altSpellings: ['IO'],
    region: 'Africa',
    subregion: 'Eastern Africa',
    languages: {
      eng: 'English',
    },
    translations: {
      ara: {
        official: 'إقليم المحيط الهندي البريطاني',
        common: 'إقليم المحيط الهندي البريطاني',
      },
      ces: {
        official: 'Britské indickooceánské území',
        common: 'Britské indickooceánské území',
      },
      cym: {
        official: 'Tiriogaeth Brydeinig Cefnfor India',
        common: 'Tiriogaeth Brydeinig Cefnfor India',
      },
      deu: {
        official: 'Britisches Territorium im Indischen Ozean',
        common: 'Britisches Territorium im Indischen Ozean',
      },
      est: {
        official: 'Briti India ookeani ala',
        common: 'Briti India ookeani ala',
      },
      fin: {
        official: 'Brittiläinen Intian valtameren alue',
        common: 'Brittiläinen Intian valtameren alue',
      },
      fra: {
        official: "Territoire britannique de l' océan Indien",
        common: "Territoire britannique de l'océan Indien",
      },
      hrv: {
        official: 'British Indian Ocean Territory',
        common: 'Britanski Indijskooceanski teritorij',
      },
      hun: {
        official: 'Brit Indiai-óceáni Terület',
        common: 'Brit Indiai-óceáni Terület',
      },
      ita: {
        official: "Territorio britannico dell'Oceano Indiano",
        common: "Territorio britannico dell'oceano indiano",
      },
      jpn: {
        official: 'イギリス領インド洋地域',
        common: 'イギリス領インド洋地域',
      },
      kor: {
        official: '인도 공화국',
        common: '인도',
      },
      nld: {
        official: 'Brits Indische Oceaan Territorium',
        common: 'Britse Gebieden in de Indische Oceaan',
      },
      per: {
        official: 'قلمرو بریتانیا در اقیانوس هند',
        common: 'قلمرو بریتانیا در اقیانوس هند',
      },
      pol: {
        official: 'Brytyjskie Terytorium Oceanu Indyjskiego',
        common: 'Brytyjskie Terytorium Oceanu Indyjskiego',
      },
      por: {
        official: 'British Indian Ocean Territory',
        common: 'Território Britânico do Oceano Índico',
      },
      rus: {
        official: 'Британская территория Индийского океана',
        common: 'Британская территория в Индийском океане',
      },
      slk: {
        official: 'Britské indickooceánske územie',
        common: 'Britské indickooceánske územie',
      },
      spa: {
        official: 'Territorio Británico del Océano Índico',
        common: 'Territorio Británico del Océano Índico',
      },
      swe: {
        official: 'Brittiska territoriet i Indiska Oceanen',
        common: 'Brittiska territoriet i Indiska Oceanen',
      },
      urd: {
        official: 'برطانوی بحرہند خطہ',
        common: 'برطانوی بحرہند خطہ',
      },
      zho: {
        official: '英属印度洋领地',
        common: '英属印度洋领地',
      },
    },
    latlng: [-6.0, 71.5],
    landlocked: false,
    area: 60.0,
    demonyms: {
      eng: {
        f: 'Indian',
        m: 'Indian',
      },
    },
    flag: '\uD83C\uDDEE\uD83C\uDDF4',
    maps: {
      googleMaps: 'https://goo.gl/maps/bheNucgekVEYozoi6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/1993867',
    },
    population: 3000,
    car: {
      signs: ['GB'],
      side: 'right',
    },
    timezones: ['UTC+06:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/io.png',
      svg: 'https://flagcdn.com/io.svg',
    },
    coatOfArms: {},
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-7.3, 72.4],
    },
  },
]

export default countries
