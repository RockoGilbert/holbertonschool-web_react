import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";

describe("Login", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
  });
  it("renders a label", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("label").length).toBe(2);
  })
  it("renders an input", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("input").length).toBe(2);
  })
});
