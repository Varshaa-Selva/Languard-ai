import { useState } from "react";
import { Shield, Radar, LayoutDashboard } from "lucide-react";
import LandApproval from "@/components/LandApproval";
import SatelliteMonitoring from "@/components/SatelliteMonitoring";
import AdminDashboard from "@/components/AdminDashboard";
import { BlockchainRecord, SEED_RECORDS } from "@/lib/mockData";

type Tab = "approval" | "satellite" | "dashboard";

const tabs: { id: Tab; label: string; icon: typeof Shield }[] = [
  { id: "approval", label: "Land Approval", icon: Shield },
  { id: "satellite", label: "Construction Monitoring", icon: Radar },
  { id: "dashboard", label: "Admin Dashboard", icon: LayoutDashboard },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState<Tab>("approval");
  const [records, setRecords] = useState<BlockchainRecord[]>(SEED_RECORDS);
  const [lastApproval, setLastApproval] = useState<boolean | null>(null);

  const handleDecision = (record: BlockchainRecord) => {
    setRecords((prev) => [record, ...prev]);
    setLastApproval(record.decision === "APPROVED");
  };

  return (
    <div className="min-h-screen bg-background grid-bg">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Shield className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h1 className="text-sm font-bold tracking-wide">LANDGUARD AI</h1>
              <p className="text-[10px] text-muted-foreground tracking-widest uppercase">Intelligent Land Verification System</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse-glow" />
            System Active
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="border-b border-border bg-card/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {activeTab === "approval" && <LandApproval onDecision={handleDecision} />}
        {activeTab === "satellite" && <SatelliteMonitoring complianceApproved={lastApproval} />}
        {activeTab === "dashboard" && <AdminDashboard records={records} />}
      </main>
    </div>
  );
};

export default Index;
