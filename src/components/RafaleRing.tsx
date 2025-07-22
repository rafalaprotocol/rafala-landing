import { Suspense } from "react";
import ShaderPulse from "./ShaderPulse";

export default function RafaleRing() {
    return (
        <Suspense fallback={null}>
            <ShaderPulse />
        </Suspense>
    );
}
