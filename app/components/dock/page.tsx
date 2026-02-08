"use client";

import { ComponentTabs } from "@/components/component-tabs";
import { Dock } from "@/components/dock";
import { CodeBlock } from "@/components/ui/code-block";
import {
  Home,
  Search,
  Heart,
  Settings,
  User,
  Mail,
  Bell,
  Calendar,
} from "lucide-react";

export default function DockPage() {
  const dockItems = [
    {
      icon: <Home className="w-6 h-6 text-[#B19EEF]" />,
      label: "Home",
      onClick: () => console.log("Home clicked"),
    },
    {
      icon: <Search className="w-6 h-6 text-[#B19EEF]" />,
      label: "Search",
      onClick: () => console.log("Search clicked"),
    },
    {
      icon: <Heart className="w-6 h-6 text-[#B19EEF]" />,
      label: "Favorites",
      onClick: () => console.log("Favorites clicked"),
    },
    {
      icon: <Mail className="w-6 h-6 text-[#B19EEF]" />,
      label: "Mail",
      onClick: () => console.log("Mail clicked"),
    },
    {
      icon: <Bell className="w-6 h-6 text-[#B19EEF]" />,
      label: "Notifications",
      onClick: () => console.log("Notifications clicked"),
    },
    {
      icon: <Calendar className="w-6 h-6 text-[#B19EEF]" />,
      label: "Calendar",
      onClick: () => console.log("Calendar clicked"),
    },
    {
      icon: <User className="w-6 h-6 text-[#B19EEF]" />,
      label: "Profile",
      onClick: () => console.log("Profile clicked"),
    },
    {
      icon: <Settings className="w-6 h-6 text-[#B19EEF]" />,
      label: "Settings",
      onClick: () => console.log("Settings clicked"),
    },
  ];

  const codeString = `"use client";

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

// Usage
<Dock items={dockItems} />`;

  const previewContent = (
    <>
      <div className="bg-[#170D27] rounded-[24px] border border-[#271E37] p-8 min-h-[400px] flex items-center justify-center relative">
        <Dock items={dockItems} />
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <h3 className="text-white font-semibold mb-2">Customization</h3>
          <p className="text-gray-400 text-sm">
            Hover over the dock items to see the magnification effect. The dock
            uses spring physics for smooth, natural animations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#060010] border border-[#271E37] rounded-[15px] p-4">
            <h4 className="text-white font-medium mb-2 text-sm">Props</h4>
            <ul className="text-gray-400 text-xs space-y-1">
              <li>
                <code className="text-[#B19EEF]">magnification</code>: Max size
                on hover (default: 70)
              </li>
              <li>
                <code className="text-[#B19EEF]">distance</code>: Effect range
                (default: 200)
              </li>
              <li>
                <code className="text-[#B19EEF]">baseItemSize</code>: Default
                size (default: 50)
              </li>
              <li>
                <code className="text-[#B19EEF]">panelHeight</code>: Dock
                height (default: 68)
              </li>
            </ul>
          </div>

          <div className="bg-[#060010] border border-[#271E37] rounded-[15px] p-4">
            <h4 className="text-white font-medium mb-2 text-sm">
              Spring Physics
            </h4>
            <ul className="text-gray-400 text-xs space-y-1">
              <li>
                <code className="text-[#B19EEF]">mass</code>: 0.1
              </li>
              <li>
                <code className="text-[#B19EEF]">stiffness</code>: 150
              </li>
              <li>
                <code className="text-[#B19EEF]">damping</code>: 12
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );

  const codeContent = <CodeBlock code={codeString} language="tsx" />;

  const contributeContent = (
    <div className="bg-[#170D27] rounded-[24px] border border-[#271E37] p-8">
      <h3 className="text-white font-semibold mb-4">
        Contribute to this component
      </h3>
      <p className="text-gray-400 mb-6">
        Help improve the Dock component by contributing to the AJ STUDIOZ
        component library.
      </p>
      <a
        href="https://github.com/your-repo/aj-studioz-main"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#B19EEF] text-[#060010] px-6 py-3 rounded-[15px] font-medium hover:bg-[#9f87e8] transition-colors"
      >
        View on GitHub
      </a>
    </div>
  );

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Dock</h1>
        <p className="text-gray-400 text-lg">
          An animated macOS-style dock with spring physics and magnification
          effects on hover. Built with Framer Motion.
        </p>
      </div>

      <ComponentTabs
        preview={previewContent}
        code={codeContent}
        contribute={contributeContent}
        componentName="Dock"
      />
    </div>
  );
}
