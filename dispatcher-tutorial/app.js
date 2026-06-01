const modules = [
  {
    title: 'Module 1: Beginner',
    lessons: [
      {
        title: 'Lesson 1: US logistics nima?',
        subtitle: 'Boshlang‘ich tushunchalar va logistika nima ekanligini o‘rganamiz.',
        explanation: 'US logistika bu tovarlarni fabrikadan do‘konga, portdan omborga yoki mijozga yetkazish tizimidir. Dispatcher bu jarayonni boshqaradi: yukni topadi, haydovchi bilan kelishadi va hujjatlarni tekshiradi.',
        example: 'Misol: New Yorkdagi poyabzal fabrikasi Texasdagi do‘konga 2 tonna tovar jo‘natadi. Siz bu yuk uchun carrier topasiz, yo‘l rejasini tuzasiz va driverga yuklash vaqtini belgilaysiz.',
        terminology: [
          'Logistics — yuk tashish, yetkazib berish tizimi',
          'Freight — transport qilinadigan yuk',
          'Dispatcher — yuk tartibiga mas’ul shaxs',
          'Broker — yukni topuvchi va narx kelishuvchi',
          'Carrier — transport kompaniyasi yoki yuk mashinasi egasi'
        ],
        practice: [
          'Logistics va freight so‘zlarining farqini yozing.',
          'Broker va carrier o‘rtasidagi vazifalarni taqqoslang.',
          'Dispatcherni oddiy so‘z bilan tushuntiring.'
        ],
        tasks: [
          'Internetdan DAT yoki Truckstop haqida qisqacha o‘qing.',
          'Telefon suhbatida: "Hello, this is [ismingiz], dispatcher. I need information about a dry van load." — deb boshlang.',
          'Bu dars uchun 3 ta yangi inglizcha so‘z yozing.'
        ],
        english: [
          { phrase: 'Hello, this is [Your Name], dispatcher.', uz: 'Salom, bu [ismingiz], dispatcher.', pron: 'Hel-loh, dhis iz [yor neym], dis-peh-chur.' },
          { phrase: 'I have a load from Dallas to Atlanta.', uz: 'Menda Dallasdan Atlantagacha yuk bor.', pron: 'Ay hev a lohd from Dal-las to At-lan-tuh.' }
        ]
      },
      {
        title: 'Lesson 2: Trucks turlari',
        subtitle: 'Dry Van, Reefer, Flatbed va boshqalarni o‘rganamiz.',
        explanation: 'AQShda turli yuklar uchun turli mashinalar kerak. Dry Van eng ommabop: quruq, yopiq yuklar uchun. Reefer sovutgichli yuklar uchun. Flatbed katta va g‘ildiraklarsiz buyumlar uchun.',
        example: 'Agar kompaniya muzqaymoq yuborsa, siz Reefer topishingiz kerak. Agar metall konstruktsiyalar bo‘lsa, Flatbed yoki Step Deck kerak bo‘ladi.',
        terminology: [
          'Dry Van — yopiq quruq yuk mashinasi',
          'Reefer — sovutgichli yuk mashinasi',
          'Flatbed — ochiq gorizontal platforma',
          'Step Deck — pog‘onali platforma, balandligi pastlashadi',
          'Oversize — ortiqcha o‘lchamli yuk'
        ],
        practice: [
          'Dry Vanga qaysi mahsulotlar mos keladi? 3 ta misol keltiring.',
          'Reefer va Flatbed farqini yozing.',
          'Oversize yuk qachon kerak bo‘ladi?' 
        ],
        tasks: [
          'O‘zbekchada: "Step Deck nima?" deb izoh yozing.',
          'Brokerga: "This load requires a refrigerated truck." — deb aytish matnini mashq qiling.',
          'Har bir truk turi uchun bir misol yozing.'
        ],
        english: [
          { phrase: 'This is a refrigerated load.', uz: 'Bu sovutgichli yuk.', pron: 'Dhiz iz a ree-frij-uh-rey-ted lohd.' },
          { phrase: 'We need a flatbed for this shipment.', uz: 'Bu yuk uchun flatbed kerak.', pron: 'Wi need a flat-bed for dhis ship-muhnt.' }
        ]
      },
      {
        title: 'Lesson 3: Load board va dispatcher qanday ishlaydi',
        subtitle: 'DAT, Truckstop, va dispatch ish jarayoni.',
        explanation: 'Load boardlar brokerlar va carrierlar uchun online bozor. Dispatcher u yerda yuk izlaydi, narx solishtiradi va driverni belgilaydi. Har bir yukni 2-3 tomon bilan boshqaradi.',
        example: 'Broker DATda: "Dallas to Chicago, 42,000 lbs, $2,100" deb e’lon beradi. Siz shu e’lonni topib, carrierga va driverga tasdiqlaysiz.',
        terminology: [
          'Load board — yuk bozor sayt',
          'DAT — mashhur load board',
          'Truckstop — yana bir load board',
          'Rate confirmation — narx tasdiqlash hujjati',
          'BOL — Bill of Lading, yuk qabul qilish hujjati'
        ],
        practice: [
          'Load board nimani anglatadi? O‘zbekcha yozing.',
          'Broker va dispatcher farqini qayta yozing.',
          'Nega BOL muhim?' 
        ],
        tasks: [
          'DAT va Truckstop so‘zlarini toping va ularning biriga kirish uchun haqiqatli misol yozing.',
          'Brokerdan yuk narxini so‘rash uchun qisqa email matni yozing.',
          'Hammasi aniq bo‘lsin: 3 ta eslatma yozing.'
        ],
        english: [
          { phrase: 'Can you send the rate confirmation?', uz: 'Narx tasdiqlashni yubora olasizmi?', pron: 'Kan yu send dhuh reyt kon-fer-mey-shun?' },
          { phrase: 'Please send the BOL copy.', uz: 'Iltimos, BOL nusxasini yuboring.', pron: 'Pleez send dhuh bee-oh-el kah-pee.' }
        ]
      }
    ]
  },
  {
    title: 'Module 2: Intermediate',
    lessons: [
      {
        title: 'Lesson 1: Hujjatlar va yo‘l rejalari',
        subtitle: 'BOL, Rate Confirmation, Invoice va yo‘l rejasini o‘rganamiz.',
        explanation: 'BOL (Bill of Lading) yukni qabul qilish hujjati. Rate Confirmation broker va carrier o‘rtasida narx va shartlarni yozib qo‘yadi. Invoice hisob-kitob uchun kerak. Route planning esa eng tez, eng arzon yoki eng xavfsiz yo‘lni tanlashdir.',
        example: 'Agar yuk Nyu-Yorkdan Florida ga ketayotgan bo‘lsa, siz I-95 orqali manzilingizni tez yetkazish uchun tanlashingiz mumkin, lekin ba’zi transportlarda I-10 yoki I-75 ham ishlaydi.',
        terminology: [
          'BOL — yuk qabul qilish hujjati',
          'Rate Confirmation — yuk narxini va shartlarini yozib qo‘yish',
          'Invoice — mijozga yuboriladigan hisob',
          'Route planning — yo‘lni rejalashtirish',
          'ETA — tahminiy kelish vaqti'
        ],
        practice: [
          'Rate Confirmation nima va nega kerak? yozing.',
          'I-95, I-75, I-10 yo‘llaridan qaysi biri qaytadan o‘tadi? qisqa izoh yozing.',
          'ETA va POD (Proof of Delivery)ni taqqoslang.'
        ],
        tasks: [
          'BOL uchun 3 ta muhim element yozing.',
          'O‘zbekistonlik savdo kompaniyasi bilan gapirishda: "ETA 48 soatdan keyin." deb aytishni mashq qiling.',
          'Yo‘l rejasi uchun sanani va vaqtni aniqlovchi amaliy topshiriq yozing.'
        ],
        english: [
          { phrase: 'What is the ETA for this delivery?', uz: 'Bu yetkazib berish uchun tahminiy vaqt qancha?', pron: 'Wut iz dhuh ee-tee-ay for dhis deh-liv-uh-ree?' },
          { phrase: 'Please confirm pickup time.', uz: 'Iltimos, yuk olish vaqtini tasdiqlang.', pron: 'Pleez kon-firm pik-up taym.' }
        ]
      },
      {
        title: 'Lesson 2: Vaqt zonalari va xarita',
        subtitle: 'USAdagi vaqt zonalarini va asosiy yo‘nalishlarni o‘rganamiz.',
        explanation: 'AQShda 4 ta asosiy vaqt zonasi bor: Eastern, Central, Mountain, Pacific. Bu vaqtlar transportni rejalashtirishda juda muhim. Masalan, Texas Central zonada, Nyu-York Easternda. Agar driver Texasda 10:00 da yuk olishi kerak bo‘lsa, broker Nyu-Yorkdan 11:00 deb aytishi mumkin.',
        example: 'Chikagodagi yuk Florida ga ketishi uchun siz GMT-5 va GMT-4 farqini hisoblash kerak. Tinch okean bo‘yida (California) 13:00 da yuk olish, sharqda (New York) 16:00 bo‘ladi.',
        terminology: [
          'Eastern Time (ET) — Sharqiy vaqt',
          'Central Time (CT) — Markaziy vaqt',
          'Mountain Time (MT) — Tog‘lik vaqt',
          'Pacific Time (PT) — Tinch okean vaqti',
          'Lane — mashina yo‘nalishi' 
        ],
        practice: [
          'Texas qaysi vaqt zonasida? yozing.',
          'New Yorkda soat 15:00 bo‘lsa, California vaqtini aniqlang.',
          'Lane nima? qisqacha yozing.'
        ],
        tasks: [
          'O‘zbekchada: "Eastern, Central, Mountain, Pacific" so‘zlarini tarjima qiling.',
          'Texasdan Georgia ga yuk olgan driver uchun vaqtni qanday hisoblayotganingizni yozing.',
          'Eng muhim 2 ta yo‘nalish (lane)ni nomlang.'
        ],
        english: [
          { phrase: 'This pickup is in Central Time.', uz: 'Bu yuk olish markaziy vaqt zonasida.', pron: 'Dhiz pik-up iz in Sen-truhl Taym.' },
          { phrase: 'Please adjust your schedule for Pacific Time.', uz: 'Iltimos, jadvalni Pacific vaqtiga moslang.', pron: 'Pleez uh-juhst yor skeh-jool for Puh-sih-fik Taym.' }
        ]
      },
      {
        title: 'Lesson 3: Driver bilan ishlash',
        subtitle: 'Haydovchilar bilan muloqot qilish va ularni nazorat qilish.',
        explanation: 'Dispatcher driver bilan doimiy aloqa qiladi. Yukni olib ketishdan oldin, yo‘l davomida va yetkazib bergandan keyin ham nazorat qiladi. Siz ularni vaqtida topishingiz, qayerda to‘xtashi va qachon yetishi kerakligini bilishingiz kerak.',
        example: 'Agar driver Texasda bekor, siz qayerda yaqin park topishini, qachon keyingi reysga chiqishini aytishingiz kerak. Agar u 2 soat kechiksa, brokerga xabar berish sizga vazifa.',
        terminology: [
          'Dispatcher to driver — dispatcher haydovchiga',
          'Team driver — 2 kishilik haydovchilar guruhi',
          'Layover — kechroq kutish',
          'Deadhead — bo‘sh qaytish' 
        ],
        practice: [
          'Driverni kechikish haqida qanday xabar berasiz? yozing.',
          'Layover nima? misol bilan tushuntiring.',
          'Deadhead qachon bo‘ladi?' 
        ],
        tasks: [
          'Driverga SMS yozing: "Sizning keyingi yukingiz 9:00 da Dallasda."',
          'Brokerga kechikish haqida qisqa email yozing.',
          '3 ta driverga oid eslatma yozing.'
        ],
        english: [
          { phrase: 'The driver is delayed by two hours.', uz: 'Haydovchi 2 soatga kechikdi.', pron: 'Dhuh dry-vur iz dih-layd bai too auhrs.' },
          { phrase: 'Please confirm the load status.', uz: 'Iltimos, yuk holatini tasdiqlang.', pron: 'Pleez kon-firm dhuh lohd stay-tus.' }
        ]
      }
    ]
  },
  {
    title: 'Module 3: Advanced',
    lessons: [
      {
        title: 'Lesson 1: Narx muzokarasi va kelishuv',
        subtitle: 'Rate confirmation, negotiation va foyda oshirish.',
        explanation: 'Dispatcher broker va carrier o‘rtasida narxni kelishadi. Sizning vazifangiz shaffof bo‘lish va kamida 10-15% foyda qoldirish. Agar broker $2,000 taklif qilsa, siz carrierga $1,850 bersangiz va $150 qolasiz.',
        example: 'Broker 2500 dollar aytgan yuk uchun siz carrierga 2250 dollar taklif qilasiz va broker bilan 250 dollar chegara borligini aytasiz. Rate confirmationda hammasi yozilishi kerak.',
        terminology: [
          'Negotiation — narx bo‘yicha muzokara',
          'Net profit — sof foyda',
          'Gross rate — jami narx',
          'Margin — chegara',
          'Rate confirmation — narxni yozib qo‘yish' 
        ],
        practice: [
          'Broker va carrierga qancha foiz qoldirish kerak? yozing.',
          'Rate confirmation qanday ko‘rinishi kerak? qisqacha tushuntiring.',
          'Agar yuk $1,900 bo‘lsa va siz 10% olmoqchi bo‘lsangiz, carrierga qancha to‘laysiz?' 
        ],
        tasks: [
          'Brokerga: "Can we confirm $2,250 on a $2,500 load?" — deb yozing.',
          'Carrierga daromadni qanday taqdim etish kerakligini yozing.',
          'Sof foydani hisoblash mashqini bajaring.'
        ],
        english: [
          { phrase: 'Can you accept this rate?', uz: 'Bu narxni qabul qilasizmi?', pron: 'Kan yu ak-sept dhis reyt?' },
          { phrase: 'Our margin is 10%.', uz: 'Bizning marjamiz 10%.', pron: 'Awr mar-jun iz ten per-sent.' }
        ]
      },
      {
        title: 'Lesson 2: Muammolar va real hayot',
        subtitle: 'Real dispatcher jarayoni va stressli vaziyatlar.',
        explanation: 'Dispatcher bo‘lganda muammolar bo‘ladi: driver stuck, yo‘l yopiqligi, vaqt zonalari, hujjatlar. Siz eng muhim narsa: tez xabar berish va yechim topish. Broker bilan ham driver bilan ham halol bo‘lish kerak.',
        example: 'Scenario: Driver Texasda bekor qoldi, broker chaqiradi. Siz brokerga "I am checking a nearby parking. ETA 3:00 PM Central." deb javob berasiz va driverga ham xabar berasiz.',
        terminology: [
          'Stuck — tiqilib qolish',
          'ETA correction — kelish vaqtini tuzatish',
          'Freight claim — zarar da’vosi',
          'Delay notice — kechikish haqidagi xabar',
          'Problem-solving — muammoni hal qilish' 
        ],
        practice: [
          'Texasda driver stuck bo‘lsa, birinchi nimalarni tekshirasiz?',
          'Brokerga muammo haqida qanday qilib tez xabar berasiz?',
          'Delay notice nima va necha vaqtda yuborilishi kerak?' 
        ],
        tasks: [
          'Real hayot scenario yozing: driver stuck, broker chaqiradi.',
          'Telefon uchun qisqa rol o‘ynash matni yozing.',
          'Muammoni hal qilish bo‘yicha 3 qadam yozing.'
        ],
        english: [
          { phrase: 'The driver is stuck in Texas.', uz: 'Haydovchi Texasda tiqilib qoldi.', pron: 'Dhuh dry-vur iz stuck in Tex-us.' },
          { phrase: 'I am finding a solution now.', uz: 'Hozir yechim topmoqdaman.', pron: 'Ay am fyn-ding a suh-loo-shun now.' }
        ]
      },
      {
        title: 'Lesson 3: Ish topish va birinchi $1000',
        subtitle: 'Karera boshlash, CV, intervyu va mustaqil ishlash.',
        explanation: 'Dispatcher sifatida ish topish uchun tajriba, CV va mustaqil marketing kerak. Freelance bo‘lsangiz, broker va carrierlar bilan ishonchli aloqalar kerak. Kompaniyada ishga kirish uchun CVda freight, dispatch va load board tajribangizni yozing.',
        example: 'O‘zbekistonlik bo‘lib, LinkedIn yoki Upworkda "US freight dispatcher" sifatida profil oching. Avvalo kichik yuklar bilan boshlang, keyin ishonch orttirib, oyiga $1000 yoki undan ko‘proq ishlashingiz mumkin.',
        terminology: [
          'Freelance — mustaqil ish',
          'Company dispatcher — kompaniyada ishlaydigan dispatcher',
          'Resume/CV — ishga qabul uchun hujjat',
          'Interview — suhbat',
          'Client — mijoz' 
        ],
        practice: [
          'CVga qanday ma’lumotlarni qo‘shasiz? yozing.',
          'Freelance va kompaniya ishining afzalliklari nima?',
          'Birinchi $1000 ni qanday topish mumkin?' 
        ],
        tasks: [
          'O‘zbekcha CV uchun 3 ta gap yozing.',
          'Brokerga professional email yozish matnini tuzing.',
          'Ish intervyuga tayyorlanish uchun 5 savol yozing.'
        ],
        english: [
          { phrase: 'I am looking for a dispatcher position.', uz: 'Men dispatcher lavozimini izlayapman.', pron: 'Ay am loo-king for a dis-peh-chur puh-zish-un.' },
          { phrase: 'I have experience with load boards.', uz: 'Menda load boardlar bilan tajriba bor.', pron: 'Ay hav ik-speer-ee-ens with lohd bords.' }
        ]
      }
    ]
  }
];

