import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-secondaryBackground py-10 rounded-b-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white">LitWords</h2>
          <p className="mt-2 text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <div className="flex items-center mt-4 space-x-3">
            <InstagramIcon className="text-blue-500 h-6 w-6" />
            <span className="text-white">Instagram</span>
            <XIcon className="text-white h-4 w-4" />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Links</h3>
          <nav className="mt-4">
            <ul className="space-y-2">
              <li>
                <Link href="#" passHref>
                  <p className="text-white hover:text-gray-800">About Me</p>
                </Link>
              </li>
              <li>
                <Link href="#" passHref>
                  <p className="text-white hover:text-gray-800">Contact</p>
                </Link>
              </li>
              <li>
                <Link href="#" passHref>
                  <p className="text-white hover:text-gray-800">Blog</p>
                </Link>
              </li>
              <li>
                <Link href="#" passHref>
                  <p className="text-white hover:text-gray-800">Services</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Categories</h3>
          <nav className="mt-4">
            <ul className="space-y-2">
              <li>
                <Link href="#" passHref>
                  <p className="text-white hover:text-gray-800">Health</p>
                </Link>
              </li>
              <li>
                <Link href="#" passHref>
                  <p className="text-white hover:text-gray-800">Music</p>
                </Link>
              </li>
              <li>
                <Link href="#" passHref>
                  <p className="text-white hover:text-gray-800">Travel</p>
                </Link>
              </li>
              <li>
                <Link href="#" passHref>
                  <p className="text-white hover:text-gray-800">Lifestyle</p>
                </Link>
              </li>
              <li>
                <Link href="#" passHref>
                  <p className="text-white hover:text-gray-800">Technology</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Address</h3>
          <address className="mt-4 not-italic">
            <p className="text-white">Dieter Wellhausen, D-11179 Berlin</p>
            <p className="text-white">+49 241 241</p>
            <p className="text-white">demo@rivaxstudio.com</p>
          </address>
        </div>
      </div>
      <div className="border-t mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-white text-sm">Copyright © 2023 Litwords. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
