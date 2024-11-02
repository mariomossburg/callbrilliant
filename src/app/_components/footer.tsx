import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by Brilliant Home Services</p>
      </aside>
    </footer>
  );
}

export default Footer;
