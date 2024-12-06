import {FC, useCallback, useState} from "react";
import {useDropzone} from "react-dropzone"
import IconWrapper from "../icon/IconWrapper";
import {MdDriveFolderUpload} from "react-icons/md";
import {Image, Modal, ProgressBar} from "react-bootstrap";
import {MdDelete} from "react-icons/md";

interface Props {
    isRequired?: boolean;
    label?: string;
    text?: string;
    description?: string;
    fileSize?: number;
}

const CustomFileUpload: FC<Props> = ({isRequired = false, label, text, description, fileSize = 1}) => {
    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
    const [file, setFile] = useState<string | undefined>(undefined);
    const [show, setShow] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(0);
    const onDrop = useCallback(async (acceptedFiles: any) => {
        const file = acceptedFiles[0];
        if (file.size / (1024 * 1024) > fileSize) {
            setErrorMessage("File size allowed only 5MB");
            setLoading(false);
            return;
        } else {
            setLoading(true);
            setErrorMessage(undefined);
            let interval: NodeJS.Timeout;
            interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev < 100) return prev + 5;
                    clearInterval(interval);
                    return prev;
                })
            }, 100)
            setTimeout(() => {
                setLoading(false);
                setProgress(0);
                setFile(URL.createObjectURL(file));
            }, 3000)
        }
    }, [fileSize])

    const {getRootProps, getInputProps} = useDropzone({onDrop});

    return <div>
        {label && <p className="mb-1">{label} {isRequired && <span className="text-danger">*</span>}</p>}
        <div {...getRootProps({className: "dropzone border rounded-3 align-content-center"})}>
            <input {...getInputProps()}/>
            {(!file || loading) ? <div className="m-3">
                {loading ? <ProgressBar variant="primary" now={progress} animated/> : <>
                    <input {...getInputProps()}/>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <IconWrapper className="fs-3 text-primary mb-1"><MdDriveFolderUpload/></IconWrapper>
                        {text && <p className="fs-12px text-muted mb-0">{text}</p>}
                    </div>
                </>}
            </div> : <div className="d-flex align-items-end">
                <Image onClick={() => setShow(true)} className="cursor-pointer preview-file rounded-2" src={file}/>
                <IconWrapper className="cursor-pointer text-danger fs-4" onClick={() => setFile(undefined)}><MdDelete/></IconWrapper>
            </div>}
        </div>
        {description && <p className="fs-12px text-muted my-1">{description}</p>}
        {errorMessage && <p className="fs-12px text-danger">{errorMessage}</p>}
        <Modal centered show={show} onHide={() => setShow(false)}>
            <Image src={file}/>
        </Modal>
    </div>
}

export default CustomFileUpload