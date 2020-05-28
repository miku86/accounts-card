import { SvgIconComponent } from "@material-ui/icons";

export type CardId = string;
export type UserId = string;
export type Name = string;
export type Url = string;
export type Text = string;
export type Placeholder = string;
export type HTMLId = string;

export interface Card {
  cardId: CardId;
  userId?: UserId;
  accounts: Account[];
}

export interface Account {
  name: Name;
  url: Url;
}

export interface Platform {
  text: Text;
  icon: SvgIconComponent | string;
  placeholder: Placeholder;
  id?: HTMLId;
}

export interface CardsState {
  items: Card[];
}

export interface AppState {
  cards: CardsState;
}
