import React, { useEffect, useState, Suspense, lazy } from "react";
import {
  buttonClasses,
  ButtonColor,
  ButtonColors,
  ButtonType,
  ButtonTypes,
  ButtonWidth,
  buttonWidthClasses,
} from "./button.constants";
import "./button.sass";
import { ButtonCSSClasses } from "./enums/button-css-class.enum";
import { AppTheme, AppThemes } from "../theme/types/types";
import { disabled as disabledConst } from "../globals.enum";
import { IconTypes } from "../IconTypes";
import Icon  from "../Icon/Icon";

export interface ButtonStoryProps {
  label: string;
  width?: ButtonWidth;
  color?: ButtonColor;
  type?: ButtonType;
  theme?: AppTheme;
  disabled?: boolean;
  icon?: IconTypes;
  trailingIcon?: IconTypes;
}

const ButtonStory = (props: ButtonStoryProps) => {
  const [buttonStyle, setbuttonStyle] = useState<string[]>([
    ButtonCSSClasses.BASE,
    buttonClasses.get(ButtonTypes.PRIMARY),
  ]);

  //   const [IconComponent, setIconComponent] = useState();
  const getSVGComponentNameFromSVGName = (svgName) => {
    const removedUndeScore = svgName.split("_");
    const toUpperCase = removedUndeScore.map(
      (i) => i.charAt(0).toUpperCase() + i.slice(1)
    );
    return toUpperCase.join("");
  };

  const { width, color, type, theme, disabled, icon, trailingIcon } = props;
  useEffect(() => {
    // const { width, color, type, theme, disabled, icon } = props;
    const changes: string[] = [ButtonCSSClasses.BASE, buttonClasses.get(type)];
    if (theme === AppThemes.DARK) {
      changes.push(ButtonCSSClasses.DARK_THEME);
    }
    if (color === ButtonColors.DANGER) {
      switch (type) {
        case ButtonTypes.PRIMARY:
          changes.push(ButtonCSSClasses.PRIMARY_DANGER);
          break;
        case ButtonTypes.SECONDARY:
          changes.push(ButtonCSSClasses.SECONDARY_DANGER);
          break;
        case ButtonTypes.SECONDARY_OUTLINE:
          changes.push(ButtonCSSClasses.SECONDARY_OUTLINE_DANGER);
          break;
        case ButtonTypes.TERTIARY:
          changes.push(ButtonCSSClasses.TERTIARY_DANGER);
          break;
        case ButtonTypes.ROUNDED:
          changes.push(ButtonCSSClasses.ROUNDED_DANGER);
          break;
      }
    }

    changes.push(buttonWidthClasses.get(width));

    disabled && changes.push(disabledConst);
    setbuttonStyle(changes);
  }, [props]);
  return (
    <button className={buttonStyle.join(" ")}>
      {trailingIcon && trailingIcon.length !== 0 && <Icon name={icon} />}

      {props.label}
      {(!trailingIcon || trailingIcon.length === 0) && <Icon name={icon} />}
      <Icon name={trailingIcon} />
    </button>
  );
};

export default ButtonStory;

