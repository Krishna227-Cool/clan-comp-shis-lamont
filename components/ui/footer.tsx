import Logo from './logo';

export default function Footer() {
  return (
    <footer className="bg-gray-100" id = "contac">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          {/* Company details */}
          <div className="md:w-1/2">
            <Logo />
            <address className="mt-4 text-sm text-gray-600">
              <p>Krishna Sapru</p>
              <p>Clan - Lamont</p>
              <p>School Address - Scottish High International Block, Sector 57,</p>
              <p>Gurugram, Haryana 122011</p>
            </address>
          </div>

          {/* Copyright and credits */}
          <div className="mt-4 md:mt-0 text-sm text-gray-600">
            <p>Information sourced from ChatGPT.</p>
            <p>Website designed using Tailwind CSS and ReactJS.</p>
          </div>

        </div>
      </div>
    </footer>
  );
}
