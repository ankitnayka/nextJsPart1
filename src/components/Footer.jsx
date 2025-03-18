"use client";

function Footer() {
  return (
    <footer class="bg-gray-900 text-white py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h2 class="text-xl font-bold">Musically...</h2>
            <p class="mt-2 text-gray-400">
              Providing quality services since 1999
            </p>
          </div>

          <div>
            <h2 class="text-xl font-bold">Quick Links</h2>
            <ul class="mt-2 space-y-2">
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 class="text-xl font-bold">Follow Us</h2>
            <div class="mt-2 flex justify-center md:justify-start space-x-4">
              <a href="#" class="text-gray-400 hover:text-white"></a>
              <a href="#" class="text-gray-400 hover:text-white"></a>
              <a href="#" class="text-gray-400 hover:text-white"></a>
              <a href="#" class="text-gray-400 hover:text-white"></a>
            </div>
          </div>
        </div>

        <div class="mt-8 text-center border-t border-gray-700 pt-4">
          <p class="text-gray-400">2025 . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
