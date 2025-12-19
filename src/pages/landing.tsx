import { Trophy } from 'lucide-react';

const Landing = () => {
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
                <span className="text-black text-[16px] font-medium">
                    Удобная площадка для покупки необходимых запчастей для вашей техники! <br />
                    Мы работает с крупными поставщиками авто/мото техники, а также с грузовым и спец транспортом!
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
          <div className="relative w-[1720px] h-[650px] border rounded-[15px] overflow-hidden mx-auto flex items-stretch">
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
        className="min-h-screen flex flex-col items-center justify-center pt-[100px] px-5 scroll-mt-[100px]"
      >
        <h2 className="text-5xl mb-5">Как покупать</h2>
        <p className="text-lg max-w-[600px] text-center">
          Здесь будет информация о том, как покупать автомобили
        </p>
      </section>

      <section
        id="how-to-sell"
        className="min-h-screen flex flex-col items-center justify-center pt-[100px] px-5 scroll-mt-[100px]"
      >
        <h2 className="text-5xl mb-5">Как продавать</h2>
        <p className="text-lg max-w-[600px] text-center">
          Здесь будет информация о том, как продавать автомобили
        </p>
      </section>
    </div>
  );
};

export default Landing;
