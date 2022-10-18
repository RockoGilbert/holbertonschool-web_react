import Footer from "./Footer";
import { shallow } from "enzyme";
import React from "react";

describe("Footer", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });
  it("renders a p tag", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain("Copyright");
  })
});
