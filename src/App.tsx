import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [seriesTab, setSeriesTab] = useState<'adultos' | 'cadetes'>('adultos');
  const [fixtureTab, setFixtureTab] = useState<'adultos' | 'cadetes'>('adultos');

  const seriesAdultas = [
    { name: 'Serie de Honor', badge: 'PRIMERA LÍNEA', badgeColor: 'bg-amber-500', image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=500&fit=crop' },
    { name: 'Serie 35', badge: 'SENIORS', badgeColor: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=500&fit=crop' },
    { name: 'Serie 45', badge: 'SUPER SENIORS', badgeColor: 'bg-purple-600', image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&h=500&fit=crop' },
    { name: 'Serie Segunda Adulta', badge: 'SEGUNDA', badgeColor: 'bg-red-600', image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&h=500&fit=crop' },
    { name: 'Serie Tercera Adulta', badge: 'TERCERA', badgeColor: 'bg-red-600', image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&h=500&fit=crop' },
    { name: 'Serie Femenina', badge: 'RAMA FEMENINA', badgeColor: 'bg-pink-600', image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=500&fit=crop' },
  ];

  const seriesCadetes = [
    { name: 'Serie Primera Cadetes', badge: 'SUB-18', badgeColor: 'bg-red-600', image: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=800&h=500&fit=crop' },
    { name: 'Serie Segunda Cadetes', badge: 'SUB-16', badgeColor: 'bg-orange-600', image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=500&fit=crop' },
    { name: 'Serie Tercera Cadetes', badge: 'INFANTIL', badgeColor: 'bg-yellow-600', image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&h=500&fit=crop' },
  ];

  const fixtureAdultos = [
    { fecha: 1, local: true, rival: 'Estrella' },
    { fecha: 2, local: false, rival: 'La Peña' },
    { fecha: 3, local: true, rival: 'El Mirador' },
    { fecha: 4, local: false, rival: 'Tricolor' },
    { fecha: 5, local: true, rival: 'Los Pinos' },
    { fecha: 6, local: true, rival: 'Independiente' },
    { fecha: 7, local: false, rival: 'Magallanes' },
    { fecha: 8, local: true, rival: 'Pueblo Nuevo' },
    { fecha: 9, local: false, rival: 'A. Cambiaso' },
  ];

  const fixtureCadetes = [
    { fecha: 1, local: true, rival: 'San Juan' },
    { fecha: 2, local: false, rival: 'Los Pinos' },
    { fecha: 3, local: true, rival: 'La Portada' },
    { fecha: 4, local: false, rival: 'San Ramón' },
    { fecha: 5, local: true, rival: 'J. Guzmán M.' },
    { fecha: 6, local: false, rival: 'Pachacama' },
    { fecha: 7, local: true, rival: 'Santa Sofía' },
    { fecha: 8, local: true, rival: 'La Peña' },
    { fecha: 9, local: false, rival: 'Argentina' },
  ];

  return (
    <div className="min-h-screen bg-[#080c14] text-white overflow-x-hidden">
      {/* Stadium Glow Background */}
      <div className="fixed inset-0 stadium-glow pointer-events-none z-0"></div>

      {/* NAVBAR FLOTANTE */}
      <nav className="sticky top-4 z-50 max-w-6xl mx-auto px-4">
        <div className="glass-nav rounded-full px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center font-bebas text-xl font-bold border-2 border-red-400/50">
              SJ
            </div>
            <span className="hidden sm:block font-bebas text-lg tracking-wider text-white/90">C.D. SAN JOSÉ</span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#series" className="text-sm font-semibold text-white/70 hover:text-red-400 transition-colors uppercase tracking-wider">Series</a>
            <a href="#fixture" className="text-sm font-semibold text-white/70 hover:text-red-400 transition-colors uppercase tracking-wider">Fixture</a>
            <a href="#identidad" className="text-sm font-semibold text-white/70 hover:text-red-400 transition-colors uppercase tracking-wider">Club</a>
            <a href="#contacto" className="text-sm font-semibold text-white/70 hover:text-red-400 transition-colors uppercase tracking-wider">Contacto</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#fixture" className="btn-sport-solid text-xs">
              <i className="fas fa-calendar-alt mr-2"></i>Próximo Partido
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 glass-nav rounded-2xl p-6 flex flex-col gap-4 animate-in">
            <a href="#series" className="text-sm font-semibold text-white/80 hover:text-red-400 transition-colors uppercase tracking-wider py-2" onClick={() => setMobileMenuOpen(false)}>
              <i className="fas fa-users mr-2"></i>Series
            </a>
            <a href="#fixture" className="text-sm font-semibold text-white/80 hover:text-red-400 transition-colors uppercase tracking-wider py-2" onClick={() => setMobileMenuOpen(false)}>
              <i className="fas fa-calendar-alt mr-2"></i>Fixture
            </a>
            <a href="#identidad" className="text-sm font-semibold text-white/80 hover:text-red-400 transition-colors uppercase tracking-wider py-2" onClick={() => setMobileMenuOpen(false)}>
              <i className="fas fa-shield-alt mr-2"></i>Club
            </a>
            <a href="#contacto" className="text-sm font-semibold text-white/80 hover:text-red-400 transition-colors uppercase tracking-wider py-2" onClick={() => setMobileMenuOpen(false)}>
              <i className="fas fa-map-marker-alt mr-2"></i>Contacto
            </a>
            <a href="#fixture" className="btn-sport-solid text-xs text-center mt-2" onClick={() => setMobileMenuOpen(false)}>
              <i className="fas fa-calendar-alt mr-2"></i>Próximo Partido
            </a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative z-10 pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse-slow"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-white/80">
              Campeonato Oficial Clausura 2026 | Asociación Hijuelas
            </span>
          </div>

          {/* Title */}
          <h1 className="font-bebas text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none mb-4 gradient-text">
            CLUB DEPORTIVO<br />SAN JOSÉ DE HUALCAPO
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/60 font-light italic max-w-2xl mx-auto mb-10">
            "Con esfuerzo y perseverancia construyendo futuro"
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="#series" className="btn-sport-solid text-sm">
              <i className="fas fa-users mr-2"></i>Ver Nuestras Series
            </a>
            <a href="#fixture" className="btn-sport-outline text-sm">
              <i className="fas fa-calendar mr-2"></i>Ver Fixture 2026
            </a>
          </div>

          {/* Stats Bar */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="font-bebas text-4xl sm:text-5xl text-red-500">9</div>
                <div className="text-xs sm:text-sm text-white/60 uppercase tracking-wider font-semibold mt-1">Series en Competencia</div>
              </div>
              <div className="text-center">
                <div className="font-bebas text-4xl sm:text-5xl text-red-500">+180</div>
                <div className="text-xs sm:text-sm text-white/60 uppercase tracking-wider font-semibold mt-1">Jugadores Activos</div>
              </div>
              <div className="text-center">
                <div className="font-bebas text-4xl sm:text-5xl text-red-500">2</div>
                <div className="text-xs sm:text-sm text-white/60 uppercase tracking-wider font-semibold mt-1">Ramas (Adultos & Jr.)</div>
              </div>
              <div className="text-center">
                <div className="font-bebas text-4xl sm:text-5xl text-red-500">1</div>
                <div className="text-xs sm:text-sm text-white/60 uppercase tracking-wider font-semibold mt-1">Pasión Hualcapina</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN NUESTRAS SERIES */}
      <section id="series" className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="font-bebas text-4xl sm:text-6xl text-white mb-3">NUESTRAS SERIES</h2>
            <p className="text-white/50 text-sm uppercase tracking-widest">9 series compitiendo con orgullo</p>
          </div>

          {/* Tab Switcher */}
          <div className="flex justify-center mb-10">
            <div className="glass-card rounded-full p-1.5 flex gap-1">
              <button
                onClick={() => setSeriesTab('adultos')}
                className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${seriesTab === 'adultos' ? 'tab-active' : 'tab-inactive'}`}
              >
                <i className="fas fa-futbol mr-2"></i>Rama Adulta (6 Series)
              </button>
              <button
                onClick={() => setSeriesTab('cadetes')}
                className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${seriesTab === 'cadetes' ? 'tab-active' : 'tab-inactive'}`}
              >
                <i className="fas fa-child mr-2"></i>Sanjo Jr. (3 Series)
              </button>
            </div>
          </div>

          {/* Series Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(seriesTab === 'adultos' ? seriesAdultas : seriesCadetes).map((serie, index) => (
              <div key={`${seriesTab}-${index}`} className="fut-card group cursor-pointer">
                <img
                  src={serie.image}
                  alt={serie.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <span className={`inline-block ${serie.badgeColor} text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2`}>
                    {serie.badge}
                  </span>
                  <h3 className="font-bebas text-2xl sm:text-3xl text-white leading-tight">{serie.name}</h3>
                  <p className="text-white/60 text-xs mt-1 uppercase tracking-wider">Asociación Hijuelas 2026</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN MATCHDAY CENTER - FIXTURE */}
      <section id="fixture" className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="font-bebas text-4xl sm:text-6xl text-white mb-3">MATCHDAY CENTER</h2>
            <p className="text-white/50 text-sm uppercase tracking-widest">Fixture Clausura 2026</p>
          </div>

          {/* Próximo Partido - Tarjeta Principal */}
          <div className="glass-card rounded-2xl p-6 sm:p-10 mb-12 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
            
            <div className="text-center mb-6">
              <span className="inline-block bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full animate-pulse-slow">
                <i className="fas fa-broadcast-tower mr-1"></i> PRÓXIMO PARTIDO
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
              {/* Local */}
              <div className="text-center flex-1">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-gradient-to-br from-red-600 to-red-900 flex items-center justify-center font-bebas text-3xl sm:text-4xl font-bold border-3 border-red-400/50 mb-3">
                  SJ
                </div>
                <h3 className="font-bebas text-2xl sm:text-3xl text-white">SAN JOSÉ</h3>
                <span className="text-green-400 text-xs font-bold uppercase tracking-wider">Local</span>
              </div>

              {/* VS */}
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-slate-800/80 border-2 border-white/20 flex items-center justify-center">
                  <span className="font-bebas text-3xl sm:text-4xl text-red-500">VS</span>
                </div>
                <div className="mt-3">
                  <p className="text-white/50 text-xs uppercase tracking-wider"><i className="fas fa-map-pin mr-1 text-red-400"></i>Cancha Hualcapo</p>
                  <p className="text-white/70 text-sm font-semibold mt-1">Sábado 15 de Marzo</p>
                  <p className="text-white/40 text-xs">15:00 - 16:00 - 17:00 hrs</p>
                </div>
              </div>

              {/* Visita */}
              <div className="text-center flex-1">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center font-bebas text-3xl sm:text-4xl font-bold border-3 border-white/20 mb-3">
                  <i className="fas fa-star text-yellow-400 text-2xl sm:text-3xl"></i>
                </div>
                <h3 className="font-bebas text-2xl sm:text-3xl text-white">ESTRELLA</h3>
                <span className="text-yellow-400 text-xs font-bold uppercase tracking-wider">Visita</span>
              </div>
            </div>
          </div>

          {/* Fixture Tabs */}
          <div className="flex justify-center mb-8">
            <div className="glass-card rounded-full p-1.5 flex gap-1">
              <button
                onClick={() => setFixtureTab('adultos')}
                className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${fixtureTab === 'adultos' ? 'tab-active' : 'tab-inactive'}`}
              >
                <i className="fas fa-futbol mr-2"></i>Fixture Adultos
              </button>
              <button
                onClick={() => setFixtureTab('cadetes')}
                className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${fixtureTab === 'cadetes' ? 'tab-active' : 'tab-inactive'}`}
              >
                <i className="fas fa-child mr-2"></i>Fixture Cadetes
              </button>
            </div>
          </div>

          {/* Fixture Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(fixtureTab === 'adultos' ? fixtureAdultos : fixtureCadetes).map((match) => (
              <div
                key={`fixture-${fixtureTab}-${match.fecha}`}
                className={`match-card rounded-xl p-4 ${match.local ? 'match-card-home' : 'match-card-away'}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Fecha {match.fecha}</span>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${match.local ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                    {match.local ? '🏠 Local' : '✈️ Visita'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    {match.local ? (
                      <>
                        <span className="font-bebas text-xl text-white">SAN JOSÉ</span>
                        <span className="text-white/40 text-sm mx-2">vs</span>
                        <span className="font-bebas text-xl text-white/70">{match.rival}</span>
                      </>
                    ) : (
                      <>
                        <span className="font-bebas text-xl text-white/70">{match.rival}</span>
                        <span className="text-white/40 text-sm mx-2">vs</span>
                        <span className="font-bebas text-xl text-white">SAN JOSÉ</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="mt-2 pt-2 border-t border-white/5">
                  <span className="text-[10px] text-white/30 uppercase tracking-wider">
                    {fixtureTab === 'adultos' ? 'Grupo 1' : 'Grupo 2 - San José Jr.'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN IDENTIDAD INSTITUCIONAL */}
      <section id="identidad" className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-bebas text-4xl sm:text-6xl text-white mb-3">NUESTRA IDENTIDAD</h2>
            <p className="text-white/50 text-sm uppercase tracking-widest">Tradición, gloria y semillero del futuro</p>
          </div>

          {/* Escudos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {/* Escudo Adulto */}
            <div className="glass-card rounded-2xl p-8 text-center group">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-red-600 via-red-700 to-red-900 flex items-center justify-center mb-6 border-4 border-red-400/30 group-hover:border-red-400/60 transition-all duration-300 shadow-lg shadow-red-900/30">
                <div className="text-center">
                  <div className="font-bebas text-4xl text-white leading-none">SJ</div>
                  <div className="text-[8px] text-white/80 uppercase tracking-widest mt-1">Hualcapo</div>
                </div>
              </div>
              <span className="inline-block bg-amber-500/20 text-amber-400 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                <i className="fas fa-trophy mr-1"></i>Tradición y Gloria
              </span>
              <h3 className="font-bebas text-3xl text-white mb-2">C.D. San José de Hualcapo</h3>
              <p className="text-white/50 text-sm">Rama Adulta — El corazón del club desde sus orígenes. 6 series que representan la garra y pasión del pueblo hualcapino.</p>
            </div>

            {/* Escudo Cadetes */}
            <div className="glass-card rounded-2xl p-8 text-center group">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-slate-700 via-red-800 to-slate-900 flex items-center justify-center mb-6 border-4 border-white/20 group-hover:border-red-400/60 transition-all duration-300 shadow-lg shadow-red-900/20">
                <div className="text-center">
                  <div className="font-bebas text-3xl text-white leading-none">SJ Jr.</div>
                  <div className="text-[8px] text-white/80 uppercase tracking-widest mt-1">Semillero</div>
                </div>
              </div>
              <span className="inline-block bg-red-500/20 text-red-400 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                <i className="fas fa-seedling mr-1"></i>El Semillero del Futuro
              </span>
              <h3 className="font-bebas text-3xl text-white mb-2">San José Jr. / Sanjo Jr.</h3>
              <p className="text-white/50 text-sm">Rama Cadetes — Formando a las nuevas generaciones del fútbol hualcapino. 3 series que llevan el ADN Sanjosé al futuro.</p>
            </div>
          </div>

          {/* Homenaje */}
          <div className="glass-card rounded-2xl p-8 sm:p-12 text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 mx-auto rounded-full bg-red-600/20 flex items-center justify-center mb-6">
              <i className="fas fa-heart text-red-500 text-2xl"></i>
            </div>
            <h3 className="font-bebas text-3xl sm:text-4xl text-white mb-4">POR Y PARA LA HINCHADA</h3>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Este club es más que fútbol. Es el grito de gol los fines de semana, es el abrazo de las familias en la cancha, 
              es el orgullo de cada niño que se pone la camiseta por primera vez. Es Hualcapo entero latiendo al ritmo del balón. 
              A nuestra hinchada, a las familias que acompañan cada partido, a cada dirigente que pone el hombro: <span className="text-red-400 font-semibold">gracias por hacer esto posible.</span>
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <span className="text-2xl">⚽</span>
              <span className="text-2xl">🏆</span>
              <span className="text-2xl">❤️</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contacto" className="relative z-10 py-12 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {/* Ubicación */}
            <div>
              <h4 className="font-bebas text-2xl text-white mb-4 flex items-center gap-2">
                <i className="fas fa-map-marker-alt text-red-500"></i> UBICACIÓN
              </h4>
              <p className="text-white/50 text-sm mb-3">Cancha Municipal de Hualcapo</p>
              <p className="text-white/40 text-xs">Asociación de Fútbol Amateur Hijuelas</p>
              <p className="text-white/40 text-xs mt-1">Región de Valparaíso, Chile</p>
              <div className="mt-4 glass-card rounded-lg p-3">
                <div className="flex items-center gap-2 text-white/50 text-xs">
                  <i className="fas fa-clock text-red-400"></i>
                  <span>Entrenamientos: Mar - Jue - Sáb</span>
                </div>
                <div className="flex items-center gap-2 text-white/50 text-xs mt-2">
                  <i className="fas fa-clock text-red-400"></i>
                  <span>Horario: 18:00 - 20:00 hrs</span>
                </div>
              </div>
            </div>

            {/* Redes Sociales */}
            <div>
              <h4 className="font-bebas text-2xl text-white mb-4 flex items-center gap-2">
                <i className="fas fa-share-alt text-red-500"></i> REDES OFICIALES
              </h4>
              <div className="flex flex-col gap-3">
                <a href="#" className="flex items-center gap-3 text-white/50 hover:text-red-400 transition-colors text-sm">
                  <i className="fab fa-facebook text-lg w-5"></i> Facebook Oficial
                </a>
                <a href="#" className="flex items-center gap-3 text-white/50 hover:text-red-400 transition-colors text-sm">
                  <i className="fab fa-instagram text-lg w-5"></i> Instagram @cdsanjose
                </a>
                <a href="#" className="flex items-center gap-3 text-white/50 hover:text-red-400 transition-colors text-sm">
                  <i className="fab fa-whatsapp text-lg w-5"></i> WhatsApp Club
                </a>
                <a href="#" className="flex items-center gap-3 text-white/50 hover:text-red-400 transition-colors text-sm">
                  <i className="fab fa-tiktok text-lg w-5"></i> TikTok Sanjo
                </a>
              </div>
            </div>

            {/* Info Club */}
            <div>
              <h4 className="font-bebas text-2xl text-white mb-4 flex items-center gap-2">
                <i className="fas fa-info-circle text-red-500"></i> EL CLUB
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-white/50 text-sm">
                  <i className="fas fa-calendar-check text-red-400 text-xs"></i>
                  <span>Partidos: Sábados y Domingos</span>
                </div>
                <div className="flex items-center gap-2 text-white/50 text-sm">
                  <i className="fas fa-users text-red-400 text-xs"></i>
                  <span>9 Series en competencia</span>
                </div>
                <div className="flex items-center gap-2 text-white/50 text-sm">
                  <i className="fas fa-trophy text-red-400 text-xs"></i>
                  <span>Asociación Hijuelas 2026</span>
                </div>
                <div className="flex items-center gap-2 text-white/50 text-sm">
                  <i className="fas fa-map text-red-400 text-xs"></i>
                  <span>Hualcapo, Chile</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center font-bebas text-sm font-bold">
                SJ
              </div>
              <span className="text-white/40 text-xs">© 2026 C.D. San José de Hualcapo. Todos los derechos reservados.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block bg-red-600/20 text-red-400 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                <i className="fas fa-heart mr-1"></i>Orgullo Hualcapino
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
