import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Linkedin } from "lucide-react";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tatilva — Akıllı Tatil Asistanınız | Lixora Media",
  description:
    "Bütçenize göre akıllı tatil önerileri, otel karşılaştırmaları ve kişiselleştirilmiş rota planlama. Tatilva ile hayalinizdeki tatile bir tık uzakta.",
  keywords: ["tatil", "otel", "rota planlama", "bütçe tatil", "akıllı tatil asistanı", "Türkiye tatil"],
  openGraph: {
    title: "Tatilva — Akıllı Tatil Asistanınız",
    description: "Bütçenize göre akıllı tatil önerileri ve kişiselleştirilmiş rota planlama.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${montserrat.variable} ${inter.variable} antialiased`}>
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 sm:h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center group">
                <img
                  src="/tatilva-beyaz.png"
                  alt="Tatilva Logo"
                  className="h-8 sm:h-9 w-auto object-contain group-hover:opacity-90 transition-opacity"
                />
              </Link>

              {/* Navigation */}
              <nav className="hidden md:flex items-center gap-8">
                <Link
                  href="/"
                  className="text-sm text-white/70 hover:text-turkuaz-light transition-colors font-medium"
                >
                  Ana Sayfa
                </Link>
                <Link
                  href="#destinations"
                  className="text-sm text-white/70 hover:text-turkuaz-light transition-colors font-medium"
                >
                  Destinasyonlar
                </Link>
                <Link
                  href="#filters"
                  className="text-sm text-white/70 hover:text-turkuaz-light transition-colors font-medium"
                >
                  Bütçe Planlama
                </Link>
                <Link
                  href="/earn"
                  className="text-sm text-white/70 hover:text-turkuaz-light transition-colors font-medium"
                >
                  Para Kazan
                </Link>
                <Link
                  href="/profile"
                  className="text-sm text-white/70 hover:text-turkuaz-light transition-colors font-medium"
                >
                  Profil
                </Link>
              </nav>

              {/* CTA */}
              <div className="flex items-center gap-3">
                <Link
                  href="/auth/login"
                  className="hidden sm:flex items-center gap-1.5 text-sm text-white/60 hover:text-turkuaz-light transition-colors font-medium"
                >
                  Giriş Yap
                </Link>
                <Link
                  href="#filters"
                  className="bg-gradient-to-r from-turkuaz to-turkuaz-dark text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold hover:shadow-lg hover:shadow-turkuaz/20 transition-all duration-300"
                >
                  Tatil Planla
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="pt-16 sm:pt-20">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-navy border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-16">
              {/* Brand */}
              <div className="md:col-span-1">
                <div className="mb-4">
                  <img
                    src="/tatilva-beyaz.png"
                    alt="Tatilva Logo"
                    className="h-9 w-auto object-contain"
                  />
                </div>
                <p className="text-sm text-white/40 leading-relaxed">
                  Bütçenize göre en uygun tatil rotalarını ve otel seçeneklerini sizin için
                  bulan akıllı tatil planlama platformu.
                </p>
                {/* Social */}
                <div className="flex gap-3 mt-5">
                  <a href="https://www.instagram.com/tatilva/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:bg-turkuaz/20 hover:text-turkuaz transition-all">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="https://www.linkedin.com/company/lixora-media/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:bg-turkuaz/20 hover:text-turkuaz transition-all">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-4 font-montserrat">Hızlı Linkler</h4>
                <ul className="space-y-2.5">
                  {["Ana Sayfa", "Destinasyonlar", "Bütçe Planlama", "Hakkımızda", "İletişim"].map((item) => (
                    <li key={item}>
                      <Link href="#" className="text-sm text-white/40 hover:text-turkuaz-light transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Destinations */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-4 font-montserrat">Popüler Rotalar</h4>
                <ul className="space-y-2.5">
                  {["Antalya Tatili", "Bodrum Tatili", "Kapadokya Turu", "Bursa & Uludağ", "Fethiye Tatili"].map((item) => (
                    <li key={item}>
                      <Link href="#" className="text-sm text-white/40 hover:text-turkuaz-light transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-4 font-montserrat">İletişim</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2.5 text-sm text-white/40">
                    <MapPin className="w-4 h-4 text-turkuaz shrink-0" />
                    <span>Nilüfer, Bursa, Türkiye</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-sm text-white/40">
                    <Phone className="w-4 h-4 text-turkuaz shrink-0" />
                    <span>0531 297 00 16</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-sm text-white/40">
                    <Mail className="w-4 h-4 text-turkuaz shrink-0" />
                    <span>info@tatilva.com</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-white/30">
                © 2026 Tatilva. Tüm hakları saklıdır. Bir{" "}
                <span className="text-turkuaz/60 font-medium">Lixora Media</span> projesidir.
              </p>
              <div className="flex gap-4 text-xs text-white/30">
                <Link href="#" className="hover:text-turkuaz-light transition-colors">Gizlilik Politikası</Link>
                <Link href="#" className="hover:text-turkuaz-light transition-colors">Kullanım Koşulları</Link>
                <Link href="#" className="hover:text-turkuaz-light transition-colors">KVKK</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
