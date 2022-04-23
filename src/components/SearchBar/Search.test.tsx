import { screen } from "@testing-library/react";
import { waitFor } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import { Station } from "kari/locations";
import Map from "../../../modules/map/components/Map";
import { render, renderWithMap } from "@/testing-library/testing-library-utils";
import SearchBar from ".";
import { getLines, getStations } from "@/modules/map/api/mapAPI";
import { mapActions } from "@/common/store/map/map-slice";
import { useAppDispatch } from "@/common/hooks/useRedux";
describe("search component", () => {
  const station: Station = {
    name: "test",
    order: 1,
    line: "dsfsf",
    coords: { lng: 0, lat: 0 },
  };

  beforeAll(() => {});

  test("initial state", () => {
    render(<SearchBar />);
    const searchInput = screen.getByPlaceholderText("Search transmart");
    expect(searchInput).toBeInTheDocument();
    const list = screen.queryByRole("list");
    expect(list).not.toBeInTheDocument();
  });

  test("list exists after clicking", async () => {
    render(<SearchBar />);
    const searchInput = screen.getByPlaceholderText("Search transmart");
    userEvent.click(searchInput);
    screen.debug(searchInput);
    const list = await screen.findByRole("list");
    expect(list).toBeInTheDocument();
  });
});
