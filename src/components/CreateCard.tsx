import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Switch,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { toggleAccountVisibility } from "../state/accountsSlice";
import { Account, AppState, Name } from "../utils/types";

const useStyles = makeStyles((theme: Theme) => ({
  list: {
    minWidth: "400px",
  },
  listItem: {
    backgroundColor: theme.palette.background.paper,
    margin: "10px 0",
    borderRadius: "4px",
    boxShadow:
      "0 1px 1px 0 rgba(0,0,0,0.2),0 2px 1px -1px rgba(0,0,0,0.2),0 1px 3px 0 rgba(0,0,0,0.2)",
  },
}));

interface Props {
  accounts?: Account[];
  open: boolean;
  handleClose: () => void;
  toggleAccountVisibility: (name: Name) => void;
}

export const CreateCard = ({
  accounts,
  open,
  handleClose,
  toggleAccountVisibility,
}: Props) => {
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    toggleAccountVisibility(event.currentTarget.name);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="create-card-dialog"
    >
      <DialogTitle id="create-card-dialog-title">
        Control which accounts to share
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please check your data and control which accounts you want to share.
        </DialogContentText>
        <List className={classes.list} dense={true}>
          {accounts && accounts.length ? (
            accounts.map((account: Account) => (
              <ListItem
                key={account.id}
                className={classes.listItem}
                dense={true}
              >
                <ListItemText primary={account.name} secondary={account.url} />
                <Switch
                  checked={account.showInCard}
                  onChange={handleChange}
                  color="primary"
                  name={account.id}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </ListItem>
            ))
          ) : (
            <Typography variant="body1" align="center" color="error">
              Please add at least one account.
            </Typography>
          )}
        </List>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="primary" onClick={handleClose}>
          Create Card
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state: AppState) => ({
  accounts: state.accounts.items,
});

const mapDispatchToProps = {
  toggleAccountVisibility,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCard);
