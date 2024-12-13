import React, {useRef, useState} from 'react';
import {Button, Text, View} from 'react-native';
import Svg, {Polygon} from 'react-native-svg';
import {SketchCanvas} from '@sourcetoad/react-native-sketch-canvas';
import Slider from '@react-native-community/slider';
import {styles} from './styles';

const isPointInPolygon = (point, polygon) => {
  let {x, y} = point;
  let isInside = false;

  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].x,
      yi = polygon[i].y;
    const xj = polygon[j].x,
      yj = polygon[j].y;

    const intersect =
      yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersect) isInside = !isInside;
  }

  return isInside;
};

const ListsScreen = () => {
  const [feedback, setFeedback] = useState('');
  const [isInside, setIsInside] = useState(false);
  const [strokeWidth, setStrokeWidth] = useState(4);
  const [strokeColor, setStrokeColor] = useState('red');
  const canvasRef = useRef(null);

  const handleStrokeWidthChange = value => {
    // setStrokeWidth(value);
  };

  const handleStrokeColorChange = color => {
    setStrokeColor(color);
  };

  const shapeCoordinates = [
    {x: 50, y: 50},
    {x: 150, y: 50},
    {x: 100, y: 150},
  ];

  const handleStrokeEnd = path => {
    console.log('🚀 ~ handleStrokeEnd ~ path:', path);
    if (path?.path?.data?.length) {
      const lastPoint = path.path.data[path.path.data.length - 1];
      console.log('🚀 ~ handleStrokeEnd ~ lastPoint:', lastPoint);
      const inside = isPointInPolygon(
        {x: lastPoint.x, y: lastPoint.y},
        shapeCoordinates,
      );
      console.log('🚀 ~ handleStrokeEnd ~ inside:', inside);
      setIsInside(inside);
      setFeedback(inside ? 'Inside the shape!' : 'Outside the shape!');
    } else {
      setFeedback('Draw something!');
    }
  };
  const handleClear = () => {
    canvasRef.current.clear();
    setFeedback('');
    setIsInside(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Draw Inside the Shape</Text>

      <Svg height="300" width="300" style={styles.svg}>
        <Polygon
          points={shapeCoordinates
            .map(point => `${point.x},${point.y}`)
            .join(' ')}
          fill="none"
          stroke="blue"
          strokeWidth="2"
        />
      </Svg>

      {/* Canvas for freehand drawing */}
      <SketchCanvas
        ref={canvasRef}
        style={styles.canvas}
        strokeColor={strokeColor}
        strokeWidth={strokeWidth}
        onStrokeEnd={handleStrokeEnd}
      />

      {/* Stroke Width Control */}
      <Text>Stroke Width: {strokeWidth}</Text>
      <Slider
        minimumValue={1}
        maximumValue={20}
        value={strokeWidth}
        onValueChange={handleStrokeWidthChange}
        onSlidingComplete={() => console.log('first')}
        style={styles.slider}
      />

      {/* Stroke Color Control */}
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          width: '80%',
          justifyContent: 'space-around',
        }}>
        <Button title="Red" onPress={() => handleStrokeColorChange('red')} />
        <Button title="Blue" onPress={() => handleStrokeColorChange('blue')} />
        <Button
          title="Green"
          onPress={() => handleStrokeColorChange('green')}
        />
        <Button title="Clear" onPress={handleClear} />
      </View>

      {/* Feedback */}
      <Text style={styles.feedback}>{feedback}</Text>
      {isInside && <View style={styles.insideBorder} />}
    </View>
  );
};

export default ListsScreen;
