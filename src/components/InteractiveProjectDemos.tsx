import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack, 
  Volume2, 
  ShieldAlert, 
  ShieldCheck, 
  Terminal, 
  Cpu, 
  Database, 
  Sparkles, 
  RefreshCw,
  Plus,
  Trash2,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

interface InteractiveDemoProps {
  type: 'swarm-orchestrator' | 'university-rag' | 'ledgerly-calc' | 'restaurant-menu' | 'cyber-honeypot' | 'music-player' | 'fashion-catalog';
}

export const InteractiveProjectDemo: React.FC<InteractiveDemoProps> = ({ type }) => {
  switch (type) {
    case 'swarm-orchestrator':
      return <SwarmOrchestratorDemo />;
    case 'university-rag':
      return <UniversityRagDemo />;
    case 'ledgerly-calc':
      return <LedgerlyDemo />;
    case 'cyber-honeypot':
      return <CyberHoneypotDemo />;
    case 'restaurant-menu':
      return <RestaurantMenuDemo />;
    case 'music-player':
      return <MusicPlayerDemo />;
    case 'fashion-catalog':
      return <FashionCatalogDemo />;
    default:
      return null;
  }
};

/* 1. AI-POWERED CUSTOMER SUPPORT SWARM DEMO */
function SwarmOrchestratorDemo() {
  const sampleQueries = [
    { text: 'Invoice #8491 was charged twice on my credit card.', domain: 'Billing & Payments', agent: 'BillingAgent', k_docs: 3 },
    { text: 'How do I configure FAISS local embeddings in Python?', domain: 'Technical Support', agent: 'TechTriageAgent', k_docs: 4 },
    { text: 'My account access was locked after 3 failed password attempts.', domain: 'Identity & Access', agent: 'AuthSecurityAgent', k_docs: 2 },
  ];

  const [selectedQuery, setSelectedQuery] = useState(sampleQueries[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [step, setStep] = useState<number>(3); // ready state
  const [responseLog, setResponseLog] = useState<string>('Query resolved successfully via BillingAgent using FAISS index.');

  const runSimulation = (query: typeof sampleQueries[0]) => {
    setSelectedQuery(query);
    setIsRunning(true);
    setStep(0);
    setResponseLog('Supervisor parsing query embeddings...');

    setTimeout(() => {
      setStep(1);
      setResponseLog(`Supervisor routed intent to specialized [${query.agent}].`);
    }, 450);

    setTimeout(() => {
      setStep(2);
      setResponseLog(`FAISS retrieved ${query.k_docs} nearest document vectors with cosine distance 0.94.`);
    }, 900);

    setTimeout(() => {
      setStep(3);
      setIsRunning(false);
      setResponseLog(`Ollama synthesized verified context-aware solution. Checkpointed to SQLite.`);
    }, 1400);
  };

  return (
    <div className="bg-[#080c14] border border-slate-800 rounded-xl p-5 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-blue-400" />
          <span className="text-xs font-mono font-semibold text-white">Live Swarm Router Simulator</span>
        </div>
        <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> LangGraph Active
        </span>
      </div>

      <div className="space-y-2">
        <label className="text-[11px] font-mono text-slate-400">Select Test Customer Query:</label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {sampleQueries.map((q, idx) => (
            <button
              key={idx}
              onClick={() => runSimulation(q)}
              disabled={isRunning}
              className={`p-2 rounded-lg text-left text-xs transition-all border ${
                selectedQuery.text === q.text
                  ? 'bg-blue-950/40 border-blue-500/50 text-blue-200'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              <div className="font-semibold text-slate-300 text-[11px] truncate">{q.domain}</div>
              <div className="text-[10px] text-slate-400 truncate mt-0.5">"{q.text}"</div>
            </button>
          ))}
        </div>
      </div>

      {/* Visual Step Pipeline */}
      <div className="grid grid-cols-4 gap-2 pt-2">
        {[
          { label: '1. Ingestion', active: step >= 0 },
          { label: '2. Supervisor', active: step >= 1 },
          { label: '3. Vector RAG', active: step >= 2 },
          { label: '4. Ollama LLM', active: step >= 3 },
        ].map((s, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg border text-center transition-all ${
              s.active
                ? 'bg-blue-600/20 border-blue-500/40 text-blue-300'
                : 'bg-slate-900/40 border-slate-800/80 text-slate-600'
            }`}
          >
            <div className="text-[11px] font-mono font-semibold">{s.label}</div>
            <div className="text-[9px] mt-0.5 text-slate-400">
              {i === 1 ? selectedQuery.agent : i === 2 ? `k=${selectedQuery.k_docs} vectors` : 'Verified'}
            </div>
          </div>
        ))}
      </div>

      {/* Realtime Terminal Telemetry */}
      <div className="p-3 bg-black/60 rounded-lg border border-slate-800/80 font-mono text-[11px] text-slate-300 flex items-start gap-2">
        <Terminal className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
        <div className="space-y-0.5">
          <div className="text-slate-500">[{new Date().toLocaleTimeString()}] swarm-orchestrator.py:</div>
          <div className="text-emerald-300">{responseLog}</div>
        </div>
      </div>
    </div>
  );
}

/* 2. UNIVERSITY AI ASSISTANT DEMO */
function UniversityRagDemo() {
  const departments = [
    {
      id: 'placements',
      name: 'Placements Cell',
      query: 'What is the minimum CGPA and backlogs policy for Tier-1 dream company drives?',
      answer: 'VIT-AP Placement Policy specifies: Tier-1 Dream Super Dream opportunities require a minimum CGPA of 8.00+ with 0 standing arrears. Students must complete mandatory pre-placement soft skill & DSA clearance modules.',
      citation: 'Campus Circular #VITAP/PAT/2025-26/04 · §3.1',
    },
    {
      id: 'hostel',
      name: 'Hostel Affairs',
      query: 'What are the evening curfew hours and weekend leave application procedures?',
      answer: 'Campus hostel turnstiles close at 9:00 PM on weekdays and 9:30 PM on weekends. Outing passes must be digitally pre-approved by the student proctor via the VTOP portal at least 6 hours in advance.',
      citation: 'Student Residential Handbook 2025 · Clause 12.4',
    },
    {
      id: 'academics',
      name: 'Academic Affairs',
      query: 'What is the criterion for registering extra credits (credit overloading)?',
      answer: 'Students maintaining a CGPA of 8.50 or higher without backlogs are eligible to register up to 27 credits per semester (regular limit: 24 credits) during the FFCS curriculum bidding window.',
      citation: 'Academic Regulations & FFCS Guidelines §8',
    },
    {
      id: 'admissions',
      name: 'Admissions & Scholarships',
      query: 'How is the merit scholarship renewal calculated for B.Tech students?',
      answer: 'Merit scholarship renewals require maintaining a minimum CGPA of 8.00 across successive academic sessions with continuous conduct clearance and zero disciplinary sanctions.',
      citation: 'Scholarship Standing Committee Notice · AY 2025-26',
    },
  ];

  const [activeDept, setActiveDept] = useState(departments[0]);
  const [isQuerying, setIsQuerying] = useState(false);

  const handleSelect = (dept: typeof departments[0]) => {
    setIsQuerying(true);
    setActiveDept(dept);
    setTimeout(() => setIsQuerying(false), 300);
  };

  return (
    <div className="bg-[#080c14] border border-slate-800 rounded-xl p-5 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span className="text-xs font-mono font-semibold text-white">Department Agent & RAG Simulator</span>
        </div>
        <span className="text-[11px] font-mono text-indigo-400">VIT-AP Knowledge Base</span>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {departments.map((d) => (
          <button
            key={d.id}
            onClick={() => handleSelect(d)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeDept.id === d.id
                ? 'bg-indigo-600 text-white font-semibold'
                : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            {d.name}
          </button>
        ))}
      </div>

      {/* Query & Verified Response Box */}
      <div className="bg-[#05070c] rounded-xl p-4 border border-slate-800/80 space-y-3">
        <div className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
          <span className="text-indigo-400 font-bold">Query:</span>
          <span className="text-slate-200">"{activeDept.query}"</span>
        </div>

        <div className="pt-2 border-t border-slate-800/60">
          <div className="text-[11px] font-mono text-emerald-400 mb-1 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Agentic RAG Response (Verified):</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {isQuerying ? 'Retrieving campus records...' : activeDept.answer}
          </p>
        </div>

        <div className="pt-2 border-t border-slate-800/40 flex items-center justify-between text-[10px] font-mono text-slate-500">
          <span>Source: {activeDept.citation}</span>
          <span className="text-emerald-400">FAISS confidence: 98.2%</span>
        </div>
      </div>
    </div>
  );
}

/* 3. LEDGERLY FINTECH INTERACTIVE DEMO */
function LedgerlyDemo() {
  const [balance, setBalance] = useState(48250);
  const [transactions, setTransactions] = useState([
    { id: 1, desc: 'Tech Stipend / Fellowship', amount: 35000, type: 'income', category: 'Income' },
    { id: 2, desc: 'Hostel Mess & Dining', amount: 4800, type: 'expense', category: 'Food' },
    { id: 3, desc: 'Cloud Server & Domain Hosting', amount: 1950, type: 'expense', category: 'Tech' },
  ]);

  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState<'income' | 'expense'>('expense');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseFloat(amount);
    if (!desc || isNaN(val) || val <= 0) return;

    const newTx = {
      id: Date.now(),
      desc,
      amount: val,
      type,
      category: type === 'income' ? 'Income' : 'General',
    };

    setTransactions([newTx, ...transactions]);
    setBalance(prev => type === 'income' ? prev + val : prev - val);
    setDesc('');
    setAmount('');
  };

  const handleDelete = (id: number, txAmount: number, txType: string) => {
    setTransactions(transactions.filter(t => t.id !== id));
    setBalance(prev => txType === 'income' ? prev - txAmount : prev + txAmount);
  };

  return (
    <div className="bg-[#080c14] border border-slate-800 rounded-xl p-5 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-mono font-semibold text-white">Ledgerly Cashflow Sandbox</span>
        </div>
        <div className="text-right">
          <span className="text-[10px] text-slate-500 font-mono block">Current Balance</span>
          <span className="text-base font-bold font-mono text-emerald-400 tabular-nums">
            ₹{balance.toLocaleString('en-IN')}
          </span>
        </div>
      </div>

      {/* Mini Add Transaction Form */}
      <form onSubmit={handleAdd} className="grid grid-cols-1 sm:grid-cols-12 gap-2 text-xs">
        <input
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Transaction label (e.g., Books, Groceries)"
          className="sm:col-span-5 bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="₹ Amount"
          className="sm:col-span-3 bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 font-mono"
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value as any)}
          className="sm:col-span-2 bg-slate-900 border border-slate-800 rounded-lg px-2 py-1.5 text-slate-200 focus:outline-none text-xs"
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
        <button
          type="submit"
          className="sm:col-span-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg px-3 py-1.5 font-medium flex items-center justify-center gap-1 transition-colors"
        >
          <Plus className="w-3.5 h-3.5" /> Add
        </button>
      </form>

      {/* Transaction Feed */}
      <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
        {transactions.map((tx) => (
          <div
            key={tx.id}
            className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs"
          >
            <div>
              <div className="font-medium text-slate-200">{tx.desc}</div>
              <div className="text-[10px] text-slate-500 font-mono">{tx.category}</div>
            </div>
            <div className="flex items-center gap-3">
              <span
                className={`font-mono font-semibold tabular-nums ${
                  tx.type === 'income' ? 'text-emerald-400' : 'text-rose-400'
                }`}
              >
                {tx.type === 'income' ? '+' : '-'}₹{tx.amount.toLocaleString('en-IN')}
              </span>
              <button
                onClick={() => handleDelete(tx.id, tx.amount, tx.type)}
                className="text-slate-600 hover:text-rose-400 transition-colors"
                aria-label="Delete entry"
              >
                <Trash2 className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* 4. CYBER DECEPTION MINEFIELD GAME DEMO */
function CyberHoneypotDemo() {
  interface NodeState {
    id: number;
    ip: string;
    isProd: boolean;
    probed: boolean;
  }

  const [nodes, setNodes] = useState<NodeState[]>([
    { id: 1, ip: '192.168.1.12', isProd: false, probed: false },
    { id: 2, ip: '192.168.1.45', isProd: true, probed: false },
    { id: 3, ip: '192.168.1.89', isProd: false, probed: false },
    { id: 4, ip: '192.168.1.104', isProd: false, probed: false },
  ]);

  const [stealth, setStealth] = useState<number>(100);
  const [gameState, setGameState] = useState<'playing' | 'won' | 'lost'>('playing');
  const [log, setLog] = useState<string>('Network probe initialized. Locate production cluster.');

  const resetGame = () => {
    const prodIndex = Math.floor(Math.random() * 4);
    setNodes([
      { id: 1, ip: '192.168.1.12', isProd: prodIndex === 0, probed: false },
      { id: 2, ip: '192.168.1.45', isProd: prodIndex === 1, probed: false },
      { id: 3, ip: '192.168.1.89', isProd: prodIndex === 2, probed: false },
      { id: 4, ip: '192.168.1.104', isProd: prodIndex === 3, probed: false },
    ]);
    setStealth(100);
    setGameState('playing');
    setLog('Audit reset. Audit server nodes to verify real production host.');
  };

  const probeNode = (node: NodeState) => {
    if (node.probed || gameState !== 'playing') return;

    const updated = nodes.map(n => n.id === node.id ? { ...n, probed: true } : n);
    setNodes(updated);

    if (node.isProd) {
      setGameState('won');
      setLog(`SUCCESS! Host ${node.ip} verified as authentic primary database server!`);
    } else {
      const nextStealth = stealth - 35;
      setStealth(nextStealth);
      if (nextStealth <= 0) {
        setGameState('lost');
        setLog(`HONEYPOT TRIPPED on ${node.ip}! IDS alerted security operations center.`);
      } else {
        setLog(`DECOY DETECTED: Node ${node.ip} was a honeypot trap! Stealth compromised.`);
      }
    }
  };

  return (
    <div className="bg-[#080c14] border border-slate-800 rounded-xl p-5 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-rose-400" />
          <span className="text-xs font-mono font-semibold text-white">Network Honeypot Sandbox</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono text-slate-400">Stealth:</span>
          <span className={`text-xs font-mono font-bold tabular-nums ${stealth > 40 ? 'text-emerald-400' : 'text-rose-400'}`}>
            {stealth}%
          </span>
          <button
            onClick={resetGame}
            className="p-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white"
            title="Reset Simulation"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 4 Nodes Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {nodes.map((n) => {
          let statusBg = 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700';
          if (n.probed) {
            statusBg = n.isProd
              ? 'bg-emerald-950/40 border-emerald-500/60 text-emerald-300'
              : 'bg-rose-950/40 border-rose-500/60 text-rose-300';
          }

          return (
            <button
              key={n.id}
              onClick={() => probeNode(n)}
              disabled={n.probed || gameState !== 'playing'}
              className={`p-3 rounded-xl border text-left transition-all ${statusBg}`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono text-slate-500">Node #{n.id}</span>
                {n.probed && n.isProd && <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />}
                {n.probed && !n.isProd && <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />}
              </div>
              <div className="text-xs font-mono font-semibold">{n.ip}</div>
              <div className="text-[10px] mt-1 font-sans text-slate-400">
                {!n.probed ? 'Click to probe' : n.isProd ? 'Production Host' : 'Honeypot Trap'}
              </div>
            </button>
          );
        })}
      </div>

      {/* Terminal log banner */}
      <div className="p-3 bg-black/60 rounded-lg border border-slate-800/80 font-mono text-[11px] flex items-center justify-between">
        <span className={gameState === 'won' ? 'text-emerald-400' : gameState === 'lost' ? 'text-rose-400' : 'text-slate-300'}>
          &gt; {log}
        </span>
        {gameState !== 'playing' && (
          <button
            onClick={resetGame}
            className="text-[10px] text-blue-400 underline ml-2 whitespace-nowrap"
          >
            Play Again
          </button>
        )}
      </div>
    </div>
  );
}

/* 5. RESTAURANT INTERACTIVE MENU DEMO */
function RestaurantMenuDemo() {
  const [activeCourse, setActiveCourse] = useState('mains');

  const menu = {
    appetizers: [
      { name: 'Truffle Burrata Bruschetta', desc: 'Charred sourdough, heirloom tomatoes, aged balsamic reduction', price: '₹420' },
      { name: 'Crispy Calamari & Herb Aioli', desc: 'Flash-fried squid with smoked paprika and garlic dip', price: '₹480' },
    ],
    mains: [
      { name: 'Slow-Braised Lamb Shank', desc: 'Served over saffron polenta and rosemary demi-glace', price: '₹890' },
      { name: 'Handmade Wild Mushroom Ravioli', desc: 'Brown butter sage emulsion, toasted pine nuts, parmesan', price: '₹620' },
    ],
    desserts: [
      { name: 'Valrhona Chocolate Fondant', desc: 'Warm molten center with Madagascar vanilla gelato', price: '₹380' },
      { name: 'Classic Tiramisu al Mascarpone', desc: 'Espresso-soaked savoiardi with dusted cocoa', price: '₹350' },
    ],
  };

  return (
    <div className="bg-[#080c14] border border-slate-800 rounded-xl p-5 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <span className="text-xs font-mono font-semibold text-white">Interactive Culinary Menu Filter</span>
        <span className="text-[11px] text-amber-400 font-mono">Dynamic DOM Filter</span>
      </div>

      <div className="flex gap-2">
        {(['appetizers', 'mains', 'desserts'] as const).map((c) => (
          <button
            key={c}
            onClick={() => setActiveCourse(c)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-colors ${
              activeCourse === c
                ? 'bg-amber-600/30 text-amber-300 border border-amber-500/40 font-semibold'
                : 'bg-slate-900 text-slate-400 hover:text-white'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {menu[activeCourse as keyof typeof menu].map((item, i) => (
          <div key={i} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-semibold text-white">{item.name}</span>
              <span className="text-xs font-mono font-bold text-amber-400">{item.price}</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-snug">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* 6. MUSICIFY INTERACTIVE PLAYER DEMO */
function MusicPlayerDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(38);
  const [currentTrackIdx, setCurrentTrackIdx] = useState(0);

  const playlist = [
    { title: 'Midnight Lo-Fi Coding', artist: 'Riya Kumari', duration: '2:45' },
    { title: 'Vector Space Algorithms', artist: 'Neural Beats', duration: '3:12' },
    { title: 'Synthesized State Graphs', artist: 'LangGraph Studio', duration: '3:50' },
  ];

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(p => (p >= 100 ? 0 : p + 1));
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="bg-[#080c14] border border-slate-800 rounded-xl p-5 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <span className="text-xs font-mono font-semibold text-white">Musicify Audio Controller</span>
        <span className="text-[11px] font-mono text-blue-400">HTML5 Audio Simulation</span>
      </div>

      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between">
        <div>
          <div className="text-xs font-bold text-white">{playlist[currentTrackIdx].title}</div>
          <div className="text-[11px] text-slate-400">{playlist[currentTrackIdx].artist}</div>
        </div>

        {/* Waveform graphic */}
        <div className="flex items-end gap-1 h-6">
          {[40, 75, 100, 60, 85, 30, 90, 50, 80].map((h, i) => (
            <span
              key={i}
              className={`w-1 rounded-full transition-all duration-200 ${
                isPlaying ? 'bg-blue-400' : 'bg-slate-700'
              }`}
              style={{ height: isPlaying ? `${h}%` : '25%' }}
            />
          ))}
        </div>
      </div>

      {/* Scrubber */}
      <div className="space-y-1">
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={(e) => setProgress(Number(e.target.value))}
          className="w-full accent-blue-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
        />
        <div className="flex justify-between text-[10px] font-mono text-slate-500">
          <span>0:{Math.floor((progress * 1.6)).toString().padStart(2, '0')}</span>
          <span>{playlist[currentTrackIdx].duration}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 pt-1">
        <button
          onClick={() => setCurrentTrackIdx(i => (i === 0 ? playlist.length - 1 : i - 1))}
          className="p-2 text-slate-400 hover:text-white transition-colors"
          aria-label="Previous track"
        >
          <SkipBack className="w-4 h-4" />
        </button>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center text-white shadow-md shadow-blue-500/30 transition-transform active:scale-95"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
        </button>
        <button
          onClick={() => setCurrentTrackIdx(i => (i === playlist.length - 1 ? 0 : i + 1))}
          className="p-2 text-slate-400 hover:text-white transition-colors"
          aria-label="Next track"
        >
          <SkipForward className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

/* 7. SHEIN FASHION CATALOG INTERACTIVE DEMO */
function FashionCatalogDemo() {
  const [activeCategory, setActiveCategory] = useState<'runway' | 'streetwear' | 'accessories'>('runway');
  const [selectedItem, setSelectedItem] = useState(0);

  const catalog = {
    runway: [
      { name: 'Architectural Asymmetric Blazer', tag: 'Haute Couture', price: '₹4,499', color: 'Midnight Onyx', fabric: 'Structured Wool Blend' },
      { name: 'Sculptural Pleated Trench', tag: 'Winter Edit', price: '₹5,890', color: 'Sand Dune', fabric: 'Water-Resistant Twill' },
      { name: 'Monochrome Draped Slip Dress', tag: 'Minimalist Line', price: '₹2,999', color: 'Ivory Sheen', fabric: 'Satin Crepe' },
    ],
    streetwear: [
      { name: 'Boxy Heavyweight Acid Hoodie', tag: 'Urban Capsule', price: '₹2,499', color: 'Washed Charcoal', fabric: '420 GSM French Terry' },
      { name: 'Multi-Pocket Wide Cargo Pant', tag: 'Utility Series', price: '₹3,199', color: 'Olive Drab', fabric: 'Ripstop Cotton' },
      { name: 'Graphic Oversized Statement Tee', tag: 'Street Couture', price: '₹1,299', color: 'Chalk White', fabric: '100% Organic Cotton' },
    ],
    accessories: [
      { name: 'Geometric Leather Crossbody', tag: 'Designer Hardware', price: '₹3,450', color: 'Obsidian Black', fabric: 'Full-Grain Vegan Leather' },
      { name: 'Chunky Minimalist Mule Heels', tag: 'Footwear', price: '₹3,890', color: 'Deep Mocha', fabric: 'Soft Nappa Leather' },
      { name: 'Brushed Titanium Oval Eyewear', tag: 'Eyewear Edit', price: '₹1,890', color: 'Gunmetal Grey', fabric: 'Polarized UV400' },
    ],
  };

  const currentItems = catalog[activeCategory];

  return (
    <div className="bg-[#080c14] border border-slate-800 rounded-xl p-5 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-violet-400" />
          <span className="text-xs font-mono font-semibold text-white">Shein Fashion Interactive Showcase</span>
        </div>
        <a
          href="https://gleeful-beijinho-52e694.netlify.app"
          target="_blank"
          rel="noreferrer"
          className="text-[11px] text-violet-400 hover:text-violet-300 font-mono flex items-center gap-1 transition-colors"
        >
          <span>gleeful-beijinho-52e694.netlify.app</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Category selector */}
      <div className="flex gap-2">
        {(['runway', 'streetwear', 'accessories'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => { setActiveCategory(cat); setSelectedItem(0); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-colors ${
              activeCategory === cat
                ? 'bg-violet-600/30 text-violet-200 border border-violet-500/40 font-semibold'
                : 'bg-slate-900 text-slate-400 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of items */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        {currentItems.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedItem(idx)}
            className={`p-3 rounded-xl border text-left transition-all ${
              selectedItem === idx
                ? 'bg-violet-950/40 border-violet-500/50 shadow-md shadow-violet-500/10'
                : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-mono text-violet-400">{item.tag}</span>
              <span className="text-xs font-mono font-bold text-white">{item.price}</span>
            </div>
            <div className="text-xs font-semibold text-slate-200 line-clamp-1">{item.name}</div>
            <div className="text-[10px] text-slate-400 mt-1 font-mono">{item.color} · {item.fabric}</div>
          </button>
        ))}
      </div>

      {/* Selected item preview card */}
      <div className="p-3.5 bg-black/60 rounded-xl border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div>
          <span className="text-[10px] font-mono uppercase text-slate-500 block">Active Look Inspection</span>
          <span className="font-semibold text-white">{currentItems[selectedItem].name}</span>
          <span className="text-slate-400 font-mono text-[11px] block mt-0.5">
            Crafted in {currentItems[selectedItem].fabric} · Colorway: {currentItems[selectedItem].color}
          </span>
        </div>
        <a
          href="https://gleeful-beijinho-52e694.netlify.app"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-violet-600 hover:bg-violet-500 text-white rounded-lg text-xs font-semibold whitespace-nowrap self-start sm:self-center transition-colors"
        >
          <span>Open Live Web Store</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

