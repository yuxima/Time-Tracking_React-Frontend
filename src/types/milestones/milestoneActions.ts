import {
  CREATE_MILESTONE,
  GET_ALL_MILESTONES_ASYNC,
  FETCH_MILESTONE_BY_ID,
} from "../../redux/constants/milestines";

import { MilestonModel, MilestoneDetailsModel } from "./milestones";

import { API_ACTIONS } from "../../redux/actions/apiActions";
import { ApiPagedResponse, ApiResponse } from "../api/apiResponses";
import {
  FetchIssueByIdFailureActionType,
  FetchIssueByIdRequestActionType,
  FetchIssueByIdSucessActionType,
} from "../issues/issesActions";
import { IssueDetailedModel } from "../issues/isues";

export interface FetchAllMilestonesRequestActionType {
  type: `${API_ACTIONS.FETCH_START}${typeof GET_ALL_MILESTONES_ASYNC}`;
}

export interface FetchAllMilestonesSuccessActionType {
  type: `${API_ACTIONS.FETCH_SUCCESS}${typeof GET_ALL_MILESTONES_ASYNC}`;
  payload?: ApiPagedResponse<MilestoneDetailsModel>;
}

export interface FetchAllMilestonesFailedActionType {
  type: `${API_ACTIONS.FETCH_FAILURE}${typeof GET_ALL_MILESTONES_ASYNC}`;
}

export interface CreateMilestoneSuccessActionType {
  type: `${API_ACTIONS.FETCH_SUCCESS}${typeof CREATE_MILESTONE}`;
  payload?: ApiResponse<MilestoneDetailsModel>;
}

export interface CreateMilestoneFailedActionType {
  type: `${API_ACTIONS.FETCH_FAILURE}${typeof CREATE_MILESTONE}`;
}

export interface FetchMilestoneByIdSuccessActionType {
  type: `${API_ACTIONS.FETCH_SUCCESS}${typeof FETCH_MILESTONE_BY_ID}`;
  payload?: ApiPagedResponse<MilestoneDetailsModel>;
}

export interface FetchMilestoneByIdRequestActionType {
  type: `${API_ACTIONS.FETCH_START}${typeof FETCH_MILESTONE_BY_ID}`;
}

export interface FetchMilestoneByIdFailedActionType {
  type: `${API_ACTIONS.FETCH_FAILURE}${typeof FETCH_MILESTONE_BY_ID}`;
}

export type MilestoneActionTypes =
  | FetchIssueByIdFailureActionType
  | FetchIssueByIdSucessActionType
  | FetchIssueByIdRequestActionType
  | FetchMilestoneByIdFailedActionType
  | FetchMilestoneByIdRequestActionType
  | FetchMilestoneByIdSuccessActionType
  | CreateMilestoneFailedActionType
  | CreateMilestoneSuccessActionType
  | FetchAllMilestonesFailedActionType
  | FetchAllMilestonesSuccessActionType
  | FetchAllMilestonesRequestActionType;
