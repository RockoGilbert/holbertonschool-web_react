
import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("Header /", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });
  it("renders img tag", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("img").exists()).toBe(true);
  })
  it("renders h1 tag", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("h1").exists()).toBe(true);
  })
});
