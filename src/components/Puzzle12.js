import React, { useState, useEffect } from 'react';

const conversionFactors = {
  temperature: {
    celsius: {
      fahrenheit: (value) => value * 9/5 + 32,
    },
    fahrenheit: {
      celsius: (value) => (value - 32) * 5/9,
    }
  },
  length: {
    meter: {
      foot: (value) => value * 3.2808,
      inch: (value) => value * 39.3701,
    },
    foot: {
      meter: (value) => value / 3.2808,
      inch: (value) => value * 12,
    },
    inch: {
      meter: (value) => value / 39.3701,
      foot: (value) => value / 12,
    },
  },
  weight: {
    kilogram: {
      pound: (value) => value * 2.2046,
      ounce: (value) => value * 35.2739,
    },
    pound: {
      kilogram: (value) => value / 2.2046,
      ounce: (value) => value * 16,
    },
    ounce: {
      kilogram: (value) => value / 35.2739,
      pound: (value) => value / 16,
    },
  }
};

const Puzzle12 = () => {

  const [selectedMeasurement, setSelectedMeasurement] = useState(Object.keys(conversionFactors)[0]);
  const [input, setInput] = useState('');
  const [inputUnit, setInputUnit] = useState(Object.keys(conversionFactors[selectedMeasurement])[0]);
  const [output, setOutput] = useState('');
  const [outputUnit, setOutputUnit] = useState(Object.keys(conversionFactors[selectedMeasurement])[0]);

  const updateMeasurement = (e) => {
    const newMeasurement = e.target.value;
    setSelectedMeasurement(newMeasurement);
    setInputUnit(Object.keys(conversionFactors[newMeasurement])[0]);
    setOutputUnit(Object.keys(conversionFactors[newMeasurement])[0]);
    setInput('');
    setOutput('');
  }

  useEffect(() => {
    setOutput(inputUnit === outputUnit? input : conversionFactors[selectedMeasurement][inputUnit][outputUnit](input));
  }, [selectedMeasurement, inputUnit, outputUnit, input])

  return (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <div>
        <ul style={{ listStyleType: 'none' }}>
          {
            Object.keys(conversionFactors).map((measurement, idx) => (
              <li key={measurement}>
                <input id={measurement} type='radio' value={measurement} checked={measurement === selectedMeasurement} onChange={updateMeasurement}/>
                <label for={measurement}>{measurement}</label>
              </li>
            ))
          }
        </ul>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input type='number' value={input} onChange={(e) => setInput(Number(e.target.value))}/>
        <select value={inputUnit} onChange={(e) => setInputUnit(e.target.value)}>
          {
            Object.keys(conversionFactors[selectedMeasurement]).map((unit, idx) => (
              <option key={unit} value={unit}>{unit}</option>
            ))
          }
        </select>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input value={output} disabled/>
        <select value={outputUnit} onChange={(e) => setOutputUnit(e.target.value)}>
          {
            Object.keys(conversionFactors[selectedMeasurement]).map((unit, idx) => (
              <option key={unit} value={unit}>{unit}</option>
            ))
          }
        </select>
      </div>
    </div>
  );
};

export default Puzzle12;
