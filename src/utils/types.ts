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
export type Message = string;

export interface Card {
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

export interface Error {
  message: Message;
}

export interface AccountsState {
  items: Account[];
  createdCardId: CardId;
  fetchedCard: Card;
  error: Message | null;
}

export interface AppState {
  accounts: AccountsState;
}

export type CardDetailsParams = {
  id: string;
};