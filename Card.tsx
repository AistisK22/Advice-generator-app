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
            <img src="https://raw.githubusercontent.com/msachs77/advicetool/a98267697f1b99b0f34d28908c5f4f0e1a9914a8/pattern-divider-desktop.svg" />
            <div id="try">
              <div onClick={() => getAdvice()} id="icon">
                <img src="https://raw.githubusercontent.com/msachs77/advicetool/a98267697f1b99b0f34d28908c5f4f0e1a9914a8/icon-dice.svg" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
