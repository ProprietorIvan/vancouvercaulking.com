import React from "react";
import Head from "next/head";

export default function Artroveron() {
  return (
    <>
      <Head>
        <title>Артроверон - Комплекс для здоровья суставов</title>
        <meta
          name="description"
          content="Информация о продукте Артроверон для здоровья суставов"
        />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-900 to-blue-700">
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              АРТРОВЕРОН
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Комплексная забота о здоровье ваших суставов
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* SEO Keywords Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Лучшие ключевые слова для SEO
            </h2>
            <p className="mb-8 text-gray-600 text-center max-w-3xl mx-auto">
              Небрендовые ключевые слова с высоким покупательским намерением для
              продвижения Артроверон, сфокусированные на здоровье суставов,
              остеоартрите и восстановлении:
            </p>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                20 ключевых слов для продвижения:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Купить добавку для суставов",
                  "Средство от боли в суставах",
                  "Комплекс для восстановления хрящей",
                  "Купить глюкозамин для суставов",
                  "Средство для гибкости суставов",
                  "Добавка при остеоартрите купить",
                  "Купить хондроитин для суставов",
                  "Комплекс для подвижности суставов",
                  "Средство от воспаления суставов",
                  "Витамины для суставов после травм",
                  "Купить омега-3 для суставов",
                  "Средство для здоровья суставов цена",
                  "Комплекс для спортсменов суставы",
                  "Купить гиалуроновую кислоту суставы",
                  "Добавка для укрепления хрящей",
                  "Средство для суставов после 40",
                  "Купить коллаген для суставов",
                  "Комплекс от дегенерации суставов",
                  "Средство для смазки суставов",
                  "Купить хондропротектор недорого",
                ].map((keyword, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-4">
                    {index + 1}. {keyword}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Почему эти слова?
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>
                    Решают ключевые проблемы: боль, воспаление, подвижность,
                    остеоартрит.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>
                    Покупательские фразы (&ldquo;купить&rdquo;,
                    &ldquo;средство&rdquo;) привлекают готовых к действию.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>
                    Учитывают компоненты (глюкозамин, хондроитин, омега-3) и
                    аудиторию (спортсмены, 40+).
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Преимущества Артроверон
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-bold text-xl text-gray-900 mb-4">
                  Снижает боль и воспаление
                </h3>
                <p className="text-gray-600">
                  Помогает уменьшить дискомфорт и воспалительные процессы в
                  суставах
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-bold text-xl text-gray-900 mb-4">
                  Восстанавливает хрящевую ткань
                </h3>
                <p className="text-gray-600">
                  Способствует регенерации хрящей и улучшает смазку суставов
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-bold text-xl text-gray-900 mb-4">
                  Повышает подвижность
                </h3>
                <p className="text-gray-600">
                  Улучшает гибкость суставов и расширяет диапазон движений
                </p>
              </div>
            </div>
          </div>

          {/* Influencers Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Целевая аудитория инфлюенсеров
            </h2>
            <p className="mb-8 text-gray-600 text-center max-w-3xl mx-auto">
              Категории инфлюенсеров и критерии их выбора для продвижения
              Артроверон:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  Здоровье суставов и костей
                </h3>
                <p className="text-gray-600 mb-3">
                  Темы: БАДы, восстановление суставов.
                </p>
                <p className="text-gray-500 text-sm italic">
                  Пример: блогеры о здоровье опорно-двигательной системы.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  Фитнес и спорт
                </h3>
                <p className="text-gray-600 mb-3">
                  Темы: тренировки, восстановление после нагрузок.
                </p>
                <p className="text-gray-500 text-sm italic">
                  Пример: тренеры, спортивные блогеры.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  Лайфстайл для зрелых
                </h3>
                <p className="text-gray-600 mb-3">
                  Темы: здоровье после 40, активная жизнь.
                </p>
                <p className="text-gray-500 text-sm italic">
                  Пример: блогеры о зрелом возрасте.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  Питание и ЗОЖ
                </h3>
                <p className="text-gray-600 mb-3">
                  Темы: добавки, питание для суставов.
                </p>
                <p className="text-gray-500 text-sm italic">
                  Пример: нутрициологи, ЗОЖ-блогеры.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  Реабилитация и травмы
                </h3>
                <p className="text-gray-600 mb-3">
                  Темы: восстановление после травм, профилактика.
                </p>
                <p className="text-gray-500 text-sm italic">
                  Пример: физиотерапевты, эксперты по травмам.
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
                    30–65 лет, Россия, интерес к ЗОЖ/спорту/здоровью
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-gray-900 mr-2">
                    Размер:
                  </span>
                  <span className="text-gray-600">
                    10K–500K подписчиков (микро- и средние инфлюенсеры)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-gray-900 mr-2">
                    Вовлеченность:
                  </span>
                  <span className="text-gray-600">
                    3–8% (активные лайки, комментарии)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-gray-900 mr-2">
                    Контент:
                  </span>
                  <span className="text-gray-600">
                    Советы по здоровью, обзоры БАДов, спорт/лайфстайл
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-gray-900 mr-2">
                    Опыт:
                  </span>
                  <span className="text-gray-600">
                    Реклама добавок, спорта или здоровья
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Target Audience Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Кому подойдет Артроверон
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  Людям с проблемами суставов
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Испытывающим боль и дискомфорт в суставах</li>
                  <li>• С диагностированным остеоартритом</li>
                  <li>• С начальными признаками дегенерации хрящей</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  Для профилактики и поддержки
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Спортсменам и людям с физическими нагрузками</li>
                  <li>• Людям старше 40 лет для профилактики</li>
                  <li>• После травм и операций на суставах</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-blue-800 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Верните свободу движения!
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Попробуйте Артроверон уже сегодня
            </p>
            <button className="bg-white text-blue-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Купить сейчас
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm">© 2025 Артроверон. Все права защищены.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
