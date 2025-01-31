import {
  AddToRoleFailedActionType,
  AddToRoleSuccessActionType,
} from "../../types/roles/roleActions";
import { AddToRoleRequest } from "../../types/roles/roles";
import { Dispatch } from "react";
import { ThunkResult } from "./issuesActions";
import { AxiosResponse } from "axios";
import { ApiEmptyResponse } from "../../types/api/apiResponses";
import client from "../../api/clients/authClinet";

//add to role
export const addToRole = (
  request: AddToRoleRequest
): ThunkResult<void> => async (dispatch) => {
  try {
    const response: AxiosResponse<ApiEmptyResponse> = await client.post(
      "/add-to-role",
      request
    );
    handleAddToRole(dispatch, response.data);
  } catch (e) {
    handleAddToRoleFail(dispatch);
  }
};

export const handleAddToRole = (
  dispatch: Dispatch<AddToRoleSuccessActionType>,
  response: ApiEmptyResponse
) => {
  dispatch({
    type: "FETCH_SUCCESS_ADD_TO_ROLE",
    payload: response,
  });
};

export const handleAddToRoleFail = (
  dispatch: Dispatch<AddToRoleFailedActionType>
) => {
  dispatch({
    type: "FETCH_FAILURE_ADD_TO_ROLE",
  });
};
