import {ChangeEvent} from "react";
import * as React from "react";
import {SelectValue} from "@mui/base/useSelect";


export const stringCallback = (fn: (state: string) => void) => (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    fn(e.target.value)
}
export const stringSelectCallback = (fn: (state: string) => void) => (e: React.MouseEvent | React.KeyboardEvent | React.FocusEvent | null, value: SelectValue<string, false>) => {
    fn(value || "")
}