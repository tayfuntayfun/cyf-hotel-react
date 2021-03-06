import React, { useState } from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <hr />
      <ul className="order-list">
        <li>
          <Order orderType="Pizzas" />{" "}
        </li>
        <li>
          <Order orderType="Salads" />{" "}
        </li>
        <li>
          <Order orderType="Chocolate cake" />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
