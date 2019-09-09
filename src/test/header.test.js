import React from "react";
import Header from "../components/Header";

/**
 * Instance from Header to be tested
 * @type {Header}
 */
const component = new Header();
it("renders without crashing", () => {
    expect(component.render()).toBeTruthy()
});
