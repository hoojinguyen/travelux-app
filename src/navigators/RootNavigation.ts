import * as React from 'react';

export const navigationRef: any = React.createRef();

export function navigate(name: string, params: any): void {
  navigationRef.current?.navigate(name, params);
}
