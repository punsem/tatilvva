"use client";

import Link from "next/link";
import {
    MapPin,
    Heart,
    Grid3X3,
    Compass,
    Settings,
    Camera,
    DollarSign,
    Users,
    TrendingUp,
} from "lucide-react";

// Mock user data
const MOCK_USER = {
    id: "1",
    name: "Elif Yılmaz",
    username: "@elifyilmaz",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    bio: "Gezgin 🌍 | Fotoğrafçı 📸 | Türkiye'nin dört bir yanını keşfediyorum. Rotalarımı takip edin!",
    location: "İstanbul, Türkiye",
    followers: 2847,
    following: 412,
    routesSold: 34,
    totalEarnings: 12500,
    joinDate: "Ocak 2026",
};

const MOCK_PHOTOS = [
    {
        id: "1",
        url: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?w=600&q=80",
        location: "Kapadokya, Göreme",
        destinationSlug: "kapadokya-balon",
        likes: 342,
        caption: "Gün doğumunda balon turu ✨",
    },
    {
        id: "2",
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
        location: "Bodrum, Yalıkavak",
        destinationSlug: "bodrum-marina",
        likes: 218,
        caption: "Bodrum'da huzur ☀️",
    },
    {
        id: "3",
        url: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&q=80",
        location: "İstanbul, Boğaz",
        destinationSlug: "istanbul-bogaz",
        likes: 567,
        caption: "İstanbul her zaman büyüler 🌉",
    },
    {
        id: "4",
        url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&q=80",
        location: "Antalya, Belek",
        destinationSlug: "antalya-lux",
        likes: 189,
        caption: "Turkuaz cennet 🏖️",
    },
    {
        id: "5",
        url: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=600&q=80",
        location: "Bursa, Uludağ",
        destinationSlug: "bursa-uludag",
        likes: 124,
        caption: "Uludağ'da kayak sezonu ⛷️",
    },
    {
        id: "6",
        url: "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=600&q=80",
        location: "Kapadokya, Uçhisar",
        destinationSlug: "kapadokya-premium",
        likes: 421,
        caption: "Mağara otelde muhteşem bir gece 🌙",
    },
    {
        id: "7",
        url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=600&q=80",
        location: "Bodrum, Turgutreis",
        destinationSlug: "bodrum-turgutreis",
        likes: 293,
        caption: "Gün batımı seyri 🌅",
    },
    {
        id: "8",
        url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80",
        location: "Antalya, Kemer",
        destinationSlug: "antalya-kemer",
        likes: 156,
        caption: "Doğa ve deniz bir arada 🌊",
    },
    {
        id: "9",
        url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
        location: "Gaziantep",
        destinationSlug: "gaziantep-gastro",
        likes: 387,
        caption: "Gaziantep lezzetleri 🤤",
    },
];

