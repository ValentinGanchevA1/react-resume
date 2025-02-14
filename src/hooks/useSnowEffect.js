import { useCallback, useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";
import Particles from "@tsparticles/react";
import { ParticlesParams } from "../Schemas/Particles";

export const useSnowEffect = (theme) => {
	const [snow, setSnow] = useLocalStorage("snow", false, true);

	const memoizedSnowEffect = useMemo(() => {
		return snow && theme === "dark" ? <Particles params={ParticlesParams} /> : null;
	}, [snow, theme]);

	const toggleSnow = useCallback(() => setSnow(prevSnow => !prevSnow), [setSnow]);

	return { snow, memoizedSnowEffect, toggleSnow };
};
