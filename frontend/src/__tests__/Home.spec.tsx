import SideMap from "../components/forMap/SideMap";
import { render } from "@testing-library/react";
describe("Home", () => {
  test("should render texts", () => {
    const { getByText } = render(<SideMap />);
    expect(getByText("Barreiras")).toBeInTheDocument();
  });
});
