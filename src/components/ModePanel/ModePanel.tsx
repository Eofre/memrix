import { type FC } from 'react';
import classes from './ModePanel.module.scss';
import { Wrapper } from '../Wrapper';
import { type INavigationItem } from '../../models/navigation-item.model';
import { ModeLink } from '../UI/ModeLink';

interface ModePanelProps {
  modes: INavigationItem[];
}

export const ModePanel: FC<ModePanelProps> = ({ modes }) => {
  return (
    <ul className={classes.panel}>
      {modes.map((mode) => (
        <ModeLink key={mode.id} item={mode} />
      ))}
    </ul>
  );
};
