/* ==========================================================================
   PETSHOP FELIZ — COMPONENTES GLOBAIS REUTILIZÁVEIS
   Um único ponto de verdade para o cabeçalho e a navegação lateral.
   Cada tela interna só declara: (a) quem é o usuário logado, e
   (b) quais itens de menu/qual item ativo. O restante é idêntico
   em todo o sistema — garantindo a consistência visual exigida.
   ========================================================================== */

const PawIcon = (size = 20, color = 'currentColor') => `
  <svg class="paw-icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="16" rx="6" ry="5" fill="${color}"/>
    <ellipse cx="4.5" cy="10" rx="2.3" ry="3" fill="${color}"/>
    <ellipse cx="9.5" cy="6" rx="2.3" ry="3" fill="${color}"/>
    <ellipse cx="14.5" cy="6" rx="2.3" ry="3" fill="${color}"/>
    <ellipse cx="19.5" cy="10" rx="2.3" ry="3" fill="${color}"/>
  </svg>`;

const Icons = {
  search: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/><path d="M21 21l-4.3-4.3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  bell: `<svg width="19" height="19" viewBox="0 0 24 24" fill="none"><path d="M6 9a6 6 0 0112 0c0 5 2 6 2 6H4s2-1 2-6z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M10 19a2 2 0 004 0" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  logout: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M16 17l5-5-5-5M21 12H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  chevron: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  dashboard: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="8" height="8" rx="2" stroke="currentColor" stroke-width="2"/><rect x="13" y="3" width="8" height="8" rx="2" stroke="currentColor" stroke-width="2"/><rect x="3" y="13" width="8" height="8" rx="2" stroke="currentColor" stroke-width="2"/><rect x="13" y="13" width="8" height="8" rx="2" stroke="currentColor" stroke-width="2"/></svg>`,
  boleto: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="2"/><path d="M7 9v6M11 9v6M15 9v6M19 9v6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  contract: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 2h9l5 5v13a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M9 13h6M9 17h6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  alert: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 9v4M12 17h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M10.3 3.9L2.4 18a2 2 0 001.7 3h15.8a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>`,
  kanban: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="6" height="16" rx="1.5" stroke="currentColor" stroke-width="2"/><rect x="9.5" y="4" width="6" height="10" rx="1.5" stroke="currentColor" stroke-width="2"/><rect x="16" y="4" width="6" height="13" rx="1.5" stroke="currentColor" stroke-width="2"/></svg>`,
  headset: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 13v-1a8 8 0 0116 0v1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><rect x="2.5" y="13" width="4" height="6" rx="1.5" stroke="currentColor" stroke-width="2"/><rect x="17.5" y="13" width="4" height="6" rx="1.5" stroke="currentColor" stroke-width="2"/><path d="M20 19v1a2 2 0 01-2 2h-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  paws: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="16" rx="6" ry="5" stroke="currentColor" stroke-width="2"/><ellipse cx="4.5" cy="10" rx="2" ry="2.6" stroke="currentColor" stroke-width="2"/><ellipse cx="19.5" cy="10" rx="2" ry="2.6" stroke="currentColor" stroke-width="2"/></svg>`,
  hire: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="4" stroke="currentColor" stroke-width="2"/><path d="M2 21v-1a7 7 0 0114 0v1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M19 8v6M22 11h-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  vacation: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" stroke-width="2"/><path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  payroll: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><path d="M12 7v10M9.5 9.5c0-1.4 1.2-2 2.5-2s2.5.8 2.5 2-1 1.7-2.5 2-2.5.7-2.5 2 1.2 2 2.5 2 2.5-.6 2.5-2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
};

/* Configuração de menu por módulo — única fonte de verdade da navegação */
const SIDEBAR_CONFIG = {
  financeiro: {
    label: 'Financeiro',
    items: [
      { icon: Icons.dashboard, text: 'Visão geral', href: 'financeiro.html', key: 'overview' },
      { icon: Icons.boleto, text: 'Emissão de boletos', href: 'financeiro.html#boletos', key: 'boletos' },
      { icon: Icons.contract, text: 'Contratos recorrentes', href: 'financeiro.html#contratos', key: 'contratos' },
      { icon: Icons.alert, text: 'Inadimplentes', href: 'financeiro.html#inadimplentes', key: 'inadimplentes', badge: '12' },
    ],
    footer: { title: '🐾 Fechamento do mês', text: 'Faltam 6 dias úteis para o fechamento financeiro de agosto.' },
  },
  crm: {
    label: 'Comercial & CRM',
    items: [
      { icon: Icons.kanban, text: 'Funil de vendas', href: 'crm.html#funil', key: 'funil' },
      { icon: Icons.headset, text: 'Central SAC', href: 'crm.html#sac', key: 'sac', badge: '5' },
      { icon: Icons.paws, text: 'Clientes & pets', href: 'crm.html#clientes', key: 'clientes' },
    ],
    footer: { title: '🐾 Meta do mês', text: 'R$ 18.400 em propostas fechadas — 73% da meta de agosto.' },
  },
  rh: {
    label: 'Gestão de RH',
    items: [
      { icon: Icons.hire, text: 'Contratação & desligamento', href: 'rh.html#admissao', key: 'admissao' },
      { icon: Icons.vacation, text: 'Férias', href: 'rh.html#ferias', key: 'ferias', badge: '3' },
      { icon: Icons.payroll, text: 'Folha de pagamento', href: 'rh.html#folha', key: 'folha' },
    ],
    footer: { title: '🐾 Equipe', text: '18 colaboradores ativos · 2 admissões em andamento.' },
  },
};

