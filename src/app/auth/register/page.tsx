"use client";

import { useState } from "react";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock, User, Phone, ArrowRight, Plane, Eye, EyeOff } from "lucide-react";

const registerSchema = z.object({
    name: z.string().min(2, "İsim en az 2 karakter olmalı"),
    email: z.string().email("Geçerli bir e-posta adresi girin"),
    phone: z.string().min(10, "Geçerli bir telefon numarası girin"),
    password: z.string().min(6, "Şifre en az 6 karakter olmalı"),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Şifreler eşleşmiyor",
    path: ["confirmPassword"],
});

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<RegisterFormData>({ resolver: zodResolver(registerSchema) });

    const onSubmit = async (data: RegisterFormData) => {
        await new Promise((r) => setTimeout(r, 1000));
        console.log("Register:", data);
        setIsSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-soft-white flex">
            {/* Left Panel */}
            <div className="hidden lg:flex flex-1 hero-gradient items-center justify-center p-12 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-pink/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-turkuaz/5 rounded-full blur-3xl" />
                </div>
                <div className="relative text-center max-w-md">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink to-pink-light flex items-center justify-center mx-auto mb-8 shadow-lg shadow-pink/20">
                        <Plane className="w-8 h-8 text-white -rotate-45" />
                    </div>
                    <h2 className="text-3xl font-bold text-white font-montserrat mb-4">
                        Topluluğa <span className="bg-gradient-to-r from-pink to-pink-light bg-clip-text text-transparent">Katılın</span>
                    </h2>
                    <p className="text-white/50 leading-relaxed">
                        Tatil rotalarınızı paylaşın, yeni rotalar keşfedin ve tatil yaparken para kazanın.
                    </p>
                </div>
            </div>

            {/* Right Panel */}
            <div className="flex-1 flex items-center justify-center p-6 sm:p-12">
                <div className="w-full max-w-md">
                    <div className="mb-8">
                        <Link href="/" className="flex items-center gap-2 mb-8 lg:hidden">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-turkuaz to-turkuaz-light flex items-center justify-center">
                                <Plane className="w-5 h-5 text-white -rotate-45" />
                            </div>
                            <span className="text-lg font-bold text-navy font-montserrat">Tatilva</span>
                        </Link>
                        <h1 className="text-2xl font-bold text-navy font-montserrat mb-2">Kayıt Ol</h1>
                        <p className="text-gray-400 text-sm">Ücretsiz hesap oluşturarak tüm avantajlardan yararlanın.</p>
                    </div>

                    {isSubmitted ? (
                        <div className="text-center py-12 animate-fade-in-up">
                            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <User className="w-8 h-8 text-success" />
                            </div>
                            <h3 className="text-xl font-bold text-navy font-montserrat mb-2">Hesabınız Oluşturuldu!</h3>
                            <p className="text-gray-500 text-sm mb-4">Hoş geldiniz. Profilinizi tamamlayın.</p>
                            <Link href="/profile" className="text-turkuaz font-medium text-sm hover:underline">Profile Git →</Link>
                        </div>
                    ) : (
                        <>
                            {/* Social Signup */}
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 text-sm font-medium text-navy hover:bg-gray-50 transition-colors">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
                                    Google
                                </button>
                                <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 text-sm font-medium text-navy hover:bg-gray-50 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
                                    Apple
                                </button>
                            </div>

                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex-1 h-px bg-gray-200" />
                                <span className="text-xs text-gray-400">veya e-posta ile</span>
                                <div className="flex-1 h-px bg-gray-200" />
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                                        <Lock className="w-3.5 h-3.5 text-turkuaz" /> Şifre
                                    </label>
                                    <div className="relative">
                                        <input {...register("password")} type={showPassword ? "text" : "password"} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-turkuaz focus:ring-2 focus:ring-turkuaz/20 outline-none transition-all text-sm pr-12" placeholder="••••••••" />
                                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-navy transition-colors">
                                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                        </button>
                                    </div>
                                    {errors.password && <p className="text-danger text-xs mt-1">{errors.password.message}</p>}
                                </div>
                                <div>
                                    <label className="flex items-center gap-2 text-sm font-medium text-navy mb-1.5">
                                        <Lock className="w-3.5 h-3.5 text-turkuaz" /> Şifre Tekrar
                                    </label>
                                    <input {...register("confirmPassword")} type="password" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-turkuaz focus:ring-2 focus:ring-turkuaz/20 outline-none transition-all text-sm" placeholder="••••••••" />
                                    {errors.confirmPassword && <p className="text-danger text-xs mt-1">{errors.confirmPassword.message}</p>}
                                </div>

                                <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-turkuaz to-turkuaz-dark text-white py-3.5 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-turkuaz/20 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2">
                                    {isSubmitting ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <>Kayıt Ol <ArrowRight className="w-4 h-4" /></>}
                                </button>
                            </form>

                            <p className="text-center text-sm text-gray-400 mt-6">
                                Zaten hesabınız var mı?{" "}
                                <Link href="/auth/login" className="text-turkuaz font-medium hover:underline">Giriş Yap</Link>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
