// src/pages/DocsPage.tsx
import { motion } from "framer-motion";
import { Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

const codeSnippet = `
<div className="min-h-screen w-full bg-white dark:bg-black relative">
  {/* Your Selected Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
        background: "linear-gradient(135deg, #764ba2 0%,  #100f1f 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
  />
  
  {/* Your content goes here */}
</div>
`.trim();

const DocsPage = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast.success("Copied");
    } catch (err) {
      toast.error("Failed to copy");
      console.log(err);
      
    }
  };

  return (
    <div
      className="min-h-screen w-full px-4 py-20 md:px-8"
      style={{
        background: "linear-gradient(135deg, #764ba2 0%,  #100f1f 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="max-w-4xl mx-auto backdrop-blur-md bg-white/30 dark:bg-black/60 p-8 md:p-12 rounded-2xl shadow-xl text-foreground space-y-12 border border-white/20">
        <motion.h1
          className="text-4xl font-bold text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          📄 How to Apply Backgrounds
        </motion.h1>

        <motion.div
          className="space-y-10 text-base md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              🪄 Step 1: Select a Background
            </h2>
            <p className="">
              Browse and choose any background from the{" "}
              <strong>Backgrounds</strong> section. Once selected, click the{" "}
              <strong>“Copy Code”</strong> button to copy the
              Tailwind-compatible background setup.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              🧱 Step 2: Use in Your Layout
            </h2>
            <p className=" mb-4">
              Paste the copied code into your layout component. Example:
            </p>

            <div className="relative bg-zinc-800 text-white p-4 rounded-lg text-sm font-mono overflow-x-auto border border-white/10">
              <pre className="whitespace-pre-wrap">{codeSnippet}</pre>

              <button
                onClick={handleCopy}
                className="absolute top-3 right-3 text-white hover:text-emerald-400 transition"
              >
                {copied ? (
                  <span className="text-xs font-semibold">Copied!</span>
                ) : (
                  <Copy size={18} />
                )}
              </button>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              🌗 Dark Mode Support
            </h2>
            <p className="">
              All backgrounds are compatible with dark mode. Just use Tailwind’s{" "}
              <code className="bg-black/10 px-1 rounded">dark:</code> class
              handling, and the background will adapt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              🎨 Customizing Further
            </h2>
            <p className="">
              You can change the <code>background</code>, <code>blendMode</code>
              , or add overlays like grain, gradients, or animated textures for
              your unique look.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default DocsPage;
