"use client";

import { formatPrice } from "@/lib/utils";
import { MapPin, Wallet, Calendar, ChevronDown, SlidersHorizontal } from "lucide-react";

const CITIES = [
    "Tüm Şehirler",
    // Popüler şehirler
    "İstanbul", "İzmir", "Ankara", "Bursa",
    // Diğer iller (A-Z)
    "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Aksaray", "Amasya", "Antalya", "Ardahan", "Artvin",
    "Aydın", "Balıkesir", "Bartın", "Batman", "Bayburt", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur",
    "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Düzce", "Edirne", "Elazığ", "Erzincan",
    "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Iğdır", "Isparta",
    "Kahramanmaraş", "Karabük", "Karaman", "Kars", "Kastamonu", "Kayseri", "Kilis", "Kırıkkale", "Kırklareli",
    "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Mardin", "Mersin", "Muğla", "Muş",
    "Nevşehir", "Niğde", "Ordu", "Osmaniye", "Rize", "Sakarya", "Samsun", "Şanlıurfa", "Siirt", "Sinop",
    "Sivas", "Şırnak", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Uşak", "Van", "Yalova", "Yozgat",
    "Zonguldak",
];

const BUDGET_RANGES = [
    { label: "Tümü", value: "all" },
    { label: "0 - 2.500 ₺", value: "0-2500" },
    { label: "2.500 - 5.000 ₺", value: "2500-5000" },
    { label: "5.000 - 10.000 ₺", value: "5000-10000" },
    { label: "10.000 - 20.000 ₺", value: "10000-20000" },
    { label: "+20.000 ₺", value: "20000+" },
];

const DAY_OPTIONS = [
    { label: "Tümü", value: 0 },
    { label: "2 Gün", value: 2 },
    { label: "3 Gün", value: 3 },
    { label: "5 Gün", value: 5 },
    { label: "7 Gün", value: 7 },
    { label: "10 Gün", value: 10 },
    { label: "14 Gün", value: 14 },
];

interface AdvancedFiltersProps {
    city: string;
    onCityChange: (city: string) => void;
    budgetRange: string;
    onBudgetChange: (range: string) => void;
    days: number;
    onDaysChange: (days: number) => void;
    resultCount: number;
}

export default function AdvancedFilters({
    city,
    onCityChange,
    budgetRange,
    onBudgetChange,
    days,
    onDaysChange,
    resultCount,
}: AdvancedFiltersProps) {
    return (
        <div className="w-full max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200/60 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-navy to-navy-light px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-turkuaz/20 flex items-center justify-center">
                            <SlidersHorizontal className="w-5 h-5 text-turkuaz-light" />
                        </div>
                        <div>
                            <h3 className="text-white font-semibold font-montserrat">Bütçeni Söyle, Rotanı Bul</h3>
                            <p className="text-white/40 text-xs">Binlerce site gezmek yerine aradığınız her şey Tatilva'da</p>
                        </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 bg-turkuaz/10 text-turkuaz-light px-3 py-1.5 rounded-full text-sm font-medium">
                        <span className="font-bold">{resultCount}</span> sonuç
                    </div>
                </div>

                {/* Filter Grid */}
                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {/* City Dropdown */}
                        <div>
                            <label className="flex items-center gap-2 text-sm font-medium text-navy mb-2">
                                <MapPin className="w-4 h-4 text-turkuaz" />
                                Şehir Seçin
                            </label>
                            <div className="relative">
                                <select
                                    value={city}
                                    onChange={(e) => onCityChange(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-navy appearance-none cursor-pointer focus:border-turkuaz focus:ring-2 focus:ring-turkuaz/20 outline-none transition-all text-sm font-medium"
                                >
                                    {CITIES.map((c) => (
                                        <option key={c} value={c}>{c}</option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                            </div>
                        </div>

                        {/* Budget Range */}
                        <div>
                            <label className="flex items-center gap-2 text-sm font-medium text-navy mb-2">
                                <Wallet className="w-4 h-4 text-turkuaz" />
                                Bütçe Aralığı
                            </label>
                            <div className="relative">
                                <select
                                    value={budgetRange}
                                    onChange={(e) => onBudgetChange(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-navy appearance-none cursor-pointer focus:border-turkuaz focus:ring-2 focus:ring-turkuaz/20 outline-none transition-all text-sm font-medium"
                                >
                                    {BUDGET_RANGES.map((b) => (
                                        <option key={b.value} value={b.value}>{b.label}</option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                            </div>
                        </div>

                        {/* Day Count */}
                        <div>
                            <label className="flex items-center gap-2 text-sm font-medium text-navy mb-2">
                                <Calendar className="w-4 h-4 text-turkuaz" />
                                Gün Sayısı
                            </label>
                            <div className="relative">
                                <select
                                    value={days}
                                    onChange={(e) => onDaysChange(Number(e.target.value))}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-navy appearance-none cursor-pointer focus:border-turkuaz focus:ring-2 focus:ring-turkuaz/20 outline-none transition-all text-sm font-medium"
                                >
                                    {DAY_OPTIONS.map((d) => (
                                        <option key={d.value} value={d.value}>{d.label}</option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    {/* Quick budget pills */}
                    <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-gray-100">
                        <span className="text-xs text-gray-400 py-1.5">Hızlı Bütçe:</span>
                        {BUDGET_RANGES.filter(b => b.value !== "all").map((b) => (
                            <button
                                key={b.value}
                                onClick={() => onBudgetChange(b.value)}
                                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${budgetRange === b.value
                                    ? "bg-gradient-to-r from-turkuaz to-turkuaz-dark text-white shadow-md"
                                    : "bg-gray-100 text-gray-500 hover:bg-turkuaz/10 hover:text-turkuaz"
                                    }`}
                            >
                                {b.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
