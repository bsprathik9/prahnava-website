"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Link as LinkIcon, Zap, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  slug?: string;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const router = useRouter();
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );
  const [viewMode, setViewMode] = useState<"orbital">("orbital");
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset, setCenterOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: NodeJS.Timeout;

    if (autoRotate && viewMode === "orbital") {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.3) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate, viewMode]);

  const centerViewOnNode = (nodeId: number) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 320; // Increased from 250 to 320 for much larger circle
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.4,
      Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))
    );

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed":
        return "text-white bg-black border-white";
      case "in-progress":
        return "text-black bg-white border-black";
      case "pending":
        return "text-white bg-black/40 border-white/50";
      default:
        return "text-white bg-black/40 border-white/50";
    }
  };

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden py-16"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      {/* Header Section */}
      <div className="text-center mb-12 px-6 max-w-4xl mx-auto">
        <span className="inline-block text-sm font-medium text-cyan-400 mb-4 uppercase tracking-wider">
          Our Products
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-4">
          Intelligent Learning Infrastructure for Modern Institutions
        </h2>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
          Personalized Learning at Scale - Powered by Multi-Agent AI.
        </p>
      </div>

      <div className="relative w-full max-w-7xl h-[900px] md:h-[1000px] flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1500px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          {/* Central Core - Larger and more prominent */}
          <div className="absolute w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 animate-pulse flex items-center justify-center z-10 shadow-2xl shadow-purple-500/50">
            <div className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-white/30 animate-ping opacity-70"></div>
            <div
              className="absolute w-40 h-40 md:w-48 md:h-48 rounded-full border border-white/20 animate-ping opacity-50"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/90 backdrop-blur-md shadow-lg"></div>
          </div>

          {/* Orbital Ring - Much larger */}
          <div className="absolute w-[640px] h-[640px] md:w-[700px] md:h-[700px] rounded-full border-2 border-white/20 shadow-lg shadow-white/5"></div>

          {/* Additional decorative rings */}
          <div className="absolute w-[580px] h-[580px] md:w-[640px] md:h-[640px] rounded-full border border-white/10"></div>
          <div className="absolute w-[700px] h-[700px] md:w-[760px] md:h-[760px] rounded-full border border-white/5"></div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => { nodeRefs.current[item.id] = el }}
                className="absolute transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                <div
                  className={`absolute rounded-full -inset-1 ${
                    isPulsing ? "animate-pulse duration-1000" : ""
                  }`}
                  style={{
                    background: isExpanded
                      ? `radial-gradient(circle, rgba(139,92,246,0.4) 0%, rgba(6,182,212,0.2) 50%, rgba(255,255,255,0) 100%)`
                      : `radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(139,92,246,0.1) 50%, rgba(255,255,255,0) 100%)`,
                    width: `${item.energy * 0.8 + 80}px`,
                    height: `${item.energy * 0.8 + 80}px`,
                    left: `-${(item.energy * 0.8 + 80 - 80) / 2}px`,
                    top: `-${(item.energy * 0.8 + 80 - 80) / 2}px`,
                  }}
                ></div>

                <div
                  className={`
                  w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center
                  ${
                    isExpanded
                      ? "bg-gradient-to-br from-white via-white to-cyan-100 text-black"
                      : isRelated
                      ? "bg-gradient-to-br from-white/70 to-white/50 text-black"
                      : "bg-gradient-to-br from-zinc-900 to-black text-white"
                  }
                  border-3
                  ${
                    isExpanded
                      ? "border-white shadow-2xl shadow-white/40"
                      : isRelated
                      ? "border-white animate-pulse shadow-lg shadow-white/20"
                      : "border-white/50 shadow-lg shadow-white/10"
                  }
                  transition-all duration-500 transform hover:scale-110
                  ${isExpanded ? "scale-125" : ""}
                `}
                >
                  <Icon size={isExpanded ? 32 : 24} className={isExpanded ? "md:w-10 md:h-10" : "md:w-8 md:h-8"} />
                </div>

                <div
                  className={`
                  absolute top-20 md:top-24 whitespace-nowrap
                  text-sm md:text-base font-bold tracking-wider
                  transition-all duration-300
                  ${isExpanded ? "text-white scale-110" : "text-white/80 hover:text-white"}
                `}
                >
                  {item.title}
                </div>

                {isExpanded && (
                  <Card className="absolute top-20 left-1/2 -translate-x-1/2 w-64 bg-black/90 backdrop-blur-lg border-white/30 shadow-xl shadow-white/10 overflow-visible">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-white/50"></div>
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-mono text-cyan-400">
                          {item.date}
                        </span>
                      </div>
                      <CardTitle className="text-base text-white">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-white/80 pt-0">
                      <p className="leading-relaxed">{item.content}</p>

                      {item.slug && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            router.push(`/products/${item.slug}`);
                          }}
                          className="mt-4 w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-600 px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity"
                        >
                          View Full Details
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      )}

                      {item.relatedIds.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-white/10">
                          <div className="flex items-center mb-2">
                            <LinkIcon size={10} className="text-white/70 mr-1" />
                            <h4 className="text-xs uppercase tracking-wider font-medium text-white/70">
                              Connected Nodes
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find(
                                (i) => i.id === relatedId
                              );
                              return (
                                <Button
                                  key={relatedId}
                                  variant="outline"
                                  size="sm"
                                  className="flex items-center h-6 px-2 py-0 text-xs rounded-none border-white/20 bg-transparent hover:bg-white/10 text-white/80 hover:text-white transition-all"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight
                                    size={8}
                                    className="ml-1 text-white/60"
                                  />
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
