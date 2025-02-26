import Header from "~/components/Header";
import type { Route } from "./+types/home";
import HeroSection from "~/sections/HeroSection";
import NewsSection from "~/sections/NewsSection";
import Footer from "~/components/Footer";
// import "./home.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <NewsSection />
      {/* 他のセクションを追加したい場合は、同様にコンポーネントをここに配置 */}
      <Footer />
    </div>
  );
}
