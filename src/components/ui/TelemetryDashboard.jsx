import React, { useState, useEffect, useRef } from "react";
import { 
  Activity, 
  AlertTriangle, 
  Database, 
  Cpu, 
  Zap, 
  Server, 
  Terminal, 
  Layers, 
  CheckCircle,
  Network
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "./SectionTitle";

const NODES_DATA = {
  gateway: {
    id: "gateway",
    name: "MERN_Gateway",
    icon: Server,
    color: "text-green-500",
    borderColor: "border-green-500/30",
    bgGlow: "bg-green-500/10",
    role: "API Routing & WebSocket Handshakes",
    metrics: { cpu: 12, mem: 140, req: 1850, latency: 12 },
    logs: [
      "[INFO] Gateway initialized on secure port 443",
      "[INFO] Established WebSocket socket.io pipeline with client",
      "[INFO] Routing GET /api/v1/user/profile to Cache Core",
      "[INFO] Routing POST /api/v1/rewards/redeem to Transaction Core"
    ]
  },
  cache: {
    id: "cache",
    name: "Redis_Cache",
    icon: Zap,
    color: "text-blue-500",
    borderColor: "border-blue-500/30",
    bgGlow: "bg-blue-500/10",
    role: "Session Caching & Transaction Staging",
    metrics: { cpu: 8, mem: 512, req: 1420, latency: 2 },
    logs: [
      "[INFO] Redis connection successful: cluster_size=3",
      "[INFO] Cache HIT for key: user:aamir_lone:meta",
      "[INFO] Eviction check complete: 0 keys evicted (LFU policy)",
      "[INFO] Staging transactional lock for rewards allocation"
    ]
  },
  engine: {
    id: "engine",
    name: "Mobilytix_Rewards",
    icon: Activity,
    color: "text-cyan-500",
    borderColor: "border-cyan-500/30",
    bgGlow: "bg-cyan-500/10",
    role: "Rewards Core Calculation Engine",
    metrics: { cpu: 28, mem: 1024, req: 2450, latency: 45 },
    logs: [
      "[INFO] Mobilytix rewards core booted online // clusters=4",
      "[INFO] Executed qualification queries: 12 users matched threshold",
      "[INFO] Dispatched reward transaction payload to Kafka",
      "[INFO] Computed rewards profile hash: 0x9f5a11bc"
    ]
  },
  broker: {
    id: "broker",
    name: "Kafka_Broker",
    icon: Network,
    color: "text-purple-500",
    borderColor: "border-purple-500/30",
    bgGlow: "bg-purple-500/10",
    role: "High-Throughput Messaging & Event Hub",
    metrics: { cpu: 14, mem: 2048, req: 4890, latency: 8 },
    logs: [
      "[INFO] Kafka broker cluster sync active: leader=broker_2",
      "[INFO] Published transaction_event to topic: user.reward.allocated",
      "[INFO] Consumer group 'analytics_sync' committed offset 495102",
      "[INFO] Rebalancing partition metrics: Status OK"
    ]
  },
  database: {
    id: "database",
    name: "MySQL_Storage",
    icon: Database,
    color: "text-pink-500",
    borderColor: "border-pink-500/30",
    bgGlow: "bg-pink-500/10",
    role: "Persistent Storage & Relational Archives",
    metrics: { cpu: 18, mem: 4096, req: 820, latency: 32 },
    logs: [
      "[INFO] Connection pool allocated: active=45 idle=5",
      "[INFO] SQL Select query executed: duration=8ms // scan_rows=1",
      "[INFO] Committing transaction lock: ID=9012481",
      "[INFO] DB replica replication log synchronized successfully"
    ]
  }
};

function TelemetryDashboard() {
  const [selectedNode, setSelectedNode] = useState("gateway");
  const [isLatencyInjected, setIsLatencyInjected] = useState(false);
  const [isSelfTesting, setIsSelfTesting] = useState(false);
  const [metrics, setMetrics] = useState({});
  const [liveLogs, setLiveLogs] = useState([]);
  const logContainerRef = useRef(null);

  // Initialize nodes metrics state
  useEffect(() => {
    const initialMetrics = {};
    Object.keys(NODES_DATA).forEach((key) => {
      initialMetrics[key] = { ...NODES_DATA[key].metrics };
    });
    setMetrics(initialMetrics);
    setLiveLogs([...NODES_DATA[selectedNode].logs]);
  }, [selectedNode]);

  // Handle fluctuating metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => {
        const next = { ...prev };
        Object.keys(next).forEach((key) => {
          if (!next[key]) return;
          const original = NODES_DATA[key].metrics;
          
          // If latency is injected, cache and engine latency jumps significantly
          let latencyMultiplier = 1;
          let cpuMultiplier = 1;
          if (isLatencyInjected && (key === "cache" || key === "engine" || key === "database")) {
            latencyMultiplier = 10 + Math.random() * 8;
            cpuMultiplier = 2.2;
          }

          next[key] = {
            cpu: Math.max(2, Math.min(99, Math.round(original.cpu * cpuMultiplier + (Math.random() - 0.5) * 4))),
            mem: Math.round(original.mem + (Math.random() - 0.5) * 10),
            req: Math.round(original.req + (Math.random() - 0.5) * 80),
            latency: Math.round(original.latency * latencyMultiplier + (Math.random() - 0.5) * 5)
          };
        });
        return next;
      });

      // Stream live mock logs based on state
      if (liveLogs.length > 0) {
        let newLog = "";
        const timestamp = new Date().toISOString().split("T")[1].slice(0, 8);
        if (isLatencyInjected) {
          const warnLogs = [
            `[WARN] [${timestamp}] Eviction buffer threshold breached on Cache cluster`,
            `[ALERT] [${timestamp}] Database connection throttling - Lock acquisition latency high`,
            `[WARN] [${timestamp}] Redis request timeout - Fallback to direct DB query triggered`,
            `[ALERT] [${timestamp}] Mobilytix core under degraded operations state (miss_ratio=94.2%)`,
            `[INFO] [${timestamp}] Load balancer rerouting transactions to backup database node`
          ];
          newLog = warnLogs[Math.floor(Math.random() * warnLogs.length)];
        } else if (isSelfTesting) {
          const testLogs = [
            `[DIAG] [${timestamp}] Running memory integrity registers checks... OK`,
            `[DIAG] [${timestamp}] Handshaking node connectivity grids... 5/5 ACTIVE`,
            `[DIAG] [${timestamp}] Simulating packet throughput benchmarks... 120,402 req/s`,
            `[DIAG] [${timestamp}] Re-indexing B-Tree database records cache indices... SUCCESS`,
            `[DIAG] [${timestamp}] Flushing transactional queues... SYSTEM OPERATIONAL`
          ];
          newLog = testLogs[Math.floor(Math.random() * testLogs.length)];
        } else {
          const normalLogs = [
            `[INFO] [${timestamp}] Routing microservice GET /api/v1/rewards/meta`,
            `[INFO] [${timestamp}] Cache HIT for session payload // key=auth:user_95`,
            `[INFO] [${timestamp}] Kafka published event: rewards.calculated.payload`,
            `[INFO] [${timestamp}] MySQL connection released back to pool // pool_size=50`,
            `[INFO] [${timestamp}] Socket handshake heartbeat verified (RTT: 4ms)`
          ];
          newLog = normalLogs[Math.floor(Math.random() * normalLogs.length)];
        }

        setLiveLogs((prev) => {
          const next = [...prev, newLog];
          if (next.length > 30) next.shift(); // Keep last 30 logs
          return next;
        });
      }
    }, 1800);

    return () => clearInterval(interval);
  }, [isLatencyInjected, isSelfTesting, liveLogs.length, selectedNode]);

  // Auto-scroll logs
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [liveLogs]);

  const toggleLatencyInjection = () => {
    setIsLatencyInjected(prev => !prev);
    if (!isLatencyInjected) {
      setIsSelfTesting(false);
      const timestamp = new Date().toISOString().split("T")[1].slice(0, 8);
      setLiveLogs(prev => [
        ...prev,
        `[CRITICAL] [${timestamp}] INJECTING SIMULATED CACHE TIMEOUT EXPERIMENT`,
        `[ALERT] [${timestamp}] System throttling active. Eviction pipelines disabled.`
      ]);
    } else {
      const timestamp = new Date().toISOString().split("T")[1].slice(0, 8);
      setLiveLogs(prev => [
        ...prev,
        `[INFO] [${timestamp}] EXPERIMENT DISMISSED. System recovering normal status.`,
        `[INFO] [${timestamp}] Redis cluster cache eviction pipeline restored.`
      ]);
    }
  };

  const runDiagnosticsTest = () => {
    if (isSelfTesting) return;
    setIsSelfTesting(true);
    setIsLatencyInjected(false);
    const timestamp = new Date().toISOString().split("T")[1].slice(0, 8);
    setLiveLogs(prev => [
      ...prev,
      `[DIAG] [${timestamp}] BOOTING AUTOMATED NODE DIAGNOSTICS DIAG01...`,
      `[DIAG] [${timestamp}] Disabling external API gates temporarily.`
    ]);

    setTimeout(() => {
      setIsSelfTesting(false);
      const endTimestamp = new Date().toISOString().split("T")[1].slice(0, 8);
      setLiveLogs(prev => [
        ...prev,
        `[DIAG] [${endTimestamp}] AUTOMATED SELF-TEST CONCLUDED.`,
        `[DIAG] [${endTimestamp}] ALL NODES RUNNING NOMINAL // ERROR_RATE=0.00%`
      ]);
    }, 8000);
  };

  const currentNodeInfo = NODES_DATA[selectedNode];
  const currentNodeMetrics = metrics[selectedNode] || currentNodeInfo.metrics;

  return (
    <div className="w-full">
      <SectionTitle 
        subtitle="Live Telemetry Console" 
        title="Microservice" 
        highlight="Infrastructure" 
        description="Interact with the live microservice node topology layout mapping of my typical systems architecture."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-12 w-full text-left">
        
        {/* Left Card: Topology Visualization */}
        <div className="lg:col-span-7 flex flex-col justify-between glass-premium-dark rounded-2xl border border-white/[0.08] p-6 shadow-2xl min-h-[460px] relative overflow-hidden">
          
          {/* Cyber Alert Box Overlay if Latency is Injected */}
          <AnimatePresence>
            {isLatencyInjected && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-4 left-4 right-4 z-20 px-4 py-2.5 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center justify-between text-red-500 animate-pulse"
              >
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider">Warning: Cache Latency Experiment Active // Degraded State</span>
                </div>
                <button 
                  onClick={toggleLatencyInjection}
                  className="text-[9px] font-mono uppercase bg-red-500 text-bg-base font-black px-2 py-0.5 rounded cursor-pointer"
                >
                  Terminate
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center justify-between border-b border-white/[0.06] pb-4 select-none">
            <div className="text-[10px] font-mono tracking-widest text-text-muted uppercase flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full ${isLatencyInjected ? 'bg-red-500 animate-ping' : 'bg-green-500 animate-pulse'}`} />
              <span>Network Topology Mesh // click_node_to_inspect</span>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={runDiagnosticsTest}
                disabled={isSelfTesting || isLatencyInjected}
                className="px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider rounded border border-white/[0.08] hover:border-accent hover:text-accent bg-white/[0.02] disabled:opacity-40 disabled:hover:border-white/[0.08] disabled:hover:text-text-muted transition-colors cursor-pointer"
              >
                {isSelfTesting ? "Testing..." : "Self Test"}
              </button>
              <button 
                onClick={toggleLatencyInjection}
                className={`px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider rounded border transition-all cursor-pointer ${
                  isLatencyInjected 
                    ? "bg-red-500 border-red-500 text-bg-base font-bold shadow-[0_0_10px_rgba(239,68,68,0.3)]" 
                    : "border-white/[0.08] hover:border-red-500/40 hover:text-red-500 bg-white/[0.02]"
                }`}
              >
                {isLatencyInjected ? "Fix Latency" : "Inject Latency"}
              </button>
            </div>
          </div>

          {/* Interactive Node Layout Area */}
          <div className="flex-grow flex items-center justify-center py-10 relative overflow-x-auto min-w-[320px]">
            
            {/* SVG Connector Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
              <defs>
                <linearGradient id="cyan-pink" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0cfbff" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="0.25" />
                </linearGradient>
                <linearGradient id="green-blue" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#22c55e" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.25" />
                </linearGradient>
              </defs>
              {/* Custom static path connectors */}
              <line x1="20%" y1="50%" x2="40%" y2="25%" stroke="url(#green-blue)" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="20%" y1="50%" x2="40%" y2="75%" stroke="url(#green-blue)" strokeWidth="1.5" />
              <line x1="40%" y1="25%" x2="60%" y2="50%" stroke="url(#cyan-pink)" strokeWidth="1.5" />
              <line x1="40%" y1="75%" x2="60%" y2="50%" stroke="url(#cyan-pink)" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="60%" y1="50%" x2="80%" y2="50%" stroke="url(#cyan-pink)" strokeWidth="2" />
            </svg>

            <div className="relative w-full h-64 flex justify-between items-center px-4 md:px-8 z-10">
              {/* 1. API Gateway Node */}
              <button 
                onClick={() => setSelectedNode("gateway")}
                className={`relative flex flex-col items-center justify-center p-3 rounded-2xl border transition-all cursor-pointer ${
                  selectedNode === "gateway" 
                    ? "bg-green-500/10 border-green-500 scale-105 shadow-[0_0_15px_rgba(34,197,94,0.25)]" 
                    : "bg-white/[0.02] border-white/[0.08] hover:border-green-500/40"
                }`}
              >
                <Server className="w-6 h-6 text-green-500 mb-1" />
                <span className="text-[10px] font-mono font-bold text-text-base">MERN_Gateway</span>
                <span className="text-[8px] font-mono text-green-500 mt-0.5">Router</span>
              </button>

              <div className="flex flex-col gap-12 justify-center">
                {/* 2. Redis Cache Node */}
                <button 
                  onClick={() => setSelectedNode("cache")}
                  className={`relative flex flex-col items-center justify-center p-3 rounded-2xl border transition-all cursor-pointer ${
                    selectedNode === "cache" 
                      ? "bg-blue-500/10 border-blue-500 scale-105 shadow-[0_0_15px_rgba(59,130,246,0.25)]" 
                      : "bg-white/[0.02] border-white/[0.08] hover:border-blue-500/40"
                  } ${isLatencyInjected ? 'border-red-500/40 text-red-500' : ''}`}
                >
                  <Zap className={`w-6 h-6 mb-1 ${isLatencyInjected ? 'text-red-500 animate-bounce' : 'text-blue-500'}`} />
                  <span className="text-[10px] font-mono font-bold text-text-base">Redis_Cache</span>
                  <span className={`text-[8px] font-mono mt-0.5 ${isLatencyInjected ? 'text-red-500 font-bold' : 'text-blue-500'}`}>
                    {isLatencyInjected ? "TIMEOUT" : "Memory Cache"}
                  </span>
                </button>

                {/* 3. Kafka Queue Node */}
                <button 
                  onClick={() => setSelectedNode("broker")}
                  className={`relative flex flex-col items-center justify-center p-3 rounded-2xl border transition-all cursor-pointer ${
                    selectedNode === "broker" 
                      ? "bg-purple-500/10 border-purple-500 scale-105 shadow-[0_0_15px_rgba(168,85,247,0.25)]" 
                      : "bg-white/[0.02] border-white/[0.08] hover:border-purple-500/40"
                  }`}
                >
                  <Network className="w-6 h-6 text-purple-500 mb-1" />
                  <span className="text-[10px] font-mono font-bold text-text-base">Kafka_Broker</span>
                  <span className="text-[8px] font-mono text-purple-500 mt-0.5">Queue</span>
                </button>
              </div>

              {/* 4. Rewards Core Calculation Node */}
              <button 
                onClick={() => setSelectedNode("engine")}
                className={`relative flex flex-col items-center justify-center p-3 rounded-2xl border transition-all cursor-pointer ${
                  selectedNode === "engine" 
                    ? "bg-cyan-500/10 border-cyan-500 scale-105 shadow-[0_0_15px_rgba(6,182,212,0.25)]" 
                    : "bg-white/[0.02] border-white/[0.08] hover:border-cyan-500/40"
                } ${isLatencyInjected ? 'border-amber-500/40' : ''}`}
              >
                <Activity className={`w-6 h-6 mb-1 ${isLatencyInjected ? 'text-amber-500 animate-pulse' : 'text-cyan-500'}`} />
                <span className="text-[10px] font-mono font-bold text-text-base">Mobilytix_Core</span>
                <span className={`text-[8px] font-mono mt-0.5 ${isLatencyInjected ? 'text-amber-500' : 'text-cyan-500'}`}>
                  {isLatencyInjected ? "DEGRADED" : "SaaS Engine"}
                </span>
              </button>

              {/* 5. Persistent DB Node */}
              <button 
                onClick={() => setSelectedNode("database")}
                className={`relative flex flex-col items-center justify-center p-3 rounded-2xl border transition-all cursor-pointer ${
                  selectedNode === "database" 
                    ? "bg-pink-500/10 border-pink-500 scale-105 shadow-[0_0_15px_rgba(236,72,153,0.25)]" 
                    : "bg-white/[0.02] border-white/[0.08] hover:border-pink-500/40"
                }`}
              >
                <Database className="w-6 h-6 text-pink-500 mb-1" />
                <span className="text-[10px] font-mono font-bold text-text-base">MySQL_Storage</span>
                <span className="text-[8px] font-mono text-pink-500 mt-0.5">Persistence</span>
              </button>

            </div>
          </div>
          
          {/* Status ticker footer */}
          <div className="border-t border-white/[0.06] pt-3 text-[9px] font-mono text-text-muted flex justify-between select-none">
            <span>PACKETS DISPATCHED: 905.1K</span>
            <span className="text-green-500">PACKET DROP RATE: 0.00%</span>
          </div>

        </div>

        {/* Right Card: Selected Node Inspector Panel */}
        <div className="lg:col-span-5 flex flex-col gap-6 w-full">
          
          {/* Metrics HUD Box */}
          <div className="glass-premium-dark rounded-2xl border border-white/[0.08] p-5 shadow-2xl flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-xl border ${currentNodeInfo.borderColor} ${currentNodeInfo.bgGlow}`}>
                <currentNodeInfo.icon className={`w-5 h-5 ${currentNodeInfo.color}`} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-text-base leading-tight font-mono">{currentNodeInfo.name}</h3>
                <p className="text-[10px] text-text-muted mt-0.5 font-sans leading-none">{currentNodeInfo.role}</p>
              </div>
            </div>

            {/* Metrics parameters grid */}
            <div className="grid grid-cols-2 gap-3.5 pt-2">
              <div className="p-3.5 rounded-xl border border-white/[0.04] bg-white/[0.01]">
                <span className="text-[8px] font-mono text-text-muted uppercase tracking-wider block">CPU Utilization</span>
                <span className="text-lg font-bold font-mono text-text-base">{currentNodeMetrics.cpu}%</span>
                <div className="w-full h-1 bg-black/40 rounded-full overflow-hidden mt-1.5">
                  <div 
                    className="h-full bg-accent transition-all duration-500" 
                    style={{ width: `${currentNodeMetrics.cpu}%` }}
                  />
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-white/[0.04] bg-white/[0.01]">
                <span className="text-[8px] font-mono text-text-muted uppercase tracking-wider block">Throughput Rate</span>
                <span className="text-lg font-bold font-mono text-text-base">{currentNodeMetrics.req} r/s</span>
                <span className="text-[8px] font-mono text-green-500 block mt-1">✓ Connection Stable</span>
              </div>

              <div className="p-3.5 rounded-xl border border-white/[0.04] bg-white/[0.01]">
                <span className="text-[8px] font-mono text-text-muted uppercase tracking-wider block">Allocated Memory</span>
                <span className="text-lg font-bold font-mono text-text-base">
                  {currentNodeMetrics.mem >= 1024 
                    ? `${(currentNodeMetrics.mem / 1024).toFixed(1)} GB` 
                    : `${currentNodeMetrics.mem} MB`}
                </span>
                <span className="text-[8px] font-mono text-text-muted block mt-1">Eviction: LFU active</span>
              </div>

              <div className="p-3.5 rounded-xl border border-white/[0.04] bg-white/[0.01] relative overflow-hidden">
                {isLatencyInjected && (currentNodeInfo.id === "cache" || currentNodeInfo.id === "engine" || currentNodeInfo.id === "database") && (
                  <div className="absolute top-1 right-1 px-1 bg-red-500/10 border border-red-500/30 text-red-500 rounded text-[7px] font-mono animate-pulse uppercase">
                    high_rtt
                  </div>
                )}
                <span className="text-[8px] font-mono text-text-muted uppercase tracking-wider block">Node RTT Latency</span>
                <span className={`text-lg font-bold font-mono transition-colors ${
                  isLatencyInjected && (currentNodeInfo.id === "cache" || currentNodeInfo.id === "engine" || currentNodeInfo.id === "database")
                    ? "text-red-500" 
                    : "text-text-base"
                }`}>
                  {currentNodeMetrics.latency} ms
                </span>
                <span className="text-[8px] font-mono text-text-muted block mt-1">SLA Limit: 80ms</span>
              </div>
            </div>
          </div>

          {/* Logs HUD Box */}
          <div className="glass-premium-dark rounded-2xl border border-white/[0.08] p-5 shadow-2xl flex-grow flex flex-col min-h-[220px]">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 select-none">
              <span className="text-[9px] font-mono tracking-widest text-text-muted uppercase flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-accent" />
                <span>Diagnostics Stream console</span>
              </span>
              <span className="text-[8px] font-mono text-accent animate-pulse">● STREAMING_RAW</span>
            </div>

            <div 
              ref={logContainerRef}
              className="flex-grow overflow-y-auto font-mono text-[9px] leading-relaxed text-text-muted/90 space-y-1.5 pt-3 pr-2 h-44 no-scrollbar"
            >
              {liveLogs.map((log, index) => {
                const isError = log.includes("[ALERT]") || log.includes("[CRITICAL]") || log.includes("[WARN]");
                const isDiag = log.includes("[DIAG]");
                return (
                  <div 
                    key={index} 
                    className={`transition-all duration-300 ${
                      isError 
                        ? "text-red-400 font-bold border-l-2 border-red-500 pl-1.5 bg-red-500/5 py-0.5 rounded" 
                        : isDiag
                        ? "text-accent font-bold border-l-2 border-accent pl-1.5 bg-accent/5 py-0.5 rounded"
                        : ""
                    }`}
                  >
                    {log}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default TelemetryDashboard;
