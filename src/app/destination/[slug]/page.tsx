"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import destinations from "@/data/destinations.json";
import { Destination } from "@/types";
import { formatPrice, getScoreLabel } from "@/lib/utils";
import {
    ArrowLeft,
    MapPin,
    Star,
    Hotel,
    Check,
    User,
    Mail,
    Phone,
    Calendar,
    Users,
    MessageSquare,
    Send,
    Sparkles,
    Shield,
    Clock,
    Heart,
} from "lucide-react";

const reservationSchema = z.object({
    name: z.string().min(2, "İsim en az 2 karakter olmalı"),
    email: z.string().email("Geçerli bir e-posta adresi girin"),
    phone: z.string().min(10, "Geçerli bir telefon numarası girin"),
    checkIn: z.string().min(1, "Giriş tarihi seçin"),
    checkOut: z.string().min(1, "Çıkış tarihi seçin"),
    guests: z.number().min(1, "En az 1 kişi").max(10, "En fazla 10 kişi"),
    notes: z.string().optional(),
});

type ReservationFormData = z.infer<typeof reservationSchema>;

export default function DestinationPage() {
    const params = useParams();
    const slug = params.slug as string;
    const [isSubmitted, setIsSubmitted] = useState(false);

    const typedDestinations: Destination[] = destinations as Destination[];
    const destination = typedDestinations.find((d) => d.slug === slug);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ReservationFormData>({
        resolver: zodResolver(reservationSchema),
        defaultValues: {
            guests: 2,
        },
    });

    const onSubmit = async (data: ReservationFormData) => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Reservation submitted:", data);
        setIsSubmitted(true);
    };

    if (!destination) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-soft-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-navy font-montserrat mb-4">404</h1>
                    <p className="text-gray-500 mb-6">Destinasyon bulunamadı.</p>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-turkuaz to-turkuaz-dark text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-turkuaz/20 transition-all"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Ana Sayfaya Dön
                    </Link>
                </div>
            </div>
        );
    }

    const categoryColors: Record<string, string> = {
        budget: "bg-success/10 text-success",
        mid: "bg-turkuaz/10 text-turkuaz",
        premium: "bg-gold/10 text-gold",
        luxury: "bg-danger/10 text-danger",
    };

    const categoryLabels: Record<string, string> = {
        budget: "Ekonomik",
        mid: "Orta Segment",
        premium: "Premium",
        luxury: "Lüks",
    };

    return (
        <div className="min-h-screen bg-soft-white">
            {/* Hero Header */}
            <section className="relative py-20 sm:py-28 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src={destination.image}
                        alt={destination.name}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/70" />
                </div>
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-turkuaz/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-10 right-20 w-96 h-96 bg-turkuaz/3 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-white/50 hover:text-turkuaz-light transition-colors text-sm mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Tüm Destinasyonlar
                    </Link>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[destination.category]}`}>
                                    {categoryLabels[destination.category]}
                                </span>
                                <div className="flex items-center gap-1.5 bg-gold/90 text-navy px-2.5 py-1 rounded-lg">
                                    <Star className="w-3.5 h-3.5 fill-navy" />
                                    <span className="text-sm font-bold">{destination.rating}</span>
                                </div>
                                <span className="text-white/50 text-sm">{getScoreLabel(destination.rating)}</span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-montserrat mb-3">
                                {destination.name}
                            </h1>
                            <div className="flex items-center gap-2 text-white/50">
                                <MapPin className="w-4 h-4 text-turkuaz-light" />
                                <span>{destination.location}</span>
                            </div>
                        </div>

                        <div className="text-right">
                            <div className="text-white/40 text-sm mb-1">kişi başı fiyat</div>
                            <div className="text-4xl font-bold gradient-text font-montserrat">
                                {formatPrice(destination.price)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* Left column - Details */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Hotel Info Card */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-200/60 p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-turkuaz/5 flex items-center justify-center">
                                        <Hotel className="w-6 h-6 text-turkuaz" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-navy font-montserrat">{destination.hotelName}</h3>
                                        <p className="text-sm text-gray-400">{destination.location}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-200/60 p-6">
                                <h2 className="text-xl font-bold text-navy font-montserrat mb-4">Hakkında</h2>
                                <p className="text-gray-500 leading-relaxed">{destination.longDescription}</p>
                            </div>

                            {/* Features */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-200/60 p-6">
                                <h2 className="text-xl font-bold text-navy font-montserrat mb-4">Otel Özellikleri</h2>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {destination.features.map((feature) => (
                                        <div
                                            key={feature}
                                            className="flex items-center gap-2.5 bg-turkuaz/5 rounded-xl px-4 py-3"
                                        >
                                            <Check className="w-4 h-4 text-turkuaz shrink-0" />
                                            <span className="text-sm text-navy/70">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Highlights */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-200/60 p-6">
                                <h2 className="text-xl font-bold text-navy font-montserrat mb-4">
                                    Öne Çıkan Deneyimler
                                </h2>
                                <div className="space-y-3">
                                    {destination.highlights.map((highlight, index) => (
                                        <div
                                            key={highlight}
                                            className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100/50 transition-colors"
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-turkuaz to-turkuaz-light flex items-center justify-center text-white text-sm font-bold shrink-0">
                                                {index + 1}
                                            </div>
                                            <span className="text-navy/70">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right column - Reservation Form */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-28">
                                <div className="bg-white rounded-2xl shadow-lg border border-gray-200/60 overflow-hidden">
                                    {/* Form header */}
                                    <div className="bg-gradient-to-r from-navy to-navy-light p-5">
                                        <h3 className="text-lg font-bold text-white font-montserrat">
                                            Rezervasyon Yap
                                        </h3>
                                        <p className="text-white/50 text-sm mt-1">
                                            Hemen yerinizi ayırtın
                                        </p>
                                    </div>

                                    {isSubmitted ? (
                                        <div className="p-8 text-center">
                                            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <Check className="w-8 h-8 text-success" />
                                            </div>
                                            <h3 className="text-xl font-bold text-navy font-montserrat mb-2">
                                                Rezervasyonunuz Alındı!
                                            </h3>
                                            <p className="text-gray-500 text-sm mb-6">
                                                En kısa sürede sizinle iletişime geçeceğiz.
                                            </p>
                                            <Link
                                                href="/"
                                                className="inline-flex items-center gap-2 text-turkuaz font-medium text-sm hover:underline"
                                            >
                                                <ArrowLeft className="w-4 h-4" />
                                                Diğer rotaları incele
                                            </Link>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit(onSubmit)} className="p-5 space-y-4">
                                            {/* Price Info */}
                                            <div className="bg-turkuaz/5 rounded-xl p-4 flex items-center justify-between">
                                                <span className="text-sm text-navy/60">Kişi başı fiyat</span>
                                                <span className="text-xl font-bold gradient-text font-montserrat">
                                                    {formatPrice(destination.price)}
                                                </span>
                                            </div>

                                            {/* Name */}
                                            <div>
                                                <label className="flex items-center gap-2 text-sm font-medium text-navy mb-1.5">
                                                    <User className="w-3.5 h-3.5 text-turkuaz" />
                                                    Ad Soyad
                                                </label>
                                                <input
                                                    {...register("name")}
                                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-turkuaz focus:ring-2 focus:ring-turkuaz/20 outline-none transition-all text-sm"
                                                    placeholder="Adınız Soyadınız"
                                                />
                                                {errors.name && <p className="text-danger text-xs mt-1">{errors.name.message}</p>}
                                            </div>

                                            {/* Email */}
                                            <div>
                                                <label className="flex items-center gap-2 text-sm font-medium text-navy mb-1.5">
                                                    <Mail className="w-3.5 h-3.5 text-turkuaz" />
                                                    E-posta
                                                </label>
                                                <input
                                                    {...register("email")}
                                                    type="email"
                                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-turkuaz focus:ring-2 focus:ring-turkuaz/20 outline-none transition-all text-sm"
                                                    placeholder="ornek@email.com"
                                                />
                                                {errors.email && <p className="text-danger text-xs mt-1">{errors.email.message}</p>}
                                            </div>

                                            {/* Phone */}
                                            <div>
                                                <label className="flex items-center gap-2 text-sm font-medium text-navy mb-1.5">
                                                    <Phone className="w-3.5 h-3.5 text-turkuaz" />
                                                    Telefon
                                                </label>
                                                <input
                                                    {...register("phone")}
                                                    type="tel"
                                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-turkuaz focus:ring-2 focus:ring-turkuaz/20 outline-none transition-all text-sm"
                                                    placeholder="0 (5XX) XXX XX XX"
                                                />
                                                {errors.phone && <p className="text-danger text-xs mt-1">{errors.phone.message}</p>}
                                            </div>

                                            {/* Dates */}
                                            <div className="grid grid-cols-2 gap-3">
                                                <div>
                                                    <label className="flex items-center gap-2 text-sm font-medium text-navy mb-1.5">
                                                        <Calendar className="w-3.5 h-3.5 text-turkuaz" />
                                                        Giriş
                                                    </label>
                                                    <input
                                                        {...register("checkIn")}
                                                        type="date"
                                                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:border-turkuaz focus:ring-2 focus:ring-turkuaz/20 outline-none transition-all text-sm"
                                                    />
                                                    {errors.checkIn && <p className="text-danger text-xs mt-1">{errors.checkIn.message}</p>}
                                                </div>
                                                <div>
                                                    <label className="flex items-center gap-2 text-sm font-medium text-navy mb-1.5">
                                                        <Calendar className="w-3.5 h-3.5 text-turkuaz" />
                                                        Çıkış
                                                    </label>
                                                    <input
                                                        {...register("checkOut")}
                                                        type="date"
                                                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:border-turkuaz focus:ring-2 focus:ring-turkuaz/20 outline-none transition-all text-sm"
                                                    />
                                                    {errors.checkOut && <p className="text-danger text-xs mt-1">{errors.checkOut.message}</p>}
                                                </div>
                                            </div>

                                            {/* Guests */}
                                            <div>
                                                <label className="flex items-center gap-2 text-sm font-medium text-navy mb-1.5">
                                                    <Users className="w-3.5 h-3.5 text-turkuaz" />
                                                    Kişi Sayısı
                                                </label>
                                                <input
                                                    {...register("guests", { valueAsNumber: true })}
                                                    type="number"
                                                    min="1"
                                                    max="10"
                                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-turkuaz focus:ring-2 focus:ring-turkuaz/20 outline-none transition-all text-sm"
                                                    placeholder="2"
                                                />
                                                {errors.guests && <p className="text-danger text-xs mt-1">{errors.guests.message}</p>}
                                            </div>

                                            {/* Notes */}
                                            <div>
                                                <label className="flex items-center gap-2 text-sm font-medium text-navy mb-1.5">
                                                    <MessageSquare className="w-3.5 h-3.5 text-turkuaz" />
                                                    Notlar (Opsiyonel)
                                                </label>
                                                <textarea
                                                    {...register("notes")}
                                                    rows={2}
                                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-turkuaz focus:ring-2 focus:ring-turkuaz/20 outline-none transition-all text-sm resize-none"
                                                    placeholder="Özel istekleriniz..."
                                                />
                                            </div>

                                            {/* Submit */}
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full bg-gradient-to-r from-turkuaz to-turkuaz-dark text-white py-3.5 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-turkuaz/20 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                                            >
                                                {isSubmitting ? (
                                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                ) : (
                                                    <>
                                                        <Send className="w-4 h-4" />
                                                        Rezervasyon Yap
                                                    </>
                                                )}
                                            </button>

                                            {/* Trust signals */}
                                            <div className="flex items-center gap-4 justify-center pt-2">
                                                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                                                    <Shield className="w-3.5 h-3.5 text-success" />
                                                    Güvenli
                                                </div>
                                                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                                                    <Clock className="w-3.5 h-3.5 text-turkuaz" />
                                                    Hızlı Dönüş
                                                </div>
                                                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                                                    <Heart className="w-3.5 h-3.5 text-danger" />
                                                    Ücretsiz İptal
                                                </div>
                                            </div>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
