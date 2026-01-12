import React, { useEffect, useRef } from "react"
import { CommitsGrid } from "./github"

type Props = {
    type?: "welcome" | "github"
    onFinish?: () => void
}

export default function InitialView({ type = "welcome", onFinish }: Props) {
    const timerRef = useRef<number | null>(null)

    useEffect(() => {
        const seen = localStorage.getItem("seenSplash_v1")
        if (seen) {
            onFinish?.()
            return
        }

        const totalSquares = 25
        const stagger = 60 // ms
        const animDuration = 600 // ms
        const total = totalSquares * stagger + animDuration

        timerRef.current = window.setTimeout(() => {
            localStorage.setItem("seenSplash_v1", "1")
            onFinish?.()
        }, total)

        return () => {
            if (timerRef.current) window.clearTimeout(timerRef.current)
        }
    }, [onFinish])

    const text = type === "welcome" ? "WELCOME" : "SiL3nTL00p"

    const handleSkip = () => {
        if (timerRef.current) window.clearTimeout(timerRef.current)
        localStorage.setItem("seenSplash_v1", "1")
        onFinish?.()
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black cursor-pointer"
            onClick={handleSkip}
            role="button"
            aria-label="Skip initial view"
        >
            <div className="p-4">
                <CommitsGrid text={text} />
            </div>
        </div>
    )
}
