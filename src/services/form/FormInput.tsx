import {FC, HTMLInputTypeAttribute} from "react";
import {Form} from "react-bootstrap"

interface Props {
    name: string;
    label?: string;
    placeholder?: string;
    type?: HTMLInputTypeAttribute;
    className?: string;
    disabled?: boolean;
    readonly?: boolean;
    formik?: any;
    isRequired?: boolean;
    onChange?: any;
}

const FormInput: FC<Props> = ({
                                  name,
                                  label = "",
                                  placeholder,
                                  type = "text",
                                  className = "",
                                  disabled = false,
                                  readonly = false,
                                  formik,
                                  isRequired = false,
                                  onChange
                              }) => {
    const value = formik.values[name];
    const formikError = formik.touched[name] && formik.errors[name];

    const handleBlur = () => formik.setFieldTouched(name, true);

    const handleChange = (e: any) => {
        if (onChange) onChange(e);
        else formik.setFieldValue(name, e.target.value);
    }

    return <>
        <Form.Group controlId={`control-${name}`} className={`mb-3 ${className}`}>
            <Form.Label className="mb-1">{label} {isRequired && <span className="text-danger">*</span>}</Form.Label>
            <Form.Control placeholder={placeholder} disabled={disabled} readOnly={readonly} type={type} value={value}
                          onChange={handleChange} onBlur={handleBlur} isInvalid={formikError}/>
            {formikError && <Form.Control.Feedback type="invalid">{formik.errors[name]}</Form.Control.Feedback>}
        </Form.Group>
    </>
}

export default FormInput