import React, { useState, useRef, useEffect } from 'react';
import { Popover } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

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

/**
 * Emoji 选择器按钮，可直接插入到 MDEditor 工具栏
 * 用法：在 MDEditor 的 components 中注册为自定义命令
 */
export function EmojiButton({ content, setContent }) {
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('常用');

  const insertEmoji = (emoji) => {
    setContent(content + emoji);
  };

  const renderEmojiGrid = () => (
    <div style={{ width: 320 }}>
      {/* 分类标签 */}
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
      {/* emoji 网格 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 2 }}>
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
              transition: 'background 0.15s',
            }}
            onMouseEnter={(e) => { e.target.style.background = '#f0f0f0'; }}
            onMouseLeave={(e) => { e.target.style.background = 'transparent'; }}
          >
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <Popover
      content={renderEmojiGrid}
      trigger="click"
      open={open}
      onOpenChange={setOpen}
      placement="bottomLeft"
    >
      <SmileOutlined style={{ fontSize: 16, cursor: 'pointer' }} />
    </Popover>
  );
}

/**
 * MDEditor 自定义工具栏命令名称
 * 在 MDEditor 的 commands 属性中使用
 */
export const EMOJI_COMMAND_NAME = 'emoji';

export { EMOJI_CATEGORIES };
