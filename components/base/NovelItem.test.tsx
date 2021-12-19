import { render, screen } from "@testing-library/react";
import { mockNovel } from "../../mocks/global";
import { NovelItem } from "./NovelItem";

describe("NovelItem component", () => {
  it("should show the title of the novel", () => {
    render(<NovelItem novel={mockNovel}></NovelItem>);
    expect(screen.getByText("novel")).toBeDefined();
  });
  it("should show the first part of the novel", () => {
    render(<NovelItem novel={mockNovel}></NovelItem>);
    expect(screen.getByText("line 1")).toBeDefined();
    expect(screen.getByText("line 2")).toBeDefined();
  });
});
