import React from "react";
import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";

const ReportsPage = () => {
  const reports = [
    {
      title: "Фокумакс",
      description: "Отчет по продукту для здоровья глаз",
      href: "/FocusMax",
    },
    {
      title: "Гепастронг",
      description: "Отчет по продукту для здоровья печени",
      href: "/HepaStrong",
    },
    {
      title: "Артроверон",
      description: "Отчет по продукту для здоровья суставов",
      href: "/Avtoveron",
    },
    {
      title: "Солемакс",
      description: "Отчет по продукту для здоровья стоп",
      href: "/SoleMax",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Отчеты по продуктам
        </h1>

        <div className="space-y-4">
          {reports.map((report) => (
            <Link
              key={report.href}
              href={report.href}
              className="block bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <FileText className="w-6 h-6 text-gray-400" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      {report.title}
                    </h2>
                    <p className="text-gray-600">{report.description}</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
