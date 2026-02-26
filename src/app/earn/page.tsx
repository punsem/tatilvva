"use client";

import Link from "next/link";
import {
    DollarSign,
    TrendingUp,
    Users,
    Camera,
    Star,
    Gift,
    ArrowRight,
    Check,
    Crown,
    Zap,
    Share2,
    BarChart3,
    Wallet,
    Shield,
} from "lucide-react";

const EARNING_TIERS = [
    {
        title: "İçerik Üretici",
        subtitle: "Başlangıç Seviyesi",
        icon: Camera,
        color: "turkuaz",
        earnings: "500 - 2.000 ₺ / ay",
        features: [
            "Fotoğraf ve rota paylaşma",
            "Beğeni başına puan kazanma",
            "Topluluk rozeti",
            "Temel analiz paneli",
        ],
        highlighted: false,
    },
    {
        title: "Premium Rota Satıcısı",
        subtitle: "En Popüler",
        icon: Star,
        color: "pink",
        earnings: "2.000 - 10.000 ₺ / ay",
        features: [
            "Detaylı rota rehberleri satma",
            "%95 gelir payı (platform %5)",
            "Öne çıkarılma fırsatı",
            "Gelişmiş analiz paneli",
            "Doğrulanmış gezgin badge'i",
        ],
        highlighted: true,
    },
    {
        title: "Referans Partneri",
        subtitle: "Pasif Gelir",
        icon: Gift,
        color: "gold",
        earnings: "1.000 - 5.000 ₺ / ay",
        features: [
            "Arkadaş davet bonusu (50 ₺)",
            "Referans zinciri geliri",
            "Özel indirim kodları",
            "VIP partner etkinlikleri",
        ],
        highlighted: false,
    },
];

const STEPS = [
    { step: 1, title: "Hesap Oluştur", desc: "Ücretsiz kayıt olun ve profilinizi tamamlayın", icon: Users },
    { step: 2, title: "İçerik Üret", desc: "Tatil fotoğraflarınızı ve rotalarınızı paylaşın", icon: Camera },
    { step: 3, title: "Takipçi Kazanın", desc: "Topluluğu büyütün, etkileşim alın", icon: TrendingUp },
    { step: 4, title: "Para Kazanın", desc: "Rota satışı ve referanslardan gelir elde edin", icon: DollarSign },
];

const STATS = [
    { value: "50K+", label: "Aktif Gezgin", icon: Users },
    { value: "₺2.5M", label: "Toplam Kazanç", icon: Wallet },
    { value: "%95", label: "Gelir Payınız", icon: BarChart3 },
    { value: "7/24", label: "Destek", icon: Shield },
];