function renderHeader({ user, moduleKey }) {
  return `
    <a class="skip-link" href="#conteudo-principal">Pular para o conteúdo</a>
    <header class="app-header">
      <div class="app-header__left">
        <a href="dashboard-hub.html" class="brand" aria-label="Petshop Feliz — página inicial">
          <span class="brand-mark">${PawIcon(22, '#fff')}</span>
          <span>
            <div class="brand-name">Petshop Feliz</div>
            <div class="brand-tagline">${SIDEBAR_CONFIG[moduleKey]?.label || 'Painel'}</div>
          </span>
        </a>
        <div class="global-search" role="search">
          ${Icons.search}
          <input type="search" placeholder="Buscar tutor, pet, boleto, chamado..." aria-label="Busca global" />
        </div>
      </div>
      <div class="app-header__right">
        <div style="position:relative;">
          <button class="icon-btn" id="btn-notif" aria-haspopup="true" aria-expanded="false" aria-label="Notificações (3 novas)">
            ${Icons.bell}
            <span class="notif-dot"></span>
          </button>
          <div class="dropdown-panel" id="panel-notif" role="menu">
            <div class="dropdown-item">
              <span class="dropdown-item__icon" style="background:var(--coral-100);color:var(--coral-600)">${Icons.alert}</span>
              <div><p style="font-size:13px;font-weight:600;">3 boletos vencem hoje</p><p style="font-size:12px;color:var(--ink-500);">Módulo financeiro</p></div>
            </div>
            <div class="dropdown-item">
              <span class="dropdown-item__icon" style="background:var(--honey-100);color:var(--honey-600)">${Icons.headset}</span>
              <div><p style="font-size:13px;font-weight:600;">Novo chamado no SAC</p><p style="font-size:12px;color:var(--ink-500);">Tutor: Marina Alves</p></div>
            </div>
            <div class="dropdown-item">
              <span class="dropdown-item__icon" style="background:var(--leaf-100);color:var(--leaf-600)">${Icons.hire}</span>
              <div><p style="font-size:13px;font-weight:600;">Admissão aprovada</p><p style="font-size:12px;color:var(--ink-500);">RH · Novo tosador</p></div>
            </div>
          </div>
        </div>
        <div style="position:relative;">
          <button class="user-chip" id="btn-user" aria-haspopup="true" aria-expanded="false">
            <span class="user-avatar">${user.initials}</span>
            <span class="user-meta">
              <div class="user-name">${user.name}</div>
              <div class="user-role">${user.role}</div>
            </span>
            ${Icons.chevron}
          </button>
        </div>
        <button class="logout-btn" onclick="location.href='login.html'">
          ${Icons.logout} Sair
        </button>
      </div>
    </header>`;
}

function renderSidebar({ moduleKey, activeKey }) {
  const cfg = SIDEBAR_CONFIG[moduleKey];
  if (!cfg) return '';
  return `
    <aside class="sidebar" aria-label="Navegação do módulo ${cfg.label}">
      <div>
        <div class="sidebar-label">${cfg.label}</div>
        <nav class="sidebar-nav">
          ${cfg.items.map(i => `
            <a class="sidebar-link ${i.key === activeKey ? 'active' : ''}" href="${i.href}">
              ${i.icon}
              <span>${i.text}</span>
              ${i.badge ? `<span class="badge-count">${i.badge}</span>` : ''}
            </a>`).join('')}
        </nav>
      </div>
      <div class="sidebar-footer-card">
        <p>${cfg.footer.title}</p>
        <p>${cfg.footer.text}</p>
      </div>
    </aside>`;
}

/**
 * Monta o "shell" padrão (header + sidebar) de qualquer tela interna.
 * Uso: PetshopShell.mount({ moduleKey: 'financeiro', activeKey: 'boletos', user: {...} })
 */
const PetshopShell = {
  mount({ moduleKey, activeKey, user }) {
    document.getElementById('shell-header').innerHTML = renderHeader({ user, moduleKey });
    document.getElementById('shell-sidebar').innerHTML = renderSidebar({ moduleKey, activeKey });
    this.bindInteractions();
  },
  bindInteractions() {
    const notifBtn = document.getElementById('btn-notif');
    const notifPanel = document.getElementById('panel-notif');
    if (notifBtn) {
      notifBtn.addEventListener('click', () => {
        const open = notifPanel.classList.toggle('open');
        notifBtn.setAttribute('aria-expanded', open);
      });
      document.addEventListener('click', (e) => {
        if (!notifBtn.contains(e.target) && !notifPanel.contains(e.target)) {
          notifPanel.classList.remove('open');
          notifBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }
  },
};
