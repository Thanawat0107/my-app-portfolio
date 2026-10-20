'use client';

import React, { useState } from 'react';
import {
  Layers,
  ArrowRight,
  ArrowLeft,
  X,
  Server,
  Database,
  Radio,
  Monitor,
  Cpu,
  ShieldCheck,
  Code2,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import {
  SystemArchitectureDiagram,
  ArchitectureNode,
  ArchitectureFlowStep,
} from '@/types/portfolio.types';
import { Card } from '@/components/ui/Card';

interface InteractiveArchitectureDiagramProps {
  diagram?: SystemArchitectureDiagram;
  fallbackFlowSteps?: string[];
  fallbackFlowTitle?: string;
}

export const InteractiveArchitectureDiagram: React.FC<InteractiveArchitectureDiagramProps> = ({
  diagram,
  fallbackFlowSteps,
  fallbackFlowTitle,
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  // If no full diagram is provided, render the fallback flow steps nicely
  if (!diagram || !diagram.nodes || diagram.nodes.length === 0) {
    if (!fallbackFlowSteps || fallbackFlowSteps.length === 0) return null;
    return (
      <Card className="p-6 sm:p-8 space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <Layers className="w-5 h-5 text-emerald-400" />
          <span>{fallbackFlowTitle || 'System Workflow Flow'}</span>
        </h2>
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {fallbackFlowSteps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200 shadow-md">
                <span className="text-emerald-400 font-semibold mr-1.5">{idx + 1}.</span>
                {step}
              </div>
              {idx < fallbackFlowSteps.length - 1 && (
                <ArrowRight className="w-3.5 h-3.5 text-emerald-400 shrink-0 mx-1" />
              )}
            </React.Fragment>
          ))}
        </div>
      </Card>
    );
  }

  const activeStep: ArchitectureFlowStep | undefined =
    diagram.flowSteps && diagram.flowSteps.length > 0
      ? diagram.flowSteps[activeStepIndex]
      : undefined;

  const getNodeIcon = (tier: ArchitectureNode['tier']) => {
    switch (tier) {
      case 'client':
        return <Monitor className="w-4 h-4 text-cyan-400" />;
      case 'gateway':
        return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
      case 'service':
        return <Cpu className="w-4 h-4 text-teal-400" />;
      case 'database':
        return <Database className="w-4 h-4 text-amber-400" />;
      case 'realtime':
        return <Radio className="w-4 h-4 text-rose-400" />;
      case 'worker':
        return <Server className="w-4 h-4 text-indigo-400" />;
      default:
        return <Layers className="w-4 h-4 text-slate-400" />;
    }
  };

  const getNodeTierBadgeClass = (tier: ArchitectureNode['tier']) => {
    switch (tier) {
      case 'client':
        return 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30';
      case 'gateway':
        return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30';
      case 'service':
        return 'bg-teal-500/10 text-teal-300 border-teal-500/30';
      case 'database':
        return 'bg-amber-500/10 text-amber-300 border-amber-500/30';
      case 'realtime':
        return 'bg-rose-500/10 text-rose-300 border-rose-500/30';
      case 'worker':
        return 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  const isNodeActiveInCurrentStep = (nodeId: string) => {
    if (!activeStep) return false;
    return activeStep.fromNodeId === nodeId || activeStep.toNodeId === nodeId;
  };

  const isNodeSource = (nodeId: string) => {
    return activeStep?.fromNodeId === nodeId;
  };

  const isNodeDestination = (nodeId: string) => {
    return activeStep?.toNodeId === nodeId;
  };

  const selectedNode = selectedNodeId
    ? diagram.nodes.find((n) => n.id === selectedNodeId)
    : undefined;

  return (
    <Card className="p-6 sm:p-8 space-y-6 overflow-hidden border-slate-800/90 bg-gradient-to-b from-slate-900/90 to-slate-950">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive System Flow
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            {diagram.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
            {diagram.subtitle}
          </p>
        </div>

        {/* Step Indicator / Navigation */}
        {diagram.flowSteps && diagram.flowSteps.length > 0 && (
          <div className="flex items-center gap-1.5 self-start md:self-center bg-slate-950 p-1.5 rounded-xl border border-slate-800">
            {diagram.flowSteps.map((step, idx) => (
              <button
                key={step.stepNumber}
                type="button"
                onClick={() => {
                  setActiveStepIndex(idx);
                  setSelectedNodeId(null);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                  activeStepIndex === idx
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900'
                }`}
              >
                Step {step.stepNumber}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Active Step Highlight Banner */}
      {activeStep && (
        <div className="p-4 rounded-xl bg-slate-950/90 border border-emerald-500/30 shadow-lg relative overflow-hidden group">
          <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-emerald-500 via-cyan-400 to-teal-400" />
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">
                  {activeStep.stepNumber}
                </span>
                <span className="text-sm font-bold text-slate-100">
                  {activeStep.title}
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed pl-7">
                {activeStep.description}
              </p>
            </div>

            {activeStep.protocol && (
              <div className="shrink-0 self-start sm:self-center pl-7 sm:pl-0">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-300">
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                  {activeStep.protocol}
                </span>
              </div>
            )}
          </div>

          {activeStep.codeHint && (
            <div className="mt-2.5 pt-2 border-t border-slate-800/80 pl-7 text-[11px] font-mono text-slate-400 flex items-center gap-2">
              <span className="text-slate-500">Code:</span>
              <code className="text-emerald-300 bg-slate-900/80 px-2 py-0.5 rounded">
                {activeStep.codeHint}
              </code>
            </div>
          )}
        </div>
      )}

      {/* Architecture Nodes Grid */}
      <div className="space-y-2">
        <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center justify-between">
          <span>System Components & Nodes (Click to Inspect)</span>
          <span className="text-emerald-400 text-[10px]">
            {diagram.nodes.length} Registered Nodes
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {diagram.nodes.map((node) => {
            const isActive = isNodeActiveInCurrentStep(node.id);
            const isSource = isNodeSource(node.id);
            const isDest = isNodeDestination(node.id);
            const isSelected = selectedNodeId === node.id;

            return (
              <div
                key={node.id}
                onClick={() => setSelectedNodeId(isSelected ? null : node.id)}
                className={`relative cursor-pointer rounded-xl p-4 transition-all duration-300 flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-500/80 ring-2 ring-cyan-500/30 shadow-xl'
                    : isActive
                    ? 'bg-slate-900/90 border-emerald-500/80 ring-2 ring-emerald-500/30 shadow-lg'
                    : 'bg-slate-950/60 border-slate-800/70 hover:border-slate-700 hover:bg-slate-900/40'
                }`}
              >
                {/* Active Indicator Top Glow */}
                {isActive && (
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 rounded-t-xl" />
                )}

                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-medium border ${getNodeTierBadgeClass(
                        node.tier
                      )}`}
                    >
                      {getNodeIcon(node.tier)}
                      {node.role}
                    </span>

                    {/* Step Role Badge */}
                    {isSource && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 animate-pulse">
                        <span>Origin</span>
                        <ArrowRight className="w-2.5 h-2.5" />
                      </span>
                    )}
                    {isDest && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 animate-pulse">
                        <ArrowRight className="w-2.5 h-2.5" />
                        <span>Target</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {node.title}
                  </h3>
                  <div className="text-xs font-mono text-emerald-400/90 mt-0.5">
                    {node.tech}
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 mt-2.5 leading-relaxed line-clamp-3">
                  {node.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Node Inspection Drawer */}
      {selectedNode && (
        <div className="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/40 text-xs space-y-1.5 animate-fadeIn">
          <div className="flex items-center justify-between text-cyan-300 font-mono font-semibold">
            <span className="flex items-center gap-1.5">
              <ChevronRight className="w-4 h-4 text-cyan-400" />
              Node Inspection: {selectedNode.title} ({selectedNode.tech})
            </span>
            <button
              type="button"
              onClick={() => setSelectedNodeId(null)}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-3.5 h-3.5" />
              <span>Close</span>
            </button>
          </div>
          <p className="text-slate-300 leading-relaxed">
            {selectedNode.description}
          </p>
        </div>
      )}

      {/* Next Step Quick Action Button */}
      {diagram.flowSteps && diagram.flowSteps.length > 1 && (
        <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 text-xs">
          <span className="font-mono text-slate-500">
            Step {activeStepIndex + 1} of {diagram.flowSteps.length}
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={activeStepIndex === 0}
              onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed font-mono text-xs transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Prev</span>
            </button>
            <button
              type="button"
              disabled={activeStepIndex === diagram.flowSteps.length - 1}
              onClick={() =>
                setActiveStepIndex((prev) =>
                  Math.min(diagram.flowSteps.length - 1, prev + 1)
                )
              }
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/25 disabled:opacity-40 disabled:cursor-not-allowed font-mono text-xs font-semibold transition-colors"
            >
              <span>Next Step</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </Card>
  );
};
