import API from "../API";
import { addItems } from "../Action/actionCreators";
import { Dispatch} from "react";

export const getItems = () => (dispatch: Dispatch<any>) => {
  API.getItems()
    .then(((response: any) => response.json()))
    .then((json: Array<Item>) => {
      console.log(json)
      dispatch(addItems(json))
    })
}