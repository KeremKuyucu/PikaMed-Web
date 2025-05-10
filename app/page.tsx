import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, MessageCircle, Smartphone, Droplet, Activity, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="PikaMed Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
            <span className="text-xl font-bold text-primary">PikaMed</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Özellikler
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
              Nasıl Çalışır
            </Link>
            <Link href="#benefits" className="text-sm font-medium hover:text-primary">
              Faydalar
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              Hakkımızda
            </Link>
          </nav>
          <Button className="hidden md:flex">
            İndir
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Tip 1 Diyabet Yönetimi İçin Yapay Zeka Destekli Çözüm
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    PikaMed, diyabet hastalarının tedavi süreçlerini daha güvenli, etkili ve kişiselleştirilmiş hale
                    getiren yapay zeka destekli bir mobil sağlık uygulamasıdır.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-primary text-white">
                    Hemen İndir
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Daha Fazla Bilgi
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-[280px] h-[580px] md:w-[320px] md:h-[650px] rounded-[40px] border-8 border-gray-800 bg-gray-800 shadow-xl">
                  <div className="absolute top-0 inset-x-0 h-6 bg-gray-800 rounded-t-2xl"></div>
                  <div className="absolute top-0 inset-x-0 h-6 flex justify-center items-center">
                    <div className="w-20 h-4 bg-gray-800 rounded-b-xl"></div>
                  </div>
                  <div className="h-full w-full rounded-3xl overflow-hidden bg-white">
                    <Image
                      src="/placeholder.svg?height=650&width=320"
                      alt="PikaMed App Screenshot"
                      width={320}
                      height={650}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-2 inset-x-0 flex justify-center">
                    <div className="w-24 h-1 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Özellikler
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  PikaMed ile Diyabet Yönetimi Kolaylaşır
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Yapay zeka destekli uygulamamız, diyabet hastaları için kişiselleştirilmiş çözümler sunar.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Activity className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Kişiselleştirilmiş İnsülin Önerileri</h3>
                <p className="text-center text-gray-500">
                  Yaş, kilo, boy ve aktivite seviyenize göre kişiselleştirilmiş insülin doz önerileri alın.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Droplet className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Su Tüketimi Takibi</h3>
                <p className="text-center text-gray-500">
                  Günlük su tüketiminizi takip edin ve sağlıklı hidrasyon için hatırlatmalar alın.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Yapay Zeka Sohbet Robotu</h3>
                <p className="text-center text-gray-500">
                  İnsülin enjeksiyonu ve diyabet yönetimi hakkında sorularınızı yapay zeka asistanına sorun.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Doktor-Hasta İletişimi</h3>
                <p className="text-center text-gray-500">
                  Doktorunuz ile verilerinizi paylaşın ve tedavi sürecinizi birlikte yönetin.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Mobil Erişim</h3>
                <p className="text-center text-gray-500">
                  İster evde ister dışarıda, her an her yerden sağlık verilerinize erişin.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Sağlıklı Yaşam Önerileri</h3>
                <p className="text-center text-gray-500">
                  Diyabet yönetimini destekleyen sağlıklı yaşam alışkanlıkları için öneriler alın.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Nasıl Çalışır
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  PikaMed ile Diyabet Yönetimi
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Uygulamamız, yapay zeka teknolojisi ile kişisel verilerinizi analiz ederek size özel çözümler sunar.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold">Kişisel Bilgilerinizi Girin</h3>
                <p className="text-center text-gray-500">
                  Yaş, kilo, boy ve günlük aktivite seviyeniz gibi bilgileri uygulamaya girin.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold">Yapay Zeka Analizi</h3>
                <p className="text-center text-gray-500">
                  Yapay zeka sistemi verilerinizi analiz ederek size özel öneriler oluşturur.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold">Kişiselleştirilmiş Yönetim</h3>
                <p className="text-center text-gray-500">
                  İnsülin dozları, su tüketimi ve sağlıklı yaşam önerilerini takip edin.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Faydalar
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Neden PikaMed?</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    PikaMed, diyabet yönetiminde bireysel verilerin yapay zeka ile entegre edilerek hem sağlık takibinin
                    optimize edilmesi hem de hasta-doktor iletişiminin dijitalleştirilmesiyle fark yaratır.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Kişiselleştirilmiş insülin doz önerileri</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Doktor-hasta iletişimini güçlendiren dijital platform</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Yapay zeka destekli sohbet robotu ile anlık destek</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Su tüketimi ve sağlıklı yaşam alışkanlıkları takibi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Kullanıcı dostu arayüz ve kolay kullanım</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="PikaMed Benefits"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="about" className="py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Ekibimiz
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Marul Tarlası Takımı</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Bilecik Deneyap Atölyesi bünyesinde oluşturulan ekibimiz, diyabet hastalarının yaşam kalitesini
                  artırmak için çalışıyor.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 mt-12">
              <div className="flex flex-col items-center space-y-2">
                <div className="relative h-24 w-24 overflow-hidden rounded-full">
                  <Image src="/placeholder.svg?height=96&width=96" alt="Kerem Kuyucu" fill className="object-cover" />
                </div>
                <h3 className="text-lg font-bold">Kerem Kuyucu</h3>
                <p className="text-sm text-gray-500">Takım Kaptanı</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="relative h-24 w-24 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Seyit Ahmet Özçalık"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold">Seyit Ahmet Özçalık</h3>
                <p className="text-sm text-gray-500">Takım Üyesi</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="relative h-24 w-24 overflow-hidden rounded-full">
                  <Image src="/placeholder.svg?height=96&width=96" alt="Defne Aydın" fill className="object-cover" />
                </div>
                <h3 className="text-lg font-bold">Defne Aydın</h3>
                <p className="text-sm text-gray-500">Takım Üyesi</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="relative h-24 w-24 overflow-hidden rounded-full">
                  <Image src="/placeholder.svg?height=96&width=96" alt="Elif Er" fill className="object-cover" />
                </div>
                <h3 className="text-lg font-bold">Elif Er</h3>
                <p className="text-sm text-gray-500">Takım Üyesi</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="relative h-24 w-24 overflow-hidden rounded-full">
                  <Image src="/placeholder.svg?height=96&width=96" alt="Aylin İşler" fill className="object-cover" />
                </div>
                <h3 className="text-lg font-bold">Aylin İşler</h3>
                <p className="text-sm text-gray-500">Takım Üyesi</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Diyabet Yönetiminde Yeni Bir Dönem
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  PikaMed ile diyabet yönetimini kolaylaştırın, sağlıklı bir yaşam için adım atın.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  Hemen İndir
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-primary-foreground/10">
                  Daha Fazla Bilgi
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="PikaMed Logo"
                width={40}
                height={40}
                className="rounded-md"
              />
              <span className="text-xl font-bold text-primary">PikaMed</span>
            </div>
            <p className="text-sm text-gray-500">© 2025 PikaMed. Tüm hakları saklıdır.</p>
          </div>
          <nav className="flex flex-wrap gap-4 md:gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Özellikler
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
              Nasıl Çalışır
            </Link>
            <Link href="#benefits" className="text-sm font-medium hover:text-primary">
              Faydalar
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              Hakkımızda
            </Link>
          </nav>
          <div className="flex gap-4">
            <Link href="#" className="rounded-full p-2 hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="rounded-full p-2 hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="rounded-full p-2 hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
