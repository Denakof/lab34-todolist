import React from "react";
import { Button, Card, Elevation } from "@blueprintjs/core";
import Auth from "../../context/auth/auth";
import faker from "faker";

function List(props) {
  return (
    <Card elevation={Elevation.THREE}>
      {props.pagination().map((item, idx) => (
        <div key={idx}>
          <p>{item.text}</p>
          <p>
            <small>Assigned to: {item.assignee}</small>
          </p>
          <p>
            <small>Rating: {item.difficulty}</small>
          </p>
          <p>
            <small>Account number: {faker.finance.account()}</small>
          </p>
          {/* <p>
            Ratings: {item.difficulty}
          </p> */}
          <p> Account type:{faker.finance.accountName()}</p>
          <p> Routing:{faker.finance.routingNumber()}</p>
          <p> Amount:{faker.finance.amount()}</p>
          <p> currencyName:{faker.finance.currencyName()}$</p>

          <p> Account type:{faker.finance.creditCardNumber()}</p>
          <p>{faker.finance.transactionDescription()}</p>

          <div>Complete: {item.complete.toString()}</div>
          {!item.complete ? (
            <Auth capability="create">
              <Button onClick={() => props.toggleComplete(item.id)}>
                Complete: {item.complete.toString()}
              </Button>
            </Auth>
          ) : (
            <>
              <Auth capability="create">
                <Button onClick={() => props.toggleComplete(item.id)}>
                  Complete: {item.complete.toString()}
                </Button>
                <br></br>
                <Button onClick={() => props.deleteItem(item.id)}>
                  Delete{" "}
                </Button>
              </Auth>
            </>
          )}
          <hr />
        </div>
      ))}
      <Button onClick={props.previous}>Previous</Button>
      <Button onClick={props.next}>Next</Button>
    </Card>
  );
}

export default List;
