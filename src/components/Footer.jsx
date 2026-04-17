import Logo from "../assets/logo.png"; // adjust the path if needed

export default function Footer() {
  return (
    <footer className="border-t py-6 text-center">
      {/* Logo Section */}
      <div className="flex flex-col items-center space-y-2">
        <img
          src={Logo}
          alt="Southwards IELTS"
          className="h-10 w-auto"
        />
        <p className="text-sm font-semibold">Southwards IELTS</p>
      </div>

      {/* Copyright */}
      <p className="mt-4 text-xs md:text-sm text-gray-700">
        COPYRIGHT 2026 | SOUTHWARDS IELTS PVT LTD
      </p>

      {/* Links */}
      <div className="mt-2 space-x-2 text-sm">
        <a href="/privacy" className="text-gray-700 hover:underline">
          Privacy Policy
        </a>
        <span>|</span>
        <a href="/terms" className="text-gray-700 hover:underline">
          Terms And Conditions
        </a>
        <span>|</span>
        <a href="/refund" className="text-gray-700 hover:underline">
          Refund Policy
        </a>
        <span>&</span>
        <a href="/contact" className="text-gray-700 hover:underline">
          Contact Us
        </a>
      </div>
    </footer>
  );
}
