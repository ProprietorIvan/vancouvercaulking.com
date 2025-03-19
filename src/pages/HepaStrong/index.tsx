import React from "react";
import Head from "next/head";

export default function HepaStrongAmino() {
  return (
    <>
      <Head>
        <title>Гепастронг Амино - Комплекс для здоровья печени</title>
        <meta
          name="description"
          content="Информация о продукте Гепастронг Амино для здоровья печени"
        />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-green-800 to-green-600">
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              ГЕПАСТРОНГ АМИНО
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Комплексная поддержка и защита печени
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
              продвижения Гепастронг Амино, выбранные по правилу 80/20:
            </p>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                20 ключевых слов для продвижения:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Купить добавку для печени",
                  "Средство для детоксикации печени",
                  "Комплекс для восстановления печени",
                  "Купить аминокислоты для печени",
                  "Средство от повышенных АЛТ и АСТ",
                  "Добавка для защиты печени купить",
                  "Купить холин для печени",
                  "Комплекс для жирового обмена печени",
                  "Средство для регенерации печени",
                  "Витамины для печени от токсинов",
                  "Купить добавку от воспаления печени",
                  "Средство для здоровья печени цена",
                  "Комплекс для очищения печени",
                  "Купить орнитин для детокса",
                  "Добавка для печени при лекарствах",
                  "Средство для снижения аммиака",
                  "Купить комплекс для сосудов печени",
                  "Добавка для печени после 40",
                  "Средство для защиты клеток печени",
                  "Купить гепатопротектор недорого",
                ].map((keyword, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-4">
                    {index + 1}. {keyword}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Преимущества Гепастронг Амино
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-bold text-xl text-gray-900 mb-4">
                  Детоксикация и очищение
                </h3>
                <p className="text-gray-600">
                  Помогает печени эффективно выводить токсины и вредные вещества
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-bold text-xl text-gray-900 mb-4">
                  Восстановление и регенерация
                </h3>
                <p className="text-gray-600">
                  Способствует восстановлению клеток печени и нормализации
                  ферментов
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-bold text-xl text-gray-900 mb-4">
                  Защита и профилактика
                </h3>
                <p className="text-gray-600">
                  Создает барьер для защиты клеток печени от повреждений
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
              Гепастронг Амино:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  Здоровье и детокс
                </h3>
                <p className="text-gray-600">
                  БАДы, очищение организма, поддержка печени.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  Питание и ЗОЖ
                </h3>
                <p className="text-gray-600">
                  Правильное питание, здоровье внутренних органов.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  Лайфстайл для взрослых
                </h3>
                <p className="text-gray-600">
                  Забота о себе, контент для аудитории 30–40+ лет.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  Фитнес и восстановление
                </h3>
                <p className="text-gray-600">
                  Спортивное питание, здоровый образ жизни.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  Медицина и профилактика
                </h3>
                <p className="text-gray-600">
                  Здоровье, профилактика заболеваний.
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
                    25–60 лет, Россия, интерес к ЗОЖ/здоровью
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
                    Советы, обзоры БАДов, лайфстайл
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-gray-900 mr-2">
                    Опыт:
                  </span>
                  <span className="text-gray-600">
                    Реклама добавок/здоровья
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Uses Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Когда необходим Гепастронг Амино
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  Для поддержки при нагрузках
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Повышенные физические нагрузки</li>
                  <li>• Несбалансированное питание</li>
                  <li>• Прием лекарств с высокой нагрузкой на печень</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  Для нормализации работы печени
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Повышенные ферменты печени (АЛТ, АСТ)</li>
                  <li>• Нарушения жирового обмена в печени</li>
                  <li>• Восстановление после токсических воздействий</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-green-800 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Защитите здоровье вашей печени
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Попробуйте Гепастронг Амино уже сегодня
            </p>
            <button className="bg-white text-green-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Купить сейчас
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm">
                © 2025 Гепастронг Амино. Все права защищены.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
