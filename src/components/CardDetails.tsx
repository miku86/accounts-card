import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCard } from "../state/accountsSlice";
import { Account, AppState, Card, CardId, Error } from "../utils/types";

interface Props {
  fetchCard: (cardId: CardId) => void;
  fetchedCard: Card;
  error: Error["message"] | null;
}

const CardDetails = ({ fetchCard, fetchedCard, error }: Props) => {
  let { id: cardId } = useParams();

  useEffect(() => {
    fetchCard(cardId);
  }, [cardId, fetchCard]);

  return error ? (
    <div>{error}</div>
  ) : fetchedCard ? (
    <div>
      <ul>
        {fetchedCard.accounts &&
          fetchedCard.accounts.map((account: Account) => (
            <li>
              {account.name} - {account.url}
            </li>
          ))}
      </ul>
    </div>
  ) : (
    <div>Loading</div>
  );
};

const mapStateToProps = (state: AppState) => ({
  fetchedCard: state.accounts.fetchedCard,
  error: state.accounts.error,
});

const mapDispatchToProps = {
  fetchCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardDetails);
