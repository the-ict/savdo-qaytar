const BASIC_SEGMENT = {
  name: 'segment',
  totalStep: 3,
  needDefaultPointFigure: true,
  needDefaultXAxisFigure: true,
  needDefaultYAxisFigure: true,
  createPointFigures: ({ coordinates }: any) => {
    if (coordinates.length === 2) {
      return [{ type: 'line', attrs: { coordinates } }];
    }
    return [];
  },
};

const BASIC_RAY = {
  name: 'rayLine',
  totalStep: 3,
  needDefaultPointFigure: true,
  needDefaultXAxisFigure: true,
  needDefaultYAxisFigure: true,
  createPointFigures: ({ coordinates, bounding }: any) => {
    if (coordinates.length === 2) {
      let x2 = coordinates[1].x;
      let y2 = coordinates[1].y;
      if (coordinates[0].x !== coordinates[1].x) {
        const slope =
          (coordinates[1].y - coordinates[0].y) /
          (coordinates[1].x - coordinates[0].x);
        x2 = coordinates[1].x > coordinates[0].x ? bounding.width : 0;
        y2 = coordinates[0].y + (x2 - coordinates[0].x) * slope;
      }
      return [
        {
          type: 'line',
          attrs: { coordinates: [coordinates[0], { x: x2, y: y2 }] },
        },
      ];
    }
    return [];
  },
};

const BASIC_PRICE = {
  name: 'priceLine',
  totalStep: 2,
  needDefaultPointFigure: true,
  needDefaultXAxisFigure: true,
  needDefaultYAxisFigure: true,
  createPointFigures: ({ coordinates, bounding }: any) => {
    if (coordinates.length > 0) {
      return [
        {
          type: 'line',
          attrs: {
            coordinates: [
              { x: 0, y: coordinates[0].y },
              { x: bounding.width, y: coordinates[0].y },
            ],
          },
        },
      ];
    }
    return [];
  },
};

const BASIC_FIBONACCI = {
  name: 'fibonacciLine',
  totalStep: 3,
  needDefaultPointFigure: true,
  needDefaultXAxisFigure: true,
  needDefaultYAxisFigure: true,
  createPointFigures: ({ coordinates, bounding }: any) => {
    if (coordinates.length === 2) {
      const y1 = coordinates[0].y;
      const y2 = coordinates[1].y;
      const diff = y2 - y1;
      const ratios = [0, 0.236, 0.382, 0.5, 0.618, 0.786, 1];

      return ratios.map((ratio) => {
        const y = y1 + diff * ratio;
        return {
          type: 'line',
          attrs: {
            coordinates: [
              { x: 0, y },
              { x: bounding.width, y },
            ],
          },
          styles: {
            style: 'dashed',
            color: ratio === 0 || ratio === 1 ? '#fff' : '#6b7280',
          },
        };
      });
    }
    return [];
  },
};

const generateData = (count = 500, timeframe = '5M') => {
  let basePrice = 1.085;
  const data = [];
  const now = new Date();

  let msPerPeriod = 5 * 60 * 1000;
  if (timeframe === '1M') msPerPeriod = 1 * 60 * 1000;
  if (timeframe === '15M') msPerPeriod = 15 * 60 * 1000;
  if (timeframe === '1H') msPerPeriod = 60 * 60 * 1000;
  if (timeframe === '4H') msPerPeriod = 4 * 60 * 60 * 1000;
  if (timeframe === '1D') msPerPeriod = 24 * 60 * 60 * 1000;

  for (let i = count; i >= 0; i--) {
    const time = new Date(now.getTime() - i * msPerPeriod);
    const vol = Math.random() * (msPerPeriod / 100000000);
    const open = basePrice;
    const high = open + Math.random() * vol;
    const low = open - Math.random() * vol;
    const close =
      Math.random() > 0.5
        ? low + Math.random() * (high - low)
        : high - Math.random() * (high - low);

    data.push({
      timestamp: time.getTime(),
      open: parseFloat(open.toFixed(5)),
      high: parseFloat(high.toFixed(5)),
      low: parseFloat(low.toFixed(5)),
      close: parseFloat(close.toFixed(5)),
      volume: Math.floor(Math.random() * 1000),
    });
    basePrice = close;
  }
  return data;
};

export { BASIC_FIBONACCI, BASIC_PRICE, BASIC_RAY, BASIC_SEGMENT, generateData };
