"use client";

import { useState, useMemo } from "react";
import destinations from "@/data/destinations.json";
import { Destination } from "@/types";
import AdvancedFilters from "@/components/shared/AdvancedFilters";
import TravelCard from "@/components/ui/TravelCard";
import PlanningFormDialog from "@/components/shared/PlanningFormDialog";
import CampaignSection from "@/components/shared/CampaignSection";
import CategoryGrid from "@/components/shared/CategoryGrid";
import {
  Sparkles,
  Search,
  ArrowDown,
  Compass,
  Shield,
  Headphones,
  TrendingUp,
  ChevronDown,
  DollarSign,
} from "lucide-react";

export default function HomePage() {
  const [city, setCity] = useState("Tüm Şehirler");
  const [budgetRange, setBudgetRange] = useState("all");
  const [days, setDays] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [showPlanningForm, setShowPlanningForm] = useState(false);

  const typedDestinations: Destination[] = destinations as Destination[];

  // Parse budget range
  const parseBudgetRange = (range: string): [number, number] => {
    if (range === "all") return [0, Infinity];
    if (range === "20000+") return [20000, Infinity];
    const [min, max] = range.split("-").map(Number);
    return [min, max];
  };

  // Filter destinations
  const filteredDestinations = useMemo(() => {
    const [minBudget, maxBudget] = parseBudgetRange(budgetRange);
    return typedDestinations.filter((dest) => {
      const matchesCity = city === "Tüm Şehirler" || dest.city === city;
      const matchesBudget = dest.price >= minBudget && dest.price <= maxBudget;
      const matchesDays = days === 0 || dest.days === days;
      const matchesSearch =
        searchQuery === "" ||
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.city.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCity && matchesBudget && matchesDays && matchesSearch;
    });
  }, [city, budgetRange, days, searchQuery, typedDestinations]);

  // AI Recommendation: best price/performance ratio
  const aiRecommendation = useMemo(() => {
    if (filteredDestinations.length === 0) return null;
    return filteredDestinations.reduce((best, current) => {
      const bestScore = best.rating / (best.price / 1000);
      const currentScore = current.rating / (current.price / 1000);
      return currentScore > bestScore ? current : best;
    });
  }, [filteredDestinations]);

  return (
    <>
      {/* ============ HERO SECTION ============ */}
      <section className="relative hero-gradient min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-turkuaz/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-turkuaz/2 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-turkuaz-light" />
              <span className="text-sm text-white/70 font-medium">
                Yapay Zeka Destekli Tatil Planlama
              </span>
            </div>

            <h1 className="font-montserrat text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4 animate-fade-in-up">
              Bütçeni Söyle,{" "}
              <span className="gradient-text">Rotanı Bul</span>
            </h1>

            <p className="text-xl sm:text-2xl text-white/30 font-montserrat mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              Akıllı Tatil Asistanınız
            </p>

            <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              Binlerce site gezmek yerine aradığınız her şey Tatilva'da. Bütçenizi belirleyin,
              şehir seçin, yapay zeka asistanımız en uygun tatil rotalarını sizin için bulsun.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
              <a
                href="#filters"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-turkuaz to-turkuaz-dark text-white px-8 py-4 rounded-2xl font-semibold text-base hover:shadow-2xl hover:shadow-turkuaz/30 transition-all duration-300 animate-pulse-glow"
              >
                <Compass className="w-5 h-5" />
                Tatilini Planla
              </a>
              <a
                href="/earn"
                className="inline-flex items-center justify-center gap-2 glass text-white px-8 py-4 rounded-2xl font-semibold text-base hover:bg-white/20 transition-all duration-300"
              >
                <DollarSign className="w-5 h-5" />
                Para Kazan
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-16 max-w-md animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white font-montserrat">150+</div>
                <div className="text-xs sm:text-sm text-white/40">Destinasyon</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white font-montserrat">50K+</div>
                <div className="text-xs sm:text-sm text-white/40">Mutlu Tatilci</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white font-montserrat">4.9</div>
                <div className="text-xs sm:text-sm text-white/40">Ortalama Puan</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <ChevronDown className="w-6 h-6 text-white/30" />
        </div>
      </section>

      {/* ============ TRUST BAR ============ */}
      <section className="bg-white border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, text: "Güvenli Ödeme", sub: "256-bit SSL" },
              { icon: Headphones, text: "7/24 Destek", sub: "Canlı yardım hattı" },
              { icon: TrendingUp, text: "En İyi Fiyat", sub: "Fiyat garantisi" },
              { icon: Sparkles, text: "AI Öneri", sub: "Akıllı planlama" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-turkuaz/5 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-turkuaz" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-navy">{item.text}</div>
                  <div className="text-xs text-gray-400">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FILTERS SECTION ============ */}
      <section id="filters" className="py-20 bg-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-turkuaz text-sm font-semibold bg-turkuaz/5 px-4 py-1.5 rounded-full mb-4">
              <Compass className="w-4 h-4" />
              Akıllı Filtreleme
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy font-montserrat mb-4">
              Hayalinizdeki Tatili <span className="gradient-text">Keşfedin</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Şehir, bütçe aralığı ve gün sayısını belirleyin — yapay zeka asistanımız bütçenize en uygun seçenekleri anında filtrelesin.
            </p>
          </div>

          <AdvancedFilters
            city={city}
            onCityChange={setCity}
            budgetRange={budgetRange}
            onBudgetChange={setBudgetRange}
            days={days}
            onDaysChange={setDays}
            resultCount={filteredDestinations.length}
          />

          {/* Search bar */}
          <div className="max-w-xl mx-auto mt-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Destinasyon, şehir veya otel ara..."
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:border-turkuaz focus:ring-2 focus:ring-turkuaz/20 outline-none transition-all text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ AI RECOMMENDATION ============ */}
      {aiRecommendation && (
        <section className="py-12 bg-gradient-to-r from-navy to-navy-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-turkuaz/10 text-turkuaz-light px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                  <Sparkles className="w-4 h-4" />
                  Asistanın Öneriyor
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-montserrat mb-3">
                  {aiRecommendation.name}
                </h3>
                <p className="text-white/50 mb-4 leading-relaxed">
                  {aiRecommendation.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {aiRecommendation.features.slice(0, 4).map((f) => (
                    <span key={f} className="text-xs bg-white/5 text-white/60 border border-white/10 px-3 py-1.5 rounded-full">
                      {f}
                    </span>
                  ))}
                </div>
                <div className="flex items-end gap-3">
                  <span className="text-3xl font-bold gradient-text font-montserrat">
                    {new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY", minimumFractionDigits: 0 }).format(aiRecommendation.price)}
                  </span>
                  <span className="text-white/40 text-sm mb-1">/ kişi başı · {aiRecommendation.days} gün</span>
                </div>
              </div>
              <div className="shrink-0">
                <a
                  href={`/destination/${aiRecommendation.slug}`}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-turkuaz to-turkuaz-dark text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-turkuaz/30 transition-all duration-300"
                >
                  <Sparkles className="w-5 h-5" />
                  Bu Rotayı İncele
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============ DESTINATIONS GRID ============ */}
      <section id="destinations" className="py-20 bg-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy font-montserrat">
                Tatil Rotaları
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                {filteredDestinations.length} seçenek bulundu
              </p>
            </div>
          </div>

          {filteredDestinations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
              {filteredDestinations.map((dest, index) => (
                <TravelCard
                  key={dest.id}
                  destination={dest}
                  isRecommended={aiRecommendation?.id === dest.id}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-turkuaz/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-turkuaz/40" />
              </div>
              <h3 className="text-xl font-bold text-navy font-montserrat mb-3">
                Bu kriterlere uygun bir seçenek bulunamadı
              </h3>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">
                Endişelenmeyin! Filtreleri değiştirin veya uzman ekibimizden özel bir tatil planı isteyin.
              </p>
              <button
                onClick={() => setShowPlanningForm(true)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-turkuaz to-turkuaz-dark text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-turkuaz/30 transition-all duration-300"
              >
                <Sparkles className="w-5 h-5" />
                Özel Plan Talep Et
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ============ CATEGORY GRID ============ */}
      <CategoryGrid />

      {/* ============ CAMPAIGN SECTION ============ */}
      <CampaignSection />

      {/* ============ CTA SECTION ============ */}
      <section className="py-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-64 h-64 bg-turkuaz/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-48 h-48 bg-pink/3 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-montserrat mb-5">
            Hayalinizdeki Tatil <span className="gradient-text">Bir Tık Uzağınızda</span>
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-2xl mx-auto">
            Binlerce site gezmek yerine aradığınız her şey Tatilva'da. AI asistanımız en uygun rotayı sizin için bulsun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#filters"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-turkuaz to-turkuaz-dark text-white px-10 py-4 rounded-2xl font-semibold text-base hover:shadow-2xl hover:shadow-turkuaz/30 transition-all duration-300"
            >
              <Compass className="w-5 h-5" />
              Hemen Başla
            </a>
            <button
              onClick={() => setShowPlanningForm(true)}
              className="inline-flex items-center justify-center gap-2 glass text-white px-10 py-4 rounded-2xl font-semibold text-base hover:bg-white/20 transition-all duration-300"
            >
              Bize Ulaşın
            </button>
          </div>
        </div>
      </section>

      {/* Planning Form Dialog */}
      <PlanningFormDialog
        isOpen={showPlanningForm}
        onClose={() => setShowPlanningForm(false)}
        currentBudget={5000}
      />
    </>
  );
}
