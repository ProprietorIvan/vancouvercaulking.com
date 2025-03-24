import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import {
  ShoppingCart,
  Plus,
  MapPin,
  Search,
  Star,
  Eye,
  Shield,
  Clock,
  Activity,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

// Import logos directly
import wildberriesLogo from "../../../../public/logos/wildberries.png";
import ozonLogo from "../../../../public/logos/ozon.png";
import yandexLogo from "../../../../public/logos/yandex.png";
import asnaLogo from "../../../../public/logos/asna.png";

// Create fallback images for ingredients (base64 placeholders)
const luteinPlaceholder =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI0MCIgY3k9IjQwIiByPSI0MCIgZmlsbD0iI2UzZjJmZCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjE2IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZmlsbD0iIzJiOGJmZiI+0JvRjtGC0LXQuNC9PC90ZXh0Pjwvc3ZnPg==";
const zeaxanthinPlaceholder =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI0MCIgY3k9IjQwIiByPSI0MCIgZmlsbD0iI2ZlZjNjNyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEzIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZmlsbD0iI2Y1OTkwMCI+0JfQtdCw0LrRgdCw0L3RgtC40L08L3RleHQ+PC9zdmc+";
const taurinePlaceholder =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI0MCIgY3k9IjQwIiByPSI0MCIgZmlsbD0iI2UzZjJmZCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjE2IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZmlsbD0iIzJiOGJmZiI+0KLQsNGD0YDQuNC9PC90ZXh0Pjwvc3ZnPg==";
const vitaminAPlaceholder =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI0MCIgY3k9IjQwIiByPSI0MCIgZmlsbD0iI2ZmZjVlMiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjE2IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZmlsbD0iI2Y1OTUwMCI+0JIg0JA8L3RleHQ+PC9zdmc+";
const vitaminsECPlaceholder =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI0MCIgY3k9IjQwIiByPSI0MCIgZmlsbD0iI2YwZjlmMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjE2IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZmlsbD0iIzIyYzU1ZSI+RStDPC90ZXh0Pjwvc3ZnPg==";

// Define types for our data
type Pharmacy = {
  id: string;
  name: string;
  address: string;
  distance: string;
  inStock: boolean;
  location: {
    lat: number;
    lng: number;
  };
};

type Marketplace = {
  name: string;
  logo: StaticImageData;
  price: string;
  url: string;
};

type Benefit = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type Review = {
  name: string;
  age: number;
  text: string;
  rating: number;
};

// Map related types
type Libraries = ("places" | "drawing" | "geometry" | "visualization")[];
const libraries: Libraries = ["places", "geometry"];

// Map styles
const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const defaultCenter = {
  lat: 55.755826,
  lng: 37.6173,
};

const mapOptions = {
  disableDefaultUI: true,
  zoomControl: true,
};

const FocumaxLandingPage = () => {
  // Cart state
  const [cartItems, setCartItems] = useState(0);
  const [showCartNotification, setShowCartNotification] = useState(false);
  // Add quantity state for each marketplace
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({
    Wildberries: 1,
    Ozon: 1,
    "Яндекс Маркет": 1,
    АСНА: 1,
  });

  // Pharmacy finder state
  const [address, setAddress] = useState("");
  const [showPharmacyFinder, setShowPharmacyFinder] = useState(false);
  const [pharmacies, setPharmacies] = useState<Pharmacy[]>([]);
  const [selectedPharmacy, setSelectedPharmacy] = useState<Pharmacy | null>(
    null
  );
  const [currentLocation, setCurrentLocation] = useState(defaultCenter);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);

  // Map container refs
  const mapContainer = useRef<HTMLDivElement>(null);

  // Simple vanilla JS Google Maps implementation
  useEffect(() => {
    // Skip if map is already loaded
    if (window.google?.maps) {
      setMapLoaded(true);
      return;
    }

    // Create and load the script directly
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA3x0Q_p9ikD2EM3FrVj9Kb0TNH4M8NDGo&libraries=places,geometry`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      console.log("Google Maps script loaded successfully");
      setMapLoaded(true);
    };

    script.onerror = () => {
      console.error("Failed to load Google Maps script");
      setMapError(true);
    };

    document.head.appendChild(script);

    return () => {
      // Clean up the script when component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  // Initialize map once script is loaded
  useEffect(() => {
    if (!mapLoaded || !mapContainer.current) return;

    try {
      // Clear the container first
      mapContainer.current.innerHTML = "";

      // Initialize the map
      const map = new window.google.maps.Map(mapContainer.current, {
        center: currentLocation,
        zoom: 13,
        mapTypeControl: false,
        streetViewControl: false,
        zoomControl: true,
        fullscreenControl: true,
      });

      // Add user location marker
      new window.google.maps.Marker({
        position: currentLocation,
        map,
        icon: {
          url: "https://maps.googleapis.com/maps/api/icon?name=blue-dot",
        },
      });

      // Initialize service for searching
      const placesService = new window.google.maps.places.PlacesService(map);

      // Store map in window for debugging
      window.pharmacyMap = map;
      window.placesService = placesService;

      // If we have pharmacies, display them
      if (pharmacies.length > 0) {
        pharmacies.forEach((pharmacy) => {
          const marker = new window.google.maps.Marker({
            position: pharmacy.location,
            map,
            icon: {
              url: pharmacy.inStock
                ? "https://maps.googleapis.com/maps/api/icon?name=green-dot"
                : "https://maps.googleapis.com/maps/api/icon?name=red-dot",
            },
          });

          marker.addListener("click", () => {
            setSelectedPharmacy(pharmacy);

            const infoWindow = new window.google.maps.InfoWindow({
              content: `
                <div style="padding: 10px;">
                  <h4 style="font-weight: bold; margin: 0 0 5px 0;">${
                    pharmacy.name
                  }</h4>
                  <p style="font-size: 14px; margin: 0 0 5px 0;">${
                    pharmacy.address
                  }</p>
                  <p style="font-size: 14px; margin: 0;">
                    ${
                      pharmacy.inStock
                        ? '<span style="color: green;">В наличии</span>'
                        : '<span style="color: red;">Нет в наличии</span>'
                    }
                  </p>
                </div>
              `,
            });

            infoWindow.open(map, marker);
          });
        });
      }
    } catch (error) {
      console.error("Error initializing map:", error);
      setMapError(true);
    }
  }, [mapLoaded, currentLocation, pharmacies]);

  // Function to search for pharmacies
  const handlePharmacySearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!mapLoaded || !address) return;

    try {
      // Use geocoder to convert address to coordinates
      const geocoder = new window.google.maps.Geocoder();

      geocoder.geocode({ address }, (results, status) => {
        if (
          status === window.google.maps.GeocoderStatus.OK &&
          results &&
          results[0]
        ) {
          const location = {
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng(),
          };

          setCurrentLocation(location);

          // Get the map instance from window
          const map = window.pharmacyMap;
          if (map) {
            map.setCenter(location);
          }

          // Search for nearby pharmacies
          const placesService = window.placesService;
          if (placesService) {
            placesService.nearbySearch(
              {
                location,
                radius: 3000, // 3km radius
                type: "pharmacy",
              },
              (results, status) => {
                if (
                  status === window.google.maps.places.PlacesServiceStatus.OK &&
                  results
                ) {
                  // Transform results to our pharmacy type
                  const pharmaciesFound: Pharmacy[] = results.map(
                    (place, index) => ({
                      id: place.place_id || `pharmacy-${index}`,
                      name: place.name || "Аптека",
                      address: place.vicinity || "Адрес не указан",
                      distance: "",
                      inStock: Math.random() > 0.3, // Random availability
                      location: {
                        lat: place.geometry?.location?.lat() || 0,
                        lng: place.geometry?.location?.lng() || 0,
                      },
                    })
                  );

                  // Calculate distances
                  pharmaciesFound.forEach((pharmacy) => {
                    if (window.google.maps.geometry) {
                      const distance =
                        window.google.maps.geometry.spherical.computeDistanceBetween(
                          new window.google.maps.LatLng(
                            location.lat,
                            location.lng
                          ),
                          new window.google.maps.LatLng(
                            pharmacy.location.lat,
                            pharmacy.location.lng
                          )
                        );

                      pharmacy.distance = `${(distance / 1000).toFixed(1)} км`;
                    }
                  });

                  setPharmacies(pharmaciesFound);
                }
              }
            );
          }
        } else {
          console.error("Geocoding failed:", status);
          alert(
            "Не удалось найти указанный адрес. Пожалуйста, уточните запрос."
          );
        }
      });
    } catch (error) {
      console.error("Error searching for pharmacies:", error);
      alert(
        "Произошла ошибка при поиске аптек. Пожалуйста, попробуйте еще раз."
      );
    }
  };

  // Update logo paths in the marketplaces array
  const marketplaces: Marketplace[] = [
    {
      name: "Wildberries",
      logo: wildberriesLogo,
      price: "849 ₽",
      url: "https://www.wildberries.ru/catalog/12638811/detail.aspx",
    },
    {
      name: "Ozon",
      logo: ozonLogo,
      price: "899 ₽",
      url: "https://www.ozon.ru/product/kompleks-vitaminov-dlya-glaz-dlya-uluchsheniya-zreniya-kapsuly-30-sht-fokumaks-apteka-asna-175230148/",
    },
    {
      name: "Яндекс Маркет",
      logo: yandexLogo,
      price: "869 ₽",
      url: "https://market.yandex.ru/product--focumax-kaps/664095077?sku=101306146789&uniqueId=864254&do-waremd5=PLdpUS0HX1T-J2lzVoCt1A",
    },
    {
      name: "АСНА",
      logo: asnaLogo,
      price: "829 ₽",
      url: "https://www.asna.ru/cards/fokumaks_kaps_n30_solefarm_ltd.html",
    },
  ];

  // Example benefits data
  const benefits: Benefit[] = [
    {
      icon: <Eye className="w-8 h-8 text-blue-600" />,
      title: "Защищает сетчатку",
      description: "От вредного синего излучения экранов",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Снижает усталость",
      description: "Облегчает симптомы компьютерного зрительного синдрома",
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Быстрый эффект",
      description: "Улучшение уже через 2 недели регулярного применения",
    },
    {
      icon: <Activity className="w-8 h-8 text-blue-600" />,
      title: "Клинически доказано",
      description: "Эффективность подтверждена исследованиями",
    },
  ];

  // Sample reviews
  const reviews: Review[] = [
    {
      name: "Светлана К.",
      age: 38,
      text: "Работаю бухгалтером, за компьютером с утра до вечера. Через месяц приема Фокумакса глаза стали гораздо меньше уставать, прошла сухость и раздражение.",
      rating: 5,
    },
    {
      name: "Михаил Д.",
      age: 45,
      text: "Начал замечать, что к вечеру зрение становится хуже. По совету окулиста попробовал Фокумакс. Уже через 2 недели стало значительно легче, могу дольше работать без дискомфорта.",
      rating: 5,
    },
    {
      name: "Анна В.",
      age: 32,
      text: "Отличный комплекс! Использую вторую упаковку, заметно снизилась усталость глаз и дискомфорт при ношении контактных линз. Буду продолжать курс.",
      rating: 4,
    },
  ];

  // Button state management for individual products
  const [buttonStates, setButtonStates] = useState<{ [key: string]: boolean }>(
    {}
  );

  // Handle add indicator and increment quantity
  const handleAddClick = (marketId: string) => {
    // Increment quantity
    setQuantities({
      ...quantities,
      [marketId]: (quantities[marketId] || 1) + 1,
    });

    // Show indicator
    setButtonStates({ ...buttonStates, [marketId]: true });
    // Auto-reset after 2 seconds
    setTimeout(() => {
      setButtonStates({ ...buttonStates, [marketId]: false });
    }, 2000);
  };

  // Handle decrement quantity
  const handleDecreaseClick = (marketId: string) => {
    if (quantities[marketId] > 1) {
      setQuantities({
        ...quantities,
        [marketId]: quantities[marketId] - 1,
      });
    }
  };

  // Handle direct quantity input
  const handleQuantityChange = (marketId: string, value: string) => {
    const numValue = parseInt(value, 10);
    if (!isNaN(numValue) && numValue > 0) {
      setQuantities({
        ...quantities,
        [marketId]: numValue,
      });
    }
  };

  return (
    <>
      <Head>
        <title>
          Купить витамины для зрения Фокумакс в Москве | Защита глаз от синего
          света
        </title>
        <meta
          name="description"
          content="Купить витамины для зрения Фокумакс в Москве с доставкой. Эффективная защита глаз при работе за компьютером. Снижает усталость и сухость глаз."
        />
        <meta
          name="keywords"
          content="купить витамины для зрения москва, Фокумакс, защита глаз, синий свет, усталость глаз, витамины для глаз купить, капсулы для зрения"
        />
        <link rel="canonical" href="https://домен.ru/FocusMax/landingpage" />
        {/* Open Graph tags for social sharing */}
        <meta
          property="og:title"
          content="Купить витамины для зрения Фокумакс в Москве"
        />
        <meta
          property="og:description"
          content="Эффективная защита глаз при работе за компьютером. Улучшает зрение, снижает усталость."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://домен.ru/FocusMax/landingpage"
        />
        <meta
          property="og:image"
          content="https://домен.ru/focumax-image.jpg"
        />
      </Head>

      {/* Navigation with cart */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-blue-600 text-2xl font-bold flex items-center">
              <span className="mr-1">•••</span>
              <span>ФОКУМАКС</span>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => setShowPharmacyFinder(!showPharmacyFinder)}
              className="flex items-center text-gray-700 hover:text-blue-600"
            >
              <MapPin className="w-5 h-5 mr-2" />
              <span>Найти Аптеку</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  ФОКУМАКС — <span className="text-blue-600">революция</span> в
                  защите зрения
                </h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  <strong>30 дней приема = до 92% меньше усталости глаз</strong>{" "}
                  при работе за компьютером. Научно доказанная формула с
                  лютеином и зеаксантином.
                </p>
                <div className="flex items-center mb-8">
                  <div className="flex mr-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <div className="text-gray-600 font-medium">
                    4.8 из 5 • 2500+ отзывов
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setShowPharmacyFinder(!showPharmacyFinder)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors flex items-center justify-center"
                  >
                    <MapPin className="w-5 h-5 mr-2" />
                    Найти в аптеках
                  </button>
                  <a
                    href="#buy"
                    className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 px-8 py-3 rounded-full font-medium transition-colors flex items-center justify-center"
                  >
                    Купить онлайн
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <div className="relative h-[400px] w-full">
                  <Image
                    src="/logos/hero.avif"
                    alt="Фокумакс - витамины для зрения"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problems & Solutions Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Спасите свои глаза от{" "}
              <span className="text-blue-600">цифровой усталости</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-red-600">
                  Проблема современного человека:
                </h3>
                <ul className="space-y-4">
                  {[
                    "Усталость и сухость глаз уже через 2 часа работы за компьютером",
                    "Размытое зрение к концу рабочего дня",
                    "Головные боли из-за напряжения глаз",
                    "Синий свет экранов, разрушающий сетчатку",
                    "Риск возрастных заболеваний глаз растет на 42% при ежедневной работе за компьютером",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-1">
                        <span className="text-red-600 font-bold">✕</span>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-green-600">
                  Решение: ФОКУМАКС
                </h3>
                <ul className="space-y-4">
                  {[
                    "Защищает сетчатку от вредного синего света экранов",
                    "Снижает усталость и сухость глаз на 92%*",
                    "Поддерживает остроту зрения даже при интенсивной нагрузке",
                    "Содержит клинически проверенную дозировку лютеина и зеаксантина",
                    "Замедляет возрастные изменения зрения и защищает от дегенерации сетчатки",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                        <span className="text-green-600 font-bold">✓</span>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-500 mt-4">
                  * По результатам клинических исследований при приеме в течение
                  30 дней
                </p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
                4 главных преимущества ФОКУМАКС
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm"
                  >
                    <div className="mb-4">{benefit.icon}</div>
                    <h4 className="text-xl font-semibold mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ingredients Section */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-center">
              РЕВОЛЮЦИОННАЯ ФОРМУЛА{" "}
              <span className="text-blue-600">ДЛЯ СУПЕР-ЗРЕНИЯ</span>
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Разработанная офтальмологами композиция активных компонентов
              обеспечивает комплексную защиту и поддержку зрительной функции в
              цифровую эпоху
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-28 h-28 relative mb-5 overflow-hidden rounded-full bg-blue-50 flex items-center justify-center">
                    <Image
                      src="/logos/Лютеин.jpg"
                      alt="Лютеин"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-600 text-center">
                    Лютеин 10 мг
                  </h3>
                </div>
                <p className="text-gray-800 leading-relaxed">
                  <strong className="text-gray-900 uppercase tracking-wide text-sm">
                    ПРОТЕКТОР МАКУЛЯРНОЙ ОБЛАСТИ
                  </strong>
                  <br />
                  Ваши глаза ежедневно подвергаются воздействию
                  высокоэнергетического синего света. Лютеин избирательно
                  концентрируется в макулярной зоне сетчатки, где формирует
                  мощный светофильтр, блокирующий высокоэнергетическое излучение
                  и нейтрализующий свободные радикалы. В ФОКУМАКСЕ используется
                  лютеин фармацевтического качества с доказанной
                  биодоступностью.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-28 h-28 relative mb-5 overflow-hidden rounded-full bg-orange-50 flex items-center justify-center">
                    <Image
                      src="/logos/Зеаксантин.jpg"
                      alt="Зеаксантин"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-orange-600 text-center">
                    Зеаксантин 2 мг
                  </h3>
                </div>
                <p className="text-gray-800 leading-relaxed">
                  <strong className="text-gray-900 uppercase tracking-wide text-sm">
                    СЕЛЕКТИВНЫЙ АНТИОКСИДАНТ
                  </strong>
                  <br />
                  Высокоэффективный каротиноид, который избирательно
                  накапливается в центре жёлтого пятна сетчатки. Блокирует
                  окислительный стресс и защищает фоторецепторы от дегенерации.
                  Клинические исследования подтверждают, что регулярный приём
                  зеаксантина значительно снижает риск возрастной макулярной
                  дегенерации и когнитивных нарушений.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-28 h-28 relative mb-5 overflow-hidden rounded-full bg-blue-50 flex items-center justify-center">
                    <Image
                      src="/logos/Таурин.jpg"
                      alt="Таурин"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-600 text-center">
                    Таурин
                  </h3>
                </div>
                <p className="text-gray-800 leading-relaxed">
                  <strong className="text-gray-900 uppercase tracking-wide text-sm">
                    НЕЙРОМЕТАБОЛИЧЕСКИЙ МОДУЛЯТОР
                  </strong>
                  <br />
                  Таурин активизирует метаболические процессы в сетчатке,
                  стимулирует регенерацию фоторецепторов и защищает нейроны от
                  эксайтотоксичности. Доказано, что регулярный приём таурина
                  обеспечивает интенсификацию внутриклеточного энергообмена,
                  повышает остроту зрения и значительно улучшает сумеречное
                  зрение.
                </p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-28 h-28 relative mb-5 overflow-hidden rounded-full bg-amber-50 flex items-center justify-center">
                    <Image
                      src="/logos/Витамин A.jpg"
                      alt="Витамин А"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-amber-600 text-center">
                    Витамин А (ретинол)
                  </h3>
                </div>
                <p className="text-gray-800 leading-relaxed">
                  <strong className="text-gray-900 uppercase tracking-wide text-sm">
                    КЛЮЧЕВОЙ ЭЛЕМЕНТ ФОТОРЕЦЕПЦИИ
                  </strong>
                  <br />
                  Витамин А является незаменимым компонентом в биохимическом
                  цикле зрительного восприятия. Он обеспечивает синтез родопсина
                  — светочувствительного белка, ответственного за трансдукцию
                  световых сигналов. При дефиците витамина А наблюдается
                  прогрессирующее снижение сумеречного зрения (гемералопия).
                  ФОКУМАКС содержит оптимальную терапевтическую дозу ретинола в
                  его наиболее биодоступной форме.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-28 h-28 relative mb-5 overflow-hidden rounded-full bg-green-50 flex items-center justify-center">
                    <Image
                      src="/logos/Витамины E, C.jpg"
                      alt="Витамины E и C"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-green-600 text-center">
                    Витамины Е и С
                  </h3>
                </div>
                <p className="text-gray-800 leading-relaxed">
                  <strong className="text-gray-900 uppercase tracking-wide text-sm">
                    СИНЕРГЕТИЧЕСКАЯ АНТИОКСИДАНТНАЯ СИСТЕМА
                  </strong>
                  <br />
                  Этот тщательно сбалансированный комплекс антиоксидантов
                  демонстрирует выраженный потенцирующий эффект, многократно
                  усиливая защитное действие каждого компонента. Токоферол
                  (витамин Е) прерывает цепные окислительные реакции в клеточных
                  мембранах, в то время как аскорбиновая кислота (витамин С)
                  обеспечивает восстановление окисленной формы витамина Е,
                  формируя непреодолимый барьер против свободнорадикального
                  окисления.
                </p>
              </div>
            </div>

            <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 p-10 rounded-2xl shadow-xl">
              <h3 className="text-3xl font-bold mb-8 text-center text-white">
                МИЛЛИОНЫ ЛЮДЕЙ СТРАДАЮТ ОТ ДЕГЕНЕРАТИВНЫХ ИЗМЕНЕНИЙ ЗРИТЕЛЬНОЙ
                ФУНКЦИИ
              </h3>

              <div className="mb-10">
                <div className="bg-white bg-opacity-5 backdrop-blur-sm p-8 rounded-xl shadow-md mb-8 border border-gray-700">
                  <h4 className="text-xl font-bold mb-6 text-blue-300 tracking-wide">
                    Статистические данные свидетельствуют:
                  </h4>
                  <ul className="space-y-5">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center mr-4 mt-1">
                        <span className="text-blue-300 font-bold">!</span>
                      </div>
                      <p className="text-gray-200 leading-relaxed">
                        <strong className="text-white">
                          87% взрослого населения
                        </strong>{" "}
                        испытывают хроническую визуальную усталость и астенопию
                        вследствие продолжительного взаимодействия с цифровыми
                        устройствами, генерирующими высокоэнергетическое
                        излучение
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center mr-4 mt-1">
                        <span className="text-blue-300 font-bold">!</span>
                      </div>
                      <p className="text-gray-200 leading-relaxed">
                        <strong className="text-white">
                          У лиц старше 40 лет
                        </strong>{" "}
                        наблюдается прогрессирующее снижение аккомодационной
                        способности хрусталика и возрастное ухудшение остроты
                        зрения в 48% случаев
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center mr-4 mt-1">
                        <span className="text-blue-300 font-bold">!</span>
                      </div>
                      <p className="text-gray-200 leading-relaxed">
                        <strong className="text-white">
                          Каждый третий пациент
                        </strong>{" "}
                        демонстрирует клинические признаки синдрома сухого глаза
                        и явления интолерантности к контактной коррекции зрения
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center mr-4 mt-1">
                        <span className="text-blue-300 font-bold">!</span>
                      </div>
                      <p className="text-gray-200 leading-relaxed">
                        <strong className="text-white">
                          Более 25% популяции
                        </strong>{" "}
                        имеют предрасположенность к возрастной макулярной
                        дегенерации — ведущей причине необратимой потери зрения
                        во второй половине жизни
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 p-8 rounded-xl shadow-lg border border-blue-700">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                    <h4 className="text-2xl font-bold mb-5 text-blue-200">
                      Свыше 70,000 пациентов подтвердили эффективность ФОКУМАКС
                    </h4>
                    <p className="mb-6 text-gray-200 leading-relaxed">
                      Разработанная офтальмологами инновационная формула
                      обеспечивает комплексную профилактику нарушений зрительной
                      функции и способствует улучшению качественных показателей
                      зрения. Согласно результатам клинического мониторинга,
                      применение препарата приводит к статистически значимому
                      снижению субъективных симптомов астенопии и повышению
                      остроты зрения.
                    </p>
                    <div className="flex items-center mb-5">
                      <div className="text-yellow-300 font-bold text-2xl mr-3">
                        97%
                      </div>
                      <p className="text-gray-200">
                        пациентов рекомендуют ФОКУМАКС членам семьи и коллегам
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="text-yellow-300 font-bold text-2xl mr-3">
                        14 дней
                      </div>
                      <p className="text-gray-200">
                        регулярного применения демонстрируют достоверное
                        улучшение функциональных показателей
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/3">
                    <a
                      href="#buy"
                      className="block bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-center py-5 px-8 rounded-xl font-bold text-lg transition-all duration-300 w-full shadow-lg transform hover:translate-y-[-2px]"
                    >
                      Приобрести инновационный комплекс
                    </a>
                    <p className="text-center text-sm mt-4 text-blue-200">
                      Инвестиция в здоровье глаз — всего от 27₽ в день
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-2 text-center">
              Отзывы покупателей
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Более 2500 положительных отзывов
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{review.name}</h4>
                      <p className="text-sm text-gray-500">{review.age} лет</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Buy Section */}
        <section
          id="buy"
          className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50"
        >
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-2 text-center">
              Купить ФОКУМАКС
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Выберите удобный способ покупки
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketplaces.map((market, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="h-16 mb-4 flex items-center justify-center">
                    <div className="relative h-12 w-full">
                      <Image
                        src={market.logo}
                        alt={`Логотип ${market.name}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-gray-900">
                      {market.price}
                    </div>
                    <div className="text-sm text-gray-500">30 капсул</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleDecreaseClick(market.name)}
                      className="flex-none w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-l-lg flex items-center justify-center"
                      aria-label="Уменьшить количество"
                    >
                      <span className="text-xl font-bold">-</span>
                    </button>

                    <div className="flex-none w-12 h-10 border border-gray-300 rounded-none flex items-center justify-center bg-white">
                      <input
                        type="text"
                        value={quantities[market.name] || 1}
                        onChange={(e) =>
                          handleQuantityChange(market.name, e.target.value)
                        }
                        className="w-full h-full text-center focus:outline-none"
                        aria-label="Количество"
                      />
                    </div>

                    <button
                      onClick={() => handleAddClick(market.name)}
                      className="flex-none w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-r-none flex items-center justify-center relative"
                      aria-label="Увеличить количество"
                    >
                      <Plus className="w-5 h-5" />
                      {buttonStates[market.name] && (
                        <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                          +1
                        </span>
                      )}
                    </button>

                    <a
                      href={market.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-grow bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg text-center"
                    >
                      Купить
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pharmacy Finder Section - Always visible */}
        <section className="py-16 bg-white" id="find-pharmacy">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Найти ФОКУМАКС в ближайшей аптеке
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Введите свой адрес, чтобы найти ближайшие аптеки с Фокумакс
            </p>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <form onSubmit={handlePharmacySearch} className="mb-6">
                <div className="flex max-w-xl mx-auto">
                  <input
                    type="text"
                    placeholder="Введите адрес или район"
                    className="flex-grow border border-gray-300 rounded-l-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-r-lg font-medium"
                  >
                    <Search className="w-5 h-5 inline-block mr-2" />
                    Найти
                  </button>
                </div>
              </form>

              {/* The map container */}
              <div
                ref={mapContainer}
                id="pharmacy-map"
                className="h-[500px] w-full rounded-lg overflow-hidden shadow-md mb-6"
              >
                {!mapLoaded && !mapError && (
                  <div className="h-full w-full flex items-center justify-center bg-gray-100">
                    <div className="text-gray-600">Загрузка карты...</div>
                  </div>
                )}

                {mapError && (
                  <div className="h-full w-full flex flex-col items-center justify-center bg-gray-100 p-4">
                    <div className="text-red-600 mb-2 font-bold">
                      Ошибка загрузки карты
                    </div>
                    <div className="text-gray-600 text-center">
                      Пожалуйста, проверьте подключение к интернету или
                      попробуйте позже.
                    </div>
                  </div>
                )}
              </div>

              {/* Pharmacy list */}
              {pharmacies.length > 0 && (
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900 text-lg mb-4">
                    Найдено аптек: {pharmacies.length}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {pharmacies.map((pharmacy) => (
                      <div
                        key={pharmacy.id}
                        className={`border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition ${
                          selectedPharmacy?.id === pharmacy.id
                            ? "bg-blue-50 border-blue-300"
                            : ""
                        }`}
                        onClick={() => {
                          setSelectedPharmacy(pharmacy);

                          if (window.pharmacyMap) {
                            window.pharmacyMap.setCenter(pharmacy.location);
                            window.pharmacyMap.setZoom(15);
                          }
                        }}
                      >
                        <div className="flex justify-between">
                          <h5 className="font-semibold">{pharmacy.name}</h5>
                          <span className="text-sm text-gray-500">
                            {pharmacy.distance}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-2">{pharmacy.address}</p>
                        <div className="flex items-center">
                          <div
                            className={`w-3 h-3 rounded-full mr-2 ${
                              pharmacy.inStock ? "bg-green-500" : "bg-red-500"
                            }`}
                          ></div>
                          <span
                            className={
                              pharmacy.inStock
                                ? "text-green-600"
                                : "text-red-600"
                            }
                          >
                            {pharmacy.inStock ? "В наличии" : "Нет в наличии"}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Pharmacy Modal - minimal version with direct DOM access */}
        {showPharmacyFinder && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Найти Аптеку</h3>
                <button
                  onClick={() => setShowPharmacyFinder(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handlePharmacySearch} className="mb-6">
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Введите адрес или район"
                    className="flex-grow border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                </div>
              </form>

              {/* The modal map container */}
              <div
                id="modal-pharmacy-map"
                className="h-[300px] w-full rounded-lg overflow-hidden shadow-md mb-6"
                style={{ background: "#f0f0f0" }}
              >
                {!mapLoaded && !mapError && (
                  <div className="h-full w-full flex items-center justify-center">
                    <div className="text-gray-600">Загрузка карты...</div>
                  </div>
                )}

                {mapError && (
                  <div className="h-full w-full flex flex-col items-center justify-center p-4">
                    <div className="text-red-600 mb-2 font-bold">
                      Ошибка загрузки карты
                    </div>
                    <div className="text-gray-600 text-center">
                      Пожалуйста, проверьте подключение к интернету или
                      попробуйте позже.
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Pharmacy list */}
              {pharmacies.length > 0 && (
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Найдено аптек: {pharmacies.length}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pharmacies.map((pharmacy) => (
                      <div
                        key={pharmacy.id}
                        className={`border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition ${
                          selectedPharmacy?.id === pharmacy.id
                            ? "bg-blue-50 border-blue-300"
                            : ""
                        }`}
                        onClick={() => {
                          setSelectedPharmacy(pharmacy);

                          if (window.pharmacyMap) {
                            window.pharmacyMap.setCenter(pharmacy.location);
                            window.pharmacyMap.setZoom(15);
                          }
                        }}
                      >
                        <div className="flex justify-between">
                          <h5 className="font-semibold">{pharmacy.name}</h5>
                          <span className="text-sm text-gray-500">
                            {pharmacy.distance}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-2">{pharmacy.address}</p>
                        <div className="flex items-center">
                          <div
                            className={`w-3 h-3 rounded-full mr-2 ${
                              pharmacy.inStock ? "bg-green-500" : "bg-red-500"
                            }`}
                          ></div>
                          <span
                            className={
                              pharmacy.inStock
                                ? "text-green-600"
                                : "text-red-600"
                            }
                          >
                            {pharmacy.inStock ? "В наличии" : "Нет в наличии"}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <p className="text-sm">
              © 2024 ФОКУМАКС. Все права защищены. БАД. Не является
              лекарственным средством.
            </p>
            <p className="text-sm mt-2">
              Перед применением рекомендуется проконсультироваться со
              специалистом.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

// Declare the window interface to avoid TypeScript errors
declare global {
  interface Window {
    google: any;
    pharmacyMap: any;
    placesService: any;
  }
}

export default FocumaxLandingPage;
