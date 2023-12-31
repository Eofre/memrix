/* eslint-disable react/jsx-no-target-blank */
import { type FC } from 'react';

import classes from './BurgerMenu.module.scss';
import { type INavigationItem } from '../../models/navigation-item.model';
import { NavItem } from '../UI/NavItem';
import {
  AiFillCloseCircle,
  AiFillGithub,
  AiOutlineCloseCircle,
  AiOutlineSmile
} from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { IconButton } from '../UI/IconButton';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { PiSmileyThin } from 'react-icons/pi';

interface BurgerMenuProps {
  items: INavigationItem[];
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerMenu: FC<BurgerMenuProps> = ({ items, active, setActive }) => {
  const handlerClick = () => setActive(false);
  const { t } = useTranslation();
  return (
    <div
      className={active ? [classes.burgerMenu, classes.active].join(' ') : classes.burgerMenu}
      onClick={() => setActive(false)}>
      <div className={classes.blur}></div>
      <div className={classes.content} onClick={(e) => e.stopPropagation()}>
        <div className={classes.close}>
          <IconButton onClick={handlerClick} variant="secondary" icon={<IoMdClose />} />
        </div>
        <ul>
          {items.map((item) => (
            <li key={item.id} onClick={handlerClick}>
              <NavItem navItem={item} />
            </li>
          ))}
        </ul>
        <div className={classes.links}>
          <span>{t('compliment')}</span>
          <PiSmileyThin size={35} />
        </div>
      </div>
    </div>
  );
};
