import React from "react";
import Translation from "./translation.interface";

export interface contextProps{
  location:string,
  apiData:[],
  setLocation: React.Dispatch<React.SetStateAction<string>>,
  setApiData: React.Dispatch<React.SetStateAction<[]>>
}



