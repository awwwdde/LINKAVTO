import { Trophy } from 'lucide-react';
import StepCard from '../components/StepCard/StepCard';
import img2 from '../img/img2.png';
import img3 from '../img/img3.png';

const Landing = () => {
  const buyingSteps = [
    {
      stepNumber: 1,
      title: 'Регистрация на платформе',
      description: 'Создайте аккаунт за несколько минут, заполнив базовую информацию о себе и своем бизнесе.',
    },
    {
      stepNumber: 2,
      title: 'Поиск нужных запчастей',
      description: 'Используйте удобный поиск и фильтры, чтобы найти необходимые детали среди тысяч предложений.',
    },
    {
      stepNumber: 3,
      title: 'Сравнение предложений',
      description: 'Просматривайте цены, условия доставки и рейтинги продавцов, чтобы выбрать лучшее предложение.',
    },
    {
      stepNumber: 4,
      title: 'Оформление заказа',
      description: 'Оформите покупку в несколько кликов и получите запчасти с гарантией качества от проверенных поставщиков.',
    },
  ];

  const sellingSteps = [
    {
      stepNumber: 1,
      title: 'Регистрация продавца',
      description: 'Заполните форму регистрации, предоставьте информацию о компании и пройдите верификацию.',
    },
    {
      stepNumber: 2,
      title: 'Добавление товаров',
      description: 'Загрузите каталог запчастей с фотографиями, описаниями и актуальными ценами через удобный интерфейс.',
    },
    {
      stepNumber: 3,
      title: 'Настройка условий продажи',
      description: 'Установите условия доставки, оплаты и возврата, которые будут отображаться покупателям.',
    },
    {
      stepNumber: 4,
      title: 'Начало продаж',
      description: 'После модерации ваши товары появятся в каталоге, и вы начнете получать заказы от покупателей.',
    },
  ];
  return (
    <div>
      <section className="min-h-screen flex flex-col justify-start pt-[100px] px-5 scroll-mt-[100px]">
        <div className="w-full max-w-[1720px] mx-auto flex items-stretch">
          <div className="w-[605px] flex flex-col gap-4">
            <div className="flex items-center gap-2 px-4 py-2 border border-black-300 rounded-full w-[380px]">
              <Trophy className="w-[15px] h-[15px] text-black" />
              <span className="text-black text-sm">
                Маркетплейс №1 для запчастей любого транспорта
              </span>
            </div>
            <div>
              <span className="text-black text-[40px] font-bold leading-[105%] tracking-[1.5px]">
                Продавайте и покупайте автозапчасти на удобном маркетплейсе
              </span>
            </div>
            <div className="mt-0.3">
              <span className="text-[#7A7A7A] text-[16px] font-medium">
                Забудьте про вечный поиск нужного сайта, в LINKAVTO найдется все от разных поставщиков!
              </span>
            </div>
          </div>
          <div className="w-[605px] ml-[415px] mr-5 flex flex-col justify-end">
            <div className="flex items-center gap-2 mb-5">
                <span className="text-black text-[16px] font-medium text-justify">
                    Удобная площадка для покупки необходимых запчастей для вашей техники! Мы работает с крупными поставщиками авто/мото техники, а также с грузовым и спец транспортом!
                </span>
            </div>
            <div>
            <button className="bg-[#000000] text-white text-[14px] font-medium px-4 py-2 rounded-full w-[250px] h-[35px] cursor-pointer transition-all duration-300 hover:bg-[#89BEE8]">
                    <a href='https://t.me/Ilya_Feok' target="_blank"> Записаться на демообзор </a>
                </button>
            </div>
          </div>
        </div>
        <div className="w-full relative mt-[50px]">
          <div className="relative w-[1720px] h-[650px] rounded-[15px] overflow-hidden mx-auto flex items-stretch">
            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=600&fit=crop"
              alt="Автомобили"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
            <div className="absolute bottom-[40px] left-[40px] z-10 flex flex-row items-start gap-10">
                <div className='flex flex-col justify-start'>
                    <span className="text-white text-[40px] font-bold">
                        1%
                    </span>
                    <span className="text-white text-[16px] font-medium">
                        минимальная комиссия
                    </span>
                </div>
                <div className="w-[1px] bg-white h-[65px] self-center"></div>
                <div className='flex flex-col justify-start'>
                    <span className="text-white text-[40px] font-bold">
                        48ч
                    </span>
                    <span className="text-white text-[16px] font-medium ">
                        до первых продаж
                    </span>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1720px] mx-auto px-5 mt-[100px]">
        <div className="flex items-start relative">
          <div className="text-[#7A7A7A] text-[24px] font-semibold leading-tight absolute left-0">
            Цели
          </div>
          <div className="w-[650px] mx-auto">
            <p className="text-black text-[16px] font-medium text-justify leading-tight">
            Смысл нашего маркетплейса — сделать покупку запчастей для любого вида техники простой, быстрой и предсказуемой. Мы объединяем проверенных продавцов запчастей для авто, мотоциклов, грузовой и специальной техники в одном цифровом пространстве, где вы находите нужную деталь без лишних поисков, рисков и потери времени. Мы стремимся сократить путь от потребности до решения: прозрачные предложения, актуальное наличие, понятные условия и удобный выбор позволяют вам сосредоточиться на главном — эксплуатации и развитии бизнеса или личного транспорта. Маркетплейс создан, чтобы вы были уверены в результате каждой покупки и возвращались снова, зная, что здесь запчасти работают на вас.
            </p>
          </div>
        </div>
      </section>
      
      <section
        id="how-to-buy"
        className="w-full max-w-[1720px] mx-auto px-5 mt-[100px]"
      >
        <h2 className="text-[24px] mb-2 font-semibold">Начать покупать — просто</h2>
        <p className="text-[16px] max-w-[600px] text-left text-[#7A7A7A] mb-8">
          Всего 4 шага до первых покупок
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {buyingSteps.map((step) => (
            <StepCard
              key={step.stepNumber}
              stepNumber={step.stepNumber}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </section>
      <section className="w-full max-w-[1720px] mx-auto px-5 mt-[100px]">
      <div className="w-full relative mt-[50px]">
          <div className="relative w-[1720px] h-[400px] rounded-[15px] overflow-hidden mx-auto flex items-stretch">
            <img
              src={img2}
              alt="Автомобили"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
            <div className="absolute bottom-[40px] left-[40px] z-10 flex flex-row items-center gap-10">
                <div className='flex flex-col justify-center'>
                    <span className="text-white text-[40px] font-bold">
                        Вы продавец?
                    </span>
                    <span className="text-white text-[16px] font-medium">
                        Посмотрите как правильно продавать!
                    </span>
                </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="how-to-sell"
        className="w-full max-w-[1720px] mx-auto px-5 mt-[100px]"
      >
        <h2 className="text-[24px] mb-2 font-semibold">Начать продавать — еще проще</h2>
        <p className="text-[16px] max-w-[600px] text-left text-[#7A7A7A] mb-8">
          Всего 4 шага до первых заказов
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {sellingSteps.map((step) => (
            <StepCard
              key={step.stepNumber}
              stepNumber={step.stepNumber}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </section>
      <section className="w-full max-w-[1720px] mx-auto px-5 mt-[100px]">
        <div className="w-full relative mt-[50px]">
          <div className="relative w-[1720px] h-[500px] rounded-[15px] overflow-hidden mx-auto flex items-stretch">
            <img
              src={img3}
              alt="Преимущества работы с нами"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
            <div className="absolute inset-0 z-10 flex flex-col justify-center items-start px-[60px] gap-6">
              <div className="flex flex-col gap-4 max-w-[800px]">
                <h2 className="text-white text-[20px] font-bold leading-tight">
                  Преимущества работы с нами
                </h2>
                <div className="flex flex-col gap-3 mt-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white text-[16px] font-medium">
                      Широкая база проверенных поставщиков и покупателей
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white text-[16px] font-medium">
                      Прозрачные условия сотрудничества
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white text-[16px] font-medium">
                      Быстрая регистрация и начало работы за 48 часов
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white text-[16px] font-medium">
                      Удобный интерфейс и профессиональная поддержка
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white text-[16px] font-medium">
                      Комиссия 1% от продаж и никаких штрафов, в отличии от других маркетплейсов
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <button className="bg-[#89BEE8] text-white text-[16px] font-medium px-6 py-3 rounded-full cursor-pointer transition-all duration-300 hover:bg-[#89BEE8] hover:text-black">
                  <a href='https://t.me/Ilya_Feok' target="_blank" className="no-underline">
                    Запишитесь на демообзор, чтобы начать работу с нами
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
