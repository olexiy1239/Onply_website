export default function Footer() {
    return (
      <footer className="mt-24 border-t border-white/10">
        <div className="container py-10 grid gap-6 md:grid-cols-4">
          <div>
            <div className="text-xl font-semibold mb-2"><span className="bg-[linear-gradient(90deg,#FF5CA8,#A066FF)] bg-clip-text text-transparent">ONPLY</span></div>
            <p className="text-textSecondary">AI-powered music mixes & social discovery.</p>
          </div>
          <div>
            <h4 className="mb-2 text-white/90">Product</h4>
            <ul className="space-y-1 text-textSecondary">
              <li><a href="#features">Features</a></li>
              <li><a href="#demo">Demo</a></li>
              <li><a href="#roadmap">Roadmap</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 text-white/90">Company</h4>
            <ul className="space-y-1 text-textSecondary">
              <li><a href="#team">Team</a></li>
              <li><a href="/privacy">Privacy</a></li>
              <li><a href="/terms">Terms</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 text-white/90">Contact</h4>
            <p className="text-textSecondary">olexiy.velykyi@gmail.com</p>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="container py-4 text-xs text-textSecondary">© {new Date().getFullYear()} ONPLY. All rights reserved.</div>
        </div>
      </footer>
    );
  }
  