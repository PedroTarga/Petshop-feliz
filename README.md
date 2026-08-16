# Petshop Feliz — Sistema de Gestão
### Especificação de Design System e Protótipo Funcional

Este pacote contém um protótipo navegável (HTML/CSS/JS puro, sem dependências de build) e a especificação abaixo. Abra `login.html` no navegador para começar — os links de e-mail de exemplo na tela demonstram o redirecionamento por perfil (RBAC).

```
petshop-feliz/
├── login.html            Tela 1 — Login
├── financeiro.html        Tela 2 — Dashboard Financeiro
├── crm.html                Tela 3 — Central Comercial e CRM
├── rh.html                  Tela 4 — Portal de Gestão de RH
└── assets/
    ├── styles.css          Design tokens + todos os componentes globais
    └── components.js       Fábrica do cabeçalho e menu lateral (fonte única de verdade)
```

---

## 1. Como a consistência visual é garantida (componentização)

Em vez de copiar HTML de cabeçalho/menu em cada tela, as 3 telas internas (`financeiro.html`, `crm.html`, `rh.html`) apenas declaram dois `<div>` vazios — `#shell-header` e `#shell-sidebar` — e chamam:

```html
<script src="assets/components.js"></script>
<script>
  PetshopShell.mount({
    moduleKey: 'financeiro',           // qual módulo ('financeiro' | 'crm' | 'rh')
    activeKey: 'boletos',              // qual item do menu está ativo
    user: { name: 'Renata Cardoso', role: 'Gestora Financeira', initials: 'RC' },
  });
</script>
```

`components.js` centraliza:
- `renderHeader()` — logo, busca global, notificações, chip do usuário (foto/iniciais + cargo) e botão de sair. **Idêntico em estrutura nas 3 telas**, o que muda é o usuário logado e o nome do módulo exibido como legenda da marca.
- `renderSidebar()` — lida a partir de `SIDEBAR_CONFIG`, um único objeto que mapeia cada módulo aos seus itens de menu. Adicionar um item de navegação em qualquer tela é uma alteração em um único lugar.
- `PetshopShell.mount()` — injeta os dois componentes e liga as interações (abrir/fechar notificações etc).

Todos os estilos (cor, tipografia, espaçamento, sombras, raio de borda) vêm de **variáveis CSS (`:root`)** em `styles.css` — nenhuma tela sobrescreve cores "no olho".

---

## 2. Design tokens

| Papel | Token | Valor |
|---|---|---|
| Primária (marca/ações) | `--aqua-500` / `--aqua-700` | `#2FA9A0` / `#1B6F68` |
| Fundo base | `--base-50` | `#F7F9F8` |
| Texto principal | `--ink-900` | `#16302C` |
| Alerta crítico (vencido, erro, bloqueio) | `--coral-500` | `#FF6B5B` |
| Aviso (a vencer, período expirando) | `--honey-500` | `#F4B740` |
| Sucesso (pago, homologado) | `--leaf-500` | `#45C077` |

**Tipografia:** Baloo 2 (display, títulos e logo — transmite acolhimento), Inter (corpo, alta legibilidade em telas densas de dados) e JetBrains Mono (valores monetários, datas e tabelas — dá precisão visual aos números).

**Assinatura visual:** uma "etiqueta" arredondada no topo dos cards principais (`.card--tag`), remetendo a uma plaquinha de identificação de pet, e uma textura sutil de patinhas (`.paw-trail`) usada no painel institucional do login.

**Acessibilidade:** foco de teclado visível em todos os elementos interativos (`:focus-visible`), link de "pular para o conteúdo" em toda tela interna, classe `.high-contrast` pronta para alternância de alto contraste, e contraste de cor testado nos estados de texto/fundo principais.

---

## 3. Detalhamento por tela

### Tela 1 — Login (`login.html`)
- **Layout:** duas colunas. Esquerda: painel institucional com gradiente aqua, mascote ilustrado em SVG (sem dependência de imagem externa) e estatísticas da operação. Direita: formulário de acesso.
- **RBAC:** o formulário simula o redirecionamento por perfil — usar um dos e-mails de exemplo exibidos no alerta da tela leva a `crm.html` (vendedor/veterinário) ou `financeiro.html` / `rh.html` conforme o perfil.
- **2FA:** nota explicativa indica que perfis com acesso financeiro exigem segundo fator a cada novo dispositivo (o fluxo de código OTP fica para uma etapa de implementação de back-end/autenticação real).
- **Segurança:** após 5 tentativas com credencial não reconhecida, o formulário exibe o estado de bloqueio temporário (`#lockAlert`) e desabilita o botão de envio. O link "Esqueci minha senha" simula o disparo do e-mail de recuperação.

### Tela 2 — Dashboard Financeiro (`financeiro.html`)
- **Layout:** cabeçalho padrão + menu lateral restrito ("Financeiro") + 4 cards de KPI (faturamento do mês, boletos a vencer, taxa de inadimplência, assinaturas ativas) + navegação por abas.
- **Emissão de boletos:** formulário de cobrança avulsa (tutor, serviço/produto, valor, vencimento) acima da tabela de boletos emitidos, com badges de status (pago / a vencer / vencido).
- **Contratos recorrentes:** cards de planos de assinatura (Clube do Banho, Plano Saúde Pet, Combo Tosa + Hotel) com valor mensal e número de assinantes.
- **Inadimplentes:** tabela com valor em atraso, dias de atraso e ações diretas de "Notificar" e "Renegociar" por linha.

### Tela 3 — Central Comercial e CRM (`crm.html`)
- **Layout:** cabeçalho padrão + menu lateral + quadro Kanban (4 colunas: Contato inicial, Proposta enviada, Negociação, Fechado) à esquerda e painel lateral fixo à direita.
- **SAC:** lista dos chamados mais recentes com contagem de novos, no topo do painel lateral.
- **Histórico do pet:** cartão com último banho, última/próxima vacina e ração preferida, com ação rápida de "Enviar lembrete e oferta" — a integração descrita no briefing (gatilhos automáticos de lembrete e oferta).

### Tela 4 — Portal de Gestão de RH (`rh.html`)
- **Layout:** cabeçalho padrão + menu lateral voltado à equipe operacional + painel central.
- **Contratação e demissão:** stepper de 5 etapas (dados cadastrais → documentos → validação → assinatura → homologação) para acompanhar uma admissão em andamento, além de tabelas de admissões recentes e desligamentos em homologação.
- **Férias:** calendário mensal com dias marcados como "em férias" e período aquisitivo "vencendo", nota de cálculo automático do valor (salário + 1/3 constitucional).
- **Folha de pagamento:** tabela com salário base, comissões por procedimento realizado (banho, tosa, consulta) calculadas automaticamente, e total por colaborador.

---

## 4. Próximos passos sugeridos
1. Conectar os formulários a uma API real (autenticação, emissão de boletos, CRUD de admissão) — hoje as ações usam `alert()` para simular o resultado.
2. Implementar o fluxo real de 2FA (OTP por app ou SMS) na tela de login.
3. Adicionar a tela de Agenda (mencionada no RBAC do briefing para o perfil de veterinários), que não fazia parte das 4 telas solicitadas nesta entrega.
4. Extrair `components.js` para componentes de framework (React/Vue) se o projeto evoluir para uma stack com build step — a lógica de configuração por módulo (`SIDEBAR_CONFIG`) já está desacoplada da renderização, facilitando essa migração.
