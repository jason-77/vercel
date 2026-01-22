export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* HEADER */}
      <header className="flex justify-between items-center px-10 py-6 border-b border-white/10">
        <h1 className="text-xl font-bold tracking-wide">MD LABS</h1>
        <nav className="flex gap-8 text-sm text-white/80">
          <a href="/platform" className="hover:text-white">Platform</a>
          <a href="/ev" className="hover:text-white">EV Diagnostics</a>
          <a href="/shop" className="hover:text-white">Products</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="px-10 py-32 max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold leading-tight mb-8">
          Automotive Data Intelligence<br />
          & Diagnostics
        </h2>

        <p className="text-white/70 text-lg max-w-3xl mb-12">
          MD Labs는 차량 사고·자율주행 데이터의 분석, 재현, 검증 솔루션과<br />
          차량 진단 기술을 제공하는 모빌리티 데이터 전문 기업입니다.
        </p>

        <div className="flex gap-4">
          <a
            href="/platform"
            className="px-6 py-3 bg-white text-black font-medium rounded hover:bg-gray-200"
          >
            Platform
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border border-white/30 rounded hover:bg-white/10"
          >
            Contact
          </a>
        </div>
      </section>

      {/* PLATFORM */}
      <section className="px-10 py-24 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">Platform</h3>

          <p className="text-white/70 max-w-3xl mb-12">
            사고기록장치(EDR), 차량 ECU 데이터, 영상 자료를<br />
            하나의 분석 흐름으로 통합하여<br />
            사고 상황을 구조적으로 재현합니다.
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <li className="border border-white/10 p-6 rounded">
              Vehicle Data Acquisition<br />
              <span className="text-white/50">EDR · ECU · Log</span>
            </li>
            <li className="border border-white/10 p-6 rounded">
              Accident Reconstruction<br />
              <span className="text-white/50">Time-series · Scenario</span>
            </li>
            <li className="border border-white/10 p-6 rounded">
              Evidence-oriented Analysis<br />
              <span className="text-white/50">Forensics · Insurance</span>
            </li>
          </ul>
        </div>
      </section>

      {/* EV */}
      <section className="px-10 py-24">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">EV Diagnostics</h3>

          <p className="text-white/70 max-w-3xl">
            전기차 및 하이브리드 차량의 배터리, ECU, 이벤트 데이터를 기반으로<br />
            차량 상태와 이상 징후를 정밀 분석합니다.<br />
            본 플랫폼은 사고 분석, 결함 검증, 기술 검토 목적에 적용됩니다.
          </p>
        </div>
      </section>

      {/* SHOP */}
      <section className="px-10 py-24 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">Products</h3>

          <p className="text-white/70 max-w-3xl mb-6">
            MD Labs는 데이터 추출 장비, 분석 소프트웨어,<br />
            라이선스 기반 플랫폼을 제공합니다.
          </p>

          <p className="text-sm text-white/50">
            상세 구성은 별도 문의 바랍니다.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-10 py-12 border-t border-white/10 text-sm text-white/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-4">
          <p>© 2026 MD Labs Inc. All rights reserved.</p>
          <p>Contact: contact@md-labs.co.kr</p>
        </div>
      </footer>
    </div>
  );
}
