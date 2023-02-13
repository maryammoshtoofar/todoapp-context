import { Select } from "./styled";

const Filters = () => {
  return (
    <Select defaultValue="All">
      <option value="All">All</option>
      <option value="Done"></option>
      <option value="Undone"></option>
    </Select>
  );
};

export default Filters;
