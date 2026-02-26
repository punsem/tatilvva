import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
    return new Intl.NumberFormat("tr-TR", {
        style: "currency",
        currency: "TRY",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(price);
}

export function getScoreLabel(rating: number): string {
    if (rating >= 9) return "Mükemmel";
    if (rating >= 8) return "Çok İyi";
    if (rating >= 7) return "İyi";
    if (rating >= 6) return "Orta";
    return "Değerlendiriliyor";
}
