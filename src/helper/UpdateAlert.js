import Swal from "sweetalert2";
import { updateStauts } from "../APIRequest/APIRequest";

export function UpdateTodo(id, status) {
  return Swal.fire({
    title: "Change Status",
    input: "select",
    inputOptions: {
      New: "New",
      Progress: "Progress",
      Completed: "Completed",
      Canceled: "Canceled",
    },
    inputValue: status,
  }).then((result) => {
    return updateStauts(id, result.value).then((res) => {
      return res;
    });
  });
}
