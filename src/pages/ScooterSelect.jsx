import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ScooterRadioBtn, Map } from "../components";
import { scooterOverview } from "../data/data";
import scooterutils from "../utils/scooterutils";
import scooter from "../models/scooters";
import mapConfig from "../config/config.json";
import "../Map.css";
const startpoint = mapConfig.center;
const zoom = 14;

const ScooterSelect = () => {
  const [selected, setSelected] = useState({});
  const location = useLocation();
  const { id } = location.state;

  useEffect(() => {
    async function fetchData() {
      const res = await scooter.getScooterById(id);
      setSelected(res);
    }
    fetchData();
  }, []);

  const GetScooterDetails = () => {
    const getValueByKey = (key, obj) => {
      return [].concat(key).reduce((o, k) => o[k], obj);
    };

    return scooterOverview.map((item) => {
      return (
        <div className="flex flex-row w-80 justify-between border-b">
          <p>{item.label}</p>
          <p>{getValueByKey(item.data, selected.scooter)}</p>
        </div>
      );
    });
  };

  if (!selected.scooter) {
    return <div>loading...</div>;
  }

  return (
    <div className="w-full p-4 flex flex-col">
      <div className="bg-white flex flex-row p-7 align-middle rounded-xl shadow-md">
        <h1 className="text-3xl mr-2">Selected Scooter #233</h1>
        <h2
          style={{
            backgroundColor: scooterutils.sateColor(selected.scooter.status),
          }}
          className="p-2 rounded-xl text-white"
        >
          {selected.scooter.status}
        </h2>
      </div>

      <div className="flex flex-row justify-between mt-4 h-full overflow-scroll">
        <div className="p-4 mr-4 w-2/3 rounded-xl shadow-md bg-white">
          <h1 className="text-2xl font-semibold pb-2">Scooter Position</h1>
          <div>
            <Map center={startpoint} zoom={zoom} />
          </div>
          <div>
            <h1 className="text-xl py-2">Overview</h1>
            {GetScooterDetails()}
          </div>
        </div>

        <div className="h-full p-7 ml-4 rounded-xl w-1/3 bg-white shadow-md flex flex-col justify-between">
          <div>
            <h1 className="text-center font-semibold text-2xl">Settings</h1>
            <div>
              <p className="font-semibold text-xl">Set mode</p>
              <ScooterRadioBtn status={selected.scooter.status} />
            </div>
            <div>
              <p className="font-semibold text-xl">Set position</p>
              <div className="flex flex-row justify-between py-3">
                <input
                  type="text"
                  placeholder="Set Latitude"
                  value={selected.scooter.coordinates.latitude}
                  className="border-b border-gray-800 mr-2"
                />
                <input
                  type="text"
                  placeholder="Set longitude"
                  value={selected.scooter.coordinates.longitude}
                  className="border-b border-gray-800 ml-2"
                />
              </div>
              <div className="text-center my-5">
                <button
                  className="p-3 bg-blue-900 hover:bg-violet-700
               text-white rounded-xl font-semibold transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
          <div className="text-center my-5">
            <button
              className="p-3 bg-red-400 hover:bg-red-700
               text-white rounded-xl font-semibold transition-colors"
            >
              Delete Scooter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScooterSelect;
