import List from "@material-ui/core/List";
import { makeStyles, Theme } from "@material-ui/core/styles";
import React, { ChangeEvent, useState } from "react";
import { getPlatforms } from "../config/platforms";
import { Account } from "../utils/types";
import AccountsListItem from "./AccountsListItem";

const useStyles = makeStyles((theme: Theme) => ({
  list: {
    minWidth: "400px",
  },
}));

interface Props {}

export const AccountsList = (props: Props) => {
  const classes = useStyles();
  const [accounts, setAccounts] = useState<Account[] | []>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newAccount = {
      name: event.currentTarget.id,
      url: event.currentTarget.value,
    };

    setAccounts((prevState: Account[] | []) => {
      const withoutNewAccount = prevState.filter(
        (prevAcc) => prevAcc.name !== newAccount.name
      );
      return [...withoutNewAccount, newAccount];
    });
  };

  return (
    <List className={classes.list}>
      {getPlatforms().map((platform) => (
        <AccountsListItem
          key={platform.text}
          platform={platform}
          handleChange={handleChange}
        />
      ))}
    </List>
  );
};

export default AccountsList;
