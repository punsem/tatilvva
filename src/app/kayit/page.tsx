"use client";

import { useState } from "react";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    DollarSign, Instagram, AtSign, Mail, User, Phone,
    ArrowRight, Sparkles, Check, TrendingUp, Shield, Zap,
} from "lucide-react";

const kayitSchema = z.object({
    name: z.string().min(2, "İsim en az 2 karakter olmalı"),
    email: z.string().email("Geçerli bir e-posta adresi girin"),
    phone: z.string().min(10, "Geçerli bir telefon numarası girin"),
    instagram: z.string().min(2, "Instagram kullanıcı adınızı girin"),
    tiktok: z.string().optional(),
});

type KayitFormData = z.infer<typeof kayitSchema>;

const BENEFITS = [
    { icon: DollarSign, title: "%3 — %7 Komisyon", desc: "Her kesin rezervasyondan net kazanç" },
    { icon: TrendingUp, title: "Kademeli Sistem", desc: "Satış arttıkça komisyon oranın yükselir" },
    { icon: Shield, title: "Güvenli Ödeme", desc: "Konaklama + 7 gün sonra ödeme garantisi" },
    { icon: Zap, title: "30 Saniye Onboarding", desc: "Sadece sosyal medya hesabın ve mailin yeter" },
];

export default function KayitPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<KayitFormData>({ resolver: zodResolver(kayitSchema) });

    const onSubmit = async (data: KayitFormData) => {
        await new Promise((r) => setTimeout(r, 1200));
        console.log("Influencer Kayıt:", data);
        setIsSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-soft-white">
            {/* Hero */}
            <section className="hero-gradient relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 right-10 w-96 h-96 bg-turkuaz/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-10 left-10 w-72 h-72 bg-pink/5 rounded-full blur-3xl" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center max-w-2xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-turkuaz/10 text-turkuaz-light px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                            <Sparkles className="w-4 h-4" />
                            Influencer Programı
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-montserrat leading-tight mb-4">
                            Tatil Yaparken{" "}
                            <span className="gradient-text">Para Kazan</span>
                        </h1>
                        <p className="text-white/50 text-lg">
                            Sosyal medya hesabınla tatil rotalarını paylaş, her rezervasyondan komisyon kazan.
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-12 bg-white border-b border-gray-200/50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {BENEFITS.map((b) => (
                            <div key={b.title} className="flex items-start gap-3 p-3">
                                <div className="w-10 h-10 rounded-xl bg-turkuaz/5 flex items-center justify-center shrink-0">
                                    <b.icon className="w-5 h-5 text-turkuaz" />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-navy">{b.title}</div>
                                    <div className="text-xs text-gray-400">{b.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-16">
                <div className="max-w-lg mx-auto px-4 sm:px-6">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200/60 overflow-hidden">
                        {/* Form Header */}
                        <div className="bg-gradient-to-r from-navy to-navy-light p-6">
                            <h2 className="text-xl font-bold text-white font-montserrat">Influencer Başvurusu</h2>
                            <p className="text-white/40 text-sm mt-1">30 saniyede kayıt ol, hemen kazanmaya başla</p>
                        </div>

                        {isSubmitted ? (
                            <div className="p-8 text-center">
                                <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-5">
                                    <Check className="w-10 h-10 text-success" />
                                </div>
                                <h3 className="text-2xl font-bold text-navy font-montserrat mb-3">Başvurunuz Alındı!</h3>
                                <p className="text-gray-500 text-sm mb-6 max-w-xs mx-auto">
                                    Ekibimiz başvurunuzu inceleyecek ve 24 saat içinde size dönüş yapacaktır.
                                </p>
                                <div className="bg-turkuaz/5 rounded-xl p-4 mb-6">
                                    <p className="text-sm text-navy font-medium">Sonraki Adım</p>
                                    <p className="text-xs text-gray-400 mt-1">Onay sonrası dashboard'unuz aktif olacak ve link oluşturmaya başlayabileceksiniz.</p>
                                </div>
                                <Link
                                    href="/dashboard"
                                    className="inline-flex items-center gap-2 bg-gradient-to-r from-turkuaz to-turkuaz-dark text-white px-6 py-3 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-turkuaz/20 transition-all"
                                >
                                    Dashboard'a Git
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
                                <div>
                                    <label className="flex items-center gap-2 text-sm font-medium text-navy mb-1.5">
                                        <User className="w-3.5 h-3.5 text-turkuaz" /> Ad Soyad
                                    </label>
                                    <input {...register("name")} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-turkuaz focus:ring-2 focus:ring-turkuaz/20 outline-none transition-all text-sm" placeholder="Adınız Soyadınız" />
                                    {errors.name && <p className="text-danger text-xs mt-1">{errors.name.message}</p>}
                                </div>

                                <div>
                                    <label className="flex items-center gap-2 text-sm font-medium text-navy mb-1.5">
                                        <Mail className="w-3.5 h-3.5 text-turkuaz" /> E-posta
                                    </label>
                                    <input {...register("email")} type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-turkuaz focus:ring-2 focus:ring-turkuaz/20 outline-none transition-all text-sm" placeholder="ornek@email.com" />
                                    {errors.email && <p className="text-danger text-xs mt-1">{errors.email.message}</p>}
                                </div>

                                <div>
                                    <label className="flex items-center gap-2 text-sm font-medium text-navy mb-1.5">
                                        <Phone className="w-3.5 h-3.5 text-turkuaz" /> Telefon
                                    </label>
                                    <input {...register("phone")} type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-turkuaz focus:ring-2 focus:ring-turkuaz/20 outline-none transition-all text-sm" placeholder="0 (5XX) XXX XX XX" />
                                    {errors.phone && <p className="text-danger text-xs mt-1">{errors.phone.message}</p>}
                                </div>

                                <div>
                                    <label className="flex items-center gap-2 text-sm font-medium text-navy mb-1.5">
                                        <Instagram className="w-3.5 h-3.5 text-turkuaz" /> Instagram
                                    </label>
                                    <input {...register("instagram")} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-turkuaz focus:ring-2 focus:ring-turkuaz/20 outline-none transition-all text-sm" placeholder="@kullaniciadi" />
                                    {errors.instagram && <p className="text-danger text-xs mt-1">{errors.instagram.message}</p>}
                                </div>

                                <div>
                                    <label className="flex items-center gap-2 text-sm font-medium text-navy mb-1.5">
                                        <AtSign className="w-3.5 h-3.5 text-turkuaz" /> TikTok <span className="text-gray-400">(opsiyonel)</span>
                                    </label>
                                    <input {...register("tiktok")} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-turkuaz focus:ring-2 focus:ring-turkuaz/20 outline-none transition-all text-sm" placeholder="@kullaniciadi" />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-turkuaz to-turkuaz-dark text-white py-3.5 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-turkuaz/20 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 mt-2"
                                >
                                    {isSubmitting ? (
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            Başvuru Yap
                                            <ArrowRight className="w-4 h-4" />
                                        </>
                                    )}
                                </button>

                                <p className="text-center text-xs text-gray-400 mt-3">
                                    Zaten hesabınız var mı?{" "}
                                    <Link href="/dashboard" className="text-turkuaz font-medium hover:underline">Dashboard'a Git</Link>
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* Tier System */}
            <section className="py-16 bg-gradient-to-br from-navy via-navy-light to-navy">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-white font-montserrat text-center mb-10">
                        Kademeli <span className="gradient-text">Kazanç Sistemi</span>
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { name: "Bronz", sales: "0-9", rate: "%3", color: "from-amber-700 to-amber-500" },
                            { name: "Silver", sales: "10-49", rate: "%4", color: "from-gray-400 to-gray-300" },
                            { name: "Gold", sales: "50-99", rate: "%5", color: "from-yellow-500 to-amber-400" },
                            { name: "Elite", sales: "100+", rate: "%7", color: "from-turkuaz to-turkuaz-light" },
                        ].map((t) => (
                            <div key={t.name} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center hover:bg-white/10 transition-all">
                                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                                    <span className="text-white text-xs font-bold">{t.rate}</span>
                                </div>
                                <h3 className="text-white font-bold font-montserrat mb-1">{t.name}</h3>
                                <p className="text-white/40 text-xs">{t.sales} satış</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-white/30 text-xs text-center mt-6">
                        💡 Ödemeler, konaklama gerçekleştikten 7 gün sonra yapılır.
                    </p>
                </div>
            </section>
        </div>
    );
}
