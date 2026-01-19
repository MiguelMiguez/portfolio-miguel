import React from "react";
import { Globe } from "lucide-react";
import "./LangSwitcher.css";

export default function LangSwitcher({ lang, onChange }) {
    return (
        <button className="lang-switcher" onClick={onChange} aria-label="Change language">
            <Globe size={16} />
            <span className="lang-text">{lang.toUpperCase()}</span>
        </button>
    );
}