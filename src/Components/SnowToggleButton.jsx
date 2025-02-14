import React from "react";

export const SnowToggleButton = ({ toggleSnow }) => (
	<i
		className="bx bx-cloud-snow enable-snow"
		title="Activate Snow"
		id="snow-button"
		onClick={toggleSnow}
		aria-label="Toggle snow effect"
	/>
);
