import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  savedCity: string = localStorage.getItem('savedCityWeather') || "";
  searchCity: string = this.savedCity;
  isCitySaved: boolean = localStorage.hasOwnProperty('savedCityWeather')
  displayCity: string = "";
  localTime: any = "";
  temp: number = 0;
  humidity: number = 0;
  weather: string = '';
  query: boolean = false;
  loading: boolean = false;
  errorMessage: string = '';
  country: string = '';
  imgIcon: string = '';
  listOfCities: any[] = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    "Côte d'Ivoire",
    'Cabo Verde',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Comoros',
    'Congo (Congo-Brazzaville)',
    'Costa Rica',
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czechia (Czech Republic)',
    'Democratic Republic of the Congo',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Eswatini (fmr. "Swaziland")',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Holy See',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Morocco',
    'Mozambique',
    'Myanmar (formerly Burma)',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'North Korea',
    'North Macedonia',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Palestine State',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Korea',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Sweden',
    'Switzerland',
    'Syria',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Timor-Leste',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States of America',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe',
    'Aba',
    'Abakaliki',
    'Abeokuta',
    'Abidjan',
    'Abomey Calavi',
    'Abu Dhabi',
    'Abuja',
    'Acapulco De Juarez',
    'Accra',
    'Ad Dammam',
    'Adana',
    'Addis Ababa',
    'Adelaide',
    'Aden',
    'Ado Ekiti',
    'Agadir',
    'Agartala',
    'Agra',
    'Aguascalientes',
    'Ahmedabad',
    'Ahvaz',
    'Ajmer',
    'Akure',
    'Al Ain',
    'Al Hudaydah',
    'Al Mahallah Al Kubra',
    'Al Mansurah',
    'Al Mukalla',
    'Al Raqqa',
    'Albuquerque',
    'Aleppo',
    'Alexandria',
    'Algiers',
    'Aligarh',
    'Allahabad',
    'Almaty',
    'Amara',
    'Ambon',
    'Amman',
    'Amravati',
    'Amritsar',
    'Amsterdam',
    'Angeles City',
    'Ankang',
    'Ankara',
    'Anqing',
    'Anqiu',
    'Ansan',
    'Anshan',
    'Anshun',
    'Antalya',
    'Antananarivo',
    'Antipolo',
    'Antwerp',
    'Anyang',
    'Anyang',
    'Ar Rayyan',
    'Ar Rusayfah',
    'Aracaju',
    'Arak',
    'Ardabil',
    'Arequipa',
    'Arusha',
    'As Suways',
    'Asansol',
    'Ashgabat',
    'Asmara',
    'Astana',
    'Astrakhan',
    'Asuncion',
    'Athens',
    'Atlanta',
    'Auckland',
    'Aurangabad',
    'Austin',
    'Bacolod',
    'Bacoor',
    'Baghdad',
    'Bahawalpur',
    'Baishan',
    'Baixada Santista',
    'Baku',
    'Balashikha',
    'Bali',
    'Baltimore',
    'Bamako',
    'Bamenda',
    'Bandar Abbas',
    'Bandar Lampung',
    'Bandung',
    'Bangalore',
    'Banghazi',
    'Bangkok',
    'Bangui',
    'Banjarmasin',
    'Baoding',
    'Baoji',
    'Baotou',
    'Barcelona',
    'Barcelona Puerto La Cruz',
    'Bareilly',
    'Bari',
    'Barisal',
    'Barnaul',
    'Barquisimeto',
    'Barranquilla',
    'Basel',
    'Basilan City',
    'Basra',
    'Batam',
    'Bauchi',
    'Bazhong',
    "Be'er Sheva",
    'Begusarai',
    'Beijing',
    'Beira',
    'Beirut',
    'Bekasi',
    'Belem',
    'Belfast',
    'Belgaum',
    'Belgrade',
    'Bellary',
    'Belo Horizonte',
    'Bengbu',
    'Benguela',
    'Benin City',
    'Benxi',
    'Berbera',
    'Bergamo',
    'Berlin',
    'Bhavnagar',
    'Bhiwandi',
    'Bhopal',
    'Bhubaneswar',
    'Bien Hoa',
    'Bijie',
    'Bikaner',
    'Bilaspur',
    'Binzhou',
    'Birmingham',
    'Bishkek',
    'Bissau',
    'Blantyre Limbe',
    'Bloemfontein',
    'Bobo Dioulasso',
    'Bogor',
    'Bogota',
    'Bogra',
    'Bokaro Steel City',
    'Bologna',
    'Bordeaux',
    'Boston',
    'Bouake',
    'Bournemouth',
    'Bozhou',
    'Brasilia',
    'Brazzaville',
    'Bremen',
    'Brighton',
    'Brisbane',
    'Bristol',
    'Brussels',
    'Bucaramanga',
    'Bucharest',
    'Bucheon',
    'Budapest',
    'Buenos Aires',
    'Buffalo City',
    'Bujumbura',
    'Bukavu',
    'Bulawayo',
    'Bunia',
    "Bur Sa'id",
    'Buraydah',
    'Bursa',
    'Busan',
    'Busto Arsizio',
    'Cabimas',
    'Cabinda',
    'Cagayan De Oro City',
    'Cairo',
    'Calabar',
    'Calamba',
    'Calgary',
    'Cali',
    'Campinas',
    'Campo Grande',
    'Can Tho',
    'Cancun',
    'Cangzhou',
    'Cape Town',
    'Caracas',
    'Cartagena',
    'Casablanca',
    'Catania',
    'Cebu City',
    'Celaya',
    'Cenxi',
    'Chandigarh',
    'Changchun',
    'Changde',
    'Changge',
    'Changning',
    'Changsha',
    'Changshu',
    'Changwon',
    'Changyi',
    'Changzhi',
    'Changzhou',
    'Chaohu',
    'Chaoyang',
    'Chaozhou',
    'Charlotte',
    'Cheboksary',
    'Chelyabinsk',
    'Chengde',
    'Chengdu',
    'Chennai',
    'Chenzhou',
    'Cheonan',
    'Cheongju',
    'Cherthala',
    'Chiang Mai',
    'Chiang Rai',
    'Chicago',
    'Chiclayo',
    'Chifeng',
    'Chihuahua',
    'Chittagong',
    'Chon Buri',
    'Chongjin',
    'Chongqing',
    'Chuxiong',
    'Chuzhou',
    'Ciudad Guayana',
    'Ciudad Juarez',
    'Cixi',
    'Cochabamba',
    'Coimbatore',
    'Cologne',
    'Colombo',
    'Columbus',
    'Comilla',
    'Conakry',
    'Concepcion',
    'Copenhagen',
    'Cordoba',
    'Cotonou',
    'Cuautla Morelos',
    'Cucuta',
    'Cuernavaca',
    'Cuiaba',
    'Cuito',
    'Culiacan',
    'Curitiba',
    'Cuttack',
    'Da Nang',
    'Daegu',
    'Daejon',
    'Dakar',
    'Dali',
    'Dalian',
    'Dallas',
    'Damascus',
    'Dandong',
    'Danyang',
    'Daqing',
    'Dar Es Salaam',
    'Dasmarinas',
    'Datong',
    'Davanagere',
    'Davao City',
    'Daye',
    'Dazhou',
    'Dehradun',
    'Delhi',
    'Dengfeng',
    'Dengzhou',
    'Denizli',
    'Denpasar',
    'Denver',
    'Depok',
    'Detroit',
    'Deyang',
    'Dezhou',
    'Dhaka',
    'Dhanbad',
    'Diwaniyah',
    'Diyarbakir',
    'Djibouti',
    'Dnipro',
    'Doha',
    'Donetsk',
    'Dongguan',
    'Dongtai',
    'Dongyang',
    'Dongying',
    'Dortmund',
    'Douai Lens',
    'Douala',
    'Dresden',
    'Dubai',
    'Dublin',
    'Duesseldorf',
    'Duisburg',
    'Durango',
    'Durban',
    'Durg Bhilainagar',
    'Durgapur',
    'Dushanbe',
    'Edinburgh',
    'Edmonton',
    'Ekurhuleni',
    'El Djelfa',
    'El Obeid',
    'El Paso',
    'Enshi',
    'Enugu',
    'Erbil',
    'Erduosi Ordoss',
    'Erode',
    'Esfahan',
    'Eskisehir',
    'Eslamshahr',
    'Essen',
    'Ezhou',
    'Faisalabad',
    'Feicheng',
    'Feira De Santana',
    'Fes',
    'Firozabad',
    'Florence',
    'Florianopolis',
    'Fort Worth',
    'Fortaleza',
    'Foshan',
    'Frankfurt',
    'Freetown',
    'Fresno',
    'Fukuoka',
    'Fuqing',
    'Fushun Liaoning',
    'Fuxin',
    'Fuyang',
    'Fuzhou Fujian',
    'Fuzhou Jiangxi',
    'Ganzhou',
    'Gaomi',
    'Gaoxiong',
    'Gaoyou',
    'Gaozhou',
    'Gaya',
    'Gaza',
    'Gaziantep',
    'Gebze',
    'General Santos City',
    'Geneva',
    'Genoa',
    'Glasgow',
    'Goiania',
    'Gold Coast',
    'Goma',
    'Gombe',
    'Gomel',
    'Gongyi',
    'Gorakhpur',
    'Gothenburg',
    'Goyang',
    'Grande Sao Luis',
    'Grande Vitoria',
    'Grenoble',
    'Guadalajara',
    'Guang An',
    'Guangyuan',
    'Guangzhou',
    'Guatemala City',
    'Guayaquil',
    'Guigang',
    'Guilin',
    'Guiping',
    'Guiyang',
    'Gujranwala',
    'Gulbarga',
    'Guntur',
    'Guwahati',
    'Gwalior',
    'Gwangju',
    'Haerbin',
    'Hai Phong',
    'Haicheng',
    'Haifa',
    'Haikou',
    'Haimen',
    'Haining',
    'Hamadan',
    'Hamah',
    'Hamburg',
    'Hamhung',
    'Hamilton',
    'Hanchuan',
    'Handan',
    'Hangzhou',
    'Hannover',
    'Hanoi',
    'Hanzhong',
    'Harare',
    'Hargeysa',
    'Havana',
    'Hebi',
    'Hefei',
    'Hegang',
    'Helsinki',
    'Hengshui',
    'Hengyang',
    'Herat',
    'Hermosillo',
    'Heyuan',
    'Heze',
    'Hezhou',
    'Hillah',
    'Hiroshima',
    'Ho Chi Minh City',
    'Hohhot',
    'Homs',
    'Hong Kong',
    'Hosur',
    'Houston',
    'Huaian',
    'Huaibei',
    'Huaihua',
    'Huainan',
    'Huambo',
    'Huangshi',
    'Hubli Dharwad',
    'Hufuf Mubarraz',
    'Huizhou',
    'Huludao',
    'Huzhou',
    'Hyderabad',
    'Hyderabad',
    'Ibadan',
    'Ibague',
    'Ibb',
    'Ikorodu',
    'Ilorin',
    'Imphal',
    'Imus',
    'Incheon',
    'Indianapolis',
    'Indore',
    'Ipoh',
    'Irbid',
    'Irkutsk',
    'Islamabad',
    'Istanbul',
    'Izhevsk',
    'Izmir',
    'Jabalpur',
    'Jacksonville',
    'Jaipur',
    'Jakarta',
    'Jalandhar',
    'Jalgaon',
    'Jambi',
    'Jammu',
    'Jamnagar',
    'Jamshedpur',
    'Jeonju',
    'Jerusalem',
    'Jhansi',
    'Ji Nan Shandong',
    'Jiamusi',
    'Jiangmen',
    'Jiangyin',
    'Jianyang',
    'Jiaozhou',
    'Jiaozuo',
    'Jiaxing',
    'Jiddah',
    'Jieyang',
    'Jilin',
    'Jincheng',
    'Jingjiang',
    'Jingmen',
    'Jingzhou Hubei',
    'Jinhua',
    'Jining Shandong',
    'Jinjiang',
    'Jinzhong',
    'Jinzhou',
    'Jiujiang',
    'Jixi Heilongjiang',
    'Joao Pessoa',
    'Jodhpur',
    'Johannesburg',
    'Johor Bahru',
    'Joinville',
    'Jos',
    'Jubayl',
    'Juiz De Fora',
    'Jundiai',
    'Kabinda',
    'Kabul',
    'Kaduna',
    'Kagoshima',
    'Kahramanmaras',
    'Kaifeng',
    'Kakinada',
    'Kalasin',
    'Kampala',
    'Kananga',
    'Kandahar',
    'Kannur',
    'Kano',
    'Kanpur',
    'Kansas City',
    'Karachi',
    'Karaganda',
    'Karaj',
    'Karbala',
    'Kathmandu',
    'Katsina',
    'Kayamkulam',
    'Kayseri',
    'Kazan',
    'Kemerovo',
    'Kerman',
    'Kermanshah',
    'Khabarovsk',
    'Khamis Mushayt',
    'Kharkiv',
    'Khartoum',
    'Khon Kaen',
    'Khulna',
    'Kiev',
    'Kigali',
    'Kikwit',
    'Kingston',
    'Kinshasa',
    'Kirkuk',
    'Kirov',
    'Kisangani',
    'Kismaayo',
    'Kitchener',
    'Kitwe',
    'Kochi',
    'Kolhapur',
    'Kolkata',
    'Kollam',
    'Kolwezi',
    'Konya',
    'Kota',
    'Kota Kinabalu',
    'Kottayam',
    'Kozhikode',
    'Krakow',
    'Krasnodar',
    'Krasnoyarsk',
    'Kryvyi Rih',
    'Kuala Lumpur',
    'Kuantan',
    'Kuching',
    'Kuerle',
    'Kumamoto',
    'Kumasi',
    'Kunming',
    'Kunshan',
    'Kurnool',
    'Kuwait City',
    'La Laguna',
    'La Paz',
    'La Plata',
    'La Serena Coquimbo',
    'Lagos',
    'Lahore',
    'Laiwu',
    'Laixi',
    'Langfang',
    'Lanzhou',
    'Larkana',
    'Las Vegas',
    'Lattakia',
    'Latur',
    'Leicester',
    'Leipzig',
    'Leiyang',
    'Leon De Los Aldamas',
    'Leshan',
    'Lianyungang',
    'Liaocheng',
    'Liaoyang',
    'Libreville',
    'Liege',
    'Likasi',
    'Liling',
    'Lille',
    'Lilongwe',
    'Lima',
    'Linfen',
    'Linhai',
    'Linyi Shandong',
    'Lipetsk',
    'Lisbon',
    'Liuan',
    'Liupanshui',
    'Liuyang',
    'Liuzhou',
    'Liverpool',
    'Lodz',
    'Lokoja',
    'Lome',
    'London',
    'London Ca',
    'Londrina',
    'Longhai',
    'Longkou',
    'Longyan',
    'Los Angeles',
    'Loudi',
    'Loum',
    'Luanda',
    'Lubango',
    'Lubumbashi',
    'Lucknow',
    'Ludhiana',
    'Luohe',
    'Luoyang',
    'Lusaka',
    'Luzhou',
    'Lviv',
    'Lyon',
    "Ma'anshan",
    'Macao',
    'Macapa',
    'Maceio',
    'Madrid',
    'Madurai',
    'Maiduguri',
    'Makassar',
    'Makhachkala',
    'Malaga',
    'Malang',
    'Malanje',
    'Malappuram',
    'Malatya',
    'Malegaon',
    'Managua',
    'Manama',
    'Manaus',
    'Manchester',
    'Mandalay',
    'Mangalore',
    'Manila',
    'Maoming',
    'Maputo',
    'Mar Del Plata',
    'Maracaibo',
    'Maracay',
    'Marrakech',
    'Marseille',
    'Mashhad',
    'Matamoros',
    'Mataram',
    'Mathura',
    'Matola',
    'Matsuyama',
    'Maturin',
    'Mazar E Sharif',
    'Mbeya',
    'Mbouda',
    'Mbuji Mayi',
    'Mecca',
    'Medan',
    'Medellin',
    'Medina',
    'Meerut',
    'Meishan',
    'Mekele',
    'Meknes',
    'Melbourne',
    'Memphis',
    'Mendoza',
    'Merca',
    'Merida',
    'Mersin',
    'Mesa',
    'Mexicali',
    'Mexico City',
    'Mianyang Sichuan',
    'Milan',
    'Miluo',
    'Milwaukee',
    'Minsk',
    'Misratah',
    'Mogadishu',
    'Mombasa',
    'Monrovia',
    'Monterrey',
    'Montevideo',
    'Montreal',
    'Moradabad',
    'Morelia',
    'Moscow',
    'Mosul',
    'Mudanjiang',
    'Multan',
    'Mumbai',
    'Munich',
    'Murcia',
    'Muscat',
    'Muzaffarnagar',
    'Muzaffarpur',
    'Mwanza',
    'Mysore',
    'N Djamena',
    'Naberezhnye Tchelny',
    'Nagoya',
    'Nagpur',
    'Nairobi',
    'Najaf',
    'Nakhon Pathom',
    'Nakhon Ratchasima',
    'Namangan',
    'Nampula',
    'Nanchang',
    'Nanchong',
    'Nanded Waghala',
    'Nanjing',
    'Nanning',
    'Nanping',
    'Nantes',
    'Nantong',
    'Nanyang Henan',
    'Naples',
    'Nashik',
    'Nashville',
    'Nasiriyah',
    'Natal',
    'Nay Pyi Taw',
    'Ndola',
    'Neijiang',
    'Nellore',
    'New York City',
    'Newcastle Upon Tyne',
    'Niamey',
    'Nice',
    'Niigata',
    'Ningbo',
    'Nizhniy Novgorod',
    'Nnewi',
    'Nonthaburi',
    'Nottingham',
    'Nouakchott',
    'Novokuznetsk',
    'Novosibirsk',
    'Nurenberg',
    'Nyala',
    'Oaxaca De Juarez',
    'Odesa',
    'Ogbomosho',
    'Okayama',
    'Oklahoma City',
    'Omaha',
    'Omsk',
    'Onitsha',
    'Oran',
    'Orenburg',
    'Orumiyeh',
    'Osaka',
    'Oshogbo',
    'Oslo',
    'Ottawa',
    'Ouagadougou',
    'Oujda',
    'Owerri',
    'Pachuca De Soto',
    'Padang',
    'Padova',
    'Palembang',
    'Palermo',
    'Panama City',
    'Panipat',
    'Panjin',
    'Panzhihua',
    'Paris',
    'Pathum Thani',
    'Patiala',
    'Patna',
    'Pekan Baru',
    'Penza',
    'Pereira',
    'Perm',
    'Perth',
    'Peshawar',
    'Philadelphia',
    'Phnom Penh',
    'Phoenix',
    'Pietermaritzburg',
    'Pingdingshan Henan',
    'Pingdu',
    'Pingxiang Jiangxi',
    'Pizhou',
    'Pointe Noire',
    'Pontianak',
    'Port Au Prince',
    'Port Elizabeth',
    'Port Harcourt',
    'Port of Spain',
    'Port Sudan',
    'Portland',
    'Porto',
    'Porto Alegre',
    'Porto Velho',
    'Poza Rica De Hidalgo',
    'Poznan',
    'Prague',
    'Pretoria',
    'Puducherry',
    'Puebla',
    'Puerto Vallarta',
    'Pune',
    'Puning',
    'Purnia',
    'Putian',
    'Puyang',
    'Pyongyang',
    'Qianjiang',
    'Qingdao',
    'Qingyuan',
    'Qingzhou',
    'Qinhuangdao',
    'Qinzhou',
    'Qiqihaer',
    'Qitaihe',
    'Qom',
    'Quanzhou',
    'Quebec City',
    'Queretaro',
    'Quetta',
    'Quito',
    'Qujing',
    'Quzhou',
    'Rabat',
    'Raipur',
    'Rajahmundry',
    'Rajkot',
    'Rajshahi',
    'Ranchi',
    'Rasht',
    'Raurkela',
    'Rawalpindi',
    'Rayong',
    'Recife',
    'Renqiu',
    'Reynosa',
    'Ribeirao Preto',
    'Riga',
    'Rio De Janeiro',
    'Riyadh',
    'Rizhao',
    'Rome',
    'Rosario',
    'Rostov On Don',
    'Rotterdam',
    'Ruian',
    'Rupganj',
    'Rustenburg',
    'Ryazan',
    'Sacramento',
    'Safaqis',
    'Saharanpur',
    'Saint Petersburg',
    'Sakarya',
    'Salem',
    'Salta',
    'Saltillo',
    'Salvador',
    'Samara',
    'Samarinda',
    'Samarkand',
    'Samsun',
    'Samut Prakan',
    'Samut Sakhon',
    'San Antonio',
    'San Diego',
    'San Francisco',
    'San Jose',
    'San Jose',
    'San Jose Del Monte',
    'San Juan',
    'San Juan',
    'San Luis Potosi',
    'San Miguel De Tucuman',
    'San Pedro Sula',
    'San Salvador',
    'Sanaa',
    'Sangli',
    'Sanhe',
    'Sanliurfa',
    'Sanmenxia',
    'Santa Cruz',
    'Santa Fe',
    'Santa Marta',
    'Santiago',
    'Santiago',
    'Santo Domingo',
    'Sanya',
    'Sao Jose Dos Campos',
    'Sao Paulo',
    'Sapporo',
    'Saratov',
    'Sargodha',
    'Seattle',
    'Sekondi Takoradi',
    'Semarang',
    'Sendai',
    'Seongnam',
    'Seoul',
    'Seregno',
    'Seville',
    'Shanghai',
    'Shangqiu',
    'Shangrao',
    'Shangyu',
    'Shantou',
    'Shaoguan',
    'Shaoxing',
    'Shaoyang',
    'Sharjah',
    'Sheffield',
    'Sheikhupura',
    'Shenyang',
    'Shenzhen',
    'Shijiazhuang',
    'Shimkent',
    'Shiraz',
    'Shishi',
    'Shiyan',
    'Shizuishan',
    'Shizuoka',
    'Shouguang',
    'Shuangyashan',
    'Shuozhou',
    'Sialkot',
    'Sihui',
    'Siliguri',
    'Singapore',
    'Siping',
    'Skopje',
    'Sofia',
    'Sokoto',
    'Solapur',
    'Songkhla',
    'Songyuan',
    'Sorocaba',
    'Soshanguve',
    'Southampton',
    'Srinagar',
    'Stockholm',
    'Stuttgart',
    'Suining Sichuan',
    'Sukkur',
    'Sulaimaniya',
    'Suqian',
    'Surabaya',
    'Surakarta',
    'Surat',
    'Surat Thani',
    'Suweon',
    'Suzhou',
    'Suzhou',
    'Sydney',
    'Sylhet',
    'Tabriz',
    'Tabuk',
    'Taian Shandong',
    'Taicang',
    'Taif',
    'Tainan',
    'Taipei',
    'Taishan',
    'Taixing',
    'Taiyuan Shanxi',
    'Taiz',
    'Taizhong',
    'Taizhou Jiangsu',
    'Taizhou Zhejiang',
    'Tamale',
    'Tampico',
    'Tanger',
    'Tangerang',
    'Tangshan Hebei',
    'Tanta',
    'Taoyuan',
    'Tashkent',
    'Tasikmalaya',
    'Tbilisi',
    'Tegucigalpa',
    'Tehran',
    'Tel Aviv',
    'Tengzhou',
    'Tepic',
    'Teresina',
    'The Hague',
    'Thessaloniki',
    'Thiruvananthapuram',
    'Thoothukkudi',
    'Thrissur',
    'Tianjin',
    'Tianmen',
    'Tianshui',
    'Tijuana',
    'Tirana',
    'Tiruchirappalli',
    'Tirunelveli',
    'Tirupati',
    'Tiruppur',
    'Tlaxcala',
    'Tokyo',
    'Toluca De Lerdo',
    'Tolyatti',
    'Tomsk',
    'Tongchuan',
    'Tonghua',
    'Tongliao',
    'Tongling',
    'Tongxiang',
    'Toronto',
    'Toulon',
    'Toulouse',
    'Tripoli',
    'Trujillo',
    'Tshikapa',
    'Tucson',
    'Tunis',
    'Turin',
    'Tuxtla Gutierrez',
    'Tyumen',
    'Uberlandia',
    'Ubon Ratchathani',
    'Udaipur',
    'Udon Thani',
    'Ufa',
    'Uige',
    'Ujjain',
    'Ulaanbaatar',
    'Ulsan',
    'Ulyanovsk',
    'Umuahia',
    'Urumqi',
    'Utrecht',
    'Utsunomiya',
    'Uvira',
    'Uyo',
    'Vadodara',
    'Vale Do Aco',
    'Valencia',
    'Valencia',
    'Valledupar',
    'Valparaiso',
    'Van',
    'Vancouver',
    'Varanasi',
    'Vellore',
    'Venezia',
    'Veracruz',
    'Vereeniging',
    'Verona',
    'Vienna',
    'Vientiane',
    'Vijayawada',
    'Villahermosa',
    'Villavicencio',
    'Vilnius',
    'Visakhapatnam',
    'Vladivostok',
    'Volgograd',
    'Voronezh',
    'Warangal',
    'Warri',
    'Warsaw',
    'Washington',
    'Weifang',
    'Weihai',
    'Weinan',
    'Wenling',
    'Wenzhou',
    'West Rand',
    'West Yorkshire',
    'Winnipeg',
    'Wroclaw',
    'Wuhai',
    'Wuhan',
    'Wuhu Anhui',
    'Wuxi',
    'Wuzhou',
    'Xalapa',
    'Xi An Shaanxi',
    'Xiamen',
    'Xiangtan Hunan',
    'Xiangyang',
    'Xiantao',
    'Xianyang Shaanxi',
    'Xiaogan',
    'Xinbei',
    'Xinghua',
    'Xingning',
    'Xingtai',
    'Xining',
    'Xinmi',
    'Xintai',
    'Xinxiang',
    'Xinyang',
    'Xinyi',
    'Xinyu',
    'Xiongan',
    'Xuancheng',
    'Xuchang',
    'Xuzhou',
    "Yan'an",
    'Yancheng Jiangsu',
    'Yangjiang',
    'Yangon',
    'Yangquan',
    'Yangzhou',
    'Yanji',
    'Yanshi',
    'Yantai',
    'Yaounde',
    'Yaroslavl',
    'Yazd',
    'Yekaterinburg',
    'Yerevan',
    'Yibin',
    'Yichang',
    'Yichun Heilongjiang',
    'Yichun Jiangxi',
    'Yinchuan',
    'Yingkou',
    'Yiwu',
    'Yiyang Hunan',
    'Yongcheng',
    'Yongin',
    'Yongkang',
    'Yongzhou',
    'Yueqing',
    'Yueyang',
    'Yulin Guangxi',
    'Yulin Shaanxi',
    'Yuncheng',
    'Yuxi',
    'Yuyao',
    'Zagreb',
    'Zahedan',
    'Zamboanga City',
    'Zanzibar',
    'Zaoyang',
    'Zaozhuang',
    'Zaporizhzhya',
    'Zaragoza',
    'Zaria',
    'Zarqa',
    'Zhangjiagang',
    'Zhangjiakou',
    'Zhangzhou',
    'Zhanjiang',
    'Zhaodong',
    'Zhaoqing',
    'Zhengzhou',
    'Zhenjiang Jiangsu',
    'Zhongshan',
    'Zhongxiang',
    'Zhoukou',
    'Zhoushan',
    'Zhuanghe',
    'Zhucheng',
    'Zhuhai',
    'Zhuji',
    'Zhumadian',
    'Zhuzhou',
    'Zibo',
    'Zigong',
    'Zinder',
    'Ziyang',
    'Zunyi',
    'Zurich',
  ] //hard-coded list of countries and top 1000 cities of the world.

  filteredCities: string[];

  urlImagen: string = "https://www.pngall.com/wp-content/uploads/11/Weather-No-Background.png"

  constructor(private _weatherService: WeatherService) {
    this.filteredCities = [];
  }

  checkKey(e: any): void {
    this.filteredCities = [];
    if (e.key === 'Enter') {
      this.getWeather();
    }
    else {
      this.fillSearch(e);
    }
  }

  getWeather() {
    this.filteredCities = []
    this.errorMessage = ""
    this.query = false;
    this.loading = true;
    this._weatherService.getWeather(this.searchCity).subscribe(

      {
        next: (data) => {
          this.loading = false;
          this.query = true;
          this.displayCity = data.name;

          let newDate = new Date((new Date().getTime() + (data.timezone) * 1000)).toUTCString();
          this.localTime = newDate.substring(0, newDate.length - 3)

          this.temp = data.main.temp - 273.15;
          this.humidity = data.main.humidity;
          this.country = data.sys.country;
          this.weather = data.weather[0].main + " (" + data.weather[0].description + ")."
          let iconCode = data.weather[0].icon;
          this.imgIcon = "http://openweathermap.org/img/w/" + iconCode + ".png";

        },
        error: (error) => {
          this.loading = false
          this.errorMessage = error.error.message;
        },
        complete: () => this.searchCity = ""
      })
  }
  saveCity() {
    localStorage.setItem("savedCityWeather", this.displayCity)
    this.savedCity = localStorage.getItem("savedCityWeather") || "";
    this.searchCity = this.savedCity;
    this.isCitySaved = localStorage.hasOwnProperty('savedCityWeather')
    this.getWeather()

  }

  deleteCity() {
    localStorage.removeItem("savedCityWeather")
    this.isCitySaved = localStorage.hasOwnProperty('savedCityWeather')
    this.query = false;
  }

  fillSearch(e: any) {

    if (this.searchCity.length >= 3) {
      this.filteredCities = this.listOfCities.filter(c => c.substring(0, this.searchCity.length).toLowerCase() === this.searchCity.substring(0, this.searchCity.length).toLowerCase())

    }

    return [];

  }

  ngOnInit(): void {

    if (this.searchCity !== "") {
      this.getWeather()
    }

  }



}
