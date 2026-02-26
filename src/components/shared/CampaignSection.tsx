"use client";

import { useState } from "react";
import { z } from "zod";
import { Crown, Gift, Zap, Shield, Mail, ArrowRight } from "lucide-react";

const campaignSchema = z.object({
    email: z.string().email("Geçerli bir e-posta adresi girin"),
});

const BENEFITS = [
    { icon: Crown, title: "Ömür Boyu Premium", desc: "Premium üyelik avantajları süresiz geçerli", color: "text-gold" },
    { icon: Zap, title: "Fiyat Alarmı", desc: "Fiyatlar düştüğünde anında bildirim alın", color: "text-turkuaz" },
    { icon: Gift, title: "%10 Özel İndirim", desc: "Tüm reservasyonlarda geçerli indirim", color: "text-pink" },
    { icon: Shield, title: "Beta Erişimi", desc: "Yeni özellikleri ilk siz deneyin", color: "text-success" },
];

export default function CampaignSection() {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        const result = campaignSchema.safeParse({ email });
        if (!result.success) {
            setError(result.error.issues[0].message);
            return;
        }
        console.log("Campaign registration:", email);
        setIsSubmitted(true);
    };

    return (
        <section className="py-20 bg-gradient-to-br from-navy via-navy-light to-navy relative overflow-hidden">
            {/* Decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-pink/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-turkuaz/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink/3 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Badge */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 bg-pink/10 text-pink-light px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
                        <Crown className="w-4 h-4" />
                        İlk 1.000 Üyeye Özel
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-montserrat mb-4">
                        Kurucu Üye <span className="bg-gradient-to-r from-pink to-pink-light bg-clip-text text-transparent">Olun</span>
                    </h2>
                    <p className="text-white/50 text-lg max-w-2xl mx-auto">
                        Tatilva'nın kurucu üyeleri arasına katılın ve ömür boyu geçerli premium avantajlardan yararlanın.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {BENEFITS.map((benefit) => (
                        <div
                            key={benefit.title}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all group"
                        >
                            <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${benefit.color}`}>
                                <benefit.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-white font-semibold font-montserrat mb-1">{benefit.title}</h3>
                            <p className="text-white/40 text-sm">{benefit.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Signup Form */}
                <div className="max-w-lg mx-auto">
                    {isSubmitted ? (
                        <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 animate-fade-in-up">
                            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-8 h-8 text-success" />
                            </div>
                            <h3 className="text-xl font-bold text-white font-montserrat mb-2">Yeriniz Ayrıldı!</h3>
                            <p className="text-white/50 text-sm">Kurucu üye avantajlarınız aktif edildiğinde e-posta ile bilgilendirileceksiniz.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="relative">
                            <div className="flex gap-3">
                                <div className="flex-1 relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="E-posta adresinizi girin"
                                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-pink focus:ring-2 focus:ring-pink/20 outline-none transition-all text-sm"
                                    />
                                    {error && <p className="text-pink-light text-xs mt-2 ml-1">{error}</p>}
                                </div>
                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-pink to-pink-dark text-white px-6 py-4 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-pink/20 transition-all duration-300 flex items-center gap-2 shrink-0"
                                >
                                    Katıl
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                            <p className="text-white/20 text-xs mt-3 text-center">
                                Kalan kontenjan: <span className="text-pink-light font-semibold">247 / 1.000</span>
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
