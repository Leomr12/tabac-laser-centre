import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import FeatureCard from "../components/FeatureCard";
import ArgumentCard from "../components/ArgumentCard";
import { Award, Shield, UserCheck, Smile, Heart, Check, Activity, Coins, Sun, Users } from "lucide-react";
import CookieBanner from "../components/CookieBanner";
import ScrollingBanner from "../components/ScrollingBanner";

const Index = () => {
  return (
    <div>
      <Helmet>
        <title>Arrêter de fumer en 1 séance - Centre Tabac Laser | Anti-Tabac</title>
        <meta
          name="description"
          content="Votre sevrage tabagique en une séance au Laser avec Centre-Tabac Laser !"
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <CookieBanner />

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-primary text-white py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Arrêter de fumer en 1 Séance
              </h1>
              <p className="text-xl mb-8">
                Dites Stop au Tabac et Arrêtez de fumer en 1 Séance
              </p>
              <SearchBar />
            </div>
          </section>

          <ScrollingBanner />

          {/* Main Content */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-6">
                    Votre sevrage tabagique dans nos Centres Tabac Laser
                  </h2>
                  <p className="text-gray-700 mb-8">
                    Arrêter de fumer peut sembler difficile, mais grâce à la méthode de <b>sevrage tabagique au laser</b>, cela devient plus simple et accessible. Cette technique innovante <b>aide les fumeurs à réduire leur dépendance</b> à la nicotine de manière naturelle, sans médicaments ni substituts chimiques. Si vous cherchez une solution rapide, indolore et durable pour en finir avec la cigarette, <b>le sevrage tabagique au laser est une excellente option</b>. Prenez rendez-vous dans nos Centres Tabac Laser
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <ArgumentCard icon={Award} title="Méthode connue et reconnue" />
                    <ArgumentCard icon={Shield} title="Garantie de 12 mois en cas de rechute" />
                    <ArgumentCard icon={UserCheck} title="Praticiens certifiés à votre écoute" />
                    <ArgumentCard icon={Smile} title="Toutes nos séances sont sans douleurs" />
                    <ArgumentCard icon={Heart} title="Sans effets secondaires et prise de poids" />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <img
                    src="/Sevrage-tabagique-Arret-Tabac.png"
                    alt="Sevrage tabagique - Stop Tabac Laser - Centre Tabac Laser"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Method Section */}
          <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-6">
                    Qu'est-ce que le sevrage tabagique au laser ?
                  </h3>
                  <p className="text-gray-700 mb-8">
                    Le <b>sevrage tabagique au laser</b> repose sur le principe de <b>l'auriculothérapie</b>, une méthode inspirée de l'acupuncture. Cette technique utilise un faisceau laser doux pour stimuler des points spécifiques situés principalement sur l'oreille et le visage. En agissant sur ces points, <b>le laser aide à réduire l'envie de fumer</b>, diminue les symptômes de manque et favorise un état de relaxation profonde. Contrairement à d'autres approches, cette méthode est non invasive et parfaitement indolore.
                  <br /><br />
                  Vous souhaitez franchir le pas et dire adieu à la cigarette ? <b>Prenez rendez-vous</b> dès aujourd'hui dans l'un de nos Centres Tabac Laser. Nous vous accompagnerons pour retrouver une vie plus saine et équilibrée. Faites le premier pas vers une nouvelle liberté !</p>
                  <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors">
                    <a href="/rendez-vous">Prendre rendez-vous</a>
                  </button>
                </div>
                <div className="md:w-1/2">
                  <img
                    src="/Sevrage-tabagique-Stop-Tabac.png"
                    alt="Sevrage Tabagique - Séance anti-tabac laser"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <FeatureCard title="Efficacité prouvée" />
                <FeatureCard title="Solution naturelle" />
                <FeatureCard title="Rapidité" />
                <FeatureCard title="Confort et bien-être" />
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-primary text-white py-16">
            <div className="container mx-auto px-4 text-center">
              <p className="text-xl mb-8">
                Rejoignez des milliers d'anciens fumeurs libérés de la cigarette grâce au sevrage tabagique laser.
              </p>
              <button className="bg-white text-primary px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
                <a href="/rendez-vous">Prendre rendez-vous</a>
              </button>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Pourquoi arrêter de fumer ?
              </h2>
              <div className="flex flex-col space-y-4 max-w-2xl mx-auto">
                <ArgumentCard icon={Activity} title="Amélioration de la santé" />
                <ArgumentCard icon={Coins} title="Économies financières" />
                <ArgumentCard icon={Sun} title="Meilleure qualité de vie" />
                <ArgumentCard icon={Heart} title="Prévention des maladies respiratoires" />
                <ArgumentCard icon={Users} title="Impact positif sur votre entourage" />
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-6">
                    Comment fonctionne une séance de sevrage tabagique au laser ?
                  </h2>
                  <p className="text-gray-700 mb-8">
                    Une <b>séance de sevrage tabagique au laser</b> débute par un entretien personnalisé avec un praticien. Cet échange permet de mieux comprendre vos <b>habitudes de consommation</b>, vos déclencheurs liés au <b>tabac</b> et votre niveau de motivation pour <b>arrêter de fumer</b>. Cette étape est essentielle pour adapter la séance à vos besoins spécifiques et maximiser vos chances de succès.
                  <br /><br />
                  Une fois l'évaluation réalisée, le praticien procède à l'application du laser de faible intensité. Ce faisceau doux est dirigé vers des points stratégiques situés sur l'oreille, le visage, les mains ou les pieds. Ces points sont sélectionnés en fonction de leur rôle dans la <b>diminution des envies de fumer</b>, la gestion du stress et le rétablissement de l'équilibre énergétique du corps. La séance, totalement indolore et relaxante, dure entre 30 et 60 minutes. Vous en ressortirez avec une sensation de calme et une réduction notable de l'envie de consommer du tabac.</p>
                  <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors">
                    <a href="/rendez-vous">Prendre rendez-vous</a>
                  </button>
                </div>
                <div className="md:w-1/2">
                  <img
                    src="/Seance-anti-tabac-laser-sevrage.png"
                    alt="Séance anti-tabac au laser sevrage tabac"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
