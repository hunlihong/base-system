import {FC} from "react";
import {Button, Spinner} from "react-bootstrap"
import {ButtonVariant} from "react-bootstrap/esm/types";

interface Props {
    title?: string;
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    onClick?: any;
    type?: "button" | "reset" | "submit" | undefined;
    variant?: ButtonVariant;
}

const FormBtn: FC<Props> = ({
                                title = "Submit",
                                className = "",
                                disabled = false,
                                loading = false,
                                onClick,
                                type = "submit",
                                variant = "primary"
                            }) => {
    return <Button variant={variant} type={type} className={`form-btn ${className}`} disabled={disabled}
                   onClick={onClick}>
        {loading ? <Spinner variant="light" size="sm"/> : title}
    </Button>
}

export default FormBtn