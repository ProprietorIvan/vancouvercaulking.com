import React from "react";
import Head from "next/head";

export default function SolemaxNeuro() {
  return (
    <>
      <Head>
        <title>Солемакс Нейро - Комплекс для когнитивного здоровья</title>
        <meta
          name="description"
          content="Информация о продукте Солемакс Нейро для когнитивного здоровья"
        />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-purple-900 to-indigo-800">
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              СОЛЕМАКС НЕЙРО
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Инновационный комплекс для когнитивного здоровья
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
              Подобраны небрендовые ключевые слова с высоким покупательским
              намерением, ориентированные на правило 80/20 (максимальная выгода
              при минимальных усилиях). Эти слова связаны с когнитивным
              здоровьем, проблемами памяти, внимания и стресса.
            </p>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                20 ключевых слов для продвижения:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Купить добавку для памяти",
                  "Средство для улучшения внимания",
                  "Комплекс для мозга и концентрации",
                  "Купить витамины для умственной активности",
                  "Средство от стресса и усталости",
                  "Добавка для мозга 40+ купить",
                  "Купить комплекс для ясности ума",
                  "Средство для памяти и мышления",
                  "Витамины для мозга от переутомления",
                  "Купить добавку для кровообращения мозга",
                  "Средство от забывчивости купить",
                  "Комплекс для когнитивных функций",
                  "Купить магний для мозга",
                  "Добавка для улучшения настроения",
                  "Средство для защиты нейронов",
                  "Купить комплекс от умственной усталости",
                  "Витамины для концентрации и энергии",
                  "Средство для памяти пожилым",
                  "Купить добавку для работы мозга",
                  "Комплекс для снижения стресса",
                ].map((keyword, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-4">
                    {index + 1}. {keyword}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-purple-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Почему эти слова?
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>
                    Ориентированы на конкретные проблемы (память, стресс,
                    концентрация), которые решает Солемакс Нейро.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>
                    Включают покупательские слова (&ldquo;купить&rdquo;,
                    &ldquo;средство&rdquo;, &ldquo;комплекс&rdquo;), что
                    привлекает готовых к покупке пользователей.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>
                    Охватывают ключевые компоненты (магний, кровообращение) и
                    возрастной сегмент (40+, пожилые).
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Influencers Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Целевая аудитория инфлюенсеров
            </h2>
            <p className="mb-8 text-gray-600 text-center max-w-3xl mx-auto">
              Категории инфлюенсеров и критерии их выбора для продвижения
              Солемакс Нейро на Instagram и YouTube в России:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  Здоровье и питание
                </h3>
                <p className="text-gray-600 mb-3">
                  Темы: добавки, здоровый образ жизни, питание для мозга.
                </p>
                <p className="text-gray-500 text-sm italic">
                  Пример: блогеры о витаминах и БАДах.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  Продуктивность и работа
                </h3>
                <p className="text-gray-600 mb-3">
                  Темы: советы по концентрации, эффективности, борьбе с
                  выгоранием.
                </p>
                <p className="text-gray-500 text-sm italic">
                  Пример: коучи, блогеры о тайм-менеджменте.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  Лайфстайл для взрослых
                </h3>
                <p className="text-gray-600 mb-3">
                  Темы: повседневная жизнь, забота о себе, баланс работы и
                  отдыха.
                </p>
                <p className="text-gray-500 text-sm italic">
                  Пример: блогеры о жизни после 30–40.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  Антиэйдж и долголетие
                </h3>
                <p className="text-gray-600 mb-3">
                  Темы: здоровье в возрасте, сохранение активности мозга.
                </p>
                <p className="text-gray-500 text-sm italic">
                  Пример: блогеры о зрелом возрасте и профилактике.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  Психология и стресс-менеджмент
                </h3>
                <p className="text-gray-600 mb-3">
                  Темы: управление стрессом, улучшение настроения, ментальное
                  здоровье.
                </p>
                <p className="text-gray-500 text-sm italic">
                  Пример: психологи, эксперты по mindfulness.
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
                    25–60 лет, Россия, интерес к здоровью/работе/саморазвитию
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
                    Практичные советы, обзоры продуктов, образовательные посты
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-gray-900 mr-2">
                    Опыт:
                  </span>
                  <span className="text-gray-600">
                    Реклама БАДов, здоровья или лайфстайл-продуктов
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-2xl p-8 mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Почему так?
              </h3>
              <p className="text-gray-600">
                Эти категории и критерии охватывают аудиторию, которая ищет
                решения для памяти, стресса и продуктивности, что идеально
                соответствует Солемакс Нейро. Фокус на микро- и средних
                инфлюенсерах обеспечивает высокую вовлеченность и доверие при
                разумных затратах.
              </p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Преимущества Солемакс Нейро
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-bold text-xl text-gray-900 mb-4">
                  Улучшает память и концентрацию
                </h3>
                <p className="text-gray-600">
                  Повышает когнитивные функции и способность к запоминанию
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-bold text-xl text-gray-900 mb-4">
                  Снижает стресс и усталость
                </h3>
                <p className="text-gray-600">
                  Помогает справиться с умственным переутомлением
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-bold text-xl text-gray-900 mb-4">
                  Поддерживает здоровье мозга
                </h3>
                <p className="text-gray-600">
                  Защищает нейроны и улучшает кровообращение мозга
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-purple-900 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Готовы улучшить работу вашего мозга?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Попробуйте Солемакс Нейро уже сегодня
            </p>
            <button className="bg-white text-purple-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Купить сейчас
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm">
                © 2025 Солемакс Нейро. Все права защищены.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
