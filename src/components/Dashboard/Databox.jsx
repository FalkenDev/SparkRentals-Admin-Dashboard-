import React from "react";
import { StatContainer } from "../";
import { dashboard } from "../../data/data";
const Databox = () => {
  const databoxes = () => {
    return dashboard.map((items) => {
      return (
        <div className="px-1">
          <StatContainer
            icon={items.icon}
            title={items.title}
            color={items.color}
          />
        </div>
      );
    });
  };
  return (
    <div className="flex flex-row justify-between p-8 bg-blue-400 shadow-inner w-full">
      {databoxes()}
    </div>
  );
};

export default Databox;
