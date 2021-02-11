import { combineReducers } from "redux";
import { gif } from "./gif/gifReducers";
import { users } from "./users/usersReducers";

export default combineReducers({ gif, users });