export default function ProfilePage() {
    return (
        <div className="min-h-screen bg-soft-white">
            {/* Profile Header */}
            <section className="hero-gradient">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                        {/* Avatar */}
                        <div className="relative">
                            <img
                                src={MOCK_USER.avatar}
                                alt={MOCK_USER.name}
                                className="w-28 h-28 rounded-full object-cover border-4 border-turkuaz/30 shadow-lg"
                            />
                            <button className="absolute bottom-0 right-0 w-9 h-9 bg-gradient-to-br from-turkuaz to-turkuaz-dark rounded-full flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform">
                                <Camera className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Info */}
                        <div className="flex-1 text-center sm:text-left">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                                <h1 className="text-2xl font-bold text-white font-montserrat">{MOCK_USER.name}</h1>
                                <span className="text-white/40 text-sm">{MOCK_USER.username}</span>
                            </div>
                            <p className="text-white/60 text-sm mb-3 max-w-md">{MOCK_USER.bio}</p>
                            <div className="flex items-center justify-center sm:justify-start gap-2 text-white/40 text-sm mb-4">
                                <MapPin className="w-3.5 h-3.5 text-turkuaz-light" />
                                {MOCK_USER.location}
                            </div>

                            {/* Stats */}
                            <div className="flex items-center justify-center sm:justify-start gap-6">
                                <div className="text-center">
                                    <div className="text-lg font-bold text-white font-montserrat">{MOCK_USER.followers.toLocaleString()}</div>
                                    <div className="text-xs text-white/40">Takipçi</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-lg font-bold text-white font-montserrat">{MOCK_USER.following}</div>
                                    <div className="text-xs text-white/40">Takip</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-lg font-bold text-white font-montserrat">{MOCK_USER.routesSold}</div>
                                    <div className="text-xs text-white/40">Rota Satışı</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-lg font-bold gradient-text font-montserrat">{MOCK_USER.totalEarnings.toLocaleString()} ₺</div>
                                    <div className="text-xs text-white/40">Kazanç</div>
                                </div>
                            </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex gap-2">
                            <Link
                                href="/earn"
                                className="flex items-center gap-2 bg-gradient-to-r from-pink to-pink-dark text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-pink/20 transition-all"
                            >
                                <DollarSign className="w-4 h-4" />
                                Kazanç Paneli
                            </Link>
                            <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 transition-colors">
                                <Settings className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tabs */}
            <div className="border-b border-gray-200 bg-white sticky top-16 sm:top-20 z-30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-8">
                        <button className="flex items-center gap-2 py-4 border-b-2 border-turkuaz text-turkuaz text-sm font-semibold">
                            <Grid3X3 className="w-4 h-4" />
                            Gönderiler
                        </button>
                        <button className="flex items-center gap-2 py-4 text-gray-400 text-sm font-medium hover:text-navy transition-colors">
                            <Compass className="w-4 h-4" />
                            Rotalarım
                        </button>
                        <button className="flex items-center gap-2 py-4 text-gray-400 text-sm font-medium hover:text-navy transition-colors">
                            <Heart className="w-4 h-4" />
                            Favoriler
                        </button>
                    </div>
                </div>
            </div>

            {/* Photo Grid — Instagram Style */}
            <section className="py-8">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-3 gap-1 sm:gap-3">
                        {MOCK_PHOTOS.map((photo) => (
                            <div key={photo.id} className="relative group aspect-square overflow-hidden rounded-lg sm:rounded-xl bg-gray-100">
                                <img
                                    src={photo.url}
                                    alt={photo.caption}
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/60 transition-all duration-300 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="flex items-center gap-1.5 text-white">
                                            <Heart className="w-4 h-4 fill-white" />
                                            <span className="text-sm font-semibold">{photo.likes}</span>
                                        </div>
                                    </div>
                                    <p className="text-white text-sm font-medium text-center px-3 mb-2">{photo.caption}</p>
                                    <div className="flex items-center gap-1.5 text-turkuaz-light text-xs">
                                        <MapPin className="w-3 h-3" />
                                        {photo.location}
                                    </div>
                                    <Link
                                        href={`/destination/${photo.destinationSlug}`}
                                        className="mt-3 bg-gradient-to-r from-turkuaz to-turkuaz-dark text-white px-4 py-2 rounded-full text-xs font-semibold hover:shadow-lg transition-all"
                                    >
                                        Bu Rotayı Planla
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Earnings Summary Bar */}
            <section className="py-8 bg-white border-t border-gray-200/50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-navy to-navy-light rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-pink/10 flex items-center justify-center">
                                <TrendingUp className="w-6 h-6 text-pink-light" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold font-montserrat">Rota Satarak Para Kazanın</h3>
                                <p className="text-white/40 text-sm">Paylaştığınız rotalar üzerinden %95 komisyon kazanın.</p>
                            </div>
                        </div>
                        <Link
                            href="/earn"
                            className="bg-gradient-to-r from-pink to-pink-dark text-white px-6 py-3 rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-pink/20 transition-all shrink-0"
                        >
                            Detayları Gör
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
