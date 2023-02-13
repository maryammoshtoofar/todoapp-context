import { Select } from "./styled";

const Filters = () => {
  return (
    <Select>
      <option selected>All</option>
      <option>Done</option>
      <option>Undone</option>
    </Select>
  );
};

export default Filters;