const moduleList = document.getElementById('moduleList');
const lessonTitle = document.getElementById('lessonTitle');
const lessonSubtitle = document.getElementById('lessonSubtitle');
const lessonBody = document.getElementById('lessonBody');
const lessonTasks = document.getElementById('lessonTasks');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const startBtn = document.getElementById('startBtn');

let activeModule = 0;
let activeLesson = 0;

function renderModules() {
  moduleList.innerHTML = '';
  modules.forEach((module, index) => {
    const button = document.createElement('button');
    button.className = 'module-button' + (index === activeModule ? ' active' : '');
    button.textContent = module.title;
    button.addEventListener('click', () => {
      activeModule = index;
      activeLesson = 0;
      renderModules();
      renderLesson();
    });
    moduleList.appendChild(button);
  });
}

function renderLesson() {
  const lesson = modules[activeModule].lessons[activeLesson];
  lessonTitle.textContent = lesson.title;
  lessonSubtitle.textContent = lesson.subtitle;

  lessonBody.innerHTML = `
    <div class="lesson-section">
      <h3>Simple explanation</h3>
      <p>${lesson.explanation}</p>
    </div>
    <div class="lesson-section">
      <h3>Real-life example</h3>
      <p>${lesson.example}</p>
    </div>
    <div class="lesson-section">
      <h3>Key terminology</h3>
      <ul>${lesson.terminology.map(term => `<li>${term}</li>`).join('')}</ul>
    </div>
    <div class="lesson-section">
      <h3>English for logistics</h3>
      <ul>${lesson.english.map(item => `<li><strong>${item.phrase}</strong> — ${item.uz} <em>${item.pron}</em></li>`).join('')}</ul>
    </div>
    <div class="lesson-section">
      <h3>Practice exercises</h3>
      <ul>${lesson.practice.map(item => `<li>${item}</li>`).join('')}</ul>
    </div>
  `;

  lessonTasks.innerHTML = `
    <h3>Mini tasks</h3>
    <ul>${lesson.tasks.map(item => `<li>${item}</li>`).join('')}</ul>
  `;

  prevBtn.disabled = activeModule === 0 && activeLesson === 0;
  nextBtn.textContent = (activeModule === modules.length - 1 && activeLesson === modules[activeModule].lessons.length - 1) ? 'Dars tugadi' : 'Keyingi';
}

function handleNext() {
  const moduleLessons = modules[activeModule].lessons;
  if (activeLesson < moduleLessons.length - 1) {
    activeLesson += 1;
  } else if (activeModule < modules.length - 1) {
    activeModule += 1;
    activeLesson = 0;
  }
  renderModules();
  renderLesson();
}

function handlePrev() {
  if (activeLesson > 0) {
    activeLesson -= 1;
  } else if (activeModule > 0) {
    activeModule -= 1;
    activeLesson = modules[activeModule].lessons.length - 1;
  }
  renderModules();
  renderLesson();
}

startBtn.addEventListener('click', () => {
  activeModule = 0;
  activeLesson = 0;
  renderLesson();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
prevBtn.addEventListener('click', handlePrev);
nextBtn.addEventListener('click', handleNext);

renderModules();
renderLesson();
