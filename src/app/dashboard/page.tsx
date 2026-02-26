"use client";

import { useState } from "react";
import Link from "next/link";
import influencerData from "@/data/influencer-stats.json";
import {
    DollarSign, Clock, MousePointerClick, TrendingUp,
    Link2, Copy, Check, ExternalLink, ChevronRight,
    Award, BarChart3, Sparkles, Calendar,
} from "lucide-react";

// Link Builder: use destinations from JSON
import destinations from "@/data/destinations.json";

export default function DashboardPage() {
    const { user, stats, tiers, links } = influencerData;
    const [copiedId, setCopiedId] = useState<string | null>(null);
    const [selectedRoute, setSelectedRoute] = useState("");
    const [generatedLink, setGeneratedLink] = useState("");

    const currentTier = tiers.find((t) => t.name.toLowerCase() === user.tier) || tiers[0];
    const nextTier = tiers[tiers.indexOf(currentTier) + 1] || null;
    const progressToNext = nextTier
        ? ((stats.totalSales - currentTier.minSales) / ((nextTier.minSales) - currentTier.minSales)) * 100
        : 100;

    const handleCopy = (text: string, id: string) => {
        navigator.clipboard.writeText(`https://${text}`);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const handleGenerateLink = () => {
        if (!selectedRoute) return;
        const dest = destinations.find((d) => d.slug === selectedRoute);
        if (!dest) return;
        const link = `tatilva.com/r/${user.username}/${dest.slug}`;
        setGeneratedLink(link);
    };

    const statCards = [
        { label: "Toplam Kazanç", value: `₺${stats.totalEarnings.toLocaleString()}`, icon: DollarSign, color: "from-emerald-500 to-emerald-600", change: "+₺4.500 bu ay" },
        { label: "Bekleyen Ödeme", value: `₺${stats.pendingPayment.toLocaleString()}`, icon: Clock, color: "from-amber-500 to-orange-500", change: "7 gün sonra aktarım" },
        { label: "Tıklanma Sayısı", value: stats.totalClicks.toLocaleString(), icon: MousePointerClick, color: "from-cyan-500 to-turkuaz", change: "+1.2K bu hafta" },
        { label: "Dönüşüm Oranı", value: `%${stats.conversionRate}`, icon: TrendingUp, color: "from-violet-500 to-purple-600", change: `${stats.totalSales} satış` },
    ];

    return (
        <div className="min-h-screen bg-soft-white">
            {/* Dashboard Header */}
            <section className="hero-gradient">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <img src={user.avatar} alt={user.name} className="w-14 h-14 rounded-xl object-cover border-2 border-turkuaz/30" />
                            <div>
                                <h1 className="text-xl font-bold text-white font-montserrat">{user.name}</h1>
                                <div className="flex items-center gap-2 mt-0.5">
                                    <span className="text-turkuaz-light text-sm">@{user.username}</span>
                                    <span className="text-xs text-navy-light bg-gradient-to-r from-turkuaz/20 to-turkuaz/10 text-turkuaz-light px-2.5 py-0.5 rounded-full font-semibold border border-turkuaz/20">
                                        {user.tierLabel}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <Link
                            href="/kayit"
                            className="text-sm text-white/50 hover:text-turkuaz-light transition-colors flex items-center gap-1"
                        >
                            Davet Et <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stat Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    {statCards.map((s) => (
                        <div key={s.label} className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-200/60 hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-3">
                                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-sm`}>
                                    <s.icon className="w-5 h-5 text-white" />
                                </div>
                            </div>
                            <div className="text-xl sm:text-2xl font-bold text-navy font-montserrat">{s.value}</div>
                            <div className="text-xs text-gray-400 mt-0.5">{s.label}</div>
                            <div className="text-xs text-turkuaz font-medium mt-2">{s.change}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tier Progress */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200/60">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <Award className="w-5 h-5 text-turkuaz" />
                            <span className="text-sm font-semibold text-navy">Kademe İlerlemesi</span>
                        </div>
                        <span className="text-xs text-gray-400">{stats.totalSales} / {nextTier ? nextTier.minSales : "∞"} satış</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-turkuaz to-turkuaz-light rounded-full transition-all duration-500"
                            style={{ width: `${Math.min(progressToNext, 100)}%` }}
                        />
                    </div>
                    <div className="flex justify-between mt-2">
                        <span className="text-xs font-semibold" style={{ color: currentTier.color }}>{currentTier.name} (%{currentTier.commission})</span>
                        {nextTier && (
                            <span className="text-xs text-gray-400">Sonraki: {nextTier.name} (%{nextTier.commission})</span>
                        )}
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Link Builder */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200/60 sticky top-24">
                        <div className="flex items-center gap-2 mb-4">
                            <Link2 className="w-5 h-5 text-turkuaz" />
                            <h2 className="text-sm font-bold text-navy font-montserrat">Link Oluştur</h2>
                        </div>

                        <label className="text-xs text-gray-500 mb-1.5 block">Rota Seçin</label>
                        <select
                            value={selectedRoute}
                            onChange={(e) => { setSelectedRoute(e.target.value); setGeneratedLink(""); }}
                            className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-turkuaz focus:ring-2 focus:ring-turkuaz/20 outline-none transition-all mb-3 bg-white"
                        >
                            <option value="">Rota seçin...</option>
                            {destinations.map((d) => (
                                <option key={d.slug} value={d.slug}>{d.name}</option>
                            ))}
                        </select>

                        <button
                            onClick={handleGenerateLink}
                            disabled={!selectedRoute}
                            className="w-full bg-gradient-to-r from-turkuaz to-turkuaz-dark text-white py-2.5 rounded-xl text-sm font-semibold disabled:opacity-40 hover:shadow-lg hover:shadow-turkuaz/20 transition-all flex items-center justify-center gap-2"
                        >
                            <Sparkles className="w-4 h-4" />
                            Link Oluştur
                        </button>

                        {generatedLink && (
                            <div className="mt-4 bg-gray-50 rounded-xl p-3 border border-gray-200/60">
                                <div className="text-xs text-gray-400 mb-1">Kopyalanabilir Link:</div>
                                <div className="flex items-center gap-2">
                                    <code className="flex-1 text-xs text-navy bg-white px-3 py-2 rounded-lg border border-gray-200 truncate">
                                        https://{generatedLink}
                                    </code>
                                    <button
                                        onClick={() => handleCopy(generatedLink, "generated")}
                                        className="w-9 h-9 rounded-lg bg-turkuaz/5 flex items-center justify-center text-turkuaz hover:bg-turkuaz/10 transition-colors shrink-0"
                                    >
                                        {copiedId === "generated" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>
                        )}

                        <div className="mt-4 bg-turkuaz/5 rounded-xl p-3 border border-turkuaz/10">
                            <p className="text-xs text-navy font-medium">💡 Nasıl çalışır?</p>
                            <p className="text-xs text-gray-400 mt-1">Linki sosyal medyada paylaşın. Birisi bu linkten rezervasyon yaptığında %{user.commissionRate} komisyon kazanırsınız.</p>
                        </div>
                    </div>
                </div>

                {/* Performance Table */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200/60 overflow-hidden">
                        <div className="flex items-center justify-between p-5 border-b border-gray-200/60">
                            <div className="flex items-center gap-2">
                                <BarChart3 className="w-5 h-5 text-turkuaz" />
                                <h2 className="text-sm font-bold text-navy font-montserrat">Link Performansı</h2>
                            </div>
                            <span className="text-xs text-gray-400">{links.length} aktif link</span>
                        </div>

                        {/* Mobile Cards / Desktop Table */}
                        <div className="divide-y divide-gray-200/60">
                            {links.map((link) => (
                                <div key={link.id} className="p-4 sm:p-5 hover:bg-gray-50/50 transition-colors">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-sm font-semibold text-navy truncate">{link.routeName}</h3>
                                            <div className="flex items-center gap-1.5 mt-1">
                                                <code className="text-xs text-gray-400 truncate">{link.shortUrl}</code>
                                                <button
                                                    onClick={() => handleCopy(link.shortUrl, link.id)}
                                                    className="text-turkuaz hover:text-turkuaz-dark transition-colors shrink-0"
                                                >
                                                    {copiedId === link.id ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                                                </button>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-3 gap-4 sm:gap-6 text-center shrink-0">
                                            <div>
                                                <div className="text-sm font-bold text-navy">{link.clicks.toLocaleString()}</div>
                                                <div className="text-xs text-gray-400">Tıklama</div>
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-turkuaz">{link.conversions}</div>
                                                <div className="text-xs text-gray-400">Satış</div>
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-emerald-500">₺{link.earnings.toLocaleString()}</div>
                                                <div className="text-xs text-gray-400">Kazanç</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Payment Info */}
                    <div className="mt-4 bg-gradient-to-r from-navy to-navy-light rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-turkuaz/10 flex items-center justify-center shrink-0">
                                <Calendar className="w-5 h-5 text-turkuaz-light" />
                            </div>
                            <div>
                                <p className="text-white text-sm font-semibold">Ödeme Bilgisi</p>
                                <p className="text-white/40 text-xs">Ödemeler konaklama + 7 gün sonra yapılır</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-lg font-bold text-turkuaz-light font-montserrat">₺{stats.pendingPayment.toLocaleString()}</div>
                            <div className="text-xs text-white/40">Sonraki ödeme: 5 Mart 2026</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom spacing */}
            <div className="h-16" />
        </div>
    );
}
