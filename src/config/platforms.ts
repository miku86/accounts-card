const platforms = [
  { text: "Homepage", icon: "Home" },
  { text: "E-Mail", icon: "Mail" },
  { text: "YouTube", icon: "YouTube" },
  { text: "Twitter", icon: "Twitter" },
  { text: "Facebook", icon: "Facebook" },
  { text: "Github", icon: "GitHub" },
  { text: "Reddit", icon: "Reddit" },
  { text: "Pinterest", icon: "Pinterest" },
  { text: "Instagram", icon: "Instagram" },
  { text: "LinkedIn", icon: "LinkedIn" },
  { text: "Telegram", icon: "Telegram" },
  { text: "Whatsapp", icon: "WhatsApp" },
  { text: "Snapchat", icon: "" },
  { text: "TikTok", icon: "" },
  { text: "VK", icon: "" },
  { text: "Tumblr", icon: "" },
  { text: "Viber", icon: "" },
  { text: "Signal", icon: "" },
  { text: "Line", icon: "" },
  { text: "Medium", icon: "" },
  { text: "Patreon", icon: "" },
  { text: "WIP", icon: "" },
  { text: "Makerlog", icon: "" },
  { text: "Buy Me A Coffee", icon: "" },
  { text: "Ko-Fi", icon: "" },
  { text: "dev.to", icon: "" },
  { text: "Stack Overflow", icon: "" },
  { text: "WeChat", icon: "" },
  { text: "QQ", icon: "" },
  { text: "Sina Weibo", icon: "" },
  { text: "Baidu Tieba", icon: "" },
  { text: "Hacker News", icon: "" },
  { text: "Wikipedia", icon: "" },
  { text: "Ebay", icon: "" },
  { text: "Quora", icon: "" },
  { text: "Spotify", icon: "" },
  { text: "Gitlab", icon: "" },
  { text: "Steam", icon: "" },
];

const platformsWithIcon = () =>
  platforms.filter((platform) => platform.icon.length > 0);

export const getPlatforms = platformsWithIcon;
