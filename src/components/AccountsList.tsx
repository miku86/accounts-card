import List from "@material-ui/core/List";
import { makeStyles, Theme } from "@material-ui/core/styles";
import React, { ChangeEvent } from "react";
import { connect } from "react-redux";
import { getPlatforms } from "../config/platforms";
import { editAccount } from "../state/accountsSlice";
import { Account } from "../utils/types";
import AccountsListItem from "./AccountsListItem";

const useStyles = makeStyles((theme: Theme) => ({
  list: {
    minWidth: "400px",
  },
}));

interface Props {
  editAccount: (newAccount: Account) => void;
}

export const AccountsList = ({ editAccount }: Props) => {
  const classes = useStyles();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newAccount = {
      name: event.currentTarget.id,
      url: event.currentTarget.value,
    };

    editAccount(newAccount);
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

const mapDispatchToProps = {
  editAccount,
};

export default connect(null, mapDispatchToProps)(AccountsList);
