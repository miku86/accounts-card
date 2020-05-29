import { SvgIconComponent } from "@material-ui/icons";

export type CardId = string;
export type UserId = string;
export type Name = string;
export type Url = string;
export type Text = string;
export type Placeholder = string;
export type HTMLId = string;
export type Id = string;
export type ShowInCard = boolean;

export interface Card {
  cardId: CardId;
  userId?: UserId;
  accounts: Account[] | undefined;
}

export interface Account {
  name: Name;
  id: Id;
  url: Url;
  showInCard: ShowInCard;
}

export interface Platform {
  text: Text;
  icon: SvgIconComponent | string;
  placeholder: Placeholder;
  id?: HTMLId;
}

export interface AccountsState {
  items: Account[];
}

export interface AppState {
  accounts: AccountsState;
}
