import React from "react";
import Head from "next/head";

export default function FocusMax() {
  return (
    <>
      <Head>
        <title>Фокумакс - Комплекс для здоровья глаз</title>
        <meta
          name="description"
          content="Информация о продукте Фокумакс для здоровья глаз"
        />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              ФОКУМАКС
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Комплексная защита для здоровья глаз
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Target Audience Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Целевая аудитория
            </h2>
            <p className="mb-8 text-gray-600 text-center max-w-3xl mx-auto">
              Продукт Фокумакс разработан для людей, которые сталкиваются с
              повышенной нагрузкой на зрение или возрастными изменениями глаз:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Офисные работники и фрилансеры
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Много работающие за компьютером (подвержены влиянию синего
                  света)
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Люди старше 40 лет
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  С повышенным риском возрастной макулярной дегенерации и
                  катаракты (риск возрастает на 30% после 40 лет)
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Пользователи контактных линз
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Испытывающие сухость и раздражение глаз
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Люди с активным образом жизни
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Ежедневно использующие смартфоны, ноутбуки и другие гаджеты
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Те, кто замечает проблемы со зрением
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Зрительная усталость, сухость глаз или ухудшение зрения,
                  независимо от возраста
                </p>
              </div>
            </div>
          </div>

          {/* Key SEO Words Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Ключевые слова для продвижения
            </h2>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                Топ-3 ключевых слова на русском языке:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="font-bold text-xl text-gray-900 mb-3">
                    Здоровье глаз
                  </h4>
                  <p className="text-gray-600">
                    Охватывает общий интерес к поддержанию зрения, профилактике
                    и решению проблем
                  </p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="font-bold text-xl text-gray-900 mb-3">
                    Зрение и синий свет
                  </h4>
                  <p className="text-gray-600">
                    Целевое словосочетание, связанное с главной проблемой,
                    которую решает Фокумакс
                  </p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="font-bold text-xl text-gray-900 mb-3">
                    Витамины для зрения
                  </h4>
                  <p className="text-gray-600">
                    Популярный запрос среди тех, кто ищет комплексы для
                    поддержки глаз
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                Расширенный список из 20 ключевых слов:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Купить витамины для зрения",
                  "Комплекс для глаз от синего света",
                  "Купить добавку для защиты глаз",
                  "Витамины для глаз от усталости купить",
                  "Средство для зрения от компьютера",
                  "Купить лютеин для сетчатки",
                  "Комплекс для сухости глаз купить",
                  "Витамины для зрения 40+ купить",
                  "Купить зеаксантин для глаз",
                  "Средство для защиты сетчатки цена",
                  "Купить таурин для зрения",
                  "Добавка для глаз от макулярной дегенерации",
                  "Купить витамин С для глаз",
                  "Комплекс для зрения в капсулах",
                  "Средство от раздражения глаз купить",
                  "Витамины для глаз при работе с экраном",
                  "Купить добавку для остроты зрения",
                  "Средство для глаз от возрастных изменений",
                  "Купить антиоксиданты для зрения",
                  "Комплекс для защиты роговицы купить",
                ].map((keyword, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-4">
                    {index + 1}. {keyword}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Influencers Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Категории инфлюенсеров для продвижения
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  Здоровье и велнес
                </h3>
                <p className="text-gray-600">
                  Питание, добавки, забота о себе, здоровый образ жизни
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  Лайфстайл
                </h3>
                <p className="text-gray-600">
                  Повседневная жизнь, рутина, уход за собой
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  Технологии и продуктивность
                </h3>
                <p className="text-gray-600">
                  Гаджеты, работа с экранами, офисная жизнь
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  Красота и уход
                </h3>
                <p className="text-gray-600">
                  Внешний вид, здоровье глаз как часть красоты
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  Семья и дети
                </h3>
                <p className="text-gray-600">
                  Здоровье семьи, взрослые 40+, родители
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Критерии выбора инфлюенсеров:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="font-semibold text-gray-900 mr-2">
                    Аудитория:
                  </span>
                  <span className="text-gray-600">
                    25–55 лет, Россия, интерес к здоровью/технологиям
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-gray-900 mr-2">
                    Размер:
                  </span>
                  <span className="text-gray-600">
                    10K–500K подписчиков (микро- и средние)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-gray-900 mr-2">
                    Вовлеченность:
                  </span>
                  <span className="text-gray-600">
                    3–8% (лайки, комментарии)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-gray-900 mr-2">
                    Контент:
                  </span>
                  <span className="text-gray-600">
                    Образовательный, лайфстайл или практичные советы
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-gray-900 mr-2">
                    Опыт:
                  </span>
                  <span className="text-gray-600">
                    Реклама здоровья, красоты или техно-продуктов
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-900 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Готовы улучшить здоровье ваших глаз?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Попробуйте Фокумакс уже сегодня
            </p>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Купить сейчас
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm">
                &copy; 2024 Фокумакс. Все права защищены.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
