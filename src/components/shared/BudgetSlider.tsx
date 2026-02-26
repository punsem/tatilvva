"use client";

import { formatPrice } from "@/lib/utils";
import { Wallet, TrendingUp } from "lucide-react";

interface BudgetSliderProps {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
}

export default function BudgetSlider({
    value,
    onChange,
    min = 1000,
    max = 20000,
    step = 500,
}: BudgetSliderProps) {
    const percentage = ((value - min) / (max - min)) * 100;

    const getBudgetLabel = (val: number) => {
        if (val <= 4000) return { text: "Ekonomik", color: "text-success" };
        if (val <= 8000) return { text: "Orta Segment", color: "text-turkuaz" };
        if (val <= 12000) return { text: "Premium", color: "text-gold" };
        return { text: "Lüks", color: "text-danger" };
    };

    const label = getBudgetLabel(value);

    return (
        <div className="w-full max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-turkuaz to-turkuaz-light flex items-center justify-center">
                            <Wallet className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold font-montserrat text-navy">
                                Bütçenizi Belirleyin
                            </h3>
                            <p className="text-sm text-gray-500">
                                Kişi başı maksimum bütçe
                            </p>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-3xl font-bold gradient-text font-montserrat">
                            {formatPrice(value)}
                        </div>
                        <span className={`text-sm font-semibold ${label.color}`}>
                            {label.text}
                        </span>
                    </div>
                </div>

                {/* Slider */}
                <div className="relative mt-4 mb-6">
                    <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className="absolute h-full bg-gradient-to-r from-turkuaz to-turkuaz-light rounded-full transition-all duration-200"
                            style={{ width: `${percentage}%` }}
                        />
                    </div>
                    <input
                        type="range"
                        min={min}
                        max={max}
                        step={step}
                        value={value}
                        onChange={(e) => onChange(Number(e.target.value))}
                        className="absolute top-0 left-0 w-full h-2 opacity-0 cursor-pointer"
                        style={{ margin: 0 }}
                    />
                    {/* Thumb indicator */}
                    <div
                        className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-3 border-turkuaz rounded-full shadow-lg pointer-events-none transition-all duration-200"
                        style={{ left: `calc(${percentage}% - 12px)`, borderWidth: '3px' }}
                    />
                </div>

                {/* Budget milestones */}
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                    <span>{formatPrice(min)}</span>
                    <span>{formatPrice(max / 4)}</span>
                    <span>{formatPrice(max / 2)}</span>
                    <span>{formatPrice((max * 3) / 4)}</span>
                    <span>{formatPrice(max)}</span>
                </div>

                {/* Quick select buttons */}
                <div className="flex gap-2 mt-6 flex-wrap">
                    {[3000, 5000, 8000, 12000, 15000].map((preset) => (
                        <button
                            key={preset}
                            onClick={() => onChange(preset)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${value === preset
                                    ? "bg-turkuaz text-white shadow-md"
                                    : "bg-gray-100 text-gray-500 hover:bg-turkuaz/10 hover:text-turkuaz"
                                }`}
                        >
                            {formatPrice(preset)}
                        </button>
                    ))}
                </div>

                {/* Info bar */}
                <div className="mt-6 flex items-center gap-2 text-sm text-gray-400 bg-gray-100/50 rounded-lg px-4 py-3">
                    <TrendingUp className="w-4 h-4 text-turkuaz" />
                    <span>
                        Bütçenize en uygun {value <= 5000 ? "ekonomik" : value <= 10000 ? "kaliteli" : "lüks"} tatil seçeneklerini sizin için filtreliyoruz.
                    </span>
                </div>
            </div>
        </div>
    );
}
