'use client';

import {
    ChevronRight, Globe, MessageCircle, Code2, FileCode, Wrench,
    Terminal, Command, Play, Palette, Gamepad2, Briefcase,
    Network, Lock, Share2, Cpu, type LucideIcon
} from 'lucide-react';

const CATEGORY_ICONS: Record<string, LucideIcon> = {
    'Web Browsers': Globe,
    'Communication': MessageCircle,
    'Dev: Languages': Code2,
    'Dev: Editors': FileCode,
    'Dev: Tools': Wrench,
    'Terminal': Terminal,
    'CLI Tools': Command,
    'Media': Play,
    'Creative': Palette,
    'Gaming': Gamepad2,
    'Office': Briefcase,
    'VPN & Network': Network,
    'Security': Lock,
    'File Sharing': Share2,
    'System': Cpu,
};

// Clickable category header with chevron and selection count
export function CategoryHeader({
    category,
    isExpanded,
    isFocused,
    onToggle,
    selectedCount,
    onFocus,
}: {
    category: string;
    isExpanded: boolean;
    isFocused: boolean;
    onToggle: () => void;
    selectedCount: number;
    onFocus?: () => void;
}) {
    return (
        <button
            data-nav-id={`category:${category}`}
            onClick={(e) => { e.stopPropagation(); onFocus?.(); onToggle(); }}
            tabIndex={-1}
            aria-expanded={isExpanded}
            aria-label={`${category} category, ${selectedCount} apps selected`}
            // Soft Pill design: rounded tags with accent color
            className={`category-header group w-full h-7 flex items-center gap-2 text-xs font-bold text-[var(--accent)] 
        bg-[var(--accent)]/10 hover:bg-[var(--accent)]/20
        uppercase tracking-wider px-3 rounded-lg mb-3
        transition-all duration-200 outline-none
        ${isFocused ? 'bg-[var(--accent)]/25 shadow-sm' : ''}`}
        >
            <ChevronRight className={`w-4 h-4 text-[var(--accent)]/70 group-hover:text-[var(--accent)] transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`} />
            {(() => {
                const Icon = CATEGORY_ICONS[category] || Terminal;
                return <Icon className="w-4 h-4 text-[var(--accent)] opacity-80 group-hover:opacity-100 transition-opacity duration-200" />;
            })()}
            <span className="flex-1 text-left">{category}</span>
            {selectedCount > 0 && (
                <span
                    className="text-xs text-[var(--accent)] font-bold ml-1.5 opacity-100"
                    style={{ transition: 'color 0.5s' }}
                >
                    [{selectedCount}]
                </span>
            )}
        </button>
    );
}
