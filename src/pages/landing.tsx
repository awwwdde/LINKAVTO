import Marquee from '../components/Marquee/Marquee';
import HeroSection from '../components/HeroSection/HeroSection';
import GoalsSection from '../components/GoalsSection/GoalsSection';
import HowToBuySection from '../components/HowToBuySection/HowToBuySection';
import SellerBanner from '../components/SellerBanner/SellerBanner';
import HowToSellSection from '../components/HowToSellSection/HowToSellSection';
import BenefitsSection from '../components/BenefitsSection/BenefitsSection';

const Landing = () => {
  const buyingSteps = [
    {
      stepNumber: 1,
      title: 'Регистрация на платформе',
      description:
        'Создайте аккаунт за несколько минут, заполнив базовую информацию о себе и своем бизнесе.',
    },
    {
      stepNumber: 2,
      title: 'Поиск нужных запчастей',
      description:
        'Используйте удобный поиск и фильтры, чтобы найти необходимые детали среди тысяч предложений.',
    },
    {
      stepNumber: 3,
      title: 'Сравнение предложений',
      description:
        'Просматривайте цены, условия доставки и рейтинги продавцов, чтобы выбрать лучшее предложение.',
    },
    {
      stepNumber: 4,
      title: 'Оформление заказа',
      description:
        'Оформите покупку в несколько кликов и получите запчасти с гарантией качества от проверенных поставщиков.',
    },
  ];

  const sellingSteps = [
    {
      stepNumber: 1,
      title: 'Регистрация продавца',
      description:
        'Заполните форму регистрации, предоставьте информацию о компании и пройдите верификацию.',
    },
    {
      stepNumber: 2,
      title: 'Добавление товаров',
      description:
        'Загрузите каталог запчастей с фотографиями, описаниями и актуальными ценами через удобный интерфейс.',
    },
    {
      stepNumber: 3,
      title: 'Настройка условий продажи',
      description:
        'Установите условия доставки, оплаты и возврата, которые будут отображаться покупателям.',
    },
    {
      stepNumber: 4,
      title: 'Начало продаж',
      description:
        'После модерации ваши товары появятся в каталоге, и вы начнете получать заказы от покупателей.',
    },
  ];

  const marqueeItems = [
    'Автозапчасти',
    'Мототехника',
    'Грузовой транспорт',
    'Спецтехника',
    'Оригинальные запчасти',
    'Аналоги',
    'Быстрая доставка',
    'Гарантия качества',
  ];

  return (
    <div>
      <HeroSection />
      <div data-header-theme="dark">
        <Marquee items={marqueeItems} speed={50} />
      </div>
      <GoalsSection />
      <HowToBuySection steps={buyingSteps} />
      <SellerBanner />
      <HowToSellSection steps={sellingSteps} />
      <BenefitsSection />
    </div>
  );
};

export default Landing;
