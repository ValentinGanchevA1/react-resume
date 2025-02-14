import { useEffect, useState, useCallback, useMemo, lazy, Suspense } from "react";
import Particles from "@tsparticles/react";
import { ParticlesParams } from "../Schemas/Particles";
import { useTheme } from "../hooks/useTheme";
import { useSnowEffect } from "../hooks/useSnowEffect";
import { SnowToggleButton } from "./SnowToggleButton";
const SnowEffect = lazy(() => import("./SnowEffect"));

export const Options = () => {
	const { theme, icon, toggleTheme } = useTheme();
	const { snow, memoizedSnowEffect, toggleSnow } = useSnowEffect(theme);

	return (
		<div className="home__options no-print" id="resume__options">
			{theme === "dark" && <SnowToggleButton toggleSnow={toggleSnow} />}
			<Suspense fallback={<div>Loading...</div>}>
				{memoizedSnowEffect}
			</Suspense>
			<i
				className={`bx ${icon} change-theme`}
				title="Toggle Theme"
				id="theme-button"
				onClick={toggleTheme}
				aria-label="Toggle theme"
			/>
		</div>

	);
};
