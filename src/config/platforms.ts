import {
  Facebook,
  GitHub,
  Home,
  Instagram,
  LinkedIn,
  Mail,
  Person,
  Pinterest,
  Reddit,
  Telegram,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import { Platform, Text } from "../utils/types";

const platforms = [
  {
    placeholder: "Max",
    text: "Name",
    icon: Person,
  },
  {
    placeholder: "https://",
    text: "Homepage",
    icon: Home,
  },
  {
    placeholder: "max@super.com",
    text: "E-Mail",
    icon: Mail,
  },
  {
    placeholder: "https://twitter.com/",
    text: "Twitter",
    icon: Twitter,
  },
  {
    placeholder: "https://www.linkedin.com/in/",
    text: "LinkedIn",
    icon: LinkedIn,
  },
  {
    placeholder: "https://www.youtube.com/channel/",
    text: "YouTube",
    icon: YouTube,
  },
  {
    placeholder: "https://www.facebook.com/",
    text: "Facebook",
    icon: Facebook,
  },
  {
    placeholder: "https://www.instagram.com/",
    text: "Instagram",
    icon: Instagram,
  },
  {
    placeholder: "https://github.com/",
    text: "Github",
    icon: GitHub,
  },
  {
    placeholder: "https://www.reddit.com/user/",
    text: "Reddit",
    icon: Reddit,
  },
  {
    placeholder: "https://www.pinterest.com/",
    text: "Pinterest",
    icon: Pinterest,
  },
  {
    placeholder: "https://telegram.me/",
    text: "Telegram",
    icon: Telegram,
  },
  { placeholder: "", text: "Snapchat", icon: "" },
  { placeholder: "", text: "TikTok", icon: "" },
  { placeholder: "", text: "VK", icon: "" },
  { placeholder: "", text: "Tumblr", icon: "" },
  { placeholder: "", text: "Viber", icon: "" },
  { placeholder: "", text: "Signal", icon: "" },
  { placeholder: "", text: "Line", icon: "" },
  { placeholder: "", text: "Medium", icon: "" },
  { placeholder: "", text: "Patreon", icon: "" },
  { placeholder: "", text: "WIP", icon: "" },
  { placeholder: "", text: "Makerlog", icon: "" },
  { placeholder: "", text: "Buy Me A Coffee", icon: "" },
  { placeholder: "", text: "Ko-Fi", icon: "" },
  { placeholder: "", text: "dev.to", icon: "" },
  { placeholder: "", text: "Stack Overflow", icon: "" },
  { placeholder: "", text: "WeChat", icon: "" },
  { placeholder: "", text: "QQ", icon: "" },
  { placeholder: "", text: "Sina Weibo", icon: "" },
  { placeholder: "", text: "Baidu Tieba", icon: "" },
  { placeholder: "", text: "Hacker News", icon: "" },
  { placeholder: "", text: "Wikipedia", icon: "" },
  { placeholder: "", text: "Ebay", icon: "" },
  { placeholder: "", text: "Quora", icon: "" },
  { placeholder: "", text: "Spotify", icon: "" },
  { placeholder: "", text: "Gitlab", icon: "" },
  { placeholder: "", text: "Steam", icon: "" },
];

const getPlatformsWithIcon = (platforms: Platform[]) =>
  platforms.filter((platform) => typeof platform.icon === "object");

const generateId = (text: Text) => text.trim().replace(" ", "-").toLowerCase();

const addIdToPlatforms = (platforms: Platform[]) =>
  platforms.map((platform) => ({
    ...platform,
    id: generateId(platform.text),
  }));

export const getPlatforms = () =>
  addIdToPlatforms(getPlatformsWithIcon(platforms));
