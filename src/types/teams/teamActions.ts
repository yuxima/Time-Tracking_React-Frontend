import {
  CREATE_TEAM,
  GET_ALL_TEAMS_ASYNC,
  FETCH_TEAM_BY_ID,
} from "../../redux/constants/teams";

import { TeamDetailsModel } from "./teams";
import { API_ACTIONS } from "../../redux/actions/apiActions";
import { ApiPagedResponse, ApiResponse } from "../api/apiResponses";
import { ProjectDetailsModel } from "../projects/project";

export interface FetchAllTeamsRequestActionType {
  type: `${API_ACTIONS.FETCH_START}${typeof GET_ALL_TEAMS_ASYNC}`;
}

export interface FetchAllTeamsSuccessActionType {
  type: `${API_ACTIONS.FETCH_SUCCESS}${typeof GET_ALL_TEAMS_ASYNC}`;
  payload?: ApiPagedResponse<ProjectDetailsModel>;
}

export interface FetchAllTeamsFailedActionType {
  type: `${API_ACTIONS.FETCH_FAILURE}${typeof GET_ALL_TEAMS_ASYNC}`;
}

export interface CreateTeamSuccessActionType {
  type: `${API_ACTIONS.FETCH_SUCCESS}${typeof CREATE_TEAM}`;
  payload?: ApiResponse<TeamDetailsModel>;
}

export interface CreateTeamFailedActionType {
  type: `${API_ACTIONS.FETCH_FAILURE}${typeof CREATE_TEAM}`;
}

export interface FetchTeamByIdSuccessActionType {
  type: `${API_ACTIONS.FETCH_SUCCESS}${typeof FETCH_TEAM_BY_ID}`;
  payload: ApiResponse<TeamDetailsModel>;
}

export interface FetchTeamByIdRequestActionType {
  type: `${API_ACTIONS.FETCH_START}${typeof FETCH_TEAM_BY_ID}`;
}

export interface FetchTeamByIdFailedActionType {
  type: `${API_ACTIONS.FETCH_FAILURE}${typeof FETCH_TEAM_BY_ID}`;
}

export type TeamsActionTypes =
  | FetchTeamByIdFailedActionType
  | FetchTeamByIdRequestActionType
  | FetchTeamByIdSuccessActionType
  | CreateTeamFailedActionType
  | CreateTeamSuccessActionType
  | FetchAllTeamsFailedActionType
  | FetchAllTeamsRequestActionType
  | FetchAllTeamsSuccessActionType;
