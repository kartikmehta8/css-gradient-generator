import Head from "next/head"
import Image from "next/image"
import { SettingsProvider } from "../context/SettingsContext"
import AnimatedBackground from "../components/AnimatedBackground"
import Controls from "../components/Controls"
import Output from "../components/Output"

export default function Home() {
  return (
    <>
      <Head>
        <title>Animated Gradient Background Generator</title>
        <meta
          name="description"
          content="A tool for creating animated background gradients in pure CSS."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SettingsProvider>
        <AnimatedBackground>
          <main style={{ textAlign: "center", padding: "32px 32px 0" }}>
            <h1 className="head" style={{ fontWeight: 100, padding: "16px", fontSize: "2.5em"}}>
              ANIMATED GRADIENT BACKGROUND GENERATOR
            </h1>
            <Controls />
            <Output />
          </main>
          <footer style={{ textAlign: "center", padding: "0 32px 64px" }}>
          <p>
              Created by{" "}
              <a href="https://github.com/kartikmehta8">Kartik Mehta</a>
            </p>
          </footer>
        </AnimatedBackground>
      </SettingsProvider>
    </>
  )
}