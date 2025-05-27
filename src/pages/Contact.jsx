import PageHeader from "../components/PageHeader";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <main className="w-full h-max overflow-hidden">
      <PageHeader link="/contact" title="Contact Us" />
      <Contact />
    </main>
  );
}
