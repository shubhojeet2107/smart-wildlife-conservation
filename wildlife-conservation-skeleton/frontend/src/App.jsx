import { useEffect, useState } from 'react';
import {
  Activity, AlertTriangle, PawPrint, Trees, Route, HeartPulse,
  Users, Sprout, RefreshCw, Leaf
} from 'lucide-react';

const services = [
  { name: 'Wildlife', url: 'http://localhost:8081/api/v1/health', icon: PawPrint },
  { name: 'Protected Areas', url: 'http://localhost:8082/api/v1/health', icon: Trees },
  { name: 'Patrols', url: 'http://localhost:8083/api/v1/health', icon: Route },
  { name: 'Incidents', url: 'http://localhost:8084/api/v1/health', icon: AlertTriangle },
  { name: 'Rescue', url: 'http://localhost:8085/api/v1/health', icon: HeartPulse },
  { name: 'Staff & Resources', url: 'http://localhost:8086/api/v1/health', icon: Users },
  { name: 'Conservation', url: 'http://localhost:8087/api/v1/health', icon: Sprout },
];

function App() {
  const [health, setHealth] = useState({});
  const [checking, setChecking] = useState(false);

  async function checkServices() {
    setChecking(true);
    const results = {};
    await Promise.all(services.map(async (service) => {
      try {
        const response = await fetch(service.url);
        results[service.name] = response.ok ? 'UP' : 'DOWN';
      } catch {
        results[service.name] = 'NOT RUNNING';
      }
    }));
    setHealth(results);
    setChecking(false);
  }

  useEffect(() => { checkServices(); }, []);

  const cards = [
    { title: 'Wildlife Records', desc: 'Species, animal profiles and sightings', icon: PawPrint },
    { title: 'Protected Areas', desc: 'Zones, habitats and water resources', icon: Trees },
    { title: 'Patrol Management', desc: 'Schedules, assignments and observations', icon: Route },
    { title: 'Incident Management', desc: 'Threat reports, severity and status', icon: AlertTriangle },
    { title: 'Rescue & Rehabilitation', desc: 'Rescue cases, treatment and outcomes', icon: HeartPulse },
    { title: 'Staff & Resources', desc: 'Field personnel, vehicles and equipment', icon: Users },
    { title: 'Conservation Programmes', desc: 'Activities, targets and progress', icon: Sprout },
    { title: 'Reports & Dashboard', desc: 'Consolidated operational summaries', icon: Activity },
  ];

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand"><span className="brand-icon"><Leaf size={22} /></span><div><strong>WildGuard</strong><small>Conservation platform</small></div></div>
        <div className="nav-label">WORKSPACE</div>
        <a className="nav-item active" href="#overview">Overview</a>
        {cards.map((card) => <a className="nav-item" href="#modules" key={card.title}>{card.title}</a>)}
        <div className="sidebar-foot">Project starter · Team workspace</div>
      </aside>
      <main className="main-content">
        <header className="topbar">
          <div><span className="eyebrow">PROTECTED AREA OPERATIONS</span><h1>Conservation overview</h1></div>
          <button className="refresh-button" onClick={checkServices} disabled={checking}>
            <RefreshCw size={16} className={checking ? 'spin' : ''} /> Check services
          </button>
        </header>
        <section className="welcome" id="overview">
          <div><span className="welcome-kicker">SMART WILDLIFE CONSERVATION</span><h2>Protect wildlife.<br />Coordinate every action.</h2><p>A centralized workspace for field teams, wildlife records and conservation operations.</p></div>
          <div className="welcome-art"><Trees size={90} strokeWidth={1.2} /><PawPrint size={34} /></div>
        </section>
        <section className="section-heading"><div><h2>Application modules</h2><p>Starter navigation for the team to build on</p></div></section>
        <section className="module-grid" id="modules">
          {cards.map(({ title, desc, icon: Icon }) => <article className="module-card" key={title}><div className="module-icon"><Icon size={21} /></div><h3>{title}</h3><p>{desc}</p><span className="build-tag">Skeleton ready</span></article>)}
        </section>
        <section className="section-heading service-heading"><div><h2>Backend service status</h2><p>Start the Spring Boot services and check their health endpoints</p></div></section>
        <section className="service-list">
          {services.map(({ name, icon: Icon, url }) => <div className="service-row" key={name}><span className="service-icon"><Icon size={18} /></span><span className="service-name">{name}</span><span className={`status ${health[name] === 'UP' ? 'up' : 'down'}`}>{health[name] || 'Checking...'}</span><a href={url} target="_blank" rel="noreferrer">Open endpoint ↗</a></div>)}
        </section>
        <footer>WildGuard · Smart Wildlife Conservation & Protected Area Management</footer>
      </main>
    </div>
  );
}

export default App;
