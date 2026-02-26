"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { X, Send, User, Mail, Phone, Wallet, MessageSquare } from "lucide-react";
import type { PlanningForm } from "@/types";

const planningSchema = z.object({
    name: z.string().min(2, "İsim en az 2 karakter olmalı"),
    email: z.string().email("Geçerli bir e-posta adresi girin"),
    phone: z.string().min(10, "Geçerli bir telefon numarası girin"),
    budget: z.string().min(1, "Bütçenizi belirtin"),
    message: z.string().min(10, "Mesajınız en az 10 karakter olmalı"),
});

interface PlanningFormDialogProps {
    isOpen: boolean;
    onClose: () => void;
    currentBudget: number;
}

export default function PlanningFormDialog({
    isOpen,
    onClose,
    currentBudget,
}: PlanningFormDialogProps) {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<PlanningForm>({
        resolver: zodResolver(planningSchema),
        defaultValues: {
            budget: `${currentBudget} TL`,
        },
    });

    const onSubmit = async (data: PlanningForm) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Planning form submitted:", data);
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            reset();
            onClose();
        }, 3000);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-navy/70 backdrop-blur-sm animate-fade-in"
                onClick={onClose}
            />

            {/* Dialog */}
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg animate-fade-in-up overflow-hidden">
                {/* Header gradient */}
                <div className="bg-gradient-to-r from-navy to-navy-light p-6">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                    <h2 className="text-xl font-bold text-white font-montserrat">
                        Özel Tatil Planlaması
                    </h2>
                    <p className="text-white/60 text-sm mt-1">
                        Size özel bir tatil rotası oluşturalım. Uzman ekibimiz en kısa sürede dönüş yapacak.
                    </p>
                </div>

                {isSubmitted ? (
                    <div className="p-10 text-center">
                        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Send className="w-8 h-8 text-success" />
                        </div>
                        <h3 className="text-xl font-bold text-navy font-montserrat mb-2">
                            Talebiniz Alındı!
                        </h3>
                        <p className="text-gray-500 text-sm">
                            Uzman ekibimiz en kısa sürede sizinle iletişime geçecek.
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
                        {/* Name */}
                        <div>
                            <label className="flex items-center gap-2 text-sm font-medium text-navy mb-1.5">
                                <User className="w-4 h-4 text-turkuaz" />
                                Adınız Soyadınız
                            </label>
                            <input
                                {...register("name")}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-turkuaz focus:ring-2 focus:ring-turkuaz/20 outline-none transition-all text-sm"
                                placeholder="Adınız Soyadınız"
                            />
                            {errors.name && (
                                <p className="text-danger text-xs mt-1">{errors.name.message}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="flex items-center gap-2 text-sm font-medium text-navy mb-1.5">
                                <Mail className="w-4 h-4 text-turkuaz" />
                                E-posta Adresiniz
                            </label>
                            <input
                                {...register("email")}
                                type="email"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-turkuaz focus:ring-2 focus:ring-turkuaz/20 outline-none transition-all text-sm"
                                placeholder="ornek@email.com"
                            />
                            {errors.email && (
                                <p className="text-danger text-xs mt-1">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="flex items-center gap-2 text-sm font-medium text-navy mb-1.5">
                                <Phone className="w-4 h-4 text-turkuaz" />
                                Telefon
                            </label>
                            <input
                                {...register("phone")}
                                type="tel"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-turkuaz focus:ring-2 focus:ring-turkuaz/20 outline-none transition-all text-sm"
                                placeholder="0 (5XX) XXX XX XX"
                            />
                            {errors.phone && (
                                <p className="text-danger text-xs mt-1">{errors.phone.message}</p>
                            )}
                        </div>

                        {/* Budget */}
                        <div>
                            <label className="flex items-center gap-2 text-sm font-medium text-navy mb-1.5">
                                <Wallet className="w-4 h-4 text-turkuaz" />
                                Bütçeniz
                            </label>
                            <input
                                {...register("budget")}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-turkuaz focus:ring-2 focus:ring-turkuaz/20 outline-none transition-all text-sm"
                                placeholder="Bütçenizi belirtin"
                            />
                            {errors.budget && (
                                <p className="text-danger text-xs mt-1">{errors.budget.message}</p>
                            )}
                        </div>

                        {/* Message */}
                        <div>
                            <label className="flex items-center gap-2 text-sm font-medium text-navy mb-1.5">
                                <MessageSquare className="w-4 h-4 text-turkuaz" />
                                Mesajınız
                            </label>
                            <textarea
                                {...register("message")}
                                rows={3}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-turkuaz focus:ring-2 focus:ring-turkuaz/20 outline-none transition-all text-sm resize-none"
                                placeholder="Tatil beklentilerinizi ve tercihlerinizi yazın..."
                            />
                            {errors.message && (
                                <p className="text-danger text-xs mt-1">{errors.message.message}</p>
                            )}
                        </div>

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
                                    Teklif Talep Et
                                </>
                            )}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