export default function EarnPage() {
    return (
        <div className="min-h-screen bg-soft-white">
            {/* Hero */}
            <section className="hero-gradient relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 right-10 w-96 h-96 bg-pink/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-10 left-10 w-72 h-72 bg-turkuaz/5 rounded-full blur-3xl" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-pink/10 text-pink-light px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                            <DollarSign className="w-4 h-4" />
                            Kazan-Kazan Ekosistemi
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-montserrat leading-tight mb-6">
                            Tatil Yaparken{" "}
                            <span className="bg-gradient-to-r from-pink to-pink-light bg-clip-text text-transparent">
                                Para Kazan
                            </span>
                        </h1>
                        <p className="text-lg text-white/50 leading-relaxed mb-8 max-w-2xl">
                            Tatil rotalarınızı paylaşın, içerik üretin ve her satıştan %95 gelir elde edin.
                            Platform sadece %5 komisyon alır. Herkes kazanır!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/auth/register"
                                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink to-pink-dark text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-pink/30 transition-all duration-300"
                            >
                                <Zap className="w-5 h-5" />
                                Hemen Başla
                            </Link>
                            <a
                                href="#how-it-works"
                                className="inline-flex items-center justify-center gap-2 glass text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300"
                            >
                                Nasıl Çalışır?
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="bg-white border-b border-gray-200/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {STATS.map((stat) => (
                            <div key={stat.label} className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-pink/5 flex items-center justify-center">
                                    <stat.icon className="w-6 h-6 text-pink" />
                                </div>
                                <div>
                                    <div className="text-xl font-bold text-navy font-montserrat">{stat.value}</div>
                                    <div className="text-xs text-gray-400">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="py-20 bg-soft-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl sm:text-4xl font-bold text-navy font-montserrat mb-4">
                            Nasıl <span className="gradient-text">Çalışır?</span>
                        </h2>
                        <p className="text-gray-500 max-w-xl mx-auto">4 basit adımda tatil yaparken gelir elde etmeye başlayın.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {STEPS.map((step, i) => (
                            <div key={step.step} className="relative">
                                {i < STEPS.length - 1 && (
                                    <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-turkuaz/30 to-transparent" />
                                )}
                                <div className="bg-white rounded-2xl p-6 border border-gray-200/60 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-turkuaz to-turkuaz-light flex items-center justify-center text-white font-bold text-lg mb-4">
                                        {step.step}
                                    </div>
                                    <h3 className="text-lg font-bold text-navy font-montserrat mb-2">{step.title}</h3>
                                    <p className="text-sm text-gray-500">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Earning Tiers */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl sm:text-4xl font-bold text-navy font-montserrat mb-4">
                            Kazanç <span className="bg-gradient-to-r from-pink to-pink-light bg-clip-text text-transparent">Modelleri</span>
                        </h2>
                        <p className="text-gray-500 max-w-xl mx-auto">Size en uygun kazanç modelini seçin ve hemen başlayın.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {EARNING_TIERS.map((tier) => (
                            <div
                                key={tier.title}
                                className={`relative rounded-2xl p-6 border-2 transition-all hover:shadow-lg ${tier.highlighted
                                        ? "border-pink bg-gradient-to-b from-pink/5 to-white shadow-md"
                                        : "border-gray-200/60 bg-white"
                                    }`}
                            >
                                {tier.highlighted && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink to-pink-dark text-white px-4 py-1 rounded-full text-xs font-semibold">
                                        En Popüler
                                    </div>
                                )}
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${tier.color === "turkuaz" ? "bg-turkuaz/10" : tier.color === "pink" ? "bg-pink/10" : "bg-gold/10"
                                    }`}>
                                    <tier.icon className={`w-7 h-7 ${tier.color === "turkuaz" ? "text-turkuaz" : tier.color === "pink" ? "text-pink" : "text-gold"
                                        }`} />
                                </div>
                                <h3 className="text-xl font-bold text-navy font-montserrat mb-1">{tier.title}</h3>
                                <p className="text-sm text-gray-400 mb-4">{tier.subtitle}</p>
                                <div className={`text-2xl font-bold font-montserrat mb-6 ${tier.color === "turkuaz" ? "text-turkuaz" : tier.color === "pink" ? "text-pink" : "text-gold"
                                    }`}>
                                    {tier.earnings}
                                </div>
                                <ul className="space-y-3 mb-6">
                                    {tier.features.map((f) => (
                                        <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                                            <Check className={`w-4 h-4 shrink-0 mt-0.5 ${tier.color === "turkuaz" ? "text-turkuaz" : tier.color === "pink" ? "text-pink" : "text-gold"
                                                }`} />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="/auth/register"
                                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${tier.highlighted
                                            ? "bg-gradient-to-r from-pink to-pink-dark text-white hover:shadow-lg hover:shadow-pink/20"
                                            : "border-2 border-gray-200 text-navy hover:border-turkuaz hover:text-turkuaz"
                                        }`}
                                >
                                    Başla
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Commission Explanation */}
            <section className="py-20 bg-gradient-to-br from-navy via-navy-light to-navy relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 right-10 w-80 h-80 bg-pink/5 rounded-full blur-3xl" />
                </div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Crown className="w-12 h-12 text-pink-light mx-auto mb-6" />
                    <h2 className="text-3xl sm:text-4xl font-bold text-white font-montserrat mb-6">
                        Kazan-Kazan <span className="bg-gradient-to-r from-pink to-pink-light bg-clip-text text-transparent">Modeli</span>
                    </h2>
                    <p className="text-white/50 text-lg mb-10 max-w-2xl mx-auto">
                        Her rota satışından <span className="text-pink-light font-bold">%95</span> gelir sizin, platform sadece <span className="text-turkuaz-light font-bold">%5</span> komisyon alır.
                        Sektördeki en yüksek gelir payı oranıyla kazancınızı maksimize edin.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
                            <Share2 className="w-6 h-6 text-turkuaz-light mx-auto mb-3" />
                            <div className="text-white font-semibold mb-1">Paylaş</div>
                            <div className="text-white/40 text-xs">Rotanızı yükleyin</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
                            <Users className="w-6 h-6 text-pink-light mx-auto mb-3" />
                            <div className="text-white font-semibold mb-1">Satış</div>
                            <div className="text-white/40 text-xs">Gezginler satın alsın</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
                            <Wallet className="w-6 h-6 text-gold-light mx-auto mb-3" />
                            <div className="text-white font-semibold mb-1">Kazan</div>
                            <div className="text-white/40 text-xs">%95 gelir elde edin</div>
                        </div>
                    </div>
                    <Link
                        href="/auth/register"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-pink to-pink-dark text-white px-10 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-pink/30 transition-all duration-300"
                    >
                        <Zap className="w-5 h-5" />
                        Şimdi Katıl
                    </Link>
                </div>
            </section>
        </div>
    );
}
