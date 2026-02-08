"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";

interface DockProps {
  items: {
    icon: React.ReactNode;
    label: string;
    onClick?: () => void;
  }[];
  magnification?: number;
  distance?: number;
  panelHeight?: number;
  dockHeight?: number;
  baseItemSize?: number;
}

export function Dock({
  items,
  magnification = 70,
  distance = 200,
  panelHeight = 68,
  dockHeight = 256,
  baseItemSize = 50,
}: DockProps) {
  const mouseX = useMotionValue(Infinity);

  return (
    <div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="m-2 flex max-w-full items-center"
      style={{ height: dockHeight }}
    >
      <div
        className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-end w-fit gap-4 rounded-2xl bg-[#060010] border border-[#222] px-2 pb-2"
        style={{ height: panelHeight }}
      >
        {items.map((item, index) => (
          <DockItem
            key={index}
            mouseX={mouseX}
            magnification={magnification}
            distance={distance}
            baseItemSize={baseItemSize}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

interface DockItemProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  mouseX: any;
  magnification: number;
  distance: number;
  baseItemSize: number;
}

function DockItem({
  icon,
  label,
  onClick,
  mouseX,
  magnification,
  distance,
  baseItemSize,
}: DockItemProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = React.useState(false);

  const distanceCalc = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.button
      ref={ref}
      style={{ width, height: width }}
      className="relative inline-flex items-center justify-center rounded-[10px] bg-[#060010] border border-[#222] shadow-md cursor-pointer outline-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <DockIcon>{icon}</DockIcon>
      <DockLabel isHovered={isHovered}>{label}</DockLabel>
    </motion.button>
  );
}

function DockIcon({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center justify-center">{children}</div>;
}

function DockLabel({
  children,
  isHovered,
}: {
  children: React.ReactNode;
  isHovered: boolean;
}) {
  return (
    <AnimatePresence>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 2 }}
          className="absolute -top-6 left-1/2 w-fit whitespace-pre rounded-md border border-[#222] bg-[#060010] px-2 py-0.5 text-xs text-white -translate-x-1/2"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
