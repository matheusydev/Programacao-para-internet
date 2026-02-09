import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
              <path
                d="M20 4C15.5817 4 12 7.58172 12 12C12 17 20 28 20 28C20 28 28 17 28 12C28 7.58172 24.4183 4 20 4Z"
                fill="#2563EB"
                stroke="#2563EB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <ellipse cx="20" cy="12" rx="2" ry="2.5" fill="white" />
              <ellipse cx="17" cy="10" rx="1.5" ry="2" fill="white" />
              <ellipse cx="23" cy="10" rx="1.5" ry="2" fill="white" />
              <ellipse cx="18" cy="14" rx="1.2" ry="1.8" fill="white" />
              <ellipse cx="22" cy="14" rx="1.2" ry="1.8" fill="white" />
            </svg>
            <span className="text-gray-600">
              © 2026 AdotaPet. Todos os direitos reservados.
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>para conectar pets e famílias</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
