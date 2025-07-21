/**
 * Resets the specified property of the target object to its default value.
 */

import { defaultValuesByPropery } from "./DefaultValuesByProperty"

export const resetToDefault = (target: any, property: string, subproperty: string, htmlElement: HTMLInputElement | ChildNode | null) => {
    switch (subproperty) {
        case 'x' : target.x = defaultValuesByPropery[property].toString();
            break;
        case 'y' : target.y = defaultValuesByPropery[property].toString();
            break;
        case 'z' : target.z = defaultValuesByPropery[property].toString();  
            break;
    }

    if (htmlElement instanceof HTMLInputElement) {
        (htmlElement as HTMLInputElement).value = defaultValuesByPropery[property].toString();
    }
}