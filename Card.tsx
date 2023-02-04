import * as React from 'react';

interface Advice {
  slip: Slip;
}

interface Slip {
  id: number;
  advice: string;
}

export default function Card() {
  const [advice, setAdvice] = React.useState<Advice>();

  React.useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then((resp) => resp.json())
      .then((resp) => setAdvice(resp))
      .catch((err) => console.log(err));
  }, []);

  const getAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then((resp) => resp.json())
      .then((resp) => setAdvice(resp))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {advice && (
        <div id="outer">
          <div id="inner">
            <h5>ADVICE #{advice.slip.id}</h5>
            <p>"{advice.slip.advice}"</p>
            <img src="https://raw.githubusercontent.com/AistisK22/Advice-generator-app/cd5edf04cec26940e44c994393523299a0a3e6f2/pattern-divider-desktop.svg" />
            <div id="try">
              <div onClick={() => getAdvice()} id="icon">
                <img src="https://raw.githubusercontent.com/AistisK22/Advice-generator-app/cd5edf04cec26940e44c994393523299a0a3e6f2/icon-dice.svg" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
