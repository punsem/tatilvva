"use client";

import Link from "next/link";
import { Destination } from "@/types";
import { formatPrice, getScoreLabel } from "@/lib/utils";
import { MapPin, Star, Sparkles, ArrowRight, Hotel } from "lucide-react";

interface TravelCardProps {
    destination: Destination;
    isRecommended?: boolean;
    index?: number;
}

export default function TravelCard({ destination, isRecommended = false, index = 0 }: TravelCardProps) {
    const categoryColors: Record<string, string> = {
        budget: "bg-emerald-500 text-white shadow-md",
        mid: "bg-cyan-500 text-white shadow-md",
        premium: "bg-amber-500 text-white shadow-md",
        luxury: "bg-rose-500 text-white shadow-md",
    };

    const categoryLabels: Record<string, string> = {
        budget: "Ekonomik",
        mid: "Orta Segment",
        premium: "Premium",
        luxury: "Lüks",
    };

    return (
        <div
            className="card-hover group relative bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200/60"
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            {/* Recommended Badge */}
            {isRecommended && (
                <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 bg-gradient-to-r from-turkuaz to-turkuaz-light text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                    <Sparkles className="w-3.5 h-3.5" />
                    Asistanın Öneriyor
                </div>
            )}

            {/* Category Badge */}
            <div className={`absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full text-xs font-bold ${categoryColors[destination.category]}`}>
                {categoryLabels[destination.category]}
            </div>

            {/* Image Section */}
            <div className="relative h-56 overflow-hidden bg-gradient-to-br from-navy to-navy-light">
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent z-[1]" />
                {/* Destination Image */}
                <img
                    src={destination.image}
                    alt={destination.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Price tag */}
                <div className="absolute bottom-4 right-4 z-[2]">
                    <div className="glass-dark rounded-xl px-4 py-2">
                        <div className="text-turkuaz-light text-xs">kişi başı</div>
                        <div className="text-white font-bold text-xl font-montserrat">
                            {formatPrice(destination.price)}
                        </div>
                    </div>
                </div>
                {/* Rating */}
                <div className="absolute bottom-4 left-4 z-[2] flex items-center gap-2">
                    <div className="flex items-center gap-1 bg-gold/90 text-navy px-2.5 py-1 rounded-lg">
                        <Star className="w-3.5 h-3.5 fill-navy" />
                        <span className="text-sm font-bold">{destination.rating}</span>
                    </div>
                    <span className="text-white/80 text-xs">{getScoreLabel(destination.rating)}</span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-navy font-montserrat leading-tight group-hover:text-turkuaz transition-colors">
                        {destination.name}
                    </h3>
                </div>

                <div className="flex items-center gap-1.5 text-gray-400 text-sm mb-3">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{destination.location}</span>
                </div>

                <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {destination.description}
                </p>

                {/* Hotel name */}
                <div className="flex items-center gap-2 text-sm text-navy/70 mb-4 bg-gray-100/60 rounded-lg px-3 py-2">
                    <Hotel className="w-4 h-4 text-turkuaz" />
                    <span className="font-medium">{destination.hotelName}</span>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                    {destination.features.slice(0, 3).map((feature) => (
                        <span
                            key={feature}
                            className="text-xs bg-turkuaz/5 text-turkuaz border border-turkuaz/10 px-2.5 py-1 rounded-full"
                        >
                            {feature}
                        </span>
                    ))}
                    {destination.features.length > 3 && (
                        <span className="text-xs text-gray-400 px-2.5 py-1">
                            +{destination.features.length - 3} daha
                        </span>
                    )}
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-2">
                    <Link
                        href={`/destination/${destination.slug}`}
                        className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-turkuaz to-turkuaz-dark text-white py-3 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-turkuaz/20 transition-all duration-300 group/btn"
                    >
                        Teklif Al
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href={`/destination/${destination.slug}`}
                        className="px-4 py-3 rounded-xl border-2 border-navy/10 text-navy/60 text-sm font-medium hover:border-turkuaz hover:text-turkuaz transition-all duration-300"
                    >
                        Detay
                    </Link>
                </div>
            </div>
        </div>
    );
}
