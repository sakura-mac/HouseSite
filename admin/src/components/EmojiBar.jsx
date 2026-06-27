import React, { useState } from 'react';
import { Popover } from 'antd';

// 常用 emoji 列表（按类别分组）
const EMOJI_CATEGORIES = {
  '常用': ['🌹', '⭐', '🌟', '✨', '💫', '🔥', '💯', '✅', '❌', '❗', '❓', '➡️', '⬅️', '⬆️', '⬇️', '📍'],
  '房产': ['🏠', '🏡', '🏢', '🏬', '🏣', '🏭', '🏗️', '🔑', '🚪', '🛏️', '🛋️', '🚿', '🚽', '🧊', '❄️', '♨️'],
  '交通': ['🚃', '🚉', '🚊', '🚝', '🚄', '🚅', '🚗', '🚕', '🚌', '🚲', '🚶', '🏃', '✈️', '🚢', '🅿️', '⛽'],
  '自然': ['🌞', '🌅', '🌻', '🌸', '🌺', '🍃', '🌳', '🌴', '🌊', '⛰️', '🗻', '🏔️', '🌈', '☁️', '⛅', '🌧️'],
  '人物': ['👍', '👏', '🙏', '💪', '🤝', '😊', '😁', '🥰', '😎', '🤔', '😱', '🤗', '👨', '👩', '👶', '🧑'],
  '物品': ['💰', '💴', '💵', '🏦', '💳', '📊', '📈', '📉', '📋', '📝', '📄', '📰', '📅', '⏰', '🔔', '🎁'],
  '符号': ['🔴', '🟠', '🟡', '🟢', '🔵', '🟣', '⚫', '⚪', '🔶', '🔷', '🔸', '🔹', '▪️', '▫️', '♦️', '♥️'],
};

// 快捷 emoji（直接显示在工具栏上）
const QUICK_EMOJIS = ['🌹', '⭐', '🌟', '🔥', '✅', '❌', '🏠', '💰', '🚃', '🌞', '👍', '💯'];

/**
 * Emoji 快捷栏 — 放在 MDEditor 上方
 * 左侧是常用 emoji 快捷按钮，右侧 "更多" 按钮弹出全分类选择器
 */
export default function EmojiBar({ content, setContent }) {
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('常用');

  const insertEmoji = (emoji) => {
    setContent((content || '') + emoji);
  };

  const renderFullPicker = () => (
    <div style={{ width: 340 }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 8, paddingBottom: 8, borderBottom: '1px solid #f0f0f0' }}>
        {Object.keys(EMOJI_CATEGORIES).map(cat => (
          <span
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: '2px 8px',
              fontSize: 12,
              cursor: 'pointer',
              borderRadius: 4,
              background: activeCategory === cat ? '#1890ff' : '#f5f5f5',
              color: activeCategory === cat ? '#fff' : '#666',
            }}
          >
            {cat}
          </span>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 2, maxHeight: 240, overflowY: 'auto' }}>
        {EMOJI_CATEGORIES[activeCategory].map((emoji, i) => (
          <span
            key={i}
            onClick={() => {
              insertEmoji(emoji);
              setOpen(false);
            }}
            style={{
              fontSize: 20,
              cursor: 'pointer',
              textAlign: 'center',
              padding: '4px 0',
              borderRadius: 4,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#f0f0f0'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
          >
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      padding: '6px 12px',
      background: '#fafafa',
      borderBottom: '1px solid #f0f0f0',
      flexWrap: 'wrap',
    }}>
      <span style={{ fontSize: 12, color: '#999', marginRight: 4 }}>Emoji:</span>
      {QUICK_EMOJIS.map((emoji, i) => (
        <span
          key={i}
          onClick={() => insertEmoji(emoji)}
          style={{
            fontSize: 18,
            cursor: 'pointer',
            padding: '2px 4px',
            borderRadius: 4,
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#e8e8e8'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
        >
          {emoji}
        </span>
      ))}
      <Popover
        content={renderFullPicker}
        trigger="click"
        open={open}
        onOpenChange={setOpen}
        placement="bottomLeft"
      >
        <span
          style={{
            fontSize: 12,
            color: '#1890ff',
            cursor: 'pointer',
            padding: '2px 8px',
            marginLeft: 4,
          }}
        >
          更多 ▾
        </span>
      </Popover>
    </div>
  );
}

export { EMOJI_CATEGORIES };
