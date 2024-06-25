/**
 * @jest-environment jsdom
 */
import SideMap from "../components/forMap/SideMap";
import { render } from "@testing-library/react";
import CityState from "../components/forMap/CityState";
import MapComponent from "../components/forMap/MapComponent";

describe("Map", () => {
  // test("should render texts", () => {
  //   const { getByText } = render(<CityState />);
  //   expect(getByText("Barreiras")).toBeInTheDocument();
  // });
  it("should render markers in map", () => {
    const { getByText } = render(<MapComponent />);
    expect(getByText("Lar Batista David Gomes")).toBeInTheDocument();
  });
});
