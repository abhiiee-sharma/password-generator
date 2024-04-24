import { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const [passLength, setPassLength] = useState(8);
  const [numberInclude, setNumberIncluded] = useState(false);
  const [charInclude, setCharInclude] = useState(false);
  const [pass, setPass] = useState("");

  const passwordGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberInclude) str += "0123456789";
    if (charInclude) str += "@#$&*(){}[]";

    for (let i = 1; i <= passLength; i++) {
      let bit = Math.floor(Math.random() * str.length);
      pass += str.charAt(bit);
    }

    setPass(pass);
  }, [passLength, numberInclude, charInclude]);

  useEffect(() => {
    passwordGen();
  }, [passLength, numberInclude, charInclude, passwordGen]);

  const copyPassword = () => {
    navigator.clipboard.writeText(pass).then(
      function () {
        alert("Password copied to clipboard!");
      },
      function (err) {
        console.error("Could not copy text: ", err);
      }
    );
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div
          style={{ backgroundColor: "#135D66" }}
          className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
        >
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#003C43" />
                <stop offset={1} stopColor="#003C43" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Secure Password
              <br />
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Say goodbye to weak passwords. Use our service to generate
              complex, randomized passwords. Copy them for instant security.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="https://www.linkedin.com/in/abhiiee/"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/abhiiee-sharma/password-generator"
                className="text-sm font-semibold leading-6 text-white"
              >
                Github Link <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div
            style={{ backgroundColor: "#003C43" }}
            className="relative mt-16 h-80 lg:mt-8 bg-gray-800 p-6 rounded-lg shadow-md absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 "
          >
            <h1 className="text-white text-2xl font-bold mb-4">
              Password Generator
            </h1>
            <div className="mb-4">
              <label
                htmlFor="length"
                className="block text-sm font-medium text-gray-300"
              >
                Password Length : {passLength}
              </label>
              <input
                type="range"
                min="8"
                max="30"
                value={passLength}
                onChange={(e) => setPassLength(e.target.value)}
                className="slider"
                id="length"
              />
            </div>
            <div className="mb-4 flex items-center space-x-4">
              <input
                type="checkbox"
                id="numbers"
                checked={numberInclude}
                onChange={() => setNumberIncluded(!numberInclude)}
                className="mr-2"
              />
              <label htmlFor="numbers" className="text-sm text-gray-300">
                Numbers
              </label>

              <input
                type="checkbox"
                id="characters"
                checked={charInclude}
                onChange={() => setCharInclude(!charInclude)}
                className="mr-2"
              />
              <label htmlFor="characters" className="text-sm text-gray-300">
                Characters
              </label>
            </div>
            <div className="mb-4">
              <input
                type="text"
                value={pass}
                readOnly
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <button
              onClick={copyPassword}
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
