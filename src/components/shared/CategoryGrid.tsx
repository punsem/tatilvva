"use client";

import {
    Waves, Trees, Building2, Tent, Droplets, Camera,
    UtensilsCrossed, PartyPopper, Dumbbell, Ship, Snowflake,
    Thermometer, TreePine, Landmark, Globe, Heart as HeartIcon,
    Crown, Sparkles,
} from "lucide-react";

const CATEGORIES = [
    { name: "Plaj", icon: Waves, count: 42, color: "from-cyan-400 to-blue-500" },
    { name: "Doğa", icon: Trees, count: 38, color: "from-green-400 to-emerald-600" },
    { name: "Şehir", icon: Building2, count: 35, color: "from-slate-400 to-slate-600" },
    { name: "Kamp", icon: Tent, count: 18, color: "from-amber-400 to-orange-500" },
    { name: "Yüzme", icon: Droplets, count: 30, color: "from-sky-400 to-cyan-500" },
    { name: "Fotoğraf", icon: Camera, count: 25, color: "from-pink-400 to-purple-500" },
    { name: "Gastronomi", icon: UtensilsCrossed, count: 28, color: "from-red-400 to-rose-600" },
    { name: "Eğlence", icon: PartyPopper, count: 22, color: "from-violet-400 to-purple-600" },
    { name: "Spor", icon: Dumbbell, count: 15, color: "from-orange-400 to-red-500" },
    { name: "Tekne", icon: Ship, count: 20, color: "from-blue-400 to-indigo-500" },
    { name: "Kayak", icon: Snowflake, count: 12, color: "from-blue-300 to-cyan-500" },
    { name: "Termal", icon: Thermometer, count: 16, color: "from-amber-300 to-yellow-500" },
    { name: "Orman", icon: TreePine, count: 22, color: "from-emerald-400 to-green-600" },
    { name: "Tarih", icon: Landmark, count: 32, color: "from-stone-400 to-amber-600" },
    { name: "Kültür", icon: Globe, count: 30, color: "from-indigo-400 to-blue-600" },
    { name: "Wellness", icon: Sparkles, count: 14, color: "from-teal-400 to-emerald-500" },
    { name: "Lüks", icon: Crown, count: 18, color: "from-yellow-400 to-amber-500" },
    { name: "Romantik", icon: HeartIcon, count: 20, color: "from-pink-400 to-rose-500" },
];

// Örnek yerler - her kategori için
const CATEGORY_PLACES: Record<string, string[]> = {
    "Plaj": ["Antalya Konyaaltı", "Muğla Ölüdeniz", "İzmir Çeşme", "Mersin Kızkalesi"],
    "Doğa": ["Bolu Abant Gölü", "Artvin Kaçkar Dağları", "Rize Ayder Yaylası", "Trabzon Uzungöl"],
    "Şehir": ["İstanbul Boğaz Turu", "Ankara Kültür Rotası", "İzmir Kordon Turu", "Eskişehir Porsuk"],
    "Kamp": ["Antalya Olympos", "Muğla Kabak Koyu", "Bolu Yedigöller", "Kastamonu Ilgaz"],
    "Yüzme": ["Muğla Akyaka", "Antalya Kaş", "İzmir Foça", "Mersin Anamur"],
    "Fotoğraf": ["Kapadokya Balon", "İstanbul Galata", "Mardin Taş Evler", "Safranbolu Konaklar"],
    "Gastronomi": ["Gaziantep Baklava", "Hatay Künefe", "Adana Kebap", "İstanbul Balık"],
    "Eğlence": ["Antalya Belek", "Bodrum Gece Hayatı", "İstanbul Taksim", "Kuşadası Marina"],
    "Spor": ["Fethiye Yamaç Paraşütü", "Antalya Rafting", "Erzurum Palandöken", "Rize Zipline"],
    "Tekne": ["Fethiye 12 Ada", "Bodrum Mavi Tur", "Antalya Kemer", "Kaş-Kekova"],
    "Kayak": ["Bursa Uludağ", "Erzurum Palandöken", "Kayseri Erciyes", "Bolu Kartalkaya"],
    "Termal": ["Bursa Çekirge", "Afyon Termal", "Denizli Pamukkale", "Yalova Termal"],
    "Orman": ["Bolu Yedigöller", "Sinop İnceburun", "Kastamonu Ilgaz", "Düzce Konuralp"],
    "Tarih": ["İstanbul Ayasofya", "Efes Antik Kent", "Çanakkale Truva", "Hatay Antakya"],
    "Kültür": ["Mardin Sokakları", "Şanlıurfa Göbeklitepe", "Safranbolu Konaklar", "Konya Mevlana"],
    "Wellness": ["Afyon Spa", "Denizli Pamukkale", "Bursa Termal", "Yalova Kaplıca"],
    "Lüks": ["Bodrum Yalıkavak", "Antalya Belek", "İstanbul Bebek", "Kapadokya Cave Suite"],
    "Romantik": ["Kapadokya Balon", "Bodrum Gün Batımı", "İstanbul Boğaz", "Safranbolu Konak"],
};

interface CategoryGridProps {
    onCategorySelect?: (category: string) => void;
}

export default function CategoryGrid({ onCategorySelect }: CategoryGridProps) {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-14">
                    <span className="inline-flex items-center gap-2 text-pink text-sm font-semibold bg-pink/5 px-4 py-1.5 rounded-full mb-4">
                        <Sparkles className="w-4 h-4" />
                        18 Farklı Kategori
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-navy font-montserrat mb-4">
                        Her Zevke Uygun <span className="bg-gradient-to-r from-turkuaz to-pink bg-clip-text text-transparent">Tatil Seçenekleri</span>
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        Plajdan kayağa, gastronomi turlarından wellness kaçamağına — hayalinizdeki tatil türünü seçin.
                    </p>
                </div>

                {/* Category Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat.name}
                            onClick={() => onCategorySelect?.(cat.name)}
                            className="group relative bg-white border border-gray-200/60 rounded-2xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left overflow-hidden"
                        >
                            {/* Gradient background on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                                <cat.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-semibold text-navy font-montserrat text-sm mb-1 group-hover:text-turkuaz transition-colors">
                                {cat.name}
                            </h3>
                            <p className="text-xs text-gray-400">{cat.count} rota</p>
                        </button>
                    ))}
                </div>

                {/* Example Places per Category */}
                <div className="mt-16">
                    <h3 className="text-xl font-bold text-navy font-montserrat mb-8 text-center">
                        Popüler Kategori Rotaları
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Object.entries(CATEGORY_PLACES).slice(0, 9).map(([category, places]) => {
                            const catData = CATEGORIES.find(c => c.name === category);
                            if (!catData) return null;
                            return (
                                <div
                                    key={category}
                                    className="bg-gray-50 rounded-2xl p-5 hover:bg-white hover:shadow-md border border-transparent hover:border-gray-200/60 transition-all group"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${catData.color} flex items-center justify-center`}>
                                            <catData.icon className="w-4.5 h-4.5 text-white" />
                                        </div>
                                        <h4 className="font-semibold text-navy font-montserrat text-sm">{category}</h4>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {places.map((place) => (
                                            <span
                                                key={place}
                                                className="text-xs bg-white border border-gray-200/60 text-gray-500 px-2.5 py-1 rounded-full group-hover:border-turkuaz/20 group-hover:text-turkuaz transition-colors"
                                            >
                                                {place}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
