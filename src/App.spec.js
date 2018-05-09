import { expect } from "chai";
import { shallow } from "enzyme";
import React from "react";
import sinon from "sinon";

import App from "./App";
import Card from "./Card";
import GuessCount from "./GuessCount";

describe("<App />", () => {
  it("rendre without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).to.contain(<GuessCount guesses={0} />);
  });

  it("has 36 cards", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Card")).to.have.length(36);
  });

  it("Should trigger its 'onClick' prop when clicked", () => {
    const onClick = sinon.spy();
    const wrapper = shallow(
      <Card card="😁" feedback="hidden" index={0} onClick={onClick} />
    );
    wrapper.simulate("click");
    expect(onClick).to.have.been.calledWith(0);
  });

  it("should match its reference snapshot", () => {
    const onClick = sinon.spy();
    const wrapper = shallow(
      <Card card="😁" feedback="hidden" index={0} onClick={onClick} />
    );
    expect(wrapper).to.matchSnapshot();
  });
});
