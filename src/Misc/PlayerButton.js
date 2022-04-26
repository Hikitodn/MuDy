import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

const PlayerButton = props => {
  const { iconType, size = 40, iconColor = '#303d49', onPress } = props;
  const getIconName = type => {
    switch (type) {
      case 'PLAY':
        return 'pause';
      case 'PAUSE':
        return 'play-arrow';
      case 'NEXT':
        return 'skip-next';
      case 'PREV':
        return 'skip-previous';
    }
  };
  return (
    <MaterialIcons
      {...props}
      onPress={onPress}
      name={getIconName(iconType)}
      size={size}
      color={iconColor}
    />
  );
};

export default PlayerButton;