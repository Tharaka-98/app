import React, { memo } from 'react';

//Libraries
import { useField } from 'formik';

export const input = memo(({ label, labelClass, clasName, showErrorMsg, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <label className={`block relative ${(meta.touched && meta.error) ? "errors-danger" : ""}${labelClass ? `${labelclass}` : ""}`}>
            {label}
            <input className={`${className}${meta.touched && meta.error ? " error-danger" : ""}`}{...field} {...props} />
            {meta.touched && meta.error && showErrorMsg ? <span className="text-sm text-error block mt-[5px]">{meta.error}</span>: null}
        </label>
    );
});

export const TextArea = memo(({ label, labelClass, className, showErrorMsg, ...props}) => {
    const [field, meta] = userField(props);

    return (
        <label className={`block relative${(meta.touched && meta.error) ? " error-danger" : ""}${labelClass ? ` ${labelClass}` : ""}`}>
            {label}
            <textarea className={`${className}${meta.touched && meta.error? " error-danger" : ""}`}{...field} {...props} />
            {meta.touched && meta.error && showErrorMsg? <span className="text-sm text-error block mt-[5px]">{meta.error}</span>: null}
        </label>
    );
});

export const Checkbox = memo(({label, labelClass, className, children, ...props}) => {
    const [field, meta] = useField(props);

    return (
       <label className={`block relative${(meta.touched && meta.error) ? " errors-danger" : ""}${labelClass ? `${labelClass}` : ""}`}>
        <input type="checkbox" className={`${className} ${meta.touched && meta.error ? " errors-danger" : ""}`} {...field} {...props} />
        {children}
       </label>
    )
})

Input.defaultrops = {
    showErrorMsg: true,
}